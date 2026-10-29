
"use client";

import { useEffect, useRef } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Sparkles,
} from "lucide-react";
import { gsap, ScrollTrigger, initGSAP } from "@/lib/gsap";

const features = [
  {
    number: "01",
    title: "Design",
    detail: "A distinctive visual identity",
    description:
      "Thoughtful interfaces that communicate value before a single word is read.",
    Icon: Sparkles,
  },
  {
    number: "02",
    title: "Development",
    detail: "Built for speed and reliability",
    description:
      "Modern engineering that makes every interaction feel effortless.",
    Icon: Code2,
  },
  {
    number: "03",
    title: "Experience",
    detail: "Every interaction has a purpose",
    description:
      "Meaningful motion that guides attention and brings the entire experience together.",
    Icon: Layers3,
  },
];

export default function ScrollStory() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    initGSAP();

    const media = gsap.matchMedia();

    media.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        const scene = section.querySelector<HTMLElement>(
          "[data-story-scene]"
        );
        const opening = section.querySelector<HTMLElement>(
          "[data-story-opening]"
        );
        const openingLabel = section.querySelector<HTMLElement>(
          "[data-story-opening-label]"
        );
        const openingTitle = section.querySelector<HTMLElement>(
          "[data-story-opening-title]"
        );
        const openingCopy = section.querySelector<HTMLElement>(
          "[data-story-opening-copy]"
        );
        const cardsStage = section.querySelector<HTMLElement>(
          "[data-story-cards-stage]"
        );
        const cards = gsap.utils.toArray<HTMLElement>(
          section.querySelectorAll("[data-story-card]")
        );
        const ending = section.querySelector<HTMLElement>(
          "[data-story-ending]"
        );
        const endingLabel = section.querySelector<HTMLElement>(
          "[data-story-ending-label]"
        );
        const endingTitle = section.querySelector<HTMLElement>(
          "[data-story-ending-title]"
        );
        const endingLink = section.querySelector<HTMLElement>(
          "[data-story-ending-link]"
        );
        const orb = section.querySelector<HTMLElement>(
          "[data-story-orb]"
        );
        const ringOuter = section.querySelector<HTMLElement>(
          "[data-story-ring-outer]"
        );
        const progress = section.querySelector<HTMLElement>(
          "[data-story-progress]"
        );
        const counter = section.querySelector<HTMLElement>(
          "[data-story-counter]"
        );

        if (
          !scene ||
          !opening ||
          !openingLabel ||
          !openingTitle ||
          !openingCopy ||
          !cardsStage ||
          cards.length !== 3 ||
          !ending ||
          !endingLabel ||
          !endingTitle ||
          !endingLink ||
          !orb ||
          !ringOuter ||
          !progress ||
          !counter
        ) {
          return;
        }

        gsap.set(opening, {
          autoAlpha: 1,
          y: 0,
        });

        gsap.set(cardsStage, {
          autoAlpha: 1,
        });

        gsap.set(cards, {
          autoAlpha: 0,
          y: 150,
          z: -250,
          rotateX: -16,
          scale: 0.87,
          transformPerspective: 1200,
          transformOrigin: "center center",
        });

        gsap.set(ending, {
          autoAlpha: 0,
          y: 60,
        });

        gsap.set(orb, {
          scale: 0.8,
          opacity: 0.36,
        });

        gsap.set(ringOuter, {
          scale: 1,
          opacity: 0.38,
          rotate: 0,
        });

        gsap.set(progress, {
          scaleX: 0,
          transformOrigin: "left center",
        });

        const timeline = gsap.timeline({
          defaults: {
            ease: "none",
          },
          scrollTrigger: {
            trigger: scene,
            start: "top top",
            end: "+=290%",
            pin: true,
            pinSpacing: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate(self) {
              const stage =
                self.progress < 0.32
                  ? "01 / 03"
                  : self.progress < 0.73
                    ? "02 / 03"
                    : "03 / 03";

              counter.textContent = stage;
            },
          },
        });

        // CHAPTER 1 — Establish the story.
        timeline
          .fromTo(
            openingLabel,
            { autoAlpha: 0, y: 20 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.45,
              ease: "power2.out",
            },
            0
          )
          .fromTo(
            openingTitle,
            { y: 45, scale: 0.94, autoAlpha: 0 },
            {
              y: 0,
              scale: 1,
              autoAlpha: 1,
              duration: 0.7,
              ease: "power3.out",
            },
            0.1
          )
          .fromTo(
            openingCopy,
            { y: 25, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.5,
              ease: "power2.out",
            },
            0.35
          )
          .to(
            orb,
            {
              scale: 1.15,
              opacity: 0.62,
              duration: 1.4,
            },
            0
          )
          .to(
            ringOuter,
            {
              scale: 1.16,
              rotate: 20,
              duration: 1.7,
            },
            0
          )
          .to(
            opening,
            {
              autoAlpha: 0,
              y: -105,
              scale: 0.88,
              duration: 0.65,
              ease: "power2.inOut",
            },
            1.2
          );

        // CHAPTER 2 — Three pillars emerge from depth.
        timeline
          .to(
            cards,
            {
              autoAlpha: 1,
              y: 0,
              z: 0,
              rotateX: 0,
              scale: 1,
              stagger: 0.15,
              duration: 0.78,
              ease: "power3.out",
            },
            1.55
          )
          .to(
            orb,
            {
              scale: 1.45,
              opacity: 0.46,
              duration: 1,
            },
            1.55
          )
          .to(
            cards,
            {
              y: (index) => index === 1 ? -18 : -8,
              duration: 0.55,
              stagger: 0.1,
              ease: "sine.inOut",
            },
            2.55
          )
          .to(
            cards,
            {
              y: -170,
              z: 220,
              scale: 1.1,
              autoAlpha: 0,
              stagger: 0.085,
              duration: 0.8,
              ease: "power2.in",
            },
            3.25
          );

        // CHAPTER 3 — Resolve into a clear business message.
        timeline
          .to(
            orb,
            {
              scale: 1.95,
              opacity: 0.24,
              duration: 1,
            },
            3.45
          )
          .to(
            ringOuter,
            {
              scale: 1.75,
              rotate: 50,
              opacity: 0.13,
              duration: 1,
            },
            3.45
          )
          .fromTo(
            ending,
            {
              autoAlpha: 0,
              y: 75,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
            },
            3.85
          )
          .fromTo(
            [endingLabel, endingTitle, endingLink],
            {
              y: 24,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.65,
              stagger: 0.13,
              ease: "power2.out",
            },
            3.95
          )
          .to(
            ending,
            {
              autoAlpha: 1,
              duration: 0.7,
            },
            4.65
          )
          .to(
            progress,
            {
              scaleX: 1,
              duration: 5.35,
              ease: "none",
            },
            0
          );

        return () => {
          timeline.scrollTrigger?.kill();
          timeline.kill();
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
    <section
      ref={sectionRef}
      aria-label="The Khizar Studio approach"
      className="relative isolate"
    >
      {/* Desktop cinematic sequence */}
      <div
        data-story-scene
        className="relative hidden h-[100svh] min-h-[600px] w-full items-center justify-center overflow-hidden bg-[var(--color-background)] md:flex motion-reduce:md:hidden"
      >
        {/* Atmospheric background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 65% at 50% 51%, rgba(52,72,100,0.20), transparent 78%)",
          }}
        />

        <div
          data-story-orb
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-border-strong)]"
          style={{
            boxShadow:
              "0 0 130px rgba(214,183,128,0.07), inset 0 0 90px rgba(214,183,128,0.035)",
          }}
        />

        <div
          data-story-ring-outer
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[780px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-border)] opacity-30"
        />

        {/* Opening chapter */}
        <div
          data-story-opening
          className="absolute inset-x-6 z-10 mx-auto max-w-5xl text-center"
        >
          <p
            data-story-opening-label
            className="mb-7 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]"
          >
            Beyond the ordinary
          </p>

          <h2
            data-story-opening-title
            className="text-[clamp(3.5rem,7vw,7.5rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-[var(--color-text-primary)]"
            style={{
              fontFamily: "var(--font-display)",
            }}
          >
            Not just a page.
            <span className="mt-3 block text-[var(--color-text-secondary)]">
              An experience.
            </span>
          </h2>

          <p
            data-story-opening-copy
            className="mx-auto mt-9 max-w-xl text-base leading-relaxed text-[var(--color-text-secondary)] lg:text-lg"
          >
            Where thoughtful design, precise engineering,
            and purposeful motion come together.
          </p>
        </div>

        {/* The three pillars */}
        <div
          data-story-cards-stage
          className="relative z-20 mx-auto grid w-full max-w-6xl grid-cols-3 gap-5 px-8"
          style={{
            perspective: "1200px",
          }}
        >
          {features.map(
            ({ number, title, detail, description, Icon }) => (
              <article
                key={number}
                data-story-card
                className="relative flex min-h-[370px] flex-col justify-between overflow-hidden rounded-[var(--radius-large)] border border-[var(--color-border-strong)] bg-[var(--color-background-surface)] p-8 opacity-0 shadow-[var(--shadow-card)]"
                style={{
                  transformStyle: "preserve-3d",
                  willChange: "transform, opacity",
                }}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(214,183,128,0.45), transparent)",
                  }}
                />

                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-background)]">
                    <Icon
                      aria-hidden="true"
                      className="h-6 w-6 text-[var(--color-accent)]"
                    />
                  </div>

                  <span className="text-xs font-medium tracking-[0.2em] text-[var(--color-text-muted)]">
                    {number}
                  </span>
                </div>

                <div>
                  <p className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-accent)]">
                    {detail}
                  </p>

                  <h3
                    className="text-[clamp(2rem,3vw,3.5rem)] font-semibold leading-tight tracking-[-0.045em] text-[var(--color-text-primary)]"
                    style={{
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {title}
                  </h3>

                  <p className="mt-5 max-w-[28ch] text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {description}
                  </p>
                </div>

                <ArrowUpRight
                  aria-hidden="true"
                  className="absolute bottom-8 right-8 h-5 w-5 text-[var(--color-text-muted)]"
                />
              </article>
            )
          )}
        </div>

        {/* Final chapter */}
        <div
          data-story-ending
          className="pointer-events-none absolute inset-x-6 z-30 mx-auto max-w-5xl text-center opacity-0"
        >
          <p
            data-story-ending-label
            className="mb-7 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]"
          >
            The Khizar Studio approach
          </p>

          <h2
            data-story-ending-title
            className="text-[clamp(3.2rem,6.5vw,7rem)] font-semibold leading-[1.02] tracking-[-0.06em] text-[var(--color-text-primary)]"
            style={{
              fontFamily: "var(--font-display)",
            }}
          >
            Designed with purpose.
            <span className="mt-3 block text-[var(--color-text-secondary)]">
              Built for business.
            </span>
          </h2>

          <div
            data-story-ending-link
            className="mt-10 flex items-center justify-center gap-3 text-sm font-medium text-[var(--color-accent)]"
          >
            Explore what we do
            <ArrowDownRight
              aria-hidden="true"
              className="h-5 w-5"
            />
          </div>
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-10 left-10 right-10 z-40 flex items-center gap-6 lg:left-16 lg:right-16">
          <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            The experience
          </span>

          <div className="h-px flex-1 overflow-hidden bg-[var(--color-border-strong)]">
            <div
              data-story-progress
              className="h-full w-full origin-left scale-x-0 bg-[var(--color-accent)]"
            />
          </div>

          <span
            data-story-counter
            className="whitespace-nowrap text-xs tabular-nums text-[var(--color-text-muted)]"
          >
            01 / 03
          </span>
        </div>
      </div>

      {/* Mobile and reduced-motion presentation */}
      <div className="relative px-[var(--page-gutter)] py-24 md:hidden motion-reduce:md:block">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
            The Khizar Studio approach
          </p>

          <h2
            className="mt-6 text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.08] tracking-[-0.055em] text-[var(--color-text-primary)]"
            style={{
              fontFamily: "var(--font-display)",
            }}
          >
            Designed with purpose.
            <span className="mt-2 block text-[var(--color-text-secondary)]">
              Built for business.
            </span>
          </h2>

          <p className="mt-6 max-w-xl leading-relaxed text-[var(--color-text-secondary)]">
            Where design, development, and purposeful
            interaction work together to move business
            forward.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {features.map(
              ({ number, title, detail, description, Icon }) => (
                <article
                  key={number}
                  className="rounded-[var(--radius-large)] border border-[var(--color-border-strong)] bg-[var(--color-background-surface)] p-7"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      aria-hidden="true"
                      className="h-6 w-6 text-[var(--color-accent)]"
                    />

                    <span className="text-xs text-[var(--color-text-muted)]">
                      {number}
                    </span>
                  </div>

                  <p className="mt-10 text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-accent)]">
                    {detail}
                  </p>

                  <h3
                    className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text-primary)]"
                    style={{
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
                    {description}
                  </p>
                </article>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
