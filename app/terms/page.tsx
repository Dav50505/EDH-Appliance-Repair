import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Terms & Conditions | EDH Appliance Repair",
  description:
    "Read the EDH Appliance Repair terms and conditions covering estimates, scheduling, warranties, and website usage.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="section-card rounded-[2rem] p-8 sm:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">Legal</p>
      <h1 className="mt-2 text-4xl font-semibold text-[var(--brand-strong)]">Terms &amp; Conditions</h1>
      <div className="gold-divider my-6" />
      <div className="space-y-6 text-base leading-8 text-[var(--muted)]">
        <p>
          By using this website or requesting service from EDH Appliance Repair, you agree to these terms and
          conditions. Website content is provided for general information about local appliance repair services
          and may be updated at any time.
        </p>
        <p>
          Booking requests submitted through the site are service inquiries only. Appointment times are not
          confirmed until EDH Appliance Repair responds directly by phone, text, or email.
        </p>
        <p>
          Diagnostic and repair pricing is communicated after inspection. Unless otherwise stated in writing, the
          posted $100 service fee applies toward the repair cost when the repair is completed during the approved
          service process.
        </p>
        <p>
          Repair recommendations, parts availability, and scheduling windows depend on the appliance condition,
          model, and access to required replacement parts. Completed repairs are subject to any warranty terms
          communicated at the time of service.
        </p>
        <p>
          Users agree not to misuse this site, interfere with site operation, or submit false or misleading
          booking information. Questions about these terms can be directed to{" "}
          <a className="font-semibold text-[var(--brand)]" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          .
        </p>
        <p>Business address: {siteConfig.address}.</p>
      </div>
    </section>
  );
}
