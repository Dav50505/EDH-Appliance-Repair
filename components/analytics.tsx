"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

import { analyticsConfig, trackAnalyticsEvent } from "@/lib/analytics";

function getPageAnalyticsContext(pathname: string) {
  if (pathname === "/") {
    return { pageType: "home" };
  }

  if (pathname === "/contact") {
    return { pageType: "contact" };
  }

  if (pathname === "/services") {
    return { pageType: "services-index" };
  }

  if (pathname.startsWith("/services/")) {
    return { pageType: "service-detail", contentSlug: pathname.split("/")[2] };
  }

  if (pathname === "/service-areas") {
    return { pageType: "areas-index" };
  }

  if (pathname.startsWith("/service-areas/")) {
    return { pageType: "city-detail", contentSlug: pathname.split("/")[2] };
  }

  if (pathname === "/resources") {
    return { pageType: "resources-index" };
  }

  if (pathname.startsWith("/resources/")) {
    return { pageType: "article", contentSlug: pathname.split("/")[2] };
  }

  return { pageType: pathname.replace(/^\//, "") || "unknown" };
}

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    const { pageType, contentSlug } = getPageAnalyticsContext(pathname);

    trackAnalyticsEvent("page_view", {
      event_category: "engagement",
      event_label: pageType,
      page_type: pageType,
      content_slug: contentSlug,
    });
  }, [pathname]);

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

      trackAnalyticsEvent(trackedElement.dataset.trackEvent ?? "interaction", {
        event_category: "engagement",
        event_label: trackedElement.dataset.trackLabel,
        page_type: trackedElement.dataset.pageType,
        content_slug: trackedElement.dataset.contentSlug,
      });
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

      trackAnalyticsEvent(eventName, {
        event_category: "engagement",
        event_label: target.dataset.trackLabel,
        page_type: target.dataset.pageType,
        content_slug: target.dataset.contentSlug,
      });
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
