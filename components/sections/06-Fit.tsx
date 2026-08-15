import { Check, X } from 'lucide-react';
import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Eyebrow, SectionTitle, SectionSub } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

/**
 * The ICP section. This is the one the audit flagged hardest — the site
 * previously let a visitor guess whether it was for them. Now it says so
 * in two columns, and the right-hand column is meant to disqualify.
 */
export default function Fit() {
  const { fit } = CONTENT;

  return (
    <Section id="fit" className="bg-ink py-16 sm:py-20 md:py-24">
      <Container>
        <Reveal className="max-w-[760px]">
          <Eyebrow tone="ink">{fit.eyebrow}</Eyebrow>
          <SectionTitle tone="ink" className="mt-5">
            {fit.title}
          </SectionTitle>
          <SectionSub tone="ink" className="mt-5">
            {fit.sub}
          </SectionSub>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal>
            <div className="h-full border-2 border-accent bg-accent/[0.07]">
              <div className="flex items-center gap-3 border-b-2 border-accent bg-accent px-6 py-4">
                <Check className="h-5 w-5 shrink-0 text-ink" strokeWidth={3.5} />
                <h3 className="text-[16px] font-extrabold uppercase tracking-[0.02em] text-ink sm:text-[18px]">
                  {fit.forTitle}
                </h3>
              </div>
              <ul className="divide-y divide-bg/15">
                {fit.forItems.map((item) => (
                  <li key={item} className="flex items-start gap-3.5 px-6 py-5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={3.5} />
                    <span className="text-[15px] font-medium leading-[1.55] text-bg sm:text-[16px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full border-2 border-signal bg-signal/[0.07]">
              <div className="flex items-center gap-3 border-b-2 border-signal bg-signal px-6 py-4">
                <X className="h-5 w-5 shrink-0 text-white" strokeWidth={3.5} />
                <h3 className="text-[16px] font-extrabold uppercase tracking-[0.02em] text-white sm:text-[18px]">
                  {fit.againstTitle}
                </h3>
              </div>
              <ul className="divide-y divide-bg/15">
                {fit.againstItems.map((item) => (
                  <li key={item} className="flex items-start gap-3.5 px-6 py-5">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-signal" strokeWidth={3.5} />
                    <span className="text-[15px] font-medium leading-[1.55] text-bg/75 sm:text-[16px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-10 max-w-[620px] text-center text-[15px] font-bold leading-[1.55] text-bg/70 sm:text-[17px]">
            {fit.closer}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
