
"use client";

import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "motion/react";

import { Button } from "@/components/ui";

export default function HeroActions() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : {
        opacity: 0,
        y: 26,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.85,
        delay: reduceMotion ? 0 : 1.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
    >
      <motion.div
        whileHover={reduceMotion ? undefined : {
          y: -3,
        }}
        whileTap={reduceMotion ? undefined : {
          scale: 0.98,
        }}
      >
        <Link href="/#contact">
          <Button size="lg">
            <Sparkles className="mr-2 h-5 w-5" />
            Discuss Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </motion.div>

      <motion.div
        whileHover={reduceMotion ? undefined : {
          y: -3,
        }}
        whileTap={reduceMotion ? undefined : {
          scale: 0.98,
        }}
      >
        <Link
          href="/#projects"
          className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-background-surface)] px-7 text-sm font-medium text-[var(--color-text-secondary)] transition-colors duration-300 hover:bg-[var(--color-background-hover)] hover:text-[var(--color-text-primary)]"
        >
          View Selected Work
        </Link>
      </motion.div>
    </motion.div>
  );
}
