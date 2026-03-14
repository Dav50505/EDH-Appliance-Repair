import { siteConfig } from "@/lib/site";

const bookingFields = [
  { label: "Name", name: "name", type: "text", placeholder: "Your full name" },
  { label: "Phone", name: "phone", type: "tel", placeholder: "(916) 555-1234" },
  { label: "Email", name: "email", type: "email", placeholder: "you@example.com" },
  { label: "Street Address", name: "streetAddress", type: "text", placeholder: "123 Main St" },
  { label: "City", name: "city", type: "text", placeholder: "El Dorado Hills" },
  { label: "Zip", name: "zip", type: "text", placeholder: "95762" },
  { label: "Brand & Model", name: "brandModel", type: "text", placeholder: "Whirlpool WRF555..." },
] as const;

type BookingFormProps = {
  title?: string;
  description?: string;
  id?: string;
};

export function BookingForm({
  title = "Start your service request",
  description = "Most issues are diagnosed on the first visit, and the $100 service fee is applied to the repair if we complete the work.",
  id,
}: BookingFormProps) {
  return (
    <article id={id} className="section-card rounded-[2rem] p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Book Service</p>
          <h2 className="mt-2 text-3xl font-semibold text-[var(--brand-strong)]">{title}</h2>
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
        data-track-label="Booking Form Submission"
      >
        {bookingFields.map((field) => (
          <label key={field.name} htmlFor={`${id ?? "booking-form"}-${field.name}`} className="grid gap-2 text-sm font-medium text-[var(--brand-strong)]">
            {field.label}
            <input
              id={`${id ?? "booking-form"}-${field.name}`}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              autoComplete={field.name === "streetAddress" ? "street-address" : field.name}
              required={field.name === "name" || field.name === "phone" || field.name === "brandModel"}
              className="min-h-12 rounded-[1.1rem] border border-[var(--border)] bg-white px-4 py-3 text-base text-[var(--foreground)] outline-none transition focus:border-[var(--brand)] focus:ring-2 focus:ring-[rgba(23,50,93,0.14)]"
            />
          </label>
        ))}

        <label htmlFor={`${id ?? "booking-form"}-preferredTime`} className="grid gap-2 text-sm font-medium text-[var(--brand-strong)]">
          Preferred Time
          <select
            id={`${id ?? "booking-form"}-preferredTime`}
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

        <label htmlFor={`${id ?? "booking-form"}-issueDescription`} className="grid gap-2 text-sm font-medium text-[var(--brand-strong)] md:col-span-2">
          Issue Description
          <textarea
            id={`${id ?? "booking-form"}-issueDescription`}
            name="issueDescription"
            rows={5}
            placeholder="Tell us what the appliance is doing, any error codes, and when the problem started."
            required
            className="rounded-[1.1rem] border border-[var(--border)] bg-white px-4 py-3 text-base text-[var(--foreground)] outline-none transition focus:border-[var(--brand)] focus:ring-2 focus:ring-[rgba(23,50,93,0.14)]"
          />
        </label>

        <div className="md:col-span-2 flex flex-col gap-3 rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-strong)] p-5">
          <p className="text-sm leading-7 text-[var(--foreground)]">{description}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              data-track-event="schedule_service_click"
              data-track-label="Booking Form Submit Button"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--brand)] px-6 py-3 text-base font-semibold text-white transition hover:bg-[var(--brand-strong)]"
            >
              Start Email Request
            </button>
            <a
              href={siteConfig.phoneHref}
              data-track-event="click_to_call"
              data-track-label="Booking Form Call CTA"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--border-strong)] bg-white px-6 py-3 text-base font-semibold text-[var(--brand-strong)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
            >
              Call or Text Instead
            </a>
          </div>
        </div>
      </form>
    </article>
  );
}
