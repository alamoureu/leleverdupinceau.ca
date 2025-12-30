# Scripts Directory

This directory contains all verification and utility scripts for the Le Lever du Pinceau website.

## Quick Start

Run the comprehensive checkup to verify everything:

```bash
node scripts/checkup.js
```

## Available Scripts

### `checkup.js` - Master Checkup Script

**Runs all verification checks systematically**

```bash
node scripts/checkup.js
```

This script runs:

1. Route verification (internal links, canonicals, duplicates)
2. Clickable links verification (all buttons/links point to valid routes)

**Exit Codes:**

- `0` - All checks passed
- `1` - One or more checks failed

---

### `verify-routes.js` - Route Verification

**Comprehensive route verification with 100% guarantee**

```bash
node scripts/verify-routes.js
```

**Checks:**

- ✅ Duplicate canonical URLs
- ✅ All internal links in data files
- ✅ Route coverage (routes with/without data links)

**Output:**

- Lists all verified links
- Reports broken links with file locations
- Identifies routes missing data links

---

### `verify-links.js` - Clickable Links Verification

**Verifies all clickable elements point to valid routes**

```bash
node scripts/verify-links.js
```

**Checks:**

- ✅ All `to="/path"` attributes (React Router Links)
- ✅ All `href="/path"` attributes (regular links)
- ✅ All `navigate("/path")` calls (programmatic navigation)
- ✅ All `RouterLink to="/path"` components

**Features:**

- Handles hash anchors (e.g., `/new-home#reviews`)
- Validates admin routes
- Supports dynamic route patterns

---

## Script Organization

```
scripts/
├── README.md              # This file
├── checkup.js            # Master checkup script (run this!)
├── verify-routes.js      # Route verification
└── verify-links.js       # Clickable links verification
```

## Usage Examples

### Run Full Checkup

```bash
node scripts/checkup.js
```

### Run Individual Checks

```bash
# Route verification only
node scripts/verify-routes.js

# Link verification only
node scripts/verify-links.js
```

## Integration

These scripts can be integrated into:

- **Pre-commit hooks** - Prevent broken links from being committed
- **CI/CD pipelines** - Automated verification on every build
- **Pre-deployment checks** - Verify everything before going live

## Requirements

- Node.js (v14+)
- All scripts use relative paths from project root
- Requires `ALL_ROUTES.txt` and `public/sitemap-test.xml` files

## Notes

- All scripts use colored terminal output for better readability
- Exit codes follow standard conventions (0 = success, 1 = failure)
- Scripts are designed to be run from the project root directory
