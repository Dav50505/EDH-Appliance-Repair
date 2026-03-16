import Link from "next/link";

import { SectionHero } from "@/components/section-hero";
import { createPageMetadata } from "@/lib/seo";
import { resourceArticles } from "@/lib/content/resources";

export const metadata = createPageMetadata({
  title: "Appliance Repair Resources | EDH Appliance Repair",
  description:
    "Helpful appliance repair articles for El Dorado Hills homeowners covering refrigerator, washer, dryer, dishwasher, and oven problems.",
  path: "/resources",
  keywords: ["appliance repair resources", "appliance tips", "el dorado hills appliance repair blog"],
});

export default function ResourcesPage() {
  return (
    <>
      <SectionHero
        eyebrow="Resources"
        title="Helpful appliance repair articles for local homeowners"
        description="Read practical explanations for the appliance problems people search most often, then move directly into the booking flow if the issue needs a real diagnosis."
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {resourceArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/resources/${article.slug}`}
            className="section-card rounded-[2rem] p-6 transition hover:-translate-y-0.5 hover:border-[var(--brand)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
              {article.readingTime} · {article.publishedAt}
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-[var(--brand-strong)]">{article.title}</h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">{article.excerpt}</p>
            <span className="mt-6 inline-flex text-sm font-semibold text-[var(--brand)]">Read article</span>
          </Link>
        ))}
      </section>
    </>
  );
}
