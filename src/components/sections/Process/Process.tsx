
"use client";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/ui/Container";
import { process } from "@/data/process";
import ProcessStep from "./ProcessStep";

export default function Process() {
  return (
    <section className="py-[var(--section-space)]">
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-sm uppercase tracking-[var(--text-eyebrow-tracking)] text-[var(--color-text-muted)]">
              How We Work
            </span>

            <h2 className="mt-5 text-[length:var(--text-section-size)] font-semibold leading-[var(--text-section-leading)] tracking-[var(--text-heading-tracking)] text-[var(--color-text-primary)]">
              Clear steps.
              <span className="block text-[var(--color-text-muted)]">
                Exceptional execution.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)] sm:mt-6 sm:text-lg">
              Great websites start with a clear plan. From understanding
              your business to launching your website, every stage has a
              purpose, so you know what comes next and what to expect.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:mt-16 md:grid-cols-2 lg:mt-20 lg:gap-8">
          {process.map((step) => (
            <ProcessStep
              key={step.id}
              step={step}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
