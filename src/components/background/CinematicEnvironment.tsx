"use client";

import { useRef, type RefObject } from "react";
import { gsap } from "@/lib/gsap";
import useGSAP from "@/hooks/useGSAP";
import { cinematicMotion } from "@/design-system/motion";
import ArchitecturalGrid from "./ArchitecturalGrid";
import AtmosphericLight from "./AtmosphericLight";
import InterfaceSurface from "./InterfaceSurface";
import SceneTransition, { type EnvironmentTone } from "./SceneTransition";
import styles from "./CinematicEnvironment.module.css";

interface CinematicEnvironmentProps {
  tone?: EnvironmentTone;
  transitionTo?: EnvironmentTone;
  animated?: boolean;
  environmentRef?: RefObject<HTMLDivElement | null>;
  layout?: "bounded" | "opening";
}

/** Absolute sibling of content. Never put semantic content inside this layer. */
export default function CinematicEnvironment({
  tone = "navy",
  transitionTo = tone,
  animated = true,
  environmentRef,
  layout = "bounded",
}: CinematicEnvironmentProps) {
  const localRef = useRef<HTMLDivElement>(null);
  const rootRef = environmentRef ?? localRef;

  useGSAP(() => {
    const root = rootRef.current;
    if (!root || !animated) return;

    const media = gsap.matchMedia(root);
    media.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const objects = root.querySelectorAll("[data-scene-object]");
      const timeline = gsap.timeline({
        defaults: { ease: cinematicMotion.ease },
        scrollTrigger: {
          trigger: root.parentElement,
          start: "top top",
          end: () => `+=${window.innerHeight * cinematicMotion.scrollSpan}`,
          scrub: cinematicMotion.scrub,
          invalidateOnRefresh: true,
        },
      });

      // Independent shells own scroll transforms; the inner surfaces own
      // their static perspective. No ticker, React scroll state, or pin.
      timeline.to(objects, {
        y: (index: number) => (index % 2 ? -1 : 1) * cinematicMotion.travel.surface,
        x: (index: number) => (index % 2 ? 1 : -1) * 35,
        rotation: (index: number) => (index % 2 ? 1 : -1) * cinematicMotion.travel.rotation,
        duration: 1,
      }, 0);
      timeline.to(root.querySelector("[data-scene-grid]"), {
        y: cinematicMotion.travel.grid,
        duration: 1,
      }, 0);
      timeline.to(root.querySelector("[data-scene-light]"), {
        x: -cinematicMotion.travel.light,
        duration: 1,
      }, 0);
    });

    return () => media.revert();
  }, rootRef, [animated]);

  return (
    <div ref={rootRef} className={styles.environment} data-tone={tone} data-layout={layout} data-cinematic-environment aria-hidden="true">
      <div className={styles.field}>
        <div data-scene-light className={styles.lightLayer}><AtmosphericLight /></div>
        <div data-scene-grid className={styles.gridLayer}><ArchitecturalGrid /></div>
        <div className={styles.geometry}>
          {(["blueprint", "layers", "structure", "layers"] as const).map((kind, index) => (
            <div key={index} data-scene-object className={styles.object}>
              <InterfaceSurface kind={kind} />
            </div>
          ))}
        </div>
        <SceneTransition from={tone} to={transitionTo} />
      </div>
    </div>
  );
}
