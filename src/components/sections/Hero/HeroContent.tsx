
"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { gsap, initGSAP } from "@/lib/gsap";

const entranceEase = [0.22, 1, 0.36, 1] as const;

export default function HeroContent() {
  const contentRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    initGSAP();

    // In our Hero layout, this wrapper contains:
    // HeroContent, HeroActions and HeroStats.
    const heroTextGroup = content.parentElement;

    if (!heroTextGroup) return;

    const media = gsap.matchMedia();

    media.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        const animation = gsap.fromTo(
          heroTextGroup,
          {
            y: 0,
            scale: 1,
            autoAlpha: 1,
            filter: "blur(0px)",
          },
          {
            y: -100,
            scale: 0.91,
            autoAlpha: 0,
            filter: "blur(9px)",
            ease: "none",
            scrollTrigger: {
              trigger: heroTextGroup,
              start: "top 12%",
              end: "+=70%",
              scrub: 0.8,
              invalidateOnRefresh: true,
            },
          }
        );

        return () => {
          animation.scrollTrigger?.kill();
          animation.kill();

          gsap.set(heroTextGroup, {
            clearProps:
              "transform,opacity,visibility,filter",
          });
        };
      }
    );

    return () => {
      media.revert();
    };
  }, []);

  const duration = reduceMotion ? 0 : 1;

  return (
    <div
      ref={contentRef}
      className="mx-auto max-w-[860px]"
    >
      {/* Studio identity */}
      <motion.div
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                y: 20,
                filter: "blur(8px)",
              }
        }
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: duration * 0.7,
          delay: reduceMotion ? 0 : 0.1,
          ease: entranceEase,
        }}
        className="
          mx-auto inline-flex
          rounded-full
          border border-[var(--color-border)]
          bg-[var(--color-background-surface)]
          px-4 py-2
          text-[11px] font-medium uppercase
          tracking-[0.22em]
          text-[var(--color-text-secondary)]
          backdrop-blur-xl
        "
      >
        Independent Digital Studio
      </motion.div>

      {/* Main headline */}
      <h1
        className="
          mt-7
          text-[clamp(3rem,7.1vw,7rem)]
          font-semibold
          leading-[0.99]
          tracking-[-0.055em]
          text-[var(--color-text-primary)]
        "
        style={{
          fontFamily: "var(--font-display)",
        }}
      >
        <span className="block overflow-hidden pb-[0.08em]">
          <motion.span
            initial={
              reduceMotion
                ? false
                : { y: "115%", opacity: 0 }
            }
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration,
              delay: reduceMotion ? 0 : 0.22,
              ease: entranceEase,
            }}
            className="block"
          >
            Websites built
          </motion.span>
        </span>

        <span className="block overflow-hidden pb-[0.08em]">
          <motion.span
            initial={
              reduceMotion
                ? false
                : { y: "115%", opacity: 0 }
            }
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration,
              delay: reduceMotion ? 0 : 0.36,
              ease: entranceEase,
            }}
            className="
              block bg-gradient-to-r
              from-[var(--color-text-primary)]
              via-[var(--color-text-secondary)]
              to-[var(--color-text-muted)]
              bg-clip-text text-transparent
            "
          >
            to move business
          </motion.span>
        </span>

        <span className="block overflow-hidden pb-[0.08em]">
          <motion.span
            initial={
              reduceMotion
                ? false
                : { y: "115%", opacity: 0 }
            }
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration,
              delay: reduceMotion ? 0 : 0.5,
              ease: entranceEase,
            }}
            className="block"
          >
            forward.
          </motion.span>
        </span>
      </h1>

      {/* Supporting description */}
      <motion.p
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                y: 30,
                filter: "blur(6px)",
              }
        }
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: duration * 0.85,
          delay: reduceMotion ? 0 : 0.85,
          ease: entranceEase,
        }}
        className="
          mx-auto mt-7 max-w-[610px]
          text-[15px] leading-[1.8]
          text-[var(--color-text-secondary)]
          sm:text-[17px]
        "
      >
        Independent web design and development
        for ambitious businesses. I build
        distinctive, fast, easy-to-use websites
        designed to earn trust and turn attention
        into genuine enquiries.
      </motion.p>
    </div>
  );
}
