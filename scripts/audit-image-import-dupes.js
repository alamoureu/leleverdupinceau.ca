/**
 * Audit des images : assets dont le même chemin est importé depuis 2+ modules (.jsx/.js).
 * On ne se base pas sur le nom seul : on résout le chemin relatif de chaque import (ESM static).
 *
 * Usage: node scripts/audit-image-import-dupes.js
 * Sortie: markdown sur stdout (à coller dans docs/IMAGE_DUPLICATES.md ou via pipe).
 */

const path = require('path');
const { scanImageImports } = require('./lib/image-import-scan');

const REPO_ROOT = path.join(__dirname, '..');

function main() {
  const { byAsset, missing } = scanImageImports(REPO_ROOT);

  const allImporterFiles = new Set();
  for (const s of byAsset.values()) {
    for (const f of s) allImporterFiles.add(f);
  }

  const dupes = [...byAsset.entries()]
    .filter(([, set]) => set.size >= 2)
    .sort((a, b) => b[1].size - a[1].size || a[0].localeCompare(b[0]));

  const uniqueAssets = byAsset.size;
  const sharedCount = dupes.length;

  const lines = [];
  lines.push('## Méthodologie (relecture audit images)');
  lines.push('');
  lines.push(
    'Un **import partagé** ici signifie : le **même chemin de fichier image** (après résolution des `../` depuis le fichier qui importe) est référencé par **au moins deux fichiers** `.jsx` ou `.js` sous `src/`.',
  );
  lines.push('');
  lines.push(
    "**Ce n'est pas une erreur technique** : une seule image sur le disque peut être volontairement réutilisée (accueil, hub services, page Avis, données `*Data.js`, etc.). C'est **problématique pour la crédibilité** seulement si tu veux éviter que la même photo apparaisse sur des contextes trop différents (ex. deux fiches service distinctes).",
  );
  lines.push('');
  lines.push(
    "**À ne pas confondre** avec les **doublons octet pour octet** (deux chemins différents, même contenu) : pour cela, utiliser `npm run audit:image-byte-dupes`.",
  );
  lines.push('');
  lines.push(
    "On ne déduit rien à partir du seul nom `IMG_6760.PNG` : deux fichiers différents dans des dossiers différents sont deux assets distincts. À l'inverse, deux imports avec des chemins relatifs différents qui pointent vers le **même** fichier résolu comptent comme **un** asset (même clé canonique).",
  );
  lines.push('');
  lines.push(
    "**Limites de cet audit :** imports `import ... from '...'` statiques seulement (pas les URLs d'images construites en JavaScript dans le JSX, pas les URLs externes). Les iframes (ex. carte Gatineau) ne sont pas des fichiers image locaux.",
  );
  lines.push('');
  lines.push(`**Généré par :** \`node scripts/audit-image-import-dupes.js\` le **${new Date().toISOString().slice(0, 10)}**.`);
  lines.push('');
  lines.push(
    `**Totaux :** \`${allImporterFiles.size}\` fichiers sous \`src/\` importent au moins une image (import statique) ; \`${uniqueAssets}\` chemins d'assets distincts après résolution ; \`${sharedCount}\` assets importés depuis **2+ modules** (liste ci-dessous = **réutilisation du même fichier**).`,
  );
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## Images réutilisées entre plusieurs modules (2+ importateurs)');
  lines.push('');
  lines.push('| # importateurs | Chemin canonique (depuis la racine du repo) | Fichiers qui importent |');
  lines.push('|---:|---|---|');

  for (const [canonical, importers] of dupes) {
    const n = importers.size;
    const list = [...importers].sort().join('<br>');
    lines.push(`| ${n} | \`${canonical}\` | ${list} |`);
  }

  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## Imports image dont le fichier semble manquant sur disque');
  lines.push('');
  const missEntries = [...missing.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  if (missEntries.length === 0) {
    lines.push('*(Aucun chemin résolu manquant parmi les imports analysés.)*');
  } else {
    lines.push('| Chemin canonique | Fichiers importeurs |');
    lines.push('|---|---|');
    for (const [canonical, importers] of missEntries) {
      lines.push(`| \`${canonical}\` | ${[...importers].sort().join('<br>')} |`);
    }
  }

  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## Pistes « images à diversifier » (réutilisation large)');
  lines.push('');
  lines.push(
    'Les entrées avec beaucoup d\'importateurs sont les meilleures candidates pour des photos supplémentaires si tu veux éviter la répétition visuelle entre pages (même critère : **même fichier image**, pas le nom seul).',
  );
  lines.push('');

  process.stdout.write(lines.join('\n') + '\n');
}

main();
