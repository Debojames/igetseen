import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { DEMOS } from "@/lib/data";

export function DemoCard({ demo }: { demo: (typeof DEMOS)[number] }) {
  const href = (demo as { demoUrl?: string }).demoUrl;
  const isLive = Boolean(href);

  const cardBody = (
    <>
      <div className="relative h-44 overflow-hidden">
        <img
          src={demo.image}
          alt={`${demo.name} — ${demo.type}`}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br mix-blend-multiply",
            demo.tone
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
        <span className="absolute right-4 top-4 rounded-full bg-ink/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-dim backdrop-blur">
          {isLive ? "View demo" : "Concept build"}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-bold text-cream">{demo.name}</h3>
            <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-brand-soft">
              {demo.type}
            </p>
          </div>
          {isLive && (
            <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-faint transition-colors group-hover:text-brand-soft" />
          )}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-dim">{demo.angle}</p>
      </div>
    </>
  );

  const className = cn(
    "group overflow-hidden transition-all duration-300",
    isLive && "cursor-pointer hover:-translate-y-1 hover:border-brand/40 hover:shadow-glow"
  );

  if (isLive) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        <Card className={className}>{cardBody}</Card>
      </a>
    );
  }

  return <Card className={className}>{cardBody}</Card>;
}
