"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import HeroContent from "./HeroContent";
import HeroActions from "./HeroActions";
import HeroStats from "./HeroStats";
import BrowserShowcase from "./BrowserShowcase";
import HeroEnvironment from "./HeroEnvironment";

export default function Hero() {
  return (
    <div className="relative isolate" data-opening-sequence>
      <HeroEnvironment />
      <div className="relative" data-opening-intro>
        <Section className="relative overflow-hidden pb-8 pt-32 sm:pt-36 lg:pt-40">
          <Container>
            <div data-hero-content className="relative z-10 mx-auto max-w-4xl text-center">
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
