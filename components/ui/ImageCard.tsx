import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageCardProps {
  href: string;
  image: { src: string; alt: string };
  category?: string;
  title: string;
  body?: string;
  metric?: string;
  metricLabel?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export function ImageCard({
  href,
  image,
  category,
  title,
  body,
  metric,
  metricLabel,
  className,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false,
}: ImageCardProps) {
  return (
    <Link href={href} className={cn('group block h-full', className)}>
      <article className="relative flex h-full flex-col overflow-hidden rounded-none border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-text-muted/40">
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            priority={priority}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(10,10,11,0.2) 0%, rgba(10,10,11,0.05) 60%, transparent 100%)',
            }}
          />
          {category && (
            <span className="absolute left-4 top-4 inline-flex rounded-full border border-white/20 bg-bg/70 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-text-muted backdrop-blur-sm">
              {category}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6 sm:p-7">
          {metric && (
            <div className="mb-3">
              <span className="font-extrabold uppercase text-[38px] leading-none tracking-[-0.04em] text-signal sm:text-[44px]">
                {metric}
              </span>
              {metricLabel && (
                <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-text-muted">
                  {metricLabel}
                </p>
              )}
            </div>
          )}
          <div className="flex items-start justify-between gap-3">
            <h3 className="flex-1 font-extrabold uppercase text-balance text-[19px] leading-[1.2] tracking-[-0.02em] text-text-primary sm:text-[20px]">
              {title}
            </h3>
            <ArrowUpRight
              className="mt-0.5 h-5 w-5 shrink-0 text-text-muted transition-colors group-hover:text-signal"
              strokeWidth={2}
            />
          </div>
          {body && (
            <p className="mt-3 flex-1 text-pretty text-[14px] leading-relaxed text-text-secondary sm:text-[15px]">
              {body}
            </p>
          )}
        </div>
      </article>
    </Link>
  );
}
