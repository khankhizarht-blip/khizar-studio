
"use client";

import { useEffect, useRef } from "react";
import { ArrowDownRight, Code2, Layers3, Sparkles } from "lucide-react";
import { gsap, ScrollTrigger, initGSAP } from "@/lib/gsap";

const features = [
  {
    number: "01",
    title: "Design",
    detail: "A distinctive visual identity",
    Icon: Sparkles,
  },
  {
    number: "02",
    title: "Development",
    detail: "Built for speed and reliability",
    Icon: Code2,
  },
  {
    number: "03",
    title: "Experience",
    detail: "Every interaction has a purpose",
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

        const ending = section.querySelector<HTMLElement>(
          "[data-story-ending]"
        );

        const cards = gsap.utils.toArray<HTMLElement>(
          section.querySelectorAll("[data-story-card]")
        );

        const orb = section.querySelector<HTMLElement>(
          "[data-story-orb]"
        );

        const progress = section.querySelector<HTMLElement>(
          "[data-story-progress]"
        );

        if (!scene || !opening || !ending || !orb || !progress) {
          return;
        }

        const timeline = gsap.timeline({
          defaults: {
            ease: "none",
          },
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=200%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        gsap.set(cards, {
          autoAlpha: 0,
          y: 140,
          z: -300,
          rotateX: -18,
          transformPerspective: 1000,
        });

        gsap.set(ending, {
          autoAlpha: 0,
          y: 70,
        });

        gsap.set(orb, {
          scale: 0.7,
          opacity: 0.3,
        });

        gsap.set(progress, {
          scaleX: 0,
          transformOrigin: "left center",
        });

        timeline
          .to(
            opening,
            {
              autoAlpha: 0,
              y: -90,
              scale: 0.85,
              duration: 0.65,
            },
            0
          )
          .to(
            orb,
            {
              scale: 1.45,
              opacity: 0.7,
              rotation: 15,
              duration: 1.5,
            },
            0
          )
          .to(
            cards,
            {
              autoAlpha: 1,
              y: 0,
              z: 0,
              rotateX: 0,
              stagger: 0.12,
              duration: 0.85,
            },
            0.3
          )
          .to(
            cards,
            {
              y: -130,
              z: 240,
              scale: 1.12,
              autoAlpha: 0,
              stagger: 0.08,
              duration: 0.8,
            },
            1.5
          )
          .to(
            orb,
            {
              scale: 2.2,
              opacity: 0.15,
              duration: 0.85,
            },
            1.55
          )
          .to(
            ending,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.85,
            },
            1.95
          )
          .to(
            progress,
            {
              scaleX: 1,
              duration: 2.8,
            },
            0
          );

        return () => {
          timeline.scrollTrigger?.kill();
          timeline.kill();
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
    <section
      ref={sectionRef}
      aria-label="Our approach to digital experiences"
      className="relative isolate"
    >
      <div
        data-story-scene
        className="relative hidden h-[100svh] min-h-[680px] overflow-hidden bg-[var(--color-background)] md:flex md:items-center md:justify-center"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(50,70,95,0.22), transparent 65%)",
          }}
        />

        <div
          data-story-orb
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[570px] w-[570px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-border-strong)]"
          style={{
            boxShadow:
              "0 0 140px rgba(214,183,128,0.055), inset 0 0 100px rgba(214,183,128,0.025)",
          }}
        />

        <div
          data-story-opening
          className="absolute inset-x-6 z-10 mx-auto max-w-4xl text-center"
        >
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
            Beyond the ordinary
          </p>

          <h2
            className="text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[1.02] tracking-[-0.055em] text-[var(--color-text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Not just a page.
            <span className="block text-[var(--color-text-secondary)]">
              An experience.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-[var(--color-text-secondary)]">
            Scroll to see how design, technology, and interaction
            come together.
          </p>
        </div>

        <div
          className="relative z-20 grid w-full max-w-6xl grid-cols-3 gap-5 px-8"
          style={{ perspective: "1200px" }}
        >
          {features.map(({ number, title, detail, Icon }) => (
            <div
              key={number}
              data-story-card
              className="relative flex min-h-[330px] flex-col justify-between overflow-hidden rounded-[var(--radius-large)] border border-[var(--color-border-strong)] bg-[var(--color-background-surface)] p-8 shadow-[var(--shadow-card)]"
              style={{
                transformStyle: "preserve-3d",
                willChange: "transform, opacity",
              }}
            >
              <div className="flex items-center justify-between">
                <Icon
                  aria-hidden="true"
                  className="h-7 w-7 text-[var(--color-accent)]"
                />
                <span className="text-sm text-[var(--color-text-muted)]">
                  {number}
                </span>
              </div>

              <div>
                <h3
                  className="text-4xl font-semibold tracking-tight text-[var(--color-text-primary)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)]">
                  {detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          data-story-ending
          className="pointer-events-none absolute inset-x-6 z-30 mx-auto max-w-5xl text-center"
        >
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
            The Khizar Studio approach
          </p>

          <h2
            className="text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[1.02] tracking-[-0.055em] text-[var(--color-text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Designed with purpose.
            <span className="block text-[var(--color-text-secondary)]">
              Built for business.
            </span>
          </h2>

          <div className="mt-10 flex items-center justify-center gap-3 text-sm text-[var(--color-accent)]">
            Explore what we do
            <ArrowDownRight aria-hidden="true" className="h-5 w-5" />
          </div>
        </div>

        <div className="absolute bottom-12 left-12 right-12 z-40 flex items-center gap-6">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
            The experience
          </span>

          <div className="h-px flex-1 overflow-hidden bg-[var(--color-border-strong)]">
            <div
              data-story-progress
              className="h-full w-full bg-[var(--color-accent)]"
            />
          </div>

          <span className="text-xs text-[var(--color-text-muted)]">
            Scroll to explore
          </span>
        </div>
      </div>

      <div className="relative px-[var(--page-gutter)] py-24 md:hidden">
        <div className="mx-auto max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            The Khizar Studio approach
          </p>

          <h2
            className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--color-text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Designed with purpose.
            <span className="block text-[var(--color-text-secondary)]">
              Built for business.
            </span>
          </h2>

          <div className="mt-10 grid gap-4">
            {features.map(({ number, title, detail, Icon }) => (
              <div
                key={number}
                className="rounded-[var(--radius-large)] border border-[var(--color-border)] bg-[var(--color-background-surface)] p-6"
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

                <h3 className="mt-7 text-2xl font-semibold text-[var(--color-text-primary)]">
                  {title}
                </h3>

                <p className="mt-2 leading-relaxed text-[var(--color-text-secondary)]">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
