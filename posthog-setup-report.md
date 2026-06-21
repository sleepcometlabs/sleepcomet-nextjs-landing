<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of your Sleepcomet landing page. PostHog was already installed (`posthog-js`) and initialized in `instrumentation-client.ts` with a reverse proxy, exception capture, and the 2026-01-30 defaults. Several events were already instrumented across the landing page. The wizard audited the full codebase, identified four tracking gaps, filled them, set the correct environment variable values in `.env.local`, and created a PostHog dashboard with five insights covering the full visitor lifecycle.

## Events overview

| Event | Description | File |
|---|---|---|
| `hero_cta_clicked` | Hero section "Começar grátis" button click | `components/landing/hero.tsx` |
| `cta_clicked` | Bottom CTA section "Ver planos" button click | `components/landing/cta.tsx` |
| `pricing_frequency_changed` | Billing period toggle (monthly ↔ yearly) | `components/landing/pricing.tsx` |
| `pricing_plan_clicked` | Pricing plan CTA click — includes `plan`, `plan_name`, `billing_period` | `components/landing/pricing.tsx` |
| `login_clicked` | "Entrar" link click in navbar (desktop and mobile) | `components/landing/navbar.tsx` |
| `faq_item_expanded` | FAQ accordion item opened — includes `question` | `components/landing/faq-section.tsx` |
| `contact_form_submitted` | Contact form submitted — includes `subject` | `app/(pages)/contato/contact-content.tsx` |
| `contact_email_clicked` | Departmental email link click — includes `department` | `app/(pages)/contato/contact-content.tsx` |
| `contact_social_clicked` | Social link click on contact page — includes `platform`, `url` | `app/(pages)/contato/contact-content.tsx` |
| `clipagem_ia_cta_clicked` | "Testar clipagem grátis" CTA on AI Clipping feature page *(new)* | `app/(pages)/clipagem-ia/clipagem-ia-cta.tsx` |
| `footer_social_clicked` | Social icon click in footer — includes `platform` *(new)* | `components/landing/footer.tsx` |
| `error_encountered` | Next.js error boundary rendered — includes `error_message`, `error_digest` *(new)* | `app/error.tsx` |
| `error_retry_clicked` | "Tentar novamente" retry button on error page *(new)* | `app/error.tsx` |

## Files changed

| File | Change |
|---|---|
| `app/error.tsx` | Added `posthog.captureException`, `error_encountered` (useEffect), and `error_retry_clicked` (onClick) |
| `components/landing/footer.tsx` | Added `posthog` import and `footer_social_clicked` onClick on each social icon |
| `app/(pages)/clipagem-ia/page.tsx` | Replaced static Button with `<ClipagemIACta>` client component |
| `app/(pages)/clipagem-ia/clipagem-ia-cta.tsx` | New client component wrapping the CTA button with `clipagem_ia_cta_clicked` tracking |
| `.env.local` | Set `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` to correct values |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/468311/dashboard/1707538)
- [Sign-up CTA Clicks](https://us.posthog.com/project/468311/insights/qAlzbPAB) — Hero, bottom, and AI-clipping CTAs over time
- [Pricing Plan Clicks by Plan](https://us.posthog.com/project/468311/insights/fwHftyN7) — Which plan CTA converts best
- [Contact & Lead Engagement](https://us.posthog.com/project/468311/insights/mpbFlkgb) — Form submissions, email clicks, social clicks
- [Pricing Billing Period Toggle](https://us.posthog.com/project/468311/insights/uwTcfLOs) — Monthly vs annual interest signal
- [Error Encounters & Retries](https://us.posthog.com/project/468311/insights/Kb00dkhb) — Reliability monitoring

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
