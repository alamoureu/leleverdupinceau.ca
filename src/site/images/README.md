# Images

Assets du site. Format servi : **WebP**. Originaux PNG/JPG : `npm run images:to-webp`.

## Structure

```
images/
  shared/           logos, city-thumbs, assurance
  home/             accueil (method, control, avant-apres uniques)
  avis/             avatars + avant-apres uniques à la page Avis
  a-propos/
  blog/
  services/         residentielle, commerciale, industrielle, exterieure,
                    platre, surfaces, pistolet, apres-sinistre, teinture, hub
  sous-services/    appartement, maison, armoires
  villes/           montreal (+ quartiers), laval, longueuil, brossard, …
  services-villes/  combos service × ville (ex. peinture-interieure-montreal)
  landing/          secteur-hub, etc.
```

Sous chaque page : `header/`, `avant-apres/`, `realisations/` selon le besoin.
Toujours `avant-apres` (pas « Avant après », « +Photo… », etc.).

## Une seule copie par photo

Même `IMG_####` = un seul fichier. Les pages Avis / Réalisations / carrousel
importent via `src/site/constants/avantApresById.js`.

Avant d’ajouter une photo : `npm run images:byte-dupes` et chercher le même `IMG_`.

## Tailles cibles

| Rôle | max côté | Commande |
|------|----------|----------|
| Avant/après (carrousel ~360px) | 1080 | `npm run images:optimize-ba` |
| Héros / headers / galeries | 1920 | `npm run images:compress` |

## Notes

- Dossier ville Montréal : `villes/montreal/` (sans accent dans le path).
- Doublons octet : `npm run images:byte-dupes`
- Photos à intégrer : déposer dans `Photos à ajouter-last-modifs/` (voir règle Cursor).
