import type { Metadata } from "next"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Como funciona",
  description:
    "Veja como o Sleepcomet transforma vídeos longos em clipes virais: upload, transcrição com IA, detecção de cenas e exportação em segundos. Acesse em app.sleepcomet.com.",
  openGraph: {
    title: "Como funciona | Sleepcomet",
    description:
      "Sleepcomet analisa, transcreve e extrai os melhores momentos do seu vídeo automaticamente.",
  },
}

const steps = [
  {
    number: "01",
    title: "Faça upload ou cole um link",
    description:
      "Envie seu vídeo em MP4, MOV ou cole um link do YouTube. O Sleepcomet baixa o vídeo automaticamente via yt-dlp e inicia o processamento.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    number: "02",
    title: "Transcrição do áudio",
    description:
      "O áudio é transcrito com Faster-Whisper em português. Cada palavra recebe um timestamp preciso, permitindo sincronia exata entre fala e legenda.",
    gradient: "from-purple-500 to-pink-400",
  },
  {
    number: "03",
    title: "Análise e detecção de cenas",
    description:
      "A transcrição é analisada por palavras-chave de hook, emoção e contraste. Simultaneamente, o OpenCV detecta mudanças de cena e picos de movimento quadro a quadro.",
    gradient: "from-amber-500 to-orange-400",
  },
  {
    number: "04",
    title: "Seleção dos melhores momentos",
    description:
      "Combinamos pontuação por palavras-chave, posição das cenas e intensidade de movimento para selecionar até 10 clipes de 15 a 60 segundos cada.",
    gradient: "from-green-500 to-emerald-400",
  },
  {
    number: "05",
    title: "Clipes prontos no dashboard",
    description:
      "Cada clipe é extraído com ffmpeg, recebe legendas queimadas e thumbnail. Tudo disponível para download ou visualização.",
    gradient: "from-rose-500 to-red-400",
  },
]

const pipelineSteps = [
  {
    title: "Download e extração",
    description:
      "O vídeo é baixado via yt-dlp (URL) ou recebido por upload direto. O áudio é extraído em WAV mono 16kHz para transcrição.",
  },
  {
    title: "Transcrição com Whisper",
    description:
      "Faster-Whisper transcreve o áudio em português com timestamps word-level. As palavras são agrupadas em blocos de legenda de até 42 caracteres por linha.",
  },
  {
    title: "Pontuação de segmentos",
    description:
      "Cada segmento da transcrição é analisado por categorias de palavras: emoção, hooks, contrastes, perguntas e chamadas para ação. Cada categoria gera uma pontuação parcial.",
  },
  {
    title: "Detecção de cenas",
    description:
      "OpenCV compara frames consecutivos para detectar mudanças de cena. Uma função de motion peak identifica picos de movimento ao longo do vídeo.",
  },
  {
    title: "Seleção combinada",
    description:
      "As pontuações de viralidade, proximidade de cenas detectadas e intensidade de movimento são combinadas. Os top 10 momentos são selecionados para extração.",
  },
  {
    title: "Geração e armazenamento",
    description:
      "ffmpeg corta cada clipe no intervalo selecionado, queima as legendas no vídeo e gera uma thumbnail.",
  },
]

export default function ComoFunciona() {
  return (
    <div className="pt-20">
      <Section className="text-center">
        <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
          Como funciona o <span className="text-primary">Sleepcomet</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Do upload aos clipes prontos em minutos. Transcrição, análise e corte automatizados.
        </p>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl space-y-16">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <span
                className={cn(
                  "inline-block w-fit bg-gradient-to-r bg-clip-text text-7xl font-black leading-none text-transparent",
                  step.gradient,
                )}
              >
                {step.number}
              </span>
              <h2 className="mt-2 text-2xl font-semibold">{step.title}</h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold">Pipeline técnico</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            As etapas que seu vídeo percorre até virar clipes prontos.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pipelineSteps.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border bg-card p-6 transition-colors hover:border-primary/30"
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold">Pronto para criar seus primeiros clipes?</h2>
          <p className="mt-3 text-muted-foreground">
            Teste grátis por 7 dias, sem cartão de crédito.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button size="lg">Começar agora</Button>
            <Button size="lg" variant="outline">
              Ver planos
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
