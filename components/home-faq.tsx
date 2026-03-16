import { bookingFaqs } from "@/lib/site";

type HomeFaqProps = {
  className?: string;
};

export function HomeFaq({ className }: HomeFaqProps) {
  return (
    <article className={className}>
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Before You Book</p>
        <h2 className="text-3xl font-semibold text-[var(--brand-strong)]">Quick answers to the questions homeowners ask most</h2>
        <p className="max-w-3xl text-base leading-8 text-[var(--muted)]">
          These are the details that usually matter most before an appliance repair visit is scheduled.
        </p>
      </div>

      <div className="mt-8 grid gap-4">
        {bookingFaqs.map((item) => (
          <details
            key={item.question}
            className="group rounded-[1.6rem] border border-[var(--border)] bg-white/80 px-5 py-4 shadow-[0_12px_30px_rgba(23,50,93,0.08)]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-[var(--brand-strong)] marker:content-none">
              <span>{item.question}</span>
              <span className="text-2xl leading-none text-[var(--brand)] transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 max-w-3xl pr-8 text-sm leading-7 text-[var(--muted)]">{item.answer}</p>
          </details>
        ))}
      </div>
    </article>
  );
}
