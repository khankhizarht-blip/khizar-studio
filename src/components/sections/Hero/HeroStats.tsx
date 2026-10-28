
"use client";

import { motion, useReducedMotion } from "motion/react";
import { motionSettings } from "@/design-system";
import { stats } from "@/data/stats";

export default function HeroStats() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0.85,
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
              : motionSettings.duration.normal,
            delay: reduceMotion
              ? 0
              : motionSettings.delay.medium +
                index * motionSettings.stagger.normal,
            ease: motionSettings.ease.premium,
          }}
          className="
            rounded-[var(--radius-medium)]
            border border-[var(--color-border)]
            bg-[var(--color-background-elevated)]
            p-4 backdrop-blur-xl sm:p-5
            transition-colors
            duration-[var(--duration-normal)]
            hover:border-[var(--color-border-strong)]
            hover:bg-[var(--color-background-hover)]
          "
        >
          <p className="text-base font-semibold leading-tight text-[var(--color-text-primary)] sm:text-lg">
            {stat.value}
          </p>

          <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
