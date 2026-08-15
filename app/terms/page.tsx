import type { Metadata } from 'next';
import { LegalPage, type LegalSection } from '@/components/legal/LegalPage';
import { pageMetadata } from '@/lib/seo/meta';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Terms of Service | Raynaters Tech',
    description:
      'The terms that govern use of raynaters.tech, the free Agent Audit, and Raynaters Tech deployment engagements — including the 14-day refund and the 90-day ROI promise.',
    path: '/terms',
  }),
  robots: { index: true, follow: true },
};

// NOTE(shahzar): the governing-law clause must be confirmed with your solicitor
// before launch. The commercial terms below mirror what the site actually
// promises.
const COMPANY = 'Raynaters Tech Inc.';
const EMAIL = 'team@raynaters.tech';

const sections: readonly LegalSection[] = [
  {
    heading: 'These terms',
    blocks: [
      {
        type: 'p',
        text: `These Terms of Service govern your use of raynaters.tech and any services provided by ${COMPANY} ("Raynaters", "we", "us"). By using the site, booking an Agent Audit, or engaging us for a deployment, you accept these terms.`,
      },
      {
        type: 'p',
        text: 'Where you engage us for a paid deployment, a separate statement of work and services agreement will set out the specific scope, price, timeline and deliverables. If anything in that agreement conflicts with these terms, that agreement takes precedence.',
      },
      {
        type: 'dl',
        items: [
          { term: 'Entity', def: COMPANY },
          { term: 'Contact', def: EMAIL },
        ],
      },
    ],
  },
  {
    heading: 'Who can use our services',
    blocks: [
      {
        type: 'p',
        text: 'Our services are provided to businesses, not consumers. By engaging us you confirm that you are acting in the course of a business and that you have authority to enter into an agreement on behalf of that business.',
      },
      {
        type: 'p',
        text: 'We reserve the right to decline any enquiry or engagement. We routinely tell prospective clients when we do not think automation is the right investment for them yet — that is a feature of the audit, not a failure of it.',
      },
    ],
  },
  {
    heading: 'The free Agent Audit',
    blocks: [
      {
        type: 'p',
        text: 'The Agent Audit is a free 30-minute consultation. There is no cost, no obligation, and no purchase requirement attached to it.',
      },
      {
        type: 'ul',
        items: [
          'We will review the workflows you describe and identify which are viable candidates for automation.',
          'Where we consider the engagement viable, we will provide a written ROI projection within 48 hours of the call.',
          'Where we consider it viable, we will provide a fixed-scope, fixed-price deployment quote.',
          'Where we do not consider it a fit, we will tell you and provide up to three recommendations you can action independently, at no charge.',
        ],
      },
      {
        type: 'p',
        text: 'The ROI projection is an estimate prepared in good faith from the information you provide. It is not a guarantee of future financial performance, and its accuracy depends on the accuracy and completeness of what you tell us. The contractual commitment we do make is set out in "The 90-day ROI promise" below.',
      },
      {
        type: 'p',
        text: 'You agree not to book audits in bad faith — for example, to extract consulting work with no intention of engaging, or on behalf of a competitor. We may decline or end a call on that basis.',
      },
    ],
  },
  {
    heading: 'Deployments, scope and timelines',
    blocks: [
      {
        type: 'p',
        text: 'Deployments are delivered on a fixed-scope, fixed-price basis. The scope, price, milestones and acceptance criteria are set out in your statement of work before any payment is due. We do not bill hourly.',
      },
      {
        type: 'ul',
        items: [
          'Indicative timelines quoted on this site (first agent live in 7 days; full systems in 6–10 weeks) are estimates from kickoff, and assume timely access and feedback from you.',
          'Anything outside the agreed scope is quoted separately as a change order and only proceeds once you approve it in writing.',
          'Delivery depends on your cooperation: system access, a named point of contact, timely responses, and accurate information about your workflows.',
          'Where a delay is caused by outstanding access, approvals or information from you, timelines shift accordingly.',
        ],
      },
    ],
  },
  {
    heading: 'Your responsibilities',
    blocks: [
      {
        type: 'ul',
        items: [
          'Provide accurate information about your operations, systems and objectives.',
          'Provide and maintain the third-party accounts, licences and API access the build requires, and pay any fees those providers charge.',
          'Nominate one person internally who owns the handover and the running system.',
          'Ensure you have the right to grant us access to any data or systems you give us access to, and that doing so does not breach your obligations to anyone else.',
          'Review and test deliverables within the agreed acceptance window.',
        ],
      },
      {
        type: 'p',
        text: 'The systems we build run on infrastructure you own. You remain responsible for your own data, your own backups, and your compliance obligations to your customers.',
      },
    ],
  },
  {
    heading: 'Fees and payment',
    blocks: [
      {
        type: 'p',
        text: 'Prices quoted on this site are in Australian dollars and exclude GST and any other applicable taxes. The price for your engagement is the price in your statement of work.',
      },
      {
        type: 'ul',
        items: [
          'Invoices are payable within 14 days of issue unless your statement of work says otherwise.',
          'Third-party costs — model usage, platform subscriptions, telephony, hosting — are yours and are billed by those providers directly unless we agree otherwise in writing.',
          'We may suspend work on an overdue account after giving you written notice and a reasonable opportunity to pay.',
          'Overdue amounts may attract interest at the rate permitted by law.',
        ],
      },
    ],
  },
  {
    heading: 'The 14-day refund',
    blocks: [
      {
        type: 'p',
        text: 'If you change your mind within 14 days of the engagement start date, tell us and we will refund what you have paid. No questions, no forms, no retention call. We aim to process refunds the same business day.',
      },
      {
        type: 'p',
        text: 'The refund covers fees paid to Raynaters. It does not cover third-party costs already incurred on your behalf and consumed — for example, model usage or platform subscriptions billed to your own accounts.',
      },
    ],
  },
  {
    heading: 'The 90-day ROI promise',
    blocks: [
      {
        type: 'p',
        text: 'If your deployed system has not paid for itself within 90 days of go-live, we continue building and optimising it at no management fee until it does, for up to 12 months from go-live.',
      },
      {
        type: 'p',
        text: 'So that this is a real commitment rather than a marketing line, both sides need the same definitions. The following apply:',
      },
      {
        type: 'dl',
        items: [
          {
            term: '"Paid for itself"',
            def: 'The measured benefit over the period, calculated on the basis agreed in your statement of work, equals or exceeds the fees you paid Raynaters for the build.',
          },
          {
            term: '"Measured"',
            def: 'Against the baseline and metrics recorded in your statement of work before the build starts. If no baseline was captured, the promise cannot be assessed.',
          },
          {
            term: '"Go-live"',
            def: 'The date the system is deployed into your production environment and accepted by you.',
          },
          {
            term: 'What it covers',
            def: 'Continued iteration and optimisation work by us at no additional management fee. It is not a cash refund, and it does not cover third-party running costs.',
          },
          {
            term: 'When it does not apply',
            def: 'If the system is switched off, materially altered by someone other than us, starved of the access or data it needs, or if the workflow it automates is discontinued.',
          },
        ],
      },
    ],
  },
  {
    heading: 'Intellectual property',
    blocks: [
      {
        type: 'ul',
        items: [
          'You own your data, your content, and your systems. Nothing here transfers any of that to us.',
          'On full payment, you own the workflows, prompts, configurations and custom code we build specifically for you under your statement of work.',
          'We retain ownership of our pre-existing methods, frameworks, templates and internal tooling, and of anything general we develop that is not specific to your business. We grant you a perpetual, non-exclusive licence to use those components as embedded in your deliverables.',
          'Site content — copy, design, and the Raynaters name and marks — remains ours. You may not copy or reuse it without written permission.',
        ],
      },
    ],
  },
  {
    heading: 'Confidentiality',
    blocks: [
      {
        type: 'p',
        text: 'Each of us will keep the other’s confidential information confidential, use it only to perform the engagement, and protect it with at least reasonable care. This applies from the first audit call, whether or not an engagement follows.',
      },
      {
        type: 'p',
        text: 'We may reference an engagement anonymously in aggregate statistics and case studies. We will not name you, quote you, or use your logo without your written consent.',
      },
    ],
  },
  {
    heading: 'AI-specific limitations',
    blocks: [
      {
        type: 'p',
        text: 'The systems we build use large language models and other AI components supplied by third parties. You should understand and accept the following before engaging us.',
      },
      {
        type: 'ul',
        items: [
          'AI outputs are probabilistic. They can be wrong, and we design for that with guardrails, escalation paths and human review where the workflow warrants it.',
          'You are responsible for deciding which decisions may be automated in your business and which require a human. We will advise, but the decision is yours.',
          'Third-party model providers may change, deprecate, reprice or restrict their models. Where that affects your system we will tell you and propose a path forward; consequences of a provider’s change are outside our control.',
          'Systems that interact with your customers must comply with the law that applies to you, including any disclosure obligations about automated interaction. We will build to the requirements you give us.',
        ],
      },
    ],
  },
  {
    heading: 'Warranties and liability',
    blocks: [
      {
        type: 'p',
        text: 'We warrant that we will perform our services with reasonable care and skill, using suitably qualified people. Beyond that, and to the extent permitted by law, our services are provided without further warranties.',
      },
      {
        type: 'p',
        text: 'Nothing in these terms excludes or limits liability that cannot lawfully be excluded — including under the Australian Consumer Law, where it applies. Where our liability under a statutory guarantee can be limited, it is limited to resupplying the services or paying the cost of having them resupplied.',
      },
      {
        type: 'p',
        text: 'Subject to the paragraph above, neither party is liable for indirect or consequential loss, loss of profit, loss of revenue, loss of data, or loss of anticipated savings. Our total aggregate liability arising out of an engagement is limited to the fees you paid us for that engagement in the 12 months preceding the claim.',
      },
    ],
  },
  {
    heading: 'Termination',
    blocks: [
      {
        type: 'ul',
        items: [
          'You may terminate within the first 14 days under the refund clause above.',
          'After that, either party may terminate on 30 days’ written notice. You pay for work completed and accepted up to the termination date.',
          'Either party may terminate immediately for a material breach that is not fixed within 14 days of written notice, or on the other party’s insolvency.',
          'On termination we hand back credentials, deliver the work completed to date, and delete our working copies of your data.',
        ],
      },
    ],
  },
  {
    heading: 'Site use',
    blocks: [
      {
        type: 'p',
        text: 'You may use this site for lawful business purposes only. You may not scrape it at scale, attempt to breach its security, interfere with its operation, or misrepresent your identity when contacting us.',
      },
      {
        type: 'p',
        text: 'Statistics, case studies and testimonials on this site describe past outcomes for specific clients in specific circumstances. They are illustrative, not a prediction of your result. Supporting evidence is available on request.',
      },
    ],
  },
  {
    heading: 'General',
    blocks: [
      {
        type: 'ul',
        items: [
          'Governing law: these terms are governed by the laws of [GOVERNING JURISDICTION], and both parties submit to the non-exclusive jurisdiction of its courts.',
          'Before starting proceedings, both parties agree to attempt to resolve any dispute in good faith, starting with a written notice and a conversation.',
          'Neither party is liable for failure to perform caused by events beyond its reasonable control.',
          'If any provision is found unenforceable, the rest remains in force.',
          'We may update these terms; the "last updated" date reflects the current version, and material changes will be notified to active clients directly.',
        ],
      },
      {
        type: 'p',
        text: `Questions about these terms: ${EMAIL}.`,
      },
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="The rules for using this site, what the free Agent Audit is and isn’t, and exactly how the 14-day refund and the 90-day ROI promise work in practice."
      updated="15 August 2026"
      sections={sections}
    />
  );
}
