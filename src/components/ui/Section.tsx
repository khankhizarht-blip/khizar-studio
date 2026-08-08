import { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export default function Section({
  id,
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-24 lg:py-32",
        className
      )}
    >
      {children}
    </section>
  );
}