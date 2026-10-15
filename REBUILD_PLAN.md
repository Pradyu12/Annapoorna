# Annapoorna Enterprises — Full Rebuild Plan (From Scratch)

This plan replaces the mixed legacy site with one extraordinary, modern brand website.
It is based on the existing SOW plus pages 0–2 of the supplied `Annapoorna.pdf`
brochure (the PDF is image-based/scanned; further pages can be OCR'd after the
OCR API rate limit resets).

## 1. What the business actually is (from source documents)

- **Brand:** Annapoorna Enterprises
- **Position:** Bengaluru/Karnataka-focused B2B supply and facility partner
- **Founded:** 1998 by Shashi Kumar Mariyappa / Satish Kumar Mariyappa
- **Leadership:** promoter & Managing Director is an engineer with marketing/logistics background
- **Reach:** Karnataka-wide sourcing, sales & marketing, logistics, redistribution support, warehousing
- **Infrastructure:** own warehousing in strategic locations, manpower, sound financials, ethical practices
- **Market segments:** Corporate, IT/ITES, Manufacturing, Pharma, Retail, Hospitality
- **Growth claim:** target of 14 Crore revenue for FY 2019-20 (verify before publishing)
- **Journey claim:** 25 years of successful journey (verify/timestamp before publishing)
- **Offering:** hygiene/cleaning supplies, pantry supplies, facility maintenance, specialist cleaning,
  plants/landscaping, industrial/packaging supplies, government & corporate tender supply

## 2. Design direction: “Industrial Atelier”

Not a template. A distinct editorial system built on supply-chain logic.

- **Palette:** sand-white (#F7F4EF), graphite (#181A1F), instrument red (#D71920),
  steel (#B8C1C8), warm concrete (#E7E2DA). Red is rare and structural.
- **Typography:** Archivo 800 for display, Inter 400/500/600 for body, JetBrains Mono for SKUs/process codes.
- **Grid:** 12-column editorial grid with asymmetric hero, overlapping panels, diagonal cuts used once.
- **Graphics:** custom SVG isometric stacks, shelf grids, warehouse floorplans, process tracks.
  Real operational photography inside clipped frames, never full-bleed generic stock.
- **Motion:** scroll-locked product carousel, panel parallax, counter reveals, page wipes.
  Reduced-motion alternative shows static grids.
- **Texture:** subtle paper grain + red graph lines on concrete; no glassmorphism, no generic blobs.

## 3. Unique concept ideas

1. **Supply Map of Karnataka** — interactive SVG map with warehouse/branch markers and district coverage.
2. **Capability Matrix** — filter products/services by industry (Corporate, Pharma, Manufacturing, etc.).
3. **Requirement Wizard** — 4-step quote flow generating a structured enquiry summary.
4. **25-Year Timeline** — milestones and verified operational proofs (not vanity stats).
5. **Inventory Spotlight** — editorial cards with SKU-style labels and technical descriptions.
6. **Proof Rail** — one truthful proof per claim, linked to sourcing/delivery evidence when available.

## 4. Information architecture

- `/` Home
- `/about` Company, leadership, journey, infrastructure, ethics
- `/products` Category grid + filters
- `/products/:slug` Category detail (no invented product specs/prices)
- `/services` Housekeeping, pest control, electrical/plumbing, painting, cleaning, landscaping
- `/industries` industry-led case narratives
- `/tenders` Compliance, documentation, bulk sourcing workflow
- `/quote` Requirement wizard / enquiry
- `/contact` verified phones, email, locations, map

## 5. Content rules

- Remove unverified claims unless PDF/SOW validates them.
- Publish neutral language: “brochure-claimed” vs “verified”.
- Do not invent logos, testimonials, certifications, counts, or partner names.
- Use category-level descriptions only until product data is supplied.
- Quote wizard must route to a real backend; no fake success states.

## 6. Technical foundation

- **Stack:** Vite + React 19 + TypeScript + Tailwind CSS v4
- **UI:** Radix UI primitives, Lucide icons, Framer Motion only for section reveals
- **Forms:** React Hook Form + Zod; backend via serverless function or Formspree/EmailJS
- **Data:** local JSON for categories; CMS later (Sanity/Strapi) if client wants self-service
- **Assets:** AVIF/WebP images, SVG illustrations, lazy loading, font subsetting
- **Performance targets:** LCP ≤ 2.2s, CLS ≤ 0.05, INP ≤ 200ms on 4G
- **A11y:** AA contrast, keyboard nav, skip links, focus-visible, reduced motion
- **SEO:** unique metadata, JSON-LD LocalBusiness/Service, sitemap, canonicals, Open Graph
- **Testing:** Vitest, Playwright smoke tests, Lighthouse CI, axe-core

## 7. Delivery milestones (8 weeks)

1. **Week 1 — Strategy & content extraction**
   OCR/import the full brochure, finalise brand discovery, verify all factual claims.
2. **Week 2 — Design system**
   Tokens, typography, SVG illustration kit, key screens in Figma, motion guidelines.
3. **Weeks 3–4 — Component system**
   Layout primitives, cards, forms, nav, footer, section templates.
4. **Weeks 5–6 — Page implementation**
   All routes, quote wizard, interactive supply map, data wiring.
5. **Week 7 — Integration & QA**
   Form backend, image optimisation, accessibility/performance audits.
6. **Week 8 — Launch**
   Hosting, domain, SSL, analytics, handover docs.

## 8. Success criteria

- Visual identity is instantly distinct and professional
- Zero placeholder numbers/logos/testimonials at launch
- All links, actions, forms, and navigation work
- Mobile, tablet, laptop and desktop all pass visual QA
- Lighthouse accessibility/SEO/best-practices ≥ 95 on key pages
- Client can update text and category data without touching code

## 9. Immediate next action

1. OCR the remaining 25 brochure pages once the free OCR rate limit resets, or run a local OCR tool.
2. Decide the final company naming and verified public claims.
3. Approve the wireframes before implementing the new component system.

## 10. Applied now

A new premium static prototype was created in `/premium` with red/white sections and
SVG icons. The planned rebuild will replace it with the full component-driven architecture
above once the client approves the concept.