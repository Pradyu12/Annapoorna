# Annapoorna Website — Fix & Evolution Plan

This plan consolidates the existing static site with the requested red-and-white professional
corporate direction (reference: Pinterest “Logist – Web Page Design for Logistic Company”).

## 1. Baseline snapshot

- **Root site (primary):** static HTML5/CSS/JS, 11 pages + assets.
- **Duplicate copy:** `webgl-site/public/*` mirrors the root pages; `webgl-site/dist/*` is build output.
- **Shared assets:** `assets/css/styles.css`, `assets/css/at-core.css`, `assets/css/at-home.css`,
  `assets/js/main.js`, `assets/js/at-core.js`, `assets/js/at-home.js`, `assets/js/at-webgl.js`.
- **SOW status:** pages, SEO, accessibility and responsive rules marked complete; placeholders remain
  (phone, WhatsApp, email verification, form endpoint, canonical domain).
- **Reference site:** light, professional logistics layout with red/white accents.

## 2. Issues found during audit

1. **Split visual identity.** Two incompatible CSS layers are active:
   - `styles.css` is the older light red/white design system.
   - `at-core.css` / `at-home.css` impose a dark, WebGL-heavy “Active Theory” layer.
   - The desired direction is a **light, premium red-and-white corporate site**.
2. **Undefined / conflicting CSS custom properties.** `at-core.css` references
   `--primary`, `--ink`, `--accent`, `--border`, `--surface`, `--primary-soft`, `--white`,
   `--shadow-*`, `--radius-sm`, `--primary-dark` while defining a different, incomplete set.
   They only resolve because `styles.css` is loaded afterward.
3. **WebGL overuse.** `at-webgl.js` (Three.js) is included on most pages even where it is not needed,
   and service pages lack the matching Three.js import map that `index.html` contains.
4. **Placeholder data still present.** Phone (`+91 00000 00000`), WhatsApp (`910000000000`),
   email (`hello@annapoorna.in`) and `FORM_ENDPOINT` in `main.js` are unset.
5. **Form simulates success.** When `FORM_ENDPOINT` is empty, `handleSubmit` reports “enquiry received”
   even though nothing was delivered.
6. **Mixed mojibake.** Several service meta descriptions contain `�?` replacement characters.
7. **Minor CSS typos.** For example `gap: 10x` in `.at-scroll-hint`.
8. **Duplicate project copies risk drift.** Code exists in root + `webgl-site/public` + `webgl-site/dist`,
   so fixes must be applied once at the root and propagated deliberately.
9. **Name mismatch.** Branding uses “Annapoorna”; the requested spec uses
   “Annapoorna Enterprises” (`sales@annapoornaentp.com`, phones `9108653934 / 9845006172`).

## 3. Target visual direction (from the reference and new spec)

- **Palette:** red `#D71920`, deep red `#A80F18`, white `#FFFFFF`, soft gray `#F7F7F7`,
  text `#171717`, secondary `#666666`, borders `#E7E7E7`.
- **Typography:** Manrope / Plus Jakarta Sans for headings, Inter for body.
- **Layout:** light background, bold editorial headings, generous whitespace, rounded cards
  (12–20px), subtle borders and shadows, high-quality photography.
- **Components:** sticky white header, red “Request a Quote” CTA, floating WhatsApp/back-to-top,
  trust strip, product categories (6 cards), services (red section), industries (6 cards),
  4-step process, quote form, dark footer with red accent line.
- **Motion:** fade-up reveals, subtle image zoom, staggered hero entrance,
  reduced-motion support, no distracting parallax on most pages.

## 4. Execution phases

### Phase 0 — Stabilize (1–3 days)

- Choose the final token set and typography before editing CSS.
- Add a single source of truth: consolidate component/control styles into `styles.css`
  and reduce `at-core.css` to a thin compatibility shim or remove it.
- Remove the temporary diagnostic overlay and debug behavior from `at-webgl.js`.
- Run `node --check`, the link audit, and Lighthouse on the current build to capture a baseline.

### Phase 1 — Immediate fixes on the existing static site (1 week)

1. **Fix form delivery semantics.**
   - Configure `FORM_ENDPOINT`, or explicitly fail with a clear message.
   - Remove simulated success whenever no backend is configured.
   - Add loading/success/error states and preserve them across refreshes if possible.
2. **Fix placeholders and identity.**
   - Replace placeholder phone/WhatsApp numbers, confirm email and business name,
     verify canonical domain (`https://www.annapoorna.in/`).
   - Correct mojibake in service meta descriptions.
3. **Fix navigation and WebGL.**
   - Remove `at-webgl.js` from non-hero pages, or add the matching import map.
   - Add missing `id="quote"` anchor on the contact page for CTA links (already present;
     verify all pages link to it correctly).
4. **Fix small CSS defects.**
   - Correct typos and self-closing property mistakes.
   - Ensure consistent header shadow, mobile burger animation, and focus rings.

### Phase 2 — Visual unification (1–2 weeks)

- Convert all pages to the light red/white system (header, hero, cards, footer).
- Replace the dark immersive WebGL homepage with a clean editorial hero:
  - “Everything Your Business Needs. One Reliable Partner.”
  - red highlight on “One Reliable Partner”
  - trust strip below hero
- Refactor service pages to use standard shared classes instead of missing `at-*`
  section classes.
- Normalize spacing, container width, grid breakpoints and mobile behavior.
- Confirm every page shares the same footer, WhatsApp float, back-to-top button and analytics hooks.

### Phase 3 — Content and UX completeness (1 week)

- Add or complete the sections from the requested spec:
  - About, Product Categories (6), Services (6), Industries (6), Process (4 steps),
    Why Choose Us, Quote Request, Contact.
- Remove unverified testimonials/certifications/quantitative claims.
- Add maps only after address verification.
- Improve accessibility: skip links, ARIA labels, keyboard menu, visible focus, contrast checks,
  and reduced-motion support.
- Add image loading (`loading="lazy"` below the fold) and responsive image sizes.

### Phase 4 — Long-term rebuild to React + TypeScript + Tailwind (3–6 weeks)

Selected only if the client wants the modern component architecture from the specification:

- Initialize `npm create vite@latest` with React + TypeScript + Tailwind.
- Create a shared component library: `Button`, `Card`, `SectionHeader`, `Hero`, `TrustStrip`,
  `Process`, `QuoteForm`, `Header`, `Footer`.
- Implement routes: Home, About, Products, Product Details, Services, Industries, Contact.
- Build a validated enquiry form and connect it to a real backend or email service.
  Do not simulate delivery when unconfigured.
- Migrate assets into `public/` and make image paths stable.
- Remove duplicated static copies (`webgl-site/public`, `webgl-site/dist`) after cutover.
- Run TypeScript checks, Playwright smoke tests for navigation/form validation, and
  Lighthouse for SEO/accessibility/performance.

### Phase 5 — QA and launch (1 week)

- Verify all 11+ pages at 360, 400, 599, 768, 1024, 1200, 1600px.
- Zero broken internal links or missing assets.
- Cross-browser: Chrome, Edge, Firefox, Safari.
- Validate JSON-LD, canonical URLs and metadata on every page.
- Configure hosting, domain DNS and SSL.
- Final visual review against red/white professional target.

## 5. Decisions needed from the client

1. Brand name: “Annapoorna” vs. “Annapoorna Enterprises”.
2. Primary stack: keep static HTML or rebuild in React + TypeScript + Tailwind.
3. Form backend: Formspree / EmailJS / in-house API.
4. Confirmed contact numbers and email:
   `9108653934 / 9845006172` and `sales@annapoornaentp.com`.
5. Final hero/product photography and image rights.
6. Domain, hosting and analytics provider.

## 6. Acceptance criteria

- Every page renders correctly across target browsers and viewports.
- Zero broken links and zero missing assets.
- Form validation plus real delivery (or explicit misconfiguration error).
- Consistent sticky header, mobile navigation, animations, cursor and back-to-top behavior.
- Reduced-motion mode disables animation.
- Unique title, description, canonical and structured data on every page.
- Contrast and accessibility checks pass.
- CSS and JS parse without errors.

## 7. Recommended immediate next step

Apply Phase 0 and Phase 1 first on the root static site so the public pages stop showing mixed
dark/light styling, accidental WebGL errors, placeholder contact data, and simulated form success.
Then decide whether to proceed with the static cleanup (Phase 2–3) or the full React rebuild
(Phase 4).