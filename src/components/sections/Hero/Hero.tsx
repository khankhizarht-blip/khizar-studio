
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
    <Section className="relative overflow-hidden pb-12 pt-32 sm:pb-20 sm:pt-36 lg:pb-[var(--section-space-compact)] lg:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block"
      >
        <Parallax offset={80}>
          <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full border border-[var(--color-border)]" />
        </Parallax>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-b from-transparent to-[var(--color-background)] sm:h-40"
      />

      <Container>
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <HeroContent />
            <HeroActions />
            <HeroStats />
          </div>

          <div className="mt-8 sm:mt-12 lg:mt-16">
            <Parallax offset={40}>
              <BrowserShowcase />
            </Parallax>
          </div>
        </div>
      </Container>
    </Section>
  );
}
