
"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import Reveal from "@/components/animations/Reveal";
import type { ProcessStep as Step } from "@/types/process";

interface ProcessStepProps {
  step: Step;
  reveal?: boolean;
}

export default function ProcessStep({
  step,
  reveal = true,
}: ProcessStepProps) {
  const reduceMotion = useReducedMotion();
  const stepNumber = String(step.id).padStart(2, "0");

  return (
    <Reveal animated={reveal}>
      <motion.article
        initial="initial"
        whileHover={reduceMotion ? undefined : "hover"}
        className="
          group
          relative
          h-full
          overflow-hidden
          rounded-3xl
          border
          border-[var(--color-border)]
          bg-[var(--surface-card)]
          p-7
          backdrop-blur-xl
          transition-colors
          duration-500
          hover:border-[var(--color-border-strong)]
          hover:bg-[var(--surface-card-hover)]
          sm:p-9
        "
      >
        <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[var(--surface-glow)] blur-3xl transition-colors duration-500 group-hover:bg-[var(--surface-glow-hover)]" />

        <div className="relative flex items-center justify-between">
          <span className="text-sm font-medium tracking-[0.2em] text-[var(--color-text-muted)]">
            {stepNumber}
          </span>

          <motion.div
            variants={{
              initial: { x: 0, y: 0 },
              hover: { x: 2, y: -2 },
            }}
            transition={{ duration: 0.25 }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] transition-colors duration-300 group-hover:border-[var(--color-border-strong)] group-hover:text-[var(--color-text-primary)]"
          >
            <ArrowUpRight size={16} />
          </motion.div>
        </div>

        <h3 className="relative mt-7 text-xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-2xl">
          {step.title}
        </h3>

        <p className="relative mt-4 max-w-xl text-sm leading-7 text-[var(--color-text-secondary)] sm:mt-5 sm:text-base sm:leading-8">
          {step.description}
        </p>

        <div className="relative mt-8 h-px w-full overflow-hidden bg-[var(--surface-icon-hover)]">
          <motion.div
            variants={{
              initial: { scaleX: 0 },
              hover: { scaleX: 1 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="h-full origin-left bg-white/50"
          />
        </div>
      </motion.article>
    </Reveal>
  );
}
