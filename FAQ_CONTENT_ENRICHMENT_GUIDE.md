# FAQ Content Enrichment Guide

This guide shows you how to add FAQ sections to template-driven pages to avoid thin content and boost SEO.

---

## ✅ What was implemented

1. **Reusable FAQ component** (`ServiceFAQSection.jsx`) that works across all service pages
2. **FAQ support in Service × City pages** (e.g., `/services/peinture-residentielle/brossard`)
3. **FAQ support in SubService × City pages** (e.g., `/services/peinture-residentielle/exterieure/brossard`)
4. **Example FAQs** added for:
   - Peinture résidentielle Brossard (Service × City)
   - Peinture résidentielle extérieure Brossard (SubService × City)

---

## 📊 Impact on thin content

Each FAQ section adds **150–250+ words** of unique, relevant content per page:
- 3–4 FAQs per page
- Each FAQ: question (10–15 words) + answer (40–70 words)
- Total per page: **~200–300 words** of unique Q&A content

This significantly reduces thin content risk for template-driven pages without rewriting your entire data structure.

---

## 🛠️ How to add FAQs to more pages

### Step 1: Add FAQ data to your data file

**Location:** In the city object (e.g., `brossard`, `laval`, `montreal`, `longueuil`)

**Structure:**
```javascript
{
  // ... existing city data (h1, introduction, whyUs, etc.)
  
  faqTitle: {
    fr: 'Questions fréquentes – [Service] à [City]',
    en: 'Frequently asked questions – [Service] in [City]',
  },
  faqs: {
    fr: [
      {
        question: 'Votre question en français ?',
        answer: 'Votre réponse détaillée en français (40–70 mots). Inclure des détails spécifiques à la ville ou au service.',
      },
      {
        question: 'Deuxième question ?',
        answer: 'Deuxième réponse...',
      },
      // Add 3–5 FAQs per page for best impact
    ],
    en: [
      {
        question: 'Your question in English?',
        answer: 'Your detailed answer in English (40–70 words). Include details specific to the city or service.',
      },
      {
        question: 'Second question?',
        answer: 'Second answer...',
      },
    ],
  },
}
```

**Example** (from `peintureResidentielleData.js` → brossard):
```javascript
faqTitle: {
  fr: 'Questions fréquentes – Peinture résidentielle à Brossard',
  en: 'Frequently asked questions – Residential painting in Brossard',
},
faqs: {
  fr: [
    {
      question: 'Combien de temps faut-il pour peindre une maison à Brossard ?',
      answer: "Pour un condo ou une maison moyenne (intérieur complet), comptez 3 à 5 jours. Pour l'extérieur d'une maison unifamiliale, entre 3 et 7 jours selon la superficie et les conditions météo. Nous fournissons un calendrier précis dès la soumission.",
    },
    // ... more FAQs
  ],
  en: [ /* English versions */ ],
},
```

---

### Step 2: The template already renders it

**For Service × City pages** (`ServiceQuartierPage.jsx`):
- FAQ section is already added ✅
- It renders automatically if `city.faqs` exists

**For SubService × City pages** (`SousServiceVillePage.jsx`):
- FAQ section is already added ✅
- It renders automatically if `city.faqs` exists

**For Neighborhood pages** (`ServiceQuartierSecteurPage.jsx`):
- You can add the same pattern if needed (see below)

---

### Step 3: Test and verify

1. Add FAQ data to your city object
2. Reload the page in your browser
3. FAQ section appears before the CTA (Call to Action)
4. Verify both French and English versions

---

## 📝 FAQ writing tips

### Make each FAQ unique to the city/service

**Bad (generic):**
> Q: Combien de temps dure un projet de peinture ?  
> A: Ça dépend de la taille.

**Good (specific to city/service):**
> Q: Combien de temps faut-il pour peindre une maison à Brossard ?  
> A: Pour un condo ou une maison moyenne (intérieur complet), comptez 3 à 5 jours. Pour l'extérieur d'une maison unifamiliale, entre 3 et 7 jours selon la superficie et les conditions météo. Nous fournissons un calendrier précis dès la soumission.

### Common FAQ themes per page type

**Service × City** (e.g., Peinture résidentielle Brossard):
- Timeline for projects in that city
- Sectors/neighborhoods served
- Types of properties (condo, house, plex)
- Local considerations (climate, architecture style)

**SubService × City** (e.g., Peinture résidentielle extérieure Brossard):
- Best time of year for exterior painting
- Materials/claddings you work with
- How long the finish lasts in that climate
- Specific prep work for exterior vs interior

**Neighborhood pages** (e.g., Peinture intérieure Ahuntsic):
- Types of buildings in that neighborhood (old vs new)
- Common challenges (plaster walls, heritage buildings)
- Access/parking considerations
- Typical project scope for that area

### Word count targets

- **Question:** 8–15 words
- **Answer:** 40–70 words (2–4 sentences)
- **Total per FAQ:** ~50–85 words
- **Recommended FAQs per page:** 3–5
- **Total content added per page:** 150–400 words

---

## 🎯 Priority pages to enrich

Based on your thin content risk assessment:

### High priority (thinnest pages)
1. **SubService × City** (16 pages) – Add 3–4 FAQs each
2. **Service × City** (20 pages) – Add 3–5 FAQs each

### Medium priority
3. **Neighborhood pages** (21 pages) – Add 2–3 FAQs each (already have good unique content)

### Low priority
4. Main service pages, blog, city hub pages – Already have substantial unique content

---

## 🚀 Quick implementation checklist

For each page type you want to enrich:

- [ ] Choose 3–5 questions relevant to that service/city combination
- [ ] Write detailed answers (40–70 words each) with city-specific details
- [ ] Add `faqTitle` and `faqs` to the city object in the data file
- [ ] Test in browser (French and English)
- [ ] Verify FAQ section appears before CTA
- [ ] Check word count (aim for 150–300 words total FAQ content per page)

---

## 📂 Files reference

### Component
- `src/lelever-next/services-pages/components/ServiceFAQSection.jsx` — Reusable FAQ component

### Templates (already updated with FAQ support)
- `src/lelever-next/services-pages/service_ville/ServiceQuartierPage.jsx` — Service × City
- `src/lelever-next/services-pages/sous_service_ville/SousServiceVillePage.jsx` — SubService × City

### Example data files
- `src/lelever-next/services-pages/service_ville/peintureResidentielleData.js` — See Brossard FAQ
- `src/lelever-next/services-pages/sous_service_ville/peintureResidentielleExterieureData.js` — See Brossard FAQ

---

## 🔧 Adding FAQ to neighborhood pages (optional)

If you want to add FAQ to neighborhood pages (`ServiceQuartierSecteurPage.jsx`):

1. Import the component:
```javascript
import ServiceFAQSection from '../components/ServiceFAQSection';
```

2. Add before CTA:
```javascript
{/* FAQ section */}
{neighborhood.faqs && neighborhood.faqs[isFr ? 'fr' : 'en'] && (
  <ServiceFAQSection
    title={neighborhood.faqTitle ? neighborhood.faqTitle[isFr ? 'fr' : 'en'] : null}
    faqs={neighborhood.faqs[isFr ? 'fr' : 'en']}
    isFr={isFr}
  />
)}
```

3. Add FAQ data to each neighborhood file (e.g., `ahuntsicData.js`):
```javascript
faqTitle: 'Questions fréquentes – Peinture intérieure à Ahuntsic',
faqs: {
  fr: [
    { question: '...', answer: '...' },
  ],
  en: [
    { question: '...', answer: '...' },
  ],
},
```

---

## ✅ Summary

- **Component:** `ServiceFAQSection.jsx` is reusable across all pages
- **Templates updated:** Service × City and SubService × City already support FAQ
- **Data structure:** Add `faqTitle` and `faqs` to your city objects
- **Impact:** 150–300 words of unique content per page
- **Next steps:** Add FAQs to the remaining 34 cities (16 SubService × City + 18 remaining Service × City)

This approach enriches your content **without rewriting your entire data structure**. Just add FAQ objects to existing city data, and the template handles the rest.
