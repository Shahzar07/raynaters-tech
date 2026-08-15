import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Eyebrow, SectionTitle, SectionSub } from '@/components/ui/Eyebrow';
import { Reveal, RevealStagger } from '@/components/ui/Reveal';

/**
 * Makes the 90-day promise feel methodical rather than promotional —
 * five numbered steps showing how the return is actually calculated.
 */
export default function RoiMethod() {
  const { roi } = CONTENT;

  return (
    <Section id="roi" className="border-b-2 border-border bg-bg py-16 sm:py-20 md:py-24">
      <Container>
        <Reveal className="max-w-[760px]">
          <Eyebrow>{roi.eyebrow}</Eyebrow>
          <SectionTitle className="mt-5">{roi.title}</SectionTitle>
          <SectionSub className="mt-5">{roi.sub}</SectionSub>
        </Reveal>

        <RevealStagger className="mt-12 border-t-2 border-ink">
          {roi.steps.map((step) => (
            <div
              key={step.n}
              className="grid grid-cols-1 gap-2 border-b-2 border-ink bg-bg-alt px-5 py-6 transition-colors hover:bg-bg-sunken sm:grid-cols-[80px_1fr] sm:gap-6 sm:px-7 sm:py-7 md:grid-cols-[100px_320px_1fr] md:items-baseline"
            >
              <span className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-signal">
                Step {step.n}
              </span>
              <h3 className="text-[18px] font-extrabold uppercase leading-[1.2] tracking-[-0.03em] text-text-primary sm:text-[20px]">
                {step.label}
              </h3>
              <p className="text-[14px] font-medium leading-[1.6] text-text-secondary sm:col-start-2 sm:text-[15px] md:col-start-3">
                {step.body}
              </p>
            </div>
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}
