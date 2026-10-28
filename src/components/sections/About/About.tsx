import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/animations/Reveal";

export default function About() {
  return (
    <Section id="about">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          {/* Left */}
          <Reveal>
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[var(--color-text-muted)]">
                About Khizar Studio
              </p>

              <h2 className="max-w-xl text-4xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl">
                Websites built to make businesses look{" "}
                <span className="text-[var(--color-text-muted)]">exceptional.</span>
              </h2>
            </div>
          </Reveal>

          {/* Right */}
          <Reveal>
            <div className="space-y-6 text-lg leading-relaxed text-[var(--color-text-secondary)]">
              <p>
                Khizar Studio creates premium websites for businesses that
                want a stronger digital presence and a better first
                impression.
              </p>

              <p>
                Every project combines modern design, thoughtful user
                experience, high-performance development, and subtle
                animations to create websites that feel professional without
                sacrificing usability.
              </p>

              <p>
                The goal is simple: build a website that represents the
                quality of the business behind it and turns visitors into
                potential customers.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Values */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-[var(--radius-extra-large)] border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-3">
          <Reveal>
            <div className="bg-[var(--color-background-elevated)] p-8 sm:p-10">
              <p className="text-3xl font-semibold text-[var(--color-text-primary)]">01</p>
              <h3 className="mt-6 text-lg font-medium text-[var(--color-text-primary)]">
                Strategy First
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                Every design decision has a purpose, from the first impression
                to the final call to action.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-[var(--color-background-elevated)] p-8 sm:p-10">
              <p className="text-3xl font-semibold text-[var(--color-text-primary)]">02</p>
              <h3 className="mt-6 text-lg font-medium text-[var(--color-text-primary)]">
                Premium Design
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                Clean layouts, strong typography, refined interactions, and
                visual details that communicate quality.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-[var(--color-background-elevated)] p-8 sm:p-10">
              <p className="text-3xl font-semibold text-[var(--color-text-primary)]">03</p>
              <h3 className="mt-6 text-lg font-medium text-[var(--color-text-primary)]">
                Performance
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                Modern technologies and efficient development keep the
                experience fast, responsive, and reliable.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}