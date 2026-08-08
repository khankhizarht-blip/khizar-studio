"use client";

import { useRef } from "react";
import {
  useMotionValue,
  useSpring,
} from "motion/react";
import type {
  MouseEvent as ReactMouseEvent,
} from "react";

import { useReducedMotion } from "./useReducedMotion";

export function useMagnetic(
  strength = 0.25
) {
  const ref = useRef<HTMLDivElement | null>(null);

  const reducedMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  });

  const springY = useSpring(y, {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  });

  const handleMouseMove = (
    event: ReactMouseEvent<HTMLDivElement>
  ) => {
    if (
      reducedMotion ||
      !ref.current
    ) {
      return;
    }

    const rect =
      ref.current.getBoundingClientRect();

    const offsetX =
      event.clientX -
      (rect.left + rect.width / 2);

    const offsetY =
      event.clientY -
      (rect.top + rect.height / 2);

    x.set(offsetX * strength);
    y.set(offsetY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return {
    bind: {
      ref,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
    x: springX,
    y: springY,
  };
}