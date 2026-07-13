"use client"

import { AnimatePresence, motion } from "motion/react"
import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { APP_URL } from "@/lib/config"

const navItems = [
  {
    label: "Produto",
    items: [
      { label: "Como funciona", href: "/como-funciona" },
      { label: "Clipagem com IA", href: "/clipagem-ia" },
      { label: "Legendas automáticas", href: "/legendas-automaticas" },
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

function Dropdown({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        onClick={() => setOpen(!open)}
        aria-haspopup="true"
        aria-expanded={open}
        className="flex cursor-pointer items-center gap-1 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        {label}
        <ChevronDown className={`size-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            role="menu"
            className="absolute left-0 top-full mt-1 w-48 rounded-xl border border-border/40 bg-background/95 p-1.5 backdrop-blur-2xl shadow-lg"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                role="menuitem"
                className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
        <nav className="relative flex w-full max-w-6xl items-center justify-between rounded-2xl border border-border/40 bg-background/60 px-4 py-2 backdrop-blur-xs shadow-lg shadow-black/5">
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-linear-to-r from-brand/5 via-transparent to-brand/5" />
          </div>

          <Link href="/" className="relative z-10 flex items-center gap-2">
            <Image src="/logo.png" alt="Sleepcomet" width={319} height={259} className="h-4 w-auto" />
          </Link>

          <div className="relative z-10 hidden items-center gap-1 md:flex">
            <Link href="/" className="px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
              Início
            </Link>
            {navItems.map((group) => (
              <Dropdown key={group.label} label={group.label} items={group.items} />
            ))}
            <Link href="/precos" className="px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
              Preços
            </Link>
          </div>

          <div className="relative z-10 flex items-center gap-2">
            <Link
              href={APP_URL}
              className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground md:block"
            >
              Entrar
            </Link>

            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Fechar menu de navegação" : "Abrir menu de navegação"}
              aria-expanded={open}
              className="ml-1 inline-flex size-12 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground md:hidden"
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </nav>
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
