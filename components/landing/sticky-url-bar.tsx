"use client"

import { useEffect, useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { UrlCapturePill } from "./url-capture-pill"
import { MOBILE_MENU_EVENT } from "./navbar"

gsap.registerPlugin(ScrollTrigger)

// useEffect só roda depois do primeiro paint — com ele, a barra aparece
// visível por um frame (ou mais, em devices lentos) antes do gsap.set
// escondê-la. useLayoutEffect roda antes da pintura, eliminando o flash.
// No SSR do Next (build estático) useLayoutEffect não existe, então cai
// pro useEffect normal (não há paint no servidor mesmo).
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect

// Distância que a barra "atravessa" ao entrar/sair — dá a impressão de que
// o pill do Hero desce a tela inteira até se fixar no rodapé, em vez de só
// deslizar alguns pixels de baixo pra cima.
const OFFSCREEN_Y = "-85vh"

// Réplica compacta do pill do Hero, fixa no rodapé. Fica escondida enquanto
// o Hero está visível OU quando o Footer entra em cena (pra não sobrepor o
// rodapé), e desce a tela até se fixar assim que o usuário passa do Hero.
// Ativa em qualquer página que monte uma seção com id="hero" (Home e
// /podcast); nas demais, o ScrollTrigger não encontra o alvo e a barra fica
// escondida sem erro.
interface StickyUrlBarProps {
  messages?: string[]
}

export function StickyUrlBar({ messages }: StickyUrlBarProps) {
  const barRef = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    const el = barRef.current
    if (!el) return
    gsap.set(el, { y: OFFSCREEN_Y, autoAlpha: 0 })
  }, [])

  useEffect(() => {
    const el = barRef.current
    const hero = document.getElementById("hero")
    const footer = document.querySelector("footer")
    if (!el || !hero) return

    let pastHero = false
    let nearFooter = false
    let menuOpen = false

    const show = () => gsap.to(el, { y: "0%", autoAlpha: 1, duration: 0.6, ease: "power3.out" })
    const hide = () => gsap.to(el, { y: OFFSCREEN_Y, autoAlpha: 0, duration: 0.4, ease: "power2.in" })
    const update = () => {
      if (pastHero && !nearFooter && !menuOpen) show()
      else hide()
    }

    const onMobileMenuToggle = (e: Event) => {
      menuOpen = Boolean((e as CustomEvent<boolean>).detail)
      update()
    }
    window.addEventListener(MOBILE_MENU_EVENT, onMobileMenuToggle)

    const heroTrigger = ScrollTrigger.create({
      trigger: hero,
      start: "bottom top",
      onEnter: () => {
        pastHero = true
        update()
      },
      onLeaveBack: () => {
        pastHero = false
        update()
      },
    })

    const footerTrigger = footer
      ? ScrollTrigger.create({
          trigger: footer,
          start: "top bottom",
          onEnter: () => {
            nearFooter = true
            update()
          },
          onLeaveBack: () => {
            nearFooter = false
            update()
          },
        })
      : null

    return () => {
      heroTrigger.kill()
      footerTrigger?.kill()
      window.removeEventListener(MOBILE_MENU_EVENT, onMobileMenuToggle)
      gsap.killTweensOf(el)
    }
  }, [])

  return (
    <div
      ref={barRef}
      // -translate-y-[85vh]/opacity-0/invisible como classes ESTÁTICAS (não só
      // via gsap.set): o export estático do Next já manda esse HTML pronto
      // pro navegador, que pinta a marcação crua antes de qualquer JS rodar
      // — sem essas classes, esse primeiro paint mostraria a barra visível
      // por um instante, e nem useLayoutEffect evita isso (ele só roda
      // depois da hidratação, que já é tarde demais pro paint inicial).
      className="fixed inset-x-0 bottom-4 z-50 flex -translate-y-[85vh] justify-center px-4 opacity-0 invisible sm:bottom-6"
    >
      <UrlCapturePill size="compact" messages={messages} />
    </div>
  )
}
