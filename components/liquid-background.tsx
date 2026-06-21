'use client';

import React, { useId, CSSProperties } from 'react';

interface AnimationConfig {
    scale: number;
    speed: number;
}

interface NoiseConfig {
    opacity: number;
    scale: number;
}

interface ShadowOverlayProps {
    sizing?: 'fill' | 'stretch';
    color?: string;
    animation?: AnimationConfig;
    noise?: NoiseConfig;
    style?: CSSProperties;
    className?: string;
}

function mapRange(
    value: number,
    fromLow: number,
    fromHigh: number,
    toLow: number,
    toHigh: number
): number {
    if (fromLow === fromHigh) return toLow;
    return ((value - fromLow) / (fromHigh - fromLow)) * (toHigh - toLow) + toLow;
}

const useInstanceId = (): string => {
    const id = useId();
    return `shadowoverlay-${id.replace(/:/g, "")}`;
};

export function LiquidBackground({
    sizing = 'fill',
    color = 'rgba(128, 128, 128, 1)',
    animation,
    noise,
    style,
    className
}: ShadowOverlayProps) {
    const id = useInstanceId();
    const animationEnabled = animation && animation.scale > 0;
    const displacementScale = animation ? mapRange(animation.scale, 1, 100, 20, 100) : 0;
    const animDuration = animation ? mapRange(animation.speed, 1, 100, 40, 2) : 4;

    return (
        <div
            className={className}
            style={{
                overflow: "hidden",
                position: "relative",
                width: "100%",
                height: "100%",
                ...style
            }}
        >
            <div
                style={{
                    position: "absolute",
                    inset: -40,
                    transform: "scale(1.2)",
                    willChange: "transform",
                    filter: animationEnabled ? `url(#${id}) blur(4px)` : "none"
                }}
            >
                {animationEnabled && (
                    <svg style={{ position: "absolute", width: 0, height: 0 }}>
                        <defs>
                            <filter id={id}>
                                <feTurbulence
                                    result="undulation"
                                    numOctaves="1"
                                    baseFrequency={`${mapRange(animation.scale, 0, 100, 0.001, 0.0005)},${mapRange(animation.scale, 0, 100, 0.004, 0.002)}`}
                                    seed="0"
                                    type="turbulence"
                                >
                                    <animate
                                        attributeName="baseFrequency"
                                        values={`${mapRange(animation.scale, 0, 100, 0.001, 0.0005)},${mapRange(animation.scale, 0, 100, 0.004, 0.002)};${mapRange(animation.scale, 0, 100, 0.008, 0.004)},${mapRange(animation.scale, 0, 100, 0.002, 0.001)};${mapRange(animation.scale, 0, 100, 0.001, 0.0005)},${mapRange(animation.scale, 0, 100, 0.004, 0.002)}`}
                                        dur={`${animDuration}s`}
                                        repeatCount="indefinite"
                                    />
                                </feTurbulence>
                                <feColorMatrix
                                    in="undulation"
                                    type="hueRotate"
                                    values="0"
                                >
                                    <animate
                                        attributeName="values"
                                        from="0"
                                        to="360"
                                        dur={`${animDuration}s`}
                                        repeatCount="indefinite"
                                    />
                                </feColorMatrix>
                                <feColorMatrix
                                    in="undulation"
                                    result="circulation"
                                    type="matrix"
                                    values="4 0 0 0 1  4 0 0 0 1  4 0 0 0 1  1 0 0 0 0"
                                />
                                <feDisplacementMap
                                    in="SourceGraphic"
                                    in2="circulation"
                                    scale={displacementScale}
                                    result="dist"
                                />
                                <feDisplacementMap
                                    in="dist"
                                    in2="undulation"
                                    scale={displacementScale}
                                    result="output"
                                >
                                    <animate
                                        attributeName="scale"
                                        values={`${displacementScale};${displacementScale + 5};${displacementScale}`}
                                        dur={`${animDuration * 0.7}s`}
                                        repeatCount="indefinite"
                                    />
                                </feDisplacementMap>
                            </filter>
                        </defs>
                    </svg>
                )}
                <div
                    style={{
                        backgroundColor: color,
                        maskImage: `url('/mask.webp')`,
                        maskSize: sizing === "stretch" ? "100% 100%" : "cover",
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        width: "100%",
                        height: "100%"
                    }}
                />
            </div>

            {noise && noise.opacity > 0 && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url("/noise.webp")`,
                        backgroundSize: noise.scale * 200,
                        backgroundRepeat: "repeat",
                        opacity: noise.opacity / 2
                    }}
                />
            )}
        </div>
    );
}