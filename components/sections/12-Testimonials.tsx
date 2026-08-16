import Image from 'next/image';
import { Star, BadgeCheck, Linkedin, Facebook, Instagram, Twitter, Quote } from 'lucide-react';
import { CONTENT } from '@/lib/content';
import { Container, Section } from '@/components/ui/Container';
import { SectionTitle, SectionSub } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { SectionCTA } from '@/components/ui/SectionCTA';
import { cn } from '@/lib/utils';

function Stars({ tone = 'light' }: { tone?: 'light' | 'ink' }) {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={cn('h-3.5 w-3.5', tone === 'ink' ? 'fill-accent text-accent' : 'fill-ink text-ink')}
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

/**
 * Where the review was left. Real reviews come from somewhere —
 * showing the source is most of what makes a wall read as genuine.
 */
function PlatformMark({ platform, tone }: { platform: string; tone: 'light' | 'ink' }) {
  const cls = cn('h-3.5 w-3.5', tone === 'ink' ? 'text-bg/60' : 'text-text-muted');
  const label: Record<string, string> = {
    linkedin: 'LinkedIn',
    google: 'Google',
    facebook: 'Facebook',
    instagram: 'Instagram',
    x: 'X',
  };

  const icon =
    platform === 'linkedin' ? <Linkedin className={cls} strokeWidth={2.5} /> :
    platform === 'facebook' ? <Facebook className={cls} strokeWidth={2.5} /> :
    platform === 'instagram' ? <Instagram className={cls} strokeWidth={2.5} /> :
    platform === 'x' ? <Twitter className={cls} strokeWidth={2.5} /> :
    <span className={cn('grid h-3.5 w-3.5 place-items-center text-[10px] font-extrabold leading-none', tone === 'ink' ? 'text-bg/60' : 'text-text-muted')}>G</span>;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.1em]',
        tone === 'ink' ? 'text-bg/60' : 'text-text-muted',
      )}
    >
      {icon}
      {label[platform] ?? platform}
    </span>
  );
}

export default function Testimonials() {
  const { testimonials } = CONTENT;

  // Breaking the rhythm is what stops a review wall looking like a spec grid.
  const inkCards = new Set([1, 6]);

  return (
    <Section id="testimonials" className="border-b-2 border-border bg-bg-sunken py-16 sm:py-20 md:py-24">
      <Container>
        <Reveal className="max-w-[760px]">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Stars />
            <p className="text-[12px] font-extrabold uppercase tracking-[0.1em] text-text-muted">
              {testimonials.rating} average · {testimonials.reviewCount}
            </p>
          </div>
          <SectionTitle className="mt-5">{testimonials.title}</SectionTitle>
          <SectionSub className="mt-5">{testimonials.sub}</SectionSub>
        </Reveal>

        {/* Masonry columns — uneven card heights read as a real feed. */}
        <Reveal delay={0.08}>
          <div className="mt-12 gap-5 [column-fill:_balance] sm:columns-2 lg:columns-3">
            {testimonials.items.map((t, i) => {
              const ink = inkCards.has(i);
              const tone = ink ? 'ink' : 'light';

              return (
                <figure
                  key={t.name}
                  className={cn(
                    'mb-5 break-inside-avoid border-2 border-ink p-6 transition-transform duration-300 hover:-translate-y-1',
                    ink ? 'bg-ink' : 'bg-bg-alt',
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <Stars tone={tone} />
                    <PlatformMark platform={t.platform} tone={tone} />
                  </div>

                  <Quote
                    aria-hidden
                    className={cn('mt-5 h-5 w-5', ink ? 'text-accent' : 'text-text-muted/50')}
                    strokeWidth={2.5}
                  />

                  <blockquote
                    className={cn(
                      'mt-3 text-[15px] font-medium leading-[1.6] sm:text-[16px]',
                      ink ? 'text-bg/90' : 'text-text-primary',
                    )}
                  >
                    {t.quote}
                  </blockquote>

                  <figcaption
                    className={cn(
                      'mt-6 flex items-center gap-3 border-t-2 pt-5',
                      ink ? 'border-bg/20' : 'border-border',
                    )}
                  >
                    <span className="relative h-11 w-11 shrink-0 overflow-hidden border-2 border-ink">
                      <Image
                        src={t.avatar}
                        alt=""
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-1.5">
                        <span
                          className={cn(
                            'truncate text-[14px] font-extrabold uppercase tracking-[-0.01em]',
                            ink ? 'text-bg' : 'text-text-primary',
                          )}
                        >
                          {t.name}
                        </span>
                        <BadgeCheck
                          className={cn('h-4 w-4 shrink-0', ink ? 'text-accent' : 'text-success')}
                          strokeWidth={2.5}
                        />
                      </span>
                      <span
                        className={cn(
                          'block truncate text-[12px] font-medium',
                          ink ? 'text-bg/55' : 'text-text-muted',
                        )}
                      >
                        {t.role}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </Reveal>

        <SectionCTA label="Get a result like these" />
      </Container>
    </Section>
  );
}
