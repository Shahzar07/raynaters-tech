import type { Metadata } from 'next';
import Image from 'next/image';
import Navigation from '@/components/sections/02-Navigation';
import Footer from '@/components/sections/15-Footer';
import { Container, Section } from '@/components/ui/Container';
import { Eyebrow, SectionTitle, SectionSub } from '@/components/ui/Eyebrow';
import { Reveal, RevealStagger } from '@/components/ui/Reveal';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { AuthorityStrip } from '@/components/landing/AuthorityStrip';
import { LandingFinalCTA } from '@/components/landing/LandingFinalCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { pageMetadata } from '@/lib/seo/meta';
import { breadcrumbSchema } from '@/lib/seo/schema';
import { CONTENT } from '@/lib/content';

export const metadata: Metadata = pageMetadata({
  title: 'About Raynaters Tech | The team behind the systems',
  description:
    'Why Raynaters Tech exists, how we work, and the standard every build is held to — a system that pays for itself in 90 days or we keep building free.',
  path: '/about',
});

const PRINCIPLES = [
  {
    n: '01',
    label: 'Money first, technology second',
    body: 'Nobody wants an AI agent. They want the hours back and the enquiries answered. We pick what to build by what it returns, and if the honest answer is that nothing is worth automating yet, we say so and leave.',
  },
  {
    n: '02',
    label: 'If we can’t measure it, we didn’t do it',
    body: 'Every system is instrumented from day one — hours saved, response times, enquiries recovered. A dashboard screenshot is not proof. A number you can check against your own books is.',
  },
  {
    n: '03',
    label: 'You own everything we build',
    body: 'Deployments run on infrastructure in your name, on accounts you control. We never hold your data hostage, and there is no version of leaving us that costs you the system.',
  },
  {
    n: '04',
    label: 'The risk sits with us',
    body: 'Fourteen days to change your mind, refunded same-day. Ninety days to pay for itself or we keep building at no management fee until it does. If the number doesn’t land, that is our problem to solve.',
  },
];

const STORY = [
  'Raynaters started with a spreadsheet, not a product. A business owner asked me to work out where his week was actually going. Six hours of it were being spent copying details between an inbox, a CRM and an invoicing tool — by someone on a full salary, every single week.',
  'Nothing about that problem needed AI. It needed someone to look at the work honestly and build the thing that removed it. That is still the whole business.',
  'What changed since is the range. Front desk agents that answer every call and enquiry within seconds. Back office agents that move data, chase what is outstanding and rebuild the report nobody wants to rebuild. Same method every time: find the work, automate the work, prove the money.',
  'We turn down more builds than we take. Six a month is the honest limit for work we are willing to put a payback promise against — and a promise you can’t keep isn’t a promise, it’s marketing.',
];

const HOW = [
  { n: '01', label: 'The audit', body: 'Thirty minutes with the founder. We map where the hours go and rank the workflows by money at stake.' },
  { n: '02', label: 'The projection', body: 'A written ROI projection in your inbox within 48 hours. Real numbers on your real workflows.' },
  { n: '03', label: 'The build', body: 'Fixed scope, fixed timeline. First agent live in 7 days, on infrastructure you own.' },
  { n: '04', label: 'The proof', body: 'We measure what actually happened and keep optimising until the system has paid for itself.' },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden border-b-2 border-border pb-14 pt-10 sm:pb-20 sm:pt-12">
        <Container>
          <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]} />
          <div className="mt-8 max-w-[860px]">
            <Reveal>
              <Eyebrow>About Raynaters</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 text-balance text-[37px] font-extrabold uppercase leading-[1.06] tracking-tightest text-text-primary min-[400px]:text-[44px] sm:text-[50px] md:text-[62px] md:leading-[1.02]">
                We don’t sell AI. We sell the hours it gives back.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[58ch] text-pretty text-[17px] font-medium leading-relaxed text-text-secondary sm:text-[19px]">
                Raynaters Tech builds AI systems for established businesses that are losing
                money to repetitive work — and then proves, in numbers, that the system paid
                for itself.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Founder story */}
      <Section className="border-b-2 border-border bg-bg-alt py-16 sm:py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
            <Reveal>
              <div className="border-2 border-ink bg-bg p-6">
                <div className="relative h-16 w-16 overflow-hidden border-2 border-ink">
                  <Image
                    src="/raynaters-mark.png"
                    alt="Raynaters Tech"
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <p className="mt-5 text-[20px] font-extrabold uppercase tracking-[-0.03em] text-text-primary">
                  {CONTENT.personalNote.name}
                </p>
                <p className="mt-1 text-[12px] font-extrabold uppercase tracking-[0.12em] text-text-muted">
                  {CONTENT.personalNote.role}
                </p>
                <span aria-hidden className="mt-5 block h-[3px] w-14 bg-accent" />
                <p className="mt-5 text-[14px] font-medium leading-[1.6] text-text-secondary">
                  Runs every audit call personally. There is no sales team to get past.
                </p>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <Eyebrow>Why this exists</Eyebrow>
                <SectionTitle className="mt-5">It started with six hours a week.</SectionTitle>
              </Reveal>
              <div className="mt-7 max-w-[62ch] space-y-5">
                {STORY.map((p, i) => (
                  <Reveal key={p} delay={0.05 + i * 0.05}>
                    <p className="text-[16px] font-medium leading-[1.7] text-text-secondary sm:text-[17px]">
                      {p}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Principles */}
      <Section className="border-b-2 border-border bg-bg py-16 sm:py-20 md:py-24">
        <Container>
          <Reveal className="max-w-[760px]">
            <Eyebrow>What we hold to</Eyebrow>
            <SectionTitle className="mt-5">Four rules we don’t break.</SectionTitle>
            <SectionSub className="mt-5">
              Every one of these has cost us a deal at some point. They are still the rules.
            </SectionSub>
          </Reveal>

          <RevealStagger className="mt-12 grid grid-cols-1 border-l-2 border-t-2 border-ink md:grid-cols-2">
            {PRINCIPLES.map((p) => (
              <div key={p.n} className="border-b-2 border-r-2 border-ink bg-bg-alt px-6 py-8 sm:px-8">
                <div className="flex items-baseline gap-3">
                  <span className="text-[13px] font-extrabold tracking-[0.08em] text-text-muted">
                    {p.n}
                  </span>
                  <span aria-hidden className="h-[2px] w-6 shrink-0 bg-accent" />
                </div>
                <p className="mt-4 text-[19px] font-extrabold uppercase leading-[1.15] tracking-[-0.03em] text-text-primary sm:text-[21px]">
                  {p.label}
                </p>
                <p className="mt-3 max-w-[46ch] text-[14px] font-medium leading-[1.65] text-text-secondary sm:text-[15px]">
                  {p.body}
                </p>
              </div>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* How we work */}
      <Section className="border-b-2 border-border bg-bg-alt py-16 sm:py-20 md:py-24">
        <Container>
          <Reveal className="max-w-[760px]">
            <Eyebrow>How we work</Eyebrow>
            <SectionTitle className="mt-5">Four steps, and you can leave at any of them.</SectionTitle>
          </Reveal>

          <RevealStagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {HOW.map((s) => (
              <div key={s.n} className="border-2 border-ink bg-bg p-6">
                <span className="inline-block bg-ink px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.12em] text-text-on-ink">
                  {s.n}
                </span>
                <p className="mt-5 text-[17px] font-extrabold uppercase tracking-[-0.03em] text-text-primary">
                  {s.label}
                </p>
                <p className="mt-2.5 text-[14px] font-medium leading-[1.6] text-text-secondary">
                  {s.body}
                </p>
              </div>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      <AuthorityStrip />

      <LandingFinalCTA
        title="Thirty minutes is all it takes to find out."
        sub="Book a free Agent Audit. We'll map your workflows and send a written ROI projection within 48 hours — and three fixes you can action yourself even if we never work together."
        utmCampaign="about"
      />

      <Footer />
    </main>
  );
}
