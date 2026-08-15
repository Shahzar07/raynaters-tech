import type { LandingPage } from '@/lib/landing-pages/types';

const page: LandingPage = {
  slug: 'ai-receptionist-for-cosmetic-clinics-uk',
  primaryKeyword: 'ai receptionist for cosmetic clinics uk',
  utmCampaign: 'ai-receptionist-for-cosmetic-clinics-uk',
  serviceType: 'AI Receptionist',
  navLabel: 'AI Receptionist for Cosmetic Clinics',
  navBlurb: 'Capture every aesthetic enquiry and fill your treatment book.',
  image: {
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=80',
    alt: 'Practitioner applying a treatment to a client at an aesthetics clinic',
  },
  showcase: {
    eyebrow: 'How it works for cosmetic clinics',
    rows: [
      {
        title: 'Every high-value enquiry captured instantly',
        body: 'When you\'re mid-treatment and can\'t answer, our AI receptionist responds instantly — qualifying against suitability criteria and booking consultations before the lead goes cold.',
        visual: {
          kind: 'pipeline',
          label: 'Consultation pipeline · last 30 days',
          stages: [
            { label: 'Enquiries received', value: 518 },
            { label: 'Answered within 60s', value: 518 },
            { label: 'Treatment qualified', value: 331 },
            { label: 'Consultations booked', value: 204 },
          ],
          footnote: 'High-intent ad and social enquiries answered before they message a competitor.',
        },
      },
      {
        title: 'No-shows reduced, deposits secured',
        body: 'The agent sends reminders and deposit prompts automatically, protecting high-value treatment slots without adding any work for your team.',
        visual: {
          kind: 'roi',
          label: 'Recovered bookings',
          metrics: [
            { label: 'Monthly recovered', value: '£6,800' },
            { label: 'Payback reached', value: 'Day 38' },
          ],
          seriesLabel: 'Recovered booking value per month (£00s)',
          trend: 'Up month on month',
          series: [
            { label: 'M1', value: 21 },
            { label: 'M2', value: 38 },
            { label: 'M3', value: 52 },
            { label: 'M4', value: 61 },
            { label: 'M5', value: 68 },
            { label: 'M6', value: 66 },
          ],
          footnote: 'Deposits collected at the point of booking, so no-shows drop too.',
        },
      },
    ],
  },

  eyebrow: 'For UK Aesthetic, Cosmetic & Beauty Clinics',
  h1: 'AI receptionist for UK cosmetic clinics that turns enquiries into booked treatments.',
  hook: 'Every missed call at an aesthetic clinic is a £150+ booking walking to a competitor. Our AI receptionist answers instantly, books consultations and treatments, and follows up on enquiries — day and night.',

  directAnswer:
    'An AI receptionist for cosmetic and aesthetic clinics answers every call and enquiry 24/7, books consultations and treatments into your calendar, answers questions about treatments and pricing, and follows up with prospects — so medspas, aesthetic and beauty clinics stop losing high-value bookings to missed calls.',

  headings: {
    whatItDoes: 'What it does for your clinic.',
    whoItsFor: 'Built for high-value, booking-led clinics.',
    comparison: 'Voicemail, a 9–5 front desk, or an AI receptionist?',
  },

  whatItDoes: [
    {
      title: 'Books consultations & treatments',
      body: 'Prospects book consultations and treatments in a natural conversation, straight into your calendar, around the slots you actually have.',
    },
    {
      title: 'Answers treatment & pricing questions',
      body: 'Common questions about treatments, aftercare, suitability and pricing are answered consistently — qualifying the lead before it reaches you.',
    },
    {
      title: 'Captures & follows up enquiries',
      body: 'Calls, web forms and message enquiries are captured 24/7 and followed up, so a late-night enquiry becomes a booking instead of a lost lead.',
    },
    {
      title: 'Reduces no-shows',
      body: 'Automated confirmations, reminders and deposit prompts keep your treatment book tight and protect your highest-value slots.',
    },
  ],

  whoItsFor: [
    'Aesthetic and cosmetic clinics with high-value treatment bookings.',
    'Medspas and skin clinics juggling heavy enquiry volume.',
    'Hair, beauty and nail salons losing calls during appointments.',
    'Single-room practitioners who can’t answer while treating clients.',
    'Clinics spending on ads, then missing the calls those ads create.',
  ],

  howItWorks: [
    {
      title: 'Agent Audit',
      body: 'A free 30-minute call to review your enquiry sources, booking flow and the leads you miss. Written ROI projection within 48 hours.',
    },
    {
      title: 'Fixed-scope build',
      body: 'We configure the receptionist to your treatments, pricing, suitability rules and booking calendar.',
    },
    {
      title: 'Deploy across your channels',
      body: 'It goes live on your number and enquiry channels and connects to your booking system — nothing changes for your clients.',
    },
    {
      title: 'Measure & improve',
      body: 'We track booked treatments and captured enquiries and keep refining until it pays for itself.',
    },
  ],

  comparison: {
    columns: ['', 'Voicemail', 'Front desk (9–5)', 'AI receptionist'],
    highlightColumn: 3,
    rows: [
      { label: 'Answers 24/7', cells: [false, false, true] },
      { label: 'Books consultations & treatments', cells: [false, true, true] },
      { label: 'Handles message & DM enquiries', cells: [false, 'Sometimes', true] },
      { label: 'Answers treatment questions', cells: [false, true, true] },
      { label: 'Reduces no-shows', cells: [false, 'Manual', true] },
      { label: 'Never misses an ad-driven call', cells: [false, false, true] },
    ],
  },

  paybackROI: {
    headline: 'One recovered booking can cover the month.',
    body: 'With treatment values often well over £150, recovering a single missed booking is usually all it takes for the system to be worth it. Scoped to your enquiry volume — and if it has not paid for itself in 90 days, we keep building until it does.',
    bullets: [
      'Scoped to your enquiry volume and agreed in writing before we build.',
      'Connects to your existing number and booking system.',
      'Pay-Back-Or-We-Keep-Building guarantee.',
      'Written ROI projection within 48 hours of your free audit.',
    ],
  },

  miniCase: {
    client: 'Lumière Aesthetics',
    monogram: 'LA',
    metric: '+£6,800/mo',
    metricLabel: 'Booked treatments recovered',
    challenge:
      'A single-site aesthetic clinic was missing calls and DM enquiries while treating clients — losing high-value consultations to faster-responding competitors.',
    outcome:
      'The AI receptionist now answers and follows up every enquiry, books consultations and sends reminders — recovering around £6,800 of booked treatments a month.',
    persona: { name: 'Sophie Bennett', role: 'Clinic Owner, Lumière Aesthetics' },
  },

  faqs: [
    {
      q: 'Can it book consultations and treatments?',
      a: 'Yes. It books consultations and treatments in a natural conversation, following your suitability and availability rules, and writes the booking straight into your calendar.',
    },
    {
      q: 'Does it handle message and DM enquiries?',
      a: 'It captures and follows up enquiries from calls, web forms and messaging channels, so the leads your marketing generates after hours actually convert into bookings.',
    },
    {
      q: 'Will clients know it is AI?',
      a: 'It answers in a warm, professional voice and represents your clinic by name. We tune the tone so it reflects your brand and reassures higher-value clients.',
    },
    {
      q: 'Can it take deposits or reduce no-shows?',
      a: 'It sends confirmations, reminders and deposit prompts to protect your highest-value slots and cut no-shows. We configure the exact flow to match your booking policy.',
    },
    {
      q: 'Does it work with my booking system?',
      a: 'It is built to connect with the booking and calendar tools you already use. We confirm what is possible with your specific system during the audit.',
    },
    {
      q: 'How much does it cost?',
      a: 'Pricing is fixed to your enquiry volume rather than per minute. See our 2026 UK cost guide for the full picture, or book a free audit for a figure specific to your clinic.',
    },
  ],

  relatedLink: {
    label: 'See full UK AI receptionist pricing for 2026',
    href: '/resources/ai-receptionist-cost-uk-2026',
  },

  metadata: {
    title: 'AI Receptionist for UK Cosmetic Clinics | Raynaters Tech',
    description:
      'An AI receptionist for UK aesthetic & cosmetic clinics — answers 24/7, books treatments and follows up every enquiry. Book a free Agent Audit.',
  },
};

export default page;
