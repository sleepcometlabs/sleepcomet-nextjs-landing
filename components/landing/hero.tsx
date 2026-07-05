"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { AvatarCircles } from "@/components/ui/avatar-circles"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { LiquidBackground } from "../liquid-background"
import { APP_URL } from "@/lib/config"

const avatars = [
  { imageUrl: "https://i.pravatar.cc/80?u=1", profileUrl: "#" },
  { imageUrl: "https://i.pravatar.cc/80?u=2", profileUrl: "#" },
  { imageUrl: "https://i.pravatar.cc/80?u=3", profileUrl: "#" },
  { imageUrl: "https://i.pravatar.cc/80?u=4", profileUrl: "#" },
  { imageUrl: "https://i.pravatar.cc/80?u=5", profileUrl: "#" },
]

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 pt-20">

      {/* BACKGROUND ANIMATION */}
      <div className="absolute inset-0">
        <LiquidBackground
          sizing="fill"
          animation={{
            scale: 100,
            speed: 70,
          }}
          noise={{
            opacity: 0.15,
            scale: 1,
          }}
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-background/40" />

      {/* FADE */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-background to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">

        <div className="inline-flex items-center justify-center rounded-full border border-border/40 bg-background/50 px-4 py-1 backdrop-blur-sm">
          <AnimatedShinyText shimmerWidth={120}>
            <span className="text-xs font-medium tracking-wide">
              ✦ IA que encontra os melhores momentos
            </span>
          </AnimatedShinyText>
        </div>

        <h1 className="text-3xl leading-tight font-bold tracking-tight sm:text-6xl md:text-6xl">
          Cortar vídeo com IA
          <br />
          <span className="bg-linear-to-r from-brand to-brand/60 bg-clip-text text-transparent">
            crie clipes virais em segundos
          </span>
        </h1>

        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
          Inteligência artificial que analisa seus vídeos, encontra os melhores
          momentos e gera clipes prontos para TikTok, Instagram Reels e YouTube
          Shorts. Comece grátis sem cartão de crédito.
        </p>

        <div className="flex items-center gap-4">
          <Link href={APP_URL}>
            <ShimmerButton className="gap-2">
              Começar grátis
              <ArrowRight className="size-4" />
            </ShimmerButton>
          </Link>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <AvatarCircles
            avatarUrls={avatars}
            numPeople={1200}
            className="scale-90"
          />

          <span className="text-xs text-muted-foreground">
            Mais de <strong className="text-foreground/80">1.200</strong> criadores usam
          </span>
        </div>
      </div>
    </section>
  )
}