"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Search, Star, Phone, MapPin, Sparkles } from "lucide-react";

const QUERY = "barber near me";

export function HeroVisual() {
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.21, 0.7, 0.3, 1] as const },
        };

  return (
    <div className="relative mx-auto w-full max-w-md select-none" aria-hidden="true">
      {/* ambient glow behind the stack */}
      <div className="absolute -inset-8 rounded-[2rem] bg-brand/15 blur-3xl" />

      <div className="relative space-y-3">
        {/* search bar */}
        <motion.div
          {...rise(0.1)}
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-raise/90 px-4 py-3.5 shadow-card backdrop-blur"
        >
          <Search className="h-4 w-4 shrink-0 text-brand-soft" />
          <span className="text-sm text-cream">
            {QUERY}
            <motion.span
              className="ml-0.5 inline-block h-4 w-px translate-y-0.5 bg-brand-soft"
              animate={reduce ? {} : { opacity: [1, 0, 1] }}
              transition={{ duration: 1.1, repeat: Infinity }}
            />
          </span>
          <span className="ml-auto rounded-full bg-brand/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-soft">
            AI + Google
          </span>
        </motion.div>

        {/* winning result — the client */}
        <motion.div
          {...rise(0.45)}
          className="relative rounded-2xl border border-brand/50 bg-panel p-5 shadow-[0_0_50px_-12px_rgba(124,58,237,0.55)]"
        >
          <div className="absolute -top-2.5 left-5 flex items-center gap-1 rounded-full bg-brand px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
            <Sparkles className="h-3 w-3" /> Top result
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-deep font-display text-lg font-bold text-white">
              F
            </div>
            <div className="min-w-0">
              <p className="font-display text-base font-bold text-cream">Fade District Barbershop</p>
              <div className="mt-1 flex items-center gap-1.5 text-xs text-dim">
                <span className="flex items-center gap-0.5 text-amber-400">
                  <Star className="h-3 w-3 fill-current" /> 4.9
                </span>
                <span>·</span>
                <span>212 reviews</span>
                <span>·</span>
                <span>Open now</span>
              </div>
              <div className="mt-3 flex gap-2">
                <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-cream">
                  <Phone className="h-3 w-3 text-brand-soft" /> Call
                </span>
                <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-cream">
                  <MapPin className="h-3 w-3 text-brand-soft" /> Directions
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* the competition, fading below */}
        <motion.div {...rise(0.7)} className="space-y-2 opacity-50">
          {["Shear Genius Cuts — no website found", "Clipper Bros — last updated 2019"].map(
            (line) => (
              <div
                key={line}
                className="rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 text-xs text-faint"
              >
                {line}
              </div>
            )
          )}
        </motion.div>

        {/* floating proof chip */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="absolute -right-3 top-24 hidden rounded-full border border-brand/40 bg-ink px-3.5 py-2 text-xs font-semibold text-brand-soft shadow-glow sm:block"
        >
          Seen by 1,214 locals this month
        </motion.div>
      </div>
    </div>
  );
}
