import { Check } from 'lucide-react';
import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Eyebrow, SectionTitle } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

/**
 * Spells out what the free audit actually is, so "book a call" stops
 * being an unknown quantity at the point of conversion.
 */
export default function FounderNote() {
  const { personalNote, brand } = CONTENT;

  return (
    <Section id="audit" className="border-b-2 border-border bg-bg py-16 sm:py-20 md:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
          <Reveal>
            <Eyebrow>{personalNote.eyebrow}</Eyebrow>
            <SectionTitle className="mt-5">{personalNote.sessionName}</SectionTitle>
            <div className="mt-7 flex items-center gap-3.5 border-2 border-ink bg-bg-alt p-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center bg-ink text-[15px] font-extrabold text-accent">
                S
              </span>
              <div className="min-w-0">
                <p className="text-[15px] font-extrabold uppercase tracking-[-0.01em] text-text-primary">
                  {personalNote.name}
                </p>
                <p className="text-[12px] font-bold uppercase tracking-[0.06em] text-text-muted">
                  {personalNote.role}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="border-2 border-ink bg-bg-alt p-6 sm:p-8">
              {personalNote.paragraphs.map((p, i) => (
                <p
                  key={p}
                  className={
                    // The opening line is the hook — it gets to be loud.
                    i === 0
                      ? 'mb-5 text-[19px] font-extrabold leading-[1.35] tracking-[-0.03em] text-text-primary sm:text-[22px]'
                      : 'mb-4 text-[16px] font-medium leading-[1.62] text-text-secondary sm:text-[17px]'
                  }
                >
                  {p}
                </p>
              ))}

              <p className="mt-6 border-t-2 border-border pt-6 text-[16px] font-extrabold leading-[1.45] tracking-[-0.02em] text-text-primary sm:text-[17px]">
                {personalNote.bulletsLead}
              </p>

              <ul className="mt-5 space-y-4">
                {personalNote.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3.5">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-success" strokeWidth={3.5} />
                    <span className="text-[15px] font-medium leading-[1.58] text-text-primary sm:text-[16px]">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-7 border-t-2 border-border pt-6 text-[17px] font-extrabold leading-[1.4] tracking-[-0.02em] text-text-primary sm:text-[19px]">
                {personalNote.closer}
              </p>
              <p className="mt-2 text-[14px] font-bold uppercase tracking-[0.06em] text-text-muted">
                {personalNote.signature}
              </p>

              <div className="mt-7">
                <Button
                  href={brand.bookHref}
                  size="lg"
                  withArrow
                  depth
                  className="w-full sm:w-auto"
                >
                  Book my session
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
