"use client";

import { useState } from "react";

const bookingFields = [
  { label: "Name", name: "name", type: "text", placeholder: "Your full name" },
  { label: "Phone", name: "phone", type: "tel", placeholder: "(916) 555-1234" },
  { label: "Email", name: "email", type: "email", placeholder: "you@example.com" },
  { label: "Address", name: "address", type: "text", placeholder: "123 Main St, El Dorado Hills, CA 95762" },
  { label: "Brand & Model", name: "brandModel", type: "text", placeholder: "Whirlpool WRF555..." },
] as const;

type ContactBookingFormProps = {
  title?: string;
  description?: string;
  id?: string;
  sourcePath?: string;
};

type FormErrors = Partial<Record<(typeof bookingFields)[number]["name"] | "preferredTime" | "issueDescription", string>>;

const initialFormState = {
  name: "",
  phone: "",
  email: "",
  address: "",
  brandModel: "",
  preferredTime: "Soonest Available",
  issueDescription: "",
};

export function ContactBookingForm({
  title = "Tell us about the appliance issue",
  description = "Most issues are diagnosed on the first visit. Include the appliance brand, model, symptoms, and preferred appointment time so the scheduling follow-up can move faster.",
  id,
  sourcePath = "/contact",
}: ContactBookingFormProps) {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");
  const formId = id ?? "contact-booking-form";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitState("idle");
    setErrors({});

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          sourcePath,
        }),
      });

      const payload = (await response.json().catch(() => ({}))) as { errors?: FormErrors };

      if (!response.ok) {
        if (payload.errors) {
          setErrors(payload.errors);
        }

        setSubmitState("error");
        setIsSubmitting(false);
        return;
      }

      setSubmitState("success");
      setIsSubmitting(false);
      setFormData(initialFormState);
    } catch {
      setSubmitState("error");
      setIsSubmitting(false);
    }
  }

  return (
    <article id={id} className="section-card rounded-[2rem] p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Book Service</p>
          <h2 className="mt-2 text-3xl font-semibold text-[var(--brand-strong)]">{title}</h2>
        </div>
        <a href="tel:+19168365544" className="text-sm font-semibold text-[var(--brand)] transition hover:text-[var(--brand-strong)]">
          (916) 836-5544 - Call or Text
        </a>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
        {bookingFields.map((field) => (
          <label key={field.name} htmlFor={`${formId}-${field.name}`} className="grid gap-2 text-sm font-medium text-[var(--brand-strong)]">
            {field.label}
            <input
              id={`${formId}-${field.name}`}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              autoComplete={field.name === "address" ? "street-address" : field.name}
              required={field.name === "name" || field.name === "phone" || field.name === "brandModel"}
              value={formData[field.name]}
              onChange={(event) =>
                setFormData((current) => ({
                  ...current,
                  [field.name]: event.target.value,
                }))
              }
              className="min-h-12 rounded-[1.1rem] border border-[var(--border)] bg-white px-4 py-3 text-base text-[var(--foreground)] outline-none transition focus:border-[var(--brand)] focus:ring-2 focus:ring-[rgba(23,50,93,0.14)]"
            />
            {errors[field.name] ? <span className="text-sm text-[var(--brand)]">{errors[field.name]}</span> : null}
          </label>
        ))}

        <label htmlFor={`${formId}-preferredTime`} className="grid gap-2 text-sm font-medium text-[var(--brand-strong)]">
          Preferred Time
          <select
            id={`${formId}-preferredTime`}
            name="preferredTime"
            className="min-h-12 rounded-[1.1rem] border border-[var(--border)] bg-white px-4 py-3 text-base text-[var(--foreground)] outline-none transition focus:border-[var(--brand)] focus:ring-2 focus:ring-[rgba(23,50,93,0.14)]"
            value={formData.preferredTime}
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                preferredTime: event.target.value,
              }))
            }
          >
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
            <option>Soonest Available</option>
          </select>
          {errors.preferredTime ? <span className="text-sm text-[var(--brand)]">{errors.preferredTime}</span> : null}
        </label>

        <label htmlFor={`${formId}-issueDescription`} className="grid gap-2 text-sm font-medium text-[var(--brand-strong)] md:col-span-2">
          Issue Description
          <textarea
            id={`${formId}-issueDescription`}
            name="issueDescription"
            rows={5}
            placeholder="Briefly describe what's going wrong (e.g., washer not draining, fridge not cooling)"
            required
            value={formData.issueDescription}
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                issueDescription: event.target.value,
              }))
            }
            className="rounded-[1.1rem] border border-[var(--border)] bg-white px-4 py-3 text-base text-[var(--foreground)] outline-none transition focus:border-[var(--brand)] focus:ring-2 focus:ring-[rgba(23,50,93,0.14)]"
          />
          {errors.issueDescription ? <span className="text-sm text-[var(--brand)]">{errors.issueDescription}</span> : null}
        </label>

        <div className="md:col-span-2 flex flex-col gap-3 rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-strong)] p-5">
          <p className="text-sm leading-7 text-[var(--foreground)]">{description}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--brand)] px-6 py-3 text-base font-semibold text-white transition hover:bg-[var(--brand-strong)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Submit Service Request"}
            </button>
            <a
              href="tel:+19168365544"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--border-strong)] bg-white px-6 py-3 text-base font-semibold text-[var(--brand-strong)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
            >
              Call or Text Instead
            </a>
          </div>
          {submitState === "success" ? (
            <p className="text-sm leading-6 text-[var(--brand-strong)]">
              Thanks. Your request was submitted successfully. We'll call or text you to confirm your appointment.
            </p>
          ) : null}
          {submitState === "error" ? (
            <p className="text-sm leading-6 text-[var(--brand)]">
              We couldn't submit the request just now. Please try again or call/text (916) 836-5544.
            </p>
          ) : null}
          <p className="text-sm leading-6 text-[var(--muted)]">We'll call or text you to confirm your appointment.</p>
          <p className="text-sm leading-6 text-[var(--muted)]">Your information is only used to schedule your service - no spam, ever.</p>
        </div>
      </form>
    </article>
  );
}
