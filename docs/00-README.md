# Documentation — Le Lever du Pinceau (Source de Vérité)

> Ce dossier `docs/` est la référence absolue pour tous les travaux sur le site.  
> Avant toute modification, consulter les fichiers pertinents ici.

---

## Fichiers de référence

| Fichier | Description | Quand le consulter |
|---|---|---|
| `01-SITEMAP-CIBLE.md` | Les 34 pages du batch 1 + batch 2 avec title tags, H1, mots-clés, angles, composants | Avant de créer ou modifier une page |
| `02-PAGES-A-SUPPRIMER.md` | URLs à supprimer, redirections 301 à implémenter, routes à renommer | Avant de supprimer une route ou une page |
| `03-MAILLAGE-INTERNE.md` | Matrice complète des liens internes par page | Avant d'écrire du contenu ou de créer une page |
| `04-ANGLES-CONTENU.md` | Angles de contenu uniques + règles anti-cannibalisation + mots-clés par page | Avant de rédiger du contenu |
| `05-ACTIONS-IMMEDIATES.md` | To-do list priorisée + tableau de suivi des 34 pages | Pour suivre l'avancement des travaux |
| `06-STACK-TECHNIQUE.md` | Décision Next.js SSR, architecture dossiers, pattern SEO par page, migration, middleware redirections | Avant tout travail technique sur la codebase |

---

## État du projet

**Batch 1 — 34 pages cibles:**
- ✅ 10 existent et sont opérationnelles (à modifier)
- 🔄 6 existent mais doivent être renommées/restructurées
- ❌ 18 sont à créer

**Prochaines étapes immédiates:**
1. Formulaire de contact sur `/contact`
2. Renommer les routes secteurs (`/secteurs-desservis` → `/secteurs`)
3. Ajouter `title` sur toutes les images existantes
4. Supprimer les routes dynamiques obsolètes
5. Créer `/secteurs/rive-sud` et `/secteurs/gatineau`

---

## Structure URL cible (vue d'ensemble)

```
/                                          ← Homepage (L0)
/peintre-professionnel                     ← E-E-A-T (L1)
/services                                  ← Hub services (L1)
  /peinture-interieure                     ← L2
    /armoires-de-cuisine                   ← L3
  /peinture-exterieure                     ← L2
  /peinture-residentielle                  ← L2
    /condo                                 ← L3
    /appartement                           ← L3
  /peinture-commerciale                    ← L2
  /peinture-industrielle                   ← L2
  /teinture-exterieure                     ← L2 spécialisé
  /preparation-de-surfaces                 ← L2 spécialisé
  /peinture-au-pistolet                    ← L2 spécialisé
  /reparation-de-platre-et-gypse           ← L2 spécialisé
  /peinture-apres-sinistre                 ← L2 spécialisé
/secteurs                                  ← Hub géo (L1)
  /montreal                                ← Ville L2
    /westmount                             ← Quartier L3
    /outremont                             ← Quartier L3
    /plateau-mont-royal                    ← Quartier L3
    /ville-marie                           ← Quartier L3
  /laval                                   ← Ville L2
  /longueuil                               ← Ville L2
  /rive-sud                                ← Ville L2 (hub régional)
  /gatineau                                ← Ville L2
/peinture-interieure-montreal              ← Service × Ville
/peinture-exterieure-montreal              ← Service × Ville
/contact                                   ← Conversion (= /soumission)
/avis-clients                              ← Conversion
/realisations                              ← Portfolio
/blog                                      ← Hub blog
/a-propos                                  ← Entreprise
/politique-de-confidentialite              ← Légal
/mentions-legales                          ← Légal
```

---

## Règles universelles

1. **Stack technique:** Next.js App Router (SSR). Chaque page = Server Component avec `generateMetadata()`. Voir `06-STACK-TECHNIQUE.md`.
2. **Images:** Toutes doivent avoir `title="Peintre professionnel [ville], Le Lever du Pinceau, [tâche] complété"` ET un `alt` descriptif. Utiliser `next/image`.
3. **Chaque page a UN seul angle** — consulter `04-ANGLES-CONTENU.md` avant d'écrire
4. **Chaque lien de suppression a une redirect 301** — implémentée dans `middleware.ts` Next.js, voir `02-PAGES-A-SUPPRIMER.md`
5. **Chaque page a ses liens internes requis** — consulter `03-MAILLAGE-INTERNE.md`
6. **`/soumission` redirige vers `/contact`** — les deux ne coexistent pas
7. **H1 exact** — le H1 de chaque page doit correspondre exactement à ce qui est dans `01-SITEMAP-CIBLE.md`
