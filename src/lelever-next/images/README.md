# Images – Le Lever du Pinceau

This folder is the single source for all **local** image assets used by the new site (`lelever-next`).

## Structure

| Folder / file | Used by |
|---------------|--------|
| **before_after/** | `BeforeAfter.jsx` – before/after slider pairs (JPG) |
| **new-landing/** | `MethodSection`, `ProcessStepsSection` (method-1..4, control-1..3), `ControlSection` |
| **1-page-principale/service hub/** | `ServicesSection`, `RecentProjectsSection` – one image per service type |
| **1-page-principale/blog hub/** | `BlogPage` hero, `ResourcesSection`, `ServiceQuartierGuidesSection` – guide cards |
| **1-page-principale/sector hub/** | City cards (via SectorsSection: mtl, laval, longueuil, brossard are in root) |
| **1-page-principale/peintre pro/** | `PeintreProfessionnelPage`, `TeamSection` |
| **1-page-principale/Home/** | `RecentProjectsSection` – “Projet extérieur” |
| **2-services/Page peinture X/** | Service pages (résidentielle, commerciale, intérieure, extérieure, industrielle) |
| **3-ville/Montréal\|laval\|brossard\|longueuil/** | City pages – each city has its own subfolders and réalisations |
| **4-sous-services/** | Sous-service pages (e.g. commercial x intérieure, résidentielle x éxtérieure). Note: folder `résdientielle x intérieure` is spelled that way on disk on purpose; do not rename. |
| **Root** | `heroImage.png` (home hero), `mtl.png`, `laval.png`, `longueuil.png`, `brossard.png` (sectors), `rbqlogo.png`, `trushieldlogo.png`, `secteurs_desservis.jpg` (secteurs page hero) |

## Notes

- **Folder name:** `4-sous-services/résdientielle x intérieure` is intentional (matches filesystem). Code in `peintureResidentielleInterieureData.js` uses this path; do not “fix” the spelling to résidentielle without renaming the folder.
- **City folder:** Use `Montréal` (with accent) for 3-ville, not `Montreal`.
- Run `node scripts/check-images-missing.js` from project root to verify all referenced images exist and to list unused files.
