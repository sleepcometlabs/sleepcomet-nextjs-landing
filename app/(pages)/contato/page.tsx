import type { Metadata } from "next"
import { Section } from "@/components/ui/section"
import { ContactContent } from "./contact-content"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sleepcomet.com"

export const metadata: Metadata = {
  title: "Contato — Fale com o Sleepcomet",
  description:
    "Entre em contato com o Sleepcomet para suporte, parcerias, sugestões ou imprensa. Resposta em até 24 horas.",
  keywords: [
    "contato sleepcomet",
    "suporte sleepcomet",
    "falar com sleepcomet",
    "email sleepcomet",
    "parceria sleepcomet",
  ],
  openGraph: {
    title: "Contato — Fale com o Sleepcomet",
    description: "Fale com a equipe Sleepcomet. Estamos prontos para ajudar.",
    url: `${siteUrl}/contato/`,
  },
  alternates: {
    canonical: `${siteUrl}/contato/`,
  },
}

export default function Contato() {
  return (
    <div>
      <Section className="relative isolate -mt-16 overflow-hidden pt-24 pb-16 text-center sm:pb-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand/25 blur-[120px]"
        />
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Contato</h1>
          <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
            Tem uma dúvida, sugestão ou quer bater um papo?
            <br />
            Escolha o canal ideal.
          </p>
        </div>
      </Section>

      <ContactContent />
    </div>
  )
}
