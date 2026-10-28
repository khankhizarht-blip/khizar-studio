import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/animations/Reveal";

const principles = [
  {
    number: "01",
    title: "Clear communication",
    description:
      "Know what is being built, why it matters, and what comes next. No unnecessary complexity or surprises.",
  },
  {
    number: "02",
    title: "Design with purpose",
    description:
      "Every layout, interaction, and call to action serves the business and the people using the website.",
  },
  {
    number: "03",
    title: "Built to perform",
    description:
      "Responsive implementation, accessibility, and performance are part of the process from the start.",
  },
] as const;

export default function Testimonials() {
  return (
    <Section className="py-[var(--section-space)]">
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[var(--text-eyebrow-tracking)] text-[var(--color-text-muted)]">
              How I Work
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl">
              Good work builds trust.
              <span className="block text-[var(--color-text-muted)]">
                Great experiences keep it.
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
              A strong website takes more than good looks. Here is what you can
              expect when working with Khizar Studio.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-16">
          {principles.map((principle) => (
            <Reveal key={principle.number}>
              <article className="h-full rounded-[var(--radius-large)] border border-[var(--color-border)] bg-[var(--color-background-surface)] p-7 sm:p-8">
                <span className="text-xs tracking-[0.2em] text-[var(--color-text-muted)]">
                  {principle.number}
                </span>
                <h3 className="mt-8 text-xl font-semibold tracking-tight text-[var(--color-text-primary)]">
                  {principle.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text-secondary)]">
                  {principle.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
