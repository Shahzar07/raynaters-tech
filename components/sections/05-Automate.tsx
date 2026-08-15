import { ArrowRight } from 'lucide-react';
import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Eyebrow, SectionTitle, SectionSub } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

/**
 * Section 3: the solution, split into the two tracks the ICP actually
 * divides along. Each row is problem-led ("Missing calls?") with the
 * product name second — the audit's core messaging fix.
 */
export default function Automate() {
  const { automate } = CONTENT;

  return (
    <Section id="automate" className="border-b-2 border-border bg-bg-alt py-16 sm:py-20 md:py-24">
      <Container>
        <Reveal className="max-w-[760px]">
          <Eyebrow>{automate.eyebrow}</Eyebrow>
          <SectionTitle className="mt-5">{automate.title}</SectionTitle>
          <SectionSub className="mt-5">{automate.sub}</SectionSub>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {automate.tracks.map((track, ti) => (
            <Reveal key={track.key} delay={ti * 0.08} className="flex">
              <div className="flex w-full flex-col border-2 border-ink bg-bg">
                {/* Track header — inverted so the two tracks read as two doors */}
                <div className="bg-ink px-6 py-6 text-text-on-ink sm:px-7 sm:py-7">
                  <div className="flex items-center gap-3">
                    <span className="bg-accent px-2 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink">
                      {track.marker}
                    </span>
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-bg/60">
                      {track.name}
                    </span>
                  </div>
                  <h3 className="mt-4 text-[22px] font-extrabold uppercase leading-[1.15] tracking-[-0.035em] sm:text-[26px]">
                    {track.headline}
                  </h3>
                  <p className="mt-3 text-[14px] font-medium leading-[1.6] text-bg/70 sm:text-[15px]">
                    {track.symptom}
                  </p>
                  <p className="mt-5 border-t border-bg/20 pt-4 text-[11px] font-bold uppercase leading-relaxed tracking-[0.06em] text-accent">
                    {track.who}
                  </p>
                </div>

                {/* Problem → solution rows */}
                <div className="flex flex-1 flex-col">
                  {track.systems.map((s, i) => (
                    <div
                      key={s.solution}
                      className={cn(
                        'flex-1 px-6 py-6 sm:px-7',
                        i > 0 && 'border-t-2 border-border',
                      )}
                    >
                      <p className="text-[15px] font-extrabold tracking-[-0.02em] text-signal sm:text-[16px]">
                        {s.problem}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 shrink-0 text-text-muted" strokeWidth={3} />
                        <h4 className="text-[17px] font-extrabold uppercase tracking-[-0.03em] text-text-primary sm:text-[19px]">
                          {s.solution}
                        </h4>
                      </div>
                      <p className="mt-2.5 text-[14px] font-medium leading-[1.6] text-text-secondary sm:text-[15px]">
                        {s.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
