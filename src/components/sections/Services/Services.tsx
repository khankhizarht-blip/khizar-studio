
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import { services } from "@/data/services";

import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <Section id="services" className="py-32">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            What We Do
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            More than a website.
            <br />
            A better way to grow.
          </h2>

          <p className="mt-5 max-w-xl leading-relaxed text-zinc-400">
            Your website should do more than look good. It should build
            trust, communicate your value, and make it easier for the
            right customers to choose your business.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
