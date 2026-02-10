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

// All public pages: [ path, short label for checklist ]
const PAGES = [
  // Main
  ['/', 'Accueil'],
  ['/contact', 'Contact'],
  ['/a-propos', 'À propos'],
  ['/peintre-professionnel', 'Peintre professionnel'],
  ['/avis', 'Avis clients'],
  ['/secteurs-desservis', 'Secteurs desservis'],
  ['/services', 'Services'],
  ['/blog', 'Blog'],
  ['/politiques/confidentialite', 'Politique de confidentialité'],
  ['/politiques/termes-conditions', 'Termes et conditions'],
  // Cities
  ['/secteurs-desservis/brossard', 'Secteurs – Brossard'],
  ['/secteurs-desservis/montreal', 'Secteurs – Montréal'],
  ['/secteurs-desservis/laval', 'Secteurs – Laval'],
  ['/secteurs-desservis/longueuil', 'Secteurs – Longueuil'],
  // Main services
  ['/services/peinture-commerciale', 'Service – Peinture commerciale'],
  ['/services/peinture-residentielle', 'Service – Peinture résidentielle'],
  ['/services/peinture-interieure', 'Service – Peinture intérieure'],
  ['/services/peinture-exterieure', 'Service – Peinture extérieure'],
  ['/services/peinture-industrielle', 'Service – Peinture industrielle'],
  // Sub-services
  ['/services/peinture-commerciale/interieure', 'Sous-service – Commerciale intérieure'],
  ['/services/peinture-commerciale/exterieure', 'Sous-service – Commerciale extérieure'],
  ['/services/peinture-residentielle/interieure', 'Sous-service – Résidentielle intérieure'],
  ['/services/peinture-residentielle/exterieure', 'Sous-service – Résidentielle extérieure'],
  // Service × City (20)
  ['/services/peinture-commerciale/montreal', 'Commerciale – Montréal'],
  ['/services/peinture-commerciale/laval', 'Commerciale – Laval'],
  ['/services/peinture-commerciale/longueuil', 'Commerciale – Longueuil'],
  ['/services/peinture-commerciale/brossard', 'Commerciale – Brossard'],
  ['/services/peinture-residentielle/montreal', 'Résidentielle – Montréal'],
  ['/services/peinture-residentielle/laval', 'Résidentielle – Laval'],
  ['/services/peinture-residentielle/longueuil', 'Résidentielle – Longueuil'],
  ['/services/peinture-residentielle/brossard', 'Résidentielle – Brossard'],
  ['/services/peinture-interieure/montreal', 'Intérieure – Montréal'],
  ['/services/peinture-interieure/laval', 'Intérieure – Laval'],
  ['/services/peinture-interieure/longueuil', 'Intérieure – Longueuil'],
  ['/services/peinture-interieure/brossard', 'Intérieure – Brossard'],
  ['/services/peinture-exterieure/montreal', 'Extérieure – Montréal'],
  ['/services/peinture-exterieure/laval', 'Extérieure – Laval'],
  ['/services/peinture-exterieure/longueuil', 'Extérieure – Longueuil'],
  ['/services/peinture-exterieure/brossard', 'Extérieure – Brossard'],
  ['/services/peinture-industrielle/montreal', 'Industrielle – Montréal'],
  ['/services/peinture-industrielle/laval', 'Industrielle – Laval'],
  ['/services/peinture-industrielle/longueuil', 'Industrielle – Longueuil'],
  ['/services/peinture-industrielle/brossard', 'Industrielle – Brossard'],
  // Sous-service × City (16)
  ['/services/peinture-commerciale/interieure/montreal', 'Comm. int. – Montréal'],
  ['/services/peinture-commerciale/interieure/laval', 'Comm. int. – Laval'],
  ['/services/peinture-commerciale/interieure/longueuil', 'Comm. int. – Longueuil'],
  ['/services/peinture-commerciale/interieure/brossard', 'Comm. int. – Brossard'],
  ['/services/peinture-commerciale/exterieure/montreal', 'Comm. ext. – Montréal'],
  ['/services/peinture-commerciale/exterieure/laval', 'Comm. ext. – Laval'],
  ['/services/peinture-commerciale/exterieure/longueuil', 'Comm. ext. – Longueuil'],
  ['/services/peinture-commerciale/exterieure/brossard', 'Comm. ext. – Brossard'],
  ['/services/peinture-residentielle/interieure/montreal', 'Rés. int. – Montréal'],
  ['/services/peinture-residentielle/interieure/laval', 'Rés. int. – Laval'],
  ['/services/peinture-residentielle/interieure/longueuil', 'Rés. int. – Longueuil'],
  ['/services/peinture-residentielle/interieure/brossard', 'Rés. int. – Brossard'],
  ['/services/peinture-residentielle/exterieure/montreal', 'Rés. ext. – Montréal'],
  ['/services/peinture-residentielle/exterieure/laval', 'Rés. ext. – Laval'],
  ['/services/peinture-residentielle/exterieure/longueuil', 'Rés. ext. – Longueuil'],
  ['/services/peinture-residentielle/exterieure/brossard', 'Rés. ext. – Brossard'],
  // Service × Montréal quartiers (23)
  ['/services/peinture-interieure/montreal/ahuntsic', 'Int. Montréal – Ahuntsic'],
  ['/services/peinture-interieure/montreal/bois-franc', 'Int. Montréal – Bois-Franc'],
  ['/services/peinture-interieure/montreal/centre-ville', 'Int. Montréal – Centre-ville'],
  ['/services/peinture-interieure/montreal/cote-des-neiges', 'Int. Montréal – Côte-des-Neiges'],
  ['/services/peinture-interieure/montreal/griffintown', 'Int. Montréal – Griffintown'],
  ['/services/peinture-interieure/montreal/hochelaga', 'Int. Montréal – Hochelaga'],
  ['/services/peinture-interieure/montreal/ile-des-soeurs', 'Int. Montréal – Île-des-Sœurs'],
  ['/services/peinture-interieure/montreal/lachine', 'Int. Montréal – Lachine'],
  ['/services/peinture-interieure/montreal/lasalle', 'Int. Montréal – LaSalle'],
  ['/services/peinture-interieure/montreal/le-village', 'Int. Montréal – Le Village'],
  ['/services/peinture-interieure/montreal/mile-end', 'Int. Montréal – Mile End'],
  ['/services/peinture-interieure/montreal/notre-dame-de-grace', 'Int. Montréal – NDG'],
  ['/services/peinture-interieure/montreal/outremont', 'Int. Montréal – Outremont'],
  ['/services/peinture-interieure/montreal/plateau-mont-royal', 'Int. Montréal – Plateau'],
  ['/services/peinture-interieure/montreal/pointe-saint-charles', 'Int. Montréal – Pointe-Saint-Charles'],
  ['/services/peinture-interieure/montreal/rosemont-petite-patrie', 'Int. Montréal – Rosemont'],
  ['/services/peinture-interieure/montreal/saint-henri', 'Int. Montréal – Saint-Henri'],
  ['/services/peinture-interieure/montreal/saint-leonard', 'Int. Montréal – Saint-Léonard'],
  ['/services/peinture-interieure/montreal/verdun', 'Int. Montréal – Verdun'],
  ['/services/peinture-interieure/montreal/ville-mont-royal', 'Int. Montréal – Ville Mont-Royal'],
  ['/services/peinture-interieure/montreal/villeray', 'Int. Montréal – Villeray'],
  ['/services/peinture-interieure/montreal/ville-saint-laurent', 'Int. Montréal – Ville Saint-Laurent'],
  ['/services/peinture-interieure/montreal/westmount', 'Int. Montréal – Westmount'],
  // Blog
  ['/blog/comment-choisir-un-peintre-professionnel', 'Blog – Comment choisir un peintre'],
  ['/blog/prix-peinture-montreal', 'Blog – Prix peinture Montréal'],
  ['/blog/erreurs-a-eviter-peinture-interieure', 'Blog – Erreurs à éviter'],
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
