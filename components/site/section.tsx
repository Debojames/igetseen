import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("border-t hairline px-5 py-20 sm:px-8 md:py-28", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lede,
  center,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("mb-12 max-w-2xl md:mb-16", center && "mx-auto text-center")}>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-cream sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {lede && <p className="mt-5 text-base leading-relaxed text-dim sm:text-lg">{lede}</p>}
    </div>
  );
}
