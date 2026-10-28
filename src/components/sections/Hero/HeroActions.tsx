
"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useEntrance } from "@/components/providers/EntranceProvider";


export default function HeroActions() {
  const { ready } = useEntrance();
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : {
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: ready ? 1 : 0,
        y: ready ? 0 : 20,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.7,
        delay: reduceMotion ? 0 : 0.2,
      }}
      className="
        mt-9
        flex
        flex-col
        items-center
        justify-center
        gap-3
        sm:flex-row
      "
    >
      <Link
        href="/#contact"
        className="inline-flex min-h-14 items-center justify-center rounded-full bg-[var(--color-accent)] px-7 text-base font-medium text-[var(--color-accent-foreground)] transition-colors duration-300 hover:bg-[var(--color-accent-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
        style={{ color: "var(--color-accent-foreground)" }}
      >
        <Sparkles aria-hidden="true" className="mr-2 h-5 w-5" />
        Discuss Your Project
        <ArrowRight aria-hidden="true" className="ml-2 h-5 w-5" />
      </Link>

      <Link
        href="/#projects"
        className="
          inline-flex
          h-12
          items-center
          justify-center
          rounded-full
          border
          border-[var(--color-border-strong)]
          bg-[var(--color-background-surface)]
          px-7
          text-sm
          font-medium
          text-[var(--color-text-secondary)]
          transition
          duration-300
          hover:border-[var(--color-border-strong)]
          hover:bg-[var(--color-background-hover)]
          hover:text-[var(--color-text-primary)]
        "
      >
        View Selected Work
      </Link>
    </motion.div>
  );
}
