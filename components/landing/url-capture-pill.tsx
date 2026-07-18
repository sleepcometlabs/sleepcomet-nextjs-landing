"use client"

import { ArrowRight } from "lucide-react"
import { useUrlCapture } from "./url-capture-context"
import { WordRotate } from "@/components/ui/word-rotate"
import { cn } from "@/lib/utils"

const ROTATING_MESSAGES = [
  "Cole o link do YouTube",
  "Analisando o vídeo...",
  "Encontramos 12 momentos virais",
  "Gerando legendas automáticas...",
  "Seus clipes estão prontos 🎬",
]

interface UrlCapturePillProps {
  size?: "default" | "compact"
  className?: string
  messages?: string[]
  // "light" (padrão) é o pill branco usado no podcast/sticky bar — inalterado.
  // "dark" é o visual do novo hero (referência Figma): pill quase preto com
  // borda clara sutil, texto claro, botão na cor de marca #501AFB exata da
  // referência (não o token --brand do tema, que no escuro resolve pra
  // #7568FE — mais apagado que o roxo saturado do design).
  variant?: "light" | "dark"
}

export function UrlCapturePill({ size = "default", className, messages = ROTATING_MESSAGES, variant = "light" }: UrlCapturePillProps) {
  const { url, setUrl, error, submit } = useUrlCapture()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    submit()
  }

  const isCompact = size === "compact"
  const isDark = variant === "dark"

  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <form
        onSubmit={handleSubmit}
        className={cn(
          "flex w-full items-center rounded-full p-1.5 shadow-lg shadow-black/20",
          isDark
            // backdrop-blur-3xl (64px) travava o scroll — o WordRotate troca
            // de frase a cada 2.4s bem em cima desse blur, forçando o
            // navegador a re-amostrar tudo atrás (incluindo o arco de
            // 2400px) a cada troca. blur-xl é bem mais barato e ainda
            // segura o efeito de vidro.
            ? "border-4 border-white/15 bg-white/[0.02] backdrop-blur-xl"
            : "border-4 border-neutral-300 bg-white",
          isCompact ? "max-w-md" : "max-w-xl"
        )}
      >
        <div className="relative min-w-0 flex-1">
          {url.length === 0 && (
            <div
              className={cn(
                "pointer-events-none absolute inset-y-0 left-0 flex items-center",
                isDark ? "text-neutral-400" : "text-neutral-500",
                isCompact ? "pl-3.5 text-sm" : "pl-5 text-[15px]"
              )}
            >
              <WordRotate words={messages} />
            </div>
          )}
          <input
            type="text"
            inputMode="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            aria-label="Cole o link do vídeo do YouTube ou Vimeo"
            className={cn(
              "w-full min-w-0 bg-transparent outline-none",
              isDark ? "text-white" : "text-neutral-900",
              isCompact ? "px-3.5 py-2 text-sm" : "px-5 py-3 text-[15px]"
            )}
          />
        </div>
        <button
          type="submit"
          className={cn(
            "flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]",
            isDark ? "bg-[#501AFB]" : "bg-brand text-brand-foreground",
            isCompact ? "px-4 py-2 text-sm" : "px-6 py-3 text-[15px]"
          )}
        >
          Começar grátis
          <ArrowRight className={isCompact ? "size-3.5" : "size-4"} />
        </button>
      </form>
      {error && <p className="text-xs font-medium text-red-400">{error}</p>}
    </div>
  )
}
