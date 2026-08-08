import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import { faq } from "@/data/faq";

import FAQItem from "./FAQItem";

export default function FAQ() {
  return (
    <Section
      id="faq"
      className="py-32"
    >
      <Container>

        <div className="mx-auto max-w-3xl">

          <p
            className="
              text-center
              text-sm
              uppercase
              tracking-[0.3em]
              text-zinc-500
            "
          >
            FAQ
          </p>

          <h2
            className="
              mt-4
              text-center
              text-4xl
              font-semibold
              text-white
              sm:text-5xl
            "
          >
            Frequently Asked Questions
          </h2>

          <p
            className="
              mt-5
              text-center
              text-zinc-400
            "
          >
            Answers to the questions clients ask most often.
          </p>

          <div className="mt-14 space-y-4">
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