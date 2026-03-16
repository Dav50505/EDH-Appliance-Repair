import Link from "next/link";

import { ApplianceIcon } from "@/components/appliance-icon";
import { getPrimaryServiceSlug } from "@/lib/content/services";
import { applianceServices } from "@/lib/site";

type ServiceGridProps = {
  ctaHref?: string;
};

export function ServiceGrid({ ctaHref = "/contact" }: ServiceGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {applianceServices.map((service) => (
        <article key={service.name} className="rounded-[1.75rem] border border-[var(--border)] bg-white/78 p-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand)] text-white shadow-[0_12px_24px_rgba(23,50,93,0.18)]">
            <ApplianceIcon appliance={service.name} />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-[var(--brand-strong)]">{service.name} Repair</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{service.description}</p>
          <Link
            href={ctaHref === "/contact" ? `/services/${getPrimaryServiceSlug(service.name)}` : ctaHref}
            data-track-event="schedule_service_click"
            data-track-label={`${service.name} Repair Card`}
            data-page-type="services-index"
            data-content-slug={getPrimaryServiceSlug(service.name)}
            className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--brand)] transition hover:text-[var(--brand-strong)]"
          >
            View Repair Page
          </Link>
        </article>
      ))}
    </div>
  );
}
