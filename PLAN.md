# Welcom-Inn 2026 — Improvement Plan

## Completed
- Restored full FAQ (14 questions, 2 categories, improved answers)
- Added "No Long-term Contract" card to work.html pricing section
- Mobile responsiveness: footer centering, hero text/button overflow, split-section stacking, navbar hides when footer dominates screen
- PO Box visual weight fix (muted colour)
- **sitemap.xml + robots.txt** created in project root
- **Google Analytics** (`G-T3C10B0TEE`) restored on all 4 pages
- **Google Fonts double-load** fixed (removed duplicate `@import` from styles.css)
- **Lazy loading** added to all below-the-fold images across all 4 pages
- **Canonical URLs** added to all 4 pages
- **"How It Works"** 4-step process section added to work.html
- **WhatsApp floating button** (bottom-right, fixed) added to all 4 pages
- **Breadcrumbs** (visual + `BreadcrumbList` JSON-LD) added to work.html, properties.html, faq.html
- **Alt text** on all property slider images now descriptive and keyword-rich

---

## SEO — Remaining

### 1. JSON-LD Structured Data (Highest impact)
Add to `<head>` of each page as `<script type="application/ld+json">`:
- **index.html** — `LocalBusiness` schema (name, address, phone, url, openingHours, geo)
- **faq.html** — `FAQPage` schema (unlocks Google accordion rich results, major CTR boost)
- **properties.html** — `ItemList` + `LodgingBusiness` per property

### 2. Open Graph + Twitter Card Tags (All 4 pages)
Every page needs:
```html
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
<meta property="og:url" content="...">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
```
Without these, every WhatsApp/Facebook/iMessage share shows a blank preview.

### 3. sitemap.xml + robots.txt
Neither exists. Create both in the project root.
- `sitemap.xml` — lists all 4 pages with priority/changefreq
- `robots.txt` — `User-agent: * / Allow: /`

### 4. Canonical URLs
Add to each page `<head>`:
```html
<link rel="canonical" href="https://dmac2112.github.io/welcom-inn/index.html">
```

### 5. Favicon
No favicon exists. The original had `<link rel="icon" href="logo.jpg">`. Add back using one of the existing logos.

### 6. Fix Google Fonts Double-Load
`styles.css` has `@import url('https://fonts.googleapis.com/...')` AND every HTML file has a `<link>` tag for the same fonts. Remove the `@import` from `styles.css` — fonts are already loaded by the HTML `<link>`.

### 7. Image Lazy Loading
Add `loading="lazy"` to every image that is not the hero (below the fold). Affects all property card images, service section images, cleaning photo, etc.

### 8. Google Analytics
The original site had Google Analytics (`G-T3C10B0TEE`) wired up. The 2026 refresh has no tracking. Add the gtag snippet back to all 4 pages.

---

## Design — Remaining

### 9. Fix Broken Property Image Paths
`properties.html` references `pictures/Botanic/picture1.jpg` and `pictures/Bloomfield/pic1.jpg`. The Bloomfield folder only contains `DSC0xxxx.jpg` files — these cards will show broken images. Needs image audit and path correction.

### 10. Stats / Numbers Bar
Add after the hero trust bar on index.html:
- **4.88★** Airbnb Rating
- **500+** Guests Hosted  
- **85%** Revenue Kept
- **3** Managed Properties

### 11. "How It Works" Process Section (work.html)
4-step visual process for property owners:
1. Contact us → 2. Free evaluation → 3. We go live → 4. You get paid

Converts better than a services grid alone for owners deciding whether to list.

### 12. Property Owner Testimonials (work.html)
All current reviews are from guests. work.html targets property owners — needs 2–3 short quotes from owners who have listed with Welcom-Inn.

### 13. WhatsApp Floating Button
A fixed bottom-right WhatsApp button linking to `https://wa.me/+447938571368`. Standard for local service businesses, high conversion.

### 14. Real Reviews (Replacing Fake Quotes)
The three invented review quotes (Sarah T., Mark D., Emily R.) should be replaced. Options:
- **Screenshots** — use existing `pictures/airbnb-reviews.PNG` and `pictures/bookingcom-reviews.PNG` linking to live platform pages (what the original did)
- **Google Business Profile** — set up GBP and use Places API to pull live reviews automatically (free, auto-updates)
- **Elfsight widget** — paid (~£8/month), auto-pulls from multiple platforms

### 15. Breadcrumb Navigation on Inner Pages
Add `Home > List a Property` etc. on work/properties/faq pages. Pairs with BreadcrumbList structured data for Google.

### 16. Alt Text on Gallery Slider Images
Current slider images use `alt="Botanic 1"`, `alt="Bloomfield 1"` etc. Replace with descriptive text: `"Botanic Avenue Suite living room, Belfast"`.

---

## Priority Order

| # | Item | Type | Impact |
|---|---|---|---|
| 1 | JSON-LD structured data | SEO | High |
| 2 | Open Graph / Twitter Card tags | SEO | High |
| 3 | sitemap.xml + robots.txt | SEO | High |
| 4 | Google Analytics restored | Analytics | High |
| 5 | Fix broken property images | Bug | Critical |
| 6 | Real reviews (screenshots or GBP) | Trust | High |
| 7 | Fix Google Fonts double-load | Performance | Medium |
| 8 | Lazy loading on images | Performance | Medium |
| 9 | Favicon | Polish | Medium |
| 10 | Canonical URLs | SEO | Medium |
| 11 | Stats / Numbers bar | Conversion | Medium |
| 12 | How It Works section | Conversion | Medium |
| 13 | WhatsApp floating button | Conversion | Medium |
| 14 | Property owner testimonials | Trust | Medium |
| 15 | Breadcrumbs | SEO + UX | Low |
| 16 | Alt text on slider images | SEO | Low |
