import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container, Section } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { RESOURCES } from '@/lib/resources';

/**
 * Contextual "read this before you decide" block.
 *
 * It exists for two reasons. The obvious one is that a visitor who is not
 * ready to book should have somewhere to go that is not the back button.
 * The less obvious one is internal linking: the guides carry the informational
 * keywords, and without this they sit at the bottom of the site with almost
 * nothing pointing at them. Dropping this onto every money page and case
 * study gives each guide a dozen descriptive inbound links from pages that
 * already have authority.
 *
 * Links are generated from the resource library, so publishing a new guide
 * wires it into every one of those pages automatically.
 */
export function KeepReading({
  eyebrow = 'Before you book',
  title = 'Read the honest version first.',
  /** Slug of a guide to leave out — used when the page IS that guide. */
  excludeSlug,
}: {
  eyebrow?: string;
  title?: string;
  excludeSlug?: string;
}) {
  const guides = RESOURCES.filter((r) => r.slug !== excludeSlug);
  if (guides.length === 0) return null;

  return (
    <Section className="border-b-2 border-border bg-bg-alt">
      <Container>
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-5 max-w-[680px] font-extrabold uppercase text-balance text-[26px] leading-[1.12] tracking-[-0.03em] text-text-primary sm:text-[32px]">
            {title}
          </h2>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2">
          {guides.map((r, i) => (
            <Reveal key={r.slug} delay={Math.min(i * 0.05, 0.25)} className="h-full">
              <Link
                href={`/resources/${r.slug}`}
                className="group flex h-full flex-col border-2 border-ink bg-surface p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-text-muted">
                  {r.category} · {r.readingTime} read
                </p>
                <h3 className="mt-3 text-pretty text-[17px] font-extrabold leading-[1.25] tracking-[-0.02em] text-text-primary sm:text-[19px]">
                  {r.title}
                </h3>
                <p className="mt-3 text-pretty text-[14px] leading-relaxed text-text-secondary sm:text-[15px]">
                  {r.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-extrabold uppercase tracking-[0.08em] text-signal">
                  Read the guide
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2.25}
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
