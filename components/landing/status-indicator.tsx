"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card"

const STATUS_PAGE_URL = "https://stats.uptimerobot.com/UzrhpUosXP"

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

// Texto puro + ponto pulsando (sem pill/badge) — busca /status (Cloudflare
// Pages Function, mesma origem) que consulta o UptimeRobot no servidor.
// Sem resposta ainda ou em erro, mostra "operacional" otimista em vez de
// travar o footer numa mensagem de erro.
export function StatusIndicator() {
  const [data, setData] = useState<StatusResponse | null>(null)

  useEffect(() => {
    let cancelled = false
    const load = () => {
      fetch("/status")
        .then((res) => (res.ok ? res.json() : null))
        .then((json) => {
          if (!cancelled && json?.overall) setData(json)
        })
        .catch(() => {})
    }
    load()
    const interval = setInterval(load, 60_000)
    return () => {
      cancelled = true
      clearInterval(interval)
    }
  }, [])

  const overall = data?.overall ?? "up"
  const dotColor = DOT_COLOR[overall]
  const label = overall === "down" ? "Instabilidade em andamento" : "Todos os sistemas operacionais"

  const indicator = (
    <span className="relative flex size-1.5">
      <span
        className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${dotColor}`}
      />
      <span className={`relative inline-flex size-1.5 rounded-full ${dotColor}`} />
    </span>
  )

  return (
    <HoverCard openDelay={100}>
      <HoverCardTrigger asChild>
        <Link
          href={STATUS_PAGE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs text-white/80 transition-colors hover:text-white"
        >
          {indicator}
          {label}
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-64 text-xs" side="top" align="end">
        {data?.monitors?.length ? (
          <div className="flex flex-col gap-2">
            {data.monitors.map((m) => (
              <div key={m.name} className="flex items-center justify-between gap-3">
                <span className="text-white/80">{m.name}</span>
                <span className="flex items-center gap-1.5">
                  <span className={`size-1.5 rounded-full ${DOT_COLOR[m.status]}`} />
                  <span className="text-white/50">
                    {m.status === "up" ? "Operacional" : m.status === "down" ? "Fora do ar" : "Pausado"}
                  </span>
                </span>
              </div>
            ))}
          </div>
        ) : (
          <span className="text-white/60">Carregando status...</span>
        )}
      </HoverCardContent>
    </HoverCard>
  )
}
