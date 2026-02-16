# Audit des images – Site Le Lever du Pinceau

**Date:** 9 février 2025  
**Périmètre:** Toutes les images locales du site (dossier `src/lelever-next/images`).  
**Objectif:** État des lieux — images manquantes, réutilisées et non utilisées.

---

## 1. Résumé

| Élément | Résultat |
|--------|----------|
| **Images référencées dans le code** | 114 chemins |
| **Images manquantes** | **Aucune** – tous les chemins référencés existent sur le disque |
| **Images réutilisées** | Plusieurs fichiers utilisés sur de multiples pages (détail section 3) |
| **Images présentes sur le disque mais non utilisées** | 69 fichiers (détail section 4) |

---

## 2. Structure des dossiers d’images

Toutes les images utilisées par le site proviennent de :

- **before_after/** – Slider avant/après (12 photos)
- **new-landing/** – Méthode et contrôle (method-1 à 4, control-1 à 3)
- **Racine** – Hero, secteurs (mtl, laval, longueuil, brossard), logos (RBQ, TruShield), secteurs_desservis
- **1-page-principale/** – Hubs « service », « blog », « peintre pro », « Home » (cartes services, projets récents, guides blog)
- **2-services/** – Pages services (résidentielle, commerciale, intérieure, extérieure, industrielle) et sous-pages
- **3-ville/** – Pages ville (Montréal, Laval, Brossard, Longueuil) – chaque ville a son sous-dossier
- **4-sous-services/** – Sous-services (commercial/résidentiel × intérieur/extérieur)

---

## 3. Images réutilisées (même fichier, plusieurs endroits)

Même **nom de fichier** utilisé à plusieurs endroits. Utile pour vérifier la cohérence visuelle ou décider d’utiliser des visuels différents.

### 3.1 Réutilisation forte (à surveiller en priorité)

| Fichier | Où il est utilisé |
|---------|--------------------|
| **IMG_6763.PNG** | Page Peintre pro, section Équipe (accueil), cartes blog « résidentielle », section Ressources, **toutes les 4 pages ville** (Montréal, Laval, Brossard, Longueuil) pour la catégorie « résidentielle », page Peinture extérieure (résid. ext.), sous-services résid. ext., données des articles de blog |
| **IMG_6764.PNG** | Sous-service résid. intérieure, page Peinture résidentielle (3. réalisations), cartes blog « intérieure », section Ressources, **Laval et Brossard** (catégorie intérieure), données blog |
| **IMG_6768.PNG** | Projets récents (accueil), page Peinture intérieure (2. réalisations), données blog |
| **IMG_6752.PNG** | Page Peinture industrielle (1. réalisations), **Brossard et Longueuil** (industrielle), données blog (blog hub + 2-services) |
| **IMG_6777.PNG** | Page Peinture commerciale (3.), page Peinture extérieure (comm. ext.), sous-services comm. int. et ext., **Brossard** (3. réalisations), **Longueuil** (commerciale) |
| **IMG_6760.PNG** | Page Peinture commerciale (1.), **Montréal** (commerciale + 2. réalisations), **Laval** (commerciale), sous-service comm. int., données blog |
| **IMG_6778.PNG** | **Montréal, Brossard, Longueuil** (extérieure), sous-service résid. ext. (1. réalisations), données blog |
| **IMG_6756.PNG** | **Montréal** (4. réalisations), **Laval** (extérieure), sous-services résid. ext. et comm. ext. |
| **IMG_6779.PNG** | Page Peinture résidentielle (2.), **Montréal** (6. réalisations), sous-service résid. ext. (2. réalisations) |
| **IMG_6759.PNG** | Page Peinture commerciale (2.), **Montréal** (3. réalisations), **Brossard** (commerciale) |
| **IMG_6762.PNG** | Page Peinture intérieure (3.), sous-service comm. int. (3.), cartes blog « commerciale », section Ressources, données blog |
| **IMG_6753.PNG** | Hero de la page Blog, données blog (blog hub extérieure) |
| **IMG_6755.PNG** | Page Peinture extérieure (1. réalisations), Projets récents (Projet extérieur), données blog, données service × ville |
| **IMG_6758.PNG** | Projets récents (intérieure), section Services (intérieure), **Longueuil** (intérieure) |
| **IMG_6757.PNG** | Projets récents (industrielle), page Peinture industrielle (2. réalisations), données blog |
| **IMG_5976.PNG** | Sous-service résid. int. (2. réalisations), page Peinture intérieure (6. réalisations), **Laval** (1. réalisations) |
| **IMG_6024.PNG** | Sous-service résid. int. (3. réalisations), **Longueuil** (3. réalisations) |
| **IMG_6032.PNG** | Page Peinture intérieure (1. réalisations), données blog |
| **IMG_6761.PNG** | **Brossard** (1. réalisations), page Peinture extérieure (2. réalisations), sous-service résid. ext. (3. réalisations) |

### 3.2 Réutilisation modérée (2–3 usages)

| Fichier | Où il est utilisé |
|---------|--------------------|
| **method-1.jpeg, method-2.jpeg, method-3.PNG, method-4.PNG** | Section Méthode (accueil), section Étapes du processus |
| **IMG_6766.PNG** | Section Services (commerciale), Projets récents |
| **IMG_6771.PNG** | Projets récents (Photo header) |

### 3.3 Point d’attention

- **IMG_6763.PNG** est utilisé pour la catégorie « résidentielle » sur **les 4 pages ville** (Montréal, Laval, Brossard, Longueuil). Une image identique s’affiche donc pour « résidentielle » sur chaque ville. Si l’objectif est d’avoir un visuel par ville, il faudrait des images dédiées par ville dans chaque dossier `3-ville/.../résidentielle/`.

---

## 4. Images non utilisées (présentes sur le disque, pas dans le code)

**69 fichiers** sont dans le dossier images mais ne sont référencés nulle part dans le code. Ils peuvent servir de visuels de rechange ou être retirés pour alléger le projet.

### 4.1 Par zone

- **1-page-principale/a propos/** – 1 image (Photo header) – page À propos sans hero local
- **1-page-principale/avis/** – 4 images (par type de peinture)
- **1-page-principale/peintre pro/** – 4 images (commerciale, extérieure, industrielle, intérieure) – seule « Peinture résidentielle » est utilisée
- **1-page-principale/sector hub/** – 4 images (commerciale, extérieure, industriel, résidentielle)
- **1-page-principale/service hub/** – 1 image (Peinture extérieure – IMG_6767.PNG)
- **2-services/** – 5 images (sous-dossiers « Peinture commercial intérieure », « Peinture commerciale intérieure », « Peinture résdientielle intérieure », Photo header, etc.)
- **3-ville/** – 5 images (headers « +Header » / « +Photo header » par ville + Montréal industrielle/intérieure)
- **4-sous-services/** – 2 images (3. réalisations comm. ext., +header résid. int.)
- **5-landing-page/** – 10 images (maquettes + photos) – dossier non utilisé par le site actuel
- **Racine** – 33 fichiers (anciennes variantes secteurs, placeholders, visuels de type « valeur » non branchés, etc.)

### 4.2 Liste complète des 69 fichiers non utilisés

```
1-page-principale/a propos/Photo header/IMG_6772.PNG
1-page-principale/avis/Peinture commerciale/IMG_6760.PNG
1-page-principale/avis/Peinture extérieure/IMG_6761.PNG
1-page-principale/avis/Peinture intérieure/IMG_6758.PNG
1-page-principale/avis/Peinture résidentielle/IMG_6755.PNG
1-page-principale/peintre pro/Peinture commerciale/IMG_6751.PNG
1-page-principale/peintre pro/Peinture extérieure/IMG_6753.PNG
1-page-principale/peintre pro/Peinture industrielle/IMG_6752.PNG
1-page-principale/peintre pro/Peinture intérieure/IMG_6764.PNG
1-page-principale/sector hub/Peinture commerciale/IMG_6760.PNG
1-page-principale/sector hub/Peinture extérieure/IMG_6761.PNG
1-page-principale/sector hub/Peinture industriel/IMG_6752.PNG
1-page-principale/sector hub/Peinture résidentielle/IMG_6758.PNG
1-page-principale/service hub/Peinture extérieure/IMG_6767.PNG
2-services/Page peinture commerciale/Peinture commercial intérieure/IMG_6760.PNG
2-services/Page peinture intérieure/Peinture commerciale intérieure/IMG_6759.PNG
2-services/Page peinture intérieure/Peinture résdientielle intérieure/IMG_6764.PNG
2-services/Page peinture intérieure/Photo header/Rolling_Door.jpeg
2-services/Page peinture résidentielle/Peinture résidentielle intérieure/IMG_6758.PNG
2-services/Page peinture résidentielle/Photo header/Paint Cut-in Louis.jpeg
3-ville/brossard/+Header/IMG_6784.PNG
3-ville/laval/+ header/IMG_6786.PNG
3-ville/longueuil/+header/IMG_6787.PNG
3-ville/Montréal/+Photo header/IMG_6782.PNG
3-ville/Montréal/industrielle/IMG_6752.PNG
3-ville/Montréal/intérieure/IMG_6758.PNG
4-sous-services/commercial x éxtérieure/3. réalisations/IMG_6767.PNG
4-sous-services/résdientielle x intérieure/+header/Rolling.png
5-landing-page/Landing page maquette/IMG_2527.PNG
5-landing-page/Landing page maquette/IMG_2528.PNG
5-landing-page/Landing page maquette/IMG_2529.PNG
5-landing-page/Photo/Danny_Wraping.jpeg
5-landing-page/Photo/IMG_6025.PNG
5-landing-page/Photo/IMG_6821.PNG
5-landing-page/Photo/louis_Consultation.jpeg
5-landing-page/Photo/Paint Cut-in Louis.jpeg
5-landing-page/Photo/Rolling.png
5-landing-page/Photo/spray man 3000.jpeg
brossard_secteur.png
comment_choisir_un_peintre.jpg
Conversions & renovations complètes.PNG
erreur_eviter_projet_peinture.jpg
Finition impeccable.PNG
laval_secteur.png
longueil_secteur.png
montreal_secteur.png
Murs d'accent & finitions décoratives.PNG
neighborhood_placeholder.jpg
neighborhood_placeholder.png
Peinture extérieure.PNG
Peinture intérieure.PNG
peinture_commercial.jpg
peinture_interieur.jpg
peinture_pro.jpg
peinture_residentielle.jpg
peinture_residentielle.PNG
prix_projet_peinture_montreal.jpg
Projets commerciaux.PNG
Projets résidentiels.PNG
projet_commercial.jpg
projet_commercial_2.jpg
projet_exterieur.jpg
projet_residentielle.jpg
projet_residentielle_2.jpg
Propreté.PNG
Préparation et réparation des surfaces.PNG
Qualité.PNG
Respect.PNG
Transparence.JPG
```

---

## 5. Synthèse et recommandations

### 5.1 Ce qui est en ordre

- Aucune image référencée dans le code n’est manquante.
- La structure des dossiers (before_after, new-landing, 1-page-principale, 2-services, 3-ville, 4-sous-services) est claire et utilisée de façon cohérente.

### 5.2 Réutilisation

- Plusieurs images (surtout **IMG_6763**, **IMG_6764**, **IMG_6760**, **IMG_6777**, **IMG_6778**, etc.) servent à la fois aux pages « services », aux pages « ville », aux sous-services et au blog. C’est normal pour un ensemble de visuels génériques.
- Le seul point à trancher en comité / avec le boss : **souhaite-t-on une image « résidentielle » différente par ville ?** Aujourd’hui la même image (IMG_6763.PNG) est utilisée pour Montréal, Laval, Brossard et Longueuil. Les dossiers `3-ville/.../résidentielle/` pourraient contenir une image par ville si on veut les différencier.

### 5.3 Images non utilisées

- **69 fichiers** sont présents mais non référencés.
- **5-landing-page/** (10 fichiers) et un grand nombre de fichiers à la racine (placeholders, anciennes variantes) peuvent être archivés ou supprimés si on veut simplifier le dossier.
- Les images dans **1-page-principale/avis/**, **peintre pro/** (hors résidentielle), **sector hub/** et les **+Header** des villes sont des candidats pour de futures évolutions (hero À propos, visuels par ville, etc.) ou pour nettoyage.

### 5.4 Vérification technique

- Pour rejouer l’audit (manquants + non utilisés) :  
  `node scripts/check-images-missing.js`  
  à la racine du projet.

---

**Document généré pour diffusion interne / validation hiérarchique.**
