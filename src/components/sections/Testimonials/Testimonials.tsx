
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <Section className="py-[var(--section-space)]">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[var(--text-eyebrow-tracking)] text-[var(--color-text-muted)]">
            Client Perspectives
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[var(--color-text-primary)] sm:mt-6 sm:text-5xl lg:text-6xl">
            Good work builds trust.
            <span className="block text-[var(--color-text-muted)]">
              Great experiences keep it.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
            A successful website is about more than its appearance.
            Clear communication, thoughtful execution, and attention
            to detail matter throughout the entire project.
          </p>
        </div>

        {testimonials.length > 0 && (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
