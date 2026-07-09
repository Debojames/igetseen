# iGetSeen — marketing site

Dark, premium marketing site for iGetSeen. Next.js 14 (App Router) + Tailwind CSS + shadcn-style components + Framer Motion. Vercel-ready.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import the repo at vercel.com — zero config needed.
3. Point igetseen.com's DNS at Vercel (or keep Netlify: `npm run build` works there too with the Next.js runtime).

## Pages

- `/` — Home (hero, trust strip, problem, solution, packages, demos, industries, 4 steps, FAQ, final CTA)
- `/pricing` — Starter $199 / Growth $399 / Pro custom + maintenance section
- `/portfolio` — Demo sites (labeled honestly as concept builds — swap in real client screenshots as testimonials land)
- `/industries` — Pain point + what-we-build per trade
- `/how-it-works` — 4-step process, expanded
- `/start` — Intake form
- `/contact` — Contact form + hello@igetseen.com

## Wire up the forms

Both forms POST to `app/api/intake/route.ts`, which currently validates and logs.
Open that file — it has three integration options commented in, including
forwarding to a Google Apps Script webhook to match your existing
Gmail → Sheets order-tracking flow.

## Edit content in one place

All copy-heavy content (pricing tiers, industries, FAQs, demo cards, steps, nav)
lives in `lib/data.ts`. Design tokens live in `tailwind.config.ts`.

## Fonts

Bricolage Grotesque (display) + Instrument Sans (body), loaded via `next/font`
— self-hosted via npm (fontsource), no Google Fonts network call at build or runtime — works fully offline.
