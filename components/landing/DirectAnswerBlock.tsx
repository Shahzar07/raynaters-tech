import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';

/**
 * The AEO/GEO extraction target — a crisp, quotable answer rendered in a
 * visually distinct accent card directly under the hero. This is what
 * Google AI Overviews and answer engines lift.
 */
export function DirectAnswerBlock({
  text,
  link,
}: {
  text: string;
  link?: { label: string; href: string };
}) {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-[860px] rounded-none border border-ink bg-accent/30 p-6 sm:p-8 md:p-10">
            <p className="text-[11px] uppercase tracking-[0.22em] text-signal">
              The short answer
            </p>
            <p className="mt-3 text-pretty text-[19px] leading-[1.5] text-text-primary sm:text-[23px] sm:leading-[1.45]">
              {text}
            </p>
            {link && (
              <Link
                href={link.href}
                className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-medium text-signal transition-colors hover:text-signal"
              >
                {link.label}
                <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
              </Link>
            )}
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
