import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { bookHref } from '@/lib/seo/utm';

export function LandingFinalCTA({
  title,
  sub,
  utmCampaign,
}: {
  title: string;
  sub: string;
  utmCampaign: string;
}) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-28">
      <Container width="text">
        <div className="text-center">
          <Reveal>
            <Eyebrow className="justify-center">Your next step</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-extrabold uppercase text-balance text-[32px] leading-[1.05] tracking-[-0.04em] text-text-primary sm:text-[48px] md:text-[64px] md:leading-[1.02]">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-[52ch] text-pretty text-[16px] leading-relaxed text-text-secondary sm:text-[18px]">
              {sub}
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-9 flex justify-center px-4 sm:px-0">
              <Button
                href={bookHref({ campaign: utmCampaign, content: 'final_cta' })}
                size="lg"
                withArrow
                pulse
                depth
                className="w-full sm:w-auto"
              >
                Book your free Agent Audit
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-7 text-[12px] sm:text-[13px] text-text-muted">
              Free 30-minute Agent Audit · Written ROI projection within 48 hours · No pitch deck
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
