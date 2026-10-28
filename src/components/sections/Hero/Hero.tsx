
"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import { Parallax } from "@/components/interactions";

import HeroContent from "./HeroContent";
import HeroActions from "./HeroActions";
import HeroStats from "./HeroStats";
import BrowserShowcase from "./BrowserShowcase";

export default function Hero() {
  return (
    <Section className="relative overflow-hidden pb-[var(--section-space-compact)]">
      <Parallax offset={80}>
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-20
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            border
            border-[var(--color-border)]
          "
        />
      </Parallax>

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-10
          h-40
          bg-gradient-to-b
          from-transparent
          via-[var(--color-background)]/40
          to-[var(--color-background)]
        "
      />

      <Container>
        <div className="relative z-0 mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <HeroContent />

            <HeroActions />

            <HeroStats />
          </div>

          <Parallax offset={40}>
            <div className="mt-14 lg:mt-16">
              <BrowserShowcase />
            </div>
          </Parallax>
        </div>
      </Container>
    </Section>
  );
}
