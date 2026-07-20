import type { Metadata } from "next"
import { Section } from "@/components/ui/section"
import { StatusPagesContent } from "./status-pages-content"
import { SITE_URL } from "@/lib/config"

export const metadata: Metadata = {
  title: "Status — Sleepcomet",
  description: "Status em tempo real da plataforma Sleepcomet e dos seus principais serviços.",
  robots: { index: false },
  alternates: {
    canonical: `${SITE_URL}/status-pages/`,
  },
}

export default function StatusPages() {
  return (
    <div>
      <Section className="relative isolate -mt-16 overflow-hidden pt-24 pb-16 text-center sm:pb-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand/25 blur-[120px]"
        />
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            <span className="bg-linear-to-r from-brand to-brand/60 bg-clip-text text-transparent">
              Status
            </span>{" "}
            da plataforma
          </h1>
          <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
            Acompanhe em tempo real a disponibilidade da plataforma Sleepcomet.
          </p>
        </div>
      </Section>

      <Section>
        <StatusPagesContent />
      </Section>
    </div>
  )
}
