"use client"

import NumberFlow from "@number-flow/react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight, BadgeCheck, Zap } from "lucide-react"
import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

import { APP_URL, REDDIT_URL } from "@/lib/config"

const plans = [
  {
    id: "free",
    name: "Free",
    price: {
      monthly: "Grátis",
      yearly: "Grátis",
    },
    description: "Para começar a explorar a clipagem com IA.",
    features: [
      "30 créditos por mês",
      "Clipes de até 60 segundos",
      "Exportação em 720p",
      "Até 5 clipes por mês",
      "Marca d'água Sleepcomet",
      "Modelos de legendas básicos",
      "Fila geral de processamento",
      "1 GB de armazenamento",
      "1 integração ativa",
      "Suporte pela comunidade",
    ],
    cta: "Começar grátis",
    href: APP_URL,
    popular: false,
  },
  {
    id: "creator",
    name: "Creator",
    price: {
      monthly: 19,
      yearly: 15,
    },
    description: "Perfeito para quem está começando nas redes sociais.",
    features: [
      "300 créditos por mês",
      "Clipes de IA ilimitados",
      "Exportação em Full HD (1080p)",
      "Corte inteligente com detecção facial",
      "Legendas avançadas e estilos de animação",
      "Sem marca d'água nos clipes",
      "Fila priorizada de Criadores",
      "5 GB de armazenamento",
      "3 integrações sociais",
    ],
    cta: "Assinar Creator",
    href: `${APP_URL}/checkout?plan=creator&frequency=monthly`,
    popular: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: {
      monthly: 39,
      yearly: 29,
    },
    description: "Ideal para produtores e editores profissionais.",
    features: [
      "1.000 créditos por mês",
      "Clipes de IA ilimitados",
      "Exportação em Ultra HD (2K/4K)",
      "Fila prioritária com GPU dedicada",
      "Upload de fontes personalizadas (.ttf/.otf)",
      "Templates Pro e legendas customizáveis",
      "Adicione sua própria marca d'água/logo",
      "Agendamento e publicação direta nas redes",
      "Download de legendas (SRT/VTT)",
      "20 GB de armazenamento",
      "3 integrações sociais",
      "Suporte prioritário via WhatsApp",
    ],
    cta: "Assinar Pro",
    href: `${APP_URL}/checkout?plan=pro&frequency=monthly`,
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: {
      monthly: "Sob consulta",
      yearly: "Sob consulta",
    },
    description: "Para agências de conteúdo e grandes produtoras.",
    features: [
      "Créditos ilimitados ou pacotes sob medida",
      "Clipes de IA ilimitados",
      "Fila exclusiva com GPU dedicada e sem espera",
      "Acesso total à API de automação de vídeos",
      "Painel de gestão de equipes (multi-usuário)",
      "Gerente de contas dedicado",
      "Acordo de Nível de Serviço (SLA) garantido",
      "100 GB de armazenamento",
      "Integrações sociais customizadas",
      "Suporte prioritário 24/7",
    ],
    cta: "Falar com vendas",
    href: "mailto:comercial@sleepcomet.com",
    popular: false,
  },
]

export function Pricing() {
  const [frequency, setFrequency] = useState<string>("monthly")

  return (
    <section id="precos" className="@container flex flex-col gap-16 px-4 py-16 sm:py-28 text-center">
      <div className="flex flex-col items-center justify-center gap-8">
        <h2 className="text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
          Planos de clipagem com IA a partir de $0
        </h2>
        <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
          Comece grátis e escale conforme cresce. Planos para criadores independentes, profissionais e agências.
        </p>
        <Tabs defaultValue={frequency} onValueChange={setFrequency}>
          <TabsList>
            <TabsTrigger value="monthly">Mensal</TabsTrigger>
            <TabsTrigger value="yearly">
              Anual
              <Badge variant="secondary" className="ml-1.5">20% off</Badge>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="monthly" className="hidden" />
          <TabsContent value="yearly" className="hidden" />
        </Tabs>
        <div className="mt-8 grid w-full max-w-6xl gap-0 @2xl:grid-cols-4">
          {plans.map((plan, index) => (
            <div
              className={cn(
                "relative flex flex-col border-t border-border px-6 py-8 text-left @2xl:border-t-0 @2xl:border",
                index === 0 && "@2xl:border",
                plan.popular && "ring-2 ring-brand/40 rounded-sm bg-brand/2",
                !plan.popular && "border border-border/50"
              )}
              key={plan.id}
            >
              {plan.popular && (
                <span className="mb-4 inline-flex w-fit items-center gap-1 rounded-full bg-brand/10 px-3 py-0.5 text-xs font-medium text-brand-foreground">
                  <Zap className="size-3" /> Mais popular
                </span>
              )}

              <h3 className={cn("text-xl font-medium", plan.popular && "text-brand-foreground")}>{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>

              <div className="mt-4 mb-6">
                {typeof plan.price[frequency as keyof typeof plan.price] === "number" ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-muted-foreground font-medium">$</span>
                    <NumberFlow
                      className="text-3xl font-semibold text-foreground"
                      format={{ maximumFractionDigits: 0 }}
                      suffix={`/mês`}
                      value={plan.price[frequency as keyof typeof plan.price] as number}
                    />
                  </div>
                ) : (
                  <span className="text-3xl font-semibold text-foreground">
                    {plan.price[frequency as keyof typeof plan.price]}
                  </span>
                )}
              </div>

              <a
                href={
                  (plan.id === "free" || plan.id === "enterprise")
                    ? plan.href
                    : `${APP_URL}/checkout?plan=${plan.id}&frequency=${frequency}`
                }
              >
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>

              <div className="mt-6 grid gap-2">
                {plan.features.map((feature, i) => (
                  <div
                    className="flex gap-2 text-sm text-muted-foreground"
                    key={i}
                  >
                    <BadgeCheck className="h-lh w-4 flex-none text-brand-foreground" />
                    {feature === "Suporte pela comunidade" ? (
                      <a
                        href={REDDIT_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground underline underline-offset-2 transition-colors"
                      >
                        {feature}
                      </a>
                    ) : (
                      feature
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
