"use client"

import Link from "next/link"
import Image from "next/image"
import {
  ArrowUpRight,
} from "lucide-react"

import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { StatusIndicator } from "./status-indicator";
import { CookieSettingsButton } from "./cookie-settings-button";

const productLinks = [
  { label: "Como funciona", href: "/como-funciona" },
  { label: "Clipagem IA", href: "/clipagem-ia" },
  { label: "Legendas automáticas", href: "/legendas-automaticas" },
  { label: "Corte de podcast", href: "/podcast" },
]

const companyLinks = [
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
]

const legalLinks = [
  { label: "Privacidade", href: "/privacy" },
  { label: "Termos", href: "/terms" },
  { label: "Exclusão de Dados", href: "/exclusao-de-dados" },
  { label: "Licenças", href: "/licencas" },
]

export function Footer() {
  return (
    <footer className="relative line-fade-t overflow-hidden bg-black px-6 pt-16 pb-8 sm:pt-28">

      <div className="relative mx-auto max-w-6xl">

        {/* TOP */}
        <div className="grid gap-14 pb-16 md:grid-cols-2 lg:grid-cols-5">

          {/* BRAND */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <Image src="/logo.png" alt="Sleepcomet" width={319} height={259} className="h-6 w-auto" />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
              Transforme vídeos longos em dezenas de clipes virais usando
              inteligência artificial. Automatize sua criação de conteúdo para
              TikTok, Reels e YouTube Shorts.
            </p>

            <div className="mt-8 flex items-center gap-3">

              <Link
                href="https://x.com/usesleepcomet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="flex h-12 w-12 items-center justify-center rounded-full hover:bg-white/5"
              >
                <FaXTwitter className="size-4" />
              </Link>

              <Link
                href="https://www.instagram.com/usesleepcomet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full hover:bg-white/5"
              >
                <FaInstagram className="size-4" />
              </Link>

              <Link
                href="https://www.reddit.com/r/sleepcomet/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Reddit"
                className="flex h-12 w-12 items-center justify-center rounded-full hover:bg-white/5"
              >
                <FaRedditAlien className="size-4" />
              </Link>

              <Link
                href="https://www.producthunt.com/@sleepcomet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Product Hunt"
                className="flex h-12 w-12 items-center justify-center rounded-full hover:bg-white/5"
              >
                <FaProductHunt className="size-4" />
              </Link>

              <Link
                href="https://github.com/sleepcometlabs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-12 w-12 items-center justify-center rounded-full hover:bg-white/5"
              >
                <FaGithub className="size-4" />
              </Link>

              <Link
                href="https://www.tiktok.com/@usesleepcomet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-12 w-12 items-center justify-center rounded-full hover:bg-white/5"
              >
                <FaTiktok className="size-4" />
              </Link>

              <Link
                href="https://www.youtube.com/@usesleepcomet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-12 w-12 items-center justify-center rounded-full hover:bg-white/5"
              >
                <FaYoutube className="size-4" />
              </Link>

            </div>
          </div>

          {/* PRODUCT */}
          <div>
            <h3 className="mb-5 text-sm font-semibold text-white">
              Produto
            </h3>

            <div className="flex flex-col gap-4">
              {productLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-1 text-sm text-white/70 underline-offset-4 hover:text-white hover:underline"
                >
                  {link.label}

                  <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="mb-5 text-sm font-semibold text-white">
              Empresa
            </h3>

            <div className="flex flex-col gap-4">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-1 text-sm text-white/70 underline-offset-4 hover:text-white hover:underline"
                >
                  {link.label}

                  <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="mb-5 text-sm font-semibold text-white">
              Recursos
            </h3>

            <div className="flex flex-col gap-4">
              <Link
                href="/roadmap"
                className="group flex items-center gap-1 text-sm text-white/80 underline-offset-4 hover:text-white hover:underline"
              >
                Roadmap
                <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100" />
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col items-start justify-between gap-6 pt-8 md:flex-row md:items-center">

          <div className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-white/80 underline-offset-4 hover:text-white hover:underline"
              >
                {link.label}
              </Link>
            ))}
            <CookieSettingsButton className="text-xs text-white/80 underline-offset-4 hover:text-white hover:underline">
              Cookies
            </CookieSettingsButton>
          </div>

          <StatusIndicator />

          <p className="text-xs text-white/80">
            © 2026 Sleepcomet. Todos os direitos reservados.
          </p>
        </div>
      </div>

      {/* GIANT TEXT */}
      <div className="relative mt-24 -mx-6">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
        <div aria-hidden="true" className="select-none text-center text-[14vw] leading-[0.85] font-black tracking-tighter text-white/5 whitespace-nowrap">
          SLEEPCOMET
        </div>
      </div>
    </footer>
  )
}