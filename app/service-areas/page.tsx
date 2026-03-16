import Link from "next/link";

import { MapEmbed } from "@/components/map-embed";
import { PageCta } from "@/components/page-cta";
import { SectionHero } from "@/components/section-hero";
import { cityLandingPages } from "@/lib/content/cities";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Service Areas — El Dorado Hills & Nearby | EDH Appliance Repair",
  description:
    "Serving El Dorado Hills, Folsom, Cameron Park, Shingle Springs and surrounding communities. Call or text to schedule.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <>
      <SectionHero
        eyebrow="Local Service Area"
        title="Appliance repair coverage across El Dorado Hills and nearby foothill communities"
        description="EDH Appliance Repair serves homeowners throughout El Dorado Hills, Cameron Park, Shingle Springs, Diamond Springs, Rescue, Latrobe, Folsom, and El Dorado with local scheduling, major-brand repair experience, and neighbor-first service."
      />

      <section className="section-card rounded-[2rem] p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Service Zone Map</p>
            <h2 className="mt-2 text-3xl font-semibold text-[var(--brand-strong)]">Centered in El Dorado Hills with flexible scheduling nearby</h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              This service area page is built for local SEO and real homeowners alike, combining location-specific copy with a simple service-zone map that makes coverage clear.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <MapEmbed title="EDH Appliance Repair service area map" />
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {cityLandingPages.map((area) => (
          <article key={area.city} className="section-card rounded-[2rem] p-8">
            <h3 className="text-3xl font-semibold text-[var(--brand-strong)]">{area.city}</h3>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">{area.localContext[0]}</p>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">{area.localContext[1]}</p>
            <Link
              href={`/service-areas/${area.slug}`}
              data-track-event="schedule_service_click"
              data-track-label={`Service Area ${area.city}`}
              data-page-type="areas-index"
              data-content-slug={area.slug}
              className="mt-6 inline-flex min-h-11 items-center rounded-full border border-[var(--border-strong)] px-5 py-3 text-sm font-semibold text-[var(--brand-strong)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
            >
              Explore {area.city} Service Page
            </Link>
          </article>
        ))}
      </section>

      <PageCta
        eyebrow="Booking"
        title="If you are within the service area, the next step is easy"
        description="Send a booking request with the appliance type, model, and symptoms, and EDH Appliance Repair will follow up with scheduling details for your city."
        primaryHref="/contact"
        primaryLabel="Schedule Service"
        secondaryHref="/services"
        secondaryLabel="View Services"
      />
    </>
  );
}
