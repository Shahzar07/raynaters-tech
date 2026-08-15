import { ArrowDown, Check, Phone, TrendingUp } from 'lucide-react';
import type { ShowcaseVisual as VisualData } from '@/lib/landing-pages/types';
import { cn } from '@/lib/utils';

/**
 * Replaces the old stock "AI dashboard" mockups. Everything here is
 * rendered from the page's own numbers — a real chart beats a picture
 * of someone else's screen, and it stays legible at any size.
 */

function Chrome({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-2 border-ink bg-bg-alt">
      <div className="flex items-center gap-2.5 border-b-2 border-ink bg-ink px-4 py-3">
        <span aria-hidden className="rec-dot h-2 w-2 rounded-full bg-accent" />
        <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-bg/80">
          {label}
        </p>
        <span className="ml-auto text-[10px] font-extrabold uppercase tracking-[0.12em] text-bg/40">
          Live
        </span>
      </div>
      {children}
    </div>
  );
}

/** Funnel: each stage as a proportional bar, with drop-off made visible. */
function Pipeline({ data }: { data: Extract<VisualData, { kind: 'pipeline' }> }) {
  const top = data.stages[0]?.value || 1;

  return (
    <Chrome label={data.label}>
      <div className="space-y-5 px-5 py-6 sm:px-6">
        {data.stages.map((s, i) => {
          const pct = Math.round((s.value / top) * 100);
          const last = i === data.stages.length - 1;
          return (
            <div key={s.label}>
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-[12px] font-extrabold uppercase tracking-[0.08em] text-text-secondary">
                  {s.label}
                </p>
                <p className="text-[18px] font-extrabold leading-none tracking-[-0.04em] tabular-nums text-text-primary sm:text-[20px]">
                  {s.value.toLocaleString('en-GB')}
                  {s.unit ?? ''}
                </p>
              </div>
              <div className="mt-2 h-3 w-full border-2 border-ink bg-bg">
                <div
                  className={cn('h-full', last ? 'bg-accent' : 'bg-ink')}
                  style={{ width: `${pct}%` }}
                />
              </div>
              {!last && (
                <ArrowDown
                  aria-hidden
                  className="mt-3 h-3.5 w-3.5 text-text-muted"
                  strokeWidth={3}
                />
              )}
            </div>
          );
        })}

        <p className="flex items-start gap-2.5 border-t-2 border-border pt-4 text-[12px] font-bold leading-[1.5] text-text-secondary">
          <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" strokeWidth={3} />
          {data.footnote}
        </p>
      </div>
    </Chrome>
  );
}

/** Metrics panel: headline figures plus a monthly bar series. */
function Roi({ data }: { data: Extract<VisualData, { kind: 'roi' }> }) {
  const max = Math.max(...data.series.map((s) => s.value)) || 1;

  return (
    <Chrome label={data.label}>
      <div className="grid grid-cols-2 border-b-2 border-ink">
        {data.metrics.map((m, i) => (
          <div key={m.label} className={cn('px-5 py-5', i === 0 && 'border-r-2 border-ink')}>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-text-muted">
              {m.label}
            </p>
            <p className="mt-2 text-[26px] font-extrabold leading-none tracking-[-0.05em] tabular-nums text-text-primary sm:text-[30px]">
              {m.value}
            </p>
          </div>
        ))}
      </div>

      <div className="px-5 py-6 sm:px-6">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-text-muted">
            {data.seriesLabel}
          </p>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.1em] text-success">
            <TrendingUp className="h-3.5 w-3.5" strokeWidth={3} />
            {data.trend}
          </span>
        </div>

        <div className="mt-5 flex h-32 items-end gap-2">
          {data.series.map((s, i) => {
            const h = Math.max(Math.round((s.value / max) * 100), 6);
            const last = i === data.series.length - 1;
            return (
              <div key={s.label} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className={cn('w-full border-2 border-ink', last ? 'bg-accent' : 'bg-bg-sunken')}
                  style={{ height: `${h}%` }}
                />
                <span className="text-[9px] font-extrabold uppercase tracking-[0.06em] text-text-muted">
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>

        <p className="mt-5 flex items-start gap-2.5 border-t-2 border-border pt-4 text-[12px] font-bold leading-[1.5] text-text-secondary">
          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" strokeWidth={3.5} />
          {data.footnote}
        </p>
      </div>
    </Chrome>
  );
}

export function ShowcaseVisual({ data }: { data: VisualData }) {
  return data.kind === 'pipeline' ? <Pipeline data={data} /> : <Roi data={data} />;
}
