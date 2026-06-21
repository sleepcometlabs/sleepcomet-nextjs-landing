import type { Metadata } from "next"
import { Section } from "@/components/ui/section"
import { ContactContent } from "./contact-content"

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com o Sleepcomet. Email, redes sociais e formulário para suporte, parcerias e imprensa.",
  openGraph: {
    title: "Contato | Sleepcomet",
    description: "Fale com a equipe Sleepcomet. Estamos prontos para ajudar.",
  },
}

export default function Contato() {
  return (
    <div className="pt-20">
      <Section className="text-center">
        <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">Contato</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
          Tem uma dúvida, sugestão ou quer bater um papo? Escolha o canal ideal.
        </p>
      </Section>

      <ContactContent />
    </div>
  )
}
