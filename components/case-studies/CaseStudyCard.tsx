import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { CaseStudy } from '@/lib/case-studies/types';

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link href={`/case-studies/${study.slug}`} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden border-2 border-ink bg-bg-alt transition-transform duration-300 hover:-translate-y-1">
        <div className="relative aspect-[16/9] overflow-hidden border-b-2 border-ink bg-bg-sunken">
          <Image
            src={study.image.src}
            alt={study.image.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <span className="absolute left-4 top-4 inline-flex items-center gap-2 bg-ink px-2.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-text-on-ink">
            <span aria-hidden className="h-1.5 w-1.5 bg-accent" />
            {study.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="grid h-9 w-9 shrink-0 place-items-center border-2 border-ink bg-bg text-[12px] font-extrabold tracking-[-0.01em] text-text-primary">
                {study.monogram}
              </span>
              <span className="truncate text-[13px] font-bold tracking-[-0.01em] text-text-secondary">
                {study.client}
              </span>
            </div>
            <ArrowUpRight
              className="h-4 w-4 shrink-0 text-text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-text-primary"
              strokeWidth={3}
            />
          </div>

          <p className="mt-6 text-[38px] font-extrabold uppercase leading-none tracking-[-0.05em] text-text-primary sm:text-[44px]">
            {study.metric}
          </p>
          <p className="mt-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-text-muted">
            {study.metricLabel}
          </p>

          <span aria-hidden className="mt-5 block h-[3px] w-12 bg-accent" />

          <p className="mt-5 flex-1 text-pretty text-[14px] font-medium leading-[1.65] text-text-secondary sm:text-[15px]">
            {study.summary}
          </p>
        </div>
      </article>
    </Link>
  );
}
