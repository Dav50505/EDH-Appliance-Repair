export const analyticsConfig = {
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "",
  gtmId: process.env.NEXT_PUBLIC_GTM_ID?.trim() ?? "",
} as const;

export function hasAnalyticsConfig() {
  return Boolean(analyticsConfig.gaMeasurementId || analyticsConfig.gtmId);
}
