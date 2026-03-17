import { ContentImage } from "@/components/content-image";
import { PageCta } from "@/components/page-cta";
import { SectionHero } from "@/components/section-hero";
import { createPageMetadata } from "@/lib/seo";
import { editorialImages, trustBadges } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "About Us | EDH Appliance Repair",
  description: "Family-owned appliance repair in El Dorado Hills since 2012. Meet the husband-and-wife team.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <SectionHero
        eyebrow="About The Team"
        title="Meet the local appliance repair team serving El Dorado Hills"
        description="EDH Appliance Repair has been serving local homeowners since moving to El Dorado Hills in 2012, pairing more than 17 years of hands-on repair experience with the kind of communication and follow-through neighbors recommend."
      />

      <section className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <article className="section-card rounded-[2rem] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Family Photo</p>
          <div className="mt-6 space-y-5">
            <ContentImage
              src={editorialImages.aboutFamily.src}
              alt={editorialImages.aboutFamily.alt}
              width={editorialImages.aboutFamily.width}
              height={editorialImages.aboutFamily.height}
              sizes={editorialImages.aboutFamily.sizes}
              className="aspect-[729/730]"
            />
            <div className="rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(23,50,93,0.95),rgba(14,34,67,0.86))] p-6 text-white">
              <div className="rounded-[1.5rem] border border-white/16 bg-white/8 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent-soft)]">El Dorado Hills roots</p>
                <h3 className="mt-4 text-3xl font-semibold">Family-run since 2012</h3>
                <p className="mt-4 max-w-md text-base leading-8 text-white/80">
                  Family ownership shapes every service call with on-time arrivals, clear communication, and a clean workspace before the job is wrapped up.
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="section-card rounded-[2rem] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Our Story</p>
          <div className="mt-6 space-y-5 text-base leading-8 text-[var(--muted)]">
            <p>
              EDH Appliance Repair began after the family moved to El Dorado Hills in 2012 and fell in love with the golden hills, tight-knit neighborhoods, and the kind of local relationships that still drive the business today.
            </p>
            <p>
              The company is still run by a husband-and-wife team, and that ownership shows up in how service calls are handled: clear communication, honest recommendations, and a strong preference for doing the repair right instead of rushing through the visit.
            </p>
            <p>
              With more than 17 years of appliance repair experience, the team works on the major kitchen and laundry appliances local homeowners depend on most, always with upfront diagnostics and a practical plan for next steps.
            </p>
          </div>
        </article>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <article className="section-card rounded-[2rem] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Community Credibility</p>
          <h2 className="mt-2 text-3xl font-semibold text-[var(--brand-strong)]">Local recognition that matches the word-of-mouth reputation</h2>
          <div className="mt-6 grid gap-4">
            <div className="rounded-[1.75rem] border border-[var(--border)] bg-white/78 p-5">
              <h3 className="text-xl font-semibold text-[var(--brand-strong)]">Nextdoor Neighborhood Fave</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                Neighborhood referrals matter in this business, and repeat recognition on Nextdoor reflects the trust earned inside the communities EDH Appliance Repair serves.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-[var(--border)] bg-white/78 p-5">
              <h3 className="text-xl font-semibold text-[var(--brand-strong)]">Telegraph Best of EDH/Folsom</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                Awards from the Telegraph reinforce the company’s standing across El Dorado Hills and Folsom as a dependable local option for major appliance repair.
              </p>
            </div>
          </div>
        </article>

        <article className="section-card rounded-[2rem] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Recognitions</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {trustBadges.map((badge) => (
              <span
                key={`${badge.source}-${badge.label}-${badge.year}`}
                className="inline-flex min-h-11 items-center rounded-full border border-[var(--accent)] bg-[var(--accent-soft)] px-4 py-2 text-sm font-semibold text-[var(--brand-strong)]"
              >
                {badge.source} {badge.label} {badge.year}
              </span>
            ))}
          </div>
          <div className="mt-6 rounded-[1.75rem] border border-[var(--border)] bg-white/78 p-5">
            <p className="text-sm leading-7 text-[var(--foreground)]">
              The golden-hills logo is not just branding. It reflects the area the family chose to call home and the reason the company stays focused on serving nearby homeowners well.
            </p>
          </div>
        </article>
      </section>

      <PageCta
        eyebrow="Need Service"
        title="Work with the same local team your neighbors call"
        description="When you are ready to schedule service, the booking route is already in place with the full request form and direct call or text options."
        primaryHref="/contact"
        primaryLabel="Schedule Service"
      />
    </>
  );
}
