import { NextResponse } from "next/server";

/**
 * Intake form endpoint. Used by both /start and /contact.
 *
 * Sends an email to debo@igetseen.com via the Resend API. Requires a
 * RESEND_API_KEY environment variable set in Netlify (Site configuration ->
 * Environment variables). Until that's set, submissions are still validated
 * and logged server-side so the UX doesn't break, but no email goes out.
 */

const NOTIFY_TO = "debo@igetseen.com";
const FROM = "iGetSeen Website <onboarding@resend.dev>";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderEmailHtml(data: Record<string, unknown>, source: string) {
  const rows = Object.entries(data)
    .filter(([key]) => key !== "source")
    .map(
      ([key, value]) =>
        `<tr><td style="padding:6px 12px;color:#888;font-family:sans-serif;font-size:13px;vertical-align:top;white-space:nowrap;">${escapeHtml(
          key
        )}</td><td style="padding:6px 12px;font-family:sans-serif;font-size:13px;">${escapeHtml(
          String(value ?? "")
        )}</td></tr>`
    )
    .join("");
  return `<table style="border-collapse:collapse;width:100%;max-width:600px;">
    <tr><td colspan="2" style="padding:6px 12px;font-family:sans-serif;font-size:13px;color:#888;">Source: ${escapeHtml(
      source
    )}</td></tr>
    ${rows}
  </table>`;
}

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  if (!data?.name || !data?.email || !data?.business) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const source = typeof data.source === "string" ? data.source : "start";
  console.log("[intake]", JSON.stringify({ ...data, source }));

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[intake] RESEND_API_KEY not set — email not sent, submission logged only.");
    return NextResponse.json({ ok: true, emailed: false });
  }

  try {
    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [NOTIFY_TO],
        reply_to: typeof data.email === "string" ? data.email : undefined,
        subject:
          source === "contact"
            ? `New contact message from ${data.name}`
            : `New intake: ${data.business ?? data.name}`,
        html: renderEmailHtml(data, source),
      }),
    });

    if (!emailRes.ok) {
      const detail = await emailRes.text();
      console.error("[intake] Resend send failed:", emailRes.status, detail);
      return NextResponse.json({ ok: true, emailed: false });
    }

    return NextResponse.json({ ok: true, emailed: true });
  } catch (err) {
    console.error("[intake] Resend request error:", err);
    return NextResponse.json({ ok: true, emailed: false });
  }
}
