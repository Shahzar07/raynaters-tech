'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface NavDropdownItem {
  label: string;
  href: string;
  blurb?: string;
}

export function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: NavDropdownItem[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onEsc);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-[14px] text-text-secondary transition-colors hover:text-text-primary"
      >
        {label}
        <ChevronDown
          className={cn('h-3.5 w-3.5 transition-transform duration-200', open && 'rotate-180')}
          strokeWidth={2}
        />
      </button>
      {open && (
        <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
          <div className="w-[320px] rounded-none border border-border bg-surface p-2 shadow-2xl shadow-black/50">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-none px-3 py-2.5 transition-colors hover:bg-surface-hover"
              >
                <span className="block text-[14px] font-medium tracking-[-0.01em] text-text-primary">
                  {item.label}
                </span>
                {item.blurb && (
                  <span className="mt-0.5 block text-[12px] leading-snug text-text-muted">
                    {item.blurb}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
