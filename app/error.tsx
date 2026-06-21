"use client"

import { useEffect } from "react"
import posthog from "posthog-js"
import { Button } from "@/components/ui/button"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    posthog.captureException(error)
    posthog.capture("error_encountered", {
      error_message: error.message,
      error_digest: error.digest,
    })
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-2xl font-bold">Algo deu errado</h1>
      <p className="text-muted-foreground max-w-md">
        Ocorreu um erro inesperado. Tente novamente ou contate o suporte.
      </p>
      <Button
        onClick={() => {
          posthog.capture("error_retry_clicked")
          reset()
        }}
      >
        Tentar novamente
      </Button>
    </div>
  )
}
