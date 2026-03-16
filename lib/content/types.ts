export type FaqItem = {
  question: string;
  answer: string;
};

export type ServiceLandingPage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  intro: string;
  problemSigns: string[];
  commonRepairs: string[];
  brands: string[];
  faq: FaqItem[];
  relatedCitySlugs: string[];
};

export type CityLandingPage = {
  slug: string;
  city: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  intro: string;
  localContext: string[];
  serviceHighlights: string[];
  faq: FaqItem[];
  relatedServiceSlugs: string[];
};

export type ResourceSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ResourceArticle = {
  slug: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  keywords: string[];
  bodySections: ResourceSection[];
  cta: {
    title: string;
    description: string;
    href: string;
    label: string;
  };
};

export type LeadSubmission = {
  name: string;
  phone: string;
  email?: string;
  address?: string;
  brandModel: string;
  preferredTime: string;
  issueDescription: string;
  sourcePath: string;
};

export type ReviewRequestPayload = {
  customerName: string;
  customerEmail: string;
  serviceType: string;
  city: string;
  completedAt: string;
};
