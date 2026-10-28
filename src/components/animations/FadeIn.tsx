
"use client";

import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";
import { animationPresets, motionSettings } from "@/design-system";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  className,
}: FadeInProps) {
  const reduceMotion = useReducedMotion();
  const preset = animationPresets.fadeIn;

  return (
    <motion.div
      initial={reduceMotion ? false : preset.initial}
      animate={preset.animate}
      transition={{
        ...preset.transition,
        duration: reduceMotion ? 0 : motionSettings.duration.reveal,
        delay: reduceMotion ? 0 : delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
