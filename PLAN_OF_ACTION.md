# Plan of Action — Annapoorna Corporate Website Rebuild

## Repository

- GitHub: `https://github.com/Pradyu12/Annapoorna.git`
- Primary application: `app/` (Vite + React 19 + TypeScript + Tailwind CSS v4)
- Production hosting: GitHub Pages via `.github/workflows/deploy.yml`
- Route mode: hash-based routing for reliable GitHub Pages delivery

## Current Implementation

- Home page with immersive hero, mobile navigation, floating supply cards, product categories, services, industries, process, contact, and quote sections
- About, Products, Services, Industries, Contact, and Quote routes
- Real brand logo in header/footer
- Responsive layouts and production build
- GitHub Pages deployment workflow

## Scope

### In scope

- Public corporate website for Annapoorna Enterprises
- Modern responsive UI for desktop, tablet, and mobile
- Verified business information
- Product and service category presentation
- Contact and quote pathways
- GitHub Pages hosting
- Accessibility, performance, SEO, and maintainability

### Out of scope

- Unverified quantitative claims, logos, testimonials, certifications, or partner names
- Fake form-success states without a configured backend
- E-commerce, user accounts, native applications, multi-language support
- Ongoing content or maintenance retainers unless separately agreed

## Active Work

- [X] React + TypeScript + Tailwind rebuild scaffold
- [X] Multi-route application
- [X] Mobile navigation
- [X] Brand logo integration
- [X] GitHub Pages workflow
- [ ] Real form endpoint integration
- [ ] Remaining brochure OCR and claim verification
- [ ] Product, service, and industry detail route expansion
- [ ] Accessibility audit and lazy image optimization
- [ ] Lighthouse and browser QA

## Deployment Plan

1. Commit clean source including `app/`, documentation, and the GitHub Pages workflow.
2. Remove temporary OCR and unused utility files from the repository.
3. Push to `main`.
4. Run the GitHub Actions workflow.
5. Set GitHub Pages source to **GitHub Actions** in repository settings.
6. Verify the live URL and route transitions.

## QA Checklist

- Build succeeds with `npm run build`
- No console errors on desktop or mobile views
- Mobile navigation opens, closes, and links resolve
- Product card hover and imagery load correctly
- Reduced-motion preference disables non-essential motion
- GitHub Pages asset and route URLs resolve from the repository subpath
