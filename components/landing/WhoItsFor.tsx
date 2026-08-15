import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Check } from 'lucide-react';

export function WhoItsFor({
  heading,
  items,
}: {
  heading: string;
  items: string[];
}) {
  return (
    <section className="border-b border-border py-14 sm:py-20 md:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow>Who it&apos;s for</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-extrabold uppercase text-balance text-[28px] leading-[1.1] tracking-[-0.03em] text-text-primary sm:text-[38px] md:text-[46px]">
                {heading}
              </h2>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <ul className="space-y-4">
              {items.map((item, i) => (
                <Reveal as="li" key={i} delay={Math.min(i * 0.05, 0.3)}>
                  <div className="flex items-start gap-4">
                    <span
                      aria-hidden
                      className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-ink bg-accent/30"
                    >
                      <Check className="h-3.5 w-3.5 text-signal" strokeWidth={2.5} />
                    </span>
                    <p className="text-pretty text-[16px] leading-relaxed text-text-secondary sm:text-[17px]">
                      {item}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
