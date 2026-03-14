import Link from "next/link";

import { applianceServices } from "@/lib/site";

type ServiceGridProps = {
  ctaHref?: string;
};

export function ServiceGrid({ ctaHref = "/contact" }: ServiceGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {applianceServices.map((service) => (
        <article key={service.name} className="rounded-[1.75rem] border border-[var(--border)] bg-white/78 p-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand)] text-sm font-semibold uppercase tracking-[0.18em] text-white">
            {service.name
              .split(" ")
              .map((word) => word[0])
              .join("")
              .slice(0, 2)}
          </div>
          <h3 className="mt-4 text-xl font-semibold text-[var(--brand-strong)]">{service.name} Repair</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{service.description}</p>
          <Link
            href={ctaHref}
            className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--brand)] transition hover:text-[var(--brand-strong)]"
          >
            Schedule This Repair
          </Link>
        </article>
      ))}
    </div>
  );
}
