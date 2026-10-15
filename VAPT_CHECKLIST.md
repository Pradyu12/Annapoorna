# VAPT Checklist — Annapoorna Website

**Target:** https://pradyu12.github.io/Annapoorna/
**Date:** 2026-10-16
**Type:** Static React site on GitHub Pages

---

## 1. Dependency Security

| Check | Status | Notes |
|-------|--------|-------|
| `npm audit` | **PASS** | 0 vulnerabilities found |
| Outdated packages | Review | `npm outdated` before next update |
| Lock file committed | **PASS** | `app/package-lock.json` in repo |

## 2. Security Headers

| Header | Status | Value |
|--------|--------|-------|
| `X-Frame-Options` | **Added** | `DENY` |
| `X-Content-Type-Options` | **Added** | `nosniff` |
| `Referrer-Policy` | **Added** | `strict-origin-when-cross-origin` |
| `Content-Security-Policy` | **Added** | Restrictive policy |
| `Permissions-Policy` | **Added** | `camera=(), microphone=(), geolocation=()` |
| `Strict-Transport-Security` | N/A | Enforced by GitHub Pages |
| `X-XSS-Protection` | N/A | Deprecated; CSP covers this |
| `Cross-Origin-Opener-Policy` | **Added** | `same-origin` |
| `Cross-Origin-Resource-Policy` | **Added** | `same-origin` |
| `require-trusted-types-for` | **Added** | `script` directive |
| Cache-Control (assets) | **Added** | `public, max-age=31536000, immutable` |
| Cache-Control (HTML) | **Added** | `public, max-age=0, must-revalidate` |

**File:** `app/public/_headers`

## 3. Client-Side Code Review

| Check | Status | Notes |
|-------|--------|-------|
| XSS via `dangerouslySetInnerHTML` | **PASS** | Not used in codebase |
| XSS via user input | **PASS** | React auto-escapes; no raw HTML injection |
| Form validation | **Present** | Client-side only; no backend |
| Secrets in code | **PASS** | No API keys/tokens hardcoded |
| Third-party scripts | **PASS** | Only Google Fonts + Unsplash images |
| WebGL canvas | **Review** | `ImmersiveCanvas.tsx` — no user-controlled input |

## 4. GitHub Pages / Infrastructure

| Check | Status | Notes |
|-------|--------|-------|
| HTTPS enforced | **PASS** | GitHub Pages default |
| Branch protection | **Review** | Enable for `main` in repo settings |
| GitHub Actions secrets | **N/A** | No secrets used in workflow |
| Dependabot alerts | **Setup** | `.github/dependabot.yml` added |
| Code scanning | **Setup** | GitHub Actions workflow added |

## 5. Forms & Data Flow

| Check | Status | Notes |
|-------|--------|-------|
| Quote/contact forms | **Info** | No backend endpoint configured |
| Form submission | **Info** | Client-side only; no data leaves browser |
| localStorage/cookies | **None** | Not used |
| External API calls | **None** | Only static Unsplash image loads |

## 6. Penetration Testing Scope

Since this is a **static site with no backend**, the attack surface is limited:

### In Scope
- CSP bypass attempts
- XSS in React component rendering
- Dependency supply-chain attacks
- GitHub Actions workflow injection
- DNS/SSL misconfiguration
- Cache poisoning via headers

### Out of Scope
- Server-side exploitation (no server)
- Database injection (no database)
- Authentication bypass (no auth)
- API abuse (no API)

## 7. Recommended Tools for Full VAPT

| Tool | Purpose |
|------|---------|
| OWASP ZAP | Automated web vulnerability scanner |
| Burp Suite | Manual penetration testing |
| Snyk | Dependency + container scanning |
| `npx audit` | npm dependency audit |
| SSL Labs | SSL/TLS configuration test |
| securityheaders.com | Header analysis |

## 8. Sign-Off

| Role | Name | Date |
|------|------|------|
| Automated scan | AI Agent | 2026-10-16 |
| Manual review | _____________ | ____-__-__ |
| Client acceptance | _____________ | ____-__-__ |
