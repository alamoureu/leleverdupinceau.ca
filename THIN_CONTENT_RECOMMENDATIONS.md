# Thin content – recommendations

Google can downrank or ignore pages that look like **thin content**: same template, little unique text, or many similar URLs. You have **~85 pages**; several are template-driven (same component, data-driven). Below is a short audit and concrete options.

---

## Page inventory and risk

| Page type | Count | Example URL | Risk | Notes |
|-----------|--------|-------------|------|--------|
| **Main / hub** | ~12 | `/`, `/services`, `/contact`, `/secteurs-desservis`, city hubs | Low | Unique content, few URLs. |
| **Main service** | 5 | `/services/peinture-residentielle` | Low | Full, unique pages. |
| **Sub-service** | 4 | `/services/peinture-residentielle/interieure` | Low | Dedicated content. |
| **Service × City** | 20 | `/services/peinture-residentielle/montreal` | Medium | Good data per city (intro, why us, projects). Same structure everywhere. |
| **SubService × City** | 16 | `/services/peinture-residentielle/exterieure/brossard` | Medium–High | Same template, same section layout; can feel thin if unique text is short. |
| **Service × City × Neighborhood** | 21 | `/services/peinture-interieure/montreal/ahuntsic` | Medium | Each neighborhood has its own data file and unique intro/why us/process. Structure is repeated. |
| **Blog** | 4 | `/blog/prix-peinture-montreal` | Low | Long-form, unique. |

**Main risk:** Not that “there is no data”, but that **many URLs share the same layout and section types** with limited unique text per URL. Google may treat some as low-value or doorway-like if unique content is short.

---

## What to do (recommended order)

### 1. Enrich content (best long-term)

- **Target:** At least **400–600 words of unique text** per template-driven page (intro + why us + projects/process/FAQ). More is better.
- **Service × City / SubService × City:**  
  - Add 1–2 **unique paragraphs** per city (e.g. “À Brossard, nous intervenons souvent dans les secteurs R, S, T et près du DIX30…”).  
  - Add a **short FAQ** (2–4 questions) per city or per service×city in your data, and render it in the existing component.
- **Neighborhood pages:** You already have good unique intros. Optionally add 1–2 **local tips** or **FAQ** per neighborhood to increase length and uniqueness.
- **New template pages:** Before adding new URLs (e.g. new city or new service×city), require a content checklist: intro, why us, at least one long section (FAQ or process), and a rough word count.

This keeps all URLs indexable and improves quality.

---

### 2. Noindex the thinnest (if you don’t want to enrich yet)

- **Option A – Noindex by page type**  
  Choose one tier to noindex (e.g. **SubService × City** only). Those pages stay on the site for users and internal links, but are not indexed.  
  - **How:** Use the optional `noindex` support added in your template pages (see “Optional noindex” below). You can drive it from data (e.g. `city.noindex`) or from a small config so whole page types are noindexed.
- **Option B – Noindex only clearly thin URLs**  
  If you have a list of URLs that are clearly thinner (e.g. same intro length everywhere, little city-specific text), add `noindex` only for those (again via data or config).

After noindexing, **remove those URLs from the sitemap** so you don’t suggest them to Google. Keep internal links so link equity flows to the main service and service×city pages.

---

### 3. Consolidate (reduce number of URLs)

- **SubService × City (16 pages):**  
  - **Option:** Redirect `/services/peinture-residentielle/exterieure/brossard` → `/services/peinture-residentielle/brossard#exterieure` (or similar).  
  - One URL per service×city, with anchors or tabs for intérieur/extérieur. Fewer URLs, one stronger page per service×city.
- **Neighborhood (21 pages):**  
  - Only do this if you’re not committed to maintaining 21 unique neighborhood pages. You could noindex them and keep for UX, or redirect to `/services/peinture-interieure/montreal` and list neighborhoods there with short blurbs instead of 21 separate indexable URLs.

Consolidation is a bigger change; do it only if you prefer fewer, stronger URLs over many template pages.

---

## Optional noindex in your codebase

You can control indexing per page via data or a small config:

- **Service × City** (`ServiceQuartierPage.jsx`): If `city.noindex === true` in the service×city data, the page sends `<meta name="robots" content="noindex, follow" />`.
- **SubService × City** (`SousServiceVillePage.jsx`): Same idea with `city.noindex`.
- **Neighborhood** (`ServiceQuartierSecteurPage.jsx`): Same with `neighborhood.noindex`.

**Do not set `noindex` in data by default.** Use it only for pages you explicitly choose to de-index. After setting noindex for a URL, remove it from `public/sitemap.xml` (and any other sitemaps).

---

## Quick checklist for each template-driven page

- [ ] **Unique H1** (already in data).
- [ ] **Meta description** unique or clearly varied (avoid same sentence with only city name swapped).
- [ ] **Introduction:** At least 2–3 sentences (or 80+ words) that are specific to that city/neighborhood/service combo.
- [ ] **Why us / process:** At least 4–5 bullets or short paragraphs; prefer localised wording where it makes sense.
- [ ] **Extra section:** FAQ, “Good to know”, or “Local tips” (even 2–3 items) to add unique text and length.
- [ ] **Rough total:** 400+ words of visible text per page (intro + sections + lists).

---

## Summary

| Strategy | Effort | Effect |
|----------|--------|--------|
| **Enrich content** (more unique text, FAQ, local tips) | Medium | Best long-term; keeps all pages valuable and indexable. |
| **Noindex thinnest** (e.g. SubService×City or specific URLs) | Low | Stops those URLs from being seen as thin by Google; keep them out of sitemap. |
| **Consolidate** (redirect subservice×city → service×city#section) | Higher | Fewer URLs, stronger pages; fewer templates to maintain. |

Recommendation: **Prioritise enriching** Service×City and SubService×City pages (unique intros + short FAQ). If some URLs remain clearly thin and you don’t plan to enrich them soon, use **noindex** for those and remove them from the sitemap.
