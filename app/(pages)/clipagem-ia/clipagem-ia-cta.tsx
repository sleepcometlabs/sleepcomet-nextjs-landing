"use client"

import { ShimmerButton } from "@/components/ui/shimmer-button"

export function ClipagemIACta({ appUrl }: { appUrl: string }) {
  return (
    <a href={appUrl} className="mt-8 inline-block">
      <ShimmerButton>Testar clipagem grátis</ShimmerButton>
    </a>
  )
}
