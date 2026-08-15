import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// 'ghost' is kept as an alias of 'secondary' — inner pages still ask for it.
type Variant = 'primary' | 'secondary' | 'ghost' | 'accent' | 'on-ink';
type Size = 'sm' | 'md' | 'lg';

// Square corners, heavy uppercase — the whole system leans on this shape.
const base =
  'inline-flex items-center justify-center gap-2.5 rounded-none font-extrabold uppercase tracking-[0.05em] transition-colors duration-200 select-none text-center leading-none';

const variantStyles: Record<Variant, string> = {
  primary: 'bg-ink text-text-on-ink border-2 border-ink hover:bg-ink-soft',
  secondary:
    'bg-bg-alt text-ink border-2 border-border hover:border-ink',
  ghost: 'bg-bg-alt text-ink border-2 border-border hover:border-ink',
  accent: 'bg-accent text-ink border-2 border-ink hover:bg-ink hover:text-accent',
  'on-ink': 'bg-accent text-ink border-2 border-accent hover:bg-bg hover:border-bg',
};

const sizeStyles: Record<Size, string> = {
  sm: 'h-10 px-4 text-[12px]',
  md: 'h-12 px-6 text-[13px]',
  lg: 'h-[60px] px-8 text-[15px]',
};

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  external?: boolean;
  /** Attention vibrate — reserve it for the primary conversion CTA on a view. */
  pulse?: boolean;
  /** Raises the button onto a solid signal slab that presses down on click. */
  depth?: boolean;
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  withArrow = false,
  className,
  external = false,
  pulse = false,
  depth = false,
}: ButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      {withArrow && <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2.75} />}
    </>
  );

  // When pulsing, the wrapper carries the layout classes and the button fills it —
  // otherwise a `w-full sm:w-auto` button ends up left-aligned inside a full-width span.
  const classes = cn(
    base,
    variantStyles[variant],
    sizeStyles[size],
    // The slab supplies its own press feedback, so plain buttons get a nudge instead.
    depth
      ? cn('cta-depth', (variant === 'on-ink' || variant === 'accent') && 'cta-depth-olive')
      : 'active:translate-y-[1px] transition-transform',
    pulse ? 'w-full' : className,
  );

  const isExternal = external || href?.startsWith('http') || href?.startsWith('mailto:');

  const inner = href ? (
    isExternal ? (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer noopener' : undefined}
      >
        {content}
      </a>
    ) : (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  ) : (
    <button type="button" className={classes}>
      {content}
    </button>
  );

  if (!pulse) return inner;

  // Wrapper owns the vibrate so the animation never overwrites the press transform,
  // and inherits the caller's sizing so alignment matches a plain button exactly.
  return <span className={cn('cta-pulse inline-flex', className)}>{inner}</span>;
}
