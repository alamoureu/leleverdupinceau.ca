# 06 — Stack Technique (Décision SSR / Next.js)

> **Décision:** Migration de Vite + React SPA → **Next.js (App Router)** pour Server-Side Rendering complet.  
> Objectif: chaque page du sitemap est rendue côté serveur pour maximiser le SEO.

---

## POURQUOI NEXT.JS

### Problème actuel (Vite + React SPA)
Le site actuel est une Single Page Application. Lorsque Google/Bing crawle une URL:
1. Le bot reçoit un HTML vide (juste `<div id="root"></div>`)
2. Il doit exécuter JavaScript pour voir le contenu
3. Les bots peuvent rater du contenu, des balises meta, et les données structurées
4. Le Time to First Byte (TTFB) est élevé

Résultat: SEO sous-optimal malgré les efforts de contenu.

### Solution: Next.js App Router (SSR + SSG)
- **Server Components:** le HTML est généré sur le serveur avec tout le contenu visible
- **`generateMetadata()`:** chaque page exporte ses propres `title`, `description`, `canonical`, `og:*` — zéro JavaScript nécessaire pour les bots
- **`generateStaticParams()`:** les pages statiques (services, secteurs) sont pré-générées au build
- **Streaming + Suspense:** performance optimale même pour les pages dynamiques
- **Built-in Image Optimization:** `<Image>` de Next.js gère `alt`, `title`, `width`, `height`, lazy loading automatiquement
- **Middleware pour redirections 301:** toutes les redirections listées dans `02-PAGES-A-SUPPRIMER.md` s'implémentent via `middleware.ts`

---

## ARCHITECTURE CIBLE

### Stack
| Élément | Technologie | Raison |
|---|---|---|
| Framework | **Next.js (App Router)** | SSR natif, meilleur SEO React, largest ecosystem |
| Styling | **Chakra UI v3** (ou Tailwind CSS) | Compatibilité server components |
| State | React Context (limité) | Éviter client-side state inutile |
| Forms | React Hook Form | Léger, compatible Next.js |
| Déploiement | **Vercel** (recommandé) ou VPS avec Node | Vercel = intégration native Next.js, edge functions |
| Analytics | Google Analytics 4 + Microsoft Clarity | Via `<Script>` Next.js (strategy: afterInteractive) |
| Email | Firebase (existant) ou Resend | API Routes Next.js pour le formulaire de soumission |
| Images | `next/image` | Optimisation automatique, lazy loading, WebP |
| SEO | `next/metadata` API | `generateMetadata()` par page, schema.org en JSON-LD |

### Structure de dossiers Next.js (App Router)
```
app/
├── layout.tsx                    ← Layout principal (header, footer, providers)
├── page.tsx                      ← Homepage /
├── globals.css
│
├── peintre-professionnel/
│   └── page.tsx                  ← /peintre-professionnel
│
├── services/
│   ├── page.tsx                  ← /services (hub)
│   ├── peinture-interieure/
│   │   ├── page.tsx              ← /services/peinture-interieure
│   │   └── armoires-de-cuisine/
│   │       └── page.tsx          ← L3 armoires
│   ├── peinture-exterieure/
│   │   └── page.tsx
│   ├── peinture-residentielle/
│   │   ├── page.tsx
│   │   ├── condo/
│   │   │   └── page.tsx          ← L3 condo
│   │   └── appartement/
│   │       └── page.tsx          ← L3 appartement
│   ├── peinture-commerciale/
│   │   └── page.tsx
│   ├── peinture-industrielle/
│   │   └── page.tsx
│   ├── teinture-exterieure/
│   │   └── page.tsx
│   ├── preparation-de-surfaces/
│   │   └── page.tsx
│   ├── peinture-au-pistolet/
│   │   └── page.tsx
│   ├── reparation-de-platre-et-gypse/
│   │   └── page.tsx
│   └── peinture-apres-sinistre/
│       └── page.tsx
│
├── secteurs/
│   ├── page.tsx                  ← /secteurs (hub)
│   ├── montreal/
│   │   ├── page.tsx              ← /secteurs/montreal
│   │   ├── westmount/
│   │   │   └── page.tsx
│   │   ├── outremont/
│   │   │   └── page.tsx
│   │   ├── plateau-mont-royal/
│   │   │   └── page.tsx
│   │   └── ville-marie/
│   │       └── page.tsx
│   ├── laval/
│   │   └── page.tsx
│   ├── longueuil/
│   │   └── page.tsx
│   ├── rive-sud/
│   │   └── page.tsx
│   └── gatineau/
│       └── page.tsx
│
├── peinture-interieure-montreal/
│   └── page.tsx                  ← Service × Ville
│
├── peinture-exterieure-montreal/
│   └── page.tsx                  ← Service × Ville
│
├── contact/
│   └── page.tsx                  ← /contact (= /soumission)
│
├── avis-clients/
│   └── page.tsx
│
├── realisations/
│   └── page.tsx
│
├── blog/
│   ├── page.tsx                  ← Hub blog
│   └── [slug]/
│       └── page.tsx              ← Articles dynamiques
│
├── mentions-legales/
│   └── page.tsx
│
├── politique-de-confidentialite/
│   └── page.tsx
│
├── a-propos/
│   └── page.tsx                  ← Phase 2
│
└── api/
    ├── contact/
    │   └── route.ts              ← Endpoint formulaire soumission
    └── sitemap/
        └── route.ts              ← Sitemap dynamique (optionnel)
```

---

## SEO PAR PAGE — PATTERN À SUIVRE

### Template `generateMetadata()` (à copier pour chaque page)
```typescript
// app/services/peinture-interieure/page.tsx

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Peinture intérieure à Montréal – Murs, plafonds, boiseries | Le Lever du Pinceau',
  description: 'Service de peinture intérieure professionnel à Montréal. Murs, plafonds, boiseries. RBQ, assurés. Soumission gratuite en 24h.',
  alternates: {
    canonical: 'https://leleverdupinceau.ca/services/peinture-interieure',
  },
  openGraph: {
    title: 'Peinture intérieure à Montréal – Le Lever du Pinceau',
    description: 'Peinture intérieure professionnelle à Montréal. Murs, plafonds, boiseries. Soumission gratuite en 24h.',
    url: 'https://leleverdupinceau.ca/services/peinture-interieure',
    siteName: 'Le Lever du Pinceau',
    locale: 'fr_CA',
    type: 'website',
  },
}

export default function PeintureInterieurePage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Peinture intérieure à Montréal',
            // ...
          }),
        }}
      />
      {/* Contenu de la page */}
    </>
  )
}
```

### Format `title` obligatoire pour chaque page
```
[Title Tag exact du 01-SITEMAP-CIBLE.md] | Le Lever du Pinceau
```

Exemple:
- ✅ `Peinture intérieure à Montréal – Murs, plafonds, boiseries | Le Lever du Pinceau`
- ❌ `Le Lever du Pinceau - Peinture intérieure` (mauvais ordre)

### `<Image>` Next.js — format obligatoire
```tsx
import Image from 'next/image'

<Image
  src="/images/peinture-interieure-montreal.jpg"
  alt="Peinture intérieure à Montréal par Le Lever du Pinceau"
  title="Peintre professionnel Montréal, Le Lever du Pinceau, peinture intérieure salon complété"
  width={800}
  height={600}
  priority={false}  // true seulement pour l'image above-the-fold (LCP)
/>
```

---

## REDIRECTIONS 301 — MIDDLEWARE NEXT.JS

Toutes les redirections de `02-PAGES-A-SUPPRIMER.md` s'implémentent dans `middleware.ts`:

```typescript
// middleware.ts (à la racine du projet Next.js)
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const redirects: Record<string, string> = {
  // Anciennes routes secteurs
  '/secteurs-desservis': '/secteurs',
  '/secteurs-desservis/montreal': '/secteurs/montreal',
  '/secteurs-desservis/laval': '/secteurs/laval',
  '/secteurs-desservis/longueuil': '/secteurs/longueuil',
  '/secteurs-desservis/brossard': '/secteurs/rive-sud',
  // Anciennes routes légales
  '/politiques/confidentialite': '/politique-de-confidentialite',
  '/politiques/termes-conditions': '/mentions-legales',
  // Autres
  '/avis': '/avis-clients',
  '/soumission': '/contact',
  '/brossard': '/secteurs/rive-sud',
  // Pages commerciales supprimées
  '/commerciale/interieure': '/services/peinture-commerciale',
  '/commerciale/exterieure': '/services/peinture-commerciale',
  '/commerciale/montreal': '/secteurs/montreal',
  '/commerciale/laval': '/secteurs/laval',
  '/commerciale/longueuil': '/secteurs/longueuil',
  '/commerciale/brossard': '/secteurs/rive-sud',
  // Pages résidentielles supprimées
  '/residentiel/interieure': '/services/peinture-residentielle',
  '/residentiel/exterieure': '/services/peinture-residentielle',
  '/residentiel/montreal': '/secteurs/montreal',
  '/residentiel/laval': '/secteurs/laval',
  '/residentiel/longueuil': '/secteurs/longueuil',
  '/residentiel/brossard': '/secteurs/rive-sud',
  // Pages industrielles supprimées
  '/industriel/montreal': '/services/peinture-industrielle',
  '/industriel/laval': '/services/peinture-industrielle',
  '/industriel/longueuil': '/services/peinture-industrielle',
  '/industriel/brossard': '/services/peinture-industrielle',
  // Intérieure/Extérieure par ville
  '/interieure/laval': '/secteurs/laval',
  '/interieure/longueuil': '/secteurs/longueuil',
  '/interieure/brossard': '/secteurs/rive-sud',
  '/exterieure/laval': '/secteurs/laval',
  '/exterieure/longueuil': '/secteurs/longueuil',
  '/exterieure/brossard': '/secteurs/rive-sud',
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const destination = redirects[pathname]
  if (destination) {
    return NextResponse.redirect(new URL(destination, request.url), 301)
  }
}
```

---

## PLAN DE MIGRATION (étapes ordonnées)

### Phase 0 — Préparation (avant de commencer le code)
- [ ] Initialiser le projet Next.js: `npx create-next-app@latest leleverdupinceau --typescript --app --tailwind`
- [ ] Installer Chakra UI v3 (si conservé) ou configurer Tailwind
- [ ] Configurer Firebase (pour le formulaire) dans les API Routes
- [ ] Mettre en place `middleware.ts` avec toutes les redirections 301

### Phase 1 — Pages critiques (Batch 1, priorité critique)
- [ ] Homepage `/` — Server Component avec `generateMetadata()`
- [ ] `/contact` — Formulaire avec Server Action ou API Route
- [ ] `/services` et `/secteurs` — Hubs de navigation statiques
- [ ] `/peintre-professionnel` — Page E-E-A-T

### Phase 2 — Services et Secteurs (Batch 1, priorité haute)
- [ ] 5 services L2 principaux
- [ ] 5 villes (dont 2 nouvelles: Rive-Sud, Gatineau)
- [ ] 4 quartiers Montréal
- [ ] 2 pages Service × Ville

### Phase 3 — Services spécialisés et L3 (Batch 1, priorité moyenne)
- [ ] 5 services L2 spécialisés
- [ ] 3 sous-services L3
- [ ] `/realisations`

### Phase 4 — Blog et pages secondaires
- [ ] Hub `/blog` + articles existants migrés
- [ ] Pages légales
- [ ] `/avis-clients`

---

## CHECKLIST SEO PAR PAGE (à vérifier avant de mettre en ligne)

- [ ] `generateMetadata()` exporté avec `title`, `description`, `canonical`
- [ ] `og:title`, `og:description`, `og:url`, `og:image` définis
- [ ] H1 unique et correspond exactement au H1 dans `01-SITEMAP-CIBLE.md`
- [ ] Schema.org JSON-LD approprié (`Service`, `LocalBusiness`, `FAQPage`, etc.)
- [ ] Toutes les images ont `alt` descriptif ET `title` au bon format
- [ ] Liens internes du body correspondent à `03-MAILLAGE-INTERNE.md`
- [ ] Contenu respecte l'angle unique de `04-ANGLES-CONTENU.md`
- [ ] `robots` meta = `index, follow` (pas `noindex`)
- [ ] URL canonique est exactement celle de `01-SITEMAP-CIBLE.md`

---

## NOTE SUR CHAKRA UI ET SERVER COMPONENTS

Chakra UI v2 (utilisée actuellement) n'est pas compatible avec les React Server Components. Options:
1. **Chakra UI v3** — supporte les Server Components (recommandé si on garde Chakra)
2. **Tailwind CSS** — 100% compatible, zéro overhead runtime
3. **Hybrid** — Chakra en `"use client"` uniquement pour les composants interactifs, Tailwind pour les layouts SSR

**Recommandation:** Utiliser Tailwind CSS pour les pages statiques/SSR + Chakra UI v3 uniquement pour les composants interactifs (formulaires, accordéons, modals). Cela maximise la quantité de HTML rendu côté serveur.
