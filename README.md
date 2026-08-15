# Raynaters Tech — AI Automation Funnel

Marketing site and conversion funnel for Raynaters Tech, an AI automation agency.
Long-scroll homepage plus vertical landing pages, case studies and resources.

## Stack

- **Next.js 14** (App Router) + **TypeScript** strict mode
- **Tailwind CSS 3** with a token-driven config
- **Framer Motion** for restrained, purposeful motion
- **Boldonse** (display) + **Plus Jakarta Sans** (UI), via `next/font`
- **lucide-react** for icons
- **Cal.com** embed for booking

## Run

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Editing copy

Homepage copy lives in [`lib/content.ts`](lib/content.ts). Edit there — never touch JSX
to change a word. Inner pages keep their copy in their own `lib/` data files.

## Structure

```
app/
├── layout.tsx                  # Fonts, metadata, analytics
├── page.tsx                    # Homepage section order
├── about/                      # About page
├── book/                       # Cal.com booking page
├── case-studies/               # Index + [slug]
├── resources/                  # Index + [slug]
├── [vertical]-uk/              # Six vertical landing pages
└── sitemap.ts, robots.ts       # Generated from lib/ data

components/
├── ui/                         # Button, Container, Reveal, Marquee, Eyebrow…
├── sections/                   # Homepage sections, in render order
├── landing/                    # Vertical landing-page blocks
├── case-studies/, resources/   # Cards
└── seo/                        # JSON-LD

lib/
├── content.ts                  # Homepage copy (single source of truth)
├── landing-pages/              # Typed vertical page data
├── case-studies/, resources/   # Typed content collections
├── seo/                        # Canonical URLs, schema, UTM helpers
└── design-tokens.ts            # Colour + motion tokens
```

## Content notes

- **No prices anywhere.** The only ask on the site is the free audit call.
  Client result figures (e.g. recovered revenue) are proof, not pricing.
- **Video testimonials** live in `public/testimonials/`. The `name` and `role`
  fields in `videoTestimonials` (lib/content.ts) are intentionally blank —
  fill them in and the name plate renders automatically.
- **Landing page showcase panels** are rendered from real data
  (`ShowcaseVisual`), not screenshots. Edit the numbers in the page's data file.

## Design rules baked in

- One accent colour (`#D3FBA3` lime), used only on CTAs, key numbers and accent details
- Square corners and 2px borders throughout — no rounded cards, no glassmorphism
- No gradients on backgrounds (one exception: the subtle hero glow)
- No emoji in UI chrome — `lucide-react` only
- Every section has a unique layout — never a repeated three-column feature grid
- Hero headline line breaks are authored; type is sized so no line wraps
- CTA buttons sit on a hard offset slab and carry an attention pulse
  (both disabled under `prefers-reduced-motion`)
- Mobile typography scales independently, tested at 375px
