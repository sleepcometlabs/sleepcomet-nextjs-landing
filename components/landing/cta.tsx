"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ShimmerButton } from "@/components/ui/shimmer-button"

export function Cta() {
  return (
    <section className="px-4 py-16 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <h2 className="text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
          Comece a cortar vídeo com IA agora
        </h2>
        <p className="max-w-md text-muted-foreground">
          Crie clipes virais para TikTok, Reels e Shorts em segundos. Plano grátis disponível, sem cartão de crédito.
        </p>
        <Link href="/precos">
          <ShimmerButton className="gap-2">
            Ver planos <ArrowRight className="size-4" />
          </ShimmerButton>
        </Link>
      </div>
    </section>
  )
}
