"use client";

import {
  useScroll,
  useTransform,
} from "motion/react";

import { useReducedMotion } from "./useReducedMotion";

export function useParallax(
  offset = 50
) {
  const reducedMotion =
    useReducedMotion();

  const { scrollYProgress } =
    useScroll();

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion
      ? [0, 0]
      : [0, offset]
  );

  return {
    y,
  };
}