import Link from "next/link";
import { ArrowRight, EyeOff, PhoneMissed, TrendingDown, Zap, PenLine, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { HeroVisual } from "@/components/site/hero-visual";
import { Reveal } from "@/components/site/reveal";
import { Section, SectionHead } from "@/components/site/section";
import { PricingCards } from "@/components/site/pricing-cards";
import { DemoCard } from "@/components/site/demo-card";
import { Faq } from "@/components/site/faq";
import { CtaBand } from "@/components/site/cta-band";
import { DEMOS, INDUSTRIES, STEPS, TRUST_POINTS } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="glow-field relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 md:pb-28 md:pt-24">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div className="animate-fade-up">
            <p className="eyebrow mb-5">Done-for-you websites for local businesses</p>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-cream sm:text-5xl md:text-6xl">
              When locals search,
              <br />
              <span className="bg-gradient-to-r from-brand-soft to-brand bg-clip-text text-transparent">
                your business shows up.
              </span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-dim sm:text-lg">
              We build clean, professional websites for restaurants, barbers,
              cleaners, contractors and local services — live in days, built to
              be found on Google and in AI search, starting at $299.99.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/start">
                  Get my website <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">See demo sites</Link>
              </Button>
            </div>
            <p className="mt-5 text-xs text-faint">
              No meetings. No homework. One short form and we take it from there.
            </p>
          </div>
          <HeroVisual />
        </div>
      </section>

      {/* ── Trust strip ──────────────────────────────────── */}
      <section className="border-t hairline bg-[#0D0D16] px-5 py-10 sm:px-8">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
          {TRUST_POINTS.map((p) => (
            <div key={p.label} className="text-center md:text-left">
              <p className="font-display text-xl font-bold text-cream">{p.stat}</p>
              <p className="mt-1 text-sm text-dim">{p.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Problem ──────────────────────────────────────── */}
      <Section>
        <SectionHead
          eyebrow="The problem"
          title="No website doesn't mean no judgment. It means a fast one."
          lede="Before anyone calls, visits or books, they look you up. What they find in those first five seconds decides whether you get the customer — or the shop down the street does."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: EyeOff,
              title: "You're invisible where it counts",
              body: "Google, Maps, and now AI tools like ChatGPT recommend businesses they can actually read. No real website means no recommendation.",
            },
            {
              icon: TrendingDown,
              title: "You look smaller than you are",
              body: "You might be the best contractor in town — but a dead Facebook page tells customers the opposite. First impressions happen online now.",
            },
            {
              icon: PhoneMissed,
              title: "You lose calls you never knew about",
              body: "People don't email to say they picked someone else. They just quietly call whoever looked more legit. Every week, that's real money.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <Card className="h-full p-7">
                <item.icon className="h-6 w-6 text-brand-soft" />
                <h3 className="mt-5 font-display text-lg font-bold text-cream">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-dim">{item.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Solution ─────────────────────────────────────── */}
      <Section className="bg-[#0D0D16]">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHead
              eyebrow="The fix"
              title="We handle the website. You handle the business."
              lede="iGetSeen is a done-for-you service. No DIY builders, no agency runaround, no six-week timelines. You tell us about your business once — we design it, write it, and launch it."
            />
            <ul className="space-y-5">
              {[
                {
                  icon: Zap,
                  title: "Fast without looking fast",
                  body: "Live in days with the polish of a site that took months.",
                },
                {
                  icon: PenLine,
                  title: "Written for your customers",
                  body: "We write the words too — in plain language that makes people call, not corporate filler.",
                },
                {
                  icon: Search,
                  title: "Built to be found",
                  body: "Structured so Google and AI search tools can read, rank and recommend your business.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/15">
                    <item.icon className="h-5 w-5 text-brand-soft" />
                  </div>
                  <div>
                    <p className="font-semibold text-cream">{item.title}</p>
                    <p className="mt-1 text-sm text-dim">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Reveal>
            <Card className="glow-field p-8 md:p-10">
              <p className="eyebrow mb-6">What "done for you" actually means</p>
              <div className="space-y-4">
                {[
                  ["You give us", "10 minutes and a few photos"],
                  ["We deliver", "Design, copy, setup, launch"],
                  ["You get back", "Customers who found you online"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-center justify-between gap-4 rounded-xl border border-white/8 bg-white/[0.03] px-5 py-4"
                  >
                    <span className="text-sm text-dim">{k}</span>
                    <span className="text-right text-sm font-semibold text-cream">{v}</span>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* ── Packages preview ─────────────────────────────── */}
      <Section>
        <SectionHead
          center
          eyebrow="Packages"
          title="Premium work. Honest pricing."
          lede="Three ways to get seen — from a clean one-pager to a complete custom online system."
        />
        <PricingCards compact />
        <div className="mt-10 text-center">
          <Button asChild variant="ghost">
            <Link href="/pricing">
              Compare packages in detail <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* ── Demo portfolio ───────────────────────────────── */}
      <Section className="bg-[#0D0D16]">
        <SectionHead
          eyebrow="Demo sites"
          title="See the standard your site will be held to."
          lede="Concept builds for the kinds of businesses we serve — so you can see the level of polish before you spend a dollar."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DEMOS.slice(0, 3).map((demo, i) => (
            <Reveal key={demo.name} delay={i * 0.1}>
              <DemoCard demo={demo} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link href="/portfolio">View all demo sites</Link>
          </Button>
        </div>
      </Section>

      {/* ── Industries ───────────────────────────────────── */}
      <Section>
        <SectionHead
          eyebrow="Who we build for"
          title="Built for the businesses that keep towns running."
          lede="We don't build for everyone. We build for local businesses — and we know what makes their customers pick up the phone."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 0.06}>
              <Link
                href="/industries"
                className="group flex items-center gap-4 rounded-2xl border border-line bg-panel p-5 transition-all hover:-translate-y-0.5 hover:border-brand/40"
              >
                <span className="text-2xl" aria-hidden="true">
                  {ind.emoji}
                </span>
                <span className="font-semibold text-cream group-hover:text-brand-soft">
                  {ind.name}
                </span>
                <ArrowRight className="ml-auto h-4 w-4 text-faint transition-transform group-hover:translate-x-1 group-hover:text-brand-soft" />
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── How it works ─────────────────────────────────── */}
      <Section className="bg-[#0D0D16]">
        <SectionHead
          center
          eyebrow="How it works"
          title="From 'I need a website' to live — in four steps."
        />
        <div className="grid gap-6 md:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <div className="relative h-full rounded-2xl border border-line bg-panel p-6">
                <span className="font-display text-sm font-bold text-brand-soft">
                  Step {i + 1}
                </span>
                <h3 className="mt-3 font-display text-base font-bold leading-snug text-cream">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-dim">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild>
            <Link href="/start">
              Start step one now <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <Section>
        <SectionHead
          center
          eyebrow="Questions"
          title="Straight answers, before you ask."
        />
        <Faq />
      </Section>

      {/* ── Final CTA ────────────────────────────────────── */}
      <CtaBand />
    </>
  );
}
