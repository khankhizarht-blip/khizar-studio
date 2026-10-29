
"use client";

import { useEffect, useRef } from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { gsap, initGSAP } from "@/lib/gsap";

import HeroContent from "./HeroContent";
import HeroActions from "./HeroActions";
import HeroStats from "./HeroStats";
import BrowserShowcase from "./BrowserShowcase";
import CinematicEnvironment from "@/components/background/CinematicEnvironment";

export default function Hero() {
  const introRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intro = introRef.current;
    const circle = circleRef.current;

    if (!intro || !circle) return;

    initGSAP();

    const media = gsap.matchMedia();

    media.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        const timeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: intro,
            start: "top top",
            end: "bottom top",
            scrub: 0.7,
            invalidateOnRefresh: true,
          },
        });

        timeline
          .fromTo(
            circle,
            { scale: 1, opacity: 1 },
            {
              scale: 1.3,
              opacity: 0,
              duration: 1,
            },
            0
          );

        return () => timeline.kill();
      }
    );

    return () => media.revert();
  }, []);

  return (
    <div className="relative isolate">
      <CinematicEnvironment />
      <div ref={introRef} className="relative">
        <Section className="relative overflow-hidden pb-8 pt-32 sm:pt-36 lg:pt-40">
          <div
            ref={circleRef}
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-20 hidden h-[500px] w-[500px] -translate-x-1/2 rounded-full border border-[var(--color-border)] md:block"
          />

          <Container>
            <div
              data-hero-content
              className="relative z-10 mx-auto max-w-4xl text-center"
            >
              <HeroContent />
              <HeroActions />
              <HeroStats />
            </div>
          </Container>
        </Section>
      </div>

      <BrowserShowcase />
    </div>
  );
}
