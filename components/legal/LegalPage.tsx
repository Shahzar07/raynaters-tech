import Link from 'next/link';
import AnnouncementBar from '@/components/sections/01-AnnouncementBar';
import Navigation from '@/components/sections/02-Navigation';
import Footer from '@/components/sections/15-Footer';
import { Container } from '@/components/ui/Container';

export interface LegalSection {
  heading: string;
  /** Paragraphs and bullet lists, rendered in order. */
  blocks: ReadonlyArray<
    | { type: 'p'; text: string }
    | { type: 'ul'; items: readonly string[] }
    | { type: 'dl'; items: readonly { term: string; def: string }[] }
  >;
}

/**
 * Shared shell for /privacy and /terms so both read as one document
 * system: sticky contents rail on desktop, numbered sections, same type.
 */
export function LegalPage({
  title,
  intro,
  updated,
  sections,
}: {
  title: string;
  intro: string;
  updated: string;
  sections: readonly LegalSection[];
}) {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AnnouncementBar />
      <Navigation />

      <header className="border-b-2 border-border bg-bg-alt py-14 sm:py-20">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-7">
            <Link
              href="/"
              className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-text-muted transition-colors hover:text-text-primary"
            >
              ← Back to home
            </Link>
          </nav>
          <p className="inline-block bg-ink px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-text-on-ink">
            Legal
          </p>
          <h1 className="mt-5 text-[30px] font-extrabold uppercase leading-[1.1] tracking-[-0.045em] text-text-primary sm:text-[42px] md:text-[52px]">
            {title}
          </h1>
          <p className="mt-5 max-w-[62ch] text-[16px] font-medium leading-[1.62] text-text-secondary sm:text-[18px]">
            {intro}
          </p>
          <p className="mt-6 text-[12px] font-extrabold uppercase tracking-[0.1em] text-text-muted">
            Last updated {updated}
          </p>
        </Container>
      </header>

      <div className="bg-bg py-14 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,260px)_1fr] lg:gap-16">
            {/* Contents rail */}
            <nav aria-label="Contents" className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-text-muted">
                Contents
              </p>
              <ol className="mt-4 space-y-2.5 border-l-2 border-border pl-4">
                {sections.map((s, i) => (
                  <li key={s.heading}>
                    <a
                      href={`#s${i + 1}`}
                      className="text-[13px] font-bold leading-snug text-text-secondary transition-colors hover:text-text-primary"
                    >
                      <span className="tabular-nums text-text-muted">
                        {String(i + 1).padStart(2, '0')}.
                      </span>{' '}
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="max-w-[70ch]">
              {sections.map((s, i) => (
                <section
                  key={s.heading}
                  id={`s${i + 1}`}
                  className="scroll-mt-28 border-t-2 border-ink pb-10 pt-8 first:border-t-0 first:pt-0"
                >
                  <h2 className="text-[19px] font-extrabold uppercase leading-[1.2] tracking-[-0.03em] text-text-primary sm:text-[22px]">
                    <span className="mr-2.5 tabular-nums text-signal">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {s.heading}
                  </h2>

                  <div className="mt-5 space-y-4">
                    {s.blocks.map((b, bi) => {
                      if (b.type === 'p') {
                        return (
                          <p
                            key={bi}
                            className="text-[15px] font-medium leading-[1.68] text-text-secondary sm:text-[16px]"
                          >
                            {b.text}
                          </p>
                        );
                      }
                      if (b.type === 'ul') {
                        return (
                          <ul key={bi} className="space-y-2.5">
                            {b.items.map((item) => (
                              <li key={item} className="flex items-start gap-3">
                                <span
                                  aria-hidden
                                  className="mt-[9px] h-1.5 w-1.5 shrink-0 bg-ink"
                                />
                                <span className="text-[15px] font-medium leading-[1.62] text-text-secondary sm:text-[16px]">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      return (
                        <dl key={bi} className="border-2 border-border bg-bg-alt">
                          {b.items.map((item, di) => (
                            <div
                              key={item.term}
                              className={
                                di > 0
                                  ? 'border-t-2 border-border px-5 py-4'
                                  : 'px-5 py-4'
                              }
                            >
                              <dt className="text-[12px] font-extrabold uppercase tracking-[0.08em] text-text-primary">
                                {item.term}
                              </dt>
                              <dd className="mt-1.5 text-[14px] font-medium leading-[1.6] text-text-secondary sm:text-[15px]">
                                {item.def}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </main>
  );
}
