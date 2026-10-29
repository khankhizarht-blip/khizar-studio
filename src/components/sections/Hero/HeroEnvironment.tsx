"use client";

import { useRef } from "react";
import CinematicEnvironment from "@/components/background/CinematicEnvironment";
import useGSAP from "@/hooks/useGSAP";
import { gsap } from "@/lib/gsap";
import { openingPose } from "@/lib/opening-motion";
import { cinematicMotion } from "@/design-system/motion";

export default function HeroEnvironment() {
  const environmentRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const root = environmentRef.current;
    const host = root?.parentElement;
    const laptop = host?.querySelector<HTMLElement>('[aria-label="Scroll-controlled 3D laptop showcase"]');
    if (!root || !host || !laptop) return;
    const media = gsap.matchMedia(root);
    media.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const objects = [...root.querySelectorAll<HTMLElement>("[data-scene-object]")];
      const grid = root.querySelector<HTMLElement>("[data-scene-grid]")!;
      const light = root.querySelector<HTMLElement>("[data-scene-light]")!;
      const elements = [...objects, grid, light];
      const originalStyles = elements.map((element) => element.getAttribute("style"));
      const setters = elements.map((element) => gsap.quickSetter(element, "css"));
      const clock = { progress: 0 };
      const metrics = { start: 0, total: 1, intro: 1, laptop: 1 };
      const render = () => {
        if (!root.isConnected) return;
        const distance = clock.progress * metrics.total;
        const pose = openingPose(distance / metrics.intro, (distance - metrics.intro) / metrics.laptop);
        pose.surfaces.forEach((surface, index) => setters[index](surface));
        setters[objects.length](pose.grid);
        setters[objects.length + 1](pose.light);
      };
      // One clock owns all decorative poses across both sections, avoiding
      // competing timelines at the handoff. No model/camera/progress-ref writes.
      const tween = gsap.to(clock, {
        progress: 1,
        ease: cinematicMotion.ease,
        onUpdate: render,
        scrollTrigger: {
          trigger: host,
          start: "top top",
          endTrigger: laptop,
          end: "bottom bottom",
          scrub: cinematicMotion.scrub,
          invalidateOnRefresh: true,
          onRefresh(self) {
            metrics.start = self.start;
            metrics.total = Math.max(1, self.end - self.start);
            metrics.intro = Math.max(1, laptop.getBoundingClientRect().top + window.scrollY - metrics.start);
            metrics.laptop = Math.max(1, laptop.offsetHeight - window.innerHeight);
            clock.progress = self.progress;
            render();
          },
        },
      });
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
        // quickSetter does not allocate context-owned tweens: restore explicitly.
        elements.forEach((element, index) => {
          const style = originalStyles[index];
          if (style === null) element.removeAttribute("style");
          else element.setAttribute("style", style);
        });
      };
    });
    return () => media.revert();
  }, environmentRef);

  return <CinematicEnvironment animated={false} environmentRef={environmentRef} layout="opening" />;
}
