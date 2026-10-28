import { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-[var(--color-border)] bg-[var(--surface-card-hover)] px-3 py-1 text-xs uppercase tracking-[var(--text-eyebrow-tracking)] text-[var(--color-text-secondary)]",
        className
      )}
    >
      {children}
    </span>
  );
}