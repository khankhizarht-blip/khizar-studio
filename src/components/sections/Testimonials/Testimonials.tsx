
"use client";

import { useEffect, useRef } from "react";
import {
  ArrowUpRight,
  MessageCircleMore,
  MousePointer2,
  Gauge,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { gsap, ScrollTrigger, initGSAP } from "@/lib/gsap";

const principles = [
  {
    number: "01",
    title: "Clear communication",
    description:
      "Know what is being built, why it matters, and what comes next. No unnecessary complexity or surprises.",
    Icon: MessageCircleMore,
  },
  {
    number: "02",
    title: "Design with purpose",
    description:
      "Every layout, interaction, and call to action serves the business and the people using the website.",
    Icon: MousePointer2,
  },
  {
    number: "03",
    title: "Built to perform",
    description:
      "Responsive implementation, accessibility, and performance are part of the process from the start.",
    Icon: Gauge,
  },
] as const;

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    initGSAP();

    const media = gsap.matchMedia(section);

    media.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        const intro = section.querySelector<HTMLElement>(
          "[data-principles-intro]"
        );

        const cards = gsap.utils.toArray<HTMLElement>(
          section.querySelectorAll("[data-principle-card]")
        );

        const line = section.querySelector<HTMLElement>(
          "[data-principles-line]"
        );

        const closing = section.querySelector<HTMLElement>(
          "[data-principles-closing]"
        );

        if (!intro || cards.length === 0 || !line || !closing) {
          return;
        }

        const animations: gsap.core.Animation[] = [];

        const introTween = gsap.fromTo(
          intro,
          { autoAlpha: 0, y: 45 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: intro,
              start: "top 85%",
              once: true,
            },
          }
        );

        animations.push(introTween);

        // A single scrubbed timeline controls the entire
        // card sequence rather than competing reveal effects.
        const cardsTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: "[data-principles-grid]",
            start: "top 85%",
            end: "top 30%",
            scrub: 0.7,
            invalidateOnRefresh: true,
          },
        });

        cardsTimeline.fromTo(
          cards,
          {
            autoAlpha: 0,
            y: (index: number) => 65 + index * 25,
            rotateX: -7,
            scale: 0.95,
          },
          {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            stagger: 0.17,
            duration: 0.85,
            ease: "none",
          }
        );

        animations.push(cardsTimeline);

        const lineTween = gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: "[data-principles-grid]",
              start: "top 85%",
              end: "bottom 50%",
              scrub: 0.7,
              invalidateOnRefresh: true,
            },
          }
        );

        animations.push(lineTween);

        const closingTween = gsap.fromTo(
          closing,
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
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

    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(raf);
      media.revert();
    };
  }, []);

  return (
    <Section className="relative overflow-hidden py-[var(--section-space)]">
      <div ref={sectionRef} className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 50% 55%, rgba(214,183,128,0.045), transparent 80%)",
          }}
        />

        <Container>
          <div className="relative z-10">
            <div
              data-principles-intro
              className="max-w-3xl"
            >
              <p className="text-xs font-semibold uppercase tracking-[var(--text-eyebrow-tracking)] text-[var(--color-accent)]">
                How I Work
              </p>

              <h2
                className="mt-5 text-[length:var(--text-section-size)] font-semibold leading-[var(--text-section-leading)] tracking-[var(--text-heading-tracking)] text-[var(--color-text-primary)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Good work builds trust.
                <span className="block text-[var(--color-text-muted)]">
                  Great experiences keep it.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
                A strong website takes more than good looks.
                Here is what you can expect when working with
                Khizar Studio.
              </p>
            </div>

            <div
              data-principles-grid
              className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-16"
              style={{ perspective: "1200px" }}
            >
              {principles.map(
                ({ number, title, description, Icon }) => (
                  <article
                    key={number}
                    data-principle-card
                    className="
                      group relative flex h-full min-h-[310px]
                      flex-col overflow-hidden
                      rounded-[var(--radius-large)]
                      border border-[var(--color-border)]
                      bg-[var(--color-background-surface)]
                      p-7 transition-[border-color,background-color,box-shadow]
                      duration-500
                      hover:border-[var(--color-border-strong)]
                      hover:bg-[var(--color-background-elevated)]
                      hover:shadow-[var(--shadow-card)]
                      sm:p-8
                    "
                    style={{
                      transformOrigin: "center bottom",
                    }}
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />

                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-background)] transition-transform duration-500 group-hover:-translate-y-1">
                        <Icon
                          aria-hidden="true"
                          className="h-6 w-6 text-[var(--color-accent)]"
                        />
                      </div>

                      <span className="text-xs tracking-[0.2em] text-[var(--color-text-muted)]">
                        {number}
                      </span>
                    </div>

                    <div className="mt-auto pt-12">
                      <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-2xl">
                        {title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-[var(--color-text-secondary)]">
                        {description}
                      </p>
                    </div>

                    <ArrowUpRight
                      aria-hidden="true"
                      className="absolute bottom-7 right-7 h-4 w-4 text-[var(--color-text-muted)] opacity-0 transition-[opacity,transform] duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </article>
                )
              )}
            </div>

            <div className="mt-12 h-px w-full overflow-hidden bg-[var(--color-border-strong)]">
              <div
                data-principles-line
                className="h-full w-full origin-left scale-x-0 bg-[var(--color-accent)]"
              />
            </div>

            <div
              data-principles-closing
              className="mt-7 flex flex-wrap items-center justify-between gap-5"
            >
              <p className="max-w-xl text-sm leading-relaxed text-[var(--color-text-muted)]">
                A collaborative process. Thoughtful decisions.
                A website built for the people who use it.
              </p>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] transition-opacity hover:opacity-75"
              >
                Let&apos;s work together
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}
