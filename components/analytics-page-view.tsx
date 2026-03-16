"use client";

import { useEffect } from "react";

import { trackAnalyticsEvent } from "@/lib/analytics";

type AnalyticsPageViewProps = {
  pageType: string;
  contentSlug?: string;
};

export function AnalyticsPageView({ pageType, contentSlug }: AnalyticsPageViewProps) {
  useEffect(() => {
    trackAnalyticsEvent("page_view", {
      event_category: "engagement",
      event_label: pageType,
      page_type: pageType,
      content_slug: contentSlug,
    });
  }, [contentSlug, pageType]);

  return null;
}
