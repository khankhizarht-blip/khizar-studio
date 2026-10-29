
import { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}

export default function Container({
  children,
  className,
  wide = false,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-[var(--page-gutter)]",
        wide
          ? "max-w-[var(--container-wide)]"
          : "max-w-[var(--container-max)]",
        className
      )}
    >
      {children}
    </div>
  );
}
