/**
 * Page HTML : toutes les images trouvées par l'audit (imports ESM),
 * rendues en <img> pour vérification visuelle.
 *
 * Sortie : public/image-audit-preview.html (copié dans dist par Vite ; les <img> utilisent des URLs racine /src/...).
 *
 * Usage: node scripts/generate-image-audit-html.js
 */

const fs = require('fs');
const path = require('path');
const { scanImageImports } = require('./lib/image-import-scan');

const REPO_ROOT = path.join(__dirname, '..');
const OUT = path.join(REPO_ROOT, 'public', 'image-audit-preview.html');

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function main() {
  const { byAsset, missing } = scanImageImports(REPO_ROOT);
  const sorted = [...byAsset.entries()].sort((a, b) => a[0].localeCompare(b[0]));

  const cards = sorted.map(([canonical, importers]) => {
    const exists = fs.existsSync(path.join(REPO_ROOT, canonical));
    const n = importers.size;
    const files = [...importers].sort().map((f) => `<li><code>${esc(f)}</code></li>`).join('');
    const miss = !exists || missing.has(canonical);
    const imgUrl = `/${canonical.split('/').filter(Boolean).map(encodeURIComponent).join('/')}`;
    const imgTag = exists
      ? `<img src="${esc(imgUrl)}" alt="${esc(path.basename(canonical))}" loading="lazy" width="400" />`
      : `<div class="missing">Fichier absent sur disque</div>`;

    const shared = n >= 2;
    return `
<section class="card${shared ? ' card-shared' : ''}" data-missing="${miss ? '1' : '0'}" data-importers="${n}">
  <div class="thumb">${imgTag}</div>
  <div class="meta">
    <p class="count">${n} importateur(s) de code</p>
    <p class="count-note">${shared ? 'Même fichier image réutilisé dans plusieurs modules (normal pour hub / accueil ; à diversifier si crédibilité).' : 'Un seul module importe ce fichier.'}</p>
    <p class="path"><code>${esc(canonical)}</code></p>
    <ul class="files">${files}</ul>
  </div>
</section>`;
  });

  const html = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Audit visuel des images - Le Lever du Pinceau</title>
  <style>
    :root { font-family: system-ui, sans-serif; color: #1a1a1a; background: #f4f4f5; }
    body { margin: 0; padding: 1rem 1.5rem 3rem; max-width: 1400px; margin-inline: auto; }
    h1 { font-size: 1.5rem; margin-bottom: 0.5rem; }
    .lead { color: #444; line-height: 1.5; margin-bottom: 1.5rem; max-width: 80ch; }
    .toolbar { display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center; margin-bottom: 1.25rem; }
    .toolbar label { display: flex; align-items: center; gap: 0.35rem; cursor: pointer; font-size: 0.9rem; }
    .stats { font-size: 0.9rem; color: #555; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 1rem; }
    .card { background: #fff; border: 1px solid #ddd; border-radius: 10px; overflow: hidden; display: flex; flex-direction: column; }
    .card[data-missing="1"] { border-color: #c0392b; background: #fdf2f2; }
    .thumb { background: #e8e8ea; min-height: 200px; display: flex; align-items: center; justify-content: center; padding: 0.5rem; }
    .thumb img { max-width: 100%; max-height: 220px; width: auto; height: auto; object-fit: contain; }
    .missing { color: #c0392b; font-weight: 600; padding: 1rem; text-align: center; }
    .meta { padding: 0.75rem 1rem 1rem; font-size: 0.8rem; flex: 1; }
    .count { font-weight: 700; margin: 0 0 0.25rem; color: #0a5; }
    .count-note { font-size: 0.75rem; color: #666; margin: 0 0 0.5rem; line-height: 1.35; }
    .card-shared { border-left: 4px solid #e67e22; }
    .card-shared .count { color: #b45309; }
    .card[data-missing="1"] .count { color: #c0392b; }
    .path { margin: 0 0 0.5rem; word-break: break-all; }
    .path code { font-size: 0.72rem; }
    ul.files { margin: 0; padding-left: 1.1rem; max-height: 120px; overflow-y: auto; }
    ul.files li { margin: 0.15rem 0; }
    ul.files code { font-size: 0.68rem; }
  </style>
</head>
<body>
  <h1>Audit visuel des images (imports statiques)</h1>
  <p class="lead">
    <strong>Lecture :</strong> « N importateur(s) de code » = <strong>N fichiers .jsx/.js</strong> qui contiennent un <code>import … from '…'</code> vers <strong>cette même image</strong> sur le disque.
    Ce n'est pas « N copies du fichier », ni une erreur de build : c'est la <strong>réutilisation volontaire</strong> du même asset (souvent accueil + hub + pages Avis/Blog/Services, ou <code>*Data.js</code> + page ville).
    Pour les mêmes <strong>octets</strong> sous deux chemins différents, utiliser <code>npm run audit:image-byte-dupes</code>.
    <br /><br />
    <strong>Où l'ouvrir :</strong> en dev, <code>http://localhost:5173/image-audit-preview.html</code> (après <code>npm start</code>). Après build ou sur le site : <code>/image-audit-preview.html</code>. Les vignettes pointent vers <code>/src/lelever-next/images/...</code> (dossier copié dans <code>dist</code> au build).
    Régénération : <code>npm run audit:image-html</code> ou <code>node scripts/generate-image-audit-html.js</code>.
  </p>
  <div class="toolbar">
    <label><input type="checkbox" id="hideOk" /> Masquer les images sans sujet (1 importateur, fichier présent)</label>
    <span class="stats">${sorted.length} images · généré le ${new Date().toISOString().replace('T', ' ').slice(0, 19)} UTC (relancer après tout changement d'import)</span>
  </div>
  <div class="grid" id="grid">
    ${cards.join('\n')}
  </div>
  <script>
    (function () {
      var cb = document.getElementById('hideOk');
      var grid = document.getElementById('grid');
      if (!cb || !grid) return;
      function apply() {
        var on = cb.checked;
        grid.querySelectorAll('.card').forEach(function (el) {
          var isMissing = el.getAttribute('data-missing') === '1';
          var count = parseInt(el.getAttribute('data-importers'), 10) || 0;
          var multi = count > 1;
          var show = !on || isMissing || multi;
          el.style.display = show ? '' : 'none';
        });
      }
      cb.addEventListener('change', apply);
    })();
  </script>
</body>
</html>`;

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, html, 'utf8');
  process.stdout.write(`Écrit : ${path.relative(REPO_ROOT, OUT)}\n`);
}

main();
