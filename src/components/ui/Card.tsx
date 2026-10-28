
import { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export default function Card({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-large)] border border-[var(--color-border)] bg-[var(--surface-card)] backdrop-blur-sm transition-colors duration-[var(--duration-normal)]",
        className
      )}
      {...props}
    />
  );
}
