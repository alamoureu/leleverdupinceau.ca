# 03 — Maillage Interne (Matrice de liens)

> **Règle:** Chaque page doit avoir MINIMUM les liens listés ici.  
> Les liens de navigation (header/footer) ne comptent pas — ce sont des liens dans le BODY du contenu.

---

## MATRICE COMPLÈTE

| Page source | Doit linker vers (body) | Type de page |
|---|---|---|
| `/` (Homepage) | `/peintre-professionnel`, `/services`, `/secteurs`, `/contact`, `/avis-clients`, `/realisations`, `/blog` | Navigation |
| `/peintre-professionnel` | `/` (body link!), `/services`, `/secteurs`, `/contact`, `/realisations`, `/services/peinture-interieure`, `/services/peinture-exterieure`, `/services/peinture-residentielle`, `/services/peinture-commerciale` | Redistributeur SEO |
| `/services` | Tous les 10 L2 (via cartes) + `/services/peinture-interieure/armoires-de-cuisine`, `/services/peinture-residentielle/condo`, `/services/peinture-residentielle/appartement` + `/contact` | Hub pilier |
| `/secteurs` | `/secteurs/montreal`, `/secteurs/laval`, `/secteurs/longueuil`, `/secteurs/rive-sud`, `/secteurs/gatineau`, + 4 quartiers + `/contact` | Hub pilier |
| `/services/peinture-interieure` | `/services` (parent hub), `/services/peinture-interieure/armoires-de-cuisine`, `/services/peinture-exterieure`, `/contact`, `/peintre-professionnel` | Service L2 |
| `/services/peinture-exterieure` | `/services` (parent hub), `/services/teinture-exterieure`, `/services/peinture-interieure`, `/contact`, `/peintre-professionnel` | Service L2 |
| `/services/peinture-residentielle` | `/services` (parent hub), `/services/peinture-residentielle/condo`, `/services/peinture-residentielle/appartement`, `/services/peinture-interieure`, `/contact` | Service L2 |
| `/services/peinture-commerciale` | `/services` (parent hub), `/services/peinture-industrielle`, `/contact`, `/peintre-professionnel` | Service L2 |
| `/services/peinture-industrielle` | `/services` (parent hub), `/services/peinture-commerciale`, `/services/peinture-au-pistolet`, `/contact` | Service L2 |
| `/services/teinture-exterieure` | `/services/peinture-exterieure`, `/contact` | Service L2 spécialisé |
| `/services/preparation-de-surfaces` | `/services/peinture-interieure`, `/services/peinture-exterieure`, `/services/reparation-de-platre-et-gypse` | Service L2 spécialisé |
| `/services/peinture-au-pistolet` | `/services/peinture-commerciale`, `/services/peinture-industrielle` | Service L2 spécialisé |
| `/services/reparation-de-platre-et-gypse` | `/services/preparation-de-surfaces`, `/services/peinture-interieure` | Service L2 spécialisé |
| `/services/peinture-apres-sinistre` | `/services/peinture-residentielle`, `/services/peinture-commerciale` | Service L2 spécialisé |
| `/services/peinture-interieure/armoires-de-cuisine` | `/services/peinture-interieure` (parent), `/services/peinture-residentielle`, `/contact`, `/peintre-professionnel` | L3 |
| `/services/peinture-residentielle/condo` | `/services/peinture-residentielle` (parent), `/services/peinture-interieure`, `/secteurs/montreal/westmount`, `/secteurs/montreal/ville-marie`, `/contact` | L3 |
| `/services/peinture-residentielle/appartement` | `/services/peinture-residentielle` (parent), `/services/peinture-interieure`, `/secteurs/montreal/plateau-mont-royal`, `/contact` | L3 |
| `/peinture-interieure-montreal` | `/services/peinture-interieure`, `/secteurs/montreal`, + 4 quartiers, `/contact`, `/services/peinture-interieure/armoires-de-cuisine` | Service × Ville |
| `/peinture-exterieure-montreal` | `/services/peinture-exterieure`, `/secteurs/montreal`, `/services/teinture-exterieure`, `/contact` | Service × Ville |
| `/secteurs/montreal` | + 4 quartiers (`/westmount`, `/outremont`, `/plateau-mont-royal`, `/ville-marie`) + 5 services courtes descriptions + `/contact`, `/avis-clients` | Ville L2 |
| `/secteurs/laval` | `/services` (5 catégories) + `/contact`, `/avis-clients` | Ville L2 |
| `/secteurs/longueuil` | `/services` (5 catégories) + `/secteurs/rive-sud`, `/contact`, `/avis-clients` | Ville L2 |
| `/secteurs/rive-sud` | `/secteurs/longueuil`, `/services` (5 catégories), `/contact`, `/avis-clients` | Ville L2 |
| `/secteurs/gatineau` | `/services` (5 catégories), `/contact`, `/avis-clients` | Ville L2 |
| `/secteurs/montreal/westmount` | `/secteurs/montreal` (parent), `/services/peinture-residentielle`, `/contact` + 1 quartier voisin | Quartier L3 |
| `/secteurs/montreal/outremont` | `/secteurs/montreal` (parent), `/services/peinture-residentielle`, `/contact` + 1 quartier voisin | Quartier L3 |
| `/secteurs/montreal/plateau-mont-royal` | `/secteurs/montreal` (parent), `/services/peinture-residentielle`, `/contact` + 1 quartier voisin | Quartier L3 |
| `/secteurs/montreal/ville-marie` | `/secteurs/montreal` (parent), `/services/peinture-commerciale`, `/services/peinture-residentielle/condo`, `/contact` + 1 quartier voisin | Quartier L3 |
| `/avis-clients` | `/contact`, `/services`, `/peintre-professionnel` | Conversion |
| `/realisations` | Services pertinents + Quartiers + `/contact`, `/avis-clients` | Conversion |
| `/contact` | `/services`, `/secteurs` (footer links uniquement) | Conversion |
| `/blog` | Articles blog (hub) | Blog |

---

## RÈGLES CRITIQUES DU MAILLAGE

### 1. Homepage → /peintre-professionnel doit exister dans le BODY
Le lien vers `/peintre-professionnel` doit apparaître dans le contenu de la page (pas seulement en nav). C'est le redistributeur principal de jus SEO.

### 2. Toute page de service L2 doit pointer vers `/contact`
Le CTA "Obtenir une soumission" doit être un lien `<a>` vers `/contact` (pas seulement un bouton sans href).

### 3. Chaque page L3 doit pointer vers son parent L2
- Armoires → `/services/peinture-interieure`
- Condo → `/services/peinture-residentielle`
- Appartement → `/services/peinture-residentielle`

### 4. Chaque quartier L3 doit pointer vers `/secteurs/montreal` + 1 quartier voisin
Quartiers voisins logiques:
- Westmount ↔ Outremont
- Plateau ↔ Rosemont (phase 2) / Outremont
- Ville-Marie ↔ Plateau

### 5. Les pages Service × Ville linkent vers les quartiers
- `/peinture-interieure-montreal` → Plateau, Westmount, Outremont, Ville-Marie
- `/peinture-exterieure-montreal` → Plateau, Westmount

---

## LIENS RÉCIPROQUES IMPORTANTS (à ne pas oublier)

Ces paires de pages doivent se linker mutuellement dans le body:

| Page A | Page B | Justification |
|---|---|---|
| `/services/peinture-interieure` | `/services/peinture-interieure/armoires-de-cuisine` | Parent → Enfant |
| `/services/peinture-residentielle` | `/services/peinture-residentielle/condo` | Parent → Enfant |
| `/services/peinture-residentielle` | `/services/peinture-residentielle/appartement` | Parent → Enfant |
| `/secteurs/montreal` | Chacun des 4 quartiers | Parent → Enfant |
| `/secteurs/longueuil` | `/secteurs/rive-sud` | Hub régional |
| `/services/peinture-exterieure` | `/services/teinture-exterieure` | Service complémentaire |
| `/services/peinture-commerciale` | `/services/peinture-industrielle` | Services connexes |
| `/peinture-interieure-montreal` | `/services/peinture-interieure` | Cross-link service/ville |
| `/peinture-exterieure-montreal` | `/services/peinture-exterieure` | Cross-link service/ville |
