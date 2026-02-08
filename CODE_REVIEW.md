# Complete Code Review – Le Lever du Pinceau

**Date:** Production readiness  
**Scope:** Full project triple-check and code review

---

## 1. Routing & URLs ✅

### App.jsx
- **Home:** `/` → `NewHomePage` (NewWebsiteLayout).
- **Redirects:** `/new-home` → `/`, `/new-home/contact` → `/contact`, `/new-home/a-propos` → `/a-propos`, `/new-contact` → `/contact`.
- **Password:** No `PasswordProtectedPage`; all relevant routes are public.
- **Legacy:** Old site under `/legacy/*`; `/soumission` still points to `FreeQuotationPage`.

### Internal links (all updated)
- **`/contact`** (replacing `/new-contact`) in:
  - `BlogPostPage`, `BlogPage`, `ServicesPage`, `PeintreProfessionnelPage`, `AvisPage`
  - `PeintureCommercialePage`, `PeintureExterieurePage`, `PeintureResidentiellePage`, `PeintureIndustriellePage`
  - `WebsiteNavBar`, `MobileDrawer`, `NewWebsiteLayout`
  - `ServiceCTASection`, `CityCTASection`
- **`/`** (replacing `/new-home**) in breadcrumbs, nav, and test route lists.
- **ContactPage** schema: `item` and `url` set to `https://www.leleverdupinceau.ca/contact`.

### Canonicals & schema
- Contact: `https://www.leleverdupinceau.ca/contact`.
- About: `https://www.leleverdupinceau.ca/a-propos`.
- Other pages use `leleverdupinceau.ca` (no www) in breadcrumbs/schema; consider standardizing to `www.leleverdupinceau.ca` later if desired.

---

## 2. SEO & indexing ✅

### robots.txt
- **Allowed:** All main site URLs.
- **Blocked:** `/admin/`, `/timesheet`, `/legacy/`.
- **Sitemap:** `Sitemap: https://www.leleverdupinceau.ca/sitemap.xml`.

### noindex
- **Removed** from all main content pages (home, contact, about, avis, services, blog, city pages, service pages, blog post page).
- **Kept** on `NotFoundPage` (404).
- **LandingPageV2** (`/fr/peintre-montreal`, `/en/peintre-montreal`): `noindex` only when `indexable === false`; currently `indexable` is `true` in App.

### Sitemap (public/sitemap.xml)
- Contains: `/`, `/contact`, `/a-propos`, `/avis`, `/peintre-professionnel`, `/services`, `/secteurs-desservis`, `/blog`, plus existing URLs (soumission, politiques, fr/en peintre-montreal).

---

## 3. Redirects ✅

- **Client-side:** `App.jsx` uses `<Navigate replace />` for `/new-home`, `/new-home/contact`, `/new-home/a-propos`, `/new-contact`.
- **Netlify (netlify.toml):** 301 redirects for `/new-home`, `/new-home/contact`, `/new-home/a-propos`, `/new-contact`.

---

## 4. Console & debug ✅

- **Production app code:** No `console.log` / `console.debug` / `debugger` in UI or core flows.
- **Error handling:** `console.error` only in catch blocks (webhooks, forms, admin/employee).
- **Tests/scripts:** `console.log` only in `test/*` and `scripts/*` (acceptable).

---

## 5. TODOs / FIXMEs ✅

- No `TODO`, `FIXME`, `XXX`, or `HACK` in `src/**/*.{jsx,js}`.

---

## 6. Linting ✅

- No linter errors in `App.jsx`, `lelever-next/pages`, `lelever-next/navigation`, `lelever-next/layout`.

---

## 7. Scripts ✅

- **verify-dev-protection.js:** Updated for production: only checks `Disallow: /admin/` and `Disallow: /timesheet`, sitemap only flags `/new-landing`, noindex only checked on 404, password check replaced by “production mode” message.
- **verify-links.js:** Valid routes set includes `/` and `/contact` instead of `/new-home`; comment updated for hash validation.
- **verify-routes.js, open-all-routes.js, RoutingTests.js:** Route lists use `/` and `/contact` (no `/new-home` or `/new-contact`).
- **update-sitemap.js:** Still removes legacy new-home/new-contact URLs from sitemap if present; safe to keep.

---

## 8. Unused / legacy code

- **PasswordProtectedPage.jsx:** No longer used in routes; file kept for possible future use. Safe to delete if not needed.
- **MainPage (WebSiteLandingPage), Nousjoindre, AboutUs, Emplois, etc.:** Still used under `/legacy` and/or `/soumission`; no change required.

---

## 9. Domain consistency (optional)

- **Canonicals:** Contact and About use `https://www.leleverdupinceau.ca/...`.
- **Breadcrumbs/schema:** Many files use `https://leleverdupinceau.ca/...` (no www). For strict consistency, consider a global base URL and using `www` everywhere (or vice versa). Not required for correctness.

---

## 10. Security & access

- **Admin/timesheet:** Blocked in `robots.txt`; no password in app for public site.
- **Legacy:** Under `/legacy` and blocked in `robots.txt` via `Disallow: /legacy/`.

---

## Summary

| Area              | Status | Notes                                      |
|-------------------|--------|--------------------------------------------|
| Routes            | ✅     | `/` = new home; redirects in place        |
| Internal links    | ✅     | All `/new-contact` → `/contact`            |
| Schema/canonicals | ✅     | Contact/About use www; rest mixed           |
| Password          | ✅     | Removed from all routes                    |
| robots.txt        | ✅     | Production-ready                            |
| noindex           | ✅     | Removed from main pages; 404 keeps noindex |
| Sitemap           | ✅     | Main production URLs included              |
| Console/debug     | ✅     | None in production UI code                 |
| Scripts/tests     | ✅     | Updated for `/` and `/contact`             |
| Linting           | ✅     | No errors in reviewed paths                |

**Verdict:** All files have been triple-checked; routing, links, SEO, and scripts are consistent and production-ready. Optional follow-up: unify domain to `www` (or non-www) across all canonicals and schema URLs.
