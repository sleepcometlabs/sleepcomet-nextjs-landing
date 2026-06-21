"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import posthog from "posthog-js"
import { ShimmerButton } from "@/components/ui/shimmer-button"

export function Cta() {
  return (
    <section className="px-4 py-16 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <h2 className="text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
          Pronto para transformar seus vídeos?
        </h2>
        <p className="max-w-sm text-muted-foreground">
          Crie clipes virais em segundos com IA. Comece grátis, sem cartão de crédito.
        </p>
        <Link href="/precos" onClick={() => posthog.capture("cta_clicked", { location: "bottom_cta" })}>
          <ShimmerButton className="gap-2">
            Ver planos <ArrowRight className="size-4" />
          </ShimmerButton>
        </Link>
      </div>
    </section>
  )
}
