"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ShimmerButton } from "@/components/ui/shimmer-button"

interface CtaProps {
  title?: string
  description?: string
  href?: string
  label?: string
}

export function Cta({
  title = "Comece a cortar vídeo com IA agora",
  description = "Crie clipes virais para TikTok, Reels e Shorts em segundos. Plano grátis disponível, sem cartão de crédito.",
  href = "/precos",
  label = "Ver planos",
}: CtaProps) {
  return (
    <section className="px-4 py-16 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <h2 className="text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-md text-muted-foreground">{description}</p>
        <Link href={href}>
          <ShimmerButton className="gap-2">
            {label} <ArrowRight className="size-4" />
          </ShimmerButton>
        </Link>
      </div>
    </section>
  )
}
