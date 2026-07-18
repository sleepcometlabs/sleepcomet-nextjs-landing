"use client"

import Image from "next/image"
import { UrlCapturePill } from "./url-capture-pill"

export function Hero() {
  return (
    // bg-black fixo (não bg-background) — a referência usa preto puro
    // (#000), não o cinza bem escuro do token de tema padrão.
    // isolate é essencial aqui: sem um contexto de empilhamento próprio, o
    // -z-10 do arco escapa pro contexto do <body> e a PRÓPRIA section (que
    // não tem z-index, só position:relative) pinta seu bg-black por cima do
    // arco — era exatamente esse o bug do arco "sumido".
    <section id="hero" className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 pt-20">

      {/* GLOW EM ARCO — asset com fundo já transparente (ver
          public/hero-arc.png), só o traço/brilho roxo por cima do preto.
          <img> em vez de background-image: mais previsível de depurar. */}
      <Image
        src="/hero-arc.png"
        alt=""
        aria-hidden="true"
        width={1728}
        height={600}
        priority
        unoptimized
        className="pointer-events-none absolute left-1/2 top-[49%] -z-10 h-auto w-[2400px] max-w-none -translate-x-1/2"
      />

      {/* FADE */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-black to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex max-w-6xl -translate-y-16 flex-col items-center gap-8 text-center">

        <h1 className="max-w-4xl text-3xl leading-tight font-bold tracking-tight text-white sm:text-6xl md:text-6xl">
          Transforme vídeos longos
          <br />
          em cortes virais com IA.
        </h1>

        <p className="max-w-3xl text-base text-muted-foreground sm:text-lg">
          Cole um link do YouTube, Twitch ou envie um vídeo. Nossa IA encontra automaticamente
          <br />
          os melhores momentos, gera legendas e deixa tudo pronto para publicar.
        </p>

        <UrlCapturePill variant="dark" className="w-full px-4 sm:px-0" />

      </div>
    </section>
  )
}