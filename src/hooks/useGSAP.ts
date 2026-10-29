"use client";

import {
  DependencyList,
  RefObject,
  useEffect,
} from "react";

import { gsap, initGSAP } from "@/lib/gsap";

export default function useGSAP(
  callback: () => void | (() => void),
  scope?: RefObject<HTMLElement | null>,
  dependencies: DependencyList = []
) {
  useEffect(() => {
    initGSAP();

    // Context owns synchronous tweens, ScrollTriggers, and the cleanup
    // returned by the caller. Revert restores styles as well as killing work.
    const context = gsap.context(() => callback(), scope);

    return () => context.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope, ...dependencies]);
}