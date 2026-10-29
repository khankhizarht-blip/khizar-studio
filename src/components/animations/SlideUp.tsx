
"use client";

import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";
import { animationPresets, motionSettings } from "@/design-system";

interface SlideUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function SlideUp({
  children,
  delay = 0,
  className,
}: SlideUpProps) {
  const reduceMotion = useReducedMotion();
  const preset = animationPresets.slideUp;

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
