# EDH Appliance Repair — Improvement Phases

**Site:** https://edh-appliance-repair.vercel.app/  
**Goal:** Demo-ready → production-ready → SEO growth engine

---

## Phase 1 — Quick Wins (Before the Demo)
> Low effort, high visibility. Get these done first so the demo looks polished.

- [x] **Replace service card letter placeholders with real icons**  
  The cards currently show R, F, O, C, TC, OM etc. Swap for SVG appliance icons. This is the most visually obvious rough edge on the current build.

- [x] **Rename the form submit button**  
  Change `"Start Email Request"` → `"Submit Service Request"`  
  Add a sub-line: *"We'll call or text you to confirm your appointment."*

- [x] **Improve the Issue Description placeholder**  
  Change from `"Issue Description"` → `"Briefly describe what's going wrong (e.g., washer not draining, fridge not cooling)"`

- [x] **Add privacy reassurance under the form**  
  One line: *"Your information is only used to schedule your service — no spam, ever."*

- [x] **Sharpen the hero subheadline**  
  Current: *"Major appliance repair for the problems that stop the house"*  
  Change to: *"Major appliance repair for the breakdowns that bring your home to a stop."*

- [x] **Strengthen the primary CTA button**  
  "Schedule Service" and "Call or Text" currently feel equal weight. Make "Schedule Service" larger, bolder fill color, and add a subtle hover animation (scale or shadow).

---

## Phase 2 — UI Polish & Conversion Lift
> Medium effort. Makes the site feel production-grade and improves booking rate.

- [ ] **Turn award text into badge chips**  
  "Telegraph Best of EDH/Folsom 2023 · 2024 · Nextdoor Fave 2022 · 2023" are plain text. Convert to styled pill chips or badge cards with a star/icon so they read as real accolades.

- [ ] **Separate "WHY NEIGHBORS CALL FIRST" and "WHY CHOOSE US"**  
  The two sections blend together. Give "Why Choose Us" (items 01–04) a distinct 2-column icon grid layout. Give the quick-stats row (Hours, Service Fee, Coverage) its own 3-column card strip with icons.

- [ ] **Upgrade review cards**  
  Replace basic blockquotes with proper cards: border, drop shadow, reviewer initials circle, styled ★★★★★ rating. Change "Read more reviews" from a plain link to a styled button.

- [ ] **Add section breathing room**  
  Increase vertical padding between major sections (Social Proof → Services → Service Area → About → Book Service) to at least 80–100px so each module feels distinct.

- [ ] **Add mobile persistent bottom bar**  
  Fixed bar at the bottom of the screen on mobile with two large tap targets side-by-side:  
  `📞 Call or Text (916) 836-5544` | `📅 Schedule`  
  "Schedule" should scroll to the booking form.

- [ ] **Add FAQ accordion near the booking form**  
  4 collapsible items just above or below the form:
  - *"What does the $100 service fee cover?"*
  - *"Do you charge extra for evenings or weekends?"*
  - *"What brands do you service?"*
  - *"How quickly can you come out?"*

- [ ] **Reduce form friction**  
  9 fields is a lot. Consider combining Street Address + City + Zip into one Address field, and making Email optional. Fewer required fields = more completions.

- [ ] **Expand the About section copy**  
  Add one sentence about the service experience: on-time arrivals, clear communication, clean workspace. Specifics build more trust than general claims.

---

## Phase 3 — SEO & Technical Foundation
> Sets up the site to rank and perform well in production.

- [ ] **Add JSON-LD LocalBusiness schema to every page**
  ```json
  {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "EDH Appliance Repair",
    "url": "https://edhappliancerepair.com",
    "telephone": "+19168365544",
    "email": "service@edhappliancerepair.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3941 Park Dr Ste 20-539",
      "addressLocality": "El Dorado Hills",
      "addressRegion": "CA",
      "postalCode": "95762",
      "addressCountry": "US"
    },
    "openingHours": "Mo-Fr 09:00-17:00",
    "areaServed": ["El Dorado Hills", "Folsom", "Cameron Park", "Shingle Springs", "Diamond Springs", "Rescue", "Latrobe", "El Dorado"]
  }
  ```

- [ ] **Confirm per-route `<title>` and `<meta description>`**

  | Route | Title | Meta Description |
  |---|---|---|
  | `/` | `EDH Appliance Repair \| Appliance Repair in El Dorado Hills, CA` | Local appliance repair in El Dorado Hills. Fast, reliable service for refrigerators, washers, dryers, ovens and more. Call (916) 836-5544. |
  | `/services` | `Appliance Repair Services \| EDH Appliance Repair` | Major appliance repair in El Dorado Hills — refrigerators, washers, dryers, ovens, dishwashers and more. $100 service fee applied to repair cost. |
  | `/service-areas` | `Service Areas — El Dorado Hills & Nearby \| EDH Appliance Repair` | Serving El Dorado Hills, Folsom, Cameron Park, Shingle Springs and surrounding communities. Call or text to schedule. |
  | `/about` | `About Us \| EDH Appliance Repair` | Family-owned appliance repair in El Dorado Hills since 2012. Meet the husband-and-wife team. |
  | `/contact` | `Schedule Service \| EDH Appliance Repair` | Schedule an appliance repair in El Dorado Hills. Call, text, or submit a request online. (916) 836-5544. |

- [ ] **Audit heading hierarchy**  
  Confirm exactly one `<h1>` per page (the hero title). All section headings `<h2>`, sub-items `<h3>`. Check in DevTools or use Ahrefs Webmaster.

- [ ] **Add descriptive alt text to all images**  
  Every `<img>` needs a location + service description:  
  `alt="Technician performing refrigerator repair in El Dorado Hills kitchen"`

- [ ] **Compress and lazy-load images**  
  Use WebP format, target under 100kb per image, add `loading="lazy"` to all below-fold images. Keep the hero image eager-loaded for LCP.

- [ ] **Check color contrast on the gold palette**  
  Gold on white may not meet WCAG AA (4.5:1 ratio). Test at webaim.org/resources/contrastchecker and darken if used as text.

- [ ] **Verify "Skip to content" focuses correctly**  
  Tab from the browser address bar and confirm `#main-content` is focused properly for keyboard and screen reader users.

- [ ] **Confirm all form fields have `<label>` elements**  
  Every input needs a real `<label>`, not just `aria-label` or placeholder text.

---

## Phase 4 — SEO Growth (Post-Launch)
> Higher effort, longer-term ranking strategy. Build these out after the site is live.

- [ ] **Create individual service landing pages**  
  Each appliance type gets its own URL targeting high-intent local searches:
  - `/services/refrigerator-repair-el-dorado-hills`
  - `/services/washer-dryer-repair-el-dorado-hills`
  - `/services/dishwasher-repair-el-dorado-hills`
  - `/services/oven-range-repair-el-dorado-hills`  
  Link to each from the service cards on the homepage and services page.

- [ ] **Build out city-specific service area pages**  
  Each city gets 2–3 paragraphs with local context and a CTA:
  - `/service-areas/folsom`
  - `/service-areas/cameron-park`
  - `/service-areas/shingle-springs`
  - (and remaining cities in the service zone)

- [ ] **Set up Google Analytics 4 + Search Console**  
  Track form submissions, click-to-call events, and "Schedule Service" button clicks as conversions.

- [ ] **Start a Google review generation process**  
  Add a direct Google review link to the confirmation email or follow-up text after a completed repair.

- [ ] **Consider a simple blog or FAQ section**  
  Even 4–6 posts (e.g., "Why is my refrigerator not cooling?") can capture long-tail search traffic and funnel into the booking form.
