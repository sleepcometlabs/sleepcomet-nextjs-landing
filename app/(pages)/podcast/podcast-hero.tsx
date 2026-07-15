"use client"

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { LiquidBackground } from "@/components/liquid-background"
import { UrlCapturePill } from "@/components/landing/url-capture-pill"

export const PODCAST_ROTATING_MESSAGES = [
  "Cole o link do episódio",
  "Reconhecendo cada voz...",
  "Encontramos 8 momentos virais",
  "Gerando legendas automáticas...",
  "Seus cortes estão prontos 🎙️",
]

export function PodcastHero() {
  return (
    <section id="hero" className="relative -mt-16 overflow-hidden bg-background px-4 py-20 sm:py-28">

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
              ✦ IA que entende o ritmo da entrevista
            </span>
          </AnimatedShinyText>
        </div>

        <h1 className="text-3xl leading-tight font-bold tracking-tight sm:text-6xl md:text-6xl">
          Corte seu podcast
          <br />
          <span className="bg-linear-to-r from-brand to-brand/60 bg-clip-text text-transparent">
            em clipes virais, sem editar nada
          </span>
        </h1>

        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
          Cole o link do episódio. Nossa IA reconhece cada voz da conversa,
          encontra os melhores momentos e devolve os cortes prontos com
          legenda sincronizada — pra TikTok, Reels e Shorts. Comece grátis
          sem cartão de crédito.
        </p>

        <UrlCapturePill className="w-full px-4 sm:px-0" messages={PODCAST_ROTATING_MESSAGES} />

      </div>
    </section>
  )
}
