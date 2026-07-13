import type { Metadata } from "next"
import { Section } from "@/components/ui/section"
import { BreadcrumbList } from "@/components/seo/breadcrumb-list"
import { ContactContent } from "./contact-content"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sleepcomet.com"

export const metadata: Metadata = {
  title: "Contato — Fale com o SleepComet",
  description:
    "Entre em contato com o SleepComet para suporte, parcerias, sugestões ou imprensa. Resposta em até 24 horas.",
  keywords: [
    "contato sleepcomet",
    "suporte sleepcomet",
    "falar com sleepcomet",
    "email sleepcomet",
    "parceria sleepcomet",
  ],
  openGraph: {
    title: "Contato — Fale com o SleepComet",
    description: "Fale com a equipe SleepComet. Estamos prontos para ajudar.",
    url: `${siteUrl}/contato/`,
  },
  alternates: {
    canonical: `${siteUrl}/contato/`,
  },
}

export default function Contato() {
  return (
    <div className="pt-20">
      <Section className="text-center">
        <div className="mx-auto max-w-4xl">
          <BreadcrumbList items={[{ name: "Contato", url: `${siteUrl}/contato/` }]} />
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">Contato</h1>
          <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
            Tem uma dúvida, sugestão ou quer bater um papo? Escolha o canal ideal.
          </p>
        </div>
      </Section>

      <ContactContent />
    </div>
  )
}
