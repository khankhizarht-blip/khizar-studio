"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEntrance } from "@/components/providers/EntranceProvider";
import { motionSettings } from "@/design-system";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const { finish } = useEntrance();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), reduceMotion ? 0 : motionSettings.duration.loading * 1000);
    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  return (
    <AnimatePresence onExitComplete={finish}>
      {loading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : motionSettings.duration.normal }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-background)]"
          role="status"
          aria-label="Loading Khizar Studio"
        >
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : motionSettings.duration.slow }}
            className="text-center"
          >
            <p className="text-3xl font-semibold tracking-tight text-[var(--color-text-primary)]">Khizar Studio</p>
            <p className="mt-3 text-xs uppercase tracking-[0.4em] text-[var(--color-text-muted)]">Independent Digital Studio</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
