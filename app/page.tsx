import Link from "next/link";

import { createPageMetadata, createReviewSchema } from "@/lib/seo";
import {
  aboutHighlights,
  applianceServices,
  reviewHighlights,
  serviceAreas,
  siteConfig,
  trustBadges,
  whyChooseUs,
} from "@/lib/site";

const serviceExclusions =
  "We do not service small home appliances such as garbage disposals, countertop microwaves, toasters, vacuums, or mixers.";

const quickFacts = [
  "Same-day or next-day availability when openings allow",
  "$100 service fee applied to repair cost when we complete the fix",
  "Evening and weekend appointments available by request",
] as const;

const bookingFields = [
  { label: "Name", name: "name", type: "text", placeholder: "Your full name" },
  { label: "Phone", name: "phone", type: "tel", placeholder: "(916) 555-1234" },
  { label: "Email", name: "email", type: "email", placeholder: "you@example.com" },
  { label: "Street Address", name: "streetAddress", type: "text", placeholder: "123 Main St" },
  { label: "City", name: "city", type: "text", placeholder: "El Dorado Hills" },
  { label: "Zip", name: "zip", type: "text", placeholder: "95762" },
  { label: "Brand & Model", name: "brandModel", type: "text", placeholder: "Whirlpool WRF555..." },
] as const;

export const metadata = createPageMetadata({
  title: "EDH Appliance Repair | Appliance Repair in El Dorado Hills, CA",
  description:
    "Fast, reliable appliance repair in El Dorado Hills, CA for refrigerators, washers, dryers, ovens, and dishwashers. Call EDH Appliance Repair today.",
  path: "/",
});

export default function HomePage() {
  const reviewSchema = createReviewSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <section className="section-card home-hero overflow-hidden rounded-[2rem] px-6 py-8 sm:px-10 sm:py-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--brand)]">
              Family-run appliance service
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-[var(--brand-strong)] sm:text-5xl lg:text-6xl">
              Fast, Reliable Appliance Repair in El Dorado Hills
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
              Refrigerator, washer, dryer, oven, dishwasher, microwave, and cooktop repair with same-day or
              next-day availability when possible. Call or text for a clear diagnosis, honest pricing, and
              local service from an appliance repair El Dorado Hills homeowners trust.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#schedule-service"
                data-track-event="schedule_service_click"
                data-track-label="Hero Schedule CTA"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--brand)] px-6 py-3 text-base font-semibold !text-white transition hover:bg-[var(--brand-strong)]"
              >
                Schedule Service
              </Link>
              <a
                href={siteConfig.phoneHref}
                data-track-event="click_to_call"
                data-track-label="Hero Call CTA"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--border-strong)] bg-white/85 px-6 py-3 text-base font-semibold text-[var(--brand-strong)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
              >
                Call or Text {siteConfig.phoneDisplay}
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {quickFacts.map((fact) => (
                <div key={fact} className="rounded-[1.5rem] border border-[var(--border)] bg-white/72 px-4 py-4">
                  <p className="text-sm leading-6 text-[var(--foreground)]">{fact}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex min-h-11 items-center rounded-full border border-[var(--accent)] bg-[var(--accent-soft)] px-4 py-2 text-sm font-semibold text-[var(--brand-strong)]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(14,34,67,0.98),rgba(23,50,93,0.92))] p-7 text-white shadow-[0_24px_80px_rgba(14,34,67,0.24)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent-soft)]">
              Why neighbors call first
            </p>
            <div className="mt-5 space-y-4">
              <div>
                <p className="text-sm text-white/68">Hours</p>
                <p className="mt-1 text-base leading-7 text-white/86">{siteConfig.hours}</p>
              </div>
              <div>
                <p className="text-sm text-white/68">Service Fee</p>
                <p className="mt-1 text-base leading-7 text-white/86">
                  $100 service fee, applied to the repair cost if we fix the appliance.
                </p>
              </div>
              <div>
                <p className="text-sm text-white/68">Coverage</p>
                <p className="mt-1 text-base leading-7 text-white/86">
                  El Dorado Hills, Folsom, Cameron Park, Rescue, Latrobe, Shingle Springs, Diamond Springs, and
                  El Dorado, with a local appliance technician ready to help.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <article className="section-card rounded-[2rem] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Why Choose Us</p>
          <div className="mt-6 grid gap-4">
            {whyChooseUs.map((item, index) => (
              <div key={item} className="rounded-[1.75rem] border border-[var(--border)] bg-white/72 px-5 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">
                  0{index + 1}
                </p>
                <p className="mt-2 text-base leading-7 text-[var(--foreground)]">{item}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="section-card rounded-[2rem] p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Social Proof</p>
              <h2 className="mt-2 text-3xl font-semibold text-[var(--brand-strong)]">
                Trusted by local homeowners who need the repair handled right
              </h2>
            </div>
            <a
              href={siteConfig.googleReviewUrl}
              target="_blank"
              rel="noreferrer"
              data-track-event="view_reviews_click"
              data-track-label="Homepage Reviews Link"
              className="text-sm font-semibold text-[var(--brand)] transition hover:text-[var(--brand-strong)]"
            >
              Read more reviews
            </a>
          </div>

          <div className="mt-6 grid gap-4">
            {reviewHighlights.map((review) => (
              <blockquote key={review.name} className="rounded-[1.75rem] border border-[var(--border)] bg-white/72 p-5">
                <p className="text-sm tracking-[0.18em] text-[var(--accent)]">★★★★★</p>
                <p className="mt-3 text-base leading-7 text-[var(--foreground)]">“{review.quote}”</p>
                <footer className="mt-4 text-sm font-semibold text-[var(--brand-strong)]">
                  {review.name}
                  <span className="font-normal text-[var(--muted)]"> · {review.source}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </article>
      </section>

      <section className="section-card rounded-[2rem] p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Repair Services</p>
            <h2 className="mt-2 text-3xl font-semibold text-[var(--brand-strong)]">
              Major appliance repair for the problems that stop the house
            </h2>
          </div>
          <Link href="/services" className="text-sm font-semibold text-[var(--brand)] transition hover:text-[var(--brand-strong)]">
            View full services page
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
                href="/#schedule-service"
                className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--brand)] transition hover:text-[var(--brand-strong)]"
              >
                Schedule This Repair
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-6 rounded-[1.5rem] border border-dashed border-[var(--border-strong)] bg-[var(--surface-strong)] px-5 py-4 text-sm leading-7 text-[var(--foreground)]">
          {serviceExclusions}
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <article className="section-card rounded-[2rem] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Service Area</p>
          <h2 className="mt-2 text-3xl font-semibold text-[var(--brand-strong)]">Local coverage centered on El Dorado Hills</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
            Proudly serving El Dorado Hills, Cameron Park, Shingle Springs, Diamond Springs, Rescue, Latrobe,
            Folsom, and El Dorado with reliable major-appliance repair and a call-first scheduling process.
          </p>

          <div className="service-area-map mt-8 rounded-[2rem] border border-[var(--border)] p-6">
            <div className="relative mx-auto aspect-[1.2/1] max-w-xl rounded-[1.75rem] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.64),rgba(255,255,255,0.24))]">
              <div className="absolute left-[44%] top-[44%] rounded-full bg-[var(--brand)] px-4 py-3 text-sm font-semibold text-white shadow-lg">
                EDH 95762
              </div>
              {serviceAreas.map((area, index) => {
                const positions = [
                  "left-[18%] top-[20%]",
                  "left-[66%] top-[20%]",
                  "left-[12%] top-[54%]",
                  "left-[66%] top-[56%]",
                  "left-[20%] top-[74%]",
                  "left-[74%] top-[76%]",
                  "left-[74%] top-[38%]",
                  "left-[10%] top-[34%]",
                ] as const;

                return (
                  <span
                    key={area}
                    className={`absolute rounded-full border border-[var(--border-strong)] bg-white/88 px-3 py-2 text-xs font-semibold text-[var(--brand-strong)] shadow-sm ${positions[index]}`}
                  >
                    {area}
                  </span>
                );
              })}
            </div>
          </div>

          <Link
            href="/service-areas"
            className="mt-6 inline-flex min-h-11 items-center rounded-full border border-[var(--border-strong)] px-5 py-3 text-sm font-semibold text-[var(--brand-strong)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
          >
            Explore Service Areas
          </Link>
        </article>

        <article className="section-card rounded-[2rem] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">About EDH Appliance Repair</p>
          <div className="mt-6 grid gap-6 md:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[2rem] bg-[linear-gradient(180deg,rgba(23,50,93,0.95),rgba(14,34,67,0.86))] p-6 text-white">
              <div className="flex h-full min-h-56 flex-col justify-between rounded-[1.5rem] border border-white/16 bg-white/8 p-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent-soft)]">Family-run since</p>
                  <p className="mt-3 text-5xl font-semibold">2012</p>
                </div>
                <p className="max-w-[14rem] text-sm leading-6 text-white/78">
                  Neighbor-first service built on reputation, repeat customers, and referrals across the foothills.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {aboutHighlights.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-[var(--muted)]">
                  {paragraph}
                </p>
              ))}
              <Link
                href="/about"
                className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--brand)] transition hover:text-[var(--brand-strong)]"
              >
                Read the full story
              </Link>
            </div>
          </div>
        </article>
      </section>

      <section id="schedule-service" className="grid scroll-mt-28 gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="section-card rounded-[2rem] p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Book Service</p>
              <h2 className="mt-2 text-3xl font-semibold text-[var(--brand-strong)]">Start your service request</h2>
            </div>
            <a href={siteConfig.phoneHref} className="text-sm font-semibold text-[var(--brand)] transition hover:text-[var(--brand-strong)]">
              {siteConfig.phoneDisplay} — Call or Text
            </a>
          </div>

          <form
            action={`mailto:${siteConfig.email}`}
            method="post"
            encType="text/plain"
            className="mt-8 grid gap-4 md:grid-cols-2"
            data-track-event="generate_lead"
            data-track-label="Homepage Booking Form Submission"
          >
            {bookingFields.map((field) => (
              <label
                key={field.name}
                htmlFor={`homepage-booking-${field.name}`}
                className="grid gap-2 text-sm font-medium text-[var(--brand-strong)]"
              >
                {field.label}
                <input
                  id={`homepage-booking-${field.name}`}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  autoComplete={field.name === "streetAddress" ? "street-address" : field.name}
                  required={field.name === "name" || field.name === "phone" || field.name === "brandModel"}
                  className="min-h-12 rounded-[1.1rem] border border-[var(--border)] bg-white px-4 py-3 text-base text-[var(--foreground)] outline-none transition focus:border-[var(--brand)] focus:ring-2 focus:ring-[rgba(23,50,93,0.14)]"
                />
              </label>
            ))}

            <label htmlFor="homepage-booking-preferredTime" className="grid gap-2 text-sm font-medium text-[var(--brand-strong)]">
              Preferred Time
              <select
                id="homepage-booking-preferredTime"
                name="preferredTime"
                className="min-h-12 rounded-[1.1rem] border border-[var(--border)] bg-white px-4 py-3 text-base text-[var(--foreground)] outline-none transition focus:border-[var(--brand)] focus:ring-2 focus:ring-[rgba(23,50,93,0.14)]"
                defaultValue="Soonest Available"
              >
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
                <option>Soonest Available</option>
              </select>
            </label>

            <label htmlFor="homepage-booking-issueDescription" className="grid gap-2 text-sm font-medium text-[var(--brand-strong)] md:col-span-2">
              Issue Description
              <textarea
                id="homepage-booking-issueDescription"
                name="issueDescription"
                rows={5}
                placeholder="Tell us what the appliance is doing, any error codes, and when the problem started."
                required
                className="rounded-[1.1rem] border border-[var(--border)] bg-white px-4 py-3 text-base text-[var(--foreground)] outline-none transition focus:border-[var(--brand)] focus:ring-2 focus:ring-[rgba(23,50,93,0.14)]"
              />
            </label>

            <div className="md:col-span-2 flex flex-col gap-3 rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-strong)] p-5">
              <p className="text-sm leading-7 text-[var(--foreground)]">
                Most issues are diagnosed on the first visit, and the $100 service fee is applied to the repair if
                we complete the work.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  data-track-event="schedule_service_click"
                  data-track-label="Homepage Booking Submit Button"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--brand)] px-6 py-3 text-base font-semibold !text-white transition hover:bg-[var(--brand-strong)]"
                >
                  Start Email Request
                </button>
                <a
                  href={siteConfig.phoneHref}
                  data-track-event="click_to_call"
                  data-track-label="Homepage Booking Call CTA"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--border-strong)] bg-white px-6 py-3 text-base font-semibold text-[var(--brand-strong)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
                >
                  Call or Text Instead
                </a>
              </div>
            </div>
          </form>
        </article>

        <aside className="section-card rounded-[2rem] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">What to Expect</p>
          <div className="mt-6 space-y-5">
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-white/78 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">Hours</p>
              <p className="mt-2 text-base leading-7 text-[var(--foreground)]">{siteConfig.hours}</p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-white/78 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">First Visit Goal</p>
              <p className="mt-2 text-base leading-7 text-[var(--foreground)]">Most issues diagnosed on the first visit.</p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-white/78 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">Pricing Reassurance</p>
              <p className="mt-2 text-base leading-7 text-[var(--foreground)]">
                $100 service fee applied to the cost of repair if we fix it.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-white/78 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">Address</p>
              <p className="mt-2 text-base leading-7 text-[var(--foreground)]">{siteConfig.address}</p>
            </div>
          </div>
        </aside>
      </section>

      <div className="mobile-call-bar fixed inset-x-3 bottom-3 z-50 md:hidden">
        <div className="rounded-full border border-[var(--border-strong)] bg-[rgba(255,253,248,0.96)] p-2 shadow-[0_20px_50px_rgba(14,34,67,0.22)] backdrop-blur-xl">
          <a
            href={siteConfig.phoneHref}
            data-track-event="click_to_call"
            data-track-label="Mobile Sticky Call CTA"
            className="flex min-h-12 items-center justify-center rounded-full bg-[var(--brand)] px-5 py-3 text-base font-semibold !text-white"
          >
            Call or Text {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </>
  );
}
