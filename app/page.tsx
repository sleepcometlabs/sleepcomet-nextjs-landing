import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { UrlCaptureProvider } from "@/components/landing/url-capture-context"
import { StickyUrlBar } from "@/components/landing/sticky-url-bar"
import dynamic from "next/dynamic"

const FeaturesSectionDemo = dynamic(() => import("@/components/features-section-demo-2"))
const HowItWorks = dynamic(() => import("@/components/landing/how-it-works").then((mod) => mod.HowItWorks))
const Integrations = dynamic(() => import("@/components/landing/integrations").then((mod) => mod.Integrations))
const Testimonials = dynamic(() => import("@/components/landing/testimonials").then((mod) => mod.Testimonials))
const Comparison = dynamic(() => import("@/components/landing/comparison").then((mod) => mod.Comparison))
const Pricing = dynamic(() => import("@/components/landing/pricing").then((mod) => mod.Pricing))
const FAQSection = dynamic(() => import("@/components/landing/faq-section").then((mod) => mod.FAQSection))
const Cta = dynamic(() => import("@/components/landing/cta").then((mod) => mod.Cta))
const Footer = dynamic(() => import("@/components/landing/footer").then((mod) => mod.Footer))

export default function Home() {
  return (
    <UrlCaptureProvider>
      <main className="bg-background text-foreground min-h-screen w-full">
        <Navbar />
        <Hero />
        <FeaturesSectionDemo />
        <HowItWorks />
        <Integrations />
        <Testimonials />
        <Comparison />
        <Pricing />
        <FAQSection />
        <Cta />
        <Footer />
      </main>
      <StickyUrlBar />
    </UrlCaptureProvider>
  )
}
