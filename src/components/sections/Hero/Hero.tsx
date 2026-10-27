
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
    <Section className="relative overflow-hidden">
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
            border-white/5
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
          via-neutral-950/40
          to-neutral-950
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
            <div className="mt-20 lg:mt-24">
              <BrowserShowcase />
            </div>
          </Parallax>
        </div>
      </Container>
    </Section>
  );
}
