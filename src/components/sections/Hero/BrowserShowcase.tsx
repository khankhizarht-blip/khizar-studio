
"use client";

import { motion, useReducedMotion } from "motion/react";
import { motionSettings } from "@/design-system";
import Browser from "@/components/browser/Browser";
import { Tilt } from "@/components/interactions";

export default function BrowserShowcase() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0.9,
              y: motionSettings.distance.medium,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: reduceMotion
          ? 0
          : motionSettings.duration.reveal,
        delay: reduceMotion
          ? 0
          : motionSettings.delay.medium,
        ease: motionSettings.ease.premium,
      }}
      className="relative mx-auto max-w-6xl"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 mx-auto h-96 max-w-3xl rounded-full bg-[var(--color-accent)]/5 blur-[120px]"
      />

      <Tilt>
        <div
          className="
            rounded-[var(--radius-extra-large)]
            border border-[var(--color-border)]
            bg-[var(--color-background-elevated)]
            p-2
            shadow-[var(--shadow-floating)]
            backdrop-blur-xl
          "
        >
          <Browser />
        </div>
      </Tilt>
    </motion.div>
  );
}
