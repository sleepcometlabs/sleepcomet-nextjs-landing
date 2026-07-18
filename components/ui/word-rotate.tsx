"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { cn } from "@/lib/utils"

interface WordRotateProps {
  words: string[]
  interval?: number
  className?: string
  active?: boolean
}

// Rotaciona frases dentro de um único <span> via GSAP, trocando o texto
// direto no DOM (sem re-render do React) — leve o bastante pra rodar o
// tempo todo sem impacto de performance. Respeita prefers-reduced-motion
// mostrando só a primeira frase, parada.
export function WordRotate({ words, interval = 2400, className, active = true }: WordRotateProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const indexRef = useRef(0)

  useEffect(() => {
    const el = ref.current
    if (!el || words.length === 0) return
    el.textContent = words[0]

    if (!active) return
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) return

    const tick = () => {
      indexRef.current = (indexRef.current + 1) % words.length
      gsap.timeline()
        .to(el, { opacity: 0, y: -8, duration: 0.28, ease: "power2.in" })
        .call(() => {
          el.textContent = words[indexRef.current]
        })
        .fromTo(el, { y: 8 }, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out" })
    }

    const id = setInterval(tick, interval)
    return () => {
      clearInterval(id)
      gsap.killTweensOf(el)
    }
  }, [words, interval, active])

  return <span ref={ref} className={cn("inline-block will-change-transform", className)} aria-hidden="true" />
}
