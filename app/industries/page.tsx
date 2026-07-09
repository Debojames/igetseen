import type { Metadata } from "next";
import { Section } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { Card } from "@/components/ui/card";
import { CtaBand } from "@/components/site/cta-band";
import { INDUSTRIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Websites built for restaurants, barbers, salons, cleaners, contractors, food trucks and local service businesses.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="glow-field px-5 pb-8 pt-16 sm:px-8 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-5">Industries</p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-cream sm:text-5xl">
            We speak your trade,
            <br />
            <span className="text-brand-soft">not just web design.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-dim sm:text-lg">
            A restaurant site and a contractor site have completely different
            jobs. We build around what makes customers choose <em>your</em> kind
            of business.
          </p>
        </div>
      </section>

      <Section className="border-t-0 pt-10">
        <div className="grid gap-6 md:grid-cols-2">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 2) * 0.1}>
              <Card className="h-full p-7 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="text-3xl" aria-hidden="true">
                    {ind.emoji}
                  </span>
                  <h2 className="font-display text-xl font-bold text-cream">{ind.name}</h2>
                </div>
                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-faint">
                      What costs you customers
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-dim">{ind.pain}</p>
                  </div>
                  <div className="rounded-xl border border-brand/25 bg-brand/[0.07] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-soft">
                      What we build
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-cream">{ind.build}</p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-dim">
          Don&apos;t see your business? If your customers find you by searching
          locally, we build for you too.
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
