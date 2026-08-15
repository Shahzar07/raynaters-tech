import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CONTENT } from '@/lib/content';

export default function AnnouncementBar() {
  return (
    <div className="relative z-[100] bg-ink text-text-on-ink">
      <Link
        href={CONTENT.brand.bookHref}
        className="group mx-auto flex max-w-content items-center justify-center gap-2.5 px-5 py-2.5 text-center sm:px-8"
      >
        <span aria-hidden className="hidden h-2 w-2 shrink-0 bg-accent sm:block" />
        <span className="text-[11px] font-extrabold uppercase leading-tight tracking-[0.08em] sm:text-[12px]">
          {CONTENT.announcement.text}
        </span>
        <ArrowRight
          className="hidden h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-1 sm:block"
          strokeWidth={3}
        />
      </Link>
    </div>
  );
}
