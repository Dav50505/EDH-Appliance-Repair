import { NextResponse } from "next/server";

import { sendLeadConfirmationEmail, sendLeadNotificationEmail } from "@/lib/email";
import { validateLeadSubmission } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const result = validateLeadSubmission(json);

    if (!result.success) {
      return NextResponse.json({ errors: result.errors }, { status: 400 });
    }

    await sendLeadNotificationEmail(result.data);

    if (result.data.email) {
      await sendLeadConfirmationEmail(result.data);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to submit service request." }, { status: 500 });
  }
}
