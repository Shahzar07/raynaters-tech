import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Resource } from '@/lib/resources/types';
import { cn } from '@/lib/utils';

/**
 * Square corners, 2px ink borders, uppercase 800 headings — the same
 * system the homepage sections use, so the index doesn't read as a
 * different site once you leave the funnel.
 */
export function ResourceCard({
  resource,
  featured = false,
}: {
  resource: Resource;
  featured?: boolean;
}) {
  return (
    <Link href={`/resources/${resource.slug}`} className="group block h-full">
      <article
        className={cn(
          'h-full overflow-hidden border-2 border-ink bg-bg-alt transition-transform duration-300 hover:-translate-y-1',
          featured ? 'grid grid-cols-1 md:grid-cols-2' : 'flex flex-col',
        )}
      >
        {resource.coverImage && (
          <div
            className={cn(
              'relative overflow-hidden bg-bg-sunken',
              featured
                ? 'aspect-[16/10] border-b-2 border-ink md:aspect-auto md:min-h-[340px] md:border-b-0 md:border-r-2'
                : 'aspect-[16/9] border-b-2 border-ink',
            )}
          >
            <Image
              src={resource.coverImage.src}
              alt={resource.coverImage.alt}
              fill
              sizes={featured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <span className="absolute left-4 top-4 inline-flex items-center gap-2 bg-ink px-2.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-text-on-ink">
              <span aria-hidden className="h-1.5 w-1.5 bg-accent" />
              {featured ? 'Featured guide' : resource.category}
            </span>
          </div>
        )}

        <div className={cn('flex flex-1 flex-col p-6 sm:p-7', featured && 'md:p-9')}>
          <span aria-hidden className="block h-[3px] w-12 bg-accent" />

          <h3
            className={cn(
              'mt-5 text-balance font-extrabold uppercase tracking-[-0.035em] text-text-primary',
              featured
                ? 'text-[26px] leading-[1.1] sm:text-[34px]'
                : 'text-[20px] leading-[1.14] sm:text-[23px]',
            )}
          >
            {resource.title}
          </h3>

          <p
            className={cn(
              'mt-4 flex-1 text-pretty font-medium leading-[1.65] text-text-secondary',
              featured ? 'text-[15px] sm:text-[17px]' : 'text-[14px] sm:text-[15px]',
            )}
          >
            {resource.excerpt}
          </p>

          <div className="mt-7 flex items-center justify-between gap-3 border-t-2 border-border pt-5">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-text-muted">
              {featured ? `${resource.category} · ` : ''}
              {resource.readingTime} read
            </span>
            <span className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-text-primary">
              Read
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={3}
              />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
