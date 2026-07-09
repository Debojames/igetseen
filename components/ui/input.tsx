import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-cream placeholder:text-faint transition-colors focus:border-brand-soft/70 focus:bg-white/[0.06] focus-visible:outline-none",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Input.displayName = "Input";
export { Input };
