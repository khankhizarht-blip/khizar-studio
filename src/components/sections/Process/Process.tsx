
"use client";

import { useEffect, useRef } from "react";
import { ArrowDownRight } from "lucide-react";

import Container from "@/components/ui/Container";
import { process } from "@/data/process";
import ProcessStep from "./ProcessStep";
import {
  gsap,
  ScrollTrigger,
  initGSAP,
} from "@/lib/gsap";

const ANIMATION = {
  cardLift: 75,
  cardScale: 0.95,
  cardStagger: 0.14,
  scrub: 0.65,
};

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    initGSAP();

    const media = gsap.matchMedia();

    media.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        const label = section.querySelector<HTMLElement>(
          "[data-process-label]"
        );
        const title = section.querySelector<HTMLElement>(
          "[data-process-title]"
        );
        const description = section.querySelector<HTMLElement>(
          "[data-process-description]"
        );
        const steps = gsap.utils.toArray<HTMLElement>(
          section.querySelectorAll("[data-process-step]")
        );
        const progressLine = section.querySelector<HTMLElement>(
          "[data-process-progress]"
        );
        const closing = section.querySelector<HTMLElement>(
          "[data-process-closing]"
        );

        if (
          !label ||
          !title ||
          !description ||
          !progressLine ||
          !closing ||
          steps.length === 0
        ) {
          return;
        }

        const animations: gsap.core.Animation[] = [];

        const intro = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            end: "top 30%",
            scrub: ANIMATION.scrub,
            invalidateOnRefresh: true,
          },
        });

        intro
          .fromTo(
            label,
            { autoAlpha: 0, y: 24 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.45,
              ease: "none",
            }
          )
          .fromTo(
            title,
            {
              autoAlpha: 0,
              y: 60,
              scale: 0.97,
            },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.9,
              ease: "none",
            },
            0.15
          )
          .fromTo(
            description,
            { autoAlpha: 0, y: 32 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              ease: "none",
            },
            0.45
          );

        animations.push(intro);

        // Each process card enters as it reaches the viewport.
        steps.forEach((step, index) => {
          const tween = gsap.fromTo(
            step,
            {
              autoAlpha: 0,
              y: ANIMATION.cardLift,
              scale: ANIMATION.cardScale,
              rotateX: -5,
            },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
              duration: 0.85,
              delay: index * ANIMATION.cardStagger,
              ease: "power3.out",
              scrollTrigger: {
                trigger: step,
                start: "top 88%",
                end: "top 48%",
                scrub: ANIMATION.scrub,
                invalidateOnRefresh: true,
              },
            }
          );

          animations.push(tween);
        });

        // Gold vertical line fills as the user travels
        // through the process grid.
        gsap.set(progressLine, {
          scaleY: 0,
          transformOrigin: "top center",
        });

        const progressTween = gsap.to(progressLine, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-process-grid]",
            start: "top 72%",
            end: "bottom 43%",
            scrub: ANIMATION.scrub,
            invalidateOnRefresh: true,
          },
        });

        animations.push(progressTween);

        const closingTween = gsap.fromTo(
          closing,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: closing,
              start: "top 90%",
              once: true,
            },
          }
        );

        animations.push(closingTween);

        return () => {
          animations.forEach((animation) => {
            animation.scrollTrigger?.kill();
            animation.kill();
          });
        };
      }
    );

    const frame = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(frame);
      media.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      aria-label="Our development process"
      className="relative overflow-hidden py-[var(--section-space)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 55% at 15% 50%, rgba(214,183,128,0.045), transparent 80%)",
        }}
      />

      <Container>
        <div className="relative z-10">
          <div className="max-w-3xl">
            <p
              data-process-label
              className="text-sm uppercase tracking-[var(--text-eyebrow-tracking)] text-[var(--color-accent)]"
            >
              How We Work
            </p>

            <h2
              data-process-title
              className="mt-5 text-[length:var(--text-section-size)] font-semibold leading-[var(--text-section-leading)] tracking-[var(--text-heading-tracking)] text-[var(--color-text-primary)]"
              style={{
                fontFamily: "var(--font-display)",
              }}
            >
              Clear steps.
              <span className="block text-[var(--color-text-muted)]">
                Exceptional execution.
              </span>
            </h2>

            <p
              data-process-description
              className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)] sm:mt-6 sm:text-lg"
            >
              Great websites start with a clear plan.
              From understanding your business to launching
              your website, every stage has a purpose,
              so you know what comes next and what to expect.
            </p>
          </div>

          <div
            data-process-grid
            className="relative mt-14 sm:mt-16 lg:mt-20"
          >
            {/* Connecting line */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-3 top-0 hidden w-px bg-[var(--color-border-strong)] md:block lg:left-1/2"
            >
              <div
                data-process-progress
                className="h-full w-full origin-top bg-[var(--color-accent)]"
              />
            </div>

            <div className="relative grid gap-6 md:grid-cols-2 lg:gap-x-14 lg:gap-y-12">
              {process.map((step, index) => (
                <div
                  key={step.id}
                  data-process-step
                  className="relative min-w-0"
                  style={{
                    perspective: "1100px",
                  }}
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-[17px] top-10 z-20 hidden h-3 w-3 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-background)] md:block lg:hidden"
                  />

                  <ProcessStep step={step} />

                  <div className="mt-3 flex items-center justify-end gap-2 text-xs text-[var(--color-text-muted)]">
                    <span>
                      Step {String(index + 1).padStart(2, "0")}
                    </span>
                    <span aria-hidden="true">
                      /
                    </span>
                    <span>
                      {String(process.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            data-process-closing
            className="mt-16 flex flex-wrap items-center justify-between gap-5 border-t border-[var(--color-border)] pt-8"
          >
            <p className="max-w-xl text-sm leading-relaxed text-[var(--color-text-secondary)]">
              From the first conversation to launch,
              every decision is intentional.
            </p>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] transition-opacity hover:opacity-75"
            >
              Start your project
              <ArrowDownRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
