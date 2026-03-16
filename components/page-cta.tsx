import Link from "next/link";

type PageCtaProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  primaryTrackEvent?: string;
  pageType?: string;
  contentSlug?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function PageCta({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  primaryTrackEvent = "schedule_service_click",
  pageType,
  contentSlug,
  secondaryHref,
  secondaryLabel,
}: PageCtaProps) {
  return (
    <section className="section-card rounded-[2rem] p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">{eyebrow}</p>
      <div className="mt-3 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-[var(--brand-strong)]">{title}</h2>
          <p className="mt-3 text-base leading-8 text-[var(--muted)]">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href={primaryHref}
            data-track-event={primaryTrackEvent}
            data-track-label={primaryLabel}
            data-page-type={pageType}
            data-content-slug={contentSlug}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--brand)] px-6 py-3 text-base font-semibold !text-white transition hover:bg-[var(--brand-strong)]"
          >
            {primaryLabel}
          </Link>
          {secondaryHref && secondaryLabel ? (
            <Link
              href={secondaryHref}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--border-strong)] bg-white px-6 py-3 text-base font-semibold text-[var(--brand-strong)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
