
"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import {
  gsap,
  ScrollTrigger,
  initGSAP,
} from "@/lib/gsap";

const values = [
  {
    number: "01",
    title: "Strategy First",
    description:
      "Every design decision has a purpose, from the first impression to the final call to action.",
  },
  {
    number: "02",
    title: "Premium Design",
    description:
      "Clean layouts, strong typography, refined interactions, and visual details that communicate quality.",
  },
  {
    number: "03",
    title: "Performance",
    description:
      "Modern technologies and efficient development keep the experience fast, responsive, and reliable.",
  },
] as const;

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    initGSAP();

    const media = gsap.matchMedia();

    media.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        const intro = root.querySelector<HTMLElement>(
          "[data-about-intro]"
        );

        const headline = root.querySelector<HTMLElement>(
          "[data-about-headline]"
        );

        const highlight = root.querySelector<HTMLElement>(
          "[data-about-highlight]"
        );

        const paragraphs = gsap.utils.toArray<HTMLElement>(
          root.querySelectorAll("[data-about-paragraph]")
        );

        const valuesGrid = root.querySelector<HTMLElement>(
          "[data-about-values]"
        );

        const cards = gsap.utils.toArray<HTMLElement>(
          root.querySelectorAll("[data-about-card]")
        );

        const progressLine = root.querySelector<HTMLElement>(
          "[data-about-progress]"
        );

        if (
          !intro ||
          !headline ||
          !highlight ||
          !valuesGrid ||
          !progressLine ||
          paragraphs.length === 0 ||
          cards.length === 0
        ) {
          return;
        }

        // Continuous editorial motion.
        // Animates throughout the section's scroll range.
        const story = gsap.timeline({
          defaults: {
            ease: "none",
          },
          scrollTrigger: {
            trigger: intro,
            start: "top 85%",
            end: "bottom 18%",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });

        story
          .fromTo(
            headline,
            {
              y: 30,
              scale: 0.98,
            },
            {
              y: -20,
              scale: 1,
              duration: 1,
              ease: "none",
            },
            0
          )
          .fromTo(
            highlight,
            {
              color: "#96a0ae",
            },
            {
              color: "#d6b780",
              duration: 0.65,
              ease: "none",
            },
            0.2
          )
          .fromTo(
            paragraphs,
            {
              y: (index: number) => 30 + index * 12,
              opacity: 0.7,
            },
            {
              y: (index: number) => -10 - index * 5,
              opacity: 1,
              stagger: 0.1,
              duration: 0.85,
              ease: "none",
            },
            0.1
          );

        // Value cards respond to scrolling, rather
        // than playing a one-time entrance animation.
        const valuesTimeline = gsap.timeline({
          defaults: {
            ease: "none",
          },
          scrollTrigger: {
            trigger: valuesGrid,
            start: "top 92%",
            end: "bottom 38%",
            scrub: 0.75,
            invalidateOnRefresh: true,
          },
        });

        valuesTimeline.fromTo(
          cards,
          {
            y: 35,
            scale: 0.97,
            opacity: 0.65,
          },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            stagger: 0.15,
            duration: 0.85,
            ease: "none",
          }
        );

        const progressTween = gsap.fromTo(
          progressLine,
          {
            scaleX: 0,
          },
          {
            scaleX: 1,
            ease: "none",
            transformOrigin: "left center",
            scrollTrigger: {
              trigger: valuesGrid,
              start: "top 86%",
              end: "bottom 42%",
              scrub: 0.7,
              invalidateOnRefresh: true,
            },
          }
        );

        return () => {
          story.scrollTrigger?.kill();
          story.kill();

          valuesTimeline.scrollTrigger?.kill();
          valuesTimeline.kill();

          progressTween.scrollTrigger?.kill();
          progressTween.kill();
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
    <Section
      id="about"
      className="relative overflow-hidden py-[var(--section-space)]"
    >
      <div ref={sectionRef} className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 55% at 80% 30%, rgba(214,183,128,0.045), transparent 80%)",
          }}
        />

        <Container>
          <div className="relative z-10">

            {/* About introduction */}
            <div
              data-about-intro
              className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20"
            >
              {/* Left column */}
              <div className="min-w-0">
                <p className="mb-7 text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-accent)] sm:text-sm">
                  About Khizar Studio
                </p>

                <h2
                  data-about-headline
                  className="
                    max-w-[610px]
                    text-[clamp(2.35rem,3.6vw,4.15rem)]
                    font-semibold
                    leading-[1.1]
                    tracking-[-0.055em]
                    text-[var(--color-text-primary)]
                  "
                  style={{
                    fontFamily: "var(--font-display)",
                    transformOrigin: "left center",
                  }}
                >
                  Websites that make
                  <span className="block">
                    businesses look
                  </span>
                  <span
                    data-about-highlight
                    className="block text-[var(--color-text-muted)]"
                  >
                    exceptional.
                  </span>
                </h2>

                <div className="mt-9 flex items-center gap-4">
                  <span className="h-px w-12 bg-[var(--color-accent)]" />

                  <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] sm:text-xs">
                    Independent Digital Studio
                  </span>
                </div>
              </div>

              {/* Right column */}
              <div className="min-w-0 space-y-7 text-base leading-[1.9] text-[var(--color-text-secondary)] lg:text-[17px]">
                <p data-about-paragraph>
                  Khizar Studio creates premium websites
                  for businesses that want a stronger
                  digital presence and a better first
                  impression.
                </p>

                <p data-about-paragraph>
                  Every project combines modern design,
                  thoughtful user experience,
                  high-performance development, and subtle
                  animations to create websites that feel
                  professional without sacrificing usability.
                </p>

                <p data-about-paragraph>
                  The goal is simple: build a website that
                  represents the quality of the business
                  behind it and turns visitors into
                  potential customers.
                </p>
              </div>
            </div>

            {/* Values introduction */}
            <div className="mt-20 flex flex-wrap items-end justify-between gap-5 lg:mt-28">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
                  What drives the work
                </p>

                <h3
                  className="mt-4 text-2xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-3xl"
                  style={{
                    fontFamily: "var(--font-display)",
                  }}
                >
                  Built on three principles.
                </h3>
              </div>

              <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                01 — 03
              </span>
            </div>

            {/* Values grid */}
            <div
              data-about-values
              className="mt-8 grid gap-4 sm:grid-cols-3"
            >
              {values.map(
                ({ number, title, description }) => (
                  <article
                    key={number}
                    data-about-card
                    className="
                      group relative flex min-h-[285px]
                      flex-col overflow-hidden
                      rounded-[var(--radius-large)]
                      border border-[var(--color-border)]
                      bg-[var(--color-background-elevated)]
                      p-7
                      transition-[border-color,background-color,box-shadow]
                      duration-500
                      hover:border-[var(--color-border-strong)]
                      hover:bg-[var(--color-background-surface)]
                      hover:shadow-[var(--shadow-card)]
                      sm:p-8
                    "
                    style={{
                      transformOrigin: "center bottom",
                    }}
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-60"
                    />

                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-semibold tracking-tight text-[var(--color-text-primary)]">
                        {number}
                      </span>

                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-5 w-5 text-[var(--color-text-muted)] transition-[color,transform] duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--color-accent)]"
                      />
                    </div>

                    <div className="mt-auto pt-12">
                      <h4 className="text-lg font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-xl">
                        {title}
                      </h4>

                      <p className="mt-4 text-sm leading-7 text-[var(--color-text-secondary)]">
                        {description}
                      </p>
                    </div>
                  </article>
                )
              )}
            </div>

            {/* Scroll progress accent */}
            <div className="mt-8 h-px w-full overflow-hidden bg-[var(--color-border-strong)]">
              <div
                data-about-progress
                className="h-full w-full origin-left bg-[var(--color-accent)]"
              />
            </div>

          </div>
        </Container>
      </div>
    </Section>
  );
}
