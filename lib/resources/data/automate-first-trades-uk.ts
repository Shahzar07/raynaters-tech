import type { Resource } from '@/lib/resources/types';

const resource: Resource = {
  slug: 'automate-first-trades-uk',
  category: 'Playbook',
  title: 'What to automate first in a UK trades or small service business',
  excerpt:
    'A practical order of operations for automating admin in a trades or service business — starting with the workflow that loses you money today.',
  readingTime: '6 min',
  datePublished: '2026-02-10',
  dateModified: '2026-02-10',
  featured: false,
  coverImage: {
    src: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1600&q=80',
    alt: 'Cordless drill resting on a work surface on a trade job site',
  },

  directAnswer:
    'For most UK trades and small service businesses, automate call answering and job booking first, because missed calls are direct lost revenue. After that, automate appointment reminders, quote follow-ups and review requests. Start with the workflow that loses you money today — not the one that is most technically exciting.',

  body: [
    {
      type: 'p',
      text: 'When you decide to automate, the temptation is to start with the shiny stuff — a chatbot on the website, a fancy dashboard. The businesses that get real returns do the opposite. They start with the boring workflow that is quietly costing them money every week, fix that, and only then move on. Here is the order that works.',
    },
    {
      type: 'h2',
      text: 'The rule: automate what loses you money first',
    },
    {
      type: 'p',
      text: 'Every automation falls into one of two buckets: it either recovers revenue you are losing, or it saves you time. Revenue beats time, every time. A reminder system that saves you ten minutes a day is nice. A receptionist that recovers a £2,000 job you would have missed is transformational. Rank your options by money at stake, not by how clever they are.',
    },
    {
      type: 'h2',
      text: 'What to automate first, in order',
    },
    {
      type: 'h3',
      text: '1. Answering calls and booking jobs',
    },
    {
      type: 'p',
      text: 'This is almost always number one for trades. If you are on the tools, you cannot answer the phone — and a caller who hits voicemail usually rings the next firm rather than leaving a message. An AI receptionist answers every call, triages emergencies, and books jobs straight into your diary. It is the single workflow most likely to pay for itself in week one.',
    },
    {
      type: 'h3',
      text: '2. Appointment reminders and confirmations',
    },
    {
      type: 'p',
      text: 'Once jobs are being booked, stop them falling through. Automated SMS confirmations and reminders cut no-shows and the "are you still coming?" calls that interrupt your day. It is simple, cheap and immediately reduces wasted trips.',
    },
    {
      type: 'h3',
      text: '3. Quote and enquiry follow-ups',
    },
    {
      type: 'p',
      text: 'Most quotes that go cold do so because nobody followed up, not because the customer said no. An agent that chases outstanding quotes on a schedule — politely, automatically — recovers work you have already done the effort to win.',
    },
    {
      type: 'h3',
      text: '4. Review requests',
    },
    {
      type: 'p',
      text: 'Reviews drive your next leads. Automatically asking happy customers for a review the day after a completed job compounds quietly over months, lowering what you spend to win the next job.',
    },
    {
      type: 'h3',
      text: '5. Invoicing and admin chasing',
    },
    {
      type: 'p',
      text: 'Last, automate the back-office grind: raising invoices, chasing late payments, and keeping your records in sync. It rarely wins new revenue, but it gives you your evenings back once the revenue-side workflows are handled.',
    },
    {
      type: 'h2',
      text: 'What not to automate first',
    },
    {
      type: 'ul',
      items: [
        'A website chatbot before you answer your phone — the phone is where the money is for trades.',
        'A complex CRM rollout before you have a single workflow paying for itself.',
        'Anything that needs your judgement and relationship — pricing a tricky job, handling a complaint, winning a big client.',
      ],
    },
    {
      type: 'h2',
      text: 'A simple way to choose',
    },
    {
      type: 'p',
      text: 'If you only do one thing, run this quick test on each candidate workflow:',
    },
    {
      type: 'ul',
      items: [
        'How much money does this lose me, or cost me, each month right now?',
        'How repetitive and rules-based is it? (The more repetitive, the better it automates.)',
        'Does it need my personal judgement? (If yes, keep it human for now.)',
      ],
    },
    {
      type: 'p',
      text: 'Whatever scores highest on money at stake and repetitiveness, and lowest on judgement, is your first automation. For most trades, that is answering the phone and booking the job.',
    },
    {
      type: 'callout',
      text: 'Not sure which workflow to automate first? A free 30-minute Agent Audit maps where you are losing time and money and tells you the highest-ROI place to start — with a written projection within 48 hours.',
    },
  ],

  faqs: [
    {
      q: 'What should a trades business automate first?',
      a: 'Call answering and job booking. Missed calls are direct lost revenue, and an AI receptionist that answers 24/7 and books jobs into your diary is usually the fastest workflow to pay for itself.',
    },
    {
      q: 'What admin tasks can a small business automate?',
      a: 'The common high-value ones are call answering and booking, appointment reminders, quote and enquiry follow-ups, review requests, and invoicing and payment chasing — roughly in that order of return for a service business.',
    },
  ],

  related: [
    { label: 'See our AI receptionist for UK trades', href: '/ai-receptionist-for-trades-uk' },
    { label: 'What does an AI automation agency do?', href: '/ai-automation-agency-uk' },
  ],

  metadata: {
    title: 'What to Automate First in a UK Trades Business',
    description:
      'A practical playbook for UK trades and small service businesses: what to automate first, in order, starting with the work that loses you money.',
  },
};

export default resource;
