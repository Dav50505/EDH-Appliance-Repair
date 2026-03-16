import type { FaqItem } from "@/lib/content/types";

type FaqListProps = {
  eyebrow?: string;
  title: string;
  items: FaqItem[];
};

export function FaqList({ eyebrow = "Frequently Asked Questions", title, items }: FaqListProps) {
  return (
    <section className="section-card rounded-[2rem] p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold text-[var(--brand-strong)]">{title}</h2>
      <div className="mt-8 grid gap-4">
        {items.map((item) => (
          <article key={item.question} className="rounded-[1.75rem] border border-[var(--border)] bg-white/80 p-5">
            <h3 className="text-lg font-semibold text-[var(--brand-strong)]">{item.question}</h3>
            <p className="mt-3 text-base leading-7 text-[var(--muted)]">{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
