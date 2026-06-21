import type { Metadata } from "next"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Legendas automáticas",
  description:
    "Transcrição automática com IA em português, timestamps palavra por palavra e exportação SRT. Legendas sincronizadas para seus clipes. Disponível em app.sleepcomet.com.",
  openGraph: {
    title: "Legendas automáticas | Sleepcomet",
    description:
      "Adicione legendas word-level aos seus clipes automaticamente com transcrição por IA.",
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

export default function LegendasAutomaticas() {
  return (
    <div className="pt-20">
      <Section className="text-center">
        <Badge variant="secondary" className="mb-4">
          Faster-Whisper
        </Badge>
        <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
          Legendas <span className="text-primary">automáticas</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Transcrição precisa em português com timestamps palavra por palavra. Legendas
          sincronizadas geradas automaticamente em cada clipe.
        </p>
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
          <h2 className="text-center text-3xl font-bold">Como funciona</h2>
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
          <h2 className="text-center text-3xl font-bold">Formatos de exportação</h2>
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
            Atualmente o Sleepcomet suporta transcrição em português. A detecção de idioma é
            configurada para português brasileiro.
          </p>
        </div>
      </Section>

      <Section className="text-center">
        <Button size="lg">Gerar legendas grátis</Button>
      </Section>
    </div>
  )
}
