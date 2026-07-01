import posthog from "posthog-js"

posthog.init("phc_CoteijZVgzhhYXxa8uFyN8Wu4VTB7Y5JcPLEzE6cuNH9", {
  api_host: "https://us.i.posthog.com",
  ui_host: "https://us.posthog.com",
  defaults: "2026-01-30",
  capture_exceptions: true,
  debug: process.env.NODE_ENV === "development",
})
