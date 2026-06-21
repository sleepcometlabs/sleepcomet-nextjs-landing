"use client"

import posthog from "posthog-js"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "O que é o Sleepcomet?",
    a: "Sleepcomet é uma ferramenta com inteligência artificial que analisa seus vídeos, identifica os melhores momentos e gera clipes prontos para publicar em redes sociais como TikTok, Instagram Reels, YouTube Shorts e Facebook.",
  },
  {
    q: "Como cortar vídeo com inteligência artificial?",
    a: "O Sleepcomet usa IA para transcrever o áudio, detectar mudanças de cena e pontuar os melhores momentos automaticamente. Você faz upload do vídeo e a plataforma gera clipes prontos em segundos.",
  },
  {
    q: "Como a IA encontra os melhores momentos do vídeo?",
    a: "Nossa IA analisa padrões de áudio, movimento, expressões faciais e engajamento para detectar os destaques do seu vídeo automaticamente. Você também pode ajustar manualmente os cortes.",
  },
  {
    q: "Quais formatos de vídeo são suportados?",
    a: "Aceitamos MP4, MOV, AVI, WebM e outros formatos comuns. Os clipes são exportados em MP4 com resolução de até 4K, otimizados para cada plataforma.",
  },
  {
    q: "Posso usar o Sleepcomet de graça?",
    a: "Sim! O plano Free oferece 30 créditos por mês para você processar seus vídeos (1 crédito = 1 minuto de vídeo), com clipes de até 60 segundos, marca d'água Sleepcomet e acesso ao suporte da comunidade no Discord. Sem compromisso.",
  },
  {
    q: "Quanto tempo leva para processar um vídeo?",
    a: "O processamento leva em média 30 segundos para cada minuto de vídeo. Vídeos mais longos podem demorar um pouco mais.",
  },
  {
    q: "O Sleepcomet adiciona marca d'água?",
    a: "Apenas no plano Free. Nos planos Creator, Pro e Enterprise todos os clipes saem sem marca d'água.",
  },
  {
    q: "Posso cancelar minha assinatura?",
    a: "Sim, você pode cancelar quando quiser. Seu acesso continua até o fim do período já pago.",
  },
]

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
}

export function FAQSection() {
  return (
    <section id="faq" className="px-4 py-16 sm:py-28">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
            Perguntas frequentes
          </h2>
          <p className="text-muted-foreground">
            Tudo que você precisa saber sobre o Sleepcomet.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full"
          onValueChange={(value) => {
            if (value) {
              const index = parseInt(value.replace("item-", ""), 10)
              posthog.capture("faq_item_expanded", { question: faqs[index]?.q })
            }
          }}
        >
          {faqs.map((faq, i) => (
            <AccordionItem value={`item-${i}`} key={i}>
              <AccordionTrigger className="text-left text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
