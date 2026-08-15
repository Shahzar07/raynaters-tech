import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Eyebrow, SectionTitle } from '@/components/ui/Eyebrow';
import { Accordion } from '@/components/ui/Accordion';
import { Reveal } from '@/components/ui/Reveal';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqPageSchema } from '@/lib/seo/schema';

export default function FAQ() {
  const { faq, brand } = CONTENT;

  return (
    <Section id="faq" className="border-b-2 border-border bg-bg-alt py-16 sm:py-20 md:py-24">
      <JsonLd data={faqPageSchema(faq.items)} />
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Eyebrow>{faq.eyebrow}</Eyebrow>
              <SectionTitle className="mt-5">{faq.title}</SectionTitle>
              <p className="mt-6 text-[15px] font-medium leading-[1.6] text-text-secondary sm:text-[16px]">
                Not answered here? Email Shahzar directly —{' '}
                <a
                  className="font-bold text-text-primary underline decoration-2 underline-offset-4 hover:decoration-signal"
                  href={`mailto:${brand.email}`}
                >
                  {brand.email}
                </a>
                .
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <Accordion items={faq.items} defaultOpen={0} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
