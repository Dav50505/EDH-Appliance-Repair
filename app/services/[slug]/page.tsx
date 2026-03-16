import Link from "next/link";
import { notFound } from "next/navigation";

import { FaqList } from "@/components/faq-list";
import { PageCta } from "@/components/page-cta";
import { SectionHero } from "@/components/section-hero";
import { cityLandingPagesBySlug } from "@/lib/content/cities";
import { serviceLandingPages, serviceLandingPagesBySlug } from "@/lib/content/services";
import { createBreadcrumbSchema, createFaqSchema, createServicePageMetadata, createServiceSchema } from "@/lib/seo";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceLandingPages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = serviceLandingPagesBySlug[slug];

  if (!service) {
    return {};
  }

  return createServicePageMetadata(service);
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = serviceLandingPagesBySlug[slug];

  if (!service) {
    notFound();
  }

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` },
  ]);
  const serviceSchema = createServiceSchema(service);
  const faqSchema = createFaqSchema(service.faq);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SectionHero
        eyebrow="Service Detail"
        title={service.heroTitle}
        description={service.heroDescription}
      />

      <section className="section-card rounded-[2rem] p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Local Repair Overview</p>
        <h2 className="mt-2 text-3xl font-semibold text-[var(--brand-strong)]">{service.title} service built for high-intent local searches and real homeowners</h2>
        <p className="mt-4 max-w-4xl text-base leading-8 text-[var(--muted)]">{service.intro}</p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="section-card rounded-[2rem] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Common Signs</p>
          <h2 className="mt-2 text-3xl font-semibold text-[var(--brand-strong)]">Problems homeowners call about first</h2>
          <ul className="mt-6 grid gap-4">
            {service.problemSigns.map((item) => (
              <li key={item} className="rounded-[1.75rem] border border-[var(--border)] bg-white/80 p-5 text-base leading-7 text-[var(--foreground)]">
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="section-card rounded-[2rem] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">What We Diagnose</p>
          <h2 className="mt-2 text-3xl font-semibold text-[var(--brand-strong)]">Common repair paths after the first visit</h2>
          <ul className="mt-6 grid gap-4">
            {service.commonRepairs.map((item) => (
              <li key={item} className="rounded-[1.75rem] border border-[var(--border)] bg-white/80 p-5 text-base leading-7 text-[var(--foreground)]">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section-card rounded-[2rem] p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Brands Serviced</p>
        <h2 className="mt-2 text-3xl font-semibold text-[var(--brand-strong)]">Major household brands covered across the local service area</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {service.brands.map((brand) => (
            <span
              key={brand}
              className="inline-flex min-h-11 items-center rounded-full border border-[var(--border-strong)] bg-white/80 px-4 py-2 text-sm font-semibold text-[var(--brand-strong)]"
            >
              {brand}
            </span>
          ))}
        </div>
      </section>

      <section className="section-card rounded-[2rem] p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Nearby Cities</p>
        <h2 className="mt-2 text-3xl font-semibold text-[var(--brand-strong)]">Related city pages for the same repair type</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {service.relatedCitySlugs.map((citySlug) => {
            const city = cityLandingPagesBySlug[citySlug];

            if (!city) {
              return null;
            }

            return (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="rounded-[1.75rem] border border-[var(--border)] bg-white/80 p-5 transition hover:border-[var(--brand)]"
              >
                <h3 className="text-xl font-semibold text-[var(--brand-strong)]">{city.city}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{city.heroDescription}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <FaqList title={`Questions about ${service.title.toLowerCase()} service`} items={service.faq} />

      <PageCta
        eyebrow="Schedule Service"
        title={`Need ${service.title.toLowerCase()} service scheduled?`}
        description="Submit the booking request with the appliance brand, model, symptoms, and preferred appointment time, and EDH Appliance Repair will follow up directly."
        primaryHref="/contact"
        primaryLabel="Submit Service Request"
        pageType="service-detail"
        contentSlug={service.slug}
        secondaryHref="/service-areas"
        secondaryLabel="Browse Service Areas"
      />
    </>
  );
}
