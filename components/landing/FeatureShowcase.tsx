import { Container, Section } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { ShowcaseVisual } from '@/components/landing/ShowcaseVisual';
import type { ShowcaseRow } from '@/lib/landing-pages/types';

interface FeatureShowcaseProps {
  eyebrow?: string;
  rows: ShowcaseRow[];
}

export function FeatureShowcase({ eyebrow, rows }: FeatureShowcaseProps) {
  return (
    <Section className="border-b border-border">
      <Container>
        {eyebrow && (
          <Reveal className="mb-12 block">
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
        )}
        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {rows.map((row, i) => (
            <Reveal key={i} delay={Math.min(i * 0.05, 0.2)}>
              <div
                className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16 ${
                  i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Copy */}
                <div className="max-w-[480px]">
                  <p className="font-extrabold uppercase text-[22px] leading-[1.18] tracking-[-0.02em] text-text-primary sm:text-[26px] md:text-[28px]">
                    {row.title}
                  </p>
                  <p className="mt-4 text-pretty text-[16px] leading-relaxed text-text-secondary sm:text-[17px]">
                    {row.body}
                  </p>
                </div>
                {/* Data panel */}
                <ShowcaseVisual data={row.visual} />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
