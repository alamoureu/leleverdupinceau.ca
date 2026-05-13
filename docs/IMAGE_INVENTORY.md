# Inventaire des images (imports statiques)

Vue d’ensemble **une ligne par fichier image** référencé par un `import ... from '...'` sous `src/`, avec tous les fichiers sources qui importent ce chemin (après résolution des `../`).

- **Doublons (réutilisation)** : voir aussi [`IMAGE_DUPLICATES.md`](./IMAGE_DUPLICATES.md) (tableau trié par nombre d’importeurs).
- **Régénérer ce fichier** : `npm run audit:image-inventory` à la racine du repo.

**Généré le :** 2026-05-13

**Totaux :** `248` chemins d’images distincts ; `60` fichiers `.js/.jsx` sous `src/` contiennent au moins un import d’image.

**Limites :** comme l’audit doublons (pas les `src={...}` dynamiques, pas les URLs externes, pas les iframes).

---

## Tableau complet (tri A-Z par chemin)

| Nb | Chemin canonique (depuis la racine du repo) | Fichiers qui importent |
|---:|---|---|
| 1 | `src/lelever-next/images/1-page-principale/a propos/Photo header/IMG_6772.PNG` | src/lelever-next/pages/AboutPage.jsx |
| 2 | `src/lelever-next/images/1-page-principale/blog hub/erreurs-eviter-peindre.png` | src/lelever-next/home-page/ResourcesSection.jsx<br>src/lelever-next/services-pages/service_ville/components/ServiceQuartierGuidesSection.jsx |
| 1 | `src/lelever-next/images/1-page-principale/blog hub/Peinture extérieure/IMG_6753.PNG` | src/lelever-next/pages/BlogPage.jsx |
| 2 | `src/lelever-next/images/1-page-principale/blog hub/prix-projet-montreal.png` | src/lelever-next/home-page/ResourcesSection.jsx<br>src/lelever-next/services-pages/service_ville/components/ServiceQuartierGuidesSection.jsx |
| 1 | `src/lelever-next/images/1-page-principale/Home/Projet extérieur/IMG_6755.PNG` | src/lelever-next/home-page/RecentProjectsSection.jsx |
| 1 | `src/lelever-next/images/1-page-principale/peintre pro/Peinture commerciale/IMG_6751.PNG` | src/lelever-next/pages/PeintreProfessionnelPage.jsx |
| 1 | `src/lelever-next/images/1-page-principale/peintre pro/Peinture extérieure/IMG_6753.PNG` | src/lelever-next/pages/PeintreProfessionnelPage.jsx |
| 1 | `src/lelever-next/images/1-page-principale/peintre pro/Peinture industrielle/IMG_6752.PNG` | src/lelever-next/pages/PeintreProfessionnelPage.jsx |
| 1 | `src/lelever-next/images/1-page-principale/peintre pro/Peinture intérieure/IMG_6764.PNG` | src/lelever-next/pages/PeintreProfessionnelPage.jsx |
| 1 | `src/lelever-next/images/1-page-principale/peintre pro/Peinture résidentielle/IMG_6763.PNG` | src/lelever-next/pages/PeintreProfessionnelPage.jsx |
| 2 | `src/lelever-next/images/1-page-principale/service hub/Peinture extérieure/IMG_6767.PNG` | src/lelever-next/home-page/LandingServicesSection.jsx<br>src/lelever-next/home-page/ServicesSection.jsx |
| 4 | `src/lelever-next/images/1-page-principale/service hub/Peinture industrielle/IMG_6757.PNG` | src/lelever-next/home-page/RecentProjectsSection.jsx<br>src/lelever-next/home-page/ServicesSection.jsx<br>src/lelever-next/pages/BlogPage.jsx<br>src/lelever-next/pages/ServicesPage.jsx |
| 5 | `src/lelever-next/images/1-page-principale/service hub/Peinture intérieure/IMG_6758.PNG` | src/lelever-next/home-page/LandingServicesSection.jsx<br>src/lelever-next/home-page/ServicesSection.jsx<br>src/lelever-next/pages/AvisPage.jsx<br>src/lelever-next/pages/BlogPage.jsx<br>src/lelever-next/pages/ServicesPage.jsx |
| 4 | `src/lelever-next/images/1-page-principale/service hub/Peinture résidentielle/IMG_6768.PNG` | src/lelever-next/home-page/ServicesSection.jsx<br>src/lelever-next/pages/AvisPage.jsx<br>src/lelever-next/pages/BlogPage.jsx<br>src/lelever-next/pages/ServicesPage.jsx |
| 2 | `src/lelever-next/images/1-page-principale/service hub/Photo header/IMG_6771.PNG` | src/lelever-next/pages/ContactPage.jsx<br>src/lelever-next/pages/PeintreProfessionnelPage.jsx |
| 9 | `src/lelever-next/images/2-services/Page peinture commerciale/1. réalisations/IMG_6760.PNG` | src/lelever-next/home-page/RecentProjectsSection.jsx<br>src/lelever-next/home-page/ServicesSection.jsx<br>src/lelever-next/pages/AvisPage.jsx<br>src/lelever-next/pages/BlogPage.jsx<br>src/lelever-next/pages/ServicesPage.jsx<br>src/lelever-next/services-pages/PeintureCommercialePage.jsx<br>src/lelever-next/services-pages/service_ville/peintureCommercialeData.js<br>src/lelever-next/services-pages/service_ville/peintureIndustrielleData.js<br>src/lelever-next/services-pages/service_ville/peintureResidentielleData.js |
| 2 | `src/lelever-next/images/2-services/Page peinture commerciale/2. réalisations/IMG_6759.PNG` | src/lelever-next/services-pages/service_ville/peintureCommercialeData.js<br>src/lelever-next/services-pages/service_ville/peintureResidentielleData.js |
| 1 | `src/lelever-next/images/2-services/Page peinture commerciale/3. réalisations/IMG_6777.PNG` | src/lelever-next/services-pages/service_ville/peintureCommercialeData.js |
| 5 | `src/lelever-next/images/2-services/Page peinture extérieure/1. réalisations/IMG_6755.PNG` | src/lelever-next/pages/AvisPage.jsx<br>src/lelever-next/pages/BlogPage.jsx<br>src/lelever-next/pages/ServicesPage.jsx<br>src/lelever-next/services-pages/service_ville/peintureCommercialeData.js<br>src/lelever-next/services-pages/service_ville/peintureExterieureData.js |
| 1 | `src/lelever-next/images/2-services/Page peinture extérieure/2. réalisations/IMG_6761.PNG` | src/lelever-next/services-pages/service_ville/peintureExterieureData.js |
| 1 | `src/lelever-next/images/2-services/Page peinture extérieure/3. réalisations/IMG_6756.PNG` | src/lelever-next/services-pages/service_ville/peintureExterieureData.js |
| 1 | `src/lelever-next/images/2-services/Page peinture extérieure/Peinture commerciale extérieure/IMG_6777.PNG` | src/lelever-next/services-pages/service_ville/peintureExterieureData.js |
| 1 | `src/lelever-next/images/2-services/Page peinture extérieure/Peinture résidentielle extérieure/IMG_6763.PNG` | src/lelever-next/services-pages/service_ville/peintureExterieureData.js |
| 2 | `src/lelever-next/images/2-services/Page peinture extérieure/Photo header/IMG_0989.JPG` | src/lelever-next/services-pages/PeintureExterieurePage.jsx<br>src/lelever-next/services-pages/service_ville/peintureExterieureData.js |
| 1 | `src/lelever-next/images/2-services/Page peinture industrielle/1. réalisations/IMG_6752.PNG` | src/lelever-next/services-pages/service_ville/peintureIndustrielleData.js |
| 1 | `src/lelever-next/images/2-services/Page peinture industrielle/2. réalisations/IMG_6757.PNG` | src/lelever-next/services-pages/service_ville/peintureIndustrielleData.js |
| 1 | `src/lelever-next/images/2-services/Page peinture industrielle/3. réalisations/IMG_5978.PNG` | src/lelever-next/services-pages/service_ville/peintureIndustrielleData.js |
| 5 | `src/lelever-next/images/2-services/Page peinture intérieure/1. réalisations/IMG_6032.PNG` | src/lelever-next/home-page/RecentProjectsSection.jsx<br>src/lelever-next/services-pages/service_ville/peintureCommercialeData.js<br>src/lelever-next/services-pages/service_ville/peintureIndustrielleData.js<br>src/lelever-next/services-pages/service_ville/peintureInterieureData.js<br>src/lelever-next/services-pages/service_ville/peintureResidentielleData.js |
| 3 | `src/lelever-next/images/2-services/Page peinture intérieure/2. réalisations/IMG_6768.PNG` | src/lelever-next/services-pages/service_ville/peintureCommercialeData.js<br>src/lelever-next/services-pages/service_ville/peintureIndustrielleData.js<br>src/lelever-next/services-pages/service_ville/peintureInterieureData.js |
| 1 | `src/lelever-next/images/2-services/Page peinture intérieure/3. réalisations/IMG_6762.PNG` | src/lelever-next/services-pages/service_ville/peintureInterieureData.js |
| 1 | `src/lelever-next/images/2-services/Page peinture intérieure/4. réalisations/IMG_6751.PNG` | src/lelever-next/services-pages/service_ville/peintureInterieureData.js |
| 1 | `src/lelever-next/images/2-services/Page peinture intérieure/5. réalisations/IMG_6754.PNG` | src/lelever-next/services-pages/service_ville/peintureInterieureData.js |
| 1 | `src/lelever-next/images/2-services/Page peinture intérieure/6. réalisations/IMG_5976.PNG` | src/lelever-next/services-pages/service_ville/peintureInterieureData.js |
| 1 | `src/lelever-next/images/2-services/Page peinture intérieure/Photo header/Rolling_Door.jpeg` | src/lelever-next/services-pages/PeintureInterieurePage.jsx |
| 2 | `src/lelever-next/images/2-services/Page peinture résidentielle/1. réalisations/IMG_6778.PNG` | src/lelever-next/home-page/RecentProjectsSection.jsx<br>src/lelever-next/services-pages/service_ville/peintureResidentielleData.js |
| 2 | `src/lelever-next/images/2-services/Page peinture résidentielle/2. réalisations/IMG_6779.PNG` | src/lelever-next/home-page/RecentProjectsSection.jsx<br>src/lelever-next/services-pages/service_ville/peintureResidentielleData.js |
| 1 | `src/lelever-next/images/2-services/Page peinture résidentielle/3. réalisations/IMG_6764.PNG` | src/lelever-next/services-pages/service_ville/peintureResidentielleData.js |
| 1 | `src/lelever-next/images/2-services/Page peinture résidentielle/Peinture résidentielle extérieure/IMG_6763.PNG` | src/lelever-next/services-pages/sous_service/peintureResidentielleExterieureData.js |
| 1 | `src/lelever-next/images/2-services/Page peinture résidentielle/Photo header/Paint Cut-in Louis.jpeg` | src/lelever-next/services-pages/PeintureResidentiellePage.jsx |
| 1 | `src/lelever-next/images/3-ville/brossard/+Header/IMG_6784.PNG` | src/lelever-next/pages/BrossardCityPage.jsx |
| 1 | `src/lelever-next/images/3-ville/gatineau/avant-apres/IMG_5973 3.jpg` | src/lelever-next/pages/GatineauCityPage.jsx |
| 1 | `src/lelever-next/images/3-ville/gatineau/avant-apres/IMG_5974 3.jpg` | src/lelever-next/pages/GatineauCityPage.jsx |
| 1 | `src/lelever-next/images/3-ville/gatineau/avant-apres/IMG_5975 3.jpg` | src/lelever-next/pages/GatineauCityPage.jsx |
| 1 | `src/lelever-next/images/3-ville/gatineau/avant-apres/IMG_5976 4.jpg` | src/lelever-next/pages/GatineauCityPage.jsx |
| 1 | `src/lelever-next/images/3-ville/gatineau/avant-apres/IMG_7988 2.jpg` | src/lelever-next/pages/GatineauCityPage.jsx |
| 1 | `src/lelever-next/images/3-ville/gatineau/avant-apres/IMG_7990 2.jpg` | src/lelever-next/pages/GatineauCityPage.jsx |
| 1 | `src/lelever-next/images/3-ville/gatineau/avant-apres/IMG_7992 4.jpg` | src/lelever-next/pages/GatineauCityPage.jsx |
| 1 | `src/lelever-next/images/3-ville/gatineau/avant-apres/IMG_7994 4.jpg` | src/lelever-next/pages/GatineauCityPage.jsx |
| 1 | `src/lelever-next/images/3-ville/gatineau/avant-apres/IMG_7997 7.jpg` | src/lelever-next/pages/GatineauCityPage.jsx |
| 1 | `src/lelever-next/images/3-ville/gatineau/avant-apres/IMG_7999 7.jpg` | src/lelever-next/pages/GatineauCityPage.jsx |
| 1 | `src/lelever-next/images/3-ville/gatineau/header_gatineau_city.PNG` | src/lelever-next/pages/GatineauCityPage.jsx |
| 1 | `src/lelever-next/images/3-ville/laval/avant-apres/IMG_5973 4.jpg` | src/lelever-next/pages/LavalCityPage.jsx |
| 1 | `src/lelever-next/images/3-ville/laval/avant-apres/IMG_5974 4.jpg` | src/lelever-next/pages/LavalCityPage.jsx |
| 1 | `src/lelever-next/images/3-ville/laval/avant-apres/IMG_5975 4.jpg` | src/lelever-next/pages/LavalCityPage.jsx |
| 1 | `src/lelever-next/images/3-ville/laval/avant-apres/IMG_5976 5.jpg` | src/lelever-next/pages/LavalCityPage.jsx |
| 1 | `src/lelever-next/images/3-ville/laval/avant-apres/IMG_6031 3.jpg` | src/lelever-next/pages/LavalCityPage.jsx |
| 2 | `src/lelever-next/images/3-ville/laval/avant-apres/IMG_7992 5.jpg` | src/lelever-next/pages/LavalCityPage.jsx<br>src/lelever-next/pages/RealisationsPage.jsx |
| 2 | `src/lelever-next/images/3-ville/laval/avant-apres/IMG_7994 5.jpg` | src/lelever-next/pages/LavalCityPage.jsx<br>src/lelever-next/pages/RealisationsPage.jsx |
| 1 | `src/lelever-next/images/3-ville/laval/avant-apres/IMG_8108 3.jpg` | src/lelever-next/pages/LavalCityPage.jsx |
| 1 | `src/lelever-next/images/3-ville/laval/header.jpg` | src/lelever-next/pages/LavalCityPage.jsx |
| 1 | `src/lelever-next/images/3-ville/longueuil/avant-apres/IMG_5973 5.jpg` | src/lelever-next/pages/LongueuilCityPage.jsx |
| 1 | `src/lelever-next/images/3-ville/longueuil/avant-apres/IMG_5974 5.jpg` | src/lelever-next/pages/LongueuilCityPage.jsx |
| 1 | `src/lelever-next/images/3-ville/longueuil/avant-apres/IMG_6031 4.jpg` | src/lelever-next/pages/LongueuilCityPage.jsx |
| 2 | `src/lelever-next/images/3-ville/longueuil/avant-apres/IMG_7988 4.jpg` | src/lelever-next/pages/LongueuilCityPage.jsx<br>src/lelever-next/pages/RealisationsPage.jsx |
| 2 | `src/lelever-next/images/3-ville/longueuil/avant-apres/IMG_7990 4.jpg` | src/lelever-next/pages/LongueuilCityPage.jsx<br>src/lelever-next/pages/RealisationsPage.jsx |
| 1 | `src/lelever-next/images/3-ville/longueuil/avant-apres/IMG_7992 6.jpg` | src/lelever-next/pages/LongueuilCityPage.jsx |
| 1 | `src/lelever-next/images/3-ville/longueuil/avant-apres/IMG_7994 6.jpg` | src/lelever-next/pages/LongueuilCityPage.jsx |
| 1 | `src/lelever-next/images/3-ville/longueuil/avant-apres/IMG_8108 4.jpg` | src/lelever-next/pages/LongueuilCityPage.jsx |
| 1 | `src/lelever-next/images/3-ville/longueuil/header.JPEG` | src/lelever-next/pages/LongueuilCityPage.jsx |
| 1 | `src/lelever-next/images/3-ville/Montréal/5. réalisations/IMG_5877.JPG` | src/lelever-next/pages/RealisationsPage.jsx |
| 2 | `src/lelever-next/images/3-ville/Montréal/avant-apres/IMG_5873 3.jpg` | src/lelever-next/pages/MontrealCityPage.jsx<br>src/lelever-next/pages/RealisationsPage.jsx |
| 2 | `src/lelever-next/images/3-ville/Montréal/avant-apres/IMG_6755 3.jpg` | src/lelever-next/pages/MontrealCityPage.jsx<br>src/lelever-next/pages/RealisationsPage.jsx |
| 2 | `src/lelever-next/images/3-ville/Montréal/avant-apres/IMG_7678 3.jpg` | src/lelever-next/pages/MontrealCityPage.jsx<br>src/lelever-next/pages/RealisationsPage.jsx |
| 2 | `src/lelever-next/images/3-ville/Montréal/avant-apres/IMG_7922 3.jpg` | src/lelever-next/pages/MontrealCityPage.jsx<br>src/lelever-next/pages/RealisationsPage.jsx |
| 2 | `src/lelever-next/images/3-ville/Montréal/avant-apres/IMG_7924 4.jpg` | src/lelever-next/pages/MontrealCityPage.jsx<br>src/lelever-next/pages/RealisationsPage.jsx |
| 2 | `src/lelever-next/images/3-ville/Montréal/avant-apres/IMG_7971 5.jpg` | src/lelever-next/pages/MontrealCityPage.jsx<br>src/lelever-next/pages/RealisationsPage.jsx |
| 2 | `src/lelever-next/images/3-ville/Montréal/avant-apres/IMG_7997 9.jpg` | src/lelever-next/pages/MontrealCityPage.jsx<br>src/lelever-next/pages/RealisationsPage.jsx |
| 2 | `src/lelever-next/images/3-ville/Montréal/avant-apres/IMG_7999 9.jpg` | src/lelever-next/pages/MontrealCityPage.jsx<br>src/lelever-next/pages/RealisationsPage.jsx |
| 1 | `src/lelever-next/images/3-ville/Montréal/header (1).jpg` | src/lelever-next/pages/MontrealCityPage.jsx |
| 1 | `src/lelever-next/images/3-ville/rive-sud/avant-apres/IMG_5973 6.jpg` | src/lelever-next/pages/RiveSudCityPage.jsx |
| 1 | `src/lelever-next/images/3-ville/rive-sud/avant-apres/IMG_5974 6.jpg` | src/lelever-next/pages/RiveSudCityPage.jsx |
| 2 | `src/lelever-next/images/3-ville/rive-sud/avant-apres/IMG_7974 4.jpg` | src/lelever-next/pages/RealisationsPage.jsx<br>src/lelever-next/pages/RiveSudCityPage.jsx |
| 2 | `src/lelever-next/images/3-ville/rive-sud/avant-apres/IMG_7975 4.jpg` | src/lelever-next/pages/RealisationsPage.jsx<br>src/lelever-next/pages/RiveSudCityPage.jsx |
| 1 | `src/lelever-next/images/3-ville/rive-sud/avant-apres/IMG_7988 5.jpg` | src/lelever-next/pages/RiveSudCityPage.jsx |
| 1 | `src/lelever-next/images/3-ville/rive-sud/avant-apres/IMG_7990 5.jpg` | src/lelever-next/pages/RiveSudCityPage.jsx |
| 1 | `src/lelever-next/images/3-ville/rive-sud/avant-apres/IMG_7992 7.jpg` | src/lelever-next/pages/RiveSudCityPage.jsx |
| 1 | `src/lelever-next/images/3-ville/rive-sud/avant-apres/IMG_7994 7.jpg` | src/lelever-next/pages/RiveSudCityPage.jsx |
| 1 | `src/lelever-next/images/3-ville/rive-sud/avant-apres/IMG_7997 8.jpg` | src/lelever-next/pages/RiveSudCityPage.jsx |
| 1 | `src/lelever-next/images/3-ville/rive-sud/avant-apres/IMG_7999 8.jpg` | src/lelever-next/pages/RiveSudCityPage.jsx |
| 1 | `src/lelever-next/images/3-ville/rive-sud/header (1).JPEG` | src/lelever-next/pages/RiveSudCityPage.jsx |
| 1 | `src/lelever-next/images/4-sous-services/commercial x éxtérieure/1. réalisations/IMG_6777.PNG` | src/lelever-next/services-pages/sous_service/peintureCommercialeExterieureData.js |
| 2 | `src/lelever-next/images/4-sous-services/commercial x éxtérieure/2. réalisations/IMG_6756.PNG` | src/lelever-next/services-pages/sous_service/peintureCommercialeExterieureData.js<br>src/lelever-next/services-pages/sous_service/peintureCommercialeInterieureData.js |
| 1 | `src/lelever-next/images/4-sous-services/commercial x intérieure/1. réalisations/IMG_6759.PNG` | src/lelever-next/services-pages/sous_service/peintureCommercialeInterieureData.js |
| 1 | `src/lelever-next/images/4-sous-services/commercial x intérieure/2. réalisations/IMG_6760.PNG` | src/lelever-next/services-pages/sous_service/peintureCommercialeInterieureData.js |
| 1 | `src/lelever-next/images/4-sous-services/commercial x intérieure/3. réalisations/IMG_6762.PNG` | src/lelever-next/services-pages/sous_service/peintureCommercialeInterieureData.js |
| 1 | `src/lelever-next/images/4-sous-services/résdientielle x intérieure/1. réalisations/IMG_6764.PNG` | src/lelever-next/services-pages/sous_service/peintureResidentielleInterieureData.js |
| 1 | `src/lelever-next/images/4-sous-services/résdientielle x intérieure/2. réalisations/IMG_5976.PNG` | src/lelever-next/services-pages/sous_service/peintureResidentielleInterieureData.js |
| 1 | `src/lelever-next/images/4-sous-services/résdientielle x intérieure/3. réalisations/IMG_6024.PNG` | src/lelever-next/services-pages/sous_service/peintureResidentielleInterieureData.js |
| 1 | `src/lelever-next/images/4-sous-services/résdientielle x intérieure/4. réalisations/IMG_5900.PNG` | src/lelever-next/services-pages/sous_service/peintureResidentielleInterieureData.js |
| 1 | `src/lelever-next/images/4-sous-services/résdientielle x intérieure/5. réalisations/IMG_5873.PNG` | src/lelever-next/services-pages/sous_service/peintureResidentielleInterieureData.js |
| 1 | `src/lelever-next/images/4-sous-services/résdientielle x intérieure/6. réalisations/IMG_5982.PNG` | src/lelever-next/services-pages/sous_service/peintureResidentielleInterieureData.js |
| 1 | `src/lelever-next/images/4-sous-services/résidentielle x éxtérieure/1. réalisations/IMG_6778.PNG` | src/lelever-next/services-pages/sous_service/peintureResidentielleExterieureData.js |
| 1 | `src/lelever-next/images/4-sous-services/résidentielle x éxtérieure/2. réalisations/IMG_6755.PNG` | src/lelever-next/services-pages/sous_service/peintureResidentielleExterieureData.js |
| 1 | `src/lelever-next/images/4-sous-services/résidentielle x éxtérieure/3. réalisations/IMG_6761.PNG` | src/lelever-next/services-pages/sous_service/peintureResidentielleExterieureData.js |
| 1 | `src/lelever-next/images/5-landing-page/Photo/Danny_Wraping.jpeg` | src/lelever-next/pages/BlogPage.jsx |
| 2 | `src/lelever-next/images/5-landing-page/Photo/louis_Consultation.jpeg` | src/lelever-next/home-page/ResourcesSection.jsx<br>src/lelever-next/services-pages/service_ville/components/ServiceQuartierGuidesSection.jsx |
| 3 | `src/lelever-next/images/5-landing-page/Photo/spray man 3000.jpeg` | src/lelever-next/home-page/TeamSection.jsx<br>src/lelever-next/pages/AvisPage.jsx<br>src/lelever-next/pages/ServicesPage.jsx |
| 1 | `src/lelever-next/images/Avant après landing Page/Copie de IMG_6755.jpg` | src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 1 | `src/lelever-next/images/Avant après landing Page/Copie de IMG_6757.jpg` | src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 1 | `src/lelever-next/images/Avant après landing Page/Copie de IMG_7922.jpg` | src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 1 | `src/lelever-next/images/Avant après landing Page/Copie de IMG_7924.jpg` | src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 1 | `src/lelever-next/images/Avant après landing Page/Copie de IMG_7971.jpg` | src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 1 | `src/lelever-next/images/Avant après landing Page/Copie de IMG_7974.jpg` | src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 1 | `src/lelever-next/images/Avant après landing Page/Copie de IMG_7975.jpg` | src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 1 | `src/lelever-next/images/Avant après landing Page/Copie de IMG_7985.jpg` | src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 1 | `src/lelever-next/images/Avant après landing Page/Copie de IMG_7988.jpg` | src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 1 | `src/lelever-next/images/Avant après landing Page/Copie de IMG_7990.jpg` | src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 1 | `src/lelever-next/images/Avant après landing Page/Copie de IMG_7992.jpg` | src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 1 | `src/lelever-next/images/Avant après landing Page/Copie de IMG_7994.jpg` | src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 1 | `src/lelever-next/images/Avant après landing Page/Copie de IMG_7997 2.jpg` | src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 1 | `src/lelever-next/images/Avant après landing Page/Copie de IMG_7999 2.jpg` | src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 2 | `src/lelever-next/images/before_after/IMG_5969.jpg` | src/lelever-next/components/BeforeAfter.jsx<br>src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 2 | `src/lelever-next/images/before_after/IMG_5970.jpg` | src/lelever-next/components/BeforeAfter.jsx<br>src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 1 | `src/lelever-next/images/before_after/IMG_5971.jpg` | src/lelever-next/components/BeforeAfter.jsx |
| 1 | `src/lelever-next/images/before_after/IMG_5972.jpg` | src/lelever-next/components/BeforeAfter.jsx |
| 2 | `src/lelever-next/images/before_after/IMG_5973.jpg` | src/lelever-next/components/BeforeAfter.jsx<br>src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 2 | `src/lelever-next/images/before_after/IMG_5974.jpg` | src/lelever-next/components/BeforeAfter.jsx<br>src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 2 | `src/lelever-next/images/before_after/IMG_5975.jpg` | src/lelever-next/components/BeforeAfter.jsx<br>src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 2 | `src/lelever-next/images/before_after/IMG_5976.jpg` | src/lelever-next/components/BeforeAfter.jsx<br>src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 2 | `src/lelever-next/images/before_after/IMG_5977.jpg` | src/lelever-next/components/BeforeAfter.jsx<br>src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 2 | `src/lelever-next/images/before_after/IMG_5978.jpg` | src/lelever-next/components/BeforeAfter.jsx<br>src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 2 | `src/lelever-next/images/before_after/IMG_5982.jpg` | src/lelever-next/components/BeforeAfter.jsx<br>src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 2 | `src/lelever-next/images/before_after/IMG_5984.jpg` | src/lelever-next/components/BeforeAfter.jsx<br>src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 1 | `src/lelever-next/images/brossard_secteur.png` | src/lelever-next/home-page/SectorsSection.jsx |
| 2 | `src/lelever-next/images/brossard.png` | src/lelever-next/home-page/SectorsSection.jsx<br>src/lelever-next/pages/SecteursDesservisPage.jsx |
| 1 | `src/lelever-next/images/control-2-min.png` | src/lelever-next/home-page/ControlSection.jsx |
| 4 | `src/lelever-next/images/heroImage.png` | src/lelever-next/home-page/HeroSection.jsx<br>src/lelever-next/home-page/LandingHeroSection.jsx<br>src/pages/LandingPageGatineau.jsx<br>src/pages/LandingPageV2.jsx |
| 1 | `src/lelever-next/images/IMG_5873.PNG` | src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 1 | `src/lelever-next/images/IMG_7678.PNG` | src/lelever-next/home-page/BeforeAfterCarouselSection.jsx |
| 1 | `src/lelever-next/images/IMG_7844.PNG` | src/lelever-next/home-page/ControlSection.jsx |
| 1 | `src/lelever-next/images/L2 Services principaux/peinture interieure/+avant apres -peinture intérieure/Peintre Montréal, Le Lever du Pinceau a peint  l_ensemble de cette maison victorienne à Westmount, Montréal.jpg` | src/lelever-next/services-pages/PeintureInterieurePage.jsx |
| 1 | `src/lelever-next/images/L2 Services principaux/peinture interieure/+avant apres -peinture intérieure/Peintre Montréal, Le Lever du Pinceau a peinturé et ont faites les réparations de plâtre sur les plafonds et les murs de cette maison à Westmount, Montréal.jpg` | src/lelever-next/services-pages/PeintureInterieurePage.jsx |
| 1 | `src/lelever-next/images/L2 Services principaux/peinture interieure/+avant apres -peinture intérieure/Peintre Montréal, Le Lever du Pinceau a peinturé l_ensemble de ce condo a Griffintown, Montréal.jpg` | src/lelever-next/services-pages/PeintureInterieurePage.jsx |
| 1 | `src/lelever-next/images/L2 Services principaux/peinture interieure/+avant apres -peinture intérieure/Peintres d_expériences à Montréal, Le Lever du Pinceau a peinturé les portes d_armoires de cette cuisine à Montréal.jpg` | src/lelever-next/services-pages/PeintureInterieurePage.jsx |
| 1 | `src/lelever-next/images/L2 Services principaux/peinture interieure/+avant apres -peinture intérieure/Peintres professionnels à Montréal, Le Lever du Pinceau a installé la protection et peinturé l_ensemble de ce condo a Griffintown, Montréal.jpg` | src/lelever-next/services-pages/PeintureInterieurePage.jsx |
| 1 | `src/lelever-next/images/L2 Services principaux/peinture interieure/+avant apres -peinture intérieure/Peintres pros à Montréal, Le Lever du Pinceau a peint les armoires de cuisines de cette maison dans le grand Montréal.jpg` | src/lelever-next/services-pages/PeintureInterieurePage.jsx |
| 1 | `src/lelever-next/images/L2 Services principaux/Photo page -peinture-commerciale/Peintre commercial dans le grand Montréal, Le Lever du Pinceau a peint ce bureau commerciale au centre ville de Montréal.jpg` | src/lelever-next/services-pages/PeintureCommercialePage.jsx |
| 1 | `src/lelever-next/images/L2 Services principaux/Photo page -peinture-commerciale/Peintre Montréal de profession, Le Lever du Pinceau a peinturé ce local commercial dans NDG, Montréal.jpg` | src/lelever-next/services-pages/PeintureCommercialePage.jsx |
| 1 | `src/lelever-next/images/L2 Services principaux/Photo page -peinture-commerciale/Peintre Montréal professionnel, Le Lever du Pinceau a peinturé ce local commercial dans le quartier Notre-dame-de-grâce, Mtl.jpg` | src/lelever-next/services-pages/PeintureCommercialePage.jsx |
| 1 | `src/lelever-next/images/L2 Services principaux/Photo page -peinture-commerciale/Peintre professionnel à Montréal, Le Lever du Pinceau a peinturé cette cage d_escalier dans le quartier Outremont.jpg` | src/lelever-next/services-pages/PeintureCommercialePage.jsx |
| 1 | `src/lelever-next/images/L2 Services principaux/Photo page -peinture-commerciale/Peintre professionnel commercial à Montréal, Le Lever du Pinceau a complété ce bureau commerciale au centre ville.jpg` | src/lelever-next/services-pages/PeintureCommercialePage.jsx |
| 1 | `src/lelever-next/images/L2 Services principaux/Photo page -peinture-commerciale/Peintre professionnel commercial à Montréal, Le Lever du Pinceau a peinturé cette cage d_escalier à Outremont, Montréal.jpg` | src/lelever-next/services-pages/PeintureCommercialePage.jsx |
| 1 | `src/lelever-next/images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peintre extérieur dans le grand Montréal, Le Lever du Pinceau a peint cette cornciche dans Ville-Mont-Royal, Montréal.jpg` | src/lelever-next/services-pages/PeintureExterieurePage.jsx |
| 1 | `src/lelever-next/images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peintre extérieur dans le grand Montréal, Le Lever du Pinceau a peint cette escalier en fer forgé dans le sud ouest àMontréal.jpg` | src/lelever-next/services-pages/PeintureExterieurePage.jsx |
| 1 | `src/lelever-next/images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peintre extérieur dans le grand Montréal, Le Lever du Pinceau a teint cette terasse sur la rive-sud de Montréal.jpg` | src/lelever-next/services-pages/PeintureExterieurePage.jsx |
| 1 | `src/lelever-next/images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peintre Montréal, Le Lever du Pinceau a peint cette cornciche dans Ville-Mont-Royal, Montréal.jpg` | src/lelever-next/services-pages/PeintureExterieurePage.jsx |
| 1 | `src/lelever-next/images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peintre Montréal, Le Lever du Pinceau a peint cette escalier en fer forgé dans le sud ouest à Montréal.jpg` | src/lelever-next/services-pages/PeintureExterieurePage.jsx |
| 1 | `src/lelever-next/images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peintre Montréal, Le Lever du Pinceau a teint cette terasse sur la rive-sud de Montréal.jpg` | src/lelever-next/services-pages/PeintureExterieurePage.jsx |
| 1 | `src/lelever-next/images/L2 Services principaux/Photo page -peinture-industrielle/Peintre industrielle à Montréal, Le Lever du Pinceau a peinturé au spray ce plafond en steel deck à Montréal.jpg` | src/lelever-next/services-pages/PeintureIndustriellePage.jsx |
| 1 | `src/lelever-next/images/L2 Services principaux/Photo page -peinture-industrielle/Peintre industrielle dans le grand Montréal, Le Lever du Pinceau a peinturé au spray l_extérieure de cette usine à Laval.jpg` | src/lelever-next/services-pages/PeintureIndustriellePage.jsx |
| 1 | `src/lelever-next/images/L2 Services principaux/Photo page -peinture-industrielle/Peintre Montréal, Le Lever du Pinceau a peint ce plafond en steel deck en mur à Montréal est.jpg` | src/lelever-next/services-pages/PeintureIndustriellePage.jsx |
| 1 | `src/lelever-next/images/L2 Services principaux/Photo page -peinture-industrielle/Peintre Montréal, Le Lever du Pinceau a peinturé au spray l_extérieure de cette usine sur la rive nord de Montréal.jpg` | src/lelever-next/services-pages/PeintureIndustriellePage.jsx |
| 1 | `src/lelever-next/images/L2 Services principaux/Photo page -peinture-industrielle/Peintre professionnel Montréal, Le Lever du Pinceau a peinturé au spray ce plafond en steel deck à Montréal.jpg` | src/lelever-next/services-pages/PeintureIndustriellePage.jsx |
| 1 | `src/lelever-next/images/L2 Services principaux/Photo page -peinture-industrielle/Peintre professionnel sur l_île de Montréal, Le Lever du Pinceau a peinturé au spray ce plafond en steel deck en mur à Montréal.jpg` | src/lelever-next/services-pages/PeintureIndustriellePage.jsx |
| 1 | `src/lelever-next/images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peintre Montréal, Le Lever du Pinceau a peint ce condo divise dans le quartier de Griffintown à Montréal.jpg` | src/lelever-next/services-pages/PeintureResidentiellePage.jsx |
| 1 | `src/lelever-next/images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peintre Montréalais, Le Lever du Pinceau a peint tout ce condo à Montréal.jpg` | src/lelever-next/services-pages/PeintureResidentiellePage.jsx |
| 1 | `src/lelever-next/images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peintre Montréal, Le Lever du Pinceau a peinturé l_ensemble de cette maison plein de boiserie décorative à Westmount.jpg` | src/lelever-next/services-pages/PeintureResidentiellePage.jsx |
| 1 | `src/lelever-next/images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peintre professionnel Montréal, Le Lever du Pinceau a peint l_ensemble de cette maison centenaire de Montréal.jpg` | src/lelever-next/services-pages/PeintureResidentiellePage.jsx |
| 1 | `src/lelever-next/images/L2 Services specialise/Photo page -après-sinitre/header.jpg` | src/lelever-next/services-pages/PeintureApresSinistrePage.jsx |
| 1 | `src/lelever-next/images/L2 Services specialise/Photo page -après-sinitre/photo avant-après/IMG_7988.jpg` | src/lelever-next/services-pages/PeintureApresSinistrePage.jsx |
| 1 | `src/lelever-next/images/L2 Services specialise/Photo page -après-sinitre/photo avant-après/IMG_7990.jpg` | src/lelever-next/services-pages/PeintureApresSinistrePage.jsx |
| 1 | `src/lelever-next/images/L2 Services specialise/Photo page -après-sinitre/photo avant-après/IMG_7992.jpg` | src/lelever-next/services-pages/PeintureApresSinistrePage.jsx |
| 1 | `src/lelever-next/images/L2 Services specialise/Photo page -après-sinitre/photo avant-après/IMG_7994.jpg` | src/lelever-next/services-pages/PeintureApresSinistrePage.jsx |
| 1 | `src/lelever-next/images/L2 Services specialise/Photo page -pistolet/header-spray man.JPEG` | src/lelever-next/services-pages/PeintureAuPistoletPage.jsx |
| 1 | `src/lelever-next/images/L2 Services specialise/Photo page -pistolet/photo avant-après/IMG_5977 3.jpg` | src/lelever-next/services-pages/PeintureAuPistoletPage.jsx |
| 1 | `src/lelever-next/images/L2 Services specialise/Photo page -pistolet/photo avant-après/IMG_5978 3.jpg` | src/lelever-next/services-pages/PeintureAuPistoletPage.jsx |
| 1 | `src/lelever-next/images/L2 Services specialise/Photo page -plâtre/Avant après/IMG_6030.PNG` | src/lelever-next/services-pages/ReparationPlatreGysePage.jsx |
| 1 | `src/lelever-next/images/L2 Services specialise/Photo page -plâtre/Avant après/IMG_6031.PNG` | src/lelever-next/services-pages/ReparationPlatreGysePage.jsx |
| 1 | `src/lelever-next/images/L2 Services specialise/Photo page -plâtre/Avant après/IMG_8106.PNG` | src/lelever-next/services-pages/ReparationPlatreGysePage.jsx |
| 1 | `src/lelever-next/images/L2 Services specialise/Photo page -plâtre/Avant après/IMG_8108.PNG` | src/lelever-next/services-pages/ReparationPlatreGysePage.jsx |
| 1 | `src/lelever-next/images/L2 Services specialise/Photo page -plâtre/header _plaster.JPEG` | src/lelever-next/services-pages/ReparationPlatreGysePage.jsx |
| 1 | `src/lelever-next/images/L2 Services specialise/Photo page -surfaces/Avant-apres/IMG_5914.JPG` | src/lelever-next/services-pages/PreparationSurfacesPage.jsx |
| 1 | `src/lelever-next/images/L2 Services specialise/Photo page -surfaces/Avant-apres/IMG_5916.JPG` | src/lelever-next/services-pages/PreparationSurfacesPage.jsx |
| 1 | `src/lelever-next/images/L2 Services specialise/Photo page -surfaces/IMG_8099.jpg` | src/lelever-next/services-pages/PreparationSurfacesPage.jsx |
| 1 | `src/lelever-next/images/L2 Services specialise/Photo page teinture/Avant après/IMG_5973.PNG` | src/lelever-next/pages/TeintureExterieurePage.jsx |
| 1 | `src/lelever-next/images/L2 Services specialise/Photo page teinture/Avant après/IMG_5974.PNG` | src/lelever-next/pages/TeintureExterieurePage.jsx |
| 1 | `src/lelever-next/images/L2 Services specialise/Photo page teinture/Header.PNG` | src/lelever-next/pages/TeintureExterieurePage.jsx |
| 1 | `src/lelever-next/images/L3 Services X Villes/Photo page -peinture-extérieure-montréal/avant après/plateau après.jpg` | src/lelever-next/pages/PeintureExterieurMontrealPage.jsx |
| 1 | `src/lelever-next/images/L3 Services X Villes/Photo page -peinture-extérieure-montréal/avant après/plateau avant.jpg` | src/lelever-next/pages/PeintureExterieurMontrealPage.jsx |
| 1 | `src/lelever-next/images/L3 Services X Villes/Photo page -peinture-extérieure-montréal/avant après/verdun après.jpg` | src/lelever-next/pages/PeintureExterieurMontrealPage.jsx |
| 1 | `src/lelever-next/images/L3 Services X Villes/Photo page -peinture-extérieure-montréal/avant après/verdun avant.jpg` | src/lelever-next/pages/PeintureExterieurMontrealPage.jsx |
| 1 | `src/lelever-next/images/L3 Services X Villes/Photo page -peinture-extérieure-montréal/header extérieure.jpg` | src/lelever-next/pages/PeintureExterieurMontrealPage.jsx |
| 1 | `src/lelever-next/images/L3 Services X Villes/Photo page -peinture-intérieure-montréal/Avant-après/Griffintown après.JPG` | src/lelever-next/pages/PeintureInterieurMontrealPage.jsx |
| 1 | `src/lelever-next/images/L3 Services X Villes/Photo page -peinture-intérieure-montréal/Avant-après/Griffintown avant.jpg` | src/lelever-next/pages/PeintureInterieurMontrealPage.jsx |
| 1 | `src/lelever-next/images/L3 Services X Villes/Photo page -peinture-intérieure-montréal/Avant-après/Notre-dame-de-grâce après.jpg` | src/lelever-next/pages/PeintureInterieurMontrealPage.jsx |
| 1 | `src/lelever-next/images/L3 Services X Villes/Photo page -peinture-intérieure-montréal/Avant-après/Notre-dame-de-grâce avant.jpg` | src/lelever-next/pages/PeintureInterieurMontrealPage.jsx |
| 1 | `src/lelever-next/images/L3 Services X Villes/Photo page -peinture-intérieure-montréal/Avant-après/plateau après.jpg` | src/lelever-next/pages/PeintureInterieurMontrealPage.jsx |
| 1 | `src/lelever-next/images/L3 Services X Villes/Photo page -peinture-intérieure-montréal/Avant-après/plateau avant.jpg` | src/lelever-next/pages/PeintureInterieurMontrealPage.jsx |
| 1 | `src/lelever-next/images/L3 Services X Villes/Photo page -peinture-intérieure-montréal/Avant-après/westmount après.jpg` | src/lelever-next/pages/PeintureInterieurMontrealPage.jsx |
| 1 | `src/lelever-next/images/L3 Services X Villes/Photo page -peinture-intérieure-montréal/Avant-après/westmount avant.jpg` | src/lelever-next/pages/PeintureInterieurMontrealPage.jsx |
| 1 | `src/lelever-next/images/L3 Services X Villes/Photo page -peinture-intérieure-montréal/header.jpg` | src/lelever-next/pages/PeintureInterieurMontrealPage.jsx |
| 2 | `src/lelever-next/images/L3 Sous services/Photo page -peinture condo/avant apres/IMG_6031.jpg` | src/lelever-next/pages/OutremontPage.jsx<br>src/lelever-next/pages/PeintureCondoPage.jsx |
| 2 | `src/lelever-next/images/L3 Sous services/Photo page -peinture condo/avant apres/IMG_7922 2.jpg` | src/lelever-next/pages/OutremontPage.jsx<br>src/lelever-next/pages/PeintureCondoPage.jsx |
| 2 | `src/lelever-next/images/L3 Sous services/Photo page -peinture condo/avant apres/IMG_7924 3.jpg` | src/lelever-next/pages/OutremontPage.jsx<br>src/lelever-next/pages/PeintureCondoPage.jsx |
| 2 | `src/lelever-next/images/L3 Sous services/Photo page -peinture condo/avant apres/IMG_7997 4.jpg` | src/lelever-next/pages/OutremontPage.jsx<br>src/lelever-next/pages/PeintureCondoPage.jsx |
| 2 | `src/lelever-next/images/L3 Sous services/Photo page -peinture condo/avant apres/IMG_7999 4.jpg` | src/lelever-next/pages/OutremontPage.jsx<br>src/lelever-next/pages/PeintureCondoPage.jsx |
| 2 | `src/lelever-next/images/L3 Sous services/Photo page -peinture condo/avant apres/IMG_8108.jpg` | src/lelever-next/pages/OutremontPage.jsx<br>src/lelever-next/pages/PeintureCondoPage.jsx |
| 1 | `src/lelever-next/images/L3 Sous services/Photo page -peinture condo/header.jpg` | src/lelever-next/pages/PeintureCondoPage.jsx |
| 1 | `src/lelever-next/images/L3 Sous services/Photo page appartement/Avant après/IMG_6759 2.jpg` | src/lelever-next/pages/PeintureAppartementPage.jsx |
| 1 | `src/lelever-next/images/L3 Sous services/Photo page appartement/Avant après/IMG_7983 2.jpg` | src/lelever-next/pages/PeintureAppartementPage.jsx |
| 1 | `src/lelever-next/images/L3 Sous services/Photo page appartement/header.PNG` | src/lelever-next/pages/PeintureAppartementPage.jsx |
| 1 | `src/lelever-next/images/L3 Sous services/Photo page armoires de cuisine/Avant après/IMG_5975.PNG` | src/lelever-next/pages/PeintureArmoiresCuisinePage.jsx |
| 1 | `src/lelever-next/images/L3 Sous services/Photo page armoires de cuisine/Avant après/IMG_5976.PNG` | src/lelever-next/pages/PeintureArmoiresCuisinePage.jsx |
| 1 | `src/lelever-next/images/L3 Sous services/Photo page armoires de cuisine/Avant après/IMG_8114.PNG` | src/lelever-next/pages/PeintureArmoiresCuisinePage.jsx |
| 1 | `src/lelever-next/images/L3 Sous services/Photo page armoires de cuisine/Avant après/IMG_8120.PNG` | src/lelever-next/pages/PeintureArmoiresCuisinePage.jsx |
| 1 | `src/lelever-next/images/L3 Sous services/Photo page armoires de cuisine/header.jpeg` | src/lelever-next/pages/PeintureArmoiresCuisinePage.jsx |
| 2 | `src/lelever-next/images/laval.png` | src/lelever-next/home-page/SectorsSection.jsx<br>src/lelever-next/pages/SecteursDesservisPage.jsx |
| 2 | `src/lelever-next/images/longueuil.png` | src/lelever-next/home-page/SectorsSection.jsx<br>src/lelever-next/pages/SecteursDesservisPage.jsx |
| 1 | `src/lelever-next/images/Moses&Dany_Wraping.jpeg` | src/lelever-next/pages/AvisPage.jsx |
| 2 | `src/lelever-next/images/mtl.png` | src/lelever-next/home-page/SectorsSection.jsx<br>src/lelever-next/pages/SecteursDesservisPage.jsx |
| 4 | `src/lelever-next/images/neighborhood_placeholder.jpg` | src/lelever-next/pages/OutremontPage.jsx<br>src/lelever-next/pages/PlateauMontRoyalPage.jsx<br>src/lelever-next/pages/VilleMariePage.jsx<br>src/lelever-next/pages/WestmountPage.jsx |
| 1 | `src/lelever-next/images/new-landing/control-3.jpeg` | src/lelever-next/home-page/ControlSection.jsx |
| 2 | `src/lelever-next/images/new-landing/method-1.jpeg` | src/lelever-next/components/ProcessStepsSection.jsx<br>src/lelever-next/home-page/MethodSection.jsx |
| 2 | `src/lelever-next/images/new-landing/method-2.jpeg` | src/lelever-next/components/ProcessStepsSection.jsx<br>src/lelever-next/home-page/MethodSection.jsx |
| 2 | `src/lelever-next/images/new-landing/method-3.PNG` | src/lelever-next/components/ProcessStepsSection.jsx<br>src/lelever-next/home-page/MethodSection.jsx |
| 2 | `src/lelever-next/images/new-landing/method-4.PNG` | src/lelever-next/components/ProcessStepsSection.jsx<br>src/lelever-next/home-page/MethodSection.jsx |
| 1 | `src/lelever-next/images/pillar-pages/IMG_2585.jpg` | src/lelever-next/pages/SecteursDesservisPage.jsx |
| 1 | `src/lelever-next/images/pillar-pages/secteur-hub/IMG_7894.jpg` | src/lelever-next/pages/SecteursDesservisPage.jsx |
| 1 | `src/lelever-next/images/pillar-pages/secteur-hub/IMG_7896.jpg` | src/lelever-next/pages/SecteursDesservisPage.jsx |
| 1 | `src/lelever-next/images/pillar-pages/secteur-hub/IMG_7898.jpg` | src/lelever-next/pages/SecteursDesservisPage.jsx |
| 1 | `src/lelever-next/images/pillar-pages/secteur-hub/IMG_7900.jpg` | src/lelever-next/pages/SecteursDesservisPage.jsx |
| 1 | `src/lelever-next/images/pillar-pages/secteur-hub/IMG_7902.jpg` | src/lelever-next/pages/SecteursDesservisPage.jsx |
| 1 | `src/lelever-next/images/rbqlogo.png` | src/lelever-next/home-page/TrustBanner.jsx |
| 1 | `src/lelever-next/images/satisfaction_en.PNG` | src/lelever-next/home-page/GuaranteeSection.jsx |
| 1 | `src/lelever-next/images/satisfaction_fr.PNG` | src/lelever-next/home-page/GuaranteeSection.jsx |
| 1 | `src/lelever-next/images/trushieldlogo.png` | src/lelever-next/home-page/TrustBanner.jsx |

---

## Résumé par dossier racine `src/lelever-next/images/`

| Dossier (1er segment après images/) | Nb de fichiers image distincts |
|---|---:|
| `1-page-principale` | 15 |
| `2-services` | 24 |
| `3-ville` | 51 |
| `4-sous-services` | 14 |
| `5-landing-page` | 3 |
| `Avant après landing Page` | 14 |
| `before_after` | 12 |
| `brossard_secteur.png` | 1 |
| `brossard.png` | 1 |
| `control-2-min.png` | 1 |
| `heroImage.png` | 1 |
| `IMG_5873.PNG` | 1 |
| `IMG_7678.PNG` | 1 |
| `IMG_7844.PNG` | 1 |
| `L2 Services principaux` | 30 |
| `L2 Services specialise` | 25 |
| `L3 Services X Villes` | 14 |
| `L3 Sous services` | 19 |
| `laval.png` | 1 |
| `longueuil.png` | 1 |
| `Moses&Dany_Wraping.jpeg` | 1 |
| `mtl.png` | 1 |
| `neighborhood_placeholder.jpg` | 1 |
| `new-landing` | 5 |
| `pillar-pages` | 6 |
| `rbqlogo.png` | 1 |
| `satisfaction_en.PNG` | 1 |
| `satisfaction_fr.PNG` | 1 |
| `trushieldlogo.png` | 1 |

---

## Imports pointant vers un fichier absent

*(Aucun.)*
