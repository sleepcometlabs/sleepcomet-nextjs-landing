import type { Metadata } from "next"
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sleepcomet.com"

export const metadata: Metadata = {
  title: "Roadmap — Novas Funcionalidades e Atualizações do Sleepcomet",
  description:
    "Veja o que já foi lançado, o que estamos construindo agora e as próximas funcionalidades do Sleepcomet. Editor de vídeo integrado, suporte a podcasts, app mobile e mais.",
  keywords: [
    "roadmap sleepcomet",
    "novas funcionalidades sleepcomet",
    "atualizações sleepcomet",
    "próximas features sleepcomet",
    "editor de vídeo integrado",
    "app mobile clipagem IA",
  ],
  openGraph: {
    title: "Roadmap — Novas Funcionalidades do Sleepcomet",
    description:
      "Acompanhe a evolução do Sleepcomet. Funcionalidades passadas, presentes e futuras.",
    url: `${siteUrl}/roadmap/`,
  },
  alternates: {
    canonical: `${siteUrl}/roadmap/`,
  },
}

const timeline = [
  {
    period: "Q1 2026",
    title: "Fundação",
    items: [
      { name: "MVP do Sleepcomet", status: "done" },
      { name: "Clipagem básica com IA", status: "done" },
      { name: "Upload de vídeos MP4/MOV", status: "done" },
      { name: "Exportação MP4 sem marca d'água", status: "done" },
      { name: "Landing page e site oficial", status: "done" },
    ],
  },
  {
    period: "Q2 2026",
    title: "Legendas e integrações",
    items: [
      { name: "Transcrição automática por IA", status: "done" },
      { name: "Legendas word-level automáticas", status: "done" },
      { name: "Exportação de legendas", status: "done" },
      { name: "Suporte a múltiplos idiomas", status: "done" },
      { name: "Primeiros templates virais", status: "done" },
      { name: "Publicação direta TikTok/Instagram/YouTube", status: "done" },
    ],
  },
  {
    period: "Q3 2026",
    title: "API e infraestrutura",
    items: [
      { name: "API REST completa", status: "done" },
      { name: "Sistema de planos e créditos", status: "done" },
      { name: "Cobrança (checkout + assinaturas)", status: "done" },
      { name: "Portal do cliente", status: "done" },
      { name: "Notificações em tempo real", status: "done" },
      { name: "Sistema de indicações (referral)", status: "done" },
      { name: "Monitoramento e observabilidade", status: "done" },
      { name: "Métricas customizadas da aplicação", status: "done" },
      { name: "Deploy automatizado", status: "done" },
      { name: "Infraestrutura própria de e-mail", status: "done" },
      { name: "Separação de áudio para maior precisão em músicas", status: "in_progress" },
      { name: "Editor de vídeo integrado", status: "done" },
      { name: "API pública para desenvolvedores", status: "planned" },
      { name: "Webhooks para automação", status: "planned" },
    ],
  },
  {
    period: "Q4 2026",
    title: "Editor e expansão",
    items: [
      { name: "Timeline interativa com keyframes", status: "in_progress" },
      { name: "Suporte a podcasts (áudio → clipes)", status: "planned" },
      { name: "Detecção de trending topics com IA", status: "planned" },
      { name: "Colaboração em equipe", status: "planned" },
      { name: "Programa de Creators", status: "planned" },
      { name: "App mobile (iOS/Android)", status: "planned" },
    ],
  },
  {
    period: "2027",
    title: "Visão de longo prazo",
    items: [
      { name: "IA generativa de vídeo (B-roll automático)", status: "planned" },
      { name: "Marketplace de templates da comunidade", status: "planned" },
      { name: "Análise preditiva de viralidade", status: "planned" },
      { name: "Integração com principais CRMs de creators", status: "planned" },
      { name: "Sleepcomet como plataforma white-label", status: "planned" },
    ],
  },
]

const statusConfig: Record<string, { label: string; variant: "default" | "secondary" | "outline" }> = {
  done: { label: "Lançado", variant: "default" },
  in_progress: { label: "Em desenvolvimento", variant: "secondary" },
  planned: { label: "Planejado", variant: "outline" },
}

export default function Roadmap() {
  return (
    <div>
      <Section className="relative isolate -mt-16 overflow-hidden pt-24 pb-16 text-center sm:pb-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand/25 blur-[120px]"
        />
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Roadmap</h1>
          <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
            Acompanhe a evolução do Sleepcomet.
            <br />
            Do MVP ao futuro da criação de conteúdo com IA.
          </p>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-4xl space-y-12">
          {timeline.map((phase) => (
            <div key={phase.period}>
              <div className="mb-6 flex items-center gap-4">
                <span className="rounded-lg bg-brand/10 px-3 py-1 font-mono text-sm font-medium text-brand">
                  {phase.period}
                </span>
                <h2 className="text-xl font-bold text-white">{phase.title}</h2>
              </div>
              <div>
                {phase.items.map((item) => {
                  const config = statusConfig[item.status]
                  return (
                    <div
                      key={item.name}
                      className={cn(
                        "relative line-fade-b flex items-center justify-between px-4 py-3",
                        item.status === "done" && "opacity-60",
                      )}
                    >
                      <span
                        className={cn(
                          "text-sm",
                          item.status === "done" && "line-through",
                        )}
                      >
                        {item.name}
                      </span>
                      <Badge variant={config.variant} className="text-[10px]">
                        {config.label}
                      </Badge>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <h2 className="text-xl font-bold text-white">Sugira uma funcionalidade</h2>
        <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
          O roadmap do Sleepcomet é inspirado pela comunidade. Tem uma ideia? Compartilhe com a
          gente.
        </p>
        <a
          href="mailto:roadmap@sleepcomet.com"
          className="mt-4 inline-block text-sm font-medium text-brand underline underline-offset-4 hover:no-underline"
        >
          Sugerir funcionalidade →
        </a>
      </Section>
    </div>
  )
}
