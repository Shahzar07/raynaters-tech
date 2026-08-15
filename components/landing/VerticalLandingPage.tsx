import Navigation from '@/components/sections/02-Navigation';
import Footer from '@/components/sections/15-Footer';
import { LandingHero } from './LandingHero';
import { DirectAnswerBlock } from './DirectAnswerBlock';
import { WhatItDoes } from './WhatItDoes';
import { WhoItsFor } from './WhoItsFor';
import { FeatureShowcase } from './FeatureShowcase';
import { HowItWorks } from './HowItWorks';
import { ComparisonTable } from './ComparisonTable';
import { ExtraSections } from './ExtraSections';
import { PaybackROI } from './PaybackROI';
import { AuthorityStrip } from './AuthorityStrip';
import { MiniCaseStory } from './MiniCaseStory';
import { LandingFAQ } from './LandingFAQ';
import { LandingFinalCTA } from './LandingFinalCTA';
import type { LandingPage } from '@/lib/landing-pages/types';

export function VerticalLandingPage({ data }: { data: LandingPage }) {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      <LandingHero
        eyebrow={data.eyebrow}
        h1={data.h1}
        hook={data.hook}
        utmCampaign={data.utmCampaign}
        image={data.image}
        crumbs={[
          { name: 'Home', path: '/' },
          { name: data.navLabel, path: `/${data.slug}` },
        ]}
      />

      <DirectAnswerBlock text={data.directAnswer} link={data.relatedLink} />

      <WhatItDoes heading={data.headings.whatItDoes} items={data.whatItDoes} />

      {data.showcase && (
        <FeatureShowcase eyebrow={data.showcase.eyebrow} rows={data.showcase.rows} />
      )}

      <WhoItsFor heading={data.headings.whoItsFor} items={data.whoItsFor} />

      <HowItWorks steps={data.howItWorks} />

      <ComparisonTable heading={data.headings.comparison} data={data.comparison} />

      {data.extraSections && <ExtraSections group={data.extraSections} />}

      <PaybackROI data={data.paybackROI} utmCampaign={data.utmCampaign} />

      <AuthorityStrip />

      <MiniCaseStory data={data.miniCase} />

      <LandingFAQ faqs={data.faqs} />

      <LandingFinalCTA
        title="Let an agent do the work you keep doing yourself."
        sub="Book a free 30-minute Agent Audit. We map your workflows, identify what's worth automating, and send a written ROI projection within 48 hours."
        utmCampaign={data.utmCampaign}
      />

      <Footer />
    </main>
  );
}
