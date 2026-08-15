import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight } from 'lucide-react';
import type { MiniCaseStory as MiniCaseStoryData } from '@/lib/landing-pages/types';

export function MiniCaseStory({ data }: { data: MiniCaseStoryData }) {
  return (
    <section className="border-b border-border py-14 sm:py-20 md:py-24">
      <Container>
        <Reveal>
          <Eyebrow>A recent result</Eyebrow>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
          {/* Metric panel */}
          <Reveal className="md:col-span-5">
            <div className="flex h-full flex-col justify-between rounded-none border border-border bg-surface p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-none border border-border bg-surface-hover text-[14px] font-medium tracking-[-0.01em] text-text-primary">
                  {data.monogram}
                </span>
                <span className="text-[14px] font-medium tracking-[-0.01em] text-text-primary">
                  {data.client}
                </span>
              </div>
              <div className="mt-10">
                <p className="font-extrabold uppercase text-[56px] leading-none tracking-[-0.04em] text-signal sm:text-[64px]">
                  {data.metric}
                </p>
                <p className="mt-3 text-[14px] uppercase tracking-[0.16em] text-text-muted">
                  {data.metricLabel}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Narrative */}
          <Reveal delay={0.08} className="md:col-span-7">
            <div className="flex h-full flex-col">
              <div>
                <p className="text-[12px] uppercase tracking-[0.18em] text-text-muted">The challenge</p>
                <p className="mt-2 text-pretty text-[16px] leading-relaxed text-text-secondary sm:text-[17px]">
                  {data.challenge}
                </p>
              </div>
              <div className="mt-6">
                <p className="text-[12px] uppercase tracking-[0.18em] text-signal">The outcome</p>
                <p className="mt-2 text-pretty text-[16px] leading-relaxed text-text-primary sm:text-[17px]">
                  {data.outcome}
                </p>
              </div>
              <p className="mt-6 text-[14px] text-text-muted">
                — {data.persona.name}, {data.persona.role}
              </p>
              <div className="mt-7">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-1.5 text-[14px] font-medium text-signal transition-colors hover:text-signal"
                >
                  Read the full case studies
                  <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
