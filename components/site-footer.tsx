import Link from "next/link";

import { cityLandingPages } from "@/lib/content/cities";
import { resourceArticles } from "@/lib/content/resources";
import { serviceLandingPages } from "@/lib/content/services";
import { legalNavItems, navItems, siteConfig } from "@/lib/site";

export function SiteFooter() {
  const featuredServices = serviceLandingPages.slice(0, 4);
  const featuredCities = cityLandingPages.slice(0, 4);
  const featuredResources = resourceArticles.slice(0, 3);

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--brand-strong)] text-[var(--surface)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.8fr_0.9fr_1fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent-soft)]">Appliance Repair</p>
          <h2 className="text-2xl font-semibold">{siteConfig.name}</h2>
          <p className="max-w-md text-sm leading-6 text-white/76">
            Local appliance repair in El Dorado Hills, Folsom, Cameron Park, Shingle Springs, Rescue, and nearby foothill communities.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-soft)]">Navigation</h3>
          <div className="grid gap-3 text-sm">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-white/80 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-6 text-sm">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-soft)]">Repair Pages</h3>
            <div className="grid gap-3">
              {featuredServices.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="text-white/80 transition hover:text-white">
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-soft)]">Cities</h3>
            <div className="grid gap-3">
              {featuredCities.map((city) => (
                <Link key={city.slug} href={`/service-areas/${city.slug}`} className="text-white/80 transition hover:text-white">
                  {city.city}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-3 text-sm text-white/80">
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-soft)]">Contact</h3>
          <p>{siteConfig.address}</p>
          <a href={siteConfig.phoneHref} className="block hover:text-white">
            {siteConfig.phoneDisplay}
          </a>
          <a href={`mailto:${siteConfig.email}`} className="block hover:text-white">
            {siteConfig.email}
          </a>
          <p>{siteConfig.hours}</p>
          <div className="pt-3">
            <Link href="/resources" className="block hover:text-white">
              Appliance Repair Resources
            </Link>
            {featuredResources.map((article) => (
              <Link key={article.slug} href={`/resources/${article.slug}`} className="block hover:text-white">
                {article.title}
              </Link>
            ))}
            {legalNavItems.map((item) => (
              <Link key={item.href} href={item.href} className="block hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
