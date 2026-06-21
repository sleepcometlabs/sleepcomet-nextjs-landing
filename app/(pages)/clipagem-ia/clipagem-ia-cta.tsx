"use client"

import posthog from "posthog-js"
import { Button } from "@/components/ui/button"

export function ClipagemIACta({ appUrl }: { appUrl: string }) {
  return (
    <Button
      size="lg"
      className="mt-8"
      onClick={() => posthog.capture("clipagem_ia_cta_clicked", { destination: appUrl })}
      asChild
    >
      <a href={appUrl}>Testar clipagem grátis</a>
    </Button>
  )
}
