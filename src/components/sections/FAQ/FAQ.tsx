
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { faq } from "@/data/faq";
import FAQItem from "./FAQItem";

export default function FAQ() {
  return (
    <Section id="faq" className="py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Good to Know
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:mt-6 sm:text-5xl">
              Questions, answered.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
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
