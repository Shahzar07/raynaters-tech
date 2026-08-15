import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Check, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ComparisonTable as ComparisonTableData } from '@/lib/landing-pages/types';

function Cell({ value }: { value: string | boolean }) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="mx-auto h-4 w-4 text-signal" strokeWidth={2.5} aria-label="Yes" />
    ) : (
      <Minus className="mx-auto h-4 w-4 text-text-muted/60" strokeWidth={2} aria-label="No" />
    );
  }
  return <span className="text-text-secondary">{value}</span>;
}

export function ComparisonTable({
  heading,
  data,
}: {
  heading: string;
  data: ComparisonTableData;
}) {
  const { columns, rows, highlightColumn } = data;
  return (
    <section className="border-b border-border py-14 sm:py-20 md:py-24">
      <Container>
        <div className="max-w-[680px]">
          <Reveal>
            <Eyebrow>The honest comparison</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-extrabold uppercase text-balance text-[28px] leading-[1.1] tracking-[-0.03em] text-text-primary sm:text-[38px] md:text-[46px]">
              {heading}
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border">
                  {columns.map((col, i) => (
                    <th
                      key={col}
                      className={cn(
                        'p-4 text-[13px] font-medium sm:text-[14px]',
                        i === 0 ? 'text-text-muted' : 'text-center',
                        i === highlightColumn
                          ? 'rounded-none bg-accent/30 text-signal'
                          : 'text-text-secondary',
                      )}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, ri) => (
                  <tr key={row.label} className="border-b border-border">
                    <td className="p-4 text-[14px] text-text-primary sm:text-[15px]">
                      {row.label}
                    </td>
                    {row.cells.map((cell, ci) => (
                      <td
                        key={ci}
                        className={cn(
                          'p-4 text-center text-[14px] sm:text-[15px]',
                          ci + 1 === highlightColumn && 'bg-accent/30',
                          ci + 1 === highlightColumn &&
                            ri === rows.length - 1 &&
                            'rounded-b-[12px]',
                        )}
                      >
                        <Cell value={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
