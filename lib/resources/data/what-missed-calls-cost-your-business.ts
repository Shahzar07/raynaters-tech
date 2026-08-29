import type { Resource } from '@/lib/resources/types';

const resource: Resource = {
  slug: 'what-missed-calls-cost-your-business',
  category: 'ROI & Numbers',
  title: 'What missing calls actually costs your business (with the maths)',
  excerpt:
    'The real cost of unanswered calls, worked out step by step on your own numbers — plus the three hidden costs that never show up on an invoice.',
  readingTime: '9 min',
  datePublished: '2026-08-29',
  dateModified: '2026-08-29',
  coverImage: {
    src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80',
    alt: 'Working through business figures with a calculator and notepad',
  },

  directAnswer:
    'Multiply your missed calls per month by the share that would have bought and by your average job value. A trades business missing 40 calls a month, converting one in three, at £450 a job, loses about £6,000 in monthly revenue. The cost is invisible because it never appears on an invoice.',

  body: [
    { type: 'h2', text: 'The most expensive line item in your business is not on any invoice' },
    {
      type: 'p',
      text: 'You can see what your software costs. It arrives monthly, itemised, cancellable.',
    },
    {
      type: 'p',
      text: 'You cannot see what your unanswered phone costs. There is no statement, no renewal date, no line to query. The enquiry rang out, the caller rang someone else, and nothing in your business recorded that it happened. Your revenue is simply lower than it should be, and every explanation you reach for — market’s quiet, seasonal dip, competitors got cheap — is more comfortable than the real one.',
    },
    {
      type: 'p',
      text: 'This page gives you the number. Not an industry average. Yours, worked out on your own figures, in about four minutes.',
    },

    { type: 'h2', text: 'Step 1 — How many calls are you actually missing?' },
    {
      type: 'p',
      text: 'Most owners guess low. Badly low. Guessing is not required — the data already exists in three places:',
    },
    {
      type: 'ul',
      items: [
        'Your phone system’s call log. Look for unanswered, abandoned, and calls ending under fifteen seconds. That last group matters: a fifteen-second call is usually a hangup during ringing, not a wrong number.',
        'After-hours volume. Every call arriving outside your working hours is missed unless someone is answering it. Check evenings, and check Saturday morning — for trades and clinics that window is often the busiest hour of the week.',
        'Your busiest hour. Pull one week and count how many calls arrived while your line was already engaged.',
      ],
    },
    { type: 'p', text: 'Add them. Call it M, missed calls per month.' },
    {
      type: 'p',
      text: 'If you cannot get a log, use a two-week proxy: have one person tally every call that rings out or hits voicemail, then double it.',
    },

    { type: 'h2', text: 'Step 2 — How many of those would have bought?' },
    {
      type: 'p',
      text: 'Take your existing enquiry-to-job conversion rate. If one in three enquiries becomes work, that is 0.33. Call it C.',
    },
    { type: 'p', text: 'Two adjustments, and they run in opposite directions:' },
    {
      type: 'ul',
      items: [
        'Adjust down if a meaningful share of your inbound is suppliers, spam, or existing customers with an admin question. Those calls matter for service, not for revenue in this calculation.',
        'Adjust up for after-hours calls. Someone calling a plumber at 9pm or a dental practice about pain on a Sunday converts far better than a Tuesday-afternoon price-shopper. They have an urgent problem and they are ringing down a list.',
      ],
    },

    { type: 'h2', text: 'Step 3 — What is a job worth?' },
    {
      type: 'p',
      text: 'Use average job value, V. If you have the number, use customer lifetime value instead — because you are not losing one job, you are losing every job that customer would ever have brought you, plus the people they would have referred.',
    },
    {
      type: 'p',
      text: 'For a dental practice, a new patient is not one check-up. It is a decade of check-ups and possibly a family.',
    },

    { type: 'h2', text: 'Step 4 — The number' },
    { type: 'callout', text: 'Monthly revenue lost = M × C × V' },
    { type: 'h3', text: 'Worked example, trades' },
    {
      type: 'ul',
      items: [
        '40 missed calls per month',
        'One in three converts (0.33)',
        '£450 average job',
        '40 × 0.33 × £450 = £5,940 a month. £71,280 a year.',
      ],
    },
    { type: 'h3', text: 'Worked example, dental practice' },
    {
      type: 'ul',
      items: [
        '60 missed calls per month',
        'One in four converts to a new patient (0.25)',
        '£900 first-year patient value',
        '60 × 0.25 × £900 = £13,500 a month.',
      ],
    },
    { type: 'h3', text: 'Worked example, e-commerce or SaaS support' },
    {
      type: 'p',
      text: 'Replace jobs with churn. If 100 unanswered support enquiries a month produce 5 cancellations at £80 a month each, that is £400 monthly recurring revenue gone — £4,800 annualised, compounding, because those customers do not come back.',
    },
    {
      type: 'p',
      text: 'Whatever your number is, hold it next to what a solution costs. That comparison is the entire decision.',
    },

    { type: 'h2', text: 'The three costs the formula misses' },
    {
      type: 'p',
      text: 'The formula above is deliberately conservative. Three larger costs sit outside it.',
    },
    { type: 'h3', text: '1. Lifetime value, not job value' },
    {
      type: 'p',
      text: 'You lost the £450 job. You also lost the repeat work, the referral to their neighbour, and the review they never left. For any business with repeat custom, the true figure is a multiple of the formula’s output.',
    },
    { type: 'h3', text: '2. Your competitor got a customer' },
    {
      type: 'p',
      text: 'This is the one that compounds against you. That caller did not abandon their problem — they solved it with somebody else, who now has the relationship, the review, and the referrals. You did not just fail to gain; you actively handed over an asset.',
    },
    { type: 'h3', text: '3. The team you already pay' },
    {
      type: 'p',
      text: 'Your marketing spend bought that call. Your reputation earned it. Your Google listing delivered it. Then it rang out. Every missed call means you paid full price for a lead and threw it away at the last inch. It is the most expensive place in the funnel to leak.',
    },

    { type: 'h2', text: 'Why this happens to good businesses' },
    {
      type: 'p',
      text: 'Nobody misses calls because they do not care. They miss calls because of structure:',
    },
    {
      type: 'ul',
      items: [
        'The work is elsewhere. Trades are on the tools. Clinicians are with a patient. You cannot answer a phone with your hands inside a wall or a mouth.',
        'Calls cluster. They do not arrive evenly. They arrive in the same twenty minutes, and one receptionist can hold one conversation.',
        'Enquiries do not respect your hours. People research services in the evening, because that is when they are not working either.',
        'Voicemail is not a safety net. Most callers with an urgent problem and a list of alternatives will not leave a message. They ring the next number.',
      ],
    },
    {
      type: 'p',
      text: 'None of this is a discipline problem, which is why “answer the phone better” has never worked as a fix. It is a coverage problem, and coverage is structural.',
    },

    { type: 'h2', text: 'What the fixes actually cost — and what they cover' },
    {
      type: 'table',
      columns: ['Option', 'Typical monthly cost', 'After-hours', 'Books the job', 'Handles a spike'],
      rows: [
        ['Do nothing (voicemail)', '£0', 'No', 'No', 'No'],
        ['Extra receptionist', '£2,300+ loaded', 'No', 'Yes', 'No — one person, one call'],
        ['Human answering service', '£150–£600, per-minute', 'Yes', 'Sometimes', 'Bill spikes with volume'],
        ['AI receptionist', '£100–£600 flat', 'Yes', 'Yes', 'Yes'],
      ],
    },
    {
      type: 'p',
      text: 'The salary line is loaded cost, not base — holiday, sick cover, lunch, and the majority of the week that is not spent on the phone.',
    },
    {
      type: 'p',
      text: 'Set that table against your own M × C × V. For most businesses that run the numbers, the missed-call cost is several times the cost of any of the fixes. That is the uncomfortable part: the cheapest option on paper is the most expensive one you are currently running.',
    },

    { type: 'h2', text: 'What we have measured' },
    {
      type: 'p',
      text: 'A trades client was missing roughly four in ten calls while the crew was on the tools. After deployment, average answer time was eleven seconds — every call answered, qualified, and booked, with emergencies flagged straight to a phone.',
    },
    {
      type: 'p',
      text: 'A UK clinic’s reception desk was answering the same eight questions all day; the agent now deflects 412 enquiries a week, and the front desk went back to looking after patients in the room.',
    },
    {
      type: 'p',
      text: 'An e-commerce team was losing 30 hours a week to inventory and service admin. They stopped working weekends inside the first month.',
    },
    {
      type: 'p',
      text: 'Across deployments to date: 47,283 operational hours reclaimed, $2.4M+ in operational cost removed, and a median time to full ROI under 90 days.',
    },

    { type: 'h2', text: 'Do the calculation before you buy anything' },
    {
      type: 'p',
      text: 'Before you talk to any vendor, including us, write down four numbers: missed calls per month, conversion rate, average job value, and the monthly figure they produce.',
    },
    {
      type: 'p',
      text: 'Then treat that figure as your ceiling. Any solution costing a meaningful fraction of it needs to justify itself. Any solution costing a small fraction of it and covering the gap is not really a cost — it is a recovery.',
    },
    {
      type: 'p',
      text: 'If your number comes out small, you do not have this problem. Genuinely. Spend the money on lead generation instead, and be glad you checked.',
    },

    { type: 'h2', text: 'Your next step' },
    {
      type: 'p',
      text: 'You now have a number. The only question left is whether you would rather keep paying it.',
    },
    {
      type: 'callout',
      text: 'Book a free 30-minute Agent Audit. We will map where your enquiries leak, calculate your recovery figure with you, and send a written ROI projection within 48 hours. No pitch deck.',
    },
  ],

  faqs: [
    {
      q: 'How do I find out how many calls I am missing?',
      a: 'Pull unanswered, abandoned, and sub-fifteen-second calls from your phone system log, and count everything arriving outside working hours. If you have no log, tally manually for two weeks and double it.',
    },
    {
      q: 'What percentage of business calls go unanswered?',
      a: 'Published figures vary widely by sector and most are vendor-produced, so treat them carefully. Your own call log is the only number worth acting on — and it is usually higher than the owner’s estimate.',
    },
    {
      q: 'Do people leave a voicemail if I miss the call?',
      a: 'Frequently not, especially when the problem is urgent and alternatives are one tap away. Voicemail captures the patient caller and loses the profitable one.',
    },
    {
      q: 'Is an AI receptionist cheaper than hiring someone?',
      a: 'Almost always on cost per answered call, and it covers nights and weekends that a salary does not. A person still wins on complex, consultative conversations.',
    },
    {
      q: 'How fast can this be fixed?',
      a: 'Answering coverage is one of the fastest workflows to close — our first system goes live in seven days, and the measurement starts on day one.',
    },
  ],

  related: [
    { label: 'See our AI receptionist for UK trades', href: '/ai-receptionist-for-trades-uk' },
    { label: 'Compare AI receptionist pricing & options', href: '/ai-receptionist-cost-uk' },
    { label: 'Will customers hate an AI receptionist?', href: '/resources/will-customers-hate-ai-receptionist' },
  ],

  metadata: {
    title: 'What Missed Calls Actually Cost Your Business',
    description:
      'The real cost of unanswered calls, worked out step by step on your own numbers — plus the three hidden costs that never show up on an invoice.',
  },
};

export default resource;
