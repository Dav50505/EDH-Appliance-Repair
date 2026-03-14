import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Privacy Policy | EDH Appliance Repair",
  description:
    "Read the EDH Appliance Repair privacy policy covering booking requests, analytics, cookies, and contact information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <section className="section-card rounded-[2rem] p-8 sm:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Legal</p>
      <h1 className="mt-2 text-4xl font-semibold text-[var(--brand-strong)]">Privacy Policy</h1>
      <div className="gold-divider my-6" />
      <div className="space-y-6 text-base leading-8 text-[var(--muted)]">
        <p>
          EDH Appliance Repair collects the information you submit through booking requests, phone calls, text
          messages, and email so the team can respond to service inquiries, schedule appointments, and follow up
          on repair work.
        </p>
        <p>
          Information may include your name, phone number, email address, street address, appliance details, and
          the symptoms you describe. This information is used only for customer communication, scheduling,
          service delivery, and internal record keeping.
        </p>
        <p>
          This site may use Google Analytics 4 and Google Tag Manager to understand site usage and measure
          conversions such as form submissions, call clicks, and booking-button clicks. These tools may collect
          device, browser, and interaction data subject to Google&apos;s policies.
        </p>
        <p>
          EDH Appliance Repair does not sell personal information. Information may be shared with service
          providers only when needed to operate the website, process communications, or comply with legal
          obligations.
        </p>
        <p>
          To request an update or deletion of the information you have provided, contact{" "}
          <a className="font-semibold text-[var(--brand)]" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>{" "}
          or call{" "}
          <a className="font-semibold text-[var(--brand)]" href={siteConfig.phoneHref}>
            {siteConfig.phoneDisplay}
          </a>
          .
        </p>
        <p>Business address: {siteConfig.address}.</p>
      </div>
    </section>
  );
}
