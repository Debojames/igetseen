import Link from "next/link";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "./reveal";
import { TIERS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function PricingCards({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {TIERS.map((tier, i) => (
        <Reveal key={tier.name} delay={i * 0.1}>
          <Card
            className={cn(
              "relative flex h-full flex-col p-7",
              tier.featured &&
                "border-brand/50 bg-gradient-to-b from-brand/[0.12] to-panel shadow-glow"
            )}
          >
            {tier.featured && (
              <span className="absolute -top-3 left-7 rounded-full bg-brand px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                Most popular
              </span>
            )}
            <p className="eyebrow">{tier.name}</p>
            <p className="mt-4 font-display text-4xl font-bold tracking-tight text-cream">
              {tier.price === "Contact for pricing" ? (
                <span className="text-2xl leading-tight">Contact for pricing</span>
              ) : (
                <>
                  {tier.price}
                  <span className="ml-1 text-sm font-medium text-faint">one-time build</span>
                </>
              )}
            </p>
            <p className="mt-3 text-sm font-medium text-cream">{tier.tagline}</p>
            {!compact && <p className="mt-2 text-sm leading-relaxed text-dim">{tier.blurb}</p>}

            <ul className="mt-6 flex-1 space-y-3">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-dim">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-soft" />
                  {f}
                </li>
              ))}
            </ul>

            <Button
              asChild
              variant={tier.featured ? "default" : "outline"}
              className="mt-8 w-full"
            >
              {tier.external ? (
                <a href={tier.href} target="_blank" rel="noopener noreferrer">
                  {tier.cta}
                </a>
              ) : (
                <Link href={tier.href}>{tier.cta}</Link>
              )}
            </Button>
            {tier.external && (
              <p className="mt-3 text-center text-[11px] text-faint">
                Secure checkout via Stripe
              </p>
            )}
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
