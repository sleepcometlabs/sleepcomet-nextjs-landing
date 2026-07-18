"use client"

import { AnimatePresence, motion } from "motion/react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
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
import { cn } from "@/lib/utils"

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

  return (
    <>
      {/* Fundo preto sólido cobrindo a largura toda; conteúdo alinhado ao
          mesmo max-w-6xl das outras seções da página. */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-black px-6 py-5">
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
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-18 z-40 max-h-[70vh] overflow-y-auto rounded-2xl border border-border/40 bg-background/95 p-4 backdrop-blur-2xl shadow-lg md:hidden"
          >
            <nav className="flex flex-col gap-1">
              <Link href="/" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted">
                Início
              </Link>
              {navItems.map((group) => (
                <div key={group.label} className="pt-2">
                  <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{group.label}</p>
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
              <Link href="/precos" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                Preços
              </Link>
              <hr className="my-2 border-border/50" />
              <Link
                href={APP_URL}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
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
