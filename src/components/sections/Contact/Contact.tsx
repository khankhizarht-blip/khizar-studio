
"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, Mail } from "lucide-react";

import { contact } from "@/data/contact";
import { siteConfig } from "@/config/site";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { gsap, initGSAP } from "@/lib/gsap";

export default function Contact() {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    initGSAP();

    const media = gsap.matchMedia();

    media.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        const label = panel.querySelector(
          "[data-contact-label]"
        );
        const titleLines = gsap.utils.toArray<HTMLElement>(
          panel.querySelectorAll("[data-contact-title]")
        );
        const description = panel.querySelector(
          "[data-contact-description]"
        );
        const actions = panel.querySelector(
          "[data-contact-actions]"
        );
        const footnote = panel.querySelector(
          "[data-contact-footnote]"
        );
        const glow = panel.querySelector(
          "[data-contact-glow]"
        );
        const line = panel.querySelector(
          "[data-contact-line]"
        );

        if (
          !label ||
          titleLines.length === 0 ||
          !description ||
          !actions ||
          !footnote ||
          !glow ||
          !line
        ) {
          return;
        }

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: "top 78%",
            once: true,
          },
        });

        timeline
          .fromTo(
            panel,
            {
              autoAlpha: 0,
              y: 75,
              scale: 0.965,
            },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 1.05,
              ease: "power3.out",
            },
            0
          )
          .fromTo(
            glow,
            {
              opacity: 0,
              scale: 0.7,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 1.5,
              ease: "power2.out",
            },
            0.15
          )
          .fromTo(
            label,
            {
              autoAlpha: 0,
              y: 18,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.65,
              ease: "power2.out",
            },
            0.25
          )
          .fromTo(
            titleLines,
            {
              autoAlpha: 0,
              yPercent: 110,
            },
            {
              autoAlpha: 1,
              yPercent: 0,
              duration: 1,
              stagger: 0.16,
              ease: "power3.out",
            },
            0.37
          )
          .fromTo(
            description,
            {
              autoAlpha: 0,
              y: 27,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
            },
            0.9
          )
          .fromTo(
            actions,
            {
              autoAlpha: 0,
              y: 25,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.75,
              ease: "power2.out",
            },
            1.05
          )
          .fromTo(
            footnote,
            {
              autoAlpha: 0,
              y: 15,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
            },
            1.2
          )
          .fromTo(
            line,
            {
              scaleX: 0,
            },
            {
              scaleX: 1,
              duration: 1.2,
              ease: "power3.inOut",
            },
            0.55
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
      id="contact"
      className="overflow-hidden py-24 sm:py-28 lg:py-36"
    >
      <Container>
        <div
          ref={panelRef}
          className="relative isolate mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-[var(--color-border-strong)] bg-[var(--color-background-surface)] px-6 py-16 text-center shadow-[var(--shadow-card)] sm:px-12 sm:py-20 lg:px-20 lg:py-24"
        >
          {/* Atmospheric lighting */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          >
            <div
              data-contact-glow
              className="absolute left-1/2 top-0 h-[400px] w-[600px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full blur-[95px]"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(214,183,128,0.16) 0%, rgba(214,183,128,0.05) 45%, transparent 75%)",
              }}
            />

            <div className="absolute bottom-0 left-1/2 h-40 w-2/3 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/[0.04] blur-[80px]" />
          </div>

          <p
            data-contact-label
            className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)] sm:text-sm"
          >
            Let&apos;s Work Together
          </p>

          <h2
            className="mx-auto mt-7 max-w-4xl text-[clamp(2.6rem,6vw,5.5rem)] font-semibold leading-[1.08] tracking-[-0.055em] text-[var(--color-text-primary)]"
            style={{
              fontFamily: "var(--font-display)",
            }}
          >
            <span className="block overflow-hidden pb-[0.08em]">
              <span
                data-contact-title
                className="block"
              >
                Your next website
              </span>
            </span>

            <span className="block overflow-hidden pb-[0.08em]">
              <span
                data-contact-title
                className="block text-[var(--color-text-muted)]"
              >
                starts with a conversation.
              </span>
            </span>
          </h2>

          <p
            data-contact-description
            className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)] sm:mt-8 sm:text-lg"
          >
            Tell me about your business, your goals,
            and what you want your website to achieve.
            Let&apos;s explore how thoughtful design
            and development can help.
          </p>

          <div
            data-contact-actions
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row"
          >
            <a
              href={`mailto:${siteConfig.email}?subject=Website%20Project%20Enquiry`}
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-7 py-4 text-sm font-semibold text-[var(--color-accent-foreground)] transition-[transform,background-color] duration-300 hover:-translate-y-1 hover:bg-[var(--color-accent-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
            >
              <Mail
                aria-hidden="true"
                className="h-4 w-4"
              />
              {contact.primaryButton}
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#projects"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[var(--color-border-strong)] px-7 py-4 text-sm font-medium text-[var(--color-text-primary)] transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:bg-[var(--color-background-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
            >
              Explore Our Work
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

          <p
            data-contact-footnote
            className="mt-8 text-xs text-[var(--color-text-muted)]"
          >
            Have questions first? Send an email
            and tell me what you need.
          </p>

          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 right-0 h-px overflow-hidden"
          >
            <div
              data-contact-line
              className="h-full w-full origin-center bg-[var(--color-accent)]"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
