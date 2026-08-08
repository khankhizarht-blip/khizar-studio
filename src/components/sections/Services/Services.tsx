import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import { services } from "@/data/services";

import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <Section
      id="services"
      className="py-32"
    >
      <Container>

        <div className="max-w-2xl">

          <p
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-zinc-500
            "
          >
            Services
          </p>


          <h2
            className="
              mt-4
              text-4xl
              font-semibold
              tracking-tight
              text-white
              sm:text-5xl
            "
          >
            Digital solutions
            built for growth.
          </h2>


          <p
            className="
              mt-5
              text-zinc-400
            "
          >
            From design to development,
            we create websites that help
            businesses stand out.
          </p>

        </div>


        <div
          className="
            mt-12
            grid
            gap-6
            md:grid-cols-3
          "
        >
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