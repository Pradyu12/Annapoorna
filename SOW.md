# Statement of Work (SOW)

**Project:** Annapoorna — Corporate Website Design & Development
**Client:** Annapoorna (Bengaluru, Karnataka, India)
**Vendor:** [Vendor Name]
**Version:** 1.0
**Date:** [Date]
**SOW Reference:** ANN-SOW-001

---

## 1. Purpose

This Statement of Work describes the scope, deliverables, schedule, responsibilities, and acceptance criteria for the design, development, and launch of the public corporate website for **Annapoorna**, a Bengaluru-based provider of facility hygiene products, pantry supplies, maintenance and cleaning services, plants and landscaping, industrial/commercial supplies, and government/corporate tender supply.

The website is intended to present Annapoorna's full service portfolio, generate qualified enquiries through a contact/quote mechanism, and establish a credible, professional online presence for a business that currently operates without a digital storefront.

---

## 2. Background & Objectives

### 2.1 Background
Annapoorna serves commercial and industrial facilities across Bengaluru with a broad, multi-category offering. The absence of a website means enquiries depend entirely on referrals and outbound sales. A professional web presence is required to capture inbound demand, explain the service range, and build trust with facility managers, procurement teams, and government/corporate buyers.

### 2.2 Objectives
| # | Objective | Success Measure |
|---|-----------|-----------------|
| O1 | Present the complete service portfolio clearly | All 7 service categories documented on dedicated pages |
| O2 | Generate inbound enquiries | Functional contact/quote form and click-to-call, WhatsApp channels |
| O3 | Build trust and credibility | Professional visual design, industries served, consistent branding |
| O4 | Rank in local search | Semantic SEO, local business structured data, Bengaluru-focused metadata |
| O5 | Work on every device | Fully responsive from 360px to 1600px+ |
| O6 | Be maintainable by a non-developer | Clean, commented, dependency-free HTML/CSS/JS |

---

## 3. Scope of Work

### 3.1 Phase 1 — Discovery & Content
- Confirm brand assets (logo, colour palette, tone of voice).
- Finalise service list, service descriptions, and industries served.
- Collect client-supplied content: company profile, contact details, testimonials, imagery.
- Define the site map and page hierarchy.

### 3.2 Phase 2 — Information Architecture & Site Map
Final site map:

```
index.html                          Home
about.html                          About Us
services.html                       Services overview
services/
  health-hygiene.html               Health & Hygiene
  pantry-supplies.html              Pantry Supplies
  facility-maintenance.html         Facility Maintenance
  cleaning-services.html            Cleaning Services
  plants-landscaping.html           Plants & Landscaping
  industrial-commercial-supplies.html  Industrial & Commercial Supplies
  tenders.html                      Government & Corporate Tenders
contact.html                        Contact / Request a Quote
```

**Total: 11 pages** (1 home, 1 about, 1 services overview, 7 service detail, 1 contact).

### 3.3 Phase 3 — Visual Design
- Modern, professional visual identity appropriate to a B2B facilities-services brand.
- Charcoal-and-crimson high-contrast editorial hero on the home page with a blended isometric facility/logistics visual (gradient-mapped to the palette).
- Consistent design system: typography (Sora for headings, Inter for body), colour tokens, spacing, buttons, cards.
- Responsive layouts across all breakpoints with a mobile navigation pattern.

### 3.4 Phase 4 — Front-End Development
- Hand-built static site: semantic **HTML5**, a single **CSS** stylesheet, and vanilla **JavaScript**. No frameworks, no build step.
- Reusable components: sticky header with scroll state, mobile burger navigation, service cards, feature blocks, process steps, footer, floating WhatsApp and back-to-top actions.
- Interactive behaviour: scroll-reveal animations, hero parallax (with `prefers-reduced-motion` support), dynamic copyright year, client-side form validation.
- Accessibility: skip-to-content link, ARIA labelling, keyboard-navigable menu with Escape-to-close, visible focus states.

### 3.5 Phase 5 — Contact & Lead Capture
- Contact page with a "Request a Quote" section and enquiry form.
- Client-side validation (required fields, email and phone formats, consent checkbox, honeypot spam guard).
- Integration of a form-submission back end once an endpoint is supplied.
- Click-to-call link and floating WhatsApp button with pre-filled enquiry message.

### 3.6 Phase 6 — SEO & Performance
- Unique title and meta description per page.
- Open Graph and Twitter card metadata.
- Canonical URLs and `LocalBusiness` JSON-LD structured data.
- Optimised images, lazy loading, and font preloading.

### 3.7 Phase 7 — Testing & Launch
- Cross-browser testing (Chrome, Edge, Firefox, Safari).
- Responsive testing on target viewports (360, 400, 599, 768, 1024, 1200, 1600px).
- Accessibility and link-integrity checks.
- Deployment to the production domain and DNS/SSL configuration.

---

## 4. Deliverables

| # | Deliverable | Format | Status |
|---|-------------|--------|--------|
| D1 | 11 responsive web pages | HTML5 | Complete |
| D2 | Central stylesheet (design system + responsive rules) | CSS | Complete |
| D3 | Site behaviour script (nav, reveal, parallax, form, WhatsApp) | JavaScript | Complete |
| D4 | Brand logo and favicon | SVG | Complete |
| D5 | Hero visual, inpainted and alpha-feathered for seamless blend | PNG | Complete |
| D6 | SEO metadata and LocalBusiness structured data | JSON-LD | Complete |
| D7 | Contact/quote form with validation | HTML/JS | Complete (back end pending) |
| D8 | Deployment to production domain | Hosting | Pending |
| D9 | Handover documentation and this SOW | Markdown | Complete |

---

## 5. Technical Specifications

| Aspect | Detail |
|--------|--------|
| Stack | Static HTML5 / CSS3 / vanilla ES6 JavaScript |
| Build tooling | None — plain files, open `index.html` directly |
| Stylesheet | Single `assets/css/styles.css` (~1,550 lines) |
| Script | Single `assets/js/main.js` (deferred) |
| Fonts | Google Fonts — Sora (headings), Inter (body) |
| Icons | Inline SVG |
| Imagery | `assets/img/` — logo, favicon, hero scene |
| Browser support | Latest 2 versions of Chrome, Edge, Firefox, Safari |
| Responsive range | 360px – 1600px+ |
| Accessibility | WCAG 2.1 AA target (skip link, ARIA, keyboard nav, contrast) |

---

## 6. Client Responsibilities

The Client will provide, in a timely manner:

1. Confirmed company **phone number** and **email address** (currently placeholders).
2. Confirmed **WhatsApp business number**.
3. Registered **domain name** and access to DNS settings.
4. **Hosting** account or approval for the Vendor's recommended hosting.
5. Approved company **logo** in vector form (or approval of the current SVG).
6. Real **photography** of facilities, team, or completed work (optional but recommended).
7. **Testimonials** or client references, if available.
8. A **form back end** endpoint (e.g. Formspree, EmailJS, or an in-house API) if email delivery of enquiries is required.
9. Timely review and sign-off at each milestone.

---

## 7. Assumptions

- The site is a **static marketing website**; no database, user accounts, or e-commerce is included.
- Content for all pages will be finalised by the Client; the Vendor supplies structure and placeholder copy where content is outstanding.
- Hosting, domain registration, and SSL fees are billed to the Client and are outside the development fee unless otherwise agreed.
- The form back end (email delivery) is a third-party service; setup and its recurring fees are the Client's responsibility unless a provider is procured by the Vendor.
- Two rounds of revision are included per design/development milestone.

---

## 8. Exclusions

The following are **not** included in this SOW:

- Custom photography or video production.
- Ongoing content writing or copywriting beyond initial page copy.
- E-commerce, payment gateway, or client login areas.
- Native mobile applications.
- Multi-language/localisation support.
- Ongoing maintenance, hosting management, or SEO retainers (available under a separate agreement).
- Email hosting or mailbox provisioning.
- Submission to local business directories beyond on-page structured data.

---

## 9. Project Schedule

Estimated durations below assume timely client feedback and content delivery.

| Milestone | Activities | Duration |
|-----------|-----------|----------|
| M1 | Discovery, content gathering, site map sign-off | Week 1 |
| M2 | Visual design and design-system approval | Weeks 2–3 |
| M3 | Front-end build of all 11 pages | Weeks 4–5 |
| M4 | Contact form, interactivity, and SEO implementation | Week 6 |
| M5 | Testing, revision, and client UAT | Week 7 |
| M6 | Deployment, launch, and handover | Week 8 |

**Estimated total: 8 weeks** from content kick-off to launch.

---

## 10. Acceptance Criteria

Each deliverable is deemed accepted when:

1. All 11 pages render correctly across the target browsers and viewports listed in §5.
2. Every internal link and asset reference resolves without error (link audit returns zero broken links).
3. The contact form validates input client-side and displays success/error states; submission routes to the configured endpoint.
4. Navigation, mobile menu, scroll-reveal, parallax, and back-to-top behaviours function as described.
5. `prefers-reduced-motion` correctly disables animation.
6. Unique titles, meta descriptions, and valid structured data are present on all pages.
7. Accessibility checks pass: skip link, keyboard navigation, ARIA labels, and colour contrast.
8. CSS parses with balanced braces and no orphaned selectors.

Written acceptance is requested at each milestone sign-off.

---

## 11. Change Management

Requests outside the scope defined in §3 and §8 are handled as change requests. Each request will be documented with an impact assessment on schedule and cost, and will proceed only upon written approval from the Client.

---

## 12. Roles & Responsibilities

| Role | Party | Responsibility |
|------|-------|----------------|
| Project Sponsor | Client | Approves scope, budget, and final sign-off |
| Content Owner | Client | Supplies and approves all copy, images, and contact details |
| Project Lead / Developer | Vendor | Design, development, testing, deployment, and documentation |

Communication will occur via [email / agreed channel] with a standing [weekly/bi-weekly] status check-in.

---

## 13. Commercial Terms

| Item | Detail |
|------|--------|
| Project fee | [Amount / Rate] |
| Payment schedule | [e.g. 40% on kick-off, 40% at design approval, 20% on launch] |
| Included revisions | Two (2) rounds per milestone |
| Additional revisions | Billed at [Hourly Rate] |
| Third-party costs (hosting, domain, SSL, form service) | Billed to Client at cost |
| Post-launch support | [e.g. 30 days of bug-fix support included] |
| Ongoing maintenance | Available under a separate agreement |

---

## 14. Sign-Off

By signing below, both parties agree to the scope, deliverables, schedule, and terms outlined in this Statement of Work.

| | Client — Annapoorna | Vendor |
|---|---------------------|--------|
| **Name** | | |
| **Title** | | |
| **Signature** | | |
| **Date** | | |

---

## Appendix A — Current Asset Inventory

| Path | Description |
|------|-------------|
| `index.html` | Home page with charcoal-and-crimson hero |
| `about.html` | About page |
| `services.html` | Services overview |
| `services/*.html` | 7 service detail pages |
| `contact.html` | Contact / Request a Quote |
| `assets/css/styles.css` | Full design system and responsive rules |
| `assets/js/main.js` | Site behaviour and form handling |
| `assets/img/logo.svg` | Brand logo |
| `assets/img/favicon.svg` | Favicon |
| `assets/img/hero-scene.png` | Feathered hero visual, palette-mapped (583 KB) |
| `assets/img/hero-scene-navy.png` | Original navy hero, archived backup (602 KB) |
| `assets/img/hero-scene.jpg` | Hero visual source (125 KB) |

## 15. Rebuild Addendum — GitHub Pages Deployment

The implementation has moved from the legacy static site to a React + TypeScript + Vite + Tailwind CSS application.

- Primary application: `app/`
- Repository: `https://github.com/Pradyu12/Annapoorna.git`
- Hosting target: GitHub Pages via `.github/workflows/deploy.yml`
- Current routes: `/`, `/about`, `/products`, `/services`, `/industries`, `/contact`, `/quote`
- Launch checks: successful build, clean browser console, working mobile navigation, verified business content, GitHub Pages asset paths

## Appendix B — Open Items Before Launch

- [ ] Replace placeholder phone number (`+91 00000 00000`) with the live number.
- [ ] Replace placeholder WhatsApp number (`910000000000` in `data-wa-number`).
- [ ] Confirm `hello@annapoorna.in` as the live enquiry email.
- [ ] Configure `FORM_ENDPOINT` in `assets/js/main.js` for real form delivery.
- [ ] Point the domain DNS to the production host and enable SSL.
- [ ] Verify canonical URLs match the final live domain (`https://www.annapoorna.in/`).
- [ ] Replace or supplement the hero visual with approved brand imagery.