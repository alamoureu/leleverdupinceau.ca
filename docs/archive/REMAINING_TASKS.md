# 🚨 REMAINING CRITICAL TASKS

## Priority 1: Unique Image Metadata & Titles

### Current Issue:
The same images are reused across multiple pages with identical alt text and metadata. This is bad for SEO.

### Required:
**Every image must have unique:**
- Alt text with page-specific keywords
- Unique file references (or unique metadata per usage)
- Light keywords that relate to the page context

### Images That Need Unique Metadata:

#### Before/After Images (Reused on multiple pages):
- `IMG_5969.jpg` - Used on: Peintre Pro, Avis, Montreal, Laval, Longueuil, Brossard, many service pages
- `IMG_5970.jpg` - Used on: Same pages
- `IMG_5971.jpg` - Used on: Same pages
- `IMG_5972.jpg` - Used on: Same pages
- `IMG_5973.jpg` - Used on: Same pages
- `IMG_5974.jpg` - Used on: Same pages

#### Project Photos (Reused on multiple pages):
- `Projets résidentiels.PNG` - Used on: Multiple city pages, service pages
- `projet_exterieur.jpg` - Used on: Multiple pages
- `Projets commerciaux.PNG` - Used on: Multiple pages

### Solution Strategy:

#### Option A: Dynamic Alt Text Based on Page Context
Create a helper function that generates unique alt text based on:
- Current page route
- Service type
- City name
- Image index

Example:
```javascript
// On Peintre Pro page:
alt="Appartement peinturé et plâtré par peintres professionnels au Plateau Montréal"

// On Montreal City page:
alt="Projet de peinture résidentielle à Montréal - Appartement au Plateau"

// On Service Commercial page:
alt="Peinture commerciale professionnelle - Transformation de bureaux"
```

#### Option B: Create Image Context Objects
For each page, define specific metadata:
```javascript
const projectImages = [
  {
    src: img5969,
    alt: 'Unique alt text for THIS page',
    title: 'Unique title for THIS page',
    context: 'Appartement locatif peinturé et plâtré au plateau'
  }
]
```

---

## Priority 2: UI Remix to Avoid Thin Content

### Goal:
Make each page unique in structure and layout so Google doesn't flag as duplicate/thin content.

### Strategy Per Page Type:

#### City Pages (4 pages)
- **Montreal**: Add header image at top
- **Laval**: Move "Why Us" section before "Projects"
- **Longueuil**: Add testimonial card in middle
- **Brossard**: Different grid layout for services (2 columns instead of 3)

#### Service Principal Pages (5 pages)
- **Peinture Commerciale**: Keep current layout (has images at top)
- **Peinture Extérieure**: Add header banner image
- **Peinture Intérieure**: Move blog section before cities
- **Peinture Industrielle**: Add testimonial section
- **Peinture Résidentielle**: Different city bubble layout

#### Sous-Services (4 pages)
- Different section orders
- Alternate between 2-col and 3-col grids
- Add/remove header images strategically

#### Service × Ville (20 pages)
- Rotate between 3-4 different layouts
- Vary section order
- Different spacing and padding
- Mix of header images vs no header images

#### Sous-Service × Ville (16 pages)
- Similar strategy as Service × Ville
- Ensure no two consecutive pages have same layout

---

## Implementation Plan

### Phase 1: Image Metadata (Est. 2-3 hours)
1. ✅ Audit all image usage across pages
2. ⬜ Create image context utility function
3. ⬜ Update all pages to use unique alt text
4. ⬜ Test and verify unique metadata

### Phase 2: UI Remix (Est. 3-4 hours)
1. ⬜ Document current layouts
2. ⬜ Create 4-5 layout variations
3. ⬜ Apply different layouts to different pages
4. ⬜ Test responsive behavior
5. ⬜ Verify no duplicate structures

### Phase 3: Verification (Est. 1 hour)
1. ⬜ Test all 83 pages
2. ⬜ Verify unique image metadata
3. ⬜ Verify varied layouts
4. ⬜ Check for any regressions

---

## Detailed Breakdown

### Images to Update:

#### Page: `/peintre-professionnel`
- IMG_5969: "Appartement locatif peinturé et plâtré au plateau"
- IMG_5970: "3e niveau d'un triplex, changement de couleur à Outremont"
- IMG_5971: "Sablage et teinture de terrasse à Longueuil"
- IMG_5972: "Peinture de cabinetterie à Laval"
- IMG_5973: "Peinture de Plafond en Steel Deck industrielle"
- IMG_5974: "Protection et peinture complète d'une maison à Westmount"

#### Page: `/avis`
- Same images but need different alt text focusing on "avis" and "témoignages"

#### Page: `/secteurs-desservis/montreal`
- Same images but need different alt text focusing on "Montréal" and neighborhoods

#### City Pages (Brossard, Laval, Longueuil)
- Project images need city-specific alt text

#### Service Pages
- All project photos need service-specific keywords

---

## UI Remix Variations

### Layout A: Top Image Hero
```
- Header Image (full width)
- H1 + Intro
- Section 1
- Section 2
- Section 3
```

### Layout B: No Header Image
```
- H1 + Intro
- Images Grid (3 col)
- Section 1
- Section 2
- Section 3
```

### Layout C: Split Intro
```
- H1
- Intro (2 columns on desktop)
- Section 1
- Images Grid
- Section 2
```

### Layout D: Testimonial Focus
```
- H1 + Intro
- Testimonial Card
- Section 1
- Images
- Section 2
```

---

## Next Steps

1. **START WITH IMAGE METADATA** - Most critical for SEO
2. **THEN UI REMIX** - Prevent thin content flags
3. **TEST EVERYTHING** - Ensure no broken pages

---

## Success Criteria

✅ Every image has unique alt text based on page context  
✅ No two pages have identical layout structure  
✅ All 83 pages load without errors  
✅ Image descriptions are relevant and non-spammy  
✅ Layout variations look good on mobile and desktop  

---

**Status**: 🔴 **NOT STARTED**  
**Priority**: 🔥 **CRITICAL**  
**Estimated Time**: 6-8 hours  





