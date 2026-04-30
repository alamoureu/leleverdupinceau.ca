#!/usr/bin/env node
/**
 * Open All Pages for Image Audit
 *
 * Use this to open every public page so you can check that images match and make sense.
 *
 * Usage:
 *   npm run audit:pages          → Generate checklist HTML and open it in browser
 *   npm run audit:pages -- --tabs → Open every page in a new browser tab
 *
 * Make sure the dev server is running (npm start) before opening pages.
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const BASE_URL = process.env.BASE_URL || 'http://localhost:5173';
const DELAY_MS = 400;
const CHECKLIST_PATH = path.join(__dirname, '..', 'image-audit-checklist.html');

// Canonical public pages (aligné avec src/lelever-next/data/auditPages.js)
const PAGES = [
  ['/', 'Accueil'],
  ['/contact', 'Contact'],
  ['/a-propos', 'À propos'],
  ['/peintre-professionnel', 'Peintre professionnel'],
  ['/avis-clients', 'Avis clients'],
  ['/realisations', 'Réalisations'],
  ['/secteurs', 'Secteurs desservis'],
  ['/secteurs/montreal', 'Secteurs – Montréal'],
  ['/secteurs/laval', 'Secteurs – Laval'],
  ['/secteurs/longueuil', 'Secteurs – Longueuil'],
  ['/secteurs/gatineau', 'Secteurs – Gatineau'],
  ['/secteurs/rive-sud', 'Secteurs – Rive-Sud'],
  ['/services', 'Services'],
  ['/services/peinture-commerciale', 'Service – Peinture commerciale'],
  ['/services/peinture-residentielle', 'Service – Peinture résidentielle'],
  ['/services/peinture-interieure', 'Service – Peinture intérieure'],
  ['/services/peinture-exterieure', 'Service – Peinture extérieure'],
  ['/services/peinture-industrielle', 'Service – Peinture industrielle'],
  ['/services/peinture-residentielle/maison', 'L3 – Maison'],
  ['/services/peinture-residentielle/condo', 'L3 – Condo'],
  ['/services/peinture-residentielle/appartement', 'L3 – Appartement'],
  ['/services/peinture-interieure/armoires-de-cuisine', 'L3 – Armoires de cuisine'],
  ['/services/teinture-exterieure', 'Spécialisé – Teinture extérieure'],
  ['/services/preparation-de-surfaces', 'Spécialisé – Préparation de surfaces'],
  ['/services/peinture-au-pistolet', 'Spécialisé – Peinture au pistolet'],
  ['/services/reparation-de-platre-et-gypse', 'Spécialisé – Réparation plâtre et gypse'],
  ['/services/peinture-apres-sinistre', 'Spécialisé – Peinture après sinistre'],
  ['/peinture-interieure-montreal', 'Hub – Peinture intérieure Montréal'],
  ['/peinture-exterieure-montreal', 'Hub – Peinture extérieure Montréal'],
  ['/blog', 'Blog'],
  ['/blog/comment-choisir-un-peintre-professionnel', 'Blog – Comment choisir un peintre'],
  ['/blog/prix-peinture-montreal', 'Blog – Prix peinture Montréal'],
  ['/blog/erreurs-a-eviter-peinture-interieure', 'Blog – Erreurs à éviter'],
  ['/politique-de-confidentialite', 'Politique de confidentialité'],
  ['/mentions-legales', 'Mentions légales'],
];

function openInBrowser(urlOrPath, isLocalFile = false) {
  const target = isLocalFile ? path.resolve(urlOrPath) : BASE_URL + urlOrPath;
  const command =
    process.platform === 'win32'
      ? `start "" "${target}"`
      : process.platform === 'darwin'
        ? `open "${target}"`
        : `xdg-open "${target}"`;
  exec(command, (err) => {
    if (err) console.error('Error opening:', err.message);
  });
}

function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function generateChecklistHtml() {
  const storageKey = 'lelever-image-audit';
  const notesKey = 'lelever-image-audit-notes';
  const rows = PAGES.map(([pathName, label], i) => {
    const id = `page-${i}`;
    const url = BASE_URL + pathName;
    const noteId = `note-${i}`;
    return `
    <tr data-path="${pathName}">
      <td class="num">${i + 1}</td>
      <td class="label">${label}</td>
      <td class="path"><code>${pathName}</code></td>
      <td class="open"><a href="${url}" target="_blank" rel="noopener">Ouvrir ↗</a></td>
      <td class="check"><label><input type="checkbox" id="${id}" data-path="${pathName}"> Images OK</label></td>
      <td class="notes"><textarea id="${noteId}" data-path="${pathName}" placeholder="Commentaire..." class="notes-input" rows="3"></textarea></td>
    </tr>`;
  }).join('');

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Image audit – Le Lever du Pinceau</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; max-width: 1100px; margin: 0 auto; padding: 1.5rem; background: #f5f5f5; }
    h1 { margin: 0 0 0.5rem; font-size: 1.5rem; }
    .info { background: #e3f2fd; padding: 0.75rem 1rem; border-radius: 8px; margin-bottom: 1.5rem; font-size: 0.9rem; }
    .info strong { display: block; margin-bottom: 0.25rem; }
    .progress { margin-bottom: 1rem; font-size: 0.9rem; color: #555; }
    table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
    th, td { padding: 0.5rem 0.75rem; text-align: left; border-bottom: 1px solid #eee; }
    th { background: #333; color: #fff; font-weight: 600; }
    td.num { width: 2.5rem; color: #666; }
    td.path code { font-size: 0.8rem; background: #f0f0f0; padding: 0.2rem 0.4rem; border-radius: 4px; }
    td.open a { color: #1976d2; text-decoration: none; }
    td.open a:hover { text-decoration: underline; }
    tr.checked td { background: #e8f5e9; }
    tr.checked td.check { color: #2e7d32; }
    td.notes { min-width: 220px; }
    .notes-input { width: 100%; min-width: 200px; max-width: 280px; min-height: 72px; padding: 0.5rem 0.6rem; font-size: 0.9rem; border: 1px solid #ddd; border-radius: 6px; resize: vertical; font-family: inherit; }
    .notes-input:focus { outline: none; border-color: #1976d2; }
  </style>
</head>
<body>
  <h1>🖼️ Audit des images – toutes les pages</h1>
  <div class="info">
    <strong>Avant de commencer</strong>
    Assurez-vous que le serveur de dev tourne (<code>npm start</code>). Les liens pointent vers <code>${BASE_URL}</code>.
    Cliquez sur « Ouvrir » pour chaque page, vérifiez que les images correspondent et ont du sens, cochez « Images OK » et ajoutez un commentaire si besoin. Progression et commentaires sont enregistrés dans ce navigateur.
  </div>
  <div class="progress" id="progress">Progression: <span id="done">0</span> / ${PAGES.length} cochées</div>
  <table>
    <thead><tr><th>#</th><th>Page</th><th>URL</th><th></th><th>Images OK</th><th>Commentaire</th></tr></thead>
    <tbody>${rows}</tbody>
  </table>
  <script>
    (function() {
      var key = '${storageKey}';
      var notesKey = '${notesKey}';
      var checkboxes = document.querySelectorAll('tbody input[type="checkbox"]');
      var noteInputs = document.querySelectorAll('tbody textarea.notes-input');
      function load() {
        try {
          var saved = JSON.parse(localStorage.getItem(key) || '{}');
          checkboxes.forEach(function(cb) {
            cb.checked = !!saved[cb.dataset.path];
            cb.closest('tr').classList.toggle('checked', cb.checked);
          });
          var savedNotes = JSON.parse(localStorage.getItem(notesKey) || '{}');
          noteInputs.forEach(function(inp) {
            inp.value = savedNotes[inp.dataset.path] || '';
          });
        } catch (e) {}
        updateProgress();
      }
      function save() {
        var o = {};
        checkboxes.forEach(function(cb) { o[cb.dataset.path] = cb.checked; });
        localStorage.setItem(key, JSON.stringify(o));
        updateProgress();
      }
      function saveNotes() {
        var o = {};
        noteInputs.forEach(function(inp) { o[inp.dataset.path] = inp.value; });
        localStorage.setItem(notesKey, JSON.stringify(o));
      }
      function updateProgress() {
        var n = 0;
        checkboxes.forEach(function(cb) { if (cb.checked) n++; });
        document.getElementById('done').textContent = n;
        checkboxes.forEach(function(cb) {
          cb.closest('tr').classList.toggle('checked', cb.checked);
        });
      }
      checkboxes.forEach(function(cb) {
        cb.addEventListener('change', function() { save(); });
      });
      noteInputs.forEach(function(inp) {
        inp.addEventListener('input', function() { saveNotes(); });
        inp.addEventListener('change', function() { saveNotes(); });
      });
      load();
    })();
  </script>
</body>
</html>`;
}

async function runTabs() {
  console.log('\n🖼️  Ouverture de toutes les pages dans des onglets\n');
  console.log('Base URL:', BASE_URL);
  console.log('Pages:', PAGES.length);
  console.log('Délai entre onglets:', DELAY_MS + ' ms\n');

  for (let i = 0; i < PAGES.length; i++) {
    const [pathName, label] = PAGES[i];
    console.log(`  ${i + 1}/${PAGES.length} – ${pathName}`);
    openInBrowser(pathName);
    if (i < PAGES.length - 1) await delay(DELAY_MS);
  }

  console.log('\n✅ Tous les onglets ont été ouverts. Vérifiez les images sur chaque page.\n');
}

function runChecklist() {
  const html = generateChecklistHtml();
  fs.writeFileSync(CHECKLIST_PATH, html, 'utf8');
  console.log('\n🖼️  Checklist d’audit des images générée:\n');
  console.log('  Fichier:', CHECKLIST_PATH);
  console.log('  Pages:', PAGES.length);
  console.log('\nOuverture dans le navigateur…\n');
  openInBrowser(CHECKLIST_PATH, true);
  console.log('✅ Ouvrez la checklist, cliquez sur « Ouvrir » pour chaque page et cochez « Images OK » après vérification.\n');
}

// CLI
const useTabs = process.argv.includes('--tabs') || process.argv.includes('-t');

if (useTabs) {
  runTabs();
} else {
  runChecklist();
}
