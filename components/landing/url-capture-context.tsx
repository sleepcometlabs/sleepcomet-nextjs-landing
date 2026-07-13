"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { APP_URL } from "@/lib/config"

interface UrlCaptureContextValue {
  url: string
  setUrl: (v: string) => void
  error: string | null
  submit: () => void
}

const UrlCaptureContext = createContext<UrlCaptureContextValue | null>(null)

function looksLikeUrl(value: string): boolean {
  try {
    const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`
    const parsed = new URL(withProtocol)
    return parsed.hostname.includes(".")
  } catch {
    return false
  }
}

// Estado compartilhado entre o pill do Hero e a barra fixa que aparece ao
// rolar — os dois refletem o mesmo valor, então digitar em qualquer um
// atualiza o outro. Submit manda o usuário pro app já com o link: lá, o
// mesmo mecanismo que salva a rota pretendida antes do login (sc_redirect_to)
// devolve o usuário pra Home com ?url= preenchido, abrindo o formulário de
// configuração sozinho — sem precisar tocar no fluxo de auth pra isso.
export function UrlCaptureProvider({ children }: { children: ReactNode }) {
  const [url, setUrlState] = useState("")
  const [error, setError] = useState<string | null>(null)

  const setUrl = (v: string) => {
    setUrlState(v)
    if (error) setError(null)
  }

  const submit = () => {
    const trimmed = url.trim()
    if (!trimmed) {
      setError("Cole o link de um vídeo para começar.")
      return
    }
    if (!looksLikeUrl(trimmed)) {
      setError("Isso não parece um link válido.")
      return
    }
    window.location.href = `${APP_URL}/?url=${encodeURIComponent(trimmed)}`
  }

  return (
    <UrlCaptureContext.Provider value={{ url, setUrl, error, submit }}>
      {children}
    </UrlCaptureContext.Provider>
  )
}

export function useUrlCapture() {
  const ctx = useContext(UrlCaptureContext)
  if (!ctx) throw new Error("useUrlCapture must be used within UrlCaptureProvider")
  return ctx
}
