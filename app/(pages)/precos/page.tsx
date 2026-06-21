import type { Metadata } from "next"
import { Pricing } from "@/components/landing/pricing"

export const metadata: Metadata = {
  title: "Preços",
  description:
    "Planos do Sleepcomet para criadores de conteúdo. Comece grátis sem cartão de crédito. Assinaturas a partir de $19/mês.",
  openGraph: {
    title: "Preços | Sleepcomet",
    description:
      "Planos acessíveis para criadores. Teste grátis e cancele quando quiser.",
  },
}

export default function PrecosPage() {
  return (
    <div className="pt-20">
      <Pricing />
    </div>
  )
}
