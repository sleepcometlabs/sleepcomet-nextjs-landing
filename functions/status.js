// GET /status — resumo do UptimeRobot pro footer da landing. A chamada real
// à API do UptimeRobot acontece AQUI, no servidor (a chave nunca chega ao
// navegador); o client só faz fetch same-origin em /status, sem CORS.
//
// Cacheado 60s na edge (mesmo bucket entre todos os visitantes) — evita
// bater no rate limit do UptimeRobot mesmo em pico de tráfego.

const STATUS_MAP = {
  0: "paused",
  1: "pending", // ainda sem primeira checagem
  2: "up",
  8: "down", // "seems down"
  9: "down",
}

export async function onRequestGet({ env, request }) {
  const cache = caches.default
  const cacheKey = new Request(new URL("/status", request.url), request)
  const cached = await cache.match(cacheKey)
  if (cached) return cached

  if (!env.UPTIMEROBOT_API_KEY) {
    return new Response(JSON.stringify({ error: "not configured" }), {
      status: 501,
      headers: { "content-type": "application/json" },
    })
  }

  const upstream = await fetch("https://api.uptimerobot.com/v2/getMonitors", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: `api_key=${encodeURIComponent(env.UPTIMEROBOT_API_KEY)}&format=json`,
  })

  if (!upstream.ok) {
    return new Response(JSON.stringify({ error: "upstream_error" }), { status: 502 })
  }

  const data = await upstream.json()
  if (data.stat !== "ok") {
    return new Response(JSON.stringify({ error: "upstream_error" }), { status: 502 })
  }

  const monitors = (data.monitors || []).map((m) => ({
    name: m.friendly_name,
    status: STATUS_MAP[m.status] || "unknown",
  }))

  const anyDown = monitors.some((m) => m.status === "down")
  const overall = anyDown ? "down" : "up"

  const body = JSON.stringify({
    overall,
    updatedAt: new Date().toISOString(),
    monitors,
  })

  const response = new Response(body, {
    status: 200,
    headers: {
      "content-type": "application/json",
      "cache-control": "public, max-age=60",
    },
  })
  await cache.put(cacheKey, response.clone())
  return response
}
