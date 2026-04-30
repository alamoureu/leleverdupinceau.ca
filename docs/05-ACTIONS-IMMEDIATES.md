# 05 — Actions Immédiates (To-do list prioritisée)

> Ce fichier est le plan d'exécution. Les tâches sont ordonnées par priorité critique → haute → moyenne.  
> Cocher chaque item une fois complété.

---

## PRIORITÉ CRITIQUE — Faire en premier

### 1. Formulaire de contact sur `/contact`
- [ ] Le nouveau formulaire (EmbeddedSubmissionForm ou équivalent) doit être intégré à `ContactPage.jsx`
- [ ] Vérifier que `/soumission` redirige vers `/contact` (redirect 301 dans `App.jsx`)
- [ ] Unifier les deux pages (ContactPage + SoumissionPage) sous un seul composant
- **Fichiers concernés:** `src/lelever-next/pages/ContactPage.jsx`, `src/pages/SoumissionPage.jsx`, `src/App.jsx`

### 2. Renommer les routes secteurs (redirects 301)
- [ ] Changer la route `/secteurs-desservis` → `/secteurs` dans `App.jsx`
- [ ] Changer `/secteurs-desservis/montreal` → `/secteurs/montreal`
- [ ] Changer `/secteurs-desservis/laval` → `/secteurs/laval`
- [ ] Changer `/secteurs-desservis/longueuil` → `/secteurs/longueuil`
- [ ] Supprimer `/secteurs-desservis/brossard` + redirect → `/secteurs/rive-sud`
- [ ] Ajouter les `<Navigate>` de l'ancien vers le nouvel URL pour chaque route
- **Fichier concerné:** `src/App.jsx`

### 3. Renommer les autres routes
- [ ] `/avis` → `/avis-clients` + redirect
- [ ] `/politiques/confidentialite` → `/politique-de-confidentialite` + redirect
- [ ] `/politiques/termes-conditions` → `/mentions-legales` + redirect
- **Fichier concerné:** `src/App.jsx`

---

## PRIORITÉ HAUTE — Faire rapidement

### 4. Ajouter l'attribut `title` sur TOUTES les images existantes
- [ ] Format: `"Peintre professionnel [ville], Le Lever du Pinceau, [tâche] complété"`
- [ ] Auditer toutes les images dans les composants existants (pas seulement les nouvelles)
- [ ] Composants à auditer prioritairement:
  - `src/lelever-next/home-page/` (toutes les sections avec images)
  - `src/lelever-next/pages/` (toutes les pages)
  - `src/lelever-next/services-pages/` (pages de services)
  - `src/lelever-next/city-pages/` (pages de villes)
- **Outil:** Utiliser `AuditImagesPage` (`/audit-images`) pour identifier les images sans title

### 5. Supprimer les routes dynamiques obsolètes dans App.jsx
- [ ] Supprimer le pattern `SmartServiceRouter` (service × sous-service × ville)
- [ ] Supprimer le pattern `SousServicePage` (commerciale/intérieure, etc.)
- [ ] Supprimer le pattern `ServiceQuartierPage` (service × ville: ex `/services/peinture-interieure/montreal`)
- [ ] Ajouter des redirects 301 pour chacune des ~40 URLs générées par ces patterns
- **⚠️ Exception:** Conserver le mécanisme pour les L3: armoires-de-cuisine, condo, appartement
- **Fichier concerné:** `src/App.jsx`

### 6. Créer la page `/secteurs/rive-sud`
- [ ] Nouveau composant `RiveSudCityPage.jsx` dans `src/lelever-next/pages/`
- [ ] Angle: HUB RÉGIONAL (Longueuil + Brossard + St-Lambert + St-Bruno)
- [ ] Liens internes: `/secteurs/longueuil`, 5 services, `/contact`
- [ ] Ajouter la route dans `App.jsx`

### 7. Créer la page `/secteurs/gatineau`
- [ ] Nouveau composant `GatineauCityPage.jsx` dans `src/lelever-next/pages/`
- [ ] Angle: Franchise Gatineau (Hull, Aylmer, Buckingham)
- [ ] Liens internes: 5 services, `/contact`
- [ ] Ajouter la route dans `App.jsx`

### 8. Créer les 4 pages de quartiers Montréal
- [ ] `/secteurs/montreal/westmount` → `WestmountPage.jsx`
- [ ] `/secteurs/montreal/outremont` → `OutremontPage.jsx`
- [ ] `/secteurs/montreal/plateau-mont-royal` → `PlateauMontRoyalPage.jsx`
- [ ] `/secteurs/montreal/ville-marie` → `VilleMarjePage.jsx`
- [ ] Ajouter les 4 routes dans `App.jsx`
- [ ] Ajouter les liens vers les quartiers depuis `/secteurs/montreal`

---

## PRIORITÉ MOYENNE — Faire en 2e vague

### 9. Créer les 5 pages Services L2 spécialisés
- [ ] `/services/teinture-exterieure` → `TeinturePage.jsx`
- [ ] `/services/preparation-de-surfaces` → `PreparationSurfacesPage.jsx`
- [ ] `/services/peinture-au-pistolet` → `PistoletPage.jsx`
- [ ] `/services/reparation-de-platre-et-gypse` → `RepaGypse Page.jsx`
- [ ] `/services/peinture-apres-sinistre` → `SinistrePage.jsx`
- [ ] Ajouter les 5 routes dans `App.jsx`
- [ ] Mettre à jour `/services` pour inclure les cartes de ces nouvelles pages

### 10. Créer les 3 pages L3 prioritaires
- [ ] `/services/peinture-interieure/armoires-de-cuisine` → Composant L3
- [ ] `/services/peinture-residentielle/condo` → Composant L3
- [ ] `/services/peinture-residentielle/appartement` → Composant L3
- [ ] Ajouter les 3 routes dans `App.jsx`

### 11. Créer les 2 pages Service × Ville
- [ ] `/peinture-interieure-montreal` → `PeintureInterieureMontrealPage.jsx`
- [ ] `/peinture-exterieure-montreal` → `PeintureExterieureMontrealPage.jsx`
- [ ] Ajouter les 2 routes dans `App.jsx`

### 12. Créer la page `/realisations`
- [ ] Portfolio visuel avant/après
- [ ] Chaque réalisation linke vers service + quartier correspondant
- [ ] Liens: `/services` + quartiers + `/contact` + `/avis-clients`

### 13. Mettre à jour le Hub `/services`
- [ ] Ajouter les cartes pour les 5 nouveaux services L2 spécialisés
- [ ] Ajouter les liens vers les 3 L3 (armoires, condo, appartement)
- [ ] Vérifier le maillage interne (voir `03-MAILLAGE-INTERNE.md`)

### 14. Mettre à jour le Hub `/secteurs`
- [ ] Renommer depuis `/secteurs-desservis`
- [ ] Ajouter Rive-Sud et Gatineau
- [ ] Ajouter les 4 quartiers MTL
- [ ] Ajouter la carte/visuel des zones desservies

---

## MAINTENANCE TECHNIQUE

### 15. Mettre à jour `public/sitemap.xml`
- [ ] Ajouter toutes les nouvelles URLs du batch 1
- [ ] Retirer toutes les URLs supprimées
- [ ] Mettre à jour les `lastmod`
- [ ] Vérifier avec `scripts/validate-sitemap.js`

### 16. Mettre à jour `routes-manifest.json`
- [ ] Synchroniser avec le nouveau App.jsx

### 17. Vérifier les `<Navigate>` existants dans App.jsx
- [ ] `/new-home` → `/` ✅ Conserver
- [ ] `/new-home/contact` → `/contact` ✅ Conserver
- [ ] `/new-contact` → `/contact` ✅ Conserver
- [ ] `/peintre-montreal` → `/fr/peintre-montreal` ✅ Conserver (landing pages)

---

## CONVENTIONS À RESPECTER

### Nommage des composants de pages
- Pages piliers: `[Nom]Page.jsx` dans `src/lelever-next/pages/`
- Pages de quartiers: `[Quartier]Page.jsx` dans `src/lelever-next/pages/` ou `city-pages/`
- Pages de services: dans `src/lelever-next/services-pages/`

### Format des titles SEO (dans SEOHead)
- `[H1] | Le Lever du Pinceau`
- Toujours incluire la ville si page géographique
- Max 60 caractères

### Format meta description
- Toujours inclure un CTA (ex: "Soumission gratuite en 24h")
- Max 155 caractères
- Inclure le mot-clé principal dans les 20 premiers mots

### Format `title` des images
- `Peintre professionnel [ville], Le Lever du Pinceau, [tâche] complété`
- `[tâche]` doit être descriptif: "peinture intérieure salon", "rénovation boiseries historiques", etc.

---

## SUIVI DES PAGES — ÉTAT ACTUEL vs CIBLE

| # | URL cible | État | Composant |
|---|---|---|---|
| 1 | `/` | ✅ Existe — à modifier | `NewHomePage` |
| 2 | `/peintre-professionnel` | ✅ Existe — à modifier | `PeintreProfessionnelPage` |
| 3 | `/services` | ✅ Existe — à modifier | `ServicesPage` |
| 4 | `/secteurs` | 🔄 Existe sous `/secteurs-desservis` — renommer | `SecteursDesservisPage` |
| 5 | `/services/peinture-interieure` | ✅ Existe — à modifier | `PeintureInterieurePage` |
| 6 | `/services/peinture-exterieure` | ✅ Existe — à modifier | `PeintureExterieurePage` |
| 7 | `/services/peinture-residentielle` | ✅ Existe — à modifier | `PeintureResidentiellePage` |
| 8 | `/services/peinture-commerciale` | ✅ Existe — à modifier | `PeintureCommercialePage` |
| 9 | `/services/peinture-industrielle` | ✅ Existe — à modifier | `PeintureIndustriellePage` |
| 10 | `/services/teinture-exterieure` | ❌ À créer | — |
| 11 | `/services/preparation-de-surfaces` | ❌ À créer | — |
| 12 | `/services/peinture-au-pistolet` | ❌ À créer | — |
| 13 | `/services/reparation-de-platre-et-gypse` | ❌ À créer | — |
| 14 | `/services/peinture-apres-sinistre` | ❌ À créer | — |
| 15 | `/services/peinture-interieure/armoires-de-cuisine` | ❌ À créer | — |
| 16 | `/services/peinture-residentielle/condo` | ❌ À créer | — |
| 17 | `/services/peinture-residentielle/appartement` | ❌ À créer | — |
| 18 | `/peinture-interieure-montreal` | ❌ À créer | — |
| 19 | `/peinture-exterieure-montreal` | ❌ À créer | — |
| 20 | `/secteurs/montreal` | 🔄 Existe sous `/secteurs-desservis/montreal` — renommer | `MontrealCityPage` |
| 21 | `/secteurs/laval` | 🔄 Existe sous `/secteurs-desservis/laval` — renommer | `LavalCityPage` |
| 22 | `/secteurs/longueuil` | 🔄 Existe sous `/secteurs-desservis/longueuil` — renommer | `LongueuilCityPage` |
| 23 | `/secteurs/rive-sud` | ❌ À créer (Brossard → Rive-Sud) | — |
| 24 | `/secteurs/gatineau` | ❌ À créer | — |
| 25 | `/secteurs/montreal/westmount` | ❌ À créer | — |
| 26 | `/secteurs/montreal/outremont` | ❌ À créer | — |
| 27 | `/secteurs/montreal/plateau-mont-royal` | ❌ À créer | — |
| 28 | `/secteurs/montreal/ville-marie` | ❌ À créer | — |
| 29 | `/blog` | ✅ Existe | `BlogPage` |
| 30 | `/avis-clients` | 🔄 Existe sous `/avis` — renommer | `AvisPage` |
| 31 | `/contact` | ✅ Existe — ajouter formulaire | `ContactPage` |
| 32 | `/realisations` | ❌ À créer | — |
| 33 | `/mentions-legales` | 🔄 Existe sous `/politiques/termes-conditions` | `ThermOfUse` |
| 34 | `/politique-de-confidentialite` | 🔄 Existe sous `/politiques/confidentialite` | `PrivacyPolicyPage` |

**Légende:** ✅ Existe et OK | 🔄 Existe mais à renommer/modifier | ❌ À créer
