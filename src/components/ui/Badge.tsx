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
        "inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-zinc-300",
        className
      )}
    >
      {children}
    </span>
  );
}