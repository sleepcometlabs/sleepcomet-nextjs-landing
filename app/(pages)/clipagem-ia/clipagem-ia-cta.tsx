"use client"

import { Button } from "@/components/ui/button"

export function ClipagemIACta({ appUrl }: { appUrl: string }) {
  return (
    <Button size="lg" className="mt-8" asChild>
      <a href={appUrl}>Testar clipagem grátis</a>
    </Button>
  )
}
