# Audit images dupliquées

## Audit final (mai 2026)

**Références Git (branche `new-website-update`, commit `c1e8264`)**

| Emplacement | État au commit `c1e8264` | État actuel du code | Commentaire |
|---|---|---|---|
| Hero `/secteurs/gatineau` (`GatineauCityPage.jsx`) | `header_gatineau_city.PNG` | idem | Aligné sur le dépôt. |
| Hub `/secteurs`, carte Gatineau (`SecteursDesservisPage.jsx`) | `pillar-pages/IMG_2585.jpg` | **restauré** (`IMG_2585.jpg`) | Corrigé : le hub utilisait cette image, pas une iframe. |
| Grille 6 secteurs accueil (`SectorsSection.jsx`) | `neighborhood_placeholder.png` | iframe `getGatineauMapEmbedUrl()` | **Changement volontaire** (tu voulais le style carte comme les autres tuiles). |

**Fichiers à ne pas confondre**

- `neighborhood_placeholder.png` : ancienne tuile Gatineau sur l’accueil au commit `c1e8264` (rue type Montréal), remplacée par la carte sur l’accueil seulement.
- `pillar-pages/IMG_2585.jpg` : image **hub** Gatineau sur `/secteurs` (restaurée).
- `3-ville/gatineau/header_gatineau_city.PNG` : hero page ville Gatineau uniquement.
- Les `IMG_*` sous `3-ville/gatineau/avant-apres/` : carrousel avant/après, pas le hero.


Pour **rafraîchir** le tableau des doublons : `npm run audit:image-dupes`, puis remplacer dans ce fichier tout à partir de la section « Méthodologie » (ex. `head -n 23 docs/IMAGE_DUPLICATES.md` + sortie du script).  
**Inventaire complet (chaque image + où elle est importée)** : [`IMAGE_INVENTORY.md`](./IMAGE_INVENTORY.md) (`npm run audit:image-inventory`).


## Méthodologie (relecture audit images)

Un **doublon** ici signifie : le **même chemin de fichier** (après résolution des `../` depuis le fichier qui importe) est référencé par **au moins deux fichiers** sous `src/`.

On ne déduit rien à partir du seul nom `IMG_6760.PNG` : deux fichiers différents dans des dossiers différents sont deux assets distincts. À l'inverse, deux imports avec des chemins relatifs différents qui pointent vers le **même** fichier résolu comptent comme **un** asset (même clé canonique).

**Limites de cet audit :** imports `import ... from '...'` statiques seulement (pas les URLs d’images construites en JavaScript dans le JSX, pas les URLs externes). Les iframes (ex. carte Gatineau) ne sont pas des fichiers image locaux.

**Généré par :** `node scripts/audit-image-import-dupes.js` le **2026-05-13**.

**Totaux :** `60` fichiers sous `src/` importent au moins une image (import statique) ; `248` chemins d’assets distincts après résolution ; `58` assets importés depuis **2+ fichiers** (doublons au sens de cet audit).

---

## Images les plus dupliquées (chemins canoniques sous le dépôt)

| # fichiers | Chemin canonique (depuis la racine du repo) | Fichiers qui importent |
|---:|---|---|
| 9 | `src/lelever-next/images/2-services/Page peinture commerciale/1. réalisations/IMG_6760.PNG` | src/lelever-next/home-page/RecentProjectsSection.jsx<br>src/lelever-next/home-page/ServicesSection.jsx<br>src/lelever-next/pages/AvisPage.jsx<br>src/lelever-next/pages/BlogPage.jsx<br>src/lelever-next/pages/ServicesPage.jsx<br>src/lelever-next/services-pages/PeintureCommercialePage.jsx<br>src/lelever-next/services-pages/service_ville/peintureCommercialeData.js<br>src/lelever-next/services-pages/service_ville/peintureIndustrielleData.js<br>src/lelever-next/services-pages/service_ville/peintureResidentielleData.js |
| 5 | `src/lelever-next/images/1-page-principale/service hub/Peinture intérieure/IMG_6758.PNG` | src/lelever-next/home-page/LandingServicesSection.jsx<br>src/lelever-next/home-page/ServicesSection.jsx<br>src/lelever-next/pages/AvisPage.jsx<br>src/lelever-next/pages/BlogPage.jsx<br>src/lelever-next/pages/ServicesPage.jsx |
| 5 | `src/lelever-next/images/2-services/Page peinture extérieure/1. réalisations/IMG_6755.PNG` | src/lelever-next/pages/AvisPage.jsx<br>src/lelever-next/pages/BlogPage.jsx<br>src/lelever-next/pages/ServicesPage.jsx<br>src/lelever-next/services-pages/service_ville/peintureCommercialeData.js<br>src/lelever-next/services-pages/service_ville/peintureExterieureData.js |
| 5 | `src/lelever-next/images/2-services/Page peinture intérieure/1. réalisations/IMG_6032.PNG` | src/lelever-next/home-page/RecentProjectsSection.jsx<br>src/lelever-next/services-pages/service_ville/peintureCommercialeData.js<br>src/lelever-next/services-pages/service_ville/peintureIndustrielleData.js<br>src/lelever-next/services-pages/service_ville/peintureInterieureData.js<br>src/lelever-next/services-pages/service_ville/peintureResidentielleData.js |
| 4 | `src/lelever-next/images/1-page-principale/service hub/Peinture industrielle/IMG_6757.PNG` | src/lelever-next/home-page/RecentProjectsSection.jsx<br>src/lelever-next/home-page/ServicesSection.jsx<br>src/lelever-next/pages/BlogPage.jsx<br>src/lelever-next/pages/ServicesPage.jsx |
| 4 | `src/lelever-next/images/1-page-principale/service hub/Peinture résidentielle/IMG_6768.PNG` | src/lelever-next/home-page/ServicesSection.jsx<br>src/lelever-next/pages/AvisPage.jsx<br>src/lelever-next/pages/BlogPage.jsx<br>src/lelever-next/pages/ServicesPage.jsx |
| 4 | `src/lelever-next/images/heroImage.png` | src/lelever-next/home-page/HeroSection.jsx<br>src/lelever-next/home-page/LandingHeroSection.jsx<br>src/pages/LandingPageGatineau.jsx<br>src/pages/LandingPageV2.jsx |
| 4 | `src/lelever-next/images/neighborhood_placeholder.jpg` | src/lelever-next/pages/OutremontPage.jsx<br>src/lelever-next/pages/PlateauMontRoyalPage.jsx<br>src/lelever-next/pages/VilleMariePage.jsx<br>src/lelever-next/pages/WestmountPage.jsx |
| 3 | `src/lelever-next/images/2-services/Page peinture intérieure/2. réalisations/IMG_6768.PNG` | src/lelever-next/services-pages/service_ville/peintureCommercialeData.js<br>src/lelever-next/services-pages/service_ville/peintureIndustrielleData.js<br>src/lelever-next/services-pages/service_ville/peintureInterieureData.js |
| 3 | `src/lelever-next/images/5-landing-page/Photo/spray man 3000.jpeg` | src/lelever-next/home-page/TeamSection.jsx<br>src/lelever-next/pages/AvisPage.jsx<br>src/lelever-next/pages/ServicesPage.jsx |
| 2 | `src/lelever-next/images/1-page-principale/blog hub/erreurs-eviter-peindre.png` | src/lelever-next/home-page/ResourcesSection.jsx<br>src/lelever-next/services-pages/service_ville/components/ServiceQuartierGuidesSection.jsx |
| 2 | `src/lelever-next/images/1-page-principale/blog hub/prix-projet-montreal.png` | src/lelever-next/home-page/ResourcesSection.jsx<br>src/lelever-next/services-pages/service_ville/components/ServiceQuartierGuidesSection.jsx |
| 2 | `src/lelever-next/images/1-page-principale/service hub/Peinture extérieure/IMG_6767.PNG` | src/lelever-next/home-page/LandingServicesSection.jsx<br>src/lelever-next/home-page/ServicesSection.jsx |
| 2 | `src/lelever-next/images/1-page-principale/service hub/Photo header/IMG_6771.PNG` | src/lelever-next/pages/ContactPage.jsx<br>src/lelever-next/pages/PeintreProfessionnelPage.jsx |
| 2 | `src/lelever-next/images/2-services/Page peinture commerciale/2. réalisations/IMG_6759.PNG` | src/lelever-next/services-pages/service_ville/peintureCommercialeData.js<br>src/lelever-next/services-pages/service_ville/peintureResidentielleData.js |
| 2 | `src/lelever-next/images/2-services/Page peinture extérieure/Photo header/IMG_0989.JPG` | src/lelever-next/services-pages/PeintureExterieurePage.jsx<br>src/lelever-next/services-pages/service_ville/peintureExterieureData.js |
| 2 | `src/lelever-next/images/2-services/Page peinture résidentielle/1. réalisations/IMG_6778.PNG` | src/lelever-next/home-page/RecentProjectsSection.jsx<br>src/lelever-next/services-pages/service_ville/peintureResidentielleData.js |
| 2 | `src/lelever-next/images/2-services/Page peinture résidentielle/2. réalisations/IMG_6779.PNG` | src/lelever-next/home-page/RecentProjectsSection.jsx<br>src/lelever-next/services-pages/service_ville/peintureResidentielleData.js |
| 2 | `src/lelever-next/images/3-ville/laval/avant-apres/IMG_7992 5.jpg` | src/lelever-next/pages/LavalCityPage.jsx<br>src/lelever-next/pages/RealisationsPage.jsx |
| 2 | `src/lelever-next/images/3-ville/laval/avant-apres/IMG_7994 5.jpg` | src/lelever-next/pages/LavalCityPage.jsx<br>src/lelever-next/pages/RealisationsPage.jsx |
| 2 | `src/lelever-next/images/3-ville/longueuil/avant-apres/IMG_7988 4.jpg` | src/lelever-next/pages/LongueuilCityPage.jsx<br>src/lelever-next/pages/RealisationsPage.jsx |
| 2 | `src/lelever-next/images/3-ville/longueuil/avant-apres/IMG_7990 4.jpg` | src/lelever-next/pages/LongueuilCityPage.jsx<br>src/lelever-next/pages/RealisationsPage.jsx |
| 2 | `src/lelever-next/images/3-ville/Montréal/avant-apres/IMG_5873 3.jpg` | src/lelever-next/pages/MontrealCityPage.jsx<br>src/lelever-next/pages/RealisationsPage.jsx |
| 2 | `src/lelever-next/images/3-ville/Montréal/avant-apres/IMG_6755 3.jpg` | src/lelever-next/pages/MontrealCityPage.jsx<br>src/lelever-next/pages/RealisationsPage.jsx |
| 2 | `src/lelever-next/images/3-ville/Montréal/avant-apres/IMG_7678 3.jpg` | src/lelever-next/pages/MontrealCityPage.jsx<br>src/lelever-next/pages/RealisationsPage.jsx |
| 2 | `src/lelever-next/images/3-ville/Montréal/avant-apres/IMG_7922 3.jpg` | src/lelever-next/pages/MontrealCityPage.jsx<br>src/lelever-next/pages/RealisationsPage.jsx |
| 2 | `src/lelever-next/images/3-ville/Montréal/avant-apres/IMG_7924 4.jpg` | src/lelever-next/pages/MontrealCityPage.jsx<br>src/lelever-next/pages/RealisationsPage.jsx |
| 2 | `src/lelever-next/images/3-ville/Montréal/avant-apres/IMG_7971 5.jpg` | src/lelever-next/pages/MontrealCityPage.jsx<br>src/lelever-next/pages/RealisationsPage.jsx |
| 2 | `src/lelever-next/images/3-ville/Montréal/avant-apres/IMG_7997 9.jpg` | src/lelever-next/pages/MontrealCityPage.jsx<br>src/lelever-next/pages/RealisationsPage.jsx |
| 2 | `src/lelever-next/images/3-ville/Montréal/avant-apres/IMG_7999 9.jpg` | src/lelever-next/pages/MontrealCityPage.jsx<br>src/lelever-next/pages/RealisationsPage.jsx |
| 2 | `src/lelever-next/images/3-ville/rive-sud/avant-apres/IMG_7974 4.jpg` | src/lelever-next/pages/RealisationsPage.jsx<br>src/lelever-next/pages/RiveSudCityPage.jsx |
| 2 | `src/lelever-next/images/3-ville/rive-sud/avant-apres/IMG_7975 4.jpg` | src/lelever-next/pages/RealisationsPage.jsx<br>src/lelever-next/pages/RiveSudCityPage.jsx |
| 2 | `src/lelever-next/images/4-sous-services/commercial x éxtérieure/2. réalisations/IMG_6756.PNG` | src/lelever-next/services-pages/sous_service/peintureCommercialeExterieureData.js<br>src/lelever-next/services-pages/sous_service/peintureCommercialeInterieureData.js |
| 2 | `src/lelever-next/images/5-landing-page/Photo/louis_Consultation.jpeg` | src/lelever-next/home-page/ResourcesSection.jsx<br>src/lelever-next/services-pages/service_ville/components/ServiceQuartierGuidesSection.jsx |
| 2 | `src/lelever-next/images/before_after/IMG_5969.jpg` | src/lelever-next/components/BeforeAfter.jsx<br>src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 2 | `src/lelever-next/images/before_after/IMG_5970.jpg` | src/lelever-next/components/BeforeAfter.jsx<br>src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 2 | `src/lelever-next/images/before_after/IMG_5973.jpg` | src/lelever-next/components/BeforeAfter.jsx<br>src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 2 | `src/lelever-next/images/before_after/IMG_5974.jpg` | src/lelever-next/components/BeforeAfter.jsx<br>src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 2 | `src/lelever-next/images/before_after/IMG_5975.jpg` | src/lelever-next/components/BeforeAfter.jsx<br>src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 2 | `src/lelever-next/images/before_after/IMG_5976.jpg` | src/lelever-next/components/BeforeAfter.jsx<br>src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 2 | `src/lelever-next/images/before_after/IMG_5977.jpg` | src/lelever-next/components/BeforeAfter.jsx<br>src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 2 | `src/lelever-next/images/before_after/IMG_5978.jpg` | src/lelever-next/components/BeforeAfter.jsx<br>src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 2 | `src/lelever-next/images/before_after/IMG_5982.jpg` | src/lelever-next/components/BeforeAfter.jsx<br>src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 2 | `src/lelever-next/images/before_after/IMG_5984.jpg` | src/lelever-next/components/BeforeAfter.jsx<br>src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 2 | `src/lelever-next/images/brossard.png` | src/lelever-next/home-page/SectorsSection.jsx<br>src/lelever-next/pages/SecteursDesservisPage.jsx |
| 2 | `src/lelever-next/images/L3 Sous services/Photo page -peinture condo/avant apres/IMG_6031.jpg` | src/lelever-next/pages/OutremontPage.jsx<br>src/lelever-next/pages/PeintureCondoPage.jsx |
| 2 | `src/lelever-next/images/L3 Sous services/Photo page -peinture condo/avant apres/IMG_7922 2.jpg` | src/lelever-next/pages/OutremontPage.jsx<br>src/lelever-next/pages/PeintureCondoPage.jsx |
| 2 | `src/lelever-next/images/L3 Sous services/Photo page -peinture condo/avant apres/IMG_7924 3.jpg` | src/lelever-next/pages/OutremontPage.jsx<br>src/lelever-next/pages/PeintureCondoPage.jsx |
| 2 | `src/lelever-next/images/L3 Sous services/Photo page -peinture condo/avant apres/IMG_7997 4.jpg` | src/lelever-next/pages/OutremontPage.jsx<br>src/lelever-next/pages/PeintureCondoPage.jsx |
| 2 | `src/lelever-next/images/L3 Sous services/Photo page -peinture condo/avant apres/IMG_7999 4.jpg` | src/lelever-next/pages/OutremontPage.jsx<br>src/lelever-next/pages/PeintureCondoPage.jsx |
| 2 | `src/lelever-next/images/L3 Sous services/Photo page -peinture condo/avant apres/IMG_8108.jpg` | src/lelever-next/pages/OutremontPage.jsx<br>src/lelever-next/pages/PeintureCondoPage.jsx |
| 2 | `src/lelever-next/images/laval.png` | src/lelever-next/home-page/SectorsSection.jsx<br>src/lelever-next/pages/SecteursDesservisPage.jsx |
| 2 | `src/lelever-next/images/longueuil.png` | src/lelever-next/home-page/SectorsSection.jsx<br>src/lelever-next/pages/SecteursDesservisPage.jsx |
| 2 | `src/lelever-next/images/mtl.png` | src/lelever-next/home-page/SectorsSection.jsx<br>src/lelever-next/pages/SecteursDesservisPage.jsx |
| 2 | `src/lelever-next/images/new-landing/method-1.jpeg` | src/lelever-next/components/ProcessStepsSection.jsx<br>src/lelever-next/home-page/MethodSection.jsx |
| 2 | `src/lelever-next/images/new-landing/method-2.jpeg` | src/lelever-next/components/ProcessStepsSection.jsx<br>src/lelever-next/home-page/MethodSection.jsx |
| 2 | `src/lelever-next/images/new-landing/method-3.PNG` | src/lelever-next/components/ProcessStepsSection.jsx<br>src/lelever-next/home-page/MethodSection.jsx |
| 2 | `src/lelever-next/images/new-landing/method-4.PNG` | src/lelever-next/components/ProcessStepsSection.jsx<br>src/lelever-next/home-page/MethodSection.jsx |

---

## Imports image dont le fichier semble manquant sur disque

*(Aucun chemin résolu manquant parmi les imports analysés.)*

---

## Pistes « images à diversifier » (réutilisation large)

Les entrées avec beaucoup de fichiers importeurs sont les meilleures candidates pour des photos supplémentaires si tu veux éviter la répétition visuelle entre pages (même critère : **même fichier**, pas le nom seul).

