"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEntrance } from "@/components/providers/EntranceProvider";

import { stats } from "@/data/stats";

export default function HeroStats() {
  const { ready } = useEntrance();
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : {
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: ready ? 1 : 0,
        y: ready ? 0 : 20,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.8,
        delay: reduceMotion ? 0 : 0.4,
      }}
      className="
        mx-auto
        mt-12
        grid
        max-w-4xl
        grid-cols-2
        gap-3
        sm:grid-cols-4
      "
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="
            rounded-2xl
            border
            border-[var(--color-border)]
            bg-[var(--color-background-elevated)]
            p-4 sm:p-5
            backdrop-blur-xl
            transition
            duration-300
            hover:border-[var(--color-border-strong)]
            hover:bg-[var(--color-background-hover)]
          "
        >
          <p
            className="
              text-base leading-tight
              font-semibold
              text-[var(--color-text-primary)]
              sm:text-lg
            "
          >
            {stat.value}
          </p>

          <p
            className="
              mt-2
              text-xs
              uppercase
              tracking-[0.2em]
              text-[var(--color-text-muted)]
            "
          >
            {stat.label}
          </p>
        </div>
      ))}
    </motion.div>
  );
}