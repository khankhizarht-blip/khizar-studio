"use client";

import { motion, useReducedMotion } from "motion/react";
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
        y: ready ? 0 : 20,
      }}
      transition={{
        duration: reduceMotion ? 0 : 1,
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
          bg-white/10
          blur-[120px]
        "
      />

      {/* Floating Browser */}

      <Tilt>
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            rounded-3xl
            border
            border-white/10
            bg-black/40
            p-2
            shadow-2xl
            backdrop-blur-xl
          "
        >
          <Browser />
        </motion.div>
      </Tilt>
    </motion.div>
  );
}