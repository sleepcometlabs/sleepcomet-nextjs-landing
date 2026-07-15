import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { PodcastHero } from "./podcast-hero"
import { PodcastFeatures } from "./podcast-features"
import { UrlCaptureProvider } from "@/components/landing/url-capture-context"
import { StickyUrlBar } from "@/components/landing/sticky-url-bar"
import { SITE_URL } from "@/lib/config"

const HowItWorks = dynamic(() => import("@/components/landing/how-it-works").then((mod) => mod.HowItWorks))
const Comparison = dynamic(() => import("@/components/landing/comparison").then((mod) => mod.Comparison))
const Pricing = dynamic(() => import("@/components/landing/pricing").then((mod) => mod.Pricing))
const FAQSection = dynamic(() => import("@/components/landing/faq-section").then((mod) => mod.FAQSection))
const Cta = dynamic(() => import("@/components/landing/cta").then((mod) => mod.Cta))

export const metadata: Metadata = {
  title: "Corte seu Podcast em Clipes com IA — Sleepcomet",
  description:
    "Cole o link do episódio e a IA encontra os melhores momentos da conversa, corta e gera legenda sincronizada — pronto pra TikTok, Reels e Shorts.",
  openGraph: {
    title: "Corte seu Podcast em Clipes com IA | Sleepcomet",
    description:
      "A IA que entende o ritmo da entrevista: detecta cada voz, corta episódios longos e devolve os cortes prontos pra publicar.",
    url: `${SITE_URL}/podcast/`,
  },
  alternates: {
    canonical: `${SITE_URL}/podcast/`,
  },
}

export default function PodcastLanding() {
  return (
    <UrlCaptureProvider>
      <div className="pt-20">
        <PodcastHero />
        <PodcastFeatures />
        <HowItWorks />
        <Comparison />
        <Pricing />
        <FAQSection />
        <Cta />
      </div>
      <StickyUrlBar />
    </UrlCaptureProvider>
  )
}
