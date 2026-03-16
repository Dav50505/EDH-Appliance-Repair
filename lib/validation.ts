import type { LeadSubmission, ReviewRequestPayload } from "@/lib/content/types";

type ValidationResult<T> =
  | { success: true; data: T }
  | { success: false; errors: Record<string, string> };

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function validateLeadSubmission(input: unknown): ValidationResult<LeadSubmission> {
  const body = typeof input === "object" && input !== null ? input : {};

  const data: LeadSubmission = {
    name: asString((body as Record<string, unknown>).name),
    phone: asString((body as Record<string, unknown>).phone),
    email: asString((body as Record<string, unknown>).email) || undefined,
    address: asString((body as Record<string, unknown>).address) || undefined,
    brandModel: asString((body as Record<string, unknown>).brandModel),
    preferredTime: asString((body as Record<string, unknown>).preferredTime),
    issueDescription: asString((body as Record<string, unknown>).issueDescription),
    sourcePath: asString((body as Record<string, unknown>).sourcePath) || "/contact",
  };

  const errors: Record<string, string> = {};

  if (!data.name) {
    errors.name = "Name is required.";
  }
  if (!data.phone) {
    errors.phone = "Phone is required.";
  }
  if (data.email && !isEmail(data.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!data.brandModel) {
    errors.brandModel = "Brand and model are required.";
  }
  if (!data.issueDescription) {
    errors.issueDescription = "Issue description is required.";
  }
  if (!data.preferredTime) {
    errors.preferredTime = "Preferred time is required.";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  return { success: true, data };
}

export function validateReviewRequestPayload(input: unknown): ValidationResult<ReviewRequestPayload> {
  const body = typeof input === "object" && input !== null ? input : {};

  const data: ReviewRequestPayload = {
    customerName: asString((body as Record<string, unknown>).customerName),
    customerEmail: asString((body as Record<string, unknown>).customerEmail),
    serviceType: asString((body as Record<string, unknown>).serviceType),
    city: asString((body as Record<string, unknown>).city),
    completedAt: asString((body as Record<string, unknown>).completedAt),
  };

  const errors: Record<string, string> = {};

  if (!data.customerName) {
    errors.customerName = "Customer name is required.";
  }
  if (!data.customerEmail || !isEmail(data.customerEmail)) {
    errors.customerEmail = "A valid customer email is required.";
  }
  if (!data.serviceType) {
    errors.serviceType = "Service type is required.";
  }
  if (!data.city) {
    errors.city = "City is required.";
  }
  if (!data.completedAt) {
    errors.completedAt = "Completion date is required.";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  return { success: true, data };
}
