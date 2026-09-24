import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/components/sections/02-Navigation';
import Footer from '@/components/sections/15-Footer';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { MediaFrame } from '@/components/ui/MediaFrame';
import { LandingFinalCTA } from '@/components/landing/LandingFinalCTA';
import { CaseStudyCard } from '@/components/case-studies/CaseStudyCard';
import { KeepReading } from '@/components/ui/KeepReading';
import { Accordion } from '@/components/ui/Accordion';
import { JsonLd } from '@/components/seo/JsonLd';
import { pageMetadata, absUrl } from '@/lib/seo/meta';
import { breadcrumbSchema, articleSchema, faqPageSchema } from '@/lib/seo/schema';
import { CASE_STUDIES, getCaseStudy } from '@/lib/case-studies';
import type { CaseStudy } from '@/lib/case-studies/types';

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return {};
  return pageMetadata({
    title: study.metadata.title,
    description: study.metadata.description,
    path: `/case-studies/${study.slug}`,
    type: 'article',
  });
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  const related = study.related
    .map((s) => getCaseStudy(s))
    .filter((s): s is CaseStudy => Boolean(s));

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Case studies', path: '/case-studies' },
    { name: study.client, path: `/case-studies/${study.slug}` },
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          articleSchema({
            headline: study.headlineResult,
            description: study.metadata.description,
            url: absUrl(`/case-studies/${study.slug}`),
            datePublished: '2026-01-15',
          }),
          ...(study.faqs?.length ? [faqPageSchema(study.faqs)] : []),
        ]}
      />
      <Navigation />

      {/* Disclaimer — representative / illustrative content */}
      <div className="border-b border-border bg-surface/60 py-2.5">
        <Container>
          <p className="text-center text-[12px] leading-[1.5] text-text-muted">
            <span className="mr-1.5 inline-block rounded-none border border-border bg-surface px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-text-muted">
              {study.modeled ? 'Modeled' : 'Note'}
            </span>
            {study.modeled
              ? `Modeled scenario, not a named client. ${study.modeled.basis} Every assumption is listed at the bottom of this page.`
              : 'This is a representative case study illustrating the type of results our deployments deliver. Metrics are indicative of typical outcomes. Client details will be updated with verified data as engagements are confirmed.'}
          </p>
        </Container>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border pt-10 pb-14 sm:pt-12 sm:pb-20">
        <Container width="grid">
          <Breadcrumbs items={crumbs} />
          <div className="mt-8 flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-none border border-border bg-surface-hover text-[14px] font-medium text-text-primary">
              {study.monogram}
            </span>
            <div>
              <p className="text-[14px] font-medium tracking-[-0.01em] text-text-primary">
                {study.client}
              </p>
              <p className="text-[12px] uppercase tracking-[0.16em] text-text-muted">
                {study.category}
              </p>
            </div>
          </div>
          <Reveal delay={0.05}>
            <h1 className="mt-7 max-w-[18ch] font-extrabold uppercase text-balance text-[37px] leading-[1.08] tracking-tightest text-text-primary min-[400px]:text-[41px] sm:text-[44px] md:text-[56px] md:leading-[1.03]">
              {study.headlineResult}
            </h1>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 block">
            <MediaFrame
              src={study.image.src}
              alt={study.image.alt}
              aspectClass="aspect-[21/9]"
              priority
              overlay
              glow
              sizes="(max-width: 1100px) 100vw, 1100px"
            />
          </Reveal>
        </Container>
      </section>

      {/* Body */}
      <section className="border-b border-border py-14 sm:py-20 md:py-24">
        <Container width="text">
          <Reveal>
            <Eyebrow>The challenge</Eyebrow>
            <p className="mt-4 text-pretty text-[17px] leading-relaxed text-text-secondary sm:text-[18px]">
              {study.challenge}
            </p>
          </Reveal>
          <Reveal delay={0.05} className="mt-12 block">
            <Eyebrow>The solution</Eyebrow>
            <p className="mt-4 text-pretty text-[17px] leading-relaxed text-text-secondary sm:text-[18px]">
              {study.solution}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* What's included */}
      {study.included && study.included.length > 0 && (
        <section className="border-b border-border bg-bg-alt py-14 sm:py-20 md:py-24">
          <Container>
            <Reveal>
              <Eyebrow>What&apos;s included</Eyebrow>
              <h2 className="mt-5 max-w-[680px] font-extrabold uppercase text-balance text-[26px] leading-[1.12] tracking-[-0.03em] text-text-primary sm:text-[32px]">
                Exactly what gets built.
              </h2>
            </Reveal>
            <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {study.included.map((item, i) => (
                <Reveal key={item.title} delay={Math.min(i * 0.04, 0.24)} className="h-full">
                  <div className="h-full border-2 border-ink bg-surface p-6">
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-text-muted">
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-3 text-[17px] font-extrabold leading-[1.25] tracking-[-0.02em] text-text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-pretty text-[14px] leading-relaxed text-text-secondary sm:text-[15px]">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Results */}
      <section className="border-b border-border py-14 sm:py-20 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>The results</Eyebrow>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
            {study.results.map((r, i) => (
              <Reveal key={i} delay={Math.min(i * 0.06, 0.3)}>
                <div className="rounded-none border border-border bg-surface p-7 text-center">
                  <p className="font-extrabold uppercase text-[48px] leading-none tracking-[-0.04em] text-signal sm:text-[56px]">
                    {r.metric}
                  </p>
                  <p className="mt-3 text-[13px] uppercase tracking-[0.14em] text-text-muted">
                    {r.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {study.scorecard && study.scorecard.length > 0 && (
            <Reveal delay={0.1} className="mt-12 block">
              <div className="overflow-x-auto border-2 border-ink">
                <table className="w-full min-w-[520px] border-collapse text-left">
                  <thead>
                    <tr className="border-b-2 border-ink bg-ink text-text-on-ink">
                      <th className="p-4 text-[11px] font-extrabold uppercase tracking-[0.14em]">Metric</th>
                      <th className="p-4 text-right text-[11px] font-extrabold uppercase tracking-[0.14em]">Before</th>
                      <th className="p-4 text-right text-[11px] font-extrabold uppercase tracking-[0.14em] text-accent">After</th>
                    </tr>
                  </thead>
                  <tbody>
                    {study.scorecard.map((row) => (
                      <tr key={row.label} className="border-b border-border bg-surface last:border-b-0">
                        <td className="p-4 text-[14px] font-medium text-text-primary sm:text-[15px]">{row.label}</td>
                        <td className="p-4 text-right text-[14px] tabular-nums text-text-muted sm:text-[15px]">{row.before}</td>
                        <td className="p-4 text-right text-[14px] font-extrabold tabular-nums text-text-primary sm:text-[15px]">{row.after}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          )}

          {study.quote && (
            <Reveal delay={0.1} className="mt-12 block">
              <blockquote className="mx-auto max-w-[760px] rounded-none border border-border bg-surface p-7 sm:p-9">
                <p className="font-extrabold uppercase text-pretty text-[22px] italic leading-[1.4] tracking-[-0.01em] text-text-primary sm:text-[26px]">
                  &ldquo;{study.quote.text}&rdquo;
                </p>
                <footer className="mt-5 text-[14px] text-text-muted">
                  — {study.quote.author}, {study.quote.role}
                </footer>
              </blockquote>
            </Reveal>
          )}
        </Container>
      </section>

      {/* Timeline */}
      {study.timeline && study.timeline.length > 0 && (
        <section className="border-b border-border py-14 sm:py-20 md:py-24">
          <Container width="text">
            <Reveal>
              <Eyebrow>How it rolls out</Eyebrow>
            </Reveal>
            <ol className="mt-8 border-l-2 border-ink">
              {study.timeline.map((step, i) => (
                <Reveal key={step.when} delay={Math.min(i * 0.05, 0.25)}>
                  <li className="relative pb-8 pl-7 last:pb-0">
                    <span aria-hidden className="absolute -left-[7px] top-1.5 h-3 w-3 border-2 border-ink bg-accent" />
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-signal">{step.when}</p>
                    <p className="mt-2 text-pretty text-[16px] leading-relaxed text-text-secondary sm:text-[17px]">{step.what}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </Container>
        </section>
      )}

      {/* Cost + the model's working */}
      {(study.investment || study.modeled) && (
        <section className="border-b border-border bg-bg-alt py-14 sm:py-20 md:py-24">
          <Container width="text">
            {study.investment && (
              <Reveal>
                <Eyebrow>What it costs</Eyebrow>
                <p className="mt-4 text-pretty text-[17px] leading-relaxed text-text-secondary sm:text-[18px]">
                  {study.investment}
                </p>
              </Reveal>
            )}
            {study.modeled && (
              <Reveal delay={0.05} className={study.investment ? 'mt-12 block' : 'block'}>
                <Eyebrow>How this was modeled</Eyebrow>
                <p className="mt-4 text-pretty text-[16px] leading-relaxed text-text-secondary">
                  {study.modeled.basis} Change any line below to your own number and the result moves with it — that is what the free audit does.
                </p>
                <dl className="mt-6 border-2 border-ink bg-surface">
                  {study.modeled.assumptions.map((a) => (
                    <div
                      key={a.label}
                      className="flex flex-col gap-1 border-b border-border px-5 py-3.5 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                    >
                      <dt className="text-[14px] text-text-secondary">{a.label}</dt>
                      <dd className="text-[14px] font-extrabold tabular-nums text-text-primary sm:text-right">{a.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            )}
          </Container>
        </section>
      )}

      {/* FAQs */}
      {study.faqs && study.faqs.length > 0 && (
        <section className="border-b border-border py-14 sm:py-20 md:py-24">
          <Container width="text">
            <h2 className="font-extrabold uppercase text-[26px] leading-[1.12] tracking-[-0.03em] text-text-primary sm:text-[32px]">
              Frequently asked questions
            </h2>
            <div className="mt-6">
              <Accordion items={study.faqs} defaultOpen={null} />
            </div>
          </Container>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="border-b border-border py-14 sm:py-20 md:py-24">
          <Container>
            <Reveal>
              <Eyebrow>More results</Eyebrow>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              {related.map((r) => (
                <CaseStudyCard key={r.slug} study={r} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <KeepReading
        eyebrow="Keep reading"
        title="How we decide what to automate first."
      />

      <LandingFinalCTA
        title="Want a result like this?"
        sub="Book a free 30-minute Agent Audit. We'll map your workflows and send a written ROI projection within 48 hours."
        utmCampaign={`case-study-${study.slug}`}
      />

      <Footer />
    </main>
  );
}
