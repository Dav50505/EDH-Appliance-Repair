# EDH Appliance Repair — Website Redesign Task List

**Client:** EDH Appliance Repair  
**Phone:** (916) 836-5544  
**Address:** 3941 Park Dr Ste 20-539, El Dorado Hills, CA 95762  
**Email:** service@edhappliancerepair.com  
**Current Platform:** GoDaddy Airo (basic builder)  
**Goal:** Rebuild on a modern stack with strong local SEO and higher conversion rate

---

## 🔴 Phase 1 — Foundation & Structure

### 1.1 Platform Migration
- [x] Choose target platform (Webflow / Framer / Next.js + Tailwind recommended)
- [ ] Set up hosting with fast CDN (Vercel, Netlify, or Cloudflare Pages)
- [ ] Configure custom domain with SSL
- [ ] Remove "Powered by GoDaddy Airo" branding from footer

### 1.2 Site Architecture
- [x] Define page structure:
  - `/` — Homepage
  - `/services` — Services & Pricing
  - `/service-areas` — Service Areas (EDH, Folsom, Cameron Park, etc.)
  - `/about` — About Us
  - `/contact` — Contact & Booking
  - `/blog` (optional, for SEO content)
- [x] Set up clean URL slugs (no query strings or `.html` extensions)
- [ ] Create XML sitemap and submit to Google Search Console
- [x] Add `robots.txt`

---

## 🟠 Phase 2 — Homepage Redesign

### 2.1 Above-the-Fold Hero
- [x] Write strong H1: *"Fast, Reliable Appliance Repair in El Dorado Hills"*
- [x] Add subheadline listing key appliances and same-day/next-day availability
- [x] Add primary CTA button: **"Schedule Service"** (scrolls to booking form or modal)
- [x] Add secondary CTA: **"Call or Text (916) 836-5544"** as a `tel:` click-to-call link
- [x] Include trust badge strip (award logos already on site — Telegraph Best of 2023/2024, Nextdoor Neighborhood Fave)

### 2.2 Sticky Header
- [x] Always-visible phone number in header
- [x] "Schedule Service" button in sticky nav (distinct style from nav links)
- [x] Logo + nav links: Home, Services, Service Areas, About, Contact

### 2.3 Trust & Social Proof Section
- [x] "Why Choose Us" with 4 key bullets:
  - Locally owned & operated since 2012 (family & husband-wife team)
  - Over 17 years of industry experience
  - Licensed & insured, 100% satisfaction guarantee
  - No extra charge for evenings or weekends
- [x] Show award badges (already have Telegraph Best of 2023/2024, Nextdoor Fave 2022/2023)
- [x] Pull 2–3 real Google/Nextdoor review snippets (Casey W. already featured on their Instagram)

### 2.4 Services Section
- [x] Replace plain bullet list with icon cards for each appliance type:
  - Refrigerator, Freezer, Oven, Cooktop, Range, Dishwasher, Trash Compactor, Washer, Dryer, Over-the-Range Microwave
- [x] Each card: appliance name + 1-line description + "Schedule This Repair" link
- [x] Add clear note: *"We do not service small home appliances (garbage disposals, countertop microwaves, toasters, vacuums, mixers)"*

### 2.5 Service Area Section
- [x] Short copy: *"Proudly serving El Dorado Hills, Cameron Park, Shingle Springs, Diamond Springs, Rescue, Latrobe, Folsom, and El Dorado."*
- [x] Embed simple map or stylized area graphic centered on 95762
- [x] Link to full `/service-areas` page

### 2.6 About Micro-Section
- [ ] Use the family photo (already on site) with 3-sentence copy pulled from About page
- [x] Highlight: moved to EDH in 2012, family-run husband-and-wife team, love the community
- [x] Link to full `/about` page

### 2.7 Reviews Section
- [x] Carousel or grid of Google/Nextdoor star reviews (★★★★★)
- [x] Show reviewer name, star rating, and short quote
- [x] Link "Read more reviews" to Google Business Profile

### 2.8 Booking/Contact Form
- [x] Fields: Name, Phone, Email, Address (Street, City, Zip), Brand & Model, Issue Description, Preferred Time (Morning / Afternoon / Evening / Soonest)
- [x] Show hours near form: *Mon–Fri 9am–5pm | Evening & Weekend by request*
- [x] Add microcopy: *"Most issues diagnosed on the first visit"*
- [x] Add reassurance: *"$100 service fee applied to cost of repair if we fix it"*
- [x] Display "(916) 836-5544 — Call or Text" prominently above/below form

### 2.9 Mobile UX
- [x] Persistent "Call or Text" sticky bar at bottom on mobile
- [x] All tap targets ≥ 44px
- [x] Form fields large and thumb-friendly
- [x] Prioritize speed — no heavy carousels or unoptimized images

---

## 🟡 Phase 3 — Additional Pages

### 3.1 Services Page (`/services`)
- [x] Rewrite Service Charge section more clearly:
  - $100 service fee covers trip, full inspection, and upfront repair estimate
  - Fee applied to labor cost if repair is completed
  - 90-day warranty on all parts and labor
  - No extra charge for evenings or weekends
- [x] List all appliances repaired (icon cards, same as homepage)
- [x] List all brands serviced (Admiral, Amana, Electrolux, GE, GE Monogram, JennAir, KitchenAid, LG, Maytag, Roper, Samsung, Whirlpool, Frigidaire, Kenmore, Hotpoint)
- [x] Repeat "Schedule Service" CTA at top and bottom

### 3.2 Service Areas Page (`/service-areas`)
- [x] Dedicated H2 sections for each city:
  - El Dorado Hills, Cameron Park, Shingle Springs, Diamond Springs, Rescue, Latrobe, Folsom, El Dorado
- [x] 2–3 sentences per city with local relevance and CTA
- [x] Embed Google Map of service zone
- [x] This page is critical for local SEO — keyword-dense but natural

### 3.3 About Page (`/about`)
- [ ] Keep family photo — it builds trust
- [x] Expand story: moved to EDH in 2012, fell in love with the golden hills (hence the logo), husband-and-wife team, 17+ years of experience
- [x] Highlight community involvement (Nextdoor Fave, Telegraph Best of EDH/Folsom)
- [x] Add "Schedule Service" CTA

### 3.4 Contact Page (`/contact`)
- [x] Full booking form (same fields as homepage)
- [x] NAP block: name, address, phone, email, hours
- [x] Embed Google Map
- [x] Link to Facebook and Instagram

---

## 🟢 Phase 4 — SEO Implementation

### 4.1 On-Page SEO
- [x] Set unique `<title>` tags per page:
  - Home: `EDH Appliance Repair | Appliance Repair in El Dorado Hills, CA`
  - Services: `Appliance Repair Services in El Dorado Hills | EDH Appliance Repair`
  - Service Areas: `Service Areas — El Dorado Hills, Folsom & Nearby | EDH Appliance Repair`
  - About: `About Us | EDH Appliance Repair`
  - Contact: `Schedule Appliance Repair in El Dorado Hills | EDH Appliance Repair`
- [x] Write meta descriptions (140–160 chars) for every page
- [x] One H1 per page — location + service focused
- [x] H2s for major sections (services, trust, reviews, booking)
- [x] Naturally use target keywords throughout copy:
  - "appliance repair El Dorado Hills"
  - "refrigerator repair near me"
  - "washer and dryer repair El Dorado Hills"
  - "local appliance technician"
  - "dishwasher repair Cameron Park"

### 4.2 Local SEO
- [x] Ensure NAP is identical everywhere (site header, footer, Contact page, Google Business, Yelp, Facebook):
  - **EDH Appliance Repair**
  - **3941 Park Dr Ste 20-539, El Dorado Hills, CA 95762**
  - **(916) 836-5544**
- [ ] Claim and optimize Google Business Profile (hours, photos, services, reviews)
- [ ] Add/update listings on Yelp, Facebook, Nextdoor, and Angi
- [x] Encourage customers to leave Google reviews (add a link to Contact page)

### 4.3 Schema Markup
- [x] Add `LocalBusiness` JSON-LD schema to every page:
  ```json
  {
    "@type": "HomeAndConstructionBusiness",
    "name": "EDH Appliance Repair",
    "address": {
      "streetAddress": "3941 Park Dr Ste 20-539",
      "addressLocality": "El Dorado Hills",
      "addressRegion": "CA",
      "postalCode": "95762"
    },
    "telephone": "+19168365544",
    "openingHours": "Mo-Fr 09:00-17:00",
    "url": "https://edhappliancerepair.com"
  }
  ```
- [x] Add `Review` schema for testimonials section
- [ ] Add `FAQPage` schema if FAQ section is added

### 4.4 Image Optimization
- [ ] Rename all image files descriptively:
  - `el-dorado-hills-appliance-repair-technician.jpg`
  - `edh-appliance-repair-family-team.jpg`
  - `refrigerator-repair-el-dorado-hills.jpg`
- [ ] Write descriptive alt text for every image
- [ ] Compress all images (WebP format preferred, with JPG fallback)
- [ ] Use lazy loading for below-the-fold images

_Note: image optimization work remains blocked until the actual site photos/assets are added to the repo._

---

## 🔵 Phase 5 — Technical & Performance

### 5.1 Core Web Vitals
- [x] Target LCP (Largest Contentful Paint) < 2.5s
- [x] Minimize layout shift (CLS < 0.1) — no dynamic ad injections
- [x] Minimize render-blocking JS
- [ ] Use a CDN for asset delivery

### 5.2 Accessibility
- [x] High-contrast text (WCAG AA minimum)
- [x] Proper `<label>` elements for all form fields
- [x] Logical heading hierarchy (H1 → H2 → H3)
- [x] Keyboard navigable
- [x] Focus indicators on all interactive elements

### 5.3 Analytics & Tracking
- [x] Install Google Analytics 4 (GA4)
- [ ] Set up Google Search Console and verify site
- [x] Create conversion goals for:
  - Form submissions
  - Click-to-call events
  - "Schedule Service" button clicks
- [x] Install Google Tag Manager for easy future tag management

### 5.4 Miscellaneous
- [x] Add Privacy Policy page (required for reCAPTCHA/GA)
- [x] Add Terms & Conditions page (already linked in current site footer)
- [ ] Ensure 301 redirects from old GoDaddy URLs to new URLs
- [ ] Test all forms for deliverability (confirm emails arrive at service@edhappliancerepair.com)
- [ ] Cross-browser test: Chrome, Safari, Firefox, Edge
- [ ] Mobile test on iOS and Android

---

## 📋 Current Site Assets to Preserve

| Asset | Action |
|---|---|
| Family photo (homepage + about) | Keep — high trust signal |
| Award badge logos (Telegraph, Nextdoor) | Keep and display prominently |
| Instagram feed photos | Keep feed section or link to profile |
| Review quotes (Heather A., Erick O., Jamie T., Casey W.) | Keep — use as testimonials |
| Brand colors (navy blue + gold) | Keep — strong and recognizable |
| Logo (EDH with golden hills motif) | Keep — use in sticky header |

---

## 🚫 Things to Remove / Fix

- [ ] Remove "Powered by GoDaddy Airo" from footer
- [ ] Fix missing Services page link from homepage nav (currently buried)
- [ ] Remove heavy full-width logo image as hero — replace with actual hero section
- [ ] Fix the social media handles section (currently just shows `@edhappliancerepair` as text, not a link)
- [ ] Update copyright year (currently says © 2020)

---

## ✅ Quick Wins (Do First for Demo)

1. Hero section with clear H1, CTA, and phone number
2. Award badges displayed prominently above the fold
3. Services as icon cards instead of a bullet list
4. Real review quotes displayed as testimonials
5. Sticky header with phone number visible at all times
6. Mobile click-to-call button
7. Proper page title and meta description on homepage
