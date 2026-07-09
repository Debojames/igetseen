import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "./reveal";

export function CtaBand() {
  return (
    <section className="border-t hairline px-5 py-24 sm:px-8 md:py-32">
      <Reveal>
        <div className="glow-field relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-brand/30 bg-panel px-7 py-16 text-center shadow-glow sm:px-12 md:py-20">
          <p className="eyebrow mb-5">One form. One week. One less thing on your plate.</p>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-cream sm:text-4xl md:text-5xl">
            Your next customer is searching right now.
            <br className="hidden sm:block" />{" "}
            <span className="text-brand-soft">Make sure they find you.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-dim">
            Tell us about your business today and a professional website is off your
            to-do list for good.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/start">Get my website</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/pricing">See pricing</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
