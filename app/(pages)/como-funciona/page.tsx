import type { Metadata } from "next"
import Link from "next/link"
import { Section } from "@/components/ui/section"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { cn } from "@/lib/utils"
import { HowToSchema } from "@/components/seo/how-to-schema"
import { APP_URL } from "@/lib/config"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sleepcomet.com"

export const metadata: Metadata = {
  title: "Como Funciona — Cortar Vídeo com IA em 3 Passos Simples",
  description:
    "Veja como cortar vídeo com IA em apenas 3 passos: faça upload, a inteligência artificial analisa o conteúdo e gera clipes prontos para TikTok, Instagram Reels e YouTube Shorts. Teste grátis.",
  keywords: [
    "como cortar vídeo com IA",
    "como funciona clipagem com inteligência artificial",
    "passo a passo para criar clipes",
    "upload e transcrição de vídeo",
    "inteligência artificial para vídeos",
    "como gerar clipes virais",
    "pipeline de clipagem automática",
    "transcrição com Whisper",
  ],
  openGraph: {
    title: "Como Funciona — Cortar Vídeo com IA em 3 Passos | Sleepcomet",
    description:
      "Faça upload, a IA analisa o conteúdo e gera clipes prontos. Transcrição, detecção de cenas e exportação automatizados.",
    url: `${siteUrl}/como-funciona/`,
  },
  alternates: {
    canonical: `${siteUrl}/como-funciona/`,
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
    title: "A IA analisa o conteúdo",
    description:
      "O áudio é transcrito com Faster-Whisper em português. Cada palavra recebe um timestamp preciso. Simultaneamente, o OpenCV detecta mudanças de cena e picos de movimento.",
    gradient: "from-purple-500 to-pink-400",
  },
  {
    number: "03",
    title: "Clipes prontos em segundos",
    description:
      "A combinação de transcrição, detecção de cenas e pontuação seleciona até 10 clipes de 15 a 60 segundos cada, prontos para publicar.",
    gradient: "from-green-500 to-emerald-400",
  },
]

const howToSteps = [
  { name: "Faça upload ou cole um link", text: "Envie seu vídeo em MP4, MOV ou cole um link do YouTube. O Sleepcomet baixa o vídeo automaticamente." },
  { name: "Transcrição do áudio com IA", text: "O áudio é transcrito com Faster-Whisper em português com timestamps palavra por palavra." },
  { name: "Análise e detecção de cenas", text: "A transcrição é analisada por palavras-chave e o OpenCV detecta mudanças de cena automaticamente." },
  { name: "Seleção dos melhores momentos", text: "Até 10 clipes são selecionados combinando pontuação de viralidade, cenas e movimento." },
  { name: "Exportação dos clipes", text: "Cada clipe é extraído com ffmpeg, recebe legendas queimadas e thumbnail automaticamente." },
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
    <div>
      <HowToSchema
        name="Como cortar vídeo com IA em 3 passos"
        description="Aprenda a transformar vídeos longos em clipes virais usando inteligência artificial. Faça upload, a IA analisa e gera clipes automaticamente."
        steps={howToSteps}
        totalTime="PT5M"
      />
      <Section className="relative isolate -mt-16 overflow-hidden pt-24 pb-16 text-center sm:pb-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand/25 blur-[120px]"
        />
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Como{" "}
            <span className="bg-linear-to-r from-brand to-brand/60 bg-clip-text text-transparent">
              cortar vídeo
            </span>{" "}
            com IA
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Do upload aos clipes prontos em minutos.
            <br />
            Transcrição, análise e corte automatizados com inteligência artificial.
          </p>
        </div>
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

      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold text-white">Pipeline técnico de clipagem</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            As etapas que seu vídeo percorre até virar clipes prontos para redes sociais.
          </p>
          <div className="mt-12 border-fade">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3">
              {pipelineSteps.map((item) => (
                <div
                  key={item.title}
                  className="rounded-none border border-white/10 p-6"
                >
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-white">Pronto para criar seus primeiros clipes?</h2>
          <p className="mt-3 text-muted-foreground">
            Teste grátis por 7 dias, sem cartão de crédito.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link href={APP_URL}>
              <ShimmerButton>Começar agora</ShimmerButton>
            </Link>
            <Link href="/precos">
              <ShimmerButton background="#333333">Ver planos</ShimmerButton>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  )
}
