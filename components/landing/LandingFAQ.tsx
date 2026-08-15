import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Accordion } from '@/components/ui/Accordion';
import type { FAQ } from '@/lib/landing-pages/types';

export function LandingFAQ({ faqs }: { faqs: FAQ[] }) {
  return (
    <section id="faq" className="border-b border-border py-14 sm:py-20 md:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4 md:sticky md:top-28 md:self-start">
            <Reveal>
              <Eyebrow>FAQ</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-extrabold uppercase text-balance text-[28px] leading-[1.1] tracking-[-0.03em] text-text-primary sm:text-[38px] md:text-[46px]">
                Questions, answered straight.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal>
              <Accordion items={faqs} />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
