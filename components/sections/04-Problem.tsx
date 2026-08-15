import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Eyebrow, SectionTitle, SectionSub } from '@/components/ui/Eyebrow';
import { Reveal, RevealStagger } from '@/components/ui/Reveal';

/**
 * Section 2 of the funnel: problem identification.
 * Goal is recognition — the visitor should find their own week in this grid
 * before they are asked to consider a solution.
 */
export default function Problem() {
  const { problem } = CONTENT;

  return (
    <Section id="problem" className="border-b-2 border-border bg-bg py-16 sm:py-20 md:py-24">
      <Container>
        <Reveal className="max-w-[720px]">
          <Eyebrow>{problem.eyebrow}</Eyebrow>
          <SectionTitle className="mt-5">{problem.title}</SectionTitle>
          <SectionSub className="mt-5">{problem.sub}</SectionSub>
        </Reveal>

        <RevealStagger className="mt-12 grid grid-cols-1 border-l-2 border-t-2 border-ink sm:grid-cols-2 lg:grid-cols-3">
          {problem.items.map((item) => (
            <div
              key={item.label}
              className="group border-b-2 border-r-2 border-ink bg-bg-alt p-6 transition-colors hover:bg-bg-sunken sm:p-7"
            >
              <p className="inline-block bg-signal px-2 py-1 text-[11px] font-extrabold uppercase tracking-[0.08em] text-white">
                {item.cost}
              </p>
              <h3 className="mt-4 text-[19px] font-extrabold uppercase tracking-[-0.03em] text-text-primary sm:text-[21px]">
                {item.label}
              </h3>
              <p className="mt-2.5 text-[14px] font-medium leading-[1.6] text-text-secondary sm:text-[15px]">
                {item.body}
              </p>
            </div>
          ))}
        </RevealStagger>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-[680px] border-l-4 border-ink pl-5 text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-text-primary sm:text-[20px]">
            {problem.closer}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
