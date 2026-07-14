import type { Metadata, Viewport } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Script from "next/script"
import { ScAnalytics } from "@/components/sc-analytics"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sleepcomet.com"
const siteName = "Sleepcomet — Clipagem Automática com IA"
const titleDefault =
  "Sleepcomet - Cortar Vídeo com IA — Clipagem Automática para TikTok, Reels e Shorts"
const descriptionDefault =
  "Corte vídeos automaticamente com inteligência artificial. O Sleepcomet analisa seu vídeo, encontra os melhores momentos e gera clipes prontos para TikTok, Instagram Reels e YouTube Shorts em segundos. Comece grátis sem cartão de crédito."

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: titleDefault,
    template: "%s | Sleepcomet",
  },
  description: descriptionDefault,
  keywords: [
    "cortar vídeo com IA",
    "criar clipes automaticamente",
    "clipagem com inteligência artificial",
    "cortar vídeo online grátis",
    "editor de vídeo com IA",
    "criar clipes para TikTok",
    "clipes para Instagram Reels",
    "clipes para YouTube Shorts",
    "editar vídeo com inteligência artificial",
    "transcrever vídeo com IA",
    "legendas automáticas para vídeos",
    "ferramenta de clipagem automática",
    "melhor momento do vídeo automaticamente",
    "criador de conteúdo digital",
    "viralizar no TikTok",
    "edição de vídeo automática",
    "gerar clipes virais",
    "app de clipagem com IA",
    "plataforma de clipes com IA",
    "transcrição de vídeo automática",
    "cortar vídeo longo em clipes",
    "inteligência artificial para vídeos",
    "processar vídeo com IA",
    "extrair melhores momentos do vídeo",
    "sleepcomet",
  ],
  authors: [{ name: "Sleepcomet", url: siteUrl }],
  creator: "Sleepcomet",
  publisher: "Sleepcomet",
  formatDetection: {
    telephone: false,
    address: false,
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      "/favicon.ico",
    ],
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName,
    title: titleDefault,
    description: descriptionDefault,
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Sleepcomet — Cortar vídeo com IA e criar clipes automaticamente",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: titleDefault,
    description: descriptionDefault,
    images: [`${siteUrl}/logo.png`],
    site: "@sleepcomet",
    creator: "@sleepcomet",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Sleepcomet",
  },
}

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sleepcomet",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: "Plataforma de clipagem automática com inteligência artificial para criadores de conteúdo.",
  sameAs: [
    "https://x.com/usesleepcomet",
    "https://www.instagram.com/usesleepcomet",
    "https://www.reddit.com/r/sleepcomet/",
    "https://www.producthunt.com/@sleepcomet",
    "https://github.com/sleepcometlabs",
  ],
}

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description: descriptionDefault,
  inLanguage: "pt-BR",
}

const jsonLdSoftwareApp = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Sleepcomet",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  description: descriptionDefault,
  url: siteUrl,
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "0",
    highPrice: "39",
    priceCurrency: "USD",
    offerCount: 4,
    offers: [
      {
        "@type": "Offer",
        name: "Free",
        price: "0",
        priceCurrency: "USD",
        description: "Plano gratuito com 30 créditos por mês.",
      },
      {
        "@type": "Offer",
        name: "Creator",
        price: "19",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "19",
          priceCurrency: "USD",
          billingDuration: "P1M",
        },
      },
      {
        "@type": "Offer",
        name: "Pro",
        price: "39",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "39",
          priceCurrency: "USD",
          billingDuration: "P1M",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "1200",
    bestRating: "5",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn("antialiased", "dark", geist.className, "font-sans", geist.variable)}
    >
      <head></head>
      <body className="flex min-h-full flex-col bg-background text-foreground" cz-shortcut-listen="true">
        {children}
        <ScAnalytics />
        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              id="Cookiebot"
              src="https://consent.cookiebot.com/uc.js"
              data-cbid="66fb7182-d808-497c-a7d4-491eb50db333"
              data-blockingmode="auto"
              strategy="lazyOnload"
            />
            {process.env.NEXT_PUBLIC_GTM_ID && (
              <Script
                id="gtm"
                src={`https://www.googletagmanager.com/gtm.js?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
                strategy="afterInteractive"
              />
            )}
            {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
              <>
                <Script
                  id="ga-src"
                  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
                  strategy="afterInteractive"
                />
                <Script
                  id="ga-init"
                  strategy="afterInteractive"
                  dangerouslySetInnerHTML={{
                    __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', { anonymize_ip: true });
                    `,
                  }}
                />
              </>
            )}
            {process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID && (
              <Script
                id="ms-clarity"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
                    (function(c,l,a,r,i,t,y){
                      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
                  `,
                }}
              />
            )}
            {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
              <Script
                id="meta-pixel"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}
                    (window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
                    fbq('track', 'PageView');
                  `,
                }}
              />
            )}
          </>
        )}
        <noscript>
          {process.env.NEXT_PUBLIC_GTM_ID && (
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          )}
          {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_META_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          )}
        </noscript>
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
          strategy="afterInteractive"
        />
        <Script
          id="json-ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
          strategy="afterInteractive"
        />
        <Script
          id="json-ld-software-app"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftwareApp) }}
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
