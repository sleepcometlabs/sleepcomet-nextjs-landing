"use client"

import { useEffect, useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { UrlCapturePill } from "./url-capture-pill"

gsap.registerPlugin(ScrollTrigger)

// useEffect só roda depois do primeiro paint — com ele, a barra aparece
// visível por um frame (ou mais, em devices lentos) antes do gsap.set
// escondê-la. useLayoutEffect roda antes da pintura, eliminando o flash.
// No SSR do Next (build estático) useLayoutEffect não existe, então cai
// pro useEffect normal (não há paint no servidor mesmo).
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect

// Réplica compacta do pill do Hero, fixa no rodapé — some enquanto o Hero
// está visível e desliza suave pra dentro assim que o usuário rola além
// dele. Só existe na Home (é montada direto em app/page.tsx, não em
// nenhuma outra rota).
export function StickyUrlBar() {
  const barRef = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    const el = barRef.current
    if (!el) return
    gsap.set(el, { y: "120%", autoAlpha: 0 })
  }, [])

  useEffect(() => {
    const el = barRef.current
    const hero = document.getElementById("hero")
    if (!el || !hero) return

    const trigger = ScrollTrigger.create({
      trigger: hero,
      start: "bottom top",
      onEnter: () => gsap.to(el, { y: "0%", autoAlpha: 1, duration: 0.5, ease: "power3.out" }),
      onLeaveBack: () => gsap.to(el, { y: "120%", autoAlpha: 0, duration: 0.4, ease: "power2.in" }),
    })

    return () => {
      trigger.kill()
      gsap.killTweensOf(el)
    }
  }, [])

  return (
    <div
      ref={barRef}
      // translate-y-[120%]/opacity-0/invisible como classes ESTÁTICAS (não só
      // via gsap.set): o export estático do Next já manda esse HTML pronto
      // pro navegador, que pinta a marcação crua antes de qualquer JS rodar
      // — sem essas classes, esse primeiro paint mostraria a barra visível
      // por um instante, e nem useLayoutEffect evita isso (ele só roda
      // depois da hidratação, que já é tarde demais pro paint inicial).
      className="fixed inset-x-0 bottom-4 z-50 flex translate-y-[120%] justify-center px-4 opacity-0 invisible sm:bottom-6"
    >
      <UrlCapturePill size="compact" />
    </div>
  )
}
