import type { Metadata } from 'next';
import Navigation from '@/components/sections/02-Navigation';
import Footer from '@/components/sections/15-Footer';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { LandingFinalCTA } from '@/components/landing/LandingFinalCTA';
import { ResourceCard } from '@/components/resources/ResourceCard';
import { JsonLd } from '@/components/seo/JsonLd';
import { pageMetadata } from '@/lib/seo/meta';
import { breadcrumbSchema } from '@/lib/seo/schema';
import { RESOURCES } from '@/lib/resources';

export const metadata: Metadata = pageMetadata({
  title: 'Resources | Raynaters Tech',
  description:
    'Honest, practical guides on AI automation and AI receptionists for UK businesses — what to automate first, what actually works, and how to get a return.',
  path: '/resources',
});

export default function ResourcesPage() {
  const featured = RESOURCES.find((r) => r.featured);
  const rest = RESOURCES.filter((r) => !r.featured);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Resources', path: '/resources' },
        ])}
      />
      <Navigation />

      <section className="relative overflow-hidden border-b-2 border-border pb-14 pt-10 sm:pb-20 sm:pt-12">
        <Container>
          <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Resources', path: '/resources' }]} />
          <div className="mt-8 max-w-[860px]">
            <Reveal>
              <Eyebrow>Resources</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 text-balance font-extrabold uppercase text-[37px] leading-[1.06] tracking-tightest text-text-primary min-[400px]:text-[44px] sm:text-[50px] md:text-[62px] md:leading-[1.02]">
                Plain-English guides to automating your business.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[58ch] text-pretty text-[17px] font-medium leading-relaxed text-text-secondary sm:text-[19px]">
                No hype, no jargon — just practical answers on what to automate first, what
                actually works, and how to make sure it pays for itself.
              </p>
            </Reveal>
          </div>

          {/* Index strip — tells you the shape of the library at a glance. */}
          <Reveal delay={0.15}>
            <dl className="mt-12 grid max-w-[620px] grid-cols-2 border-2 border-ink sm:grid-cols-3">
              <div className="px-5 py-4">
                <dt className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-text-muted">
                  Guides
                </dt>
                <dd className="mt-1.5 text-[24px] font-extrabold leading-none tracking-[-0.04em] text-text-primary">
                  {RESOURCES.length}
                </dd>
              </div>
              <div className="border-l-2 border-ink px-5 py-4">
                <dt className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-text-muted">
                  Cost to read
                </dt>
                <dd className="mt-1.5 text-[24px] font-extrabold leading-none tracking-[-0.04em] text-text-primary">
                  Free
                </dd>
              </div>
              <div className="col-span-2 border-t-2 border-ink px-5 py-4 sm:col-span-1 sm:border-l-2 sm:border-t-0">
                <dt className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-text-muted">
                  Sign-up wall
                </dt>
                <dd className="mt-1.5 text-[24px] font-extrabold leading-none tracking-[-0.04em] text-text-primary">
                  None
                </dd>
              </div>
            </dl>
          </Reveal>
        </Container>
      </section>

      <section className="border-b-2 border-border bg-bg-alt py-14 sm:py-20 md:py-24">
        <Container>
          {featured && (
            <Reveal className="block">
              <ResourceCard resource={featured} featured />
            </Reveal>
          )}

          {rest.length > 0 && (
            <>
              <Reveal delay={0.06}>
                <div className="mt-14 flex items-center gap-4">
                  <h2 className="shrink-0 text-[13px] font-extrabold uppercase tracking-[0.16em] text-text-muted">
                    More guides
                  </h2>
                  <span aria-hidden className="h-[2px] flex-1 bg-border" />
                </div>
              </Reveal>

              <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {rest.map((r, i) => (
                  <Reveal key={r.slug} delay={Math.min(i * 0.05, 0.3)} className="h-full">
                    <ResourceCard resource={r} />
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </Container>
      </section>

      <LandingFinalCTA
        title="Stop reading about it. Start saving the hours."
        sub="Book a free 30-minute Agent Audit and we'll show you exactly what's worth automating first — with a written ROI projection within 48 hours."
        utmCampaign="resources"
      />

      <Footer />
    </main>
  );
}
