import type { Metadata } from "next";

import { reviewHighlights, serviceAreas, siteConfig, socialLinks } from "@/lib/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
};

const defaultKeywords = [
  "appliance repair El Dorado Hills",
  "refrigerator repair near me",
  "washer and dryer repair El Dorado Hills",
  "local appliance technician",
  "dishwasher repair Cameron Park",
] as const;

export function createPageMetadata({
  title,
  description,
  path,
  keywords = defaultKeywords,
}: PageMetadataOptions): Metadata {
  const canonicalUrl = new URL(path, siteConfig.url).toString();

  return {
    title: {
      absolute: title,
    },
    description,
    keywords: [...keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function createLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: "+19168365544",
    email: siteConfig.email,
    openingHours: "Mo-Fr 09:00-17:00",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3941 Park Dr Ste 20-539",
      addressLocality: "El Dorado Hills",
      addressRegion: "CA",
      postalCode: "95762",
      addressCountry: "US",
    },
    areaServed: serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    sameAs: socialLinks.map((link) => link.href),
  };
}

export function createReviewSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: reviewHighlights.map((review, index) => ({
      "@type": "Review",
      position: index + 1,
      reviewBody: review.quote,
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5,
      },
      author: {
        "@type": "Person",
        name: review.name,
      },
      itemReviewed: {
        "@type": "HomeAndConstructionBusiness",
        name: siteConfig.name,
      },
      publisher: {
        "@type": "Organization",
        name: review.source,
      },
    })),
  };
}
