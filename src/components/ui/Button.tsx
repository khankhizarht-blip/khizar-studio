
"use client";

import {
  ButtonHTMLAttributes,
  forwardRef,
} from "react";

import { cn } from "@/utils/cn";
import { Magnetic } from "@/components/interactions";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  magnetic?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      magnetic = true,
      children,
      ...props
    },
    ref
  ) => {
    const button = (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-all duration-[var(--duration-normal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-[var(--color-accent)] text-[var(--color-accent-foreground)] hover:bg-[var(--color-accent-hover)] hover:scale-[1.02]":
              variant === "primary",

            "border border-[var(--color-border-strong)] bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-background-hover)]":
              variant === "secondary",

            "bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-background-hover)]":
              variant === "ghost",

            "h-10 px-4 text-sm": size === "sm",
            "h-12 px-6 text-base": size === "md",
            "h-14 px-8 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );

    if (!magnetic) {
      return button;
    }

    return <Magnetic strength={0.15}>{button}</Magnetic>;
  }
);

Button.displayName = "Button";

export default Button;
