import type { Metadata } from "next"
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "Roadmap do Sleepcomet. Veja o que já foi lançado, o que estamos construindo agora e as próximas funcionalidades planejadas.",
  openGraph: {
    title: "Roadmap | Sleepcomet",
    description:
      "Acompanhe a evolução do Sleepcomet. Funcionalidades passadas, presentes e futuras.",
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
      { name: "Publicação direta TikTok/Instagram/YouTube", status: "in_progress" },
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
      { name: "Editor de vídeo integrado", status: "in_progress" },
      { name: "API pública para desenvolvedores", status: "in_progress" },
      { name: "Webhooks para automação", status: "in_progress" },
    ],
  },
  {
    period: "Q4 2026",
    title: "Editor e expansão",
    items: [
      { name: "Timeline interativa com keyframes", status: "planned" },
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
    <div className="pt-20">
      <Section className="text-center">
        <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">Roadmap</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
          Acompanhe a evolução do Sleepcomet. Do MVP ao futuro da criação de conteúdo com IA.
        </p>
      </Section>

      <Section>
        <div className="mx-auto max-w-4xl space-y-12">
          {timeline.map((phase) => (
            <div key={phase.period}>
              <div className="mb-6 flex items-center gap-4">
                <span className="rounded-lg bg-primary/10 px-3 py-1 font-mono text-sm font-medium text-primary">
                  {phase.period}
                </span>
                <h2 className="text-xl font-bold">{phase.title}</h2>
              </div>
              <div className="space-y-3">
                {phase.items.map((item) => {
                  const config = statusConfig[item.status]
                  return (
                    <div
                      key={item.name}
                      className={cn(
                        "flex items-center justify-between rounded-xl border bg-card px-4 py-3 transition-colors",
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

      <Section className="bg-muted/30 text-center">
        <h2 className="text-xl font-bold">Sugira uma funcionalidade</h2>
        <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
          O roadmap do Sleepcomet é inspirado pela comunidade. Tem uma ideia? Compartilhe com a
          gente.
        </p>
        <a
          href="mailto:roadmap@sleepcomet.com"
          className="mt-4 inline-block text-sm font-medium text-primary underline underline-offset-4 hover:no-underline"
        >
          Sugerir funcionalidade →
        </a>
      </Section>
    </div>
  )
}
