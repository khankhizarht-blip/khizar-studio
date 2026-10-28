
import { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface HeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export default function Heading({
  title,
  subtitle,
  align = "left",
  children,
}: HeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      {subtitle && (
        <p
          className="mb-3 text-xs font-semibold uppercase tracking-[var(--text-eyebrow-tracking)] text-[var(--color-text-secondary)]"
        >
          {subtitle}
        </p>
      )}

      <h2
        className="text-[length:var(--text-heading-size)] font-semibold leading-[var(--text-heading-leading)] tracking-[var(--text-heading-tracking)] text-[var(--color-text-primary)]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>

      {children}
    </div>
  );
}
