import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: 'fast' | 'normal' | 'slow';
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  /** Tailwind gap utility — cards need a tighter rhythm than bare logos. */
  gap?: string;
}

export function Marquee({
  children,
  className,
  speed = 'normal',
  direction = 'left',
  pauseOnHover = false,
  gap = 'gap-12',
}: MarqueeProps) {
  const animationClass = direction === 'left' 
    ? (speed === 'fast' ? 'animate-marquee-fast' : speed === 'slow' ? 'animate-marquee-slow' : 'animate-marquee')
    : (speed === 'fast' ? 'animate-marquee-reverse' : speed === 'slow' ? 'animate-marquee-reverse-slow' : 'animate-marquee-reverse');

  return (
    <div className={cn('marquee-mask overflow-hidden', className)}>
      <div
        className={cn(
          'flex w-max',
          gap,
          animationClass,
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        <div className={cn('flex shrink-0 items-center', gap)}>{children}</div>
        <div className={cn('flex shrink-0 items-center', gap)} aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
