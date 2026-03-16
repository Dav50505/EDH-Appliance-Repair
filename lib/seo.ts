import type { Metadata } from "next";

import type { CityLandingPage, FaqItem, ResourceArticle, ServiceLandingPage } from "@/lib/content/types";
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

export function createBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}

export function createFaqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function createServiceSchema(service: ServiceLandingPage) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} in El Dorado Hills`,
    description: service.metaDescription,
    areaServed: service.relatedCitySlugs.map((slug) => ({
      "@type": "City",
      name: slug
        .split("-")
        .map((part) => `${part[0].toUpperCase()}${part.slice(1)}`)
        .join(" "),
    })),
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: siteConfig.name,
      telephone: "+19168365544",
      url: siteConfig.url,
    },
    serviceType: service.title,
    url: new URL(`/services/${service.slug}`, siteConfig.url).toString(),
  };
}

export function createCityLocalBusinessSchema(city: CityLandingPage) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.name,
    url: new URL(`/service-areas/${city.slug}`, siteConfig.url).toString(),
    telephone: "+19168365544",
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "3941 Park Dr Ste 20-539",
      addressLocality: "El Dorado Hills",
      addressRegion: "CA",
      postalCode: "95762",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: city.city,
    },
    description: city.metaDescription,
  };
}

export function createArticleSchema(article: ResourceArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    mainEntityOfPage: new URL(`/resources/${article.slug}`, siteConfig.url).toString(),
    keywords: article.keywords.join(", "),
  };
}

export function createCityPageMetadata(city: CityLandingPage): Metadata {
  return createPageMetadata({
    title: city.metaTitle,
    description: city.metaDescription,
    path: `/service-areas/${city.slug}`,
    keywords: [city.metaTitle, `${city.city} appliance repair`, `${city.city} refrigerator repair`],
  });
}

export function createServicePageMetadata(service: ServiceLandingPage): Metadata {
  return createPageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    keywords: [service.metaTitle, `${service.title} El Dorado Hills`, "local appliance repair"],
  });
}

export function createArticleMetadata(article: ResourceArticle): Metadata {
  return createPageMetadata({
    title: article.metaTitle,
    description: article.metaDescription,
    path: `/resources/${article.slug}`,
    keywords: article.keywords,
  });
}
