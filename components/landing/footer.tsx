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
  { label: "Cookies", href: "/cookies" },
  { label: "Exclusão de Dados", href: "/exclusao-de-dados" },
  { label: "Licenças", href: "/licencas" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-background px-6 pt-16 pb-8 sm:pt-28">

      <div className="relative mx-auto max-w-6xl">

        {/* TOP */}
        <div className="grid gap-14 border-b border-white/10 pb-16 md:grid-cols-2 lg:grid-cols-5">

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
                className="flex h-12 w-12 items-center justify-center rounded-full hover:bg-white/5 duration-75 transition-all"
              >
                <FaXTwitter className="size-4" />
              </Link>

              <Link
                href="https://www.instagram.com/usesleepcomet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full hover:bg-white/5 duration-75 transition-all"
              >
                <FaInstagram className="size-4" />
              </Link>

              <Link
                href="https://www.reddit.com/r/sleepcomet/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Reddit"
                className="flex h-12 w-12 items-center justify-center rounded-full hover:bg-white/5 duration-75 transition-all"
              >
                <FaRedditAlien className="size-4" />
              </Link>

              <Link
                href="https://www.producthunt.com/@sleepcomet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Product Hunt"
                className="flex h-12 w-12 items-center justify-center rounded-full hover:bg-white/5 duration-75 transition-all"
              >
                <FaProductHunt className="size-4" />
              </Link>

              <Link
                href="https://github.com/sleepcometlabs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-12 w-12 items-center justify-center rounded-full hover:bg-white/5 duration-75 transition-all"
              >
                <FaGithub className="size-4" />
              </Link>

              <Link
                href="https://www.tiktok.com/@usesleepcomet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-12 w-12 items-center justify-center rounded-full hover:bg-white/5 duration-75 transition-all"
              >
                <FaTiktok className="size-4" />
              </Link>

              <Link
                href="https://www.youtube.com/@usesleepcomet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-12 w-12 items-center justify-center rounded-full hover:bg-white/5 duration-75 transition-all"
              >
                <FaYoutube className="size-4" />
              </Link>

              <a
                href="https://www.producthunt.com/products/sleepcomet-clipagem-automatica-com-ia?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-sleepcomet-clipagem-automatica-com-ia"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto inline-block shrink-0"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1195589&theme=dark"
                  alt="Sleepcomet — Clipagem Automática com IA - Turn long videos into viral clips with AI | Product Hunt"
                  width={150}
                  height={32}
                  className="h-8 w-auto"
                />
              </a>

              <a
                href="https://viberank.dev/apps/Sleepcomet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block shrink-0"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://viberank.dev/badge?app=Sleepcomet&theme=dark"
                  alt="Sleepcomet on VibeRank"
                  className="h-8 w-auto"
                />
              </a>

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
                  className="group flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}

                  <ArrowUpRight className="size-3 opacity-0 transition-all group-hover:opacity-100" />
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
                  className="group flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}

                  <ArrowUpRight className="size-3 opacity-0 transition-all group-hover:opacity-100" />
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
                className="group flex items-center gap-1 text-sm text-white/80 transition-colors hover:text-white"
              >
                Roadmap
                <ArrowUpRight className="size-3 opacity-0 transition-all group-hover:opacity-100" />
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
                className="text-xs text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
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