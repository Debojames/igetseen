"use client";

import { useState } from "react";
import { Mail, MessageSquare, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

function encodeForm(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries()) as Record<string, string>;
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm({ ...payload, business: payload.business || "(contact form)" }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="glow-field px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow mb-4">Contact</p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-cream sm:text-5xl">
            Talk to a person,
            <br />
            <span className="text-brand-soft">not a ticket system.</span>
          </h1>
          <p className="mt-6 max-w-md leading-relaxed text-dim">
            Questions about a package, a custom Pro build, booking and payment
            setup, or whether we&apos;re the right fit — send it over. We answer
            within one business day.
          </p>
          <div className="mt-10 space-y-5">
            <a
              href="mailto:hello@igetseen.com"
              className="flex items-center gap-4 text-cream transition-colors hover:text-brand-soft"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15">
                <Mail className="h-5 w-5 text-brand-soft" />
              </span>
              hello@igetseen.com
            </a>
            <div className="flex items-center gap-4 text-dim">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15">
                <MessageSquare className="h-5 w-5 text-brand-soft" />
              </span>
              Prefer the fast lane? Use the form — it goes straight to us.
            </div>
          </div>
        </div>

        <Card className="p-7 sm:p-10">
          {status === "done" ? (
            <div className="py-10 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-brand-soft" />
              <h2 className="mt-5 font-display text-2xl font-bold text-cream">Message sent.</h2>
              <p className="mt-3 text-dim">We&apos;ll get back to you within one business day.</p>
            </div>
          ) : (
            <form
              name="contact"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                </label>
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="you@business.com" />
                </div>
              </div>
              <div>
                <Label htmlFor="business">Business name (optional)</Label>
                <Input id="business" name="business" placeholder="Your business" />
              </div>
              <div>
                <Label htmlFor="message">What can we help with?</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us what you're looking for — a new site, a rebuild, a custom project, or just a question."
                />
              </div>
              {status === "error" && (
                <p className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
                  That didn&apos;t go through. Email us at{" "}
                  <a href="mailto:hello@igetseen.com" className="underline">
                    hello@igetseen.com
                  </a>
                  .
                </p>
              )}
              <Button type="submit" size="lg" className="w-full" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send message"}
              </Button>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
}
