"use client";

import { motion, useReducedMotion } from "motion/react";
import { motionSettings } from "@/design-system";
import { useEntrance } from "@/components/providers/EntranceProvider";

import Browser from "@/components/browser/Browser";
import { Tilt } from "@/components/interactions";

export default function BrowserShowcase() {
  const { ready } = useEntrance();
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : {
        opacity: 0,
        y: 60,
      }}
      animate={{
        opacity: ready ? 1 : 0,
        y: ready ? 0 : 60,
      }}
      transition={{
        duration: reduceMotion ? 0 : motionSettings.duration.loading,
        delay: reduceMotion ? 0 : 0.5,
        ease: "easeOut",
      }}
      className="
        relative
        mx-auto
        max-w-6xl
      "
    >
      {/* Ambient Glow */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          mx-auto
          h-96
          max-w-3xl
          rounded-full
          bg-[var(--color-accent)]/10
          blur-[120px]
        "
      />

      {/* Tilt-only browser preview; no perpetual movement */}

      <Tilt>
        <motion.div
          
          className="
            rounded-[var(--radius-extra-large)]
            border
            border-[var(--color-border)]
            bg-[var(--color-background-elevated)]
            p-2
            shadow-[var(--shadow-floating)]
            backdrop-blur-xl
          "
        >
          <Browser />
        </motion.div>
      </Tilt>
    </motion.div>
  );
}