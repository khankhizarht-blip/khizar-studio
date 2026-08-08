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
      {/* Hero Background Glow */}

      <Parallax offset={80}>
        <div
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

      <Container>
        <div
          className="
            mx-auto
            max-w-6xl
          "
        >
          {/* Hero Copy */}

          <div className="mx-auto max-w-4xl text-center">
            <HeroContent />

            <HeroActions />

            <HeroStats />
          </div>

          {/* Browser Showcase */}

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