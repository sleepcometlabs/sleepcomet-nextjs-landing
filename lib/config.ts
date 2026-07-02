/**
 * URLs e constantes de configuração da Landing Page.
 *
 * Em produção, os valores hardcodados abaixo são usados.
 * Em desenvolvimento local, o .env.local pode sobrescrever via
 * NEXT_PUBLIC_APP_URL (já que process.env tem prioridade quando definido).
 */

export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://app.sleepcomet.com"

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://sleepcomet.com"

export const DISCORD_URL =
  process.env.NEXT_PUBLIC_DISCORD_URL || "https://discord.gg/sleepcomet"
