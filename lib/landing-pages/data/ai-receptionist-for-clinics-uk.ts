import type { LandingPage } from '@/lib/landing-pages/types';

const page: LandingPage = {
  slug: 'ai-receptionist-for-clinics-uk',
  primaryKeyword: 'ai receptionist for dental clinics uk',
  utmCampaign: 'ai-receptionist-for-clinics-uk',
  serviceType: 'AI Receptionist',
  navLabel: 'AI Receptionist for Clinics',
  navBlurb: 'Answer every patient call and fill every appointment slot.',
  image: {
    src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=80',
    alt: 'Dentist reviewing a patient x-ray in a dental practice',
  },
  showcase: {
    eyebrow: 'How it works for clinics',
    rows: [
      {
        title: 'Every call answered — even during a full surgery',
        body: 'Our AI receptionist handles calls 24/7, books and reschedules appointments in real time, and handles routine questions so your reception team stays focused on patients in the practice.',
        visual: {
          kind: 'pipeline',
          label: 'Patient enquiries · last 30 days',
          stages: [
            { label: 'Calls and messages', value: 942 },
            { label: 'Answered by agent', value: 942 },
            { label: 'Triaged and qualified', value: 604 },
            { label: 'Appointments booked', value: 388 },
          ],
          footnote: 'Reception stopped answering the same eight questions and went back to patients.',
        },
      },
      {
        title: 'New patients booked while you sleep',
        body: 'High-intent patients who call after hours get answered, qualified and booked immediately. No voicemail, no dropped leads, no competitor picking them up first.',
        visual: {
          kind: 'roi',
          label: 'Front-desk load removed',
          metrics: [
            { label: 'Enquiries deflected', value: '412/wk' },
            { label: 'Payback reached', value: 'Day 47' },
          ],
          seriesLabel: 'Out-of-hours bookings captured per month',
          trend: 'Growing',
          series: [
            { label: 'M1', value: 44 },
            { label: 'M2', value: 71 },
            { label: 'M3', value: 96 },
            { label: 'M4', value: 112 },
            { label: 'M5', value: 121 },
            { label: 'M6', value: 118 },
          ],
          footnote: 'Bookings that previously went to voicemail or a competing practice.',
        },
      },
    ],
  },

  eyebrow: 'For UK Clinics, Dental & Healthcare Practices',
  h1: 'AI receptionist for UK clinics that never sends a patient to voicemail.',
  hook: 'Most clinics lose one in three calls after hours. Our AI receptionist answers every patient call, books and reschedules appointments, and handles routine questions — so your front desk can focus on the people in front of them.',

  directAnswer:
    'An AI receptionist for clinics answers patient calls 24/7, books and reschedules appointments directly in your practice calendar, handles routine questions, and captures new-patient enquiries out of hours — so dental, GP and healthcare practices stop losing patients to missed calls and full voicemail boxes.',

  headings: {
    whatItDoes: 'What it does for your front desk.',
    whoItsFor: 'Built for busy UK practices and clinics.',
    comparison: 'Voicemail, an overflow service, or an AI receptionist?',
  },

  whatItDoes: [
    {
      title: 'Books & reschedules appointments',
      body: 'Patients book, move or cancel appointments in a natural conversation, and your practice calendar updates instantly — no front-desk back-and-forth.',
    },
    {
      title: 'Answers routine questions',
      body: 'Opening hours, location, pricing, treatment prep and "are you taking new patients?" — handled accurately and consistently, every time.',
    },
    {
      title: 'Captures new-patient enquiries 24/7',
      body: 'The enquiries that arrive at 8pm or on a Sunday are answered and booked, instead of going to a competitor with a real-time phone line.',
    },
    {
      title: 'Reduces no-shows',
      body: 'Automated confirmations and reminders keep your diary full and cut the gaps that quietly cost a practice thousands a month.',
    },
  ],

  whoItsFor: [
    'Dental practices losing new patients to missed calls.',
    'GP surgeries and private clinics with overwhelmed phone lines.',
    'Aesthetic and specialist clinics juggling high enquiry volume.',
    'Multi-site practices where reception is a bottleneck.',
    'Front-desk teams buried in repetitive, interruptible calls.',
  ],

  howItWorks: [
    {
      title: 'Agent Audit',
      body: 'A free 30-minute call to review your call volume, booking flow and the enquiries you miss. Written ROI projection within 48 hours.',
    },
    {
      title: 'Fixed-scope build',
      body: 'We configure the receptionist to your treatments, availability rules and the questions your patients actually ask.',
    },
    {
      title: 'Deploy on your line',
      body: 'It goes live on your existing number and connects to your practice calendar — nothing changes for your patients.',
    },
    {
      title: 'Measure & improve',
      body: 'We track booked appointments and captured enquiries and keep refining until it pays for itself.',
    },
  ],

  comparison: {
    columns: ['', 'Voicemail', 'Overflow service', 'AI receptionist'],
    highlightColumn: 3,
    rows: [
      { label: 'Answers 24/7', cells: [false, 'Office hours', true] },
      { label: 'Books & reschedules', cells: [false, 'Sometimes', true] },
      { label: 'Knows your treatments', cells: [false, false, true] },
      { label: 'Captures new patients out of hours', cells: [false, false, true] },
      { label: 'Reduces no-shows', cells: [false, false, true] },
      { label: 'Consistent, on every call', cells: [false, 'Varies', true] },
    ],
  },

  paybackROI: {
    headline: 'A handful of saved bookings covers it.',
    body: 'For most practices, recovering a few missed new-patient bookings a month is all it takes for the system to be worth it — and if it has not paid for itself in 90 days, we keep building until it does.',
    bullets: [
      'Scoped to your practice and agreed in writing before we build.',
      'Connects to your existing number and calendar.',
      'Pay-Back-Or-We-Keep-Building guarantee.',
      'Written ROI projection within 48 hours of your free audit.',
    ],
  },

  miniCase: {
    client: 'Riverside Dental Practice',
    monogram: 'RD',
    metric: '+22%',
    metricLabel: 'New-patient bookings captured',
    challenge:
      'A two-site dental practice was missing roughly a third of calls at peak times and after hours, sending would-be new patients straight to a full voicemail box.',
    outcome:
      'The AI receptionist now answers every call, books and reschedules in their calendar, and captures after-hours enquiries — lifting captured new-patient bookings by 22%.',
    persona: { name: 'Hannah Clarke', role: 'Practice Manager, Riverside Dental' },
  },

  faqs: [
    {
      q: 'How much does an AI receptionist cost in the UK?',
      a: 'Pricing is typically fixed to your call volume rather than charged per minute, and scales with how much it handles beyond answering — such as booking and reminders. See our 2026 cost guide for a full breakdown, or book a free audit for a figure specific to your practice.',
    },
    {
      q: 'Can it book and reschedule appointments?',
      a: 'Yes. It books, moves and cancels appointments in a natural conversation and updates your practice calendar in real time, following your availability and booking rules.',
    },
    {
      q: 'Is patient data handled securely and in line with GDPR?',
      a: 'It operates within your existing systems and only accesses the information a booking workflow needs. We scope data access tightly and are happy to walk through data handling, retention and access controls during the audit. It manages reception admin, not clinical decisions.',
    },
    {
      q: 'Will patients know it is AI?',
      a: 'It answers in a natural, professional voice and represents your practice by name. We tune the tone and script so it feels like a calm, capable member of your front-desk team.',
    },
    {
      q: 'Does it integrate with our practice management software?',
      a: 'It is built to connect with the calendar and booking tools you already use. We confirm exactly what is possible with your specific system during the audit.',
    },
    {
      q: 'Can it handle new-patient enquiries out of hours?',
      a: 'Yes — that is often where it pays for itself. Evening and weekend enquiries are answered and booked instead of lost to voicemail or a competitor.',
    },
  ],

  relatedLink: {
    label: 'See full UK AI receptionist pricing for 2026',
    href: '/resources/ai-receptionist-cost-uk-2026',
  },

  metadata: {
    title: 'AI Receptionist for UK Clinics | Raynaters Tech',
    description:
      'An AI receptionist that answers every clinic call 24/7, books patients and never misses a lead. For UK dental & healthcare practices. Book a free Agent Audit.',
  },
};

export default page;
