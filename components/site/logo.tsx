import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("font-display text-xl font-bold tracking-tight", className)}
      aria-label="iGetSeen home"
    >
      <span className="text-white">i</span>
      <span className="text-brand">Get</span>
      <span className="text-white">Seen</span>
    </Link>
  );
}
