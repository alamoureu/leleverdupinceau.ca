# Header photos analysis – Service pages and site-wide

**Date:** 2025-02-13  
**Scope:** Hero/header images on service pages and main pages. No code changes – analysis only.

---

## 1. Service pages (2-services) – what exists in folders

| Service page | Folder `2-services/Page peinture X/` | Has "Photo header" subfolder? | Files in Photo header (if any) |
|--------------|--------------------------------------|-------------------------------|---------------------------------|
| **Résidentielle** | Page peinture résidentielle | ✅ Yes | `Paint Cut-in Louis.jpeg` |
| **Intérieure** | Page peinture intérieure | ✅ Yes | `Rolling_Door.jpeg` |
| **Extérieure** | Page peinture extérieure | ✅ Yes | `IMG_0989.JPG` |
| **Commerciale** | Page peinture commerciale | ❌ No | — |
| **Industrielle** | Page peinture industrielle | ❌ No | — |

So only **résidentielle**, **intérieure** and **extérieure** have a dedicated "Photo header" folder under their 2-services page folder.

---

## 2. What each service page actually uses (current code)

| Page | Current header image path | From correct folder? |
|------|---------------------------|----------------------|
| **Peinture résidentielle** | `2-services/Page peinture résidentielle/Photo header/Paint Cut-in Louis.jpeg` | ✅ Yes – uses the image from that page’s folder |
| **Peinture intérieure** | `2-services/Page peinture intérieure/Photo header/Rolling_Door.jpeg` | ✅ Yes – uses the image from that page’s folder |
| **Peinture extérieure** | `2-services/Page peinture extérieure/Photo header/IMG_0989.JPG` | ✅ Yes – uses the image from that page’s folder |
| **Peinture commerciale** | `1-page-principale/service hub/Photo header/IMG_6771.PNG` | ⚠️ No dedicated header in 2-services – uses generic hub image |
| **Peinture industrielle** | `1-page-principale/service hub/Photo header/IMG_6771.PNG` | ❌ No – same generic image; **photo doesn’t really match industrial** |

Conclusion for service pages:

- **Résidentielle, intérieure, extérieure:** header photos are the actual ones from their folder.
- **Commerciale:** no "Photo header" in its folder; code uses the generic hub image (same as many other pages).
- **Industrielle:** no "Photo header" in its folder and the same generic hub image is used, so the header doesn’t really match industrial painting. There is, however, an industrial-specific image in the hub: `1-page-principale/service hub/Peinture industrielle/IMG_6757.PNG`, which would be a better thematic match if you decide to change later.

---

## 3. Same header image used on many pages (IMG_6771)

This file is used as the hero/header on **8 pages**:

- `1-page-principale/service hub/Photo header/IMG_6771.PNG`

Used on:

1. **ServicesPage** (hub)
2. **SecteursDesservisPage**
3. **BlogPage**
4. **PeintreProfessionnelPage**
5. **AvisPage**
6. **ContactPage**
7. **PeintureCommercialePage**
8. **PeintureIndustriellePage**

So the same generic “service hub” photo is used for the main Services hub, Secteurs, Blog, Peintre pro, Avis, Contact, and for both **commercial** and **industrial** service pages. For the industrial page in particular, that’s why the photo doesn’t really match.

---

## 4. Other header photos (dedicated or different)

- **AboutPage:** `1-page-principale/a propos/Photo header/IMG_6772.PNG` – dedicated to “à propos”.
- **City pages:** each uses its own header from `3-ville/[ville]/`:
  - Montréal: `+Photo header/IMG_6782.PNG`
  - Laval: `+ header/IMG_6786.PNG`
  - Longueuil: `+header/IMG_6787.PNG`
  - Brossard: `+Header/IMG_6784.PNG`

So city pages and À propos use their own assets; only the service pages and the hub/blog/avis/contact/peintre-pro share or reuse the same header where noted above.

---

## 5. Summary

- **Header = actual image from the folder:** Résidentielle, Intérieure, Extérieure (each uses the Photo header from its own `2-services/Page peinture X/` folder).
- **Header = generic hub image (no dedicated header in 2-services):** Commerciale.
- **Header = generic hub image and doesn’t really match:** Industrielle. A more suitable file exists in the hub: `service hub/Peinture industrielle/IMG_6757.PNG`.
- **Same header (IMG_6771) on 8 pages:** Services, Secteurs, Blog, Peintre pro, Avis, Contact, Peinture commerciale, Peinture industrielle.

No code was changed; this is analysis only. If you want, we can later switch the industrial page to `service hub/Peinture industrielle/IMG_6757.PNG` or add dedicated headers for commerciale/industrielle under 2-services when you have the assets.
