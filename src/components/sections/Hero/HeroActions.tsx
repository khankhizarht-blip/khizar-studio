import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroActions() {
  return (
    <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
      <Link
        href="/#contact"
        style={{ color: "var(--color-accent-foreground)" }}
        className="inline-flex h-14 items-center justify-center rounded-full bg-[var(--color-accent)] px-8 text-lg font-medium text-[var(--color-accent-foreground)] transition-colors hover:bg-[var(--color-accent-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
      >
        <Sparkles aria-hidden="true" className="mr-2 h-5 w-5" />
        Discuss Your Project
        <ArrowRight aria-hidden="true" className="ml-2 h-5 w-5" />
      </Link>
      <Link
        href="/#projects"
        className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-background-surface)] px-7 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-background-hover)] hover:text-[var(--color-text-primary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
      >
        View Selected Work
      </Link>
    </div>
  );
}
