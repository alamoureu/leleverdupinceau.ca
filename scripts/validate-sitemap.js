/**
 * SITEMAP VALIDATION SCRIPT
 *
 * Validates sitemap-test.xml for:
 * 1. XML syntax errors
 * 2. Required sitemap structure
 * 3. Valid URLs
 * 4. Proper formatting
 *
 * Usage: node scripts/validate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m',
};

console.log(`${colors.cyan}${colors.bold}`);
console.log(
  `╔═══════════════════════════════════════════════════════════════════════╗`
);
console.log(
  `║                                                                       ║`
);
console.log(
  `║                    SITEMAP VALIDATION                                 ║`
);
console.log(
  `║                                                                       ║`
);
console.log(
  `╚═══════════════════════════════════════════════════════════════════════╝`
);
console.log(`${colors.reset}\n`);

let errors = [];
let warnings = [];

try {
  const sitemapPath = path.join(__dirname, '../public/sitemap-test.xml');
  const content = fs.readFileSync(sitemapPath, 'utf-8');

  console.log(
    `${colors.yellow}⚙️  Validating sitemap-test.xml...${colors.reset}\n`
  );

  // Check 1: XML Declaration
  if (!content.includes('<?xml version="1.0" encoding="UTF-8"?>')) {
    errors.push('Missing XML declaration');
  } else {
    console.log(`${colors.green}✓ XML declaration present${colors.reset}`);
  }

  // Check 2: Root element
  if (!content.includes('<urlset')) {
    errors.push('Missing <urlset> root element');
  } else {
    console.log(
      `${colors.green}✓ Root <urlset> element present${colors.reset}`
    );
  }

  // Check 3: Namespace
  if (
    !content.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')
  ) {
    warnings.push('Missing or incorrect namespace declaration');
  } else {
    console.log(
      `${colors.green}✓ Namespace declaration correct${colors.reset}`
    );
  }

  // Check 4: Closing tag
  if (!content.includes('</urlset>')) {
    errors.push('Missing closing </urlset> tag');
  } else {
    console.log(`${colors.green}✓ Closing tag present${colors.reset}`);
  }

  // Check 5: Count URLs
  const urlMatches = content.match(/<url>/g);
  const urlCount = urlMatches ? urlMatches.length : 0;
  const locMatches = content.match(/<loc>/g);
  const locCount = locMatches ? locMatches.length : 0;

  if (urlCount !== locCount) {
    errors.push(`Mismatch: ${urlCount} <url> tags but ${locCount} <loc> tags`);
  } else {
    console.log(
      `${colors.green}✓ URL count matches: ${urlCount} URLs${colors.reset}`
    );
  }

  // Check 6: Validate URL structure
  const urlPattern = /<url>\s*<loc>(.*?)<\/loc>/g;
  const urls = [];
  let match;

  while ((match = urlPattern.exec(content)) !== null) {
    const url = match[1].trim();
    urls.push(url);

    // Validate URL format
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      errors.push(`Invalid URL format: ${url}`);
    }

    // Check for special characters
    if (url.includes('&') && !url.includes('&amp;')) {
      errors.push(`Unescaped ampersand in URL: ${url}`);
    }
  }

  // Check 7: Check for duplicate URLs
  const uniqueUrls = new Set(urls);
  if (urls.length !== uniqueUrls.size) {
    const duplicates = urls.filter((url, index) => urls.indexOf(url) !== index);
    errors.push(`Duplicate URLs found: ${[...new Set(duplicates)].join(', ')}`);
  } else {
    console.log(`${colors.green}✓ No duplicate URLs${colors.reset}`);
  }

  // Check 8: Validate changefreq values
  const validChangefreqs = [
    'always',
    'hourly',
    'daily',
    'weekly',
    'monthly',
    'yearly',
    'never',
  ];
  const changefreqPattern = /<changefreq>(.*?)<\/changefreq>/g;
  while ((match = changefreqPattern.exec(content)) !== null) {
    const freq = match[1].trim().toLowerCase();
    if (!validChangefreqs.includes(freq)) {
      warnings.push(`Invalid changefreq value: ${freq}`);
    }
  }

  // Check 9: Validate priority values
  const priorityPattern = /<priority>(.*?)<\/priority>/g;
  while ((match = priorityPattern.exec(content)) !== null) {
    const priority = parseFloat(match[1].trim());
    if (isNaN(priority) || priority < 0 || priority > 1) {
      errors.push(
        `Invalid priority value: ${match[1].trim()} (must be between 0.0 and 1.0)`
      );
    }
  }

  // Check 10: Check for unclosed tags
  const openUrlTags = (content.match(/<url>/g) || []).length;
  const closeUrlTags = (content.match(/<\/url>/g) || []).length;
  if (openUrlTags !== closeUrlTags) {
    errors.push(
      `Unclosed <url> tags: ${openUrlTags} open, ${closeUrlTags} closed`
    );
  }

  // Final Report
  console.log(
    `\n${colors.cyan}${colors.bold}═══════════════════════════════════════════════════════════════${colors.reset}`
  );
  console.log(
    `${colors.cyan}${colors.bold}                    VALIDATION SUMMARY${colors.reset}`
  );
  console.log(
    `${colors.cyan}${colors.bold}═══════════════════════════════════════════════════════════════${colors.reset}\n`
  );

  console.log(`${colors.bold}Statistics:${colors.reset}`);
  console.log(`  Total URLs: ${colors.cyan}${urlCount}${colors.reset}`);
  console.log(`  Unique URLs: ${colors.cyan}${uniqueUrls.size}${colors.reset}`);
  console.log(`  Errors: ${colors.red}${errors.length}${colors.reset}`);
  console.log(
    `  Warnings: ${colors.yellow}${warnings.length}${colors.reset}\n`
  );

  if (errors.length > 0) {
    console.log(`${colors.red}${colors.bold}Errors:${colors.reset}`);
    errors.forEach((error) => {
      console.log(`${colors.red}  ✗ ${error}${colors.reset}`);
    });
    console.log('');
  }

  if (warnings.length > 0) {
    console.log(`${colors.yellow}${colors.bold}Warnings:${colors.reset}`);
    warnings.forEach((warning) => {
      console.log(`${colors.yellow}  ⚠ ${warning}${colors.reset}`);
    });
    console.log('');
  }

  if (errors.length === 0 && warnings.length === 0) {
    console.log(
      `${colors.green}${colors.bold}╔═══════════════════════════════════════════════════════════════╗${colors.reset}`
    );
    console.log(
      `${colors.green}${colors.bold}║                                                               ║${colors.reset}`
    );
    console.log(
      `${colors.green}${colors.bold}║         ✓ SITEMAP IS VALID - NO ERRORS FOUND                 ║${colors.reset}`
    );
    console.log(
      `${colors.green}${colors.bold}║                                                               ║${colors.reset}`
    );
    console.log(
      `${colors.green}${colors.bold}╚═══════════════════════════════════════════════════════════════╝${colors.reset}\n`
    );
    process.exit(0);
  } else if (errors.length === 0) {
    console.log(
      `${colors.yellow}${colors.bold}╔═══════════════════════════════════════════════════════════════╗${colors.reset}`
    );
    console.log(
      `${colors.yellow}${colors.bold}║                    ⚠ WARNINGS FOUND                           ║${colors.reset}`
    );
    console.log(
      `${colors.yellow}${colors.bold}╚═══════════════════════════════════════════════════════════════╝${colors.reset}\n`
    );
    process.exit(0);
  } else {
    console.log(
      `${colors.red}${colors.bold}╔═══════════════════════════════════════════════════════════════╗${colors.reset}`
    );
    console.log(
      `${colors.red}${colors.bold}║                    ✗ VALIDATION FAILED                         ║${colors.reset}`
    );
    console.log(
      `${colors.red}${colors.bold}╚═══════════════════════════════════════════════════════════════╝${colors.reset}\n`
    );
    process.exit(1);
  }
} catch (error) {
  console.log(
    `${colors.red}${colors.bold}╔═══════════════════════════════════════════════════════════════╗${colors.reset}`
  );
  console.log(
    `${colors.red}${colors.bold}║                    ✗ VALIDATION ERROR                          ║${colors.reset}`
  );
  console.log(
    `${colors.red}${colors.bold}╚═══════════════════════════════════════════════════════════════╝${colors.reset}\n`
  );
  console.log(`${colors.red}Error: ${error.message}${colors.reset}\n`);
  process.exit(1);
}
