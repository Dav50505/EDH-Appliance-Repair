import { siteConfig } from "@/lib/site";
import type { LeadSubmission, ReviewRequestPayload } from "@/lib/content/types";

type EmailMessage = {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
};

const resendApiKey = process.env.RESEND_API_KEY?.trim() ?? "";
const resendFromEmail = process.env.RESEND_FROM_EMAIL?.trim() ?? "";
const leadNotificationEmail = process.env.LEAD_NOTIFICATION_EMAIL?.trim() ?? "";
const reviewRequestFromEmail = process.env.REVIEW_REQUEST_FROM_EMAIL?.trim() ?? resendFromEmail;

async function sendEmail({ to, subject, html, replyTo }: EmailMessage) {
  if (!resendApiKey || !resendFromEmail) {
    throw new Error("Resend email configuration is missing.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: resendFromEmail,
      to,
      subject,
      html,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });

  if (!response.ok) {
    throw new Error("Resend request failed.");
  }
}

export async function sendLeadNotificationEmail(submission: LeadSubmission) {
  if (!leadNotificationEmail) {
    throw new Error("Lead notification email is missing.");
  }

  const addressLine = submission.address ? `<p><strong>Address:</strong> ${submission.address}</p>` : "";
  const emailLine = submission.email ? `<p><strong>Email:</strong> ${submission.email}</p>` : "";

  await sendEmail({
    to: leadNotificationEmail,
    subject: `New EDH Appliance Repair lead from ${submission.name}`,
    replyTo: submission.email,
    html: `
      <h1>New service request</h1>
      <p><strong>Name:</strong> ${submission.name}</p>
      <p><strong>Phone:</strong> ${submission.phone}</p>
      ${emailLine}
      ${addressLine}
      <p><strong>Brand &amp; Model:</strong> ${submission.brandModel}</p>
      <p><strong>Preferred Time:</strong> ${submission.preferredTime}</p>
      <p><strong>Source Path:</strong> ${submission.sourcePath}</p>
      <p><strong>Issue:</strong></p>
      <p>${submission.issueDescription}</p>
    `,
  });
}

export async function sendLeadConfirmationEmail(submission: LeadSubmission) {
  if (!submission.email) {
    return;
  }

  await sendEmail({
    to: submission.email,
    subject: "We received your EDH Appliance Repair request",
    replyTo: leadNotificationEmail || undefined,
    html: `
      <h1>Thanks, ${submission.name}</h1>
      <p>We received your service request for ${submission.brandModel}.</p>
      <p>We will call or text you to confirm your appointment and next steps.</p>
      <p><strong>Preferred time:</strong> ${submission.preferredTime}</p>
      <p><strong>Issue summary:</strong> ${submission.issueDescription}</p>
      <p>If you need to reach us sooner, call or text <a href="${siteConfig.phoneHref}">${siteConfig.phoneDisplay}</a>.</p>
    `,
  });
}

export async function sendReviewRequestEmail(payload: ReviewRequestPayload) {
  if (!resendApiKey || !reviewRequestFromEmail) {
    throw new Error("Review request email configuration is missing.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: reviewRequestFromEmail,
      to: payload.customerEmail,
      subject: "Thanks for choosing EDH Appliance Repair",
      html: `
        <h1>Thanks again, ${payload.customerName}</h1>
        <p>We appreciate the opportunity to help with your ${payload.serviceType.toLowerCase()} service in ${payload.city}.</p>
        <p>If the visit was helpful, would you mind leaving a Google review? It helps more local homeowners find a reliable appliance technician when they need one fast.</p>
        <p><a href="${siteConfig.googleReviewUrl}">Leave a Google review</a></p>
        <p>If anything still needs attention after the repair, call or text <a href="${siteConfig.phoneHref}">${siteConfig.phoneDisplay}</a>.</p>
        <p><small>Service completed: ${payload.completedAt}</small></p>
      `,
    }),
  });

  if (!response.ok) {
    throw new Error("Review request email failed.");
  }
}
