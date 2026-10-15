# Images

Assets du site, organisés par section (landing, pages services, villes, etc.).

Format servi : **WebP** (pas de PNG/JPG en production). Les originaux PNG/JPG se convertissent avec `npm run images:to-webp`.

## Tailles cibles

| Rôle | max côté | Commande |
|------|----------|----------|
| Avant/après (carrousel ~360px) | 1080 | `npm run images:optimize-ba` |
| Héros / headers / galeries | 1920 | `npm run images:compress` |

## Notes

- **City folder:** utiliser `Montréal` (avec accent) pour les dossiers ville, pas `Montreal`.
- Doublons octet : `npm run images:byte-dupes`
- Compression générale : `npm run images:compress`
- Avant/après : `npm run images:optimize-ba` (resize 1080 + recompress quality 82)
- Filtres : `node scripts/compress-images.js --max-dim=1080 --include=avant --exclude=header`
