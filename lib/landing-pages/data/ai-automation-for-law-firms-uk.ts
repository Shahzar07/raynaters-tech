import type { LandingPage } from '@/lib/landing-pages/types';

const page: LandingPage = {
  slug: 'ai-automation-for-law-firms-uk',
  primaryKeyword: 'ai automation for law firms uk',
  utmCampaign: 'ai-automation-for-law-firms-uk',
  serviceType: 'AI Automation',
  navLabel: 'AI Automation for Law Firms',
  navBlurb: 'Automate intake, scheduling and chasing — bill more hours.',
  image: {
    src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80',
    alt: 'Solicitor signing legal documents at a desk',
  },
  showcase: {
    eyebrow: 'What the agents automate',
    rows: [
      {
        title: 'Intake and qualification running 24/7',
        body: 'Agents capture new enquiries around the clock, qualify against your matter types and criteria, and route only the relevant cases to fee-earners — with context attached.',
        visual: {
          kind: 'pipeline',
          label: 'Intake pipeline · last 30 days',
          stages: [
            { label: 'New enquiries', value: 386 },
            { label: 'Screened by agent', value: 386 },
            { label: 'Met matter criteria', value: 214 },
            { label: 'Consultations booked', value: 138 },
          ],
          footnote: 'Conflict-check questions asked up front, so fee earners only see viable matters.',
        },
      },
      {
        title: 'Admin off your fee-earners\' desks',
        body: 'Scheduling consultations, chasing documents, keeping clients updated — all handled by agents so your team bills the hours that used to go on admin.',
        visual: {
          kind: 'roi',
          label: 'Fee-earner time returned',
          metrics: [
            { label: 'Billable hrs back', value: '612' },
            { label: 'Payback reached', value: 'Day 54' },
          ],
          seriesLabel: 'Billable hours recovered per month',
          trend: 'Up quarter on quarter',
          series: [
            { label: 'M1', value: 62 },
            { label: 'M2', value: 88 },
            { label: 'M3', value: 104 },
            { label: 'M4', value: 118 },
            { label: 'M5', value: 122 },
            { label: 'M6', value: 118 },
          ],
          footnote: 'Time previously lost to intake calls, chasing and file setup.',
        },
      },
    ],
  },

  eyebrow: 'For UK Law Firms & Solicitors',
  h1: 'AI automation for UK law firms that gives fee-earners their hours back.',
  hook: 'Solicitors bill by the hour — yet intake, scheduling and chasing eat half the day. We deploy agents that handle client intake, qualify enquiries and keep matters moving, so your team bills more of the time they work.',

  directAnswer:
    'AI automation for law firms handles the repetitive work around legal services — client intake, enquiry qualification, appointment scheduling, document chasing and status updates — using AI agents that run inside your existing systems, so UK solicitors and fee-earners spend less time on admin and more time on billable work.',

  headings: {
    whatItDoes: 'What we automate for your firm.',
    whoItsFor: 'Built for UK firms losing billable time to admin.',
    comparison: 'Paralegal time, a generic chatbot, or a deployed agent?',
  },

  whatItDoes: [
    {
      title: 'Client intake & qualification',
      body: 'New enquiries are captured 24/7, qualified against your criteria and matter types, and conflict-checked information is gathered before a fee-earner ever picks up.',
    },
    {
      title: 'Appointment scheduling',
      body: 'Consultations are booked and rescheduled automatically around your team’s availability — no email tennis, no double-bookings.',
    },
    {
      title: 'Document & information chasing',
      body: 'The agent follows up with clients for outstanding documents and information on a schedule, so matters stop stalling on a missing form.',
    },
    {
      title: 'Status updates & follow-ups',
      body: 'Routine "where are we up to?" updates and follow-ups are handled consistently, keeping clients informed without eating fee-earner time.',
    },
  ],

  whoItsFor: [
    'High-street and boutique firms with heavy enquiry volume.',
    'Conveyancing, family and personal-injury practices drowning in intake.',
    'Solicitors losing billable hours to scheduling and chasing.',
    'Firms missing valuable enquiries that arrive after hours.',
    'Practice managers stitching case-management tools together by hand.',
  ],

  howItWorks: [
    {
      title: 'Agent Audit',
      body: 'A free 30-minute call to map your intake and matter workflows and find the admin worth automating first. Written ROI projection within 48 hours.',
    },
    {
      title: 'Fixed-scope build',
      body: 'We design the agent around your matter types, qualification criteria and the way your firm communicates with clients.',
    },
    {
      title: 'Deploy & integrate',
      body: 'It goes live alongside your case-management system, inbox and calendar — with the firm retaining full oversight of client communication.',
    },
    {
      title: 'Measure & improve',
      body: 'We track recovered fee-earner hours and intake conversion and keep refining until it pays for itself.',
    },
  ],

  comparison: {
    columns: ['', 'Paralegal time', 'Generic chatbot', 'Raynaters agent'],
    highlightColumn: 3,
    rows: [
      { label: 'Qualifies enquiries to your criteria', cells: [true, false, true] },
      { label: 'Works 24/7', cells: [false, true, true] },
      { label: 'Books consultations', cells: [true, false, true] },
      { label: 'Chases documents automatically', cells: ['Manual', false, true] },
      { label: 'Built to your matter types', cells: [true, false, true] },
      { label: 'Frees billable fee-earner hours', cells: [false, false, true] },
    ],
  },

  paybackROI: {
    headline: 'Measured in billable hours returned.',
    body: 'Every engagement is fixed-scope and built around a clear ROI target — usually fee-earner hours recovered and intake conversion. If it has not paid for itself within 90 days, we keep building until it does.',
    bullets: [
      'A fixed, written scope after your free audit — no open-ended retainers.',
      'Built to sit alongside your existing case-management system.',
      'Pay-Back-Or-We-Keep-Building guarantee.',
      'Written ROI projection within 48 hours of the call.',
    ],
  },

  miniCase: {
    client: 'Carter & Vance Solicitors',
    monogram: 'CV',
    metric: '9 hrs/wk',
    metricLabel: 'Billable time recovered per fee-earner',
    challenge:
      'Fee-earners at a mid-sized firm were losing hours each week to intake calls, scheduling and chasing clients for documents — time that should have been billable.',
    outcome:
      'A deployed agent now captures and qualifies intake, books consultations and chases outstanding documents — returning around nine billable hours a week per fee-earner.',
    persona: { name: 'Priya Sharma', role: 'Practice Manager, Carter & Vance Solicitors' },
  },

  faqs: [
    {
      q: 'What is the best AI for UK law firms?',
      a: 'The best fit depends on the task. For client-facing admin like intake, scheduling and chasing, a purpose-built agent integrated with your case-management system beats a generic chatbot. We are tool-agnostic and build on whatever performs best for your firm, with the firm keeping oversight of client communication.',
    },
    {
      q: 'Can AI handle client intake for solicitors?',
      a: 'Yes. Agents capture new enquiries around the clock, gather the information you need, qualify against your criteria and matter types, and book consultations — so fee-earners receive a clean, ready-to-action matter rather than a cold call.',
    },
    {
      q: 'Is AI allowed for client communication under SRA rules?',
      a: 'Firms remain responsible for compliance and oversight, and our agents are deployed to handle administrative intake and communication — not to give legal advice. We configure confidentiality, disclosure and escalation so the firm stays in control. We are happy to align the setup with your compliance team during the audit.',
    },
    {
      q: 'Will it integrate with our case-management system?',
      a: 'It is built to work alongside the systems you already run. We confirm exactly what is possible with your specific case-management software during the audit.',
    },
    {
      q: 'Does it replace paralegals?',
      a: 'No — it removes the repetitive, low-value admin that eats their day, so paralegals and fee-earners spend more time on substantive, billable work.',
    },
    {
      q: 'How quickly can it be deployed?',
      a: 'A first agent is typically live within a few weeks of the audit, with a full workflow build following depending on scope.',
    },
  ],

  metadata: {
    title: 'AI Automation for UK Law Firms | Raynaters Tech',
    description:
      'AI automation for UK law firms — client intake, scheduling and chasing handled by agents so fee-earners bill more. Book a free Agent Audit.',
  },
};

export default page;
