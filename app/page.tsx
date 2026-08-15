import AnnouncementBar from '@/components/sections/01-AnnouncementBar';
import Navigation from '@/components/sections/02-Navigation';
import Hero from '@/components/sections/03-Hero';
import Problem from '@/components/sections/04-Problem';
import Automate from '@/components/sections/05-Automate';
import Fit from '@/components/sections/06-Fit';
import RoiMethod from '@/components/sections/07-RoiMethod';
import Proof from '@/components/sections/08-Proof';
import Guarantee from '@/components/sections/09-Guarantee';
import Offer from '@/components/sections/10-Offer';
import FounderNote from '@/components/sections/11-FounderNote';
import VideoTestimonials from '@/components/sections/12a-VideoTestimonials';
import Testimonials from '@/components/sections/12-Testimonials';
import FAQ from '@/components/sections/13-FAQ';
import FinalCTA from '@/components/sections/14-FinalCTA';
import Footer from '@/components/sections/15-Footer';

/**
 * Homepage funnel order (per the Nov 2026 conversion audit):
 *   pain → recognition → solution → self-qualification → how ROI is proved
 *   → proof → risk reversal → the offer → what the audit actually is
 *   → social proof (video, then written) → objections → conversion
 *
 * No prices anywhere. The only ask on this page is the call.
 */
export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AnnouncementBar />
      <Navigation />
      <Hero />
      <Problem />
      <Automate />
      <Fit />
      <RoiMethod />
      <Proof />
      <Guarantee />
      <Offer />
      <FounderNote />
      <VideoTestimonials />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
