import type { Metadata } from "next";
import { Section, SectionHead } from "@/components/site/section";
import { DemoCard } from "@/components/site/demo-card";
import { Reveal } from "@/components/site/reveal";
import { CtaBand } from "@/components/site/cta-band";
import { DEMOS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Demo Sites",
  description:
    "Concept builds for restaurants, barbers, cleaners, contractors and local services — see the standard your website will be held to.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="glow-field px-5 pb-8 pt-16 sm:px-8 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-5">Demo sites</p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-cream sm:text-5xl">
            Judge us the way your
            <br />
            <span className="text-brand-soft">customers will judge you.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-dim sm:text-lg">
            These concept builds show the level of design, writing and structure
            every iGetSeen site is held to — for the exact kinds of businesses we
            serve.
          </p>
        </div>
      </section>

      <Section className="border-t-0 pt-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DEMOS.map((demo, i) => (
            <Reveal key={demo.name} delay={(i % 3) * 0.08}>
              <DemoCard demo={demo} />
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-faint">
          Demo builds shown as concepts. Your site is designed around your
          business, your customers and your goals — never a template with your
          name swapped in.
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
