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
}

export function UrlCapturePill({ size = "default", className }: UrlCapturePillProps) {
  const { url, setUrl, error, submit } = useUrlCapture()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    submit()
  }

  const isCompact = size === "compact"

  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <form
        onSubmit={handleSubmit}
        className={cn(
          "flex w-full items-center rounded-full border-4 border-neutral-300 bg-white p-1.5 shadow-lg shadow-black/20",
          isCompact ? "max-w-md" : "max-w-xl"
        )}
      >
        <div className="relative min-w-0 flex-1">
          {url.length === 0 && (
            <div
              className={cn(
                "pointer-events-none absolute inset-y-0 left-0 flex items-center text-neutral-500",
                isCompact ? "pl-3.5 text-sm" : "pl-5 text-[15px]"
              )}
            >
              <WordRotate words={ROTATING_MESSAGES} />
            </div>
          )}
          <input
            type="text"
            inputMode="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            aria-label="Cole o link do vídeo do YouTube ou Vimeo"
            className={cn(
              "w-full min-w-0 bg-transparent text-neutral-900 outline-none",
              isCompact ? "px-3.5 py-2 text-sm" : "px-5 py-3 text-[15px]"
            )}
          />
        </div>
        <button
          type="submit"
          className={cn(
            "flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-brand font-semibold text-brand-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]",
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
