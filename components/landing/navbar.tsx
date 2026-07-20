"use client"

import { AnimatePresence, motion } from "motion/react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { APP_URL } from "@/lib/config"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

// Evento usado só pra avisar a StickyUrlBar (montada fora da árvore da
// Navbar) que o menu fullscreen abriu/fechou, sem precisar de um contexto
// global — a Navbar aparece em páginas que não têm UrlCaptureProvider.
export const MOBILE_MENU_EVENT = "sc:mobile-menu"

const navItems = [
  {
    label: "Produto",
    items: [
      { label: "Como funciona", href: "/como-funciona" },
      { label: "Clipagem com IA", href: "/clipagem-ia" },
      { label: "Legendas automáticas", href: "/legendas-automaticas" },
      { label: "Corte de podcast", href: "/podcast" },
    ],
  },
  {
    label: "Empresa",
    items: [
      { label: "Sobre", href: "/sobre" },
      { label: "Contato", href: "/contato" },
    ],
  },
  {
    label: "Recursos",
    items: [
      { label: "Roadmap", href: "/roadmap" },
    ],
  },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  // Trava o scroll do body enquanto o menu fullscreen mobile está aberto,
  // e avisa a StickyUrlBar pra sumir enquanto ele estiver aberto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    window.dispatchEvent(new CustomEvent(MOBILE_MENU_EVENT, { detail: open }))
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      {/* Fundo preto translúcido com blur cobrindo a largura toda; conteúdo
          alinhado ao mesmo max-w-6xl das outras seções da página. */}
      <div className="fixed top-0 left-0 right-0 z-50 flex line-fade-b items-center justify-between bg-black/30 px-6 py-5 backdrop-blur-xl">
        <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between">
          <Link href="/" className="relative z-10 flex items-center gap-2">
            <Image src="/logo.png" alt="Sleepcomet" width={319} height={259} className="h-4 w-auto" />
            <span className="font-[family-name:var(--font-figtree)] text-lg font-medium lowercase text-white">
              sleepcomet
            </span>
          </Link>

          {/* Centralizado por posição absoluta, não por space-between — assim
              a largura da logo+título de um lado e do Entrar do outro não
              empurra o menu pra fora do centro real da página. */}
          <NavigationMenu viewport={false} className="absolute left-1/2 z-10 hidden -translate-x-1/2 md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white/90 hover:bg-white/10 hover:text-white")}>
                  <Link href="/">Início</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              {navItems.map((group) => (
                <NavigationMenuItem key={group.label}>
                  <NavigationMenuTrigger className="bg-transparent text-white/90 hover:bg-white/10 hover:text-white">
                    {group.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-1">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link href={item.href}>{item.label}</Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white/90 hover:bg-white/10 hover:text-white")}>
                  <Link href="/precos">Preços</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="relative z-10 flex items-center gap-2">
            <Link
              href={APP_URL}
              className="hidden rounded-lg bg-[#333333] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3f3f3f] md:block"
            >
              Entrar
            </Link>

            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Fechar menu de navegação" : "Abrir menu de navegação"}
              aria-expanded={open}
              className="ml-1 inline-flex size-12 items-center justify-center rounded-lg text-white/80 hover:text-white md:hidden"
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-black md:hidden"
          >
            <nav className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center px-6 pt-24 pb-16">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="pb-6 text-3xl font-semibold tracking-tight text-white"
              >
                Início
              </Link>

              <Accordion type="single" collapsible className="w-full">
                {navItems.map((group) => (
                  <AccordionItem key={group.label} value={group.label}>
                    <AccordionTrigger className="text-2xl font-semibold tracking-tight text-white">
                      {group.label}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-4 pb-4 pl-1">
                        {group.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="text-lg text-white/70 hover:text-white"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <Link
                href="/precos"
                onClick={() => setOpen(false)}
                className="relative line-fade-t mt-2 pt-6 text-3xl font-semibold tracking-tight text-white"
              >
                Preços
              </Link>

              <Link
                href={APP_URL}
                onClick={() => setOpen(false)}
                className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-[#333333] px-6 py-3 text-base font-medium text-white hover:bg-[#3f3f3f]"
              >
                Entrar
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
