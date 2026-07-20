import { Fragment } from "react"
import { Check, Minus, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { Section } from "@/components/ui/section"

type Cell = string | boolean

interface ComparisonRow {
  label: string
  values: [Cell, Cell, Cell, Cell]
}

interface ComparisonGroup {
  title: string
  rows: ComparisonRow[]
}

const plans = ["Free", "Creator", "Pro", "Enterprise"] as const

const groups: ComparisonGroup[] = [
  {
    title: "Créditos e uso",
    rows: [
      { label: "Créditos por mês", values: ["30", "300", "1.000", "Ilimitado / sob medida"] },
      { label: "Clipes de IA", values: ["Até 5 por mês", "Ilimitados", "Ilimitados", "Ilimitados"] },
    ],
  },
  {
    title: "Exportação",
    rows: [
      { label: "Resolução", values: ["720p", "Full HD (1080p)", "Ultra HD (2K/4K)", "Ultra HD (2K/4K)"] },
      { label: "Marca d'água", values: ["Sleepcomet", "Sem marca d'água", "Sua marca/logo", "Sua marca/logo"] },
    ],
  },
  {
    title: "Edição e legendas",
    rows: [
      { label: "Corte inteligente com detecção facial", values: [false, true, true, true] },
      { label: "Estilo de legendas", values: ["Modelos básicos", "Avançadas + animação", "Templates Pro customizáveis", "Templates Pro customizáveis"] },
      { label: "Upload de fontes personalizadas (.ttf/.otf)", values: [false, false, true, true] },
      { label: "Download de legendas (SRT/VTT)", values: [false, false, true, true] },
    ],
  },
  {
    title: "Publicação e integrações",
    rows: [
      { label: "Integrações sociais ativas", values: ["1", "3", "3", "Customizadas"] },
      { label: "Agendamento e publicação direta", values: [false, false, true, true] },
    ],
  },
  {
    title: "Processamento",
    rows: [
      { label: "Fila de processamento", values: ["Geral", "Priorizada", "GPU dedicada prioritária", "GPU dedicada exclusiva"] },
      { label: "Armazenamento", values: ["1 GB", "5 GB", "20 GB", "100 GB"] },
    ],
  },
  {
    title: "Suporte",
    rows: [
      { label: "Canal de suporte", values: ["Comunidade", "Comunidade", "WhatsApp prioritário", "24/7 + gerente dedicado"] },
      { label: "Acordo de Nível de Serviço (SLA)", values: [false, false, false, true] },
    ],
  },
  {
    title: "Empresarial",
    rows: [
      { label: "Acesso à API de automação", values: [false, false, false, true] },
      { label: "Painel de gestão de equipes (multi-usuário)", values: [false, false, false, true] },
    ],
  },
]

function Cell({ value, popular }: { value: Cell; popular?: boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className={cn("mx-auto size-4", popular ? "text-brand" : "text-foreground/70")} />
    ) : (
      <Minus className="mx-auto size-4 text-muted-foreground/30" />
    )
  }
  return <span className={cn("text-sm", popular ? "text-white" : "text-muted-foreground")}>{value}</span>
}

export function PricingComparison() {
  return (
    <Section>
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Compare todos os{" "}
            <span className="bg-linear-to-r from-brand to-brand/60 bg-clip-text text-transparent">
              recursos
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Veja em detalhes o que cada plano oferece antes de decidir.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto rounded-2xl border border-fade bg-white/[0.02] backdrop-blur-sm">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="sticky left-0 bg-black/90 p-4 text-sm font-medium text-muted-foreground backdrop-blur-sm">
                  Recurso
                </th>
                {plans.map((plan) => (
                  <th
                    key={plan}
                    className={cn(
                      "p-4 text-center align-middle",
                      plan === "Pro" && "bg-brand/[0.06]"
                    )}
                  >
                    <div className="flex flex-col items-center gap-1">
                      {plan === "Pro" && (
                        <span className="mb-1 inline-flex items-center gap-1 rounded-full bg-brand/10 px-2.5 py-0.5 text-[10px] font-medium text-brand">
                          <Zap className="size-2.5" /> Mais popular
                        </span>
                      )}
                      <span className={cn("text-sm font-semibold", plan === "Pro" ? "text-white" : "text-foreground")}>
                        {plan}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {groups.map((group) => (
                <Fragment key={group.title}>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    <td colSpan={5} className="p-3 pl-4 text-xs font-semibold uppercase tracking-wide text-white/70">
                      {group.title}
                    </td>
                  </tr>
                  {group.rows.map((row) => (
                    <tr key={row.label} className="border-b border-white/5 last:border-0">
                      <td className="sticky left-0 bg-black/90 p-4 text-sm text-muted-foreground backdrop-blur-sm">
                        {row.label}
                      </td>
                      {row.values.map((value, i) => (
                        <td
                          key={plans[i]}
                          className={cn("p-4 text-center", plans[i] === "Pro" && "bg-brand/[0.04]")}
                        >
                          <Cell value={value} popular={plans[i] === "Pro"} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  )
}
