import Link from "next/link";

import { ApplianceIcon } from "@/components/appliance-icon";
import { ContentImage } from "@/components/content-image";
import { HomeFaq } from "@/components/home-faq";
import { resourceArticles } from "@/lib/content/resources";
import { getPrimaryServiceSlug } from "@/lib/content/services";
import { createPageMetadata, createReviewSchema } from "@/lib/seo";
import {
  aboutHighlights,
  applianceServices,
  editorialImages,
  reviewHighlights,
  serviceAreas,
  siteConfig,
  trustBadges,
  whyChooseUs,
} from "@/lib/site";

const serviceExclusions =
  "We do not service small home appliances such as garbage disposals, countertop microwaves, toasters, vacuums, or mixers.";

const quickFacts = [
  {
    label: "Hours",
    value: siteConfig.hours,
    icon: "◔",
  },
  {
    label: "Service Fee",
    value: "$100 service fee applied to the repair cost when we complete the fix.",
    icon: "$",
  },
  {
    label: "Coverage",
    value: "El Dorado Hills, Folsom, Cameron Park, Rescue, Latrobe, Shingle Springs, Diamond Springs, and El Dorado.",
    icon: "⌂",
  },
] as const;

function getReviewerInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export const metadata = createPageMetadata({
  title: "EDH Appliance Repair | Appliance Repair in El Dorado Hills, CA",
  description:
    "Local appliance repair in El Dorado Hills. Fast, reliable service for refrigerators, washers, dryers, ovens and more. Call (916) 836-5544.",
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
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--brand)]">
              Family-run appliance service
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-[var(--brand-strong)] sm:text-5xl lg:text-6xl">
              Fast, Reliable Appliance Repair in El Dorado Hills
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
              Refrigerator, washer, dryer, oven, dishwasher, microwave, and cooktop repair with same-day or
              next-day availability when possible. Call or text for a clear diagnosis, honest pricing, and local
              service from an appliance repair El Dorado Hills homeowners trust.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#schedule-service"
                data-track-event="schedule_service_click"
                data-track-label="Hero Schedule CTA"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[var(--brand-strong)] px-8 py-4 text-base font-bold tracking-[0.01em] !text-white shadow-[0_18px_34px_rgba(14,34,67,0.26)] transition duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[var(--brand)] hover:shadow-[0_24px_44px_rgba(14,34,67,0.32)]"
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
          </div>

          <ContentImage
            src={editorialImages.homeHero.src}
            alt={editorialImages.homeHero.alt}
            width={editorialImages.homeHero.width}
            height={editorialImages.homeHero.height}
            sizes={editorialImages.homeHero.sizes}
            priority={editorialImages.homeHero.priority}
            className="aspect-[3/2]"
            imageClassName="object-center object-[center_22%]"
          />
        </div>
      </section>

      <section className="page-section section-card rounded-[2rem] p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Social Proof</p>
            <h2 className="mt-2 text-3xl font-semibold text-[var(--brand-strong)]">
              Trusted by local homeowners who want the repair handled right the first time
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Local awards, repeat customers, and five-star feedback all point to the same thing: dependable
              service and a straightforward experience from first call to finished repair.
            </p>
          </div>
          <a
            href={siteConfig.googleReviewUrl}
            target="_blank"
            rel="noreferrer"
            data-track-event="view_reviews_click"
            data-track-label="Homepage Reviews Link"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--brand-strong)] bg-[var(--brand-strong)] px-6 py-3 text-sm font-semibold !text-white shadow-[0_16px_36px_rgba(14,34,67,0.18)] transition hover:-translate-y-0.5 hover:bg-[var(--brand)]"
          >
            Read More Reviews
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {trustBadges.map((badge) => (
            <div
              key={`${badge.source}-${badge.label}-${badge.year}`}
              className="flex min-h-16 items-center gap-3 rounded-[1.4rem] border border-[rgba(209,166,70,0.42)] bg-[linear-gradient(180deg,rgba(240,224,182,0.72),rgba(255,253,248,0.94))] px-4 py-3 shadow-[0_12px_32px_rgba(209,166,70,0.16)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-lg text-[var(--brand-strong)]">
                ★
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-[var(--brand-strong)]">{badge.label}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                  {badge.source} {badge.year}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {reviewHighlights.map((review) => (
            <blockquote
              key={review.name}
              className="rounded-[1.85rem] border border-[var(--border)] bg-white/82 p-6 shadow-[0_16px_40px_rgba(23,50,93,0.1)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-strong)] text-sm font-semibold tracking-[0.16em] text-white">
                  {getReviewerInitials(review.name)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--brand-strong)]">{review.name}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{review.source}</p>
                </div>
              </div>
              <p className="mt-5 text-sm tracking-[0.22em] text-[var(--accent-strong)]">★★★★★</p>
              <p className="mt-3 text-base leading-7 text-[var(--foreground)]">“{review.quote}”</p>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="page-section section-card rounded-[2rem] p-8">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Why Choose Us</p>
          <h2 className="text-3xl font-semibold text-[var(--brand-strong)]">
            The local repair team neighbors call when the breakdown cannot wait
          </h2>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {whyChooseUs.map((item, index) => (
            <div
              key={item}
              className="rounded-[1.85rem] border border-[var(--border)] bg-white/78 px-5 py-5 shadow-[0_12px_30px_rgba(23,50,93,0.08)]"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-strong)] text-sm font-semibold tracking-[0.18em] text-white">
                  0{index + 1}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--brand-strong)]">
                  ✦
                </span>
              </div>
              <p className="mt-4 text-base leading-7 text-[var(--foreground)]">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="grid gap-4 md:grid-cols-3">
          {quickFacts.map((fact) => (
            <article
              key={fact.label}
              className="section-card rounded-[1.85rem] px-5 py-6 shadow-[0_16px_40px_rgba(23,50,93,0.08)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand)] text-lg text-white shadow-[0_12px_24px_rgba(23,50,93,0.18)]">
                {fact.icon}
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">{fact.label}</p>
              <p className="mt-3 text-base leading-7 text-[var(--foreground)]">{fact.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section section-card rounded-[2rem] p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Repair Services</p>
            <h2 className="mt-2 text-3xl font-semibold text-[var(--brand-strong)]">
              Major appliance repair for the breakdowns that bring your home to a stop.
            </h2>
          </div>
          <Link href="/services" className="text-sm font-semibold text-[var(--brand)] transition hover:text-[var(--brand-strong)]">
            View full services page
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {applianceServices.map((service) => (
            <article key={service.name} className="rounded-[1.75rem] border border-[var(--border)] bg-white/78 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand)] text-white shadow-[0_12px_24px_rgba(23,50,93,0.18)]">
                <ApplianceIcon appliance={service.name} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[var(--brand-strong)]">{service.name} Repair</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{service.description}</p>
              <Link
                href={`/services/${getPrimaryServiceSlug(service.name)}`}
                data-track-event="schedule_service_click"
                data-track-label={`${service.name} Homepage Card`}
                data-page-type="home"
                data-content-slug={getPrimaryServiceSlug(service.name)}
                className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--brand)] transition hover:text-[var(--brand-strong)]"
              >
                View Repair Page
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-6 rounded-[1.5rem] border border-dashed border-[var(--border-strong)] bg-[var(--surface-strong)] px-5 py-4 text-sm leading-7 text-[var(--foreground)]">
          {serviceExclusions}
        </p>
      </section>

      <section className="page-section grid gap-6 lg:grid-cols-[1fr_0.95fr]">
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
            <ContentImage
              src={editorialImages.aboutFamily.src}
              alt={editorialImages.aboutFamily.alt}
              width={editorialImages.aboutFamily.width}
              height={editorialImages.aboutFamily.height}
              sizes="(min-width: 768px) 24rem, 100vw"
              className="aspect-[6/7]"
            />

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

      <section id="schedule-service" className="page-section scroll-mt-28">
        <HomeFaq className="section-card rounded-[2rem] p-8" />

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="section-card rounded-[2rem] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Book Service</p>
            <h2 className="mt-2 text-3xl font-semibold text-[var(--brand-strong)]">Start your service request</h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Use the full booking form on the contact page to share your appliance details, preferred appointment
              time, and service address.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                data-track-event="schedule_service_click"
                data-track-label="Homepage Booking Section CTA"
                data-page-type="home"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--brand)] px-6 py-3 text-base font-semibold text-white transition hover:bg-[var(--brand-strong)]"
              >
                Open Booking Form
              </Link>
              <a
                href={siteConfig.phoneHref}
                data-track-event="click_to_call"
                data-track-label="Homepage Booking Section Call CTA"
                data-page-type="home"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--border-strong)] bg-white px-6 py-3 text-base font-semibold text-[var(--brand-strong)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
              >
                Call or Text {siteConfig.phoneDisplay}
              </a>
            </div>
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
        </div>
      </section>

      <section className="page-section section-card rounded-[2rem] p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Resources</p>
            <h2 className="mt-2 text-3xl font-semibold text-[var(--brand-strong)]">
              Practical appliance repair guidance for the questions homeowners search most
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Read a few quick explainers before you book, then move straight into the repair page or service request if the appliance needs a real diagnosis.
            </p>
          </div>
          <Link href="/resources" className="text-sm font-semibold text-[var(--brand)] transition hover:text-[var(--brand-strong)]">
            Browse all resources
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {resourceArticles.slice(0, 3).map((article) => (
            <Link
              key={article.slug}
              href={`/resources/${article.slug}`}
              className="rounded-[1.75rem] border border-[var(--border)] bg-white/80 p-5 transition hover:border-[var(--brand)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">{article.readingTime}</p>
              <h3 className="mt-4 text-xl font-semibold text-[var(--brand-strong)]">{article.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{article.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="mobile-call-bar fixed inset-x-3 bottom-3 z-50 md:hidden">
        <div className="rounded-[1.6rem] border border-[var(--border-strong)] bg-[rgba(255,253,248,0.96)] p-2 shadow-[0_20px_50px_rgba(14,34,67,0.22)] backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-2">
            <a
              href={siteConfig.phoneHref}
              data-track-event="click_to_call"
              data-track-label="Mobile Sticky Call CTA"
              className="flex min-h-12 items-center justify-center rounded-full bg-[var(--brand)] px-4 py-3 text-center text-sm font-semibold !text-white"
            >
              Call or Text {siteConfig.phoneDisplay}
            </a>
            <a
              href="#schedule-service"
              data-track-event="schedule_service_click"
              data-track-label="Mobile Sticky Schedule CTA"
              className="flex min-h-12 items-center justify-center rounded-full border border-[var(--border-strong)] bg-white px-4 py-3 text-center text-sm font-semibold text-[var(--brand-strong)]"
            >
              Schedule
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
