/**
 * DEV MODE PROTECTION VERIFICATION
 *
 * Verifies that all dev pages are properly protected from indexing:
 * 1. Password protection is enabled
 * 2. robots.txt blocks dev routes
 * 3. All dev pages have noindex meta tags
 * 4. Sitemap doesn't include dev pages
 *
 * Usage: node scripts/verify-dev-protection.js
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
  `║              DEV MODE PROTECTION VERIFICATION                        ║`
);
console.log(
  `║                                                                       ║`
);
console.log(
  `╚═══════════════════════════════════════════════════════════════════════╝`
);
console.log(`${colors.reset}\n`);

let allPassed = true;

// Check 1: Password Protection
console.log(`${colors.cyan}CHECK 1: Password Protection${colors.reset}`);
try {
  const passwordFile = path.join(
    __dirname,
    '../src/lelever-next/components/PasswordProtectedPage.jsx'
  );
  const content = fs.readFileSync(passwordFile, 'utf-8');

  if (
    content.includes('useState(false)') ||
    content.includes('useState(true)')
  ) {
    const isEnabled = content.includes('useState(false)');
    if (isEnabled) {
      console.log(
        `${colors.green}  ✓ Password protection is ENABLED${colors.reset}`
      );
    } else {
      console.log(
        `${colors.red}  ✗ Password protection is DISABLED${colors.reset}`
      );
      allPassed = false;
    }
  } else {
    console.log(
      `${colors.yellow}  ⚠ Could not determine password protection status${colors.reset}`
    );
  }
} catch (error) {
  console.log(
    `${colors.red}  ✗ Error checking password protection: ${error.message}${colors.reset}`
  );
  allPassed = false;
}

// Check 2: robots.txt
console.log(`\n${colors.cyan}CHECK 2: robots.txt Blocking${colors.reset}`);
try {
  const robotsFile = path.join(__dirname, '../public/robots.txt');
  const content = fs.readFileSync(robotsFile, 'utf-8');

  const requiredBlocks = [
    'Disallow: /new-home',
    'Disallow: /services',
    'Disallow: /blog',
  ];

  let robotsPassed = true;
  requiredBlocks.forEach((block) => {
    if (content.includes(block)) {
      console.log(`${colors.green}  ✓ ${block}${colors.reset}`);
    } else {
      console.log(`${colors.red}  ✗ Missing: ${block}${colors.reset}`);
      robotsPassed = false;
      allPassed = false;
    }
  });

  if (robotsPassed) {
    console.log(
      `${colors.green}  ✓ All dev routes blocked in robots.txt${colors.reset}`
    );
  }
} catch (error) {
  console.log(
    `${colors.red}  ✗ Error checking robots.txt: ${error.message}${colors.reset}`
  );
  allPassed = false;
}

// Check 3: noindex Meta Tags
console.log(`\n${colors.cyan}CHECK 3: noindex Meta Tags${colors.reset}`);
try {
  const pagesDir = path.join(__dirname, '../src/lelever-next/pages');
  const pages = [
    'NewHomePage.jsx',
    'ServicesPage.jsx',
    'AboutPage.jsx',
    'ContactPage.jsx',
    'BlogPage.jsx',
    'AvisPage.jsx',
  ];

  let metaPassed = true;
  pages.forEach((page) => {
    const pagePath = path.join(pagesDir, page);
    if (fs.existsSync(pagePath)) {
      const content = fs.readFileSync(pagePath, 'utf-8');
      if (
        content.includes('noindex, nofollow') ||
        content.includes('noindex')
      ) {
        console.log(`${colors.green}  ✓ ${page} has noindex${colors.reset}`);
      } else {
        console.log(`${colors.red}  ✗ ${page} missing noindex${colors.reset}`);
        metaPassed = false;
        allPassed = false;
      }
    }
  });

  if (metaPassed) {
    console.log(
      `${colors.green}  ✓ All dev pages have noindex meta tags${colors.reset}`
    );
  }
} catch (error) {
  console.log(
    `${colors.red}  ✗ Error checking meta tags: ${error.message}${colors.reset}`
  );
  allPassed = false;
}

// Check 4: Sitemap Exclusion
console.log(`\n${colors.cyan}CHECK 4: Sitemap Exclusion${colors.reset}`);
try {
  const sitemapFile = path.join(__dirname, '../public/sitemap-test.xml');
  const content = fs.readFileSync(sitemapFile, 'utf-8');

  const devRoutesInSitemap = [];

  // Check for exact dev routes (not production routes that might match)
  if (content.includes('<loc>https://www.leleverdupinceau.ca/new-home</loc>')) {
    devRoutesInSitemap.push('/new-home');
  }
  if (
    content.includes(
      '<loc>https://www.leleverdupinceau.ca/peintre-professionnel</loc>'
    )
  ) {
    devRoutesInSitemap.push('/peintre-professionnel');
  }
  if (
    content.includes(
      '<loc>https://www.leleverdupinceau.ca/secteurs-desservis</loc>'
    )
  ) {
    devRoutesInSitemap.push('/secteurs-desservis');
  }
  // Check for /services (exact, not /services/peinture-exterieure)
  if (
    content.match(/<loc>https:\/\/www\.leleverdupinceau\.ca\/services<\/loc>/)
  ) {
    devRoutesInSitemap.push('/services');
  }
  if (content.includes('<loc>https://www.leleverdupinceau.ca/blog</loc>')) {
    devRoutesInSitemap.push('/blog');
  }
  if (content.includes('<loc>https://www.leleverdupinceau.ca/avis</loc>')) {
    devRoutesInSitemap.push('/avis');
  }
  if (
    content.includes('<loc>https://www.leleverdupinceau.ca/new-contact</loc>')
  ) {
    devRoutesInSitemap.push('/new-contact');
  }
  // Check for /a-propos (exact, not /a-propos-de-nous)
  if (
    content.match(/<loc>https:\/\/www\.leleverdupinceau\.ca\/a-propos<\/loc>/)
  ) {
    devRoutesInSitemap.push('/a-propos');
  }

  if (devRoutesInSitemap.length === 0) {
    console.log(
      `${colors.green}  ✓ No dev routes found in sitemap${colors.reset}`
    );
  } else {
    console.log(`${colors.red}  ✗ Dev routes found in sitemap:${colors.reset}`);
    devRoutesInSitemap.forEach((route) => {
      console.log(`${colors.red}    - ${route}${colors.reset}`);
    });
    allPassed = false;
  }
} catch (error) {
  console.log(
    `${colors.yellow}  ⚠ Could not check sitemap: ${error.message}${colors.reset}`
  );
}

// Final Summary
console.log(
  `\n${colors.cyan}${colors.bold}═══════════════════════════════════════════════════════════════${colors.reset}`
);
console.log(
  `${colors.cyan}${colors.bold}                    FINAL SUMMARY${colors.reset}`
);
console.log(
  `${colors.cyan}${colors.bold}═══════════════════════════════════════════════════════════════${colors.reset}\n`
);

if (allPassed) {
  console.log(
    `${colors.green}${colors.bold}╔═══════════════════════════════════════════════════════════════╗${colors.reset}`
  );
  console.log(
    `${colors.green}${colors.bold}║                                                               ║${colors.reset}`
  );
  console.log(
    `${colors.green}${colors.bold}║         ✓ ALL PROTECTIONS ACTIVE - DEV MODE SAFE             ║${colors.reset}`
  );
  console.log(
    `${colors.green}${colors.bold}║                                                               ║${colors.reset}`
  );
  console.log(
    `${colors.green}${colors.bold}╚═══════════════════════════════════════════════════════════════╝${colors.reset}\n`
  );
  process.exit(0);
} else {
  console.log(
    `${colors.red}${colors.bold}╔═══════════════════════════════════════════════════════════════╗${colors.reset}`
  );
  console.log(
    `${colors.red}${colors.bold}║                    ✗ PROTECTION ISSUES FOUND                ║${colors.reset}`
  );
  console.log(
    `${colors.red}${colors.bold}╚═══════════════════════════════════════════════════════════════╝${colors.reset}\n`
  );
  process.exit(1);
}
