import { cn } from "@/lib/utils"
import { Sparkles, Film, Zap, Crop, Share2, Languages, Clock, Repeat2 } from "lucide-react"

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Detecção automática",
      description: "IA identifica os melhores momentos do seu vídeo sem você precisar assistir tudo.",
      icon: <Sparkles />,
    },
    {
      title: "Múltiplos formatos",
      description: "Clipes nos formatos ideais para cada rede social: vertical, quadrado e paisagem.",
      icon: <Film />,
    },
    {
      title: "Processamento rápido",
      description: "Em média 30 segundos por minuto de vídeo. Seu tempo é precioso.",
      icon: <Zap />,
    },
    {
      title: "Edição manual",
      description: "Ajuste os cortes manualmente depois da análise da IA. Você no controle.",
      icon: <Crop />,
    },
    {
      title: "Export direto",
      description: "Baixe ou publique diretamente nas redes sociais integradas.",
      icon: <Share2 />,
    },
    {
      title: "Legendas automáticas",
      description: "Transcrição e legendas geradas automaticamente em vários idiomas.",
      icon: <Languages />,
    },
    {
      title: "Export em lote",
      description: "Processe vários vídeos de uma vez e exporte todos os clipes juntos.",
      icon: <Repeat2 />,
    },
    {
      title: "Histórico completo",
      description: "Acesse todos os seus clipes já criados a qualquer momento.",
      icon: <Clock />,
    },
  ]
  return (
    <section id="recursos" className="px-4 py-16 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
            Ferramentas de IA para cortar vídeo e criar clipes
          </h2>
          <p className="text-muted-foreground">
            Tudo que você precisa para transformar vídeos longos em clipes virais automaticamente.
          </p>
        </div>

        <div className="relative z-10 mx-auto grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string
  description: string
  icon: React.ReactNode
  index: number
}) => {
  return (
    <div
      className={cn(
        "flex flex-col border-border/40 py-10 lg:border-r",
        (index === 0 || index === 4) && "lg:border-l",
        index < 4 && "lg:border-b"
      )}
    >
      <div className="relative z-10 mb-4 px-10 text-muted-foreground">
        {icon}
      </div>
      <div className="relative z-10 mb-2 px-10 text-lg font-bold">
        <div className="absolute inset-y-0 left-0 h-6 w-1 rounded-r-full bg-border/60" />
        <span className="inline-block text-foreground">{title}</span>
      </div>
      <p className="relative z-10 max-w-xs px-10 text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  )
}
