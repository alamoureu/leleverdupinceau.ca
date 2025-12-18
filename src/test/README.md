# 🧪 Testing Scripts for Le Lever du Pinceau

## Available Scripts

### 1. **Route Verification** (`npm test`)
Verifies all 84 routes are documented and lists them by category.

```bash
npm test
```

**Output:**
- Lists all routes organized by category
- Shows total count (84 routes)
- Confirms all routes are ready for testing

---

### 2. **Interactive Browser Opener** (`npm run open:routes`)
Opens routes in your browser with an interactive menu to choose which category to open.

```bash
npm run open:routes
```

**Interactive Menu:**
```
1. Main Routes (9)
2. City Routes (4)
3. Main Service Routes (5)
4. Sub-Service Routes (4)
5. Service × City Routes (20)
6. Sous-Service × City Routes (16)
7. Service × Quartier Routes (23)
8. Blog Routes (3)
9. ALL ROUTES (84 tabs)
0. Exit
```

**Perfect for:**
- Testing specific categories
- Avoiding browser overload
- Systematic verification

---

### 3. **Open All Routes** (`npm run open:all`)
Automatically opens ALL 84 routes in your browser (500ms delay between each).

```bash
npm run open:all
```

**⚠️ WARNING:** This will open 84 browser tabs!

**Use this when:**
- You want to verify all pages at once
- You have enough RAM/browser capacity
- You're doing a final comprehensive check

---

## 📋 Testing Workflow

### Recommended Approach:

1. **Start the dev server:**
   ```bash
   npm start
   ```
   Server runs at: `http://localhost:5174/`

2. **Verify routes are documented:**
   ```bash
   npm test
   ```

3. **Open routes by category (recommended):**
   ```bash
   npm run open:routes
   ```
   Then select a category (1-8) to test incrementally.

4. **OR open all at once:**
   ```bash
   npm run open:all
   ```

---

## 📊 What Gets Opened

### Total: 84 Routes

| Category | Count | Examples |
|----------|-------|----------|
| Main Routes | 9 | `/`, `/services`, `/contact` |
| City Routes | 4 | `/secteurs-desservis/montreal` |
| Main Service Routes | 5 | `/services/peinture-commerciale` |
| Sub-Service Routes | 4 | `/services/peinture-commerciale/interieure` |
| Service × City Routes | 20 | `/services/peinture-commerciale/montreal` |
| Sous-Service × City Routes | 16 | `/services/peinture-commerciale/interieure/montreal` |
| Service × Quartier Routes | 23 | `/services/peinture-interieure/montreal/plateau-mont-royal` |
| Blog Routes | 3 | `/blog/comment-choisir-un-peintre-professionnel` |

---

## 🛠️ Configuration

### Adjust Opening Speed
Edit `src/test/open-all-routes.js`:

```javascript
const DELAY_MS = 500; // Change this value (in milliseconds)
```

- **Faster:** `250ms` - More aggressive, might overwhelm browser
- **Default:** `500ms` - Balanced
- **Slower:** `1000ms` - Safer for low-end machines

### Change Base URL
Edit `src/test/open-all-routes.js`:

```javascript
const BASE_URL = 'http://localhost:5174'; // Change to your URL
```

---

## ✅ What to Check When Testing

When each page opens, verify:

1. **✅ Page loads without errors**
   - No 404 or blank pages
   - No console errors (F12)

2. **✅ Content renders correctly**
   - Title/H1 is correct
   - Intro text with 👉 emoji appears
   - Images load properly

3. **✅ Components display**
   - Navigation works
   - Footer appears
   - CTA buttons visible

4. **✅ Mobile responsive** (optional)
   - Resize browser window
   - Check mobile breakpoints

5. **✅ SEO elements** (optional)
   - Check page `<title>` in tab
   - View source for meta tags

---

## 🚨 Troubleshooting

### "Too many tabs opening!"
- Use `npm run open:routes` instead
- Test one category at a time
- Close previous tabs before opening next category

### "Server not running"
- Make sure `npm start` is running in another terminal
- Check that `http://localhost:5174/` is accessible

### "Script not found"
- Make sure you're in the project root directory
- Run: `cd C:\Users\antoi\Desktop\leleverdupinceau`

### "Routes not opening"
- Check if browser is set as default
- Try running script manually: `node src/test/open-all-routes.js`

---

## 📝 Files in This Directory

- **`verify-routes.js`** - Lists all routes for verification
- **`open-all-routes.js`** - Opens routes in browser
- **`RoutingTests.js`** - Full route documentation
- **`COMPLETE_PAGE_INVENTORY.md`** - Complete page list with details
- **`EXECUTIVE_SUMMARY.md`** - High-level completion summary
- **`FINAL_DEEP_VERIFICATION_REPORT.md`** - Detailed verification status
- **`README.md`** - This file!

---

## 🎉 Quick Reference

```bash
# Verify routes are documented
npm test

# Open routes with menu (recommended)
npm run open:routes

# Open all 84 routes at once
npm run open:all
```

**Happy Testing! 🚀**
