import { NextResponse } from "next/server";

/**
 * Intake form endpoint.
 *
 * TODO — wire this to your real pipeline. Options that fit the current stack:
 *  1. Forward to a Google Apps Script web app URL (matches your existing
 *     Gmail -> Sheets order tracking):
 *       await fetch(process.env.APPS_SCRIPT_WEBHOOK_URL!, { method: "POST", body: JSON.stringify(data) });
 *  2. Send an email via Resend/Brevo API to hello@igetseen.com.
 *  3. Push straight to a Google Sheet via the Sheets API.
 *
 * Until wired, submissions are accepted and logged server-side so the UX
 * works end to end in development.
 */
export async function POST(req: Request) {
  try {
    const data = await req.json();
    if (!data?.name || !data?.email || !data?.business) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }
    console.log("[intake]", JSON.stringify(data));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
