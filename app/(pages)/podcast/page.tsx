import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { PodcastHero, PODCAST_ROTATING_MESSAGES } from "./podcast-hero"
import { PodcastFeatures } from "./podcast-features"
import { PodcastHowItWorks } from "./podcast-how-it-works"
import { UrlCaptureProvider } from "@/components/landing/url-capture-context"
import { StickyUrlBar } from "@/components/landing/sticky-url-bar"
import { SITE_URL } from "@/lib/config"

const Comparison = dynamic(() => import("@/components/landing/comparison").then((mod) => mod.Comparison))
const Pricing = dynamic(() => import("@/components/landing/pricing").then((mod) => mod.Pricing))
const FAQSection = dynamic(() => import("@/components/landing/faq-section").then((mod) => mod.FAQSection))
const Cta = dynamic(() => import("@/components/landing/cta").then((mod) => mod.Cta))

const PODCAST_FAQS = [
  {
    q: "Funciona com qualquer episódio de podcast?",
    a: "Sim. Cole o link do episódio (YouTube, Vimeo ou upload direto) e a IA processa a gravação inteira, mesmo em episódios de horas.",
  },
  {
    q: "A IA consegue diferenciar host e convidado?",
    a: "Sim. A IA identifica cada voz separadamente, então entende de verdade o ritmo da entrevista — não corta só por silêncio.",
  },
]

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
      <PodcastHero />
      <PodcastFeatures />
      <PodcastHowItWorks />
      <Comparison />
      <Pricing />
      <FAQSection extraFaqs={PODCAST_FAQS} />
      <Cta />
      <StickyUrlBar messages={PODCAST_ROTATING_MESSAGES} />
    </UrlCaptureProvider>
  )
}
