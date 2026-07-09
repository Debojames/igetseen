import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-brand text-white shadow-glow hover:bg-brand-soft hover:shadow-[0_0_70px_-10px_rgba(167,139,250,0.6)] hover:-translate-y-0.5",
        outline:
          "border border-white/15 bg-white/[0.03] text-cream hover:border-brand-soft/60 hover:bg-brand/10",
        ghost: "text-dim hover:text-cream hover:bg-white/5",
      },
      size: {
        default: "h-11 px-6",
        lg: "h-13 px-8 py-3.5 text-base",
        sm: "h-9 px-4 text-xs",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
