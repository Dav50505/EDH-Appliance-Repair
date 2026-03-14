import { siteConfig, socialLinks } from "@/lib/site";

type ContactSidebarProps = {
  showSocialLinks?: boolean;
  showMapLink?: boolean;
};

export function ContactSidebar({ showSocialLinks = false, showMapLink = false }: ContactSidebarProps) {
  return (
    <aside className="section-card rounded-[2rem] p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Contact Details</p>
      <div className="mt-6 space-y-5">
        <div className="rounded-[1.5rem] border border-[var(--border)] bg-white/78 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">Call or Text</p>
          <a
            href={siteConfig.phoneHref}
            data-track-event="click_to_call"
            data-track-label="Contact Sidebar Call CTA"
            className="mt-2 block text-2xl font-semibold text-[var(--brand-strong)]"
          >
            {siteConfig.phoneDisplay}
          </a>
        </div>
        <div className="rounded-[1.5rem] border border-[var(--border)] bg-white/78 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">Email</p>
          <a href={`mailto:${siteConfig.email}`} className="mt-2 block text-base leading-7 text-[var(--foreground)]">
            {siteConfig.email}
          </a>
        </div>
        <div className="rounded-[1.5rem] border border-[var(--border)] bg-white/78 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">Address</p>
          <p className="mt-2 text-base leading-7 text-[var(--foreground)]">{siteConfig.address}</p>
          {showMapLink ? (
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex text-sm font-semibold text-[var(--brand)] transition hover:text-[var(--brand-strong)]"
            >
              Open in Google Maps
            </a>
          ) : null}
        </div>
        <div className="rounded-[1.5rem] border border-[var(--border)] bg-white/78 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">Hours</p>
          <p className="mt-2 text-base leading-7 text-[var(--foreground)]">{siteConfig.hours}</p>
        </div>
        <div className="rounded-[1.5rem] border border-[var(--border)] bg-white/78 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">Service Promise</p>
          <p className="mt-2 text-base leading-7 text-[var(--foreground)]">
            $100 service fee applied to the labor cost when we complete the repair, with no extra evening or weekend fee.
          </p>
        </div>
        <div className="rounded-[1.5rem] border border-[var(--border)] bg-white/78 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">Google Reviews</p>
          <p className="mt-2 text-base leading-7 text-[var(--foreground)]">
            Reviews help more El Dorado Hills homeowners find a reliable local appliance technician when they need service fast.
          </p>
          <a
            href={siteConfig.googleReviewUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex text-sm font-semibold text-[var(--brand)] transition hover:text-[var(--brand-strong)]"
          >
            Read or leave a Google review
          </a>
        </div>
        {showSocialLinks ? (
          <div className="rounded-[1.5rem] border border-[var(--border)] bg-white/78 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">Social</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center rounded-full border border-[var(--border-strong)] px-4 py-2 text-sm font-semibold text-[var(--brand-strong)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </aside>
  );
}
