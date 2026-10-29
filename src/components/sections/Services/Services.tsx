
"use client";

import { useEffect, useRef } from "react";
import { ArrowDownRight } from "lucide-react";

import { gsap, ScrollTrigger, initGSAP } from "@/lib/gsap";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ServiceCard from "./ServiceCard";
import { services } from "@/data/services";

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    initGSAP();

    const media = gsap.matchMedia();

    media.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        const eyebrow = section.querySelector<HTMLElement>(
          "[data-services-eyebrow]"
        );
        const heading = section.querySelector<HTMLElement>(
          "[data-services-heading]"
        );
        const description = section.querySelector<HTMLElement>(
          "[data-services-description]"
        );
        const line = section.querySelector<HTMLElement>(
          "[data-services-line]"
        );
        const cards = gsap.utils.toArray<HTMLElement>(
          section.querySelectorAll("[data-services-card]")
        );
        const outro = section.querySelector<HTMLElement>(
          "[data-services-outro]"
        );

        if (
          !eyebrow ||
          !heading ||
          !description ||
          !line ||
          !outro ||
          cards.length === 0
        ) {
          return;
        }

        gsap.set(line, {
          scaleX: 0,
          transformOrigin: "left center",
        });

        const headingTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            end: "top 32%",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });

        headingTimeline
          .fromTo(
            eyebrow,
            {
              autoAlpha: 0,
              y: 24,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.5,
              ease: "none",
            }
          )
          .fromTo(
            heading,
            {
              autoAlpha: 0,
              y: 65,
              rotateX: -8,
            },
            {
              autoAlpha: 1,
              y: 0,
              rotateX: 0,
              duration: 1,
              ease: "none",
            },
            0.15
          )
          .fromTo(
            description,
            {
              autoAlpha: 0,
              y: 34,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              ease: "none",
            },
            0.55
          )
          .to(
            line,
            {
              scaleX: 1,
              duration: 0.8,
              ease: "none",
            },
            0.55
          );

        const cardsTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: cards[0],
            start: "top 88%",
            end: "top 27%",
            scrub: 0.7,
            invalidateOnRefresh: true,
          },
        });

        cardsTimeline.fromTo(
          cards,
          {
            autoAlpha: 0,
            y: (index: number) => 85 + index * 28,
            rotateX: -7,
            scale: 0.94,
          },
          {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            duration: 1,
            stagger: 0.19,
            ease: "none",
          }
        );

        const outroTween = gsap.fromTo(
          outro,
          {
            autoAlpha: 0,
            y: 28,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: outro,
              start: "top 90%",
              once: true,
            },
          }
        );

        return () => {
          headingTimeline.scrollTrigger?.kill();
          headingTimeline.kill();

          cardsTimeline.scrollTrigger?.kill();
          cardsTimeline.kill();

          outroTween.scrollTrigger?.kill();
          outroTween.kill();
        };
      }
    );

    const refreshId = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(refreshId);
      media.revert();
    };
  }, []);

  return (
    <Section
      id="services"
      className="relative overflow-hidden py-[var(--section-space)]"
    >
      <div
        ref={sectionRef}
        className="relative"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 45% 45% at 85% 45%, rgba(214,183,128,0.055), transparent 80%)",
          }}
        />

        <Container>
          <div className="relative z-10">
            <div className="grid items-end gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
              <div style={{ perspective: "1200px" }}>
                <p
                  data-services-eyebrow
                  className="text-sm font-medium uppercase tracking-[var(--text-eyebrow-tracking)] text-[var(--color-accent)]"
                >
                  What We Do
                </p>

                <h2
                  data-services-heading
                  className="mt-5 text-[length:var(--text-section-size)] font-semibold leading-[var(--text-section-leading)] tracking-[var(--text-heading-tracking)] text-[var(--color-text-primary)]"
                  style={{
                    fontFamily: "var(--font-display)",
                    transformOrigin: "center bottom",
                  }}
                >
                  More than a website.
                  <span className="block text-[var(--color-text-secondary)]">
                    A better way to grow.
                  </span>
                </h2>
              </div>

              <div className="lg:pb-2">
                <p
                  data-services-description
                  className="max-w-lg text-base leading-8 text-[var(--color-text-secondary)]"
                >
                  Your website should do more than look good.
                  It should build trust, communicate your value,
                  and help the right customers choose your business.
                </p>
              </div>
            </div>

            <div className="mt-12 h-px w-full overflow-hidden bg-[var(--color-border-strong)]">
              <div
                data-services-line
                className="h-full w-full origin-left bg-[var(--color-accent)]"
              />
            </div>

            <div
              className="mt-10 grid items-stretch gap-6 md:grid-cols-3"
              style={{
                perspective: "1400px",
              }}
            >
              {services.map((service, index) => (
                <div
                  key={service.id}
                  data-services-card
                  className="h-full"
                  style={{
                    transformOrigin: "center bottom",
                    willChange: "transform, opacity",
                  }}
                >
                  <ServiceCard
                    service={service}
                    index={index}
                  />
                </div>
              ))}
            </div>

            <div
              data-services-outro
              className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-[var(--color-border)] pt-7"
            >
              <p className="max-w-xl text-sm leading-relaxed text-[var(--color-text-muted)]">
                Every project is built around a simple goal:
                create something your business can actually use to grow.
              </p>

              <a
                href="#projects"
                className="group inline-flex items-center gap-3 text-sm font-semibold text-[var(--color-accent)] transition-opacity hover:opacity-75"
              >
                See our work
                <ArrowDownRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}
