import type { Metadata } from "next"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BreadcrumbList } from "@/components/seo/breadcrumb-list"
import { HowToSchema } from "@/components/seo/how-to-schema"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sleepcomet.com"

export const metadata: Metadata = {
  title: "Legendas Automáticas — Transcrição de Vídeo com IA em Português",
  description:
    "Gere legendas automáticas para seus vídeos com inteligência artificial. Transcrição precisa em português, timestamps palavra por palavra e exportação SRT. Legendas sincronizadas para TikTok, Reels e Shorts.",
  keywords: [
    "legendas automáticas",
    "transcrição de vídeo com IA",
    "legendas automáticas para TikTok",
    "legendas automáticas para Reels",
    "adicionar legendas em vídeo",
    "transcrever vídeo em português",
    "gerar SRT automaticamente",
    "legendas word-level",
    "Faster-Whisper legendas",
    "legendas para YouTube Shorts",
  ],
  openGraph: {
    title: "Legendas Automáticas — Transcrição com IA | SleepComet",
    description:
      "Transcrição precisa em português com timestamps palavra por palavra. Legendas sincronizadas geradas automaticamente em cada clipe.",
    url: `${siteUrl}/legendas-automaticas/`,
  },
  alternates: {
    canonical: `${siteUrl}/legendas-automaticas/`,
  },
}

const features = [
  {
    title: "Faster-Whisper",
    description:
      "Utilizamos o modelo Faster-Whisper base para transcrição em português. Processamento com CTranslate2 em CPU para resultados rápidos e precisos.",
  },
  {
    title: "Timestamp word-level",
    description:
      "Cada palavra é sincronizada individualmente ao frame do vídeo. As legendas aparecem e desaparecem em sincronia com a fala, sem atrasos.",
  },
  {
    title: "Formatação inteligente",
    description:
      "O texto é dividido automaticamente em blocos legíveis respeitando a pontuação e respiração natural. Legendas longas são quebradas em múltiplas linhas no timing ideal.",
  },
  {
    title: "Exportação SRT",
    description:
      "Arquivos SRT gerados com timestamps precisos, compatíveis com qualquer player de vídeo e plataforma de redes sociais.",
  },
  {
    title: "Legendas embutidas",
    description:
      "As legendas são queimadas diretamente no vídeo durante a geração do clipe. Pronto para publicar sem arquivos extras.",
  },
]

const howToSteps = [
  { name: "Extração do áudio", text: "O áudio é extraído do vídeo e convertido para o formato WAV mono de 16kHz." },
  { name: "Transcrição com Whisper", text: "O modelo Faster-Whisper processa o áudio em português e gera a transcrição com timestamps por palavra." },
  { name: "Grupos de legenda", text: "As palavras são agrupadas em blocos de até 42 caracteres por linha, respeitando pontuação e pausas naturais." },
  { name: "Geração de SRT", text: "Arquivo SRT é gerado com os timestamps. As legendas também são queimadas diretamente no vídeo do clipe via ffmpeg." },
]

export default function LegendasAutomaticas() {
  return (
    <div className="pt-20">
      <HowToSchema
        name="Como adicionar legendas automáticas em vídeos"
        description="Passo a passo para gerar legendas automáticas em português para seus vídeos usando inteligência artificial."
        steps={howToSteps}
        totalTime="PT3M"
      />
      <Section className="text-center">
        <div className="mx-auto max-w-4xl">
          <BreadcrumbList items={[{ name: "Legendas automáticas", url: `${siteUrl}/legendas-automaticas/` }]} />
          <Badge variant="secondary" className="mb-4">
            Faster-Whisper
          </Badge>
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Legendas{" "}
            <span className="text-primary">automáticas</span> para vídeos
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Transcrição precisa em português com timestamps palavra por palavra. Legendas
            sincronizadas geradas automaticamente em cada clipe.
          </p>
        </div>
      </Section>

      <Section>
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold">Como funciona a geração de legendas</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            A transcrição é parte do pipeline principal de clipagem.
          </p>
          <div className="mt-8 space-y-4">
            {[
              {
                step: "1",
                title: "Extração do áudio",
                desc: "O áudio é extraído do vídeo e convertido para o formato WAV mono de 16kHz.",
              },
              {
                step: "2",
                title: "Transcrição com Whisper",
                desc: "O modelo Faster-Whisper processa o áudio em português e gera a transcrição com timestamps por palavra.",
              },
              {
                step: "3",
                title: "Grupos de legenda",
                desc: "As palavras são agrupadas em blocos de até 42 caracteres por linha, respeitando pontuação e pausas naturais.",
              },
              {
                step: "4",
                title: "Geração de SRT",
                desc: "Arquivo SRT é gerado com os timestamps. As legendas também são queimadas diretamente no vídeo do clipe via ffmpeg.",
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

      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold">Formatos de exportação de legendas</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            As legendas são geradas em dois formatos, dependendo da sua necessidade.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                format: "SRT",
                desc: "Arquivo de legenda separado com timestamps. Compatível com YouTube, Instagram, TikTok e editores de vídeo.",
              },
              {
                format: "Embutidas (hardcoded)",
                desc: "Legendas queimadas diretamente no vídeo. Pronto para publicar sem arquivo extra.",
              },
            ].map((item) => (
              <div
                key={item.format}
                className="rounded-xl border bg-card p-5 text-center transition-colors hover:border-primary/30"
              >
                <span className="font-mono text-lg font-bold text-primary">{item.format}</span>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Atualmente o SleepComet suporta transcrição em português. A detecção de idioma é
            configurada para português brasileiro.
          </p>
        </div>
      </Section>

      <Section className="text-center">
        <h2 className="text-2xl font-bold">Gere legendas automáticas grátis</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Cole um link do YouTube ou faça upload e receba legendas sincronizadas em segundos.
        </p>
        <div className="mt-6">
          <Button size="lg">Começar grátis</Button>
        </div>
      </Section>
    </div>
  )
}
