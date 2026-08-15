'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { TOKENS } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

export interface AccordionItem {
  q: string;
  a: string;
}

function Item({
  q,
  a,
  open,
  onToggle,
  index,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div className={cn('border-b-2 border-ink', open && 'bg-bg')}>
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="group flex min-h-[64px] w-full items-start justify-between gap-4 px-4 py-5 text-left sm:gap-6 sm:px-5 sm:py-6"
      >
        <div className="flex items-start gap-4 sm:gap-5">
          <span className="mt-1 w-6 shrink-0 text-[11px] font-extrabold uppercase tabular-nums tracking-[0.1em] text-signal">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-[15px] font-extrabold uppercase leading-[1.25] tracking-[-0.025em] text-text-primary sm:text-[17px]">
            {q}
          </span>
        </div>
        <span
          className={cn(
            'mt-0.5 grid h-8 w-8 shrink-0 place-items-center border-2 transition-all duration-300',
            open
              ? 'rotate-45 border-ink bg-ink'
              : 'border-border group-hover:border-ink',
          )}
          aria-hidden
        >
          <Plus
            className={cn('h-4 w-4', open ? 'text-accent' : 'text-text-primary')}
            strokeWidth={3}
          />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: TOKENS.motion.ease }}
            className="overflow-hidden"
          >
            <div className="ml-[56px] max-w-[62ch] pb-6 pr-5 text-[15px] font-medium leading-[1.62] text-text-secondary sm:ml-[60px] sm:text-[16px]">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * Reusable FAQ-style accordion. Used by the homepage FAQ, vertical
 * landing pages and resource articles so the markup (and FAQPage schema
 * mirroring it) stays in one place.
 */
export function Accordion({
  items,
  defaultOpen = 0,
  className,
}: {
  items: readonly AccordionItem[];
  defaultOpen?: number | null;
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  return (
    <div className={cn('border-t-2 border-ink bg-bg-alt', className)}>
      {items.map((item, i) => (
        <Item
          key={i}
          index={i}
          q={item.q}
          a={item.a}
          open={open === i}
          onToggle={() => setOpen(open === i ? null : i)}
        />
      ))}
    </div>
  );
}
