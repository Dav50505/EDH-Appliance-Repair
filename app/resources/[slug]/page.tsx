import Link from "next/link";
import { notFound } from "next/navigation";

import { PageCta } from "@/components/page-cta";
import { SectionHero } from "@/components/section-hero";
import { resourceArticles, resourceArticlesBySlug } from "@/lib/content/resources";
import { createArticleMetadata, createArticleSchema, createBreadcrumbSchema } from "@/lib/seo";

type ResourceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return resourceArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ResourceDetailPageProps) {
  const { slug } = await params;
  const article = resourceArticlesBySlug[slug];

  if (!article) {
    return {};
  }

  return createArticleMetadata(article);
}

export default async function ResourceDetailPage({ params }: ResourceDetailPageProps) {
  const { slug } = await params;
  const article = resourceArticlesBySlug[slug];

  if (!article) {
    notFound();
  }

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: article.title, path: `/resources/${article.slug}` },
  ]);
  const articleSchema = createArticleSchema(article);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <SectionHero eyebrow="Resource Article" title={article.title} description={article.excerpt} />

      <article className="section-card rounded-[2rem] p-8">
        <div className="flex flex-wrap gap-3 text-sm text-[var(--muted)]">
          <span>{article.publishedAt}</span>
          <span>{article.updatedAt}</span>
          <span>{article.readingTime}</span>
        </div>
        <div className="mt-8 space-y-10">
          {article.bodySections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-3xl font-semibold text-[var(--brand-strong)]">{section.heading}</h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-[var(--muted)]">
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.bullets?.length ? (
                <ul className="mt-6 grid gap-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="rounded-[1.5rem] border border-[var(--border)] bg-white/80 px-5 py-4 text-base leading-7 text-[var(--foreground)]">
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </article>

      <section className="section-card rounded-[2rem] p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Keep Reading</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {resourceArticles
            .filter((candidate) => candidate.slug !== article.slug)
            .slice(0, 2)
            .map((candidate) => (
              <Link
                key={candidate.slug}
                href={`/resources/${candidate.slug}`}
                className="rounded-[1.75rem] border border-[var(--border)] bg-white/80 p-5 transition hover:border-[var(--brand)]"
              >
                <h3 className="text-xl font-semibold text-[var(--brand-strong)]">{candidate.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{candidate.excerpt}</p>
              </Link>
            ))}
        </div>
      </section>

      <section className="section-card rounded-[2rem] p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Local Booking Paths</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link
            href="/services"
            className="rounded-[1.75rem] border border-[var(--border)] bg-white/80 p-5 transition hover:border-[var(--brand)]"
          >
            <h3 className="text-xl font-semibold text-[var(--brand-strong)]">Browse Service Pages</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">See the local repair pages built for refrigerators, dishwashers, laundry appliances, ovens, and ranges.</p>
          </Link>
          <Link
            href="/service-areas"
            className="rounded-[1.75rem] border border-[var(--border)] bg-white/80 p-5 transition hover:border-[var(--brand)]"
          >
            <h3 className="text-xl font-semibold text-[var(--brand-strong)]">Check Service Areas</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">Confirm coverage for El Dorado Hills, Folsom, Cameron Park, Shingle Springs, Rescue, and nearby foothill communities.</p>
          </Link>
          <Link
            href="/contact"
            className="rounded-[1.75rem] border border-[var(--border)] bg-white/80 p-5 transition hover:border-[var(--brand)]"
          >
            <h3 className="text-xl font-semibold text-[var(--brand-strong)]">Submit a Service Request</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">Go straight to the booking form if the appliance issue needs a real diagnosis now.</p>
          </Link>
        </div>
      </section>

      <PageCta
        eyebrow="Need Help Now"
        title={article.cta.title}
        description={article.cta.description}
        primaryHref={article.cta.href}
        primaryLabel={article.cta.label}
        primaryTrackEvent="article_cta_click"
        pageType="article"
        contentSlug={article.slug}
        secondaryHref="/contact"
        secondaryLabel="Submit Service Request"
      />
    </>
  );
}
