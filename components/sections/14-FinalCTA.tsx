import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

export default function FinalCTA() {
  const { finalCta, brand, hero } = CONTENT;

  return (
    <Section className="bg-ink py-20 sm:py-24 md:py-28">
      <Container width="text">
        <div className="text-center">
          <Reveal>
            <div className="flex justify-center">
              <Eyebrow tone="ink">{finalCta.eyebrow}</Eyebrow>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-display mt-7 text-balance uppercase text-bg text-[24px] leading-[1.34] tracking-[-0.04em] sm:text-[32px] sm:leading-[1.32] md:text-[44px] md:leading-[1.3] md:tracking-[-0.05em]">
              {finalCta.title}
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mx-auto mt-7 max-w-[560px] text-[16px] font-medium leading-[1.6] text-bg/70 sm:text-[18px]">
              {finalCta.sub}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Button href={brand.bookHref} size="lg" variant="on-ink" withArrow pulse depth>
                {finalCta.cta}
              </Button>
              <Button
                href="#fit"
                size="lg"
                className="border-bg/30 bg-transparent text-bg hover:border-bg hover:bg-bg hover:text-ink"
              >
                {finalCta.secondaryCta}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-7 text-[12px] font-extrabold uppercase tracking-[0.08em] text-bg/50 sm:text-[13px]">
              {finalCta.smallprint}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mx-auto mt-12 grid max-w-[620px] grid-cols-3 border-2 border-bg/25">
              {hero.proof.map((p, i) => (
                <div
                  key={p.label}
                  className={i > 0 ? 'border-l-2 border-bg/25 px-2 py-4' : 'px-2 py-4'}
                >
                  <p className="text-[18px] font-extrabold tracking-[-0.04em] text-accent sm:text-[24px]">
                    {p.value}
                  </p>
                  <p className="mt-1 text-[9px] font-extrabold uppercase leading-tight tracking-[0.1em] text-bg/50 sm:text-[10px]">
                    {p.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
