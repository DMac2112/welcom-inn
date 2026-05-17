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
- **Favicon** added to all 4 pages (`favicon.jpg`, copied from original source)
- **Open Graph + Twitter Card** tags added to all 4 pages
- **LocalBusiness JSON-LD** on index.html with contactable hours 09:00-20:00, address, phone, email
- **Stats / Numbers bar** added to index.html (4.88★ / 1000s guests / 85% revenue kept / 3 properties)
- **Real reviews** — replaced fake quote cards on index.html with Airbnb + Booking.com screenshots linked to live listings; added VRBO + Hostelworld text links
- **faq.html hero** updated to use `kitchen-picture.jpg` (matches properties.html)

---

## Remaining

### FAQPage structured data
Add `FAQPage` JSON-LD to faq.html — unlocks Google accordion rich results. Requires question/answer extraction from the 14 existing entries.

### ItemList + LodgingBusiness on properties.html
Per-property structured data for richer SERP. Lower priority than FAQPage.

### Property owner testimonials (work.html)
Omitted by user — no owner quotes available.

### Bloomfield image audit
PLAN.md previously flagged `pic1.jpg`–`pic5.jpg` as broken. Verified: those files DO exist in `pictures/Bloomfield/`. No action needed.

---

## Priority Order (Remaining)

| # | Item | Type | Impact |
|---|---|---|---|
| 1 | FAQPage JSON-LD | SEO | High |
| 2 | ItemList / LodgingBusiness on properties.html | SEO | Medium |
