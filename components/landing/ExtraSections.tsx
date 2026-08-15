import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import type { ExtraSectionGroup } from '@/lib/landing-pages/types';

/**
 * Optional grouped blocks — used by the trades page to render a section
 * per trade (plumbers, electricians, HVAC, builders, landscapers) so the
 * page can rank for each `ai receptionist for {trade}` long-tail.
 */
export function ExtraSections({ group }: { group: ExtraSectionGroup }) {
  return (
    <section className="border-b border-border py-14 sm:py-20 md:py-24">
      <Container>
        <div className="max-w-[680px]">
          {group.eyebrow && (
            <Reveal>
              <Eyebrow>{group.eyebrow}</Eyebrow>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-extrabold uppercase text-balance text-[28px] leading-[1.1] tracking-[-0.03em] text-text-primary sm:text-[38px] md:text-[46px]">
              {group.title}
            </h2>
          </Reveal>
          {group.intro && (
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-[60ch] text-pretty text-[16px] leading-relaxed text-text-secondary sm:text-[17px]">
                {group.intro}
              </p>
            </Reveal>
          )}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {group.items.map((item, i) => (
            <Reveal key={item.title} delay={Math.min(i * 0.05, 0.3)}>
              <article className="h-full rounded-none border border-border bg-surface p-6 transition-colors duration-300 hover:border-text-muted/40">
                <h3 className="text-[17px] tracking-[-0.01em] text-text-primary sm:text-[18px]">
                  {item.title}
                </h3>
                <p className="mt-3 text-pretty text-[14px] leading-relaxed text-text-secondary sm:text-[15px]">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
