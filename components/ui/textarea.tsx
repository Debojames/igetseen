import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-cream placeholder:text-faint transition-colors focus:border-brand-soft/70 focus:bg-white/[0.06] focus-visible:outline-none",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
export { Textarea };
