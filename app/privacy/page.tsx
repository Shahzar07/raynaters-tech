import type { Metadata } from 'next';
import { LegalPage, type LegalSection } from '@/components/legal/LegalPage';
import { pageMetadata } from '@/lib/seo/meta';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Privacy Policy | Raynaters Tech',
    description:
      'How Raynaters Tech collects, uses, stores and discloses personal information, including our obligations under the Australian Privacy Principles and UK/EU GDPR.',
    path: '/privacy',
  }),
  robots: { index: true, follow: true },
};

// NOTE(shahzar): the placeholders marked [REGISTERED …] must be replaced with
// the real entity details before this is relied on. Everything else reflects
// how the site and funnel actually operate today.
const COMPANY = 'Raynaters Tech Inc.';
const EMAIL = 'team@raynaters.tech';

const sections: readonly LegalSection[] = [
  {
    heading: 'Who we are',
    blocks: [
      {
        type: 'p',
        text: `${COMPANY} ("Raynaters", "we", "us", "our") builds and deploys AI automation systems for businesses. This policy explains what personal information we collect through raynaters.tech and through our services, why we collect it, and what rights you have over it.`,
      },
      {
        type: 'p',
        text: 'We serve clients in Australia, the United Kingdom, the European Union, the United States and the UAE. Where the Australian Privacy Act 1988 and the Australian Privacy Principles (APPs) apply, we handle personal information in accordance with them. Where the UK GDPR or EU GDPR applies, we act as the data controller for information collected through this website, and as a data processor for client data we handle while delivering a deployment.',
      },
      {
        type: 'dl',
        items: [
          { term: 'Entity', def: `${COMPANY} — [REGISTERED COMPANY NUMBER / ABN]` },
          { term: 'Registered address', def: '[REGISTERED BUSINESS ADDRESS]' },
          { term: 'Privacy contact', def: EMAIL },
        ],
      },
    ],
  },
  {
    heading: 'Information we collect',
    blocks: [
      {
        type: 'p',
        text: 'We only collect what we need to answer your enquiry, run an Agent Audit, deliver a deployment, and keep the site working. We do not sell personal information, and we never have.',
      },
      {
        type: 'ul',
        items: [
          'Information you give us directly — your name, business name, email address, phone number, role, company size, and the details you provide about your operations when you book or attend an Agent Audit.',
          'Booking information — when you book a call, our scheduling provider collects the details you enter along with your selected time and time zone.',
          'Usage and analytics data — pages viewed, referring source, approximate location derived from IP, device and browser type, and interactions with the site. Collected via Google Analytics 4 and Vercel Analytics.',
          'Advertising data — if you reach us from a paid ad, we receive campaign, ad set and creative identifiers (including UTM parameters and click identifiers such as fbclid) so we can attribute enquiries to the campaign that produced them.',
          'Correspondence — emails, call notes and proposals exchanged with you during an engagement.',
          'Client systems data — during a deployment we may be granted access to your business systems. That data belongs to you; see "Client data during a deployment" below.',
        ],
      },
      {
        type: 'p',
        text: 'We do not knowingly collect information from anyone under 18, and our services are directed at businesses rather than consumers. We do not seek sensitive information (health, biometric, racial or ethnic origin, political or religious affiliation) and ask that you do not send it to us.',
      },
    ],
  },
  {
    heading: 'Why we use it',
    blocks: [
      {
        type: 'dl',
        items: [
          {
            term: 'To respond and qualify',
            def: 'To answer your enquiry, assess whether we are a fit, run the free Agent Audit, and prepare your written ROI projection.',
          },
          {
            term: 'To deliver services',
            def: 'To scope, build, deploy, support and improve the automation systems we agree to build for you.',
          },
          {
            term: 'To measure our marketing',
            def: 'To understand which campaigns and pages produce qualified enquiries, so we can spend our advertising budget sensibly.',
          },
          {
            term: 'To improve the site',
            def: 'To see which content is useful, diagnose faults, and keep the site secure and available.',
          },
          {
            term: 'To meet legal obligations',
            def: 'To keep financial and contractual records for the periods the law requires.',
          },
        ],
      },
      {
        type: 'p',
        text: 'Under the UK/EU GDPR our lawful bases are: performance of a contract (delivering services you have engaged us for), legitimate interests (responding to business enquiries, measuring marketing, securing the site), consent (non-essential analytics and advertising cookies, and marketing email), and legal obligation (tax and accounting records).',
      },
    ],
  },
  {
    heading: 'Cookies and tracking',
    blocks: [
      {
        type: 'p',
        text: 'This site uses a small number of cookies and similar technologies. Essential cookies keep the site functioning and cannot be switched off. Analytics and advertising cookies are used to measure performance and attribute enquiries to campaigns.',
      },
      {
        type: 'ul',
        items: [
          'Google Analytics 4 — aggregate traffic and behaviour measurement. IP addresses are anonymised by Google before storage.',
          'Vercel Analytics — privacy-preserving page performance and traffic measurement.',
          'Meta advertising tools — where a Meta pixel or conversions API is active, it records that a visit or enquiry originated from a Meta ad.',
        ],
      },
      {
        type: 'p',
        text: 'You can block or delete cookies through your browser settings, and you can opt out of Google Analytics using Google’s browser add-on. Blocking non-essential cookies does not affect your ability to use the site or book an audit.',
      },
    ],
  },
  {
    heading: 'Who we share it with',
    blocks: [
      {
        type: 'p',
        text: 'We share personal information only with the service providers we need to operate, and only to the extent required. Each is bound by its own contractual and legal obligations.',
      },
      {
        type: 'ul',
        items: [
          'Hosting and infrastructure — Vercel (site hosting and analytics).',
          'Scheduling — Cal.com, for booking and managing Agent Audit calls.',
          'Analytics — Google (Google Analytics 4).',
          'Advertising platforms — Meta, where a campaign is running.',
          'Email and productivity tools used to correspond with you and prepare your proposal.',
          'Professional advisers, and any party we are legally required to disclose to.',
        ],
      },
      {
        type: 'p',
        text: 'We do not sell, rent or trade personal information, and we do not share it with third parties for their own marketing purposes.',
      },
    ],
  },
  {
    heading: 'Client data during a deployment',
    blocks: [
      {
        type: 'p',
        text: 'This is the part most clients want in writing, so we state it plainly: every system we build runs on infrastructure you own and control. We do not host, retain or take copies of your operational data.',
      },
      {
        type: 'ul',
        items: [
          'Access to your systems is granted by you, scoped to what the build requires, and revocable by you at any time.',
          'Where we act as a processor, we process client data only on your documented instructions and under a separate data processing agreement.',
          'On completion or termination of an engagement, we return or delete any working copies and hand back credentials.',
          'Builds are SOC2-aligned by default. Where an engagement requires a specific compliance posture, that is agreed in the statement of work.',
        ],
      },
    ],
  },
  {
    heading: 'International transfers',
    blocks: [
      {
        type: 'p',
        text: 'Some of our service providers store or process data outside your country, including in the United States and the European Union. Where personal information is transferred out of the UK, EEA or Australia, we rely on the provider’s approved transfer mechanism — such as Standard Contractual Clauses, the UK International Data Transfer Addendum, or an adequacy decision — and satisfy ourselves that comparable protection applies.',
      },
    ],
  },
  {
    heading: 'How long we keep it',
    blocks: [
      {
        type: 'dl',
        items: [
          {
            term: 'Enquiries that do not proceed',
            def: 'Up to 24 months from last contact, then deleted.',
          },
          {
            term: 'Client records',
            def: 'For the life of the engagement plus 7 years, to meet tax and contractual record-keeping obligations.',
          },
          {
            term: 'Analytics data',
            def: 'Retained according to the provider’s default retention window (currently 14 months for Google Analytics 4).',
          },
          {
            term: 'Marketing subscribers',
            def: 'Until you unsubscribe, plus a suppression record so we do not contact you again.',
          },
        ],
      },
    ],
  },
  {
    heading: 'Your rights',
    blocks: [
      {
        type: 'p',
        text: 'You can exercise any of the rights below by emailing us. We will respond within 30 days, and we will not charge you for a reasonable request. We may need to verify your identity first.',
      },
      {
        type: 'ul',
        items: [
          'Access — ask for a copy of the personal information we hold about you.',
          'Correction — ask us to fix anything inaccurate or out of date.',
          'Deletion — ask us to erase your information, where we are not required to keep it.',
          'Objection and restriction — object to processing based on legitimate interests, or ask us to pause it.',
          'Portability — receive your information in a structured, machine-readable format.',
          'Withdraw consent — at any time, without affecting processing carried out before you withdrew it.',
          'Opt out of marketing — unsubscribe from any email, or simply tell us to stop.',
        ],
      },
      {
        type: 'p',
        text: `To make a request, email ${EMAIL} with "Privacy request" in the subject line.`,
      },
    ],
  },
  {
    heading: 'Security',
    blocks: [
      {
        type: 'p',
        text: 'We use access controls, encryption in transit, least-privilege credential handling, and multi-factor authentication on the systems that hold personal information. No system is perfectly secure, but if a breach occurs that is likely to result in serious harm we will notify affected individuals and the relevant regulator — the OAIC in Australia, or the ICO in the UK — within the timeframes the law requires.',
      },
    ],
  },
  {
    heading: 'Complaints',
    blocks: [
      {
        type: 'p',
        text: `If you are unhappy with how we have handled your personal information, contact us first at ${EMAIL}. We take complaints seriously and will investigate and respond within 30 days.`,
      },
      {
        type: 'p',
        text: 'If you are not satisfied with our response, you can escalate to your data protection authority: the Office of the Australian Information Commissioner (oaic.gov.au) in Australia, the Information Commissioner’s Office (ico.org.uk) in the UK, or your local supervisory authority in the EU.',
      },
    ],
  },
  {
    heading: 'Changes to this policy',
    blocks: [
      {
        type: 'p',
        text: 'We update this policy when our practices change or the law requires it. The "last updated" date at the top always reflects the current version. Material changes affecting how we use your information will be notified to active clients directly.',
      },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="What we collect, why we collect it, who we share it with, and how to get it back or have it deleted. Written to be read, not to be skipped."
      updated="15 August 2026"
      sections={sections}
    />
  );
}
