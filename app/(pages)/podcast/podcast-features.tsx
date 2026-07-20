import { Section } from "@/components/ui/section"

const features = [
  {
    title: "Detecta cada voz da conversa",
    description:
      "A IA identifica host e convidado separadamente, então entende de verdade o ritmo da entrevista — não só corta por silêncio.",
    icon: "🎙️",
  },
  {
    title: "Corta entrevistas e episódios longos",
    description:
      "Funciona em episódios de horas, não só vídeos curtos. Cole o link e a IA processa a gravação inteira.",
    icon: "⏱️",
  },
  {
    title: "Legenda automática, sincronizada",
    description:
      "Cada corte já sai com legenda queimada e sincronizada palavra por palavra, pronta pra postar sem retrabalho.",
    icon: "💬",
  },
  {
    title: "Agenda a publicação pra você",
    description:
      "Depois de gerados, os clipes podem ser agendados direto pro TikTok, Reels e Shorts, sem sair da plataforma.",
    icon: "📅",
  },
]

export function PodcastFeatures() {
  return (
    <Section>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Feito pra quem grava conversa de verdade
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Não é uma ferramenta genérica de corte — entende podcast, entrevista
          e programa de conversa.
        </p>
      </div>
      <div className="mx-auto mt-10 max-w-5xl border-fade">
        <div className="grid sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-none border border-white/10 p-6"
            >
              <span className="text-3xl">{feature.icon}</span>
              <h3 className="mt-4 font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
