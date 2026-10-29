"use client";

import {
  DependencyList,
  RefObject,
  useEffect,
} from "react";

import { initGSAP } from "@/lib/gsap";

export default function useGSAP(
  callback: () => void | (() => void),
  scope?: RefObject<HTMLElement | null>,
  dependencies: DependencyList = []
) {
  useEffect(() => {
    initGSAP();

    const cleanup = callback();

    return typeof cleanup === "function"
      ? cleanup
      : undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope, ...dependencies]);
}