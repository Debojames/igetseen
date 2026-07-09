import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHead } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { Faq } from "@/components/site/faq";
import { CtaBand } from "@/components/site/cta-band";
import { STEPS } from "@/lib/data";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "One short form, and your professional website is off your to-do list. Here's the four-step iGetSeen process.",
};

const DETAILS = [
  "You'll answer questions like: what do you do, who do you serve, what should customers do first (call, book, visit), and what makes you the right choice. Attach photos if you have them — phone photos are fine, we'll make them look good.",
  "We pick the layout that fits your trade, write copy in your voice, and structure everything so search engines and AI tools can read it. You don't touch a design tool or write a word.",
  "You get a private preview link on your phone. Reply with changes — 'make the burger photo bigger,' 'add Sunday hours' — and we handle them until it's right.",
  "We connect your domain, launch the site, and set up the basics that help Google and AI search find you. Want it to stay fresh without lifting a finger? Add a maintenance plan.",
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="glow-field px-5 pb-8 pt-16 sm:px-8 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-5">How it works</p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-cream sm:text-5xl">
            You run a business.
            <br />
            <span className="text-brand-soft">This shouldn&apos;t feel like a second one.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-dim sm:text-lg">
            The whole process is built around one fact: you don&apos;t have time.
            Four steps, one short form, and it&apos;s handled.
          </p>
        </div>
      </section>

      <Section className="border-t-0 pt-10">
        <div className="mx-auto max-w-3xl space-y-6">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <div className="flex gap-5 rounded-2xl border border-line bg-panel p-6 sm:gap-7 sm:p-8">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-brand/10 font-display text-base font-bold text-brand-soft">
                  {i + 1}
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-cream">{step.title}</h2>
                  <p className="mt-2 text-sm font-medium text-dim">{step.body}</p>
                  <p className="mt-3 text-sm leading-relaxed text-faint">{DETAILS[i]}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/start">
              Start with the form <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      <Section className="bg-[#0D0D16]">
        <SectionHead center eyebrow="Questions" title="What owners usually ask next." />
        <Faq />
      </Section>

      <CtaBand />
    </>
  );
}
