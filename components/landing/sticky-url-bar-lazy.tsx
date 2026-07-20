"use client"

import dynamic from "next/dynamic"

// next/dynamic com ssr:false só pode ser chamado a partir de um Client
// Component — por isso esse wrapper existe separado do sticky-url-bar.tsx,
// pra poder ser importado direto de Server Components (as pages).
// GSAP/ScrollTrigger só é necessário depois que o usuário rola além do
// Hero, então adiar esse carregamento tira a lib do caminho crítico do LCP.
export const StickyUrlBar = dynamic(
  () => import("./sticky-url-bar").then((mod) => mod.StickyUrlBar),
  { ssr: false }
)
