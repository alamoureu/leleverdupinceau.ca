# Image folder audit – main pages

**Last verified:** All 114 referenced image paths exist. Run `node scripts/check-images-missing.js` to re-check.

---

## 1. Service hub (`1-page-principale/service hub/`)

**Status: ✅ Complete and correctly used**

| Folder in service hub | File | Used by |
|------------------------|------|---------|
| Peinture résidentielle | IMG_6768.PNG | **ServicesSection** (home – 1st service card), **RecentProjectsSection** |
| Peinture commerciale | IMG_6766.PNG | **ServicesSection** (2nd card), **RecentProjectsSection** |
| Peinture intérieure | IMG_6758.PNG | **ServicesSection** (3rd card), **RecentProjectsSection** |
| Peinture extérieure | IMG_6767.PNG | *(in folder, not used on home – home shows only 3 service cards)* |
| Peinture industrielle | IMG_6757.PNG | **RecentProjectsSection** |
| Photo header | IMG_6771.PNG | **RecentProjectsSection** (one of the 6 project images) |

**Note:** The home page service block only displays 3 services (résidentielle, commerciale, intérieure). Exterior project in RecentProjects uses `Home/Projet extérieur/IMG_6755.PNG`.

---

## 2. Secteurs desservis page

**Status: ✅ Correctly used**

| Asset | Used by |
|-------|---------|
| **secteurs_desservis.jpg** (root) | **SecteursDesservisPage** – hero / “équipe à proximité” section |
| **mtl.png**, **laval.png**, **longueuil.png**, **brossard.png** (root) | **SectorsSection** → city cards on home and on SecteursDesservisPage |

Sector hub folder (`1-page-principale/sector hub/`) is no longer used for the secteurs page; those images are available for future use.

---

## 3. Peintre pro (`1-page-principale/peintre pro/`)

**Status: ✅ Complete and correctly used**

| Folder in peintre pro | File | Used by |
|-----------------------|------|---------|
| Peinture résidentielle | IMG_6763.PNG | **PeintreProfessionnelPage**, **TeamSection** (home) |
| Peinture commerciale | IMG_6751.PNG | *(in folder, not currently imported)* |
| Peinture extérieure | IMG_6753.PNG | *(in folder, not currently imported)* |
| Peinture industrielle | IMG_6752.PNG | *(in folder, not currently imported)* |
| Peinture intérieure | IMG_6764.PNG | *(in folder, not currently imported)* |

Only **Peinture résidentielle/IMG_6763.PNG** is used. The other 4 are available for future use.

---

## 4. Other 1-page-principale hubs

| Hub | Status | Used by |
|-----|--------|---------|
| **Home** | ✅ | **RecentProjectsSection** → `Home/Projet extérieur/IMG_6755.PNG` |
| **blog hub** | ✅ | **BlogPage** (hero), **ResourcesSection** (3 articles), **ServiceQuartierGuidesSection**, blog data |
| **avis** | ✅ | **AvisPage** (4 images) |
| **a propos** | ⚠️ **Not used** | Folder has `Photo header/IMG_6772.PNG` but **AboutPage** does not import any image from here |

---

## 5. Empty / missing / unused

| Item | Status |
|------|--------|
| **1-page-principale/a propos** | Has 1 image (IMG_6772.PNG) but **no page uses it**. Add a hero image on the About page if you want it. |
| **5-landing-page** | Contains “Landing page maquette” and “Photo” subfolders. **Not used by current code.** The app uses `new-landing/` (method + control) and root `heroImage.png` for the main home. Use 5-landing-page for reference/maquettes or future landing. |
| **3-ville** | **Not empty.** Montréal, Brossard, Laval, Longueuil all have headers, réalisations, and type folders; city pages use them. |
| **4-sous-services** | **Not empty.** All 4 sub-service folders have images. (Folder name typo: `résdientielle x intérieure` instead of “résidentielle”.) |

---

## 6. Page-by-page image checklist (for manual review)

When you check each page, verify:

- **Home:** Hero = heroImage.png. Sectors = mtl, laval, longueuil, brossard. Services = 3 cards (résidentielle, commerciale, intérieure). Recent projects = 6 images from service hub + Home/Projet extérieur. Method = method-1..4, Control = control-1..3. Trust = rbq + trushield. Team = peintre pro Peinture résidentielle. Resources = 3 blog guide cards. Before/after = before_after pairs.
- **Secteurs desservis:** Hero = secteurs_desservis.jpg. City cards = same 4 sector images.
- **Montréal, Laval, Brossard, Longueuil:** Each uses only that city's folder under 3-ville/. Project grid = 9 images (résidentielle, extérieure, commerciale + 6 réalisations).
- **Service pages** (résidentielle, commerciale, intérieure, extérieure, industrielle): Each uses only 2-services/Page peinture X/ for that service.
- **Sous-services:** Each uses 4-sous-services/ folder matching the sub-service.
- **Blog:** Hero = blog hub Peinture extérieure. Guide cards = blog hub (intérieure, résidentielle, commerciale).
- **Peintre professionnel:** Image = peintre pro Peinture résidentielle.

---

## Your comments (add notes as you review)

Add your notes below. Example: "Hero image looks stretched" or "Image 3 doesn't match the section."

| Page / section | Your comment |
|-----------------|--------------|
| Home |  |
| Secteurs desservis |  |
| Montréal |  |
| Laval |  |
| Brossard |  |
| Longueuil |  |
| Services |  |
| Peinture résidentielle |  |
| Peinture commerciale |  |
| Peinture intérieure |  |
| Peinture extérieure |  |
| Peinture industrielle |  |
| Sous-services (comm. int./ext., rés. int./ext.) |  |
| Service × city pages |  |
| Service × quartier (Montréal neighbourhoods) |  |
| Blog |  |
| Peintre professionnel |  |
| A-propos / Contact / Autres |  |

---

## 7. Summary

- **Service hub:** All 5 service types + Photo header present; home uses 3 for service cards + 4 + Home for recent projects. ✅  
- **Secteurs page:** Uses secteurs_desservis.jpg + root city images. All 5 types present; only “Peinture intérieure” is used on secteurs-desservis. ✅  
- **Peintre pro:** All 5 types present; only “Peinture résidentielle” is used on peintre-pro and team section. ✅  

**Unused / optional:**

- **a propos** image is never imported (About page has no hero image from this folder).
- **5-landing-page** is not referenced by the app (only **new-landing** and root images are).

**Optional renames (consistency only):**

- `sector hub/Peinture industriel` → `Peinture industrielle`
- `4-sous-services/résdientielle x intérieure` → `résidentielle x intérieure`  
Code that references **sector hub** only uses “Peinture intérieure”; **4-sous-services** uses path `résdientielle` (with typo) in code, so renaming would require a code update.
