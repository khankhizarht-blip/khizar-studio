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
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-400">
          {subtitle}
        </p>
      )}

      <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>

      {children}
    </div>
  );
}