import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Breadcrumbs, type Crumb } from '@/components/ui/Breadcrumbs';
import { MediaFrame } from '@/components/ui/MediaFrame';
import { bookHref } from '@/lib/seo/utm';

export function LandingHero({
  eyebrow,
  h1,
  hook,
  crumbs,
  utmCampaign,
  image,
}: {
  eyebrow: string;
  h1: string;
  hook: string;
  crumbs: Crumb[];
  utmCampaign: string;
  image?: { src: string; alt: string };
}) {
  return (
    <section className="relative overflow-hidden border-b border-border pt-10 pb-16 sm:pt-12 sm:pb-20 md:pb-24">
      <Container>
        <Breadcrumbs items={crumbs} />
        <div className={`mt-8 ${image ? 'grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16' : ''}`}>
          {/* Copy */}
          <div className={image ? 'max-w-none' : 'max-w-[820px]'}>
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 font-extrabold uppercase text-balance text-[37px] leading-[1.06] tracking-tightest text-text-primary min-[400px]:text-[44px] sm:text-[50px] md:text-[56px] md:leading-[1.02]">
                {h1}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[60ch] text-pretty text-[17px] leading-relaxed text-text-secondary sm:text-[19px]">
                {hook}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <Button
                  href={bookHref({ campaign: utmCampaign, content: 'hero_cta' })}
                  size="lg"
                  withArrow
                  pulse
                  depth
                  className="w-full sm:w-auto"
                >
                  Book your free Agent Audit
                </Button>
                <Button href="/case-studies" size="lg" variant="ghost" className="w-full sm:w-auto">
                  See case studies
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Hero image — shown on lg+ */}
          {image && (
            <Reveal delay={0.2} className="block">
              <MediaFrame
                src={image.src}
                alt={image.alt}
                aspectClass="aspect-[4/3]"
                priority
                glow
                overlay
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
