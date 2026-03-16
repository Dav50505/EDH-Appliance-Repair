export const analyticsConfig = {
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "",
  gtmId: process.env.NEXT_PUBLIC_GTM_ID?.trim() ?? "",
} as const;

export const analyticsEvents = {
  articleCtaClick: "article_cta_click",
  clickToCall: "click_to_call",
  leadSubmitError: "lead_submit_error",
  leadSubmitSuccess: "lead_submit_success",
  pageView: "page_view",
  scheduleServiceClick: "schedule_service_click",
  viewReviewsClick: "view_reviews_click",
} as const;

export type AnalyticsEventPayload = {
  event_category?: string;
  event_label?: string;
  page_type?: string;
  content_slug?: string;
};

export function hasAnalyticsConfig() {
  return Boolean(analyticsConfig.gaMeasurementId || analyticsConfig.gtmId);
}

export function trackAnalyticsEvent(event: string, payload: AnalyticsEventPayload = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const eventPayload = {
    event,
    event_category: payload.event_category ?? "engagement",
    event_label: payload.event_label,
    page_type: payload.page_type,
    content_slug: payload.content_slug,
  };

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(eventPayload);
  window.gtag?.("event", event, eventPayload);
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}
