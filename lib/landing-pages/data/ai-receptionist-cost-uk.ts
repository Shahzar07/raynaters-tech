import type { LandingPage } from '@/lib/landing-pages/types';

const page: LandingPage = {
  slug: 'ai-receptionist-cost-uk',
  primaryKeyword: 'ai receptionist cost uk',
  utmCampaign: 'ai-receptionist-cost-uk',
  serviceType: 'AI Receptionist',
  navLabel: 'AI Receptionist Cost',
  navBlurb: 'What an AI receptionist really costs in the UK.',
  image: {
    src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80',
    alt: 'Business owner working through costs and paperwork with a calculator',
  },

  eyebrow: 'UK Pricing · 2026',
  h1: 'How much does an AI receptionist cost in the UK?',
  hook: "Straight answer, no sales theatre: here's roughly what an AI receptionist costs in the UK in 2026, what drives the price, and how to tell whether it's worth it for your business.",

  directAnswer:
    'In the UK, an AI receptionist typically costs from around £100 to £500+ per month in 2026, depending on call volume, the number of integrations, and how much it handles beyond answering — such as booking, payments and follow-up. Most businesses recover the cost from a single saved booking each week.',

  headings: {
    whatItDoes: "What you're actually paying for.",
    whoItsFor: 'When an AI receptionist pays for itself.',
    comparison: 'AI receptionist vs human vs missed calls.',
  },

  whatItDoes: [
    {
      title: 'Call volume',
      body: 'The biggest driver. Plans are usually scoped to how many calls and enquiries you handle each month, rather than charged per minute.',
    },
    {
      title: 'Integrations & booking',
      body: 'Connecting to your calendar, CRM or booking system — and letting the agent actually book, not just answer — adds capability and cost.',
    },
    {
      title: 'Voice quality & languages',
      body: 'Natural voice, custom scripting and multiple languages sit at the higher end, and are worth it for higher-value, brand-sensitive businesses.',
    },
    {
      title: 'Setup & ongoing optimisation',
      body: 'A proper build configures the agent to your services and keeps tuning it. We fold this into a fixed scope rather than surprise fees.',
    },
  ],

  whoItsFor: [
    'You miss calls after hours or while you’re working with customers.',
    'A single booking is worth more than a few weeks of the subscription.',
    'You’re paying for leads, then losing them to slow follow-up.',
    'Your front desk is interrupted by repetitive, low-value calls.',
    'You want predictable cost, not an unpredictable per-minute meter.',
  ],

  howItWorks: [
    {
      title: 'Agent Audit',
      body: 'A free 30-minute call to look at your call volume and the value of a booking. You get a written ROI projection within 48 hours.',
    },
    {
      title: 'Fixed-scope quote',
      body: 'We price the build to your workflow — a clear monthly figure scoped to your volume, not a per-minute meter.',
    },
    {
      title: 'Deploy & integrate',
      body: 'It goes live on your existing number and connects to your booking system, so it earns from day one.',
    },
    {
      title: 'Measure & improve',
      body: 'We track recovered bookings against the cost and keep refining until it clearly pays for itself.',
    },
  ],

  comparison: {
    columns: ['', 'Human receptionist', 'Missed calls / voicemail', 'AI receptionist'],
    highlightColumn: 3,
    rows: [
      { label: 'Typical monthly cost', cells: ['£1,800+', '£0 (lost revenue)', 'From £100–£500'] },
      { label: 'Hours covered', cells: ['~40/wk', '0', '24/7'] },
      { label: 'Books appointments', cells: [true, false, true] },
      { label: 'Scales with call spikes', cells: [false, false, true] },
      { label: 'Sick days & holidays', cells: ['Yes', '—', 'Never'] },
      { label: 'Cost per missed booking', cells: ['Low', 'High', 'Low'] },
    ],
  },

  paybackROI: {
    headline: "The real question isn't cost — it's payback.",
    body: 'A receptionist that recovers many times over what it takes to run is not an expense, it is a return. That is why every Raynaters deployment carries a 90-day payback promise: if it has not paid for itself, we keep building until it does.',
    bullets: [
      'Scoped to your call volume and agreed in writing before we build.',
      'No per-minute meter and no surprise setup fees.',
      'Pay-Back-Or-We-Keep-Building guarantee.',
      'Written ROI projection within 48 hours of your free audit.',
    ],
  },

  miniCase: {
    client: 'Maple Street Dental',
    monogram: 'MS',
    metric: '6×',
    metricLabel: 'Return vs monthly cost',
    challenge:
      'The practice wanted to stop missing new-patient calls but worried an AI receptionist would be an extra cost with unclear return.',
    outcome:
      'Recovered new-patient bookings came to roughly six times the monthly cost of the agent within the first quarter — comfortably inside the 90-day payback promise.',
    persona: { name: 'James Okafor', role: 'Principal Dentist, Maple Street Dental' },
  },

  faqs: [
    {
      q: 'How much does an AI receptionist cost in the UK?',
      a: 'Most UK businesses pay from around £100 to £500+ per month in 2026, depending on call volume, integrations and how much the agent does beyond answering. Pricing is usually fixed to volume rather than charged per minute. Our deep cost guide breaks down each tier in detail.',
    },
    {
      q: 'Is an AI receptionist worth it?',
      a: 'For most businesses that miss calls, yes. If a single booking is worth more than a few weeks of the subscription, recovering even a handful of missed calls a month pays for it several times over. The deciding factor is the value of a booking, not the headline price.',
    },
    {
      q: 'Is there a free AI receptionist?',
      a: 'There are free trials and very basic free tiers, but they tend to be limited to simple answering with no real booking, integrations or tuning. For a system that reliably books work and pays for itself, expect a modest fixed monthly cost.',
    },
    {
      q: 'AI receptionist vs human receptionist — which is cheaper?',
      a: 'A human receptionist in the UK typically costs well over £1,800 a month for roughly 40 hours of cover. An AI receptionist costs a fraction of that for 24/7 cover, though many clinics and firms use both — the agent handles overflow and out-of-hours, the human handles complex, in-person work.',
    },
    {
      q: "What's included in the monthly price?",
      a: 'With Raynaters, the build, configuration to your services, integration with your number and booking system, and ongoing optimisation are folded into one fixed monthly scope — not billed as surprise extras.',
    },
    {
      q: 'Are there setup fees?',
      a: 'We quote a clear, fixed scope after the free audit. Any setup is included in that scope, so there are no per-minute charges or hidden onboarding fees.',
    },
  ],

  relatedLink: {
    label: 'Read the full 2026 UK AI receptionist cost guide',
    href: '/resources/ai-receptionist-cost-uk-2026',
  },

  metadata: {
    title: 'How Much Does an AI Receptionist Cost in the UK? | Raynaters',
    description:
      'AI receptionist cost in the UK (2026): typical monthly pricing, what drives it, and whether it’s worth it vs a human. Book a free Agent Audit.',
  },
};

export default page;
