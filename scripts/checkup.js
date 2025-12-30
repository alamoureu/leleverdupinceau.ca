/**
 * SYSTEMATIC CHECKUP SCRIPT
 *
 * Runs all verification checks systematically:
 * 1. Route verification (internal links, canonicals, duplicates)
 * 2. Clickable links verification (all buttons/links point to valid routes)
 *
 * Usage: node scripts/checkup.js
 */

const { execSync } = require('child_process');
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

const results = {
  sitemapValidation: { passed: false, exitCode: null },
  routeVerification: { passed: false, exitCode: null },
  linkVerification: { passed: false, exitCode: null },
};

console.log(`${colors.cyan}${colors.bold}`);
console.log(
  `╔═══════════════════════════════════════════════════════════════════════╗`
);
console.log(
  `║                                                                       ║`
);
console.log(
  `║              SYSTEMATIC CHECKUP - COMPREHENSIVE VERIFICATION          ║`
);
console.log(
  `║                                                                       ║`
);
console.log(
  `╚═══════════════════════════════════════════════════════════════════════╝`
);
console.log(`${colors.reset}\n`);

// Run verification scripts
async function runCheckup() {
  const scripts = [
    {
      path: path.join(__dirname, 'validate-sitemap.js'),
      name: 'Sitemap Validation',
      key: 'sitemapValidation',
    },
    {
      path: path.join(__dirname, 'verify-routes.js'),
      name: 'Route Verification',
      key: 'routeVerification',
    },
    {
      path: path.join(__dirname, 'verify-links.js'),
      name: 'Clickable Links Verification',
      key: 'linkVerification',
    },
  ];

  for (const script of scripts) {
    console.log(
      `\n${colors.cyan}${colors.bold}▶ ${script.name}${colors.reset}\n`
    );

    try {
      execSync(`node "${script.path}"`, {
        stdio: 'inherit',
        cwd: path.join(__dirname, '..'),
      });
      results[script.key].passed = true;
      results[script.key].exitCode = 0;
    } catch (error) {
      results[script.key].passed = false;
      results[script.key].exitCode = error.status || 1;
    }

    console.log(''); // Add spacing between scripts
  }

  // Final summary
  console.log(
    `${colors.cyan}${colors.bold}═══════════════════════════════════════════════════════════════${colors.reset}`
  );
  console.log(
    `${colors.cyan}${colors.bold}                    FINAL CHECKUP SUMMARY${colors.reset}`
  );
  console.log(
    `${colors.cyan}${colors.bold}═══════════════════════════════════════════════════════════════${colors.reset}\n`
  );

  const allPassed = Object.values(results).every((r) => r.passed);

  Object.entries(results).forEach(([key, result]) => {
    const status = result.passed
      ? `${colors.green}✓ PASSED${colors.reset}`
      : `${colors.red}✗ FAILED${colors.reset}`;
    console.log(`  ${key}: ${status}`);
  });

  console.log(
    `\n${colors.cyan}${colors.bold}═══════════════════════════════════════════════════════════════${colors.reset}\n`
  );

  if (allPassed) {
    console.log(
      `${colors.green}${colors.bold}╔═══════════════════════════════════════════════════════════════╗${colors.reset}`
    );
    console.log(
      `${colors.green}${colors.bold}║                                                               ║${colors.reset}`
    );
    console.log(
      `${colors.green}${colors.bold}║         ✓ ALL CHECKS PASSED - SYSTEM HEALTHY                 ║${colors.reset}`
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
      `${colors.red}${colors.bold}║                    ✗ SOME CHECKS FAILED                      ║${colors.reset}`
    );
    console.log(
      `${colors.red}${colors.bold}╚═══════════════════════════════════════════════════════════════╝${colors.reset}\n`
    );
    process.exit(1);
  }
}

runCheckup();
