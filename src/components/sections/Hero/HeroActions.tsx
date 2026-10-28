
"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { motionSettings } from "@/design-system";

export default function HeroActions() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0.9,
              y: motionSettings.distance.small,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: reduceMotion
          ? 0
          : motionSettings.duration.slow,
        delay: reduceMotion
          ? 0
          : motionSettings.delay.short,
        ease: motionSettings.ease.premium,
      }}
      className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
    >
      <Link
        href="/#contact"
        className="
          inline-flex min-h-12 items-center justify-center
          gap-3 rounded-full px-7 py-3
          bg-[var(--color-accent)]
          text-[var(--color-accent-foreground)]
          font-medium
          transition-[background-color,transform,box-shadow]
          duration-[var(--duration-normal)]
          hover:bg-[var(--color-accent-hover)]
          hover:-translate-y-0.5
          hover:shadow-[var(--shadow-soft)]
          focus-visible:outline
          focus-visible:outline-2
          focus-visible:outline-offset-4
          focus-visible:outline-[var(--color-accent)]
        "
      >
        <Sparkles aria-hidden="true" className="h-5 w-5" />
        <span>Discuss Your Project</span>
        <ArrowRight aria-hidden="true" className="h-5 w-5" />
      </Link>

      <Link
        href="/#projects"
        className="
          inline-flex min-h-12 items-center justify-center
          rounded-full border
          border-[var(--color-border-strong)]
          bg-[var(--color-background-surface)]
          px-7 py-3 text-sm font-medium
          text-[var(--color-text-primary)]
          transition-[background-color,border-color,transform]
          duration-[var(--duration-normal)]
          hover:-translate-y-0.5
          hover:bg-[var(--color-background-hover)]
          focus-visible:outline
          focus-visible:outline-2
          focus-visible:outline-offset-4
          focus-visible:outline-[var(--color-accent)]
        "
      >
        View Selected Work
      </Link>
    </motion.div>
  );
}
