
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { faq } from "@/data/faq";
import FAQItem from "./FAQItem";

export default function FAQ() {
  return (
    <Section id="faq" className="py-[var(--section-space)]">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[var(--text-eyebrow-tracking)] text-[var(--color-text-muted)]">
              Good to Know
            </p>

            <h2 className="mt-5 text-[length:var(--text-section-size)] font-semibold leading-[var(--text-section-leading)] tracking-[var(--text-heading-tracking)] text-[var(--color-text-primary)]">
              Questions, answered.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
              Everything you need to know about working with Khizar
              Studio, from the first conversation to your website launch.
            </p>
          </div>

          <div className="mt-10 space-y-3 sm:mt-14 sm:space-y-4">
            {faq.map((item) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
