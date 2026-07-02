import type { Metadata } from "next"
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import { BreadcrumbList } from "@/components/seo/breadcrumb-list"
import { HowToSchema } from "@/components/seo/how-to-schema"
import { ClipagemIACta } from "./clipagem-ia-cta"

import { APP_URL, SITE_URL } from "@/lib/config"

const siteUrl = SITE_URL

export const metadata: Metadata = {
  title: "Clipagem com IA — Cortar Vídeo Automaticamente com Inteligência Artificial",
  description:
    "Aprenda como funciona a clipagem com IA: transcrição automática com Faster-Whisper, detecção de cenas com OpenCV e seleção dos melhores momentos. Corte vídeos automaticamente e crie clipes para TikTok, Reels e Shorts.",
  keywords: [
    "clipagem com IA",
    "cortar vídeo com inteligência artificial",
    "clipagem automática de vídeo",
    "IA para cortar vídeo",
    "melhor ferramenta de clipagem",
    "como cortar vídeo com IA",
    "criar clipes automaticamente",
    "transcrição de vídeo com IA",
    "detecção de cenas automática",
  ],
  openGraph: {
    title: "Clipagem com IA — Cortar Vídeo Automaticamente | Sleepcomet",
    description:
      "Transforme vídeos longos em clipes virais automaticamente com inteligência artificial. Transcrição, detecção de cenas e seleção dos melhores momentos.",
    url: `${siteUrl}/clipagem-ia/`,
  },
  alternates: {
    canonical: `${siteUrl}/clipagem-ia/`,
  },
}

const features = [
  {
    title: "Transcrição com Faster-Whisper",
    description:
      "O áudio do seu vídeo é transcrito com o modelo Faster-Whisper, gerando palavras com timestamp individual. A partir da transcrição, analisamos o conteúdo da fala.",
    icon: "🎤",
  },
  {
    title: "Detecção de cenas com OpenCV",
    description:
      "Análise quadro a quadro com diferença de frames para detectar mudanças de cena. Cada transição é identificada automaticamente, sem depender de cortes manuais.",
    icon: "🎬",
  },
  {
    title: "Pontuação por palavras-chave",
    description:
      "Cada segmento da transcrição recebe uma pontuação baseada em palavras de emoção, hooks, contrastes, perguntas e CTAs. Os trechos mais relevantes são priorizados.",
    icon: "📊",
  },
  {
    title: "Seleção dos melhores momentos",
    description:
      "Combinamos pontuação de viralidade, proximidade de cenas e intensidade de movimento para selecionar até 10 clipes por vídeo, cada um entre 15 e 60 segundos.",
    icon: "🎯",
  },
  {
    title: "Geração de clipes com ffmpeg",
    description:
      "Cada clipe é extraído com corte preciso, legendas queimadas no vídeo e thumbnail gerada automaticamente.",
    icon: "✂️",
  },
  {
    title: "Processamento em lote",
    description:
      "Cole o link do YouTube ou faça upload do arquivo. O pipeline completo — transcrição, análise, corte e exportação — roda em segundo plano com progresso em tempo real.",
    icon: "⚡",
  },
]

const howToSteps = [
  { name: "Faça upload ou cole um link", text: "Envie seu vídeo em MP4, MOV ou cole um link do YouTube. O Sleepcomet baixa o vídeo automaticamente via yt-dlp e inicia o processamento." },
  { name: "Transcrição do áudio com IA", text: "O áudio é transcrito com Faster-Whisper em português. Cada palavra recebe um timestamp preciso, permitindo sincronia exata entre fala e legenda." },
  { name: "Análise e detecção de cenas", text: "A transcrição é analisada por palavras-chave de hook, emoção e contraste. Simultaneamente, o OpenCV detecta mudanças de cena e picos de movimento." },
  { name: "Seleção dos melhores momentos", text: "Combinamos pontuação por palavras-chave, posição das cenas e intensidade de movimento para selecionar até 10 clipes de 15 a 60 segundos cada." },
  { name: "Exportação dos clipes", text: "Cada clipe é extraído com ffmpeg, recebe legendas queimadas e thumbnail. Tudo disponível para download ou visualização." },
]

export default function ClipagemIA() {
  return (
    <div className="pt-20">
      <HowToSchema
        name="Como fazer clipagem de vídeo com IA"
        description="Passo a passo para cortar vídeos automaticamente usando inteligência artificial com o Sleepcomet."
        steps={howToSteps}
        totalTime="PT5M"
      />
      <Section className="text-center">
        <div className="mx-auto max-w-4xl">
          <BreadcrumbList items={[{ name: "Clipagem com IA", url: `${siteUrl}/clipagem-ia/` }]} />
          <Badge variant="secondary" className="mb-4">
            Processamento automatizado
          </Badge>
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Clipagem com{" "}
            <span className="text-primary">IA</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Seu vídeo é analisado por um pipeline de transcrição, detecção de cenas e pontuação de
            segmentos. O resultado: clipes prontos com os melhores momentos em minutos.
          </p>
        </div>
      </Section>

      <Section>
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <span className="text-3xl">{feature.icon}</span>
              <h3 className="mt-4 font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold">Como funciona o pipeline de clipagem</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            Todo o processo é automatizado. Você cola o link e volta para ver os resultados.
          </p>
          <div className="mt-10 space-y-4">
            {[
              {
                step: "1",
                title: "Download do vídeo",
                desc: "O vídeo é baixado via yt-dlp (YouTube) ou recebido por upload direto.",
              },
              {
                step: "2",
                title: "Transcrição com Faster-Whisper",
                desc: "O áudio é transcrito em português com timestamps palavra por palavra.",
              },
              {
                step: "3",
                title: "Análise e pontuação",
                desc: "Cada segmento é analisado por palavras-chave de hook, emoção, contraste e CTA. Cenas são detectadas por diferença de frames com OpenCV.",
              },
              {
                step: "4",
                title: "Seleção e corte",
                desc: "Os top 10 momentos são selecionados combinando pontuação + detecção de cena + movimento. Cada clipe é extraído com ffmpeg.",
              },
              {
                step: "5",
                title: "Exportação",
                desc: "Clipes com legendas queimadas, thumbnails e arquivos SRT são exibidos no dashboard.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-4 rounded-lg border bg-card p-5"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="text-center">
        <h2 className="text-2xl font-bold">Pronto para testar a clipagem com IA?</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Cole um link do YouTube e veja a mágica acontecer. Comece grátis, sem cartão de crédito.
        </p>
        <ClipagemIACta appUrl={APP_URL} />
      </Section>
    </div>
  )
}
