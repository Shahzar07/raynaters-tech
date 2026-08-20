import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, Clock, FileText, ShieldCheck } from 'lucide-react';

import AnnouncementBar from '@/components/sections/01-AnnouncementBar';
import Navigation from '@/components/sections/02-Navigation';
import Footer from '@/components/sections/15-Footer';
import { Container } from '@/components/ui/Container';
import CalEmbed from '@/components/ui/CalEmbed';
import { CONTENT } from '@/lib/content';
import { pageMetadata } from '@/lib/seo/meta';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Book your free Agent Audit | Raynaters Tech',
    description:
      'Book a free 30-minute Agent Audit. We map where your hours go, tell you what is worth automating, and send a written ROI projection within 48 hours.',
    path: '/book',
  }),
  robots: { index: true, follow: true },
};

const WHAT_YOU_GET = [
  'A 30-minute call with Shahzar — not a salesperson.',
  'A map of which of your workflows are actually worth automating.',
  'A written ROI projection within 48 hours, with real numbers.',
  'A fixed-scope quote if we’re a fit — one number, no hourly billing.',
  'Three free recommendations if we’re not, and no follow-up.',
];

const REASSURE = [
  { icon: Clock, label: '30 minutes', body: 'One call. No prep needed from you.' },
  { icon: FileText, label: 'No pitch deck', body: 'We map workflows, not slides.' },
  { icon: ShieldCheck, label: 'No obligation', body: 'You keep the plan either way.' },
];

export default function BookPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AnnouncementBar />
      <Navigation />

      <header className="border-b-2 border-border bg-bg-alt py-12 sm:py-16">
        <Container>
          <Link
            href="/"
            className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-text-muted transition-colors hover:text-text-primary"
          >
            ← Back to home
          </Link>

          <div className="mt-7 max-w-[860px]">
            <span className="inline-flex items-center gap-2 border-2 border-ink bg-bg px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-text-primary sm:text-[11px]">
              <span aria-hidden className="rec-dot h-2 w-2 bg-signal" />
              Six builds a month · Free · No obligation
            </span>

            <h1 className="mt-6 text-balance text-[36px] font-extrabold uppercase leading-[1.06] tracking-[-0.05em] text-text-primary min-[400px]:text-[42px] sm:text-[46px] md:text-[58px]">
              Pick a time. Find out what your business
              <span className="mark-accent"> can run without you.</span>
            </h1>

            <p className="mt-6 max-w-[62ch] text-[16px] font-medium leading-[1.62] text-text-secondary sm:text-[18px]">
              One call, thirty minutes, no preparation. You leave knowing exactly which
              workflows are costing you the most and what it would take to hand them to a
              system — with the numbers in writing 48 hours later.
            </p>
          </div>

          <div className="mt-9 grid max-w-[760px] grid-cols-1 border-2 border-ink sm:grid-cols-3">
            {REASSURE.map((r, i) => (
              <div
                key={r.label}
                className={
                  i > 0
                    ? 'border-t-2 border-ink px-5 py-4 sm:border-l-2 sm:border-t-0'
                    : 'px-5 py-4'
                }
              >
                <p className="flex items-center gap-2 text-[13px] font-extrabold uppercase tracking-[0.06em] text-text-primary">
                  <r.icon className="h-4 w-4 shrink-0 text-success" strokeWidth={3} />
                  {r.label}
                </p>
                <p className="mt-1.5 text-[13px] font-medium leading-[1.5] text-text-muted">
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </header>

      <div className="bg-bg py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_minmax(0,320px)] lg:gap-12">
            {/* The calendar is the only thing to do on this page — Cal.com
                collects the details itself, so there is no form in front of it. */}
            <div>
              <div className="flex items-center gap-2.5">
                <span aria-hidden className="h-2 w-2 shrink-0 bg-signal" />
                <h2 className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-text-muted">
                  Choose your time
                </h2>
              </div>
              <div className="mt-5 min-h-[640px] border-2 border-ink bg-bg-alt p-2 sm:p-3">
                <CalEmbed />
              </div>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="border-2 border-ink bg-ink p-6 text-text-on-ink">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-accent">
                  What you get
                </p>
                <ul className="mt-5 space-y-4">
                  {WHAT_YOU_GET.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={3.5} />
                      <span className="text-[14px] font-medium leading-[1.55] text-bg/85">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 border-t-2 border-bg/20 pt-5 text-[13px] font-medium leading-[1.6] text-bg/60">
                  If we look at your operation and decide there is nothing worth automating
                  yet, we will say so on the call. You genuinely cannot lose here.
                </p>
              </div>

              <div className="mt-5 border-2 border-border bg-bg-alt p-6">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-text-muted">
                  Rather just email?
                </p>
                <p className="mt-3 text-[14px] font-medium leading-[1.6] text-text-secondary">
                  Send Shahzar the short version and he’ll reply directly.
                </p>
                <a
                  href={`mailto:${CONTENT.brand.email}`}
                  className="mt-3 inline-block break-all text-[14px] font-extrabold text-text-primary underline decoration-2 underline-offset-4 hover:decoration-signal"
                >
                  {CONTENT.brand.email}
                </a>
              </div>
            </aside>
          </div>
        </Container>
      </div>

      <Footer />
    </main>
  );
}
