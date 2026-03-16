export const siteConfig = {
  name: "EDH Appliance Repair",
  title: "EDH Appliance Repair | Appliance Repair in El Dorado Hills, CA",
  description:
    "Fast, reliable appliance repair in El Dorado Hills, Folsom, Cameron Park, and nearby communities.",
  url: "https://edhappliancerepair.com",
  phoneDisplay: "(916) 836-5544",
  phoneHref: "tel:+19168365544",
  email: "service@edhappliancerepair.com",
  address: "3941 Park Dr Ste 20-539, El Dorado Hills, CA 95762",
  hours: "Mon-Fri 9am-5pm | Evening & Weekend by request",
  googleReviewUrl: "https://www.google.com/search?q=EDH+Appliance+Repair",
  googleMapsUrl: "https://www.google.com/maps?q=3941+Park+Dr+Ste+20-539+El+Dorado+Hills+CA+95762",
} as const;

export const editorialImages = {
  homeHero: {
    src: "/home.png",
    alt: "EDH Appliance Repair owner holding Best of the Best awards.",
    width: 1940,
    height: 2178,
    sizes: "(min-width: 1280px) 36rem, (min-width: 1024px) 42vw, 100vw",
    priority: true,
  },
  aboutFamily: {
    src: "/family.webp",
    alt: "EDH Appliance Repair family team posing together for the About page photo.",
    width: 729,
    height: 730,
    sizes: "(min-width: 1024px) 28rem, 100vw",
  },
  contactDiagnostic: {
    src: "/technician-diagnosis.svg",
    alt: "Illustrated appliance technician diagnosing a kitchen appliance for an El Dorado Hills homeowner.",
    width: 1400,
    height: 960,
    sizes: "(min-width: 1024px) 32rem, 100vw",
  },
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const legalNavItems = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
] as const;

export const serviceAreas = [
  "El Dorado Hills",
  "Cameron Park",
  "Shingle Springs",
  "Diamond Springs",
  "Rescue",
  "Latrobe",
  "Folsom",
  "El Dorado",
] as const;

export const trustBadges = [
  {
    label: "Best of EDH/Folsom",
    source: "Telegraph",
    year: "2023",
  },
  {
    label: "Best of EDH/Folsom",
    source: "Telegraph",
    year: "2024",
  },
  {
    label: "Neighborhood Fave",
    source: "Nextdoor",
    year: "2022",
  },
  {
    label: "Neighborhood Fave",
    source: "Nextdoor",
    year: "2023",
  },
] as const;

export const whyChooseUs = [
  "Locally owned and operated since 2012 by a husband-and-wife team rooted in El Dorado Hills.",
  "Backed by more than 17 years of appliance repair experience across major household brands.",
  "Licensed, insured, and committed to 100% satisfaction on every repair visit.",
  "No extra charge for evening or weekend appointments when your schedule needs flexibility.",
] as const;

export const applianceServices = [
  {
    name: "Refrigerator",
    description: "Cooling issues, leaks, noisy operation, ice makers, and temperature control problems.",
  },
  {
    name: "Freezer",
    description: "Frost buildup, failed defrost cycles, warm compartments, and sealed-system symptoms.",
  },
  {
    name: "Oven",
    description: "Heating inconsistencies, igniter failures, control issues, and bake or broil problems.",
  },
  {
    name: "Cooktop",
    description: "Burner, ignition, indicator light, and surface element repair for daily-use cooking surfaces.",
  },
  {
    name: "Range",
    description: "Full range diagnosis for combined oven and cooktop systems that stop performing reliably.",
  },
  {
    name: "Dishwasher",
    description: "Drain, wash, leak, detergent, and drying performance issues for busy family kitchens.",
  },
  {
    name: "Trash Compactor",
    description: "Switch, ram, motor, and drawer issues for built-in compactors and related controls.",
  },
  {
    name: "Washer",
    description: "Drainage, spin, vibration, door lock, and fill problems handled with clear diagnostics.",
  },
  {
    name: "Dryer",
    description: "No-heat, long dry times, sensor issues, and unusual noise on electric and gas dryers.",
  },
  {
    name: "Over-the-Range Microwave",
    description: "Vent hood, turntable, heating, and control repairs for built-in microwave units.",
  },
] as const;

export const reviewHighlights = [
  {
    name: "Casey W.",
    source: "Local customer",
    quote: "Friendly, professional service that made a stressful appliance issue feel straightforward again.",
  },
  {
    name: "Pablo G.",
    source: "Google review",
    quote: "Short-notice washer help with a fast diagnosis and the needed part already on hand.",
  },
  {
    name: "Cynde D.",
    source: "Google review",
    quote: "Quick response, fair pricing, and clear communication from diagnosis through the repair.",
  },
] as const;

export const aboutHighlights = [
  "After moving to El Dorado Hills in 2012, the family built the business around dependable local service and honest recommendations.",
  "EDH Appliance Repair is still run by a husband-and-wife team that treats every visit like a neighbor referral is on the line.",
  "Their golden-hills branding reflects the community they chose to put down roots in and continue serving every week.",
  "Customers can expect on-time arrivals, clear communication about the repair, and a clean workspace before the job is wrapped up.",
] as const;

export const serviceBrands = [
  "Admiral",
  "Amana",
  "Electrolux",
  "Frigidaire",
  "GE",
  "GE Monogram",
  "Hotpoint",
  "JennAir",
  "Kenmore",
  "KitchenAid",
  "LG",
  "Maytag",
  "Roper",
  "Samsung",
  "Whirlpool",
] as const;

const serviceBrandsSummary = serviceBrands.join(", ");

export const bookingFaqs = [
  {
    question: "What does the $100 service fee cover?",
    answer:
      "The $100 service fee covers the trip to your home, a full diagnosis of the appliance issue, and a clear repair estimate. If we complete the repair, that fee is applied toward the repair cost.",
  },
  {
    question: "Do you charge extra for evenings or weekends?",
    answer:
      "No. Evening and weekend appointments are available by request when the schedule allows, and there is no extra charge for those appointment windows.",
  },
  {
    question: "What brands do you service?",
    answer: `We regularly service major household appliance brands including ${serviceBrandsSummary}. If your brand is not listed, call or text and we can confirm before booking.`,
  },
  {
    question: "How quickly can you come out?",
    answer:
      "Same-day or next-day appointments are often available when openings allow. Call, text, or submit the form and we will follow up with the fastest appointment options currently open.",
  },
] as const;

export const serviceValuePoints = [
  {
    title: "$100 Diagnostic Visit",
    description: "The service fee covers the trip to your home, a full inspection, and an upfront repair estimate before work begins.",
  },
  {
    title: "Applied Toward Repair",
    description: "If you move forward with the repair, that $100 fee is applied to the labor cost so the visit counts toward the solution.",
  },
  {
    title: "90-Day Warranty",
    description: "All completed repairs are backed by a 90-day warranty on parts and labor for added peace of mind after the visit.",
  },
  {
    title: "No Extra Evening Fees",
    description: "Evening and weekend appointments are available by request with no extra charge when timing matters most.",
  },
] as const;

export const cityServiceDetails = [
  {
    city: "El Dorado Hills",
    description:
      "El Dorado Hills homeowners count on EDH Appliance Repair for fast, local response times and service from a team that has lived in the community since 2012.",
    detail:
      "From Serrano kitchens to family laundry rooms across 95762, we help keep the appliances you use every day working with clear recommendations and practical scheduling.",
  },
  {
    city: "Cameron Park",
    description:
      "Cameron Park service calls are handled with the same neighbor-first approach that built the company across the foothills.",
    detail:
      "Whether it is dishwasher repair Cameron Park homeowners need, a refrigerator losing temperature, or a dryer taking too long to finish a cycle, we bring brand-specific diagnostics and straightforward next steps.",
  },
  {
    city: "Shingle Springs",
    description:
      "Shingle Springs residents rely on experienced appliance repair that respects the home, the schedule, and the urgency of a broken kitchen or laundry appliance.",
    detail:
      "We service major household appliances throughout the area with honest assessments, no-pressure estimates, and flexible evening or weekend availability.",
  },
  {
    city: "Diamond Springs",
    description:
      "Diamond Springs homeowners can schedule repair service for major kitchen and laundry appliances without leaving the area to search for a dependable technician.",
    detail:
      "Our team helps with refrigerators, ovens, dishwashers, washers, dryers, and more, always focused on a clean diagnosis and a repair path that makes sense.",
  },
  {
    city: "Rescue",
    description:
      "Rescue families call when they need a local appliance technician who communicates clearly and arrives ready to inspect the issue in full.",
    detail:
      "From noisy washers to dishwashers that stop draining, we troubleshoot the problem carefully and explain the repair cost before work starts.",
  },
  {
    city: "Latrobe",
    description:
      "Latrobe customers get the same reliable appliance repair support trusted across El Dorado County, with scheduling built around real household demands.",
    detail:
      "If your range, cooktop, freezer, or microwave is disrupting the week, we make it easier to get the appliance inspected and a repair estimate in place quickly.",
  },
  {
    city: "Folsom",
    description:
      "Folsom homeowners choose EDH Appliance Repair for responsive service, major-brand familiarity, and a repair process that stays transparent from start to finish.",
    detail:
      "We work on common kitchen and laundry appliance failures throughout Folsom with practical appointment windows and no extra evening or weekend fees.",
  },
  {
    city: "El Dorado",
    description:
      "El Dorado residents can schedule dependable major-appliance repair from a family-run team rooted just down the road in El Dorado Hills.",
    detail:
      "When a refrigerator, oven, dishwasher, washer, or dryer stops cooperating, we provide a full inspection, a clear estimate, and a service plan built for local homeowners.",
  },
] as const;

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/edhappliancerepair",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/edhappliancerepair/",
  },
] as const;
