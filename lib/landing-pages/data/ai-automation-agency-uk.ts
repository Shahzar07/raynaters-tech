import type { LandingPage } from '@/lib/landing-pages/types';

const page: LandingPage = {
  slug: 'ai-automation-agency-uk',
  primaryKeyword: 'ai automation agency uk',
  utmCampaign: 'ai-automation-agency-uk',
  serviceType: 'AI Automation',
  navLabel: 'AI Automation Agency',
  navBlurb: 'Done-for-you AI agents that pay for themselves in 90 days.',
  image: {
    src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80',
    alt: 'Operations team working across laptops and monitors in a modern office',
  },
  showcase: {
    eyebrow: 'How the agents work',
    rows: [
      {
        title: 'Every missed call becomes a booked job',
        body: 'Our AI receptionist answers 24/7, triages enquiries, books appointments directly into your calendar and sends confirmation — without a human touching the keyboard.',
        visual: {
          kind: 'pipeline',
          label: 'Enquiry pipeline · last 30 days',
          stages: [
            { label: 'Enquiries received', value: 1284 },
            { label: 'Answered within 60s', value: 1284 },
            { label: 'Qualified by agent', value: 812 },
            { label: 'Booked to calendar', value: 497 },
          ],
          footnote: 'Every enquiry answered, day or night — nothing sits in a queue overnight.',
        },
      },
      {
        title: 'See your ROI before you commit',
        body: 'Every deployment includes a written ROI projection. You see exactly which workflows we\'re targeting, what the time and revenue impact will be, and a 90-day payback guarantee.',
        visual: {
          kind: 'roi',
          label: 'Return on the build',
          metrics: [
            { label: 'Hours reclaimed', value: '1,940' },
            { label: 'Payback reached', value: 'Day 61' },
          ],
          seriesLabel: 'Hours reclaimed per month',
          trend: 'Compounding',
          series: [
            { label: 'M1', value: 180 },
            { label: 'M2', value: 265 },
            { label: 'M3', value: 340 },
            { label: 'M4', value: 385 },
            { label: 'M5', value: 400 },
            { label: 'M6', value: 370 },
          ],
          footnote: 'Measured against the fixed build cost agreed before we started.',
        },
      },
    ],
  },

  eyebrow: 'AI Automation Agency · UK · US · EU',
  h1: 'AI automation services from the agency UK businesses hire to stop doing work by hand.',
  hook: 'We deploy AI agents that take repetitive admin, operations and customer workflows off your team — and pay for themselves within 90 days, or we keep building until they do.',

  directAnswer:
    'An AI automation agency designs, builds and deploys AI automation services — agentic automation that runs your repetitive business processes end to end, answering calls, qualifying leads, processing orders and updating your systems. Unlike traditional RPA, which follows fixed rules, these agents reason about the task. Raynaters Tech deploys them for UK service businesses and guarantees they pay for themselves within 90 days, or we keep building until they do.',

  headings: {
    whatItDoes: 'What an AI automation agency actually builds for you.',
    whoItsFor: 'Built for UK operators drowning in repeatable work.',
    comparison: 'In-house hire, freelancer, or a deployed agent?',
  },

  whatItDoes: [
    {
      title: 'Lead capture & qualification',
      body: 'Every enquiry — call, form, DM or email — is answered instantly, qualified against your criteria, and booked or routed. Nothing slips through after hours.',
    },
    {
      title: 'Back-office automation',
      body: 'Order processing, invoicing, data entry and CRM updates run themselves across the tools you already use. No copy-paste, no missed steps.',
    },
    {
      title: 'Customer support agents',
      body: 'Tier-one questions, status updates and refunds handled around the clock in your brand voice, with a clean handover to a human when it genuinely matters.',
    },
    {
      title: 'Reporting & operations visibility',
      body: 'Daily numbers, pipeline health and SLA breaches surfaced automatically — so you stop building spreadsheets and start reading them.',
    },
    {
      title: 'Agentic automation, not brittle RPA',
      body: 'Classic robotic process automation breaks the moment a screen moves. Agentic automation reasons about the task instead of replaying clicks, so it handles the messy middle — odd phrasing, missing fields, exceptions — and escalates with a human in the loop when the call is genuinely yours to make.',
    },
    {
      title: 'IT & workflow automation across legacy systems',
      body: 'IT automation services for the tools that were never meant to talk to each other. We wire an automation platform across legacy systems, modern SaaS and internal databases, so records sync in real time instead of via a Tuesday morning CSV. AI-driven where judgement is needed, deterministic where it is not.',
    },
  ],

  whoItsFor: [
    'UK SMBs and scale-ups where admin is quietly capping growth.',
    'Founders still doing £15-an-hour tasks at £150-an-hour opportunity cost.',
    'Teams losing leads to slow follow-up and missed calls.',
    'Operations leads stitching tools together by hand every single day.',
    'Businesses that want outcomes deployed — not another AI strategy deck.',
  ],

  howItWorks: [
    {
      title: 'Agent Audit',
      body: 'A free 30-minute call to map your workflows and find the work worth automating first. You get a written ROI projection within 48 hours.',
    },
    {
      title: 'Fixed-scope build',
      body: 'We design and build the agent against agreed success metrics — no open-ended retainers, no moving goalposts.',
    },
    {
      title: 'Deploy & integrate',
      body: 'The agent goes live inside your existing stack — phone, CRM, inbox, spreadsheets — and starts doing the work.',
    },
    {
      title: 'Measure & improve',
      body: 'We track against the ROI target and keep refining until it pays for itself. That is the guarantee, in writing.',
    },
  ],

  comparison: {
    columns: ['', 'In-house hire', 'Freelancer', 'Raynaters agent'],
    highlightColumn: 3,
    rows: [
      { label: 'Works 24/7', cells: [false, false, true] },
      { label: 'Live in weeks', cells: [false, true, true] },
      { label: 'Fixed, predictable cost', cells: [false, false, true] },
      { label: 'Scales without rehiring', cells: [false, false, true] },
      { label: 'Pays for itself in 90 days', cells: [false, false, true] },
      { label: 'Needs day-to-day managing', cells: ['Yes', 'Yes', 'No'] },
    ],
  },

  paybackROI: {
    headline: 'Scoped in the open. Backed by a 90-day payback promise.',
    body: 'Every engagement is fixed-scope and built around one number it has to beat — agreed with you in writing before a line of it gets built. If it has not paid for itself within 90 days, we keep building until it does.',
    bullets: [
      'A fixed, written scope after your free audit — no open-ended retainers.',
      'Written ROI projection within 48 hours of the call.',
      'Pay-Back-Or-We-Keep-Building guarantee on every deployment.',
      '47,000+ operational hours already reclaimed across the UK, US & EU.',
    ],
  },

  miniCase: {
    client: 'Brookline Lettings',
    monogram: 'BL',
    metric: '31 hrs/wk',
    metricLabel: 'Admin time reclaimed',
    challenge:
      'Their lettings team lost a full day every week to manual tenant referencing, chasing documents and updating three disconnected systems by hand.',
    outcome:
      'A deployed agent now handles referencing intake, document chase-ups and CRM sync end to end — freeing 31 hours a week and cutting move-in delays.',
    persona: { name: 'Daniel Pearce', role: 'Operations Director, Brookline Lettings' },
  },

  faqs: [
    {
      q: 'What does an AI automation agency actually do?',
      a: 'It designs, builds and deploys AI agents that run specific business workflows for you — like answering calls, qualifying leads, processing orders or updating your CRM. A good agency owns the outcome end to end: scoping the work, building against agreed metrics, integrating with your existing tools, and refining the agent until it delivers measurable ROI.',
    },
    {
      q: 'Which is the best AI for automation?',
      a: 'There is no single best model — the right choice depends on the task. We are tool-agnostic and build on whatever performs best for your workflow, whether that is a large language model for reasoning, a voice platform for calls, or workflow tools like n8n, Make or Zapier for the plumbing. What matters is the deployed result, not the brand of model behind it.',
    },
    {
      q: 'How long until AI automation pays for itself?',
      a: 'Our guarantee is 90 days. We scope each agent against a clear ROI target during the free audit, deploy it inside a few weeks, then measure against that target. If it has not paid for itself within 90 days, we keep building until it does.',
    },
    {
      q: 'How is this different from hiring a freelancer or someone in-house?',
      a: 'A hire or freelancer does the work; an agent does the work 24/7, scales without rehiring, and carries a fixed, predictable cost. You also avoid recruitment, management overhead and key-person risk. We deploy and maintain the system, so you get the output without owning the operational burden.',
    },
    {
      q: 'Do you work with our existing tools?',
      a: 'Yes. Agents are built to live inside the stack you already run — your phone number, CRM, inbox, spreadsheets and internal tools — rather than forcing you to rip and replace. Integration is part of the build.',
    },
    {
      q: 'What is agentic automation, and how is it different from RPA?',
      a: 'Traditional RPA automates the clicks: it replays a fixed sequence across a screen, and it breaks the day someone moves a button or a supplier changes an invoice layout. Agentic automation gives the system a goal and the judgement to reach it — reading intent, handling exceptions, deciding when something needs a person. In practice we use both: deterministic automation where the rules never change, intelligent automation with a human in the loop where they do. Most workflows need a bit of each.',
    },
    {
      q: 'Do you provide IT automation services as well as customer-facing agents?',
      a: 'Yes. A lot of the work is unglamorous infrastructure automation — moving data between legacy systems and modern SaaS, syncing records in real time, retiring the CSV export someone rebuilds every Monday. We are tool-agnostic about the automation platform underneath; what matters is that the workflow runs without a human babysitting it, and that you can see it running.',
    },
    {
      q: 'Can AI automation help with marketing as well as operations?',
      a: 'It can, and for AI marketing the UK market is well past the experiment stage. The useful version is not a content generator — it is an agent that reads what your own data says is converting, builds campaigns and follow-up around that, and reports on which channels produced booked jobs rather than impressions. Machine learning is doing the ranking; your marketing strategies stay yours.',
    },
    {
      q: 'Is our data secure?',
      a: 'Agents operate within your existing systems and permissions, and we scope data access to only what each workflow needs. We are happy to walk through data handling, retention and access controls during the audit.',
    },
  ],

  metadata: {
    title: 'AI Automation Agency UK | AI Automation Services | Raynaters Tech',
    description:
      'UK AI automation services: agentic automation, IT automation and RPA that pay for themselves in 90 days — or we keep building. 47,000+ hours reclaimed. Free Agent Audit.',
  },
};

export default page;
