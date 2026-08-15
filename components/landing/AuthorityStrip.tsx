'use client';

import { Container, Section } from '@/components/ui/Container';
import { CountUp } from '@/components/ui/CountUp';
import { Reveal, RevealStagger, staggerItem } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const formatMillions = (n: number) => `$${(n / 1_000_000).toFixed(1)}M+`;

const STATS = [
  { to: 47000, suffix: '+', label: 'Operational hours reclaimed', sub: 'Across UK, US & EU deployments' },
  { to: 2_400_000, format: formatMillions, label: 'In operational cost cut', sub: 'Across Raynaters deployments to date' },
  { to: 23, label: 'Active deployments', sub: 'v3 framework · 14 months of refinement' },
] as const;

/**
 * Reusable proof band — reuses only the approved authority numbers.
 * Dropped into vertical, case-study and resource pages.
 */
export function AuthorityStrip() {
  return (
    <Section className="border-y border-border bg-bg">
      <Container>
        <Reveal>
          <Eyebrow className="justify-center text-center">The proof, not the pitch</Eyebrow>
        </Reveal>

        <RevealStagger className="mt-10 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={staggerItem}
              className="rounded-none border border-border bg-surface p-6 text-center sm:p-8"
            >
              <p className="font-extrabold uppercase text-[44px] leading-none tracking-[-0.04em] text-signal sm:text-[56px]">
                <CountUp
                  to={s.to}
                  suffix={'suffix' in s ? s.suffix : ''}
                  format={'format' in s ? s.format : undefined}
                  className="tabular-nums"
                />
              </p>
              <p className="mt-4 text-[15px] font-medium tracking-[-0.01em] text-text-primary sm:text-[16px]">
                {s.label}
              </p>
              <p className="mt-1 text-[13px] text-text-muted">{s.sub}</p>
            </motion.div>
          ))}
        </RevealStagger>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-8 flex max-w-[640px] items-center justify-center gap-3 rounded-full border border-ink bg-accent/30 px-5 py-3 text-center">
            <ShieldCheck className="h-4 w-4 shrink-0 text-signal" strokeWidth={1.75} />
            <p className="text-[13px] text-text-secondary sm:text-[14px]">
              Pay-Back-Or-We-Keep-Building guarantee — agents pay for themselves within 90 days, or we keep building until they do.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
