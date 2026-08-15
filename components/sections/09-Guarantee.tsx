import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Eyebrow, SectionTitle } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

export default function Guarantee() {
  const { guarantee } = CONTENT;

  return (
    <Section id="guarantee" className="border-b-2 border-border bg-bg py-16 sm:py-20 md:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16">
          <Reveal>
            <Eyebrow>{guarantee.eyebrow}</Eyebrow>
            <SectionTitle className="mt-5">{guarantee.title}</SectionTitle>
            <p className="mt-6 border-l-4 border-signal pl-5 text-[16px] font-bold leading-[1.5] text-text-primary sm:text-[18px]">
              {guarantee.closer}
            </p>
          </Reveal>

          <Reveal delay={0.08} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {guarantee.layers.map((layer) => (
              <div
                key={layer.n}
                className="flex flex-col border-2 border-ink bg-bg-alt p-6 sm:p-7"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center bg-ink text-[13px] font-extrabold text-text-on-ink">
                  {layer.n}
                </span>
                <h3 className="mt-5 text-[19px] font-extrabold uppercase leading-[1.15] tracking-[-0.03em] text-text-primary sm:text-[22px]">
                  {layer.label}
                </h3>
                <p className="mt-3 text-[14px] font-medium leading-[1.62] text-text-secondary sm:text-[15px]">
                  {layer.body}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
