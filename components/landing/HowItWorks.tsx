import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import type { HowStep } from '@/lib/landing-pages/types';

export function HowItWorks({ steps }: { steps: HowStep[] }) {
  return (
    <section className="border-b border-border py-14 sm:py-20 md:py-24">
      <Container>
        <div className="max-w-[680px]">
          <Reveal>
            <Eyebrow>How it works</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-extrabold uppercase text-balance text-[28px] leading-[1.1] tracking-[-0.03em] text-text-primary sm:text-[38px] md:text-[46px]">
              From audit to deployed agent in weeks, not quarters.
            </h2>
          </Reveal>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-none border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="bg-surface">
              <Reveal delay={Math.min(i * 0.06, 0.3)} className="block h-full">
                <div className="flex h-full flex-col p-6 sm:p-7">
                  <span className="font-extrabold uppercase text-[40px] leading-none tracking-[-0.04em] text-signal tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-5 text-[17px] tracking-[-0.01em] text-text-primary sm:text-[18px]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-pretty text-[14px] leading-relaxed text-text-secondary sm:text-[15px]">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
