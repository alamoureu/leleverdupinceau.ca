/**
 * SITEMAP UPDATE SCRIPT
 *
 * Updates sitemap-test.xml:
 * 1. Removes /new-home/* routes (unless final canonical)
 * 2. Keeps only canonical Contact and About URLs
 * 3. Adds <lastmod> tags to all URLs
 */

const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, '../public/sitemap-test.xml');
let content = fs.readFileSync(sitemapPath, 'utf-8');

// Get current date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0];

console.log('Updating sitemap-test.xml...\n');

// 1. Remove /new-home/contact and /new-home/a-propos
console.log('1. Removing /new-home/contact and /new-home/a-propos...');
content = content.replace(
  /<url>\s*<loc>https:\/\/www\.leleverdupinceau\.ca\/new-home\/contact<\/loc>[\s\S]*?<\/url>\s*/g,
  ''
);
content = content.replace(
  /<url>\s*<loc>https:\/\/www\.leleverdupinceau\.ca\/new-home\/a-propos<\/loc>[\s\S]*?<\/url>\s*/g,
  ''
);

// 2. Remove /new-contact (keep /contact as canonical)
console.log('2. Removing /new-contact (keeping /contact as canonical)...');
content = content.replace(
  /<url>\s*<loc>https:\/\/www\.leleverdupinceau\.ca\/new-contact<\/loc>[\s\S]*?<\/url>\s*/g,
  ''
);

// 3. Add <lastmod> to all URLs
console.log('3. Adding <lastmod> tags to all URLs...');
content = content.replace(
  /(<url>\s*<loc>.*?<\/loc>\s*<changefreq>.*?<\/changefreq>\s*<priority>.*?<\/priority>)(\s*<\/url>)/g,
  `$1\n    <lastmod>${today}</lastmod>$2`
);

// Clean up extra blank lines
content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

fs.writeFileSync(sitemapPath, content, 'utf-8');

console.log('\n✓ Sitemap updated successfully!');
console.log(`  - Removed /new-home/contact`);
console.log(`  - Removed /new-home/a-propos`);
console.log(`  - Removed /new-contact`);
console.log(`  - Added <lastmod>${today}</lastmod> to all URLs`);
