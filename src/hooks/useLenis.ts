
"use client";

import { useEffect } from "react";
import Lenis from "lenis";

import { gsap, initGSAP, ScrollTrigger } from "@/lib/gsap";

export default function useLenis() {
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    initGSAP();

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    lenis.on("scroll", () => ScrollTrigger.update());

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);
}
