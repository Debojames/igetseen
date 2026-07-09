import type { Metadata } from "next";
import { ShieldCheck, RefreshCw, Wrench } from "lucide-react";
import { Section, SectionHead } from "@/components/site/section";
import { PricingCards } from "@/components/site/pricing-cards";
import { Reveal } from "@/components/site/reveal";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Faq } from "@/components/site/faq";
import { CtaBand } from "@/components/site/cta-band";
import { STRIPE_LINKS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Professional websites for local businesses. Starter $299.99, Growth $499.99, custom Pro builds quoted to fit.",
};

export default function PricingPage() {
  return (
    <>
      <section className="glow-field px-5 pb-8 pt-16 sm:px-8 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-5">Pricing</p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-cream sm:text-5xl">
            One price. One build.
            <br />
            <span className="text-brand-soft">Zero surprises.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-dim sm:text-lg">
            Agencies quote $3,000 and take two months. We productized the whole
            process so local businesses get the same polish — at a price that
            makes sense for a barbershop, not a bank.
          </p>
        </div>
      </section>

      <Section className="border-t-0 pt-10">
        <PricingCards />
        <p className="mt-8 text-center text-sm text-faint">
          Every site can add the monthly maintenance plan below — hosting, updates,
          and changes handled for you.
        </p>
      </Section>

      <Section className="bg-[#0D0D16]">
        <SectionHead
          center
          eyebrow="Keep it running"
          title="Maintenance — $39.99/mo. One plan, everything handled."
          lede="Your site shouldn't become another chore. One flat monthly plan keeps your website working as hard as you do."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: RefreshCw,
              title: "Updates on request",
              body: "New hours, new menu, new photos, new prices — email us and it's changed. No logins, no tutorials.",
            },
            {
              icon: ShieldCheck,
              title: "Fast, secure, monitored",
              body: "We keep your site quick and healthy so it never quietly breaks while you're busy running the business.",
            },
            {
              icon: Wrench,
              title: "A partner, not a handoff",
              body: "As your business grows, your site grows with it — new sections, seasonal promos, whatever the moment needs.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <Card className="h-full p-7">
                <item.icon className="h-6 w-6 text-brand-soft" />
                <h3 className="mt-5 font-display text-lg font-bold text-cream">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-dim">{item.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg">
            <a href={STRIPE_LINKS.maintenance} target="_blank" rel="noopener noreferrer">
              Add maintenance — $39.99/mo
            </a>
          </Button>
          <p className="mt-3 text-[11px] text-faint">Secure checkout via Stripe. Cancel anytime.</p>
        </div>
      </Section>

      <Section>
        <SectionHead center eyebrow="Questions" title="Pricing, answered straight." />
        <Faq />
      </Section>

      <CtaBand />
    </>
  );
}
