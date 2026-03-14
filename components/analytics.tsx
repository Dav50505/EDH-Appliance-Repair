"use client";

import { useEffect } from "react";
import Script from "next/script";

import { analyticsConfig } from "@/lib/analytics";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

function trackEvent(name: string, label?: string) {
  if (typeof window === "undefined") {
    return;
  }

  const payload = {
    event: name,
    event_category: "engagement",
    event_label: label,
  };

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);
  window.gtag?.("event", name, payload);
}

export function Analytics() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const trackedElement = target.closest<HTMLElement>("[data-track-event]");

      if (!trackedElement) {
        return;
      }

      trackEvent(trackedElement.dataset.trackEvent ?? "interaction", trackedElement.dataset.trackLabel);
    };

    const handleSubmit = (event: SubmitEvent) => {
      const target = event.target;

      if (!(target instanceof HTMLFormElement)) {
        return;
      }

      const eventName = target.dataset.trackEvent;

      if (!eventName) {
        return;
      }

      trackEvent(eventName, target.dataset.trackLabel);
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("submit", handleSubmit);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return (
    <>
      {analyticsConfig.gtmId ? (
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${analyticsConfig.gtmId}');
          `}
        </Script>
      ) : null}

      {analyticsConfig.gaMeasurementId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.gaMeasurementId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${analyticsConfig.gaMeasurementId}');
            `}
          </Script>
        </>
      ) : null}
    </>
  );
}
