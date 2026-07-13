"use client"

// Analytics primário da Sleepcomet: manda pageviews pro coletor /px do app
// (app.sleepcomet.com, Pages Function + D1) com geo do próprio Cloudflare.
// O painel admin lê os agregados em /px-stats.
//
// Exclusão do dono: abrir qualquer página com ?sem-analytics uma vez por
// navegador — grava localStorage + cookie sc_nt=1 em .sleepcomet.com (cobre
// landing E app), e o coletor ainda descarta no servidor requests com esse
// cookie (por isso o credentials: "include" abaixo).

import { useEffect } from "react"
import { usePathname } from "next/navigation"

const COLLECTOR_URL = "https://app.sleepcomet.com/px"
const OPT_OUT_KEY = "sc-no-track"
const OPT_OUT_PARAM = "sem-analytics"

function isOptedOut(): boolean {
  try {
    if (localStorage.getItem(OPT_OUT_KEY) === "1") return true
  } catch {
    // sem localStorage — cookie decide
  }
  return /(?:^|;\s*)sc_nt=1(?:;|$)/.test(document.cookie)
}

function activateOptOutFromUrl() {
  if (!new URLSearchParams(window.location.search).has(OPT_OUT_PARAM)) return
  try {
    localStorage.setItem(OPT_OUT_KEY, "1")
  } catch {
    // cookie abaixo já cobre
  }
  const tenYears = 315360000
  document.cookie = `sc_nt=1; domain=.sleepcomet.com; path=/; max-age=${tenYears}; SameSite=Lax`
  document.cookie = `sc_nt=1; path=/; max-age=${tenYears}; SameSite=Lax`
  window.alert("Pronto! Este navegador nunca mais será contado no analytics da Sleepcomet.")
}

export function ScAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    activateOptOutFromUrl()
  }, [])

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return
    const host = window.location.hostname
    if (host === "localhost" || host === "127.0.0.1") return
    if (navigator.webdriver) return
    if (isOptedOut()) return

    const params = new URLSearchParams(window.location.search)
    fetch(COLLECTOR_URL, {
      method: "POST",
      keepalive: true,
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        site: "landing",
        path: pathname || "/",
        referrer: document.referrer,
        utmSource: params.get("utm_source") || "",
        utmMedium: params.get("utm_medium") || "",
        utmCampaign: params.get("utm_campaign") || "",
      }),
    }).catch(() => {
      // melhor-esforço — nunca pode afetar a página
    })
  }, [pathname])

  return null
}
