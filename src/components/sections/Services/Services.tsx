
"use client";

import { useRef } from "react";

import { gsap } from "@/lib/gsap";
import useGSAP from "@/hooks/useGSAP";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const heading = headingRef.current;
      const cards = cardsRef.current;

      if (!heading || !cards) return;

      const media = gsap.matchMedia();

      media.add(
        "(prefers-reduced-motion: no-preference)",
        () => {
          gsap.fromTo(
            heading.children,
            {
              autoAlpha: 0,
              y: 22,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.75,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: heading,
                start: "top 82%",
                once: true,
              },
            }
          );

          gsap.fromTo(
            cards.children,
            {
              autoAlpha: 0,
              y: 28,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.14,
              ease: "power3.out",
              scrollTrigger: {
                trigger: cards,
                start: "top 85%",
                once: true,
              },
            }
          );
        }
      );

      return () => media.revert();
    },
    headingRef
  );

  return (
    <Section id="services" className="py-[var(--section-space)]">
      <Container>
        <div ref={headingRef} className="max-w-2xl">
          <p className="text-sm uppercase tracking-[var(--text-eyebrow-tracking)] text-[var(--color-text-muted)]">
            What We Do
          </p>

          <h2 className="mt-4 text-[length:var(--text-section-size)] font-semibold leading-[var(--text-section-leading)] tracking-[var(--text-heading-tracking)] text-[var(--color-text-primary)]">
            More than a website.
            <br />
            A better way to grow.
          </h2>

          <p className="mt-5 max-w-xl leading-relaxed text-[var(--color-text-secondary)]">
            Your website should do more than look good. It should build
            trust, communicate your value, and make it easier for the
            right customers to choose your business.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
