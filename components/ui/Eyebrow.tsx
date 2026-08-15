import { cn } from '@/lib/utils';

/**
 * Small uppercase label that sits above a section heading.
 * `tone="ink"` inverts it for use on dark sections.
 */
export function Eyebrow({
  children,
  className,
  withDot = true,
  tone = 'light',
}: {
  children: React.ReactNode;
  className?: string;
  withDot?: boolean;
  tone?: 'light' | 'ink';
}) {
  return (
    <p
      className={cn(
        'inline-flex items-center gap-2.5 text-[11px] sm:text-[12px] uppercase tracking-[0.16em] font-extrabold',
        tone === 'ink' ? 'text-bg/70' : 'text-text-muted',
        className,
      )}
    >
      {withDot && (
        <span
          aria-hidden
          className={cn(
            'h-2 w-2 shrink-0',
            tone === 'ink' ? 'bg-accent' : 'bg-signal',
          )}
        />
      )}
      {children}
    </p>
  );
}

/**
 * The standard section heading: Plus Jakarta Sans 800, uppercase, tight.
 * One shared component so every section on the site sets type the same way.
 */
export function SectionTitle({
  children,
  className,
  tone = 'light',
  as: Tag = 'h2',
}: {
  children: React.ReactNode;
  className?: string;
  tone?: 'light' | 'ink';
  as?: 'h1' | 'h2' | 'h3';
}) {
  return (
    <Tag
      className={cn(
        'font-extrabold uppercase text-balance',
        'text-[28px] leading-[1.12] tracking-[-0.04em]',
        'sm:text-[36px] md:text-[44px] lg:text-[48px] lg:tracking-[-0.05em]',
        tone === 'ink' ? 'text-bg' : 'text-text-primary',
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Supporting paragraph under a section title. */
export function SectionSub({
  children,
  className,
  tone = 'light',
}: {
  children: React.ReactNode;
  className?: string;
  tone?: 'light' | 'ink';
}) {
  return (
    <p
      className={cn(
        'text-[16px] sm:text-[18px] leading-[1.6] font-medium',
        tone === 'ink' ? 'text-bg/70' : 'text-text-secondary',
        className,
      )}
    >
      {children}
    </p>
  );
}
