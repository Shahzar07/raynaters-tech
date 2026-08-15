import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import type { WhatItDoesItem } from '@/lib/landing-pages/types';

export function WhatItDoes({
  heading,
  items,
}: {
  heading: string;
  items: WhatItDoesItem[];
}) {
  return (
    <section className="border-b border-border py-14 sm:py-20 md:py-24">
      <Container>
        <div className="max-w-[680px]">
          <Reveal>
            <Eyebrow>What it does</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-extrabold uppercase text-balance text-[28px] leading-[1.1] tracking-[-0.03em] text-text-primary sm:text-[38px] md:text-[46px]">
              {heading}
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={Math.min(i * 0.06, 0.3)}>
              <article className="group h-full rounded-none border border-border bg-surface p-6 transition-colors duration-300 hover:border-text-muted/40 sm:p-7">
                <div className="flex items-baseline gap-3">
                  <span className="font-extrabold uppercase text-[24px] leading-none tracking-[-0.03em] text-signal tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-[18px] tracking-[-0.01em] text-text-primary sm:text-[19px]">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-4 text-pretty text-[15px] leading-relaxed text-text-secondary sm:text-[16px]">
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
