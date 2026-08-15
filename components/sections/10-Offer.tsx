import { Check, ShieldCheck, X } from 'lucide-react';
import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Eyebrow, SectionTitle, SectionSub } from '@/components/ui/Eyebrow';
import { Reveal, RevealStagger } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

/**
 * Replaces the old pricing table. Nothing here quotes a number —
 * the only ask on the page is the call, so the section stacks what
 * the call is worth and then gets out of the way.
 */
export default function Offer() {
  const { offer } = CONTENT;
  const { close } = offer;

  return (
    <Section id="offer" className="border-b-2 border-border bg-bg-alt py-16 sm:py-20 md:py-24">
      <Container>
        <Reveal className="max-w-[760px]">
          <Eyebrow>{offer.eyebrow}</Eyebrow>
          <SectionTitle className="mt-5">{offer.title}</SectionTitle>
          <SectionSub className="mt-5">{offer.sub}</SectionSub>
        </Reveal>

        {/* What we build — named products, no numbers. */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {offer.products.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08} className="flex">
              <article
                className={cn(
                  'flex w-full flex-col border-2 border-ink',
                  p.featured ? 'bg-ink text-text-on-ink' : 'bg-bg',
                )}
              >
                <div className="px-6 pb-7 pt-6 sm:px-8 sm:pb-8 sm:pt-7">
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={cn(
                        'inline-flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-[0.16em]',
                        p.featured ? 'text-bg/70' : 'text-text-muted',
                      )}
                    >
                      <span
                        aria-hidden
                        className={cn('h-2 w-2 shrink-0', p.featured ? 'bg-accent' : 'bg-signal')}
                      />
                      {p.marker} · {p.kicker}
                    </span>
                    {p.badge && (
                      <span className="shrink-0 bg-accent px-2 py-1 text-[10px] font-extrabold uppercase tracking-[0.1em] text-ink">
                        {p.badge}
                      </span>
                    )}
                  </div>

                  <p
                    className={cn(
                      'mt-7 text-[12px] font-extrabold uppercase tracking-[0.22em]',
                      p.featured ? 'text-bg/45' : 'text-text-muted',
                    )}
                  >
                    {p.brand}
                  </p>
                  <h3
                    className={cn(
                      'mt-1.5 text-[30px] font-extrabold uppercase leading-[1.02] tracking-[-0.05em] sm:text-[38px]',
                      p.featured ? 'text-bg' : 'text-text-primary',
                    )}
                  >
                    {p.name}
                  </h3>

                  <span aria-hidden className="mt-5 block h-[3px] w-14 bg-accent" />

                  <p
                    className={cn(
                      'mt-5 max-w-[46ch] text-[14px] font-medium leading-[1.6] sm:text-[15px]',
                      p.featured ? 'text-bg/70' : 'text-text-secondary',
                    )}
                  >
                    {p.blurb}
                  </p>
                </div>

                <div
                  className={cn(
                    'border-y-2 px-6 py-5 sm:px-8',
                    p.featured ? 'border-bg/20 bg-bg/[0.05]' : 'border-ink bg-bg-sunken',
                  )}
                >
                  <p
                    className={cn(
                      'text-[13px] font-extrabold uppercase leading-[1.45] tracking-[0.02em]',
                      p.featured ? 'text-bg/85' : 'text-text-primary',
                    )}
                  >
                    {p.forWho}
                  </p>
                </div>

                <ul className="flex-1 space-y-3.5 px-6 py-7 sm:px-8">
                  {p.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-3">
                      <Check
                        className={cn(
                          'mt-0.5 h-4 w-4 shrink-0',
                          p.featured ? 'text-accent' : 'text-success',
                        )}
                        strokeWidth={3.5}
                      />
                      <span
                        className={cn(
                          'text-[14px] font-medium leading-[1.5] sm:text-[15px]',
                          p.featured ? 'text-bg/85' : 'text-text-secondary',
                        )}
                      >
                        {inc}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="px-6 pb-7 sm:px-8 sm:pb-8">
                  <Button
                    href={CONTENT.brand.bookHref}
                    size="md"
                    withArrow
                    variant={p.featured ? 'on-ink' : 'primary'}
                    className="w-full"
                  >
                    {p.cta}
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* The stack — what 30 minutes actually buys them. */}
        <Reveal delay={0.1} className="mt-16 sm:mt-20">
          <h3 className="text-[20px] font-extrabold uppercase tracking-[-0.03em] text-text-primary sm:text-[26px]">
            {offer.stackLabel}
          </h3>
        </Reveal>

        <RevealStagger className="mt-7 grid grid-cols-1 border-l-2 border-t-2 border-ink md:grid-cols-2">
          {offer.stack.map((s) => (
            <div key={s.n} className="border-b-2 border-r-2 border-ink bg-bg px-6 py-7 sm:px-8">
              <div className="flex items-baseline gap-3">
                <span className="text-[13px] font-extrabold tracking-[0.08em] text-text-muted">
                  {s.n}
                </span>
                <span aria-hidden className="h-[2px] w-6 shrink-0 bg-accent" />
              </div>
              <p className="mt-4 text-[17px] font-extrabold uppercase leading-[1.15] tracking-[-0.03em] text-text-primary sm:text-[19px]">
                {s.label}
              </p>
              <p className="mt-3 max-w-[46ch] text-[14px] font-medium leading-[1.6] text-text-secondary sm:text-[15px]">
                {s.body}
              </p>
            </div>
          ))}
        </RevealStagger>

        {/* ---- The long close. Cost of inaction → comparison → objections → ask. ---- */}
        <Reveal delay={0.1} className="mt-16 sm:mt-24">
          <div className="max-w-[760px]">
            <Eyebrow>{close.eyebrow}</Eyebrow>
            <SectionTitle className="mt-5">{close.title}</SectionTitle>
            <p className="mt-6 text-[18px] font-extrabold uppercase leading-[1.25] tracking-[-0.03em] text-text-primary sm:text-[22px]">
              {close.lead}
            </p>
          </div>
        </Reveal>

        <div className="mt-8 max-w-[68ch] space-y-5 border-l-2 border-ink pl-6 sm:pl-8">
          {close.paragraphs.map((p, i) => (
            <Reveal key={p} delay={0.04 * i}>
              <p className="text-[16px] font-medium leading-[1.72] text-text-secondary sm:text-[17px]">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Two futures, side by side. */}
        <Reveal delay={0.08} className="mt-16">
          <h3 className="text-[20px] font-extrabold uppercase tracking-[-0.03em] text-text-primary sm:text-[26px]">
            {close.compareLabel}
          </h3>
        </Reveal>

        <RevealStagger className="mt-7 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {close.compare.map((col) => {
            const bad = col.tone === 'bad';
            return (
              <div
                key={col.label}
                className={cn('border-2 border-ink', bad ? 'bg-bg-sunken' : 'bg-ink')}
              >
                <div
                  className={cn(
                    'flex items-center gap-2.5 border-b-2 px-6 py-5 sm:px-8',
                    bad ? 'border-ink' : 'border-bg/20',
                  )}
                >
                  <span
                    aria-hidden
                    className={cn('h-2.5 w-2.5 shrink-0', bad ? 'bg-signal' : 'bg-accent')}
                  />
                  <p
                    className={cn(
                      'text-[13px] font-extrabold uppercase tracking-[0.14em]',
                      bad ? 'text-text-muted' : 'text-bg/70',
                    )}
                  >
                    {col.label}
                  </p>
                </div>

                <ul className="space-y-4 px-6 py-7 sm:px-8">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      {bad ? (
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-signal" strokeWidth={3.5} />
                      ) : (
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={3.5} />
                      )}
                      <span
                        className={cn(
                          'text-[15px] font-medium leading-[1.55] sm:text-[16px]',
                          bad ? 'text-text-secondary' : 'text-bg/85',
                        )}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </RevealStagger>

        {/* Objection handling. */}
        <Reveal delay={0.08} className="mt-16">
          <h3 className="text-[20px] font-extrabold uppercase tracking-[-0.03em] text-text-primary sm:text-[26px]">
            {close.objectionLabel}
          </h3>
        </Reveal>

        <RevealStagger className="mt-7 border-t-2 border-ink">
          {close.objections.map((o, i) => (
            <div
              key={o.q}
              className={cn(
                'grid grid-cols-1 gap-3 border-b-2 border-ink px-5 py-7 sm:px-7 md:grid-cols-[300px_1fr] md:gap-10',
                i % 2 === 1 && 'bg-bg',
              )}
            >
              <p className="text-[17px] font-extrabold uppercase leading-[1.2] tracking-[-0.03em] text-text-primary sm:text-[19px]">
                {o.q}
              </p>
              <p className="max-w-[60ch] text-[15px] font-medium leading-[1.65] text-text-secondary sm:text-[16px]">
                {o.a}
              </p>
            </div>
          ))}
        </RevealStagger>

        {/* The ask — banded so nothing floats in the middle of a dark rectangle. */}
        <Reveal delay={0.1}>
          <div className="mt-12 border-2 border-ink bg-ink">
            {/* Scarcity strip */}
            <div className="flex items-center justify-center gap-2.5 border-b-2 border-bg/20 bg-accent px-5 py-3.5 text-center">
              <span aria-hidden className="h-2 w-2 shrink-0 bg-ink" />
              <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink sm:text-[12px]">
                {close.scarcity}
              </p>
            </div>

            {/* Guarantees — two equal cells, so the block reads symmetrical */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              {close.guarantees.map((g, i) => (
                <div
                  key={g}
                  className={cn(
                    'px-6 py-8 sm:px-8',
                    i === 0 && 'border-b-2 border-bg/20 md:border-b-0 md:border-r-2',
                  )}
                >
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="h-4 w-4 shrink-0 text-accent" strokeWidth={2.75} />
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-bg/45">
                      {i === 0 ? 'Guarantee 01' : 'Guarantee 02'}
                    </p>
                  </div>
                  <p className="mt-4 text-[15px] font-medium leading-[1.6] text-bg/80 sm:text-[16px]">
                    {g}
                  </p>
                </div>
              ))}
            </div>

            {/* The ask */}
            <div className="border-t-2 border-bg/20 px-6 py-11 text-center sm:px-10 sm:py-12">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-bg/45">
                {close.guaranteeLabel}
              </p>
              <p className="mx-auto mt-4 max-w-[520px] text-[22px] font-extrabold uppercase leading-[1.15] tracking-[-0.04em] text-bg sm:text-[28px]">
                {close.askTitle}
              </p>

              <div className="mt-8 flex justify-center">
                <Button href={CONTENT.brand.bookHref} size="lg" variant="on-ink" withArrow pulse depth>
                  {close.cta}
                </Button>
              </div>

              <p className="mt-7 text-[12px] font-bold uppercase tracking-[0.06em] text-bg/50 sm:text-[13px]">
                {close.ctaNote}
              </p>
            </div>

            {/* P.S. */}
            <div className="border-t-2 border-bg/20 bg-bg/[0.04] px-6 py-8 sm:px-10">
              <p className="mx-auto max-w-[680px] text-[14px] font-medium leading-[1.7] text-bg/70 sm:text-[15px]">
                {close.ps}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
