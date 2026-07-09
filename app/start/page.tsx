"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const PACKAGES = ["Starter — $299.99", "Growth — $499.99", "Pro / Premium — custom", "Not sure yet"];
const TYPES = [
  "Restaurant / Food truck",
  "Barber / Salon",
  "Cleaning service",
  "Contractor / Trades",
  "Auto / Detailing",
  "Other local service",
];

function encodeForm(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export default function StartPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [pkg, setPkg] = useState(PACKAGES[3]);
  const [type, setType] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries()) as Record<string, string>;
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm({ ...payload, package: pkg, businessType: type }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <section className="glow-field flex min-h-[70vh] items-center px-5 py-24 sm:px-8">
        <Card className="mx-auto max-w-xl p-10 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-brand-soft" />
          <h1 className="mt-6 font-display text-3xl font-bold text-cream">
            Got it. We&apos;re on it.
          </h1>
          <p className="mt-4 leading-relaxed text-dim">
            Your info is in. We&apos;ll review it and reach out within one business
            day with next steps. Meanwhile, if you have photos of your work, your
            space, or your food — gather your favorites. They&apos;ll make your
            site shine.
          </p>
        </Card>
      </section>
    );
  }

  return (
    <section className="glow-field px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <p className="eyebrow mb-4">Start your website</p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-cream sm:text-5xl">
            Ten minutes now.
            <br />
            <span className="text-brand-soft">Done forever.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-dim">
            This is the only homework you&apos;ll ever do. Answer what you can —
            we&apos;ll fill the gaps.
          </p>
        </div>

        <Card className="p-7 sm:p-10">
          <form
            name="start"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="start" />
            <p className="hidden">
              <label>
                Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
              </label>
            </p>
            <input type="hidden" name="package" value={pkg} />
            <input type="hidden" name="businessType" value={type} />
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Your name</Label>
                <Input id="name" name="name" required placeholder="Jordan Rivera" />
              </div>
              <div>
                <Label htmlFor="business">Business name</Label>
                <Input id="business" name="business" required placeholder="Rivera's Barbershop" />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="you@business.com" />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" placeholder="(555) 000-0000" />
              </div>
            </div>

            <fieldset>
              <Label>What kind of business?</Label>
              <div className="flex flex-wrap gap-2">
                {TYPES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setType(t)}
                    className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                      type === t
                        ? "border-brand bg-brand/15 text-cream"
                        : "border-white/10 bg-white/[0.03] text-dim hover:border-white/25"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <Label>Which package are you leaning toward?</Label>
              <div className="flex flex-wrap gap-2">
                {PACKAGES.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPkg(p)}
                    className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                      pkg === p
                        ? "border-brand bg-brand/15 text-cream"
                        : "border-white/10 bg-white/[0.03] text-dim hover:border-white/25"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </fieldset>

            <div>
              <Label htmlFor="location">City & state</Label>
              <Input id="location" name="location" placeholder="Reno, NV" />
            </div>

            <div>
              <Label htmlFor="about">Tell us about your business</Label>
              <Textarea
                id="about"
                name="about"
                placeholder="What do you do? Who are your best customers? What should someone do after finding your site — call, book, come in?"
              />
            </div>

            <div>
              <Label htmlFor="existing">Current website or social links (if any)</Label>
              <Input id="existing" name="existing" placeholder="facebook.com/riverasbarbershop" />
            </div>

            {status === "error" && (
              <p className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
                Something went wrong sending your form. Email us directly at{" "}
                <a href="mailto:hello@igetseen.com" className="underline">
                  hello@igetseen.com
                </a>{" "}
                and we&apos;ll take it from there.
              </p>
            )}

            <Button type="submit" size="lg" className="w-full" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send it — let's build"}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <p className="text-center text-xs text-faint">
              No payment now. We review your info, confirm the fit, then start.
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
}
