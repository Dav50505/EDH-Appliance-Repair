import { NextResponse } from "next/server";

import { sendReviewRequestEmail } from "@/lib/email";
import { validateReviewRequestPayload } from "@/lib/validation";

const bearerToken = process.env.REVIEW_REQUEST_BEARER_TOKEN?.trim() ?? "";

function isAuthorized(request: Request) {
  const authHeader = request.headers.get("authorization") ?? "";
  return Boolean(bearerToken) && authHeader === `Bearer ${bearerToken}`;
}

export async function POST(request: Request) {
  try {
    if (!isAuthorized(request)) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const json = await request.json();
    const result = validateReviewRequestPayload(json);

    if (!result.success) {
      return NextResponse.json({ errors: result.errors }, { status: 400 });
    }

    await sendReviewRequestEmail(result.data);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to send review request." }, { status: 500 });
  }
}
