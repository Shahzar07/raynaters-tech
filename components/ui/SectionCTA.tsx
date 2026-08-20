import { CONTENT } from '@/lib/content';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';

/**
 * Mobile-only conversion CTA that closes out a section.
 *
 * On desktop the ask is never far away — the hero, the offer, the founder
 * note and the final CTA all carry one, and the eye can reach them. On a
 * phone those are thousands of pixels apart, so every section gets its own
 * exit to the booking page.
 *
 * The label is written for the section it follows. A column of identical
 * buttons reads as page chrome and stops being seen, so each one picks up
 * the argument its section just finished making. They all land on the same
 * booking page.
 *
 * Hidden from `sm:` up so the desktop layout is untouched.
 */
export function SectionCTA({
  label,
  tone = 'light',
}: {
  /** The ask, phrased for the section above it. Never reuse one. */
  label: string;
  /** `ink` for sections on a dark ground, so the button stays legible. */
  tone?: 'light' | 'ink';
}) {
  return (
    <Reveal delay={0.05} className="mt-10 sm:hidden">
      <Button
        href={CONTENT.brand.bookHref}
        size="lg"
        variant={tone === 'ink' ? 'on-ink' : 'primary'}
        withArrow
        pulse
        depth
        className="w-full"
      >
        {label}
      </Button>
    </Reveal>
  );
}
