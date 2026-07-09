import { NextResponse } from "next/server";

/**
 * Legacy intake endpoint — no longer used.
 *
 * /start and /contact submit directly to Netlify Forms (POST to "/" with
 * data-netlify="true" on the <form>), which captures submissions and can
 * email debo@igetseen.com via a notification set up in the Netlify
 * dashboard (Project configuration -> Forms -> Form notifications) — no
 * API key required.
 *
 * This route is kept only so nothing 404s if something still points here.
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
