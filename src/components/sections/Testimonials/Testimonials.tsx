import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Trusted by businesses
            <span className="block">
              that value quality.
            </span>
          </h2>

          <p className="mt-5 text-zinc-400">
            Real feedback from projects focused on design,
            performance, and results.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}