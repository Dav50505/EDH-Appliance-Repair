import { PageCta } from "@/components/page-cta";
import { SectionHero } from "@/components/section-hero";
import { ServiceGrid } from "@/components/service-grid";
import { createPageMetadata } from "@/lib/seo";
import { serviceBrands, serviceValuePoints } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Appliance Repair Services in El Dorado Hills | EDH Appliance Repair",
  description:
    "See appliance repair services in El Dorado Hills, CA, including pricing, brands serviced, and washer, dryer, refrigerator, and oven repair.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <SectionHero
        eyebrow="Services & Pricing"
        title="Appliance repair services in El Dorado Hills with clear pricing"
        description="EDH Appliance Repair handles major kitchen and laundry appliance issues across El Dorado Hills and nearby communities with upfront diagnostics, major-brand experience, and appointment windows that work for busy households."
      />

      <PageCta
        eyebrow="Schedule Service"
        title="Need the appliance looked at quickly?"
        description="Book service at the top of the page, then review pricing and brand coverage below so you know exactly what to expect before the visit."
        primaryHref="/contact"
        primaryLabel="Schedule Service"
        secondaryHref="/service-areas"
        secondaryLabel="Check Service Area"
      />

      <section className="section-card rounded-[2rem] p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Service Charge</p>
            <h2 className="mt-2 text-3xl font-semibold text-[var(--brand-strong)]">Straightforward pricing before repair work begins</h2>
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {serviceValuePoints.map((point) => (
            <article key={point.title} className="rounded-[1.75rem] border border-[var(--border)] bg-white/78 p-5">
              <h3 className="text-xl font-semibold text-[var(--brand-strong)]">{point.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{point.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card rounded-[2rem] p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Appliances Repaired</p>
            <h2 className="mt-2 text-3xl font-semibold text-[var(--brand-strong)]">Major household appliances we service every week</h2>
          </div>
        </div>

        <div className="mt-8">
          <ServiceGrid />
        </div>

        <p className="mt-6 rounded-[1.5rem] border border-dashed border-[var(--border-strong)] bg-[var(--surface-strong)] px-5 py-4 text-sm leading-7 text-[var(--foreground)]">
          We do not service small home appliances such as garbage disposals, countertop microwaves, toasters, vacuums, or mixers.
        </p>
      </section>

      <section className="section-card rounded-[2rem] p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Brands Serviced</p>
        <h2 className="mt-2 text-3xl font-semibold text-[var(--brand-strong)]">Coverage for the major brands homeowners rely on</h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
          We regularly diagnose and repair common failures across leading appliance brands found throughout El Dorado Hills, Folsom, Cameron Park, and nearby neighborhoods, including washer and dryer repair El Dorado Hills homeowners need fast.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {serviceBrands.map((brand) => (
            <span
              key={brand}
              className="inline-flex min-h-11 items-center rounded-full border border-[var(--border-strong)] bg-white/78 px-4 py-2 text-sm font-semibold text-[var(--brand-strong)]"
            >
              {brand}
            </span>
          ))}
        </div>
      </section>

      <PageCta
        eyebrow="Ready To Book"
        title="Get the inspection scheduled and the estimate in place"
        description="If the appliance is interrupting the week, the fastest next step is a direct booking request. Evening and weekend appointments are available by request at no extra charge."
        primaryHref="/contact"
        primaryLabel="Schedule Service"
        secondaryHref="/about"
        secondaryLabel="Meet The Team"
      />
    </>
  );
}
