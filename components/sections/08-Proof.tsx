import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Eyebrow, SectionTitle, SectionSub } from '@/components/ui/Eyebrow';
import { Reveal, RevealStagger } from '@/components/ui/Reveal';
import { SectionCTA } from '@/components/ui/SectionCTA';
import { cn } from '@/lib/utils';

/**
 * Proof, ordered the way the audit asked for it: the four headline
 * numbers first, then problem → solution → result rows underneath.
 */
export default function Proof() {
  const { proof } = CONTENT;

  return (
    <Section id="proof" className="border-b-2 border-border bg-bg-alt py-16 sm:py-20 md:py-24">
      <Container>
        <Reveal className="max-w-[760px]">
          <Eyebrow>{proof.eyebrow}</Eyebrow>
          <SectionTitle className="mt-5">{proof.title}</SectionTitle>
          <SectionSub className="mt-5">{proof.sub}</SectionSub>
        </Reveal>

        <RevealStagger className="mt-12 grid grid-cols-1 border-l-2 border-t-2 border-ink sm:grid-cols-2 lg:grid-cols-4">
          {proof.headline.map((h) => (
            <div key={h.label} className="border-b-2 border-r-2 border-ink bg-bg px-6 py-8">
              <p className="text-[38px] font-extrabold leading-none tracking-[-0.05em] text-text-primary sm:text-[44px]">
                {h.value}
              </p>
              <p className="mt-3 text-[13px] font-extrabold uppercase leading-tight tracking-[0.04em] text-text-primary">
                {h.label}
              </p>
              <p className="mt-2 text-[12px] font-medium text-text-muted">{h.note}</p>
            </div>
          ))}
        </RevealStagger>

        <RevealStagger className="mt-10 border-t-2 border-ink">
          {proof.cases.map((c, i) => (
            <div
              key={c.vertical}
              className={cn(
                'grid grid-cols-1 gap-4 border-b-2 border-ink px-5 py-6 sm:px-7 md:grid-cols-[190px_1fr_200px] md:items-start md:gap-8',
                i % 2 === 1 && 'bg-bg',
              )}
            >
              <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-text-muted">
                {c.vertical}
              </p>

              <div>
                <p className="text-[15px] font-extrabold tracking-[-0.02em] text-signal sm:text-[16px]">
                  {c.problem}
                </p>
                <div className="mt-1.5 flex items-center gap-2">
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-text-muted" strokeWidth={3} />
                  <p className="text-[15px] font-extrabold uppercase tracking-[-0.02em] text-text-primary sm:text-[16px]">
                    {c.solution}
                  </p>
                </div>
                <p className="mt-2.5 max-w-[52ch] text-[14px] font-medium leading-[1.6] text-text-secondary sm:text-[15px]">
                  {c.detail}
                </p>
              </div>

              <div className="self-start md:justify-self-end">
                <div className="inline-flex flex-col items-start border-2 border-ink bg-accent px-4 py-3 md:items-end">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-accent-ink">
                    Result
                  </span>
                  <span className="mt-1.5 text-balance text-[17px] font-extrabold uppercase leading-[1.1] tracking-[-0.03em] text-ink sm:text-[19px] md:text-right">
                    {c.result}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </RevealStagger>

        <Reveal delay={0.1}>
          <Link
            href="/case-studies"
            className="group mt-8 inline-flex items-center gap-2 border-b-2 border-ink pb-1 text-[13px] font-extrabold uppercase tracking-[0.06em] text-text-primary"
          >
            Read the full case studies
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              strokeWidth={3}
            />
          </Link>
        </Reveal>

        <SectionCTA label="Get numbers for your business" />
      </Container>
    </Section>
  );
}
