"use client"

import Image from "next/image"
import { UrlCapturePill } from "@/components/landing/url-capture-pill"

export const PODCAST_ROTATING_MESSAGES = [
  "Cole o link do vídeo no YouTube",
  "Reconhecendo cada voz...",
  "Encontramos 8 momentos virais",
  "Gerando legendas automáticas...",
  "Seus cortes estão prontos 🎙️",
]

export function PodcastHero() {
  return (
    <section id="hero" className="relative isolate -mt-16 overflow-hidden bg-black px-4 pt-36 pb-20 sm:pb-28">

      {/* GLOW */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand/25 blur-[140px]"
      />

      {/* ARCO — mesmo asset do hero da Home (public/hero-arc.webp) */}
      <Image
        src="/hero-arc.webp"
        alt=""
        aria-hidden="true"
        width={1728}
        height={600}
        priority
        fetchPriority="high"
        unoptimized
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-auto w-[1200px] max-w-none -translate-x-1/2 sm:w-[1800px] lg:w-[2400px]"
      />

      {/* FADE */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-black to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">

        <h1 className="text-3xl leading-tight font-bold tracking-tight text-white sm:text-6xl md:text-6xl">
          Corte seu podcast
          <br />
          <span className="bg-linear-to-r from-brand to-brand/60 bg-clip-text text-transparent">
            em clipes virais, sem editar nada
          </span>
        </h1>

        <p className="max-w-3xl text-base text-muted-foreground sm:text-lg">
          Cole o link do YouTube. Nossa IA reconhece cada voz da conversa e encontra
          <br />
          os melhores momentos — cortes prontos com legenda, sem cartão de crédito.
        </p>

        <UrlCapturePill className="w-full px-4 sm:px-0" messages={PODCAST_ROTATING_MESSAGES} />

      </div>
    </section>
  )
}
