# SOW Addendum — React Rebuild and GitHub Pages Deployment

This addendum supersedes the older static HTML/CSS/JS assumptions where they differ from the current implementation.

## 1. Updated technology

- Frontend framework: React 19
- Language: TypeScript
- Build tool: Vite
- Styling: Tailwind CSS v4
- Routing: hash-based routes for reliable GitHub Pages subpath hosting
- Hosting: GitHub Pages via GitHub Actions

## 2. Updated IA

- `/` Home
- `/about`
- `/products`
- `/services`
- `/industries`
- `/contact`
- `/quote`

## 3. Repository and deployment

- Repository: `https://github.com/Pradyu12/Annapoorna.git`
- Application directory: `app/`
- Deployment workflow: `.github/workflows/deploy.yml`
- GitHub Pages source should be set to **GitHub Actions**

## 4. Verification requirements

- Build passes before deployment
- The live site loads without console errors
- GitHub Pages asset paths work from the repository subpath
- Mobile navigation and route transitions work
- Verified brochure facts only; no invented claims, testimonials, logos, or metrics