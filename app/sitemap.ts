import type { MetadataRoute } from "next";

import { cityLandingPages } from "@/lib/content/cities";
import { resourceArticles } from "@/lib/content/resources";
import { serviceLandingPages } from "@/lib/content/services";
import { legalNavItems, navItems, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = [...navItems, ...legalNavItems].map((item) => ({
    url: `${siteConfig.url}${item.href}`,
    lastModified: now,
    changeFrequency: (item.href === "/" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: item.href === "/" ? 1 : item.href === "/contact" ? 0.9 : 0.8,
  }));

  const serviceEntries = serviceLandingPages.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const cityEntries = cityLandingPages.map((city) => ({
    url: `${siteConfig.url}/service-areas/${city.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const resourceIndex = {
    url: `${siteConfig.url}/resources`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  };

  const articleEntries = resourceArticles.map((article) => ({
    url: `${siteConfig.url}/resources/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...staticEntries, ...serviceEntries, ...cityEntries, resourceIndex, ...articleEntries];
}
