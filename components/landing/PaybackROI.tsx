import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { Check } from 'lucide-react';
import { bookHref } from '@/lib/seo/utm';
import type { PaybackROI as PaybackROIData } from '@/lib/landing-pages/types';

export function PaybackROI({
  data,
  utmCampaign,
}: {
  data: PaybackROIData;
  utmCampaign: string;
}) {
  return (
    <section className="border-b border-border py-14 sm:py-20 md:py-24">
      <Container width="text">
        <Reveal>
          <div className="relative overflow-hidden rounded-none border border-border bg-surface p-6 sm:p-9 md:p-11">
            <Eyebrow>The payback</Eyebrow>
            <h2 className="mt-5 font-extrabold uppercase text-balance text-[26px] leading-[1.12] tracking-[-0.03em] text-text-primary sm:text-[34px] md:text-[40px]">
              {data.headline}
            </h2>
            <p className="mt-5 max-w-[58ch] text-pretty text-[16px] leading-relaxed text-text-secondary sm:text-[17px]">
              {data.body}
            </p>

            <ul className="mt-7 space-y-3">
              {data.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-ink bg-accent/30"
                  >
                    <Check className="h-3 w-3 text-signal" strokeWidth={2.5} />
                  </span>
                  <span className="text-[15px] leading-relaxed text-text-secondary sm:text-[16px]">
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button
                href={bookHref({ campaign: utmCampaign, content: 'payback_cta' })}
                size="lg"
                withArrow
                depth
              >
                Get your written ROI projection
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
