type SectionHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHero({ eyebrow, title, description }: SectionHeroProps) {
  return (
    <section className="section-card overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10">
      <p className="text-xs uppercase tracking-[0.35em] text-[var(--brand)]">{eyebrow}</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[var(--brand-strong)] sm:text-5xl">
        {title}
      </h1>
      <div className="gold-divider my-6" />
      <p className="max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">{description}</p>
    </section>
  );
}
