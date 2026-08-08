"use client";

import { motion } from "motion/react";

import Browser from "@/components/browser/Browser";
import { Tilt } from "@/components/interactions";

export default function BrowserShowcase() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        delay: 0.5,
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
          animate={{
            y: [0, -12, 0],
          }}
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