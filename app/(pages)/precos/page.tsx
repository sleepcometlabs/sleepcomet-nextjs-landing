import type { Metadata } from "next"
import { Pricing } from "@/components/landing/pricing"
import { PricingComparison } from "@/components/landing/pricing-comparison"
import { Cta } from "@/components/landing/cta"
import { APP_URL } from "@/lib/config"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sleepcomet.com"

export const metadata: Metadata = {
  title: "Preços — Planos de Clipagem com IA a partir de $0 (Grátis)",
  description:
    "Planos do Sleepcomet para criar clipes com IA. Comece grátis sem cartão de crédito. Creator a partir de $19/mês, Pro a partir de $39/mês. Compare planos e economize 20% no anual.",
  keywords: [
    "preço clipagem com IA",
    "planos de clipagem automática",
    "ferramenta de clipagem preço",
    "editor de vídeo com IA preço",
    "sleepcomet planos",
    "clipagem IA grátis",
    "criar clipes barato",
    "assinar clipagem com IA",
  ],
  openGraph: {
    title: "Preços — Planos de Clipagem com IA a partir de $0 | Sleepcomet",
    description:
      "Planos acessíveis para criadores. Comece grátis, cancele quando quiser. Economize 20% no plano anual.",
    url: `${siteUrl}/precos/`,
  },
  alternates: {
    canonical: `${siteUrl}/precos/`,
  },
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Planos do Sleepcomet",
  description: "Planos de assinatura para clipagem automática com inteligência artificial.",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Sleepcomet Free",
        description: "Plano gratuito com 30 créditos por mês, clipes de até 60 segundos e marca d'água.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Sleepcomet Creator",
        description: "Plano para criadores com 300 créditos/mês, Full HD e sem marca d'água.",
        offers: {
          "@type": "Offer",
          price: "19",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "19",
            priceCurrency: "USD",
            billingDuration: "P1M",
          },
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "Sleepcomet Pro",
        description: "Plano profissional com 1.000 créditos/mês, 4K, GPU dedicada e suporte prioritário.",
        offers: {
          "@type": "Offer",
          price: "39",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "39",
            priceCurrency: "USD",
            billingDuration: "P1M",
          },
          availability: "https://schema.org/InStock",
        },
      },
    },
  ],
}

export default function PrecosPage() {
  return (
    <div className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Pricing />
      <PricingComparison />
      <Cta
        title="Ainda em dúvida sobre qual plano escolher?"
        description="Comece no plano grátis, sem cartão de crédito, e faça upgrade quando precisar de mais créditos."
        href={APP_URL}
        label="Começar grátis"
      />
    </div>
  )
}
