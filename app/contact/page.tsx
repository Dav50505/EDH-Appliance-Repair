import Link from "next/link";

import { ContactBookingForm } from "@/components/contact-booking-form";
import { ContentImage } from "@/components/content-image";
import { ContactSidebar } from "@/components/contact-sidebar";
import { MapEmbed } from "@/components/map-embed";
import { SectionHero } from "@/components/section-hero";
import { resourceArticles } from "@/lib/content/resources";
import { createPageMetadata } from "@/lib/seo";
import { editorialImages, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Schedule Service | EDH Appliance Repair",
  description:
    "Schedule an appliance repair in El Dorado Hills. Call, text, or submit a request online. (916) 836-5544.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <SectionHero
        eyebrow="Contact & Booking"
        title="Schedule appliance repair in El Dorado Hills with a local technician"
        description="Use the full booking form below or call or text directly for appliance repair service in El Dorado Hills and the surrounding foothill communities."
      />

      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <ContactBookingForm
          title="Tell us about the appliance issue"
          description="Most issues are diagnosed on the first visit. Include the appliance brand, model, symptoms, and preferred appointment time so the scheduling follow-up can move faster."
          sourcePath="/contact"
        />
        <ContactSidebar showSocialLinks showMapLink />
      </section>

      <section className="section-card rounded-[2rem] p-8">
        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">What To Expect</p>
            <h2 className="mt-2 text-3xl font-semibold text-[var(--brand-strong)]">A clear diagnosis before any repair work begins</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)]">
              Each visit is built around a full appliance inspection, practical recommendations, and a straightforward estimate so you know what needs attention before approving the repair.
            </p>
          </div>
          <ContentImage
            src={editorialImages.contactDiagnostic.src}
            alt={editorialImages.contactDiagnostic.alt}
            width={editorialImages.contactDiagnostic.width}
            height={editorialImages.contactDiagnostic.height}
            sizes={editorialImages.contactDiagnostic.sizes}
            className="aspect-[7/5]"
          />
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="section-card rounded-[2rem] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">NAP Information</p>
          <h2 className="mt-2 text-3xl font-semibold text-[var(--brand-strong)]">Consistent local business details</h2>
          <div className="mt-6 rounded-[1.75rem] border border-[var(--border)] bg-white/78 p-6">
            <dl className="grid gap-5 text-base leading-8 text-[var(--foreground)]">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">Business Name</dt>
                <dd className="mt-2">{siteConfig.name}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">Address</dt>
                <dd className="mt-2">{siteConfig.address}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">Phone</dt>
                <dd className="mt-2">
                  <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">Email</dt>
                <dd className="mt-2">
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">Hours</dt>
                <dd className="mt-2">{siteConfig.hours}</dd>
              </div>
            </dl>
          </div>
        </article>

        <article className="section-card rounded-[2rem] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Map</p>
          <h2 className="mt-2 text-3xl font-semibold text-[var(--brand-strong)]">Find the service area hub in El Dorado Hills</h2>
          <div className="mt-8">
            <MapEmbed title="EDH Appliance Repair contact map" />
          </div>
        </article>
      </section>

      <section className="section-card rounded-[2rem] p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Google Reviews</p>
        <h2 className="mt-2 text-3xl font-semibold text-[var(--brand-strong)]">Leave a review after your repair visit</h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
          If EDH Appliance Repair helped with refrigerator repair near me searches, dishwasher repair Cameron Park requests, or any other major appliance issue, a Google review helps more local homeowners find a trusted technician.
        </p>
        <a
          href={siteConfig.googleReviewUrl}
          target="_blank"
          rel="noreferrer"
          data-track-event="view_reviews_click"
          data-track-label="Contact Page Reviews CTA"
          className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--brand)] px-6 py-3 text-base font-semibold !text-white transition hover:bg-[var(--brand-strong)]"
        >
          Read or Leave a Google Review
        </a>
      </section>

      <section className="section-card rounded-[2rem] p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Helpful Before You Book</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {resourceArticles.slice(0, 2).map((article) => (
            <Link
              key={article.slug}
              href={`/resources/${article.slug}`}
              className="rounded-[1.75rem] border border-[var(--border)] bg-white/80 p-5 transition hover:border-[var(--brand)]"
            >
              <h2 className="text-xl font-semibold text-[var(--brand-strong)]">{article.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{article.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
