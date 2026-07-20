"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

declare global {
  interface Window {
    Cookiebot?: {
      renew: () => void
      show: () => void
    }
  }
}

interface CookieSettingsButtonProps {
  className?: string
  children: ReactNode
}

// Reabre o widget de consentimento do Cookiebot (script carregado só em
// produção — ver app/layout.tsx) em vez de levar pra uma página própria de
// cookies, que não existe mais.
export function CookieSettingsButton({ className, children }: CookieSettingsButtonProps) {
  const openCookieSettings = () => {
    window.Cookiebot?.renew()
  }

  return (
    <button type="button" onClick={openCookieSettings} className={cn("cursor-pointer", className)}>
      {children}
    </button>
  )
}
