import Link from "next/link";
import { notFound } from "next/navigation";

import { FaqList } from "@/components/faq-list";
import { PageCta } from "@/components/page-cta";
import { SectionHero } from "@/components/section-hero";
import { cityLandingPages, cityLandingPagesBySlug } from "@/lib/content/cities";
import { serviceLandingPagesBySlug } from "@/lib/content/services";
import { createBreadcrumbSchema, createCityLocalBusinessSchema, createCityPageMetadata, createFaqSchema } from "@/lib/seo";

type CityDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return cityLandingPages.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }: CityDetailPageProps) {
  const { slug } = await params;
  const city = cityLandingPagesBySlug[slug];

  if (!city) {
    return {};
  }

  return createCityPageMetadata(city);
}

export default async function CityDetailPage({ params }: CityDetailPageProps) {
  const { slug } = await params;
  const city = cityLandingPagesBySlug[slug];

  if (!city) {
    notFound();
  }

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas" },
    { name: city.city, path: `/service-areas/${city.slug}` },
  ]);
  const citySchema = createCityLocalBusinessSchema(city);
  const faqSchema = createFaqSchema(city.faq);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SectionHero eyebrow="City Service Page" title={city.heroTitle} description={city.heroDescription} />

      <section className="section-card rounded-[2rem] p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Local Context</p>
        <h2 className="mt-2 text-3xl font-semibold text-[var(--brand-strong)]">Why homeowners in {city.city} book local appliance service</h2>
        <p className="mt-4 text-base leading-8 text-[var(--muted)]">{city.intro}</p>
        <div className="mt-6 space-y-4">
          {city.localContext.map((paragraph) => (
            <p key={paragraph} className="text-base leading-8 text-[var(--muted)]">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="section-card rounded-[2rem] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">What We Handle</p>
          <h2 className="mt-2 text-3xl font-semibold text-[var(--brand-strong)]">Repair categories commonly booked in {city.city}</h2>
          <ul className="mt-6 grid gap-4">
            {city.serviceHighlights.map((item) => (
              <li key={item} className="rounded-[1.75rem] border border-[var(--border)] bg-white/80 p-5 text-base leading-7 text-[var(--foreground)]">
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="section-card rounded-[2rem] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Related Repair Pages</p>
          <h2 className="mt-2 text-3xl font-semibold text-[var(--brand-strong)]">Deep links for the appliance issues people in {city.city} search most</h2>
          <div className="mt-6 grid gap-4">
            {city.relatedServiceSlugs.map((serviceSlug) => {
              const service = serviceLandingPagesBySlug[serviceSlug];

              if (!service) {
                return null;
              }

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="rounded-[1.75rem] border border-[var(--border)] bg-white/80 p-5 transition hover:border-[var(--brand)]"
                >
                  <h3 className="text-xl font-semibold text-[var(--brand-strong)]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{service.heroDescription}</p>
                </Link>
              );
            })}
          </div>
        </article>
      </section>

      <FaqList title={`Questions about appliance repair in ${city.city}`} items={city.faq} />

      <PageCta
        eyebrow="Ready To Book"
        title={`Schedule appliance repair in ${city.city}`}
        description="Submit the booking request with the appliance type, model, symptoms, and preferred time so the scheduling follow-up can move quickly."
        primaryHref="/contact"
        primaryLabel="Schedule Service"
        pageType="city-detail"
        contentSlug={city.slug}
        secondaryHref="/services"
        secondaryLabel="Browse Repair Services"
      />
    </>
  );
}
