"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface Monitor {
  name: string
  status: "up" | "down" | "paused" | "pending" | "unknown"
}

interface StatusResponse {
  overall: "up" | "down"
  updatedAt: string
  monitors: Monitor[]
}

const DOT_COLOR: Record<string, string> = {
  up: "bg-emerald-500",
  down: "bg-red-500",
  paused: "bg-white/30",
  pending: "bg-white/30",
  unknown: "bg-white/30",
}

const STATUS_LABEL: Record<string, string> = {
  up: "Operacional",
  down: "Fora do ar",
  paused: "Pausado",
  pending: "Aguardando primeira checagem",
  unknown: "Desconhecido",
}

type State = "loading" | "ready" | "error"

export function StatusPagesContent() {
  const [data, setData] = useState<StatusResponse | null>(null)
  const [state, setState] = useState<State>("loading")

  useEffect(() => {
    // /status é uma Cloudflare Pages Function — só existe rodando sob
    // Wrangler/produção, `next dev` não serve o diretório functions/.
    if (process.env.NODE_ENV !== "production") {
      setState("error")
      return
    }

    let cancelled = false
    fetch("/status")
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json: StatusResponse) => {
        if (cancelled) return
        setData(json)
        setState("ready")
      })
      .catch(() => {
        if (!cancelled) setState("error")
      })

    return () => {
      cancelled = true
    }
  }, [])

  const overall = data?.overall ?? "up"
  const overallLabel = overall === "down" ? "Instabilidade em andamento" : "Todos os sistemas operacionais"

  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-none border border-fade p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="relative flex size-2.5">
            <span
              className={cn(
                "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                DOT_COLOR[overall]
              )}
            />
            <span className={cn("relative inline-flex size-2.5 rounded-full", DOT_COLOR[overall])} />
          </span>
          <h2 className="text-lg font-semibold text-white sm:text-xl">
            {state === "error" ? "Status indisponível no momento" : overallLabel}
          </h2>
        </div>

        {data?.updatedAt && (
          <p className="mt-2 text-xs text-muted-foreground">
            Última atualização: {new Date(data.updatedAt).toLocaleString("pt-BR")}
          </p>
        )}

        {state === "error" && (
          <p className="mt-2 text-sm text-muted-foreground">
            Não conseguimos carregar os dados agora. Tente novamente em alguns instantes ou acompanhe{" "}
            <a
              href="https://stats.uptimerobot.com/UzrhpUosXP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand underline underline-offset-4 hover:no-underline"
            >
              a página pública do UptimeRobot
            </a>
            .
          </p>
        )}
      </div>

      {state === "ready" && data && data.monitors.length > 0 && (
        <div className="mt-10">
          <h3 className="text-sm font-medium tracking-widest text-white/40 uppercase">Componentes</h3>
          <div className="mt-4">
            {data.monitors.map((monitor) => (
              <div
                key={monitor.name}
                className="relative line-fade-b flex items-center justify-between px-1 py-4"
              >
                <span className="text-sm text-white/90">{monitor.name}</span>
                <span className="flex items-center gap-2">
                  <span className={cn("size-1.5 rounded-full", DOT_COLOR[monitor.status])} />
                  <span className="text-xs text-muted-foreground">{STATUS_LABEL[monitor.status]}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {state === "loading" && (
        <p className="mt-10 text-center text-sm text-muted-foreground">Carregando status...</p>
      )}
    </div>
  )
}
