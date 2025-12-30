# Le Lever du Pinceau - Sitemap Documentation

This folder contains comprehensive sitemap documentation for the Le Lever du Pinceau website.

## 📁 Generated Files

### 1. `public/sitemap-test.xml`

**Purpose:** Complete XML sitemap for testing purposes  
**Format:** XML (sitemap protocol)  
**Usage:**

- Can be used for testing with Google Search Console
- Ready to replace the production sitemap when needed
- Contains all 82 public routes with proper priorities and change frequencies

**How to use:**

```bash
# To make this the active sitemap, rename it:
mv public/sitemap-test.xml public/sitemap.xml

# Or copy it while keeping the test version:
cp public/sitemap-test.xml public/sitemap.xml
```

### 2. `SITEMAP_DOCUMENTATION.md`

**Purpose:** Human-readable documentation of all routes  
**Format:** Markdown with tables  
**Usage:**

- Quick reference for developers
- Documentation for the project
- Easy to search and navigate
- Contains route counts and implementation status

### 3. `ALL_ROUTES.txt`

**Purpose:** Simple text list of all routes  
**Format:** Plain text with comments  
**Usage:**

- Easy copy-paste of routes
- Can be used with command-line tools
- Quick reference without opening complex files
- Useful for scripts and automation

### 4. `routes-manifest.json`

**Purpose:** Machine-readable structured route data  
**Format:** JSON  
**Usage:**

- Can be imported by Node.js scripts
- Useful for automated testing
- Can be used to generate dynamic sitemaps
- Includes metadata about cities, neighborhoods, services

**Example usage:**

```javascript
const routes = require('./routes-manifest.json');

// Get all service routes
const serviceRoutes = routes.categories.servicesMain.routes;

// Get all cities
const cities = routes.cities;

// Get total count
console.log(`Total routes: ${routes.totalPublicRoutes}`);
```

### 5. `SITEMAP_README.md`

**Purpose:** This file - explains all generated documentation

---

## 🎯 Quick Stats

- **Total Public Routes:** 98
- **Total Routes (including admin):** 106
- **Main Services:** 5
- **Cities Covered:** 4 (Brossard, Laval, Longueuil, Montreal)
- **Montreal Neighborhoods:** 23
- **Blog Posts:** 3
- **Service × City Combinations:** 20
- **Service × SubService × City Combinations:** 16
- **Service × City × Neighborhood Combinations:** 23

---

## 🗺️ Route Structure

The website uses a hierarchical structure:

```
/
├── Main Pages (/, /contact, /soumission, etc.)
├── /new-home
│   ├── /contact
│   └── /a-propos
├── /secteurs-desservis
│   ├── /brossard
│   ├── /laval
│   ├── /longueuil
│   └── /montreal
├── /services
│   ├── /peinture-commerciale
│   │   ├── /interieure
│   │   │   ├── /brossard
│   │   │   ├── /laval
│   │   │   ├── /longueuil
│   │   │   └── /montreal
│   │   └── /exterieure
│   │       └── [same cities]
│   ├── /peinture-residentielle
│   │   ├── /interieure
│   │   │   └── [same cities]
│   │   └── /exterieure
│   │       └── [same cities]
│   └── /new-peinture-interieure
│       ├── /brossard
│       ├── /laval
│       ├── /longueuil
│       └── /montreal
│           ├── /ahuntsic
│           ├── /plateau-mont-royal
│           ├── /outremont
│           └── [20 more neighborhoods]
└── /blog
    ├── /comment-choisir-un-peintre-professionnel
    ├── /prix-peinture-montreal
    └── /erreurs-a-eviter-peinture-interieure
```

---

## 🔧 How to Update the Sitemap

When you add new routes to the website:

1. **Update the routing in `src/App.jsx`**
2. **Add the route to the data files** (if it's a dynamic route)
3. **Update all sitemap files:**

### Option A: Manual Update

Edit each file manually:

- `public/sitemap-test.xml` (or `public/sitemap.xml`)
- `SITEMAP_DOCUMENTATION.md`
- `ALL_ROUTES.txt`
- `routes-manifest.json`

### Option B: Automated Update (Recommended)

Create a script to generate these files automatically:

```javascript
// scripts/generate-sitemap.js
const fs = require('fs');
const {
  getAllServiceQuartierRoutes,
} = require('../src/lelever-next/services-pages/service_ville');
const {
  getAllServiceQuartierSecteurRoutes,
} = require('../src/lelever-next/services-pages/service_quartier');
const {
  getAllSousServiceRoutes,
} = require('../src/lelever-next/services-pages/sous_service');
const {
  getAllSousServiceVilleRoutes,
} = require('../src/lelever-next/services-pages/sous_service_ville');

// Generate sitemap XML, markdown, etc.
```

---

## 🚀 Deploying the Sitemap

### For Production:

1. **Review the test sitemap:**

   ```bash
   cat public/sitemap-test.xml
   ```

2. **Validate it:**

   - Use [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)
   - Or Google Search Console

3. **Replace the production sitemap:**

   ```bash
   cp public/sitemap-test.xml public/sitemap.xml
   ```

4. **Commit and deploy:**

   ```bash
   git add public/sitemap.xml
   git commit -m "Update sitemap with all routes"
   git push
   ```

5. **Submit to Google Search Console:**
   - Go to Google Search Console
   - Navigate to "Sitemaps"
   - Submit: `https://www.leleverdupinceau.ca/sitemap.xml`

---

## 📊 SEO Priorities

The sitemap uses the following priority scheme:

| Priority | Routes                                             |
| -------- | -------------------------------------------------- |
| 1.0      | Homepage only                                      |
| 0.9      | Main new home                                      |
| 0.8      | Primary pages (services, contact, soumission)      |
| 0.7      | Secondary pages (about, city pages, main services) |
| 0.6      | Tertiary pages (service × subservice × city)       |
| 0.5      | Neighborhood pages                                 |
| 0.3      | Policy pages                                       |

### Change Frequencies:

- **Daily:** Homepage, new-home
- **Weekly:** Services, blog, contact, soumission
- **Monthly:** Most service pages, city pages
- **Yearly:** Policy pages

---

## 🔐 Password Protected Pages

Note that many pages are currently password-protected during development:

- All `/new-home/*` routes
- All `/services/*` routes
- All `/secteurs-desservis/*` routes
- All `/blog/*` routes
- `/peintre-professionnel`
- `/avis`

These will need to be made public before search engines can index them.

---

## ✅ Validation Checklist

Before deploying the sitemap to production:

- [ ] All routes in `src/App.jsx` are included
- [ ] All dynamic routes are generated correctly
- [ ] No duplicate URLs
- [ ] All URLs use the correct domain (`https://www.leleverdupinceau.ca`)
- [ ] Priorities are set appropriately
- [ ] Change frequencies make sense
- [ ] XML is valid (no syntax errors)
- [ ] Admin routes are excluded
- [ ] Password-protected routes are noted

---

## 📝 Notes

### Why a Test Sitemap?

We created `sitemap-test.xml` instead of overwriting `sitemap.xml` to:

1. Allow you to review all routes before deployment
2. Test the sitemap without affecting the live site
3. Keep a backup of the current sitemap
4. Ensure all routes are correct before going live

### Admin Routes

Admin routes are commented out in the XML sitemap because:

- They should not be indexed by search engines
- They are protected routes
- They have no SEO value
- Including them could be a security risk

### Next Steps

1. **Review** all the generated files
2. **Test** the sitemap-test.xml
3. **Validate** with online tools
4. **Deploy** when ready (replace sitemap.xml)
5. **Submit** to Google Search Console
6. **Monitor** indexing status

---

## 🆘 Troubleshooting

### Issue: Routes not showing up in search

- Check if pages are password-protected
- Verify robots.txt allows crawling
- Submit sitemap to Google Search Console
- Check for noindex meta tags

### Issue: Duplicate content warnings

- Ensure each URL is unique
- Check for trailing slashes consistency
- Verify canonical URLs are set correctly

### Issue: XML parsing errors

- Validate XML syntax
- Check for special characters that need escaping
- Ensure all tags are properly closed

---

**Last Updated:** December 30, 2025  
**Generated By:** Sitemap Generation Script  
**Website:** Le Lever du Pinceau (https://www.leleverdupinceau.ca)
