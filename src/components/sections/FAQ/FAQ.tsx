
"use client";

import { useEffect, useRef } from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { faq } from "@/data/faq";
import FAQItem from "./FAQItem";
import { gsap, initGSAP } from "@/lib/gsap";

export default function FAQ() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    initGSAP();

    const media = gsap.matchMedia();

    media.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        const label = content.querySelector(
          "[data-faq-label]"
        );
        const heading = content.querySelector(
          "[data-faq-heading]"
        );
        const description = content.querySelector(
          "[data-faq-description]"
        );
        const divider = content.querySelector(
          "[data-faq-divider]"
        );

        if (
          !label ||
          !heading ||
          !description ||
          !divider
        ) {
          return;
        }

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: content,
            start: "top 82%",
            toggleActions: "play none none none",
            once: true,
          },
        });

        timeline
          .fromTo(
            label,
            {
              autoAlpha: 0,
              y: 18,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
            }
          )
          .fromTo(
            heading,
            {
              autoAlpha: 0,
              y: 45,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.85,
              ease: "power3.out",
            },
            0.12
          )
          .fromTo(
            description,
            {
              autoAlpha: 0,
              y: 25,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
            },
            0.32
          )
          .fromTo(
            divider,
            {
              scaleX: 0,
            },
            {
              scaleX: 1,
              duration: 1.05,
              ease: "power2.inOut",
            },
            0.3
          );

        return () => {
          timeline.scrollTrigger?.kill();
          timeline.kill();
        };
      }
    );

    return () => media.revert();
  }, []);

  return (
    <Section
      id="faq"
      className="overflow-hidden py-[var(--section-space)]"
    >
      <Container>
        <div
          ref={contentRef}
          className="mx-auto max-w-3xl"
        >
          <div className="text-center">
            <p
              data-faq-label
              className="text-sm uppercase tracking-[var(--text-eyebrow-tracking)] text-[var(--color-accent)]"
            >
              Good to Know
            </p>

            <h2
              data-faq-heading
              className="mt-5 text-[length:var(--text-section-size)] font-semibold leading-[var(--text-section-leading)] tracking-[var(--text-heading-tracking)] text-[var(--color-text-primary)]"
              style={{
                fontFamily: "var(--font-display)",
              }}
            >
              Questions, answered.
            </h2>

            <p
              data-faq-description
              className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg"
            >
              Everything you need to know about working
              with Khizar Studio, from the first
              conversation to your website launch.
            </p>
          </div>

          <div className="mt-10 h-px overflow-hidden bg-[var(--color-border-strong)] sm:mt-12">
            <div
              data-faq-divider
              className="h-full w-full origin-center bg-[var(--color-accent)]"
            />
          </div>

          <div className="mt-8 space-y-3 sm:mt-10 sm:space-y-4">
            {faq.map((item) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
