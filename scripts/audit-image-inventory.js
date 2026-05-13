/**
 * Inventaire complet : chaque image (import ESM résolu) et la liste des fichiers qui l’importent.
 * Écrit docs/IMAGE_INVENTORY.md
 *
 * Usage: node scripts/audit-image-inventory.js
 */

const fs = require('fs');
const path = require('path');
const { scanImageImports } = require('./lib/image-import-scan');

const REPO_ROOT = path.join(__dirname, '..');
const OUT = path.join(REPO_ROOT, 'docs', 'IMAGE_INVENTORY.md');

function main() {
  const { byAsset, missing } = scanImageImports(REPO_ROOT);
  const sorted = [...byAsset.entries()].sort((a, b) => a[0].localeCompare(b[0]));

  const allImporterFiles = new Set();
  for (const s of byAsset.values()) {
    for (const f of s) allImporterFiles.add(f);
  }

  const lines = [];
  lines.push('# Inventaire des images (imports statiques)');
  lines.push('');
  lines.push(
    'Vue d’ensemble **une ligne par fichier image** référencé par un `import ... from \'...\'` sous `src/`, avec tous les fichiers sources qui importent ce chemin (après résolution des `../`).',
  );
  lines.push('');
  lines.push(
    '- **Doublons (réutilisation)** : voir aussi [`IMAGE_DUPLICATES.md`](./IMAGE_DUPLICATES.md) (tableau trié par nombre d’importeurs).',
  );
  lines.push(
    '- **Régénérer ce fichier** : `npm run audit:image-inventory` à la racine du repo.',
  );
  lines.push('');
  lines.push(`**Généré le :** ${new Date().toISOString().slice(0, 10)}`);
  lines.push('');
  lines.push(
    `**Totaux :** \`${sorted.length}\` chemins d’images distincts ; \`${allImporterFiles.size}\` fichiers \`.js/.jsx\` sous \`src/\` contiennent au moins un import d’image.`,
  );
  lines.push('');
  lines.push(
    "**Limites :** comme l’audit doublons (pas les `src={...}` dynamiques, pas les URLs externes, pas les iframes).",
  );
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## Tableau complet (tri A-Z par chemin)');
  lines.push('');
  lines.push('| Nb | Chemin canonique (depuis la racine du repo) | Fichiers qui importent |');
  lines.push('|---:|---|---|');

  for (const [canonical, importers] of sorted) {
    const n = importers.size;
    const tag = missing.has(canonical) ? ' **(manquant sur disque)**' : '';
    const list = [...importers].sort().join('<br>');
    lines.push(`| ${n} | \`${canonical}\`${tag} | ${list} |`);
  }

  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## Résumé par dossier racine `src/lelever-next/images/`');
  lines.push('');
  lines.push('| Dossier (1er segment après images/) | Nb de fichiers image distincts |');
  lines.push('|---|---:|');

  const byFolder = new Map();
  const prefix = 'src/lelever-next/images/';
  for (const [canonical] of sorted) {
    if (!canonical.startsWith(prefix)) continue;
    const rest = canonical.slice(prefix.length);
    const seg = rest.split('/')[0] || '(racine images)';
    byFolder.set(seg, (byFolder.get(seg) || 0) + 1);
  }
  const folderRows = [...byFolder.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  for (const [folder, count] of folderRows) {
    lines.push(`| \`${folder}\` | ${count} |`);
  }

  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## Imports pointant vers un fichier absent');
  lines.push('');
  if (missing.size === 0) {
    lines.push('*(Aucun.)*');
  } else {
    lines.push('| Chemin | Fichiers importeurs |');
    lines.push('|---|---|');
    for (const [canonical, importers] of [...missing.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
      lines.push(`| \`${canonical}\` | ${[...importers].sort().join('<br>')} |`);
    }
  }
  lines.push('');

  fs.writeFileSync(OUT, lines.join('\n'), 'utf8');
  process.stdout.write(`Écrit : ${path.relative(REPO_ROOT, OUT)} (${sorted.length} lignes dans le tableau)\n`);
}

main();
