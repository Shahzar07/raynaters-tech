import type { CaseStudy } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'northgate-plumbing-heating',
    client: 'Northgate Plumbing & Heating',
    monogram: 'NP',
    category: 'Trades',
    image: {
      src: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1600&q=80',
      alt: 'Commercial heating pipework and gas valves mounted on a brick wall',
    },
    headlineResult: 'Recovered ~£4,100 of booked work a month that used to go to voicemail.',
    metric: '£4,100/mo',
    metricLabel: 'Recovered booked work',
    summary:
      'A two-van plumbing firm was losing emergency and out-of-hours jobs to voicemail. An AI receptionist now answers, triages and books every call.',
    challenge:
      'Northgate is a two-van plumbing and heating firm. With both engineers on the tools all day, calls went to voicemail — especially the after-hours emergencies that are worth the most. Callers rarely left a message; they simply rang the next plumber. The owner was reviewing missed-call logs at night and watching obvious work disappear.',
    solution:
      'We deployed an AI receptionist on their existing business number. It answers every call 24/7 in a natural voice, triages for urgency, captures the job and address, and books non-emergency work straight into the shared diary. Emergencies are logged and the on-call engineer is alerted immediately, so genuine call-outs are never missed.',
    results: [
      { metric: '£4,100', label: 'Recovered booked work per month' },
      { metric: '100%', label: 'Of calls answered, day and night' },
      { metric: '0', label: 'Calls left to voicemail' },
    ],
    persona: { name: 'Gary Whitfield', role: 'Owner' },
    quote: {
      text: "We were quietly losing thousands a month to voicemail and never knew the full scale of it. Now every call gets answered and the emergencies actually reach me. It paid for itself in the first few weeks.",
      author: 'Gary Whitfield',
      role: 'Owner, Northgate Plumbing & Heating',
    },
    metadata: {
      title: 'Northgate Plumbing & Heating — AI Receptionist Case Study',
      description:
        'How a two-van UK plumbing firm recovered ~£4,100 of booked work a month by replacing voicemail with a 24/7 AI receptionist.',
    },
    related: ['riverside-dental', 'lumiere-aesthetics'],
  },
  {
    slug: 'riverside-dental',
    client: 'Riverside Dental Practice',
    monogram: 'RD',
    category: 'Clinics',
    image: {
      src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=80',
      alt: 'Dentist reviewing a patient x-ray on a lightbox in a dental practice',
    },
    headlineResult: 'Lifted captured new-patient bookings by 22% across two sites.',
    metric: '+22%',
    metricLabel: 'New-patient bookings captured',
    summary:
      'A two-site dental practice was missing a third of calls at peak times. An AI receptionist now answers, books and reschedules around the clock.',
    challenge:
      'Riverside runs two busy dental sites. At peak times and after hours, roughly a third of calls went unanswered, sending would-be new patients to a full voicemail box — and often to a competing practice with a live phone line. The front-desk team was constantly interrupted mid-task.',
    solution:
      'We deployed an AI receptionist connected to their practice calendar. It answers every call, books and reschedules appointments in real time, handles routine questions about treatments and availability, and captures new-patient enquiries out of hours. The front desk now handles the patients in front of them, not a ringing phone.',
    results: [
      { metric: '+22%', label: 'New-patient bookings captured' },
      { metric: '24/7', label: 'Appointment booking cover' },
      { metric: '1/3', label: 'Of calls previously missed — now answered' },
    ],
    persona: { name: 'Hannah Clarke', role: 'Practice Manager' },
    quote: {
      text: 'The phones used to win. Now every patient gets answered and booked, even on a Sunday evening, and our reception team can actually focus on the practice. The new-patient numbers speak for themselves.',
      author: 'Hannah Clarke',
      role: 'Practice Manager, Riverside Dental',
    },
    metadata: {
      title: 'Riverside Dental — AI Receptionist Case Study',
      description:
        'How a two-site UK dental practice lifted captured new-patient bookings by 22% with a 24/7 AI receptionist.',
    },
    related: ['northgate-plumbing-heating', 'carter-vance-solicitors'],
  },
  {
    slug: 'carter-vance-solicitors',
    client: 'Carter & Vance Solicitors',
    monogram: 'CV',
    category: 'Law Firms',
    image: {
      src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80',
      alt: 'Solicitor signing legal documents at a desk',
    },
    headlineResult: 'Returned ~9 billable hours a week per fee-earner.',
    metric: '9 hrs/wk',
    metricLabel: 'Billable time recovered per fee-earner',
    summary:
      'Fee-earners were losing hours to intake, scheduling and chasing. Agents now qualify enquiries, book consultations and chase documents automatically.',
    challenge:
      'At this mid-sized firm, fee-earners were spending hours each week on work that should never have reached them: first-line intake calls, scheduling consultations, and chasing clients for outstanding documents. Valuable enquiries arriving after hours were frequently missed entirely.',
    solution:
      'We deployed agents that capture and qualify intake 24/7 against the firm’s criteria and matter types, book consultations around fee-earner availability, and chase outstanding documents on a schedule. The firm retains full oversight of client communication; the agents handle the administrative load around it.',
    results: [
      { metric: '9 hrs/wk', label: 'Billable time recovered per fee-earner' },
      { metric: '24/7', label: 'Intake capture and qualification' },
      { metric: '0', label: 'After-hours enquiries lost' },
    ],
    persona: { name: 'Priya Sharma', role: 'Practice Manager' },
    quote: {
      text: 'Our fee-earners were doing admin we couldn’t bill for. The agents took intake, scheduling and chasing off their desks entirely — and gave us back the better part of a day each, every week.',
      author: 'Priya Sharma',
      role: 'Practice Manager, Carter & Vance Solicitors',
    },
    metadata: {
      title: 'Carter & Vance Solicitors — AI Automation Case Study',
      description:
        'How a UK law firm returned ~9 billable hours a week per fee-earner by automating intake, scheduling and document chasing.',
    },
    related: ['riverside-dental', 'brookline-lettings'],
  },
  {
    slug: 'lumiere-aesthetics',
    client: 'Lumière Aesthetics',
    monogram: 'LA',
    category: 'Cosmetic Clinics',
    image: {
      src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=80',
      alt: 'Practitioner applying a treatment mask to a client at an aesthetics clinic',
    },
    headlineResult: 'Recovered around £6,800 of booked treatments a month.',
    metric: '+£6,800/mo',
    metricLabel: 'Booked treatments recovered',
    summary:
      'A single-site aesthetic clinic was missing high-value enquiries while treating clients. An AI receptionist now captures and books every one.',
    challenge:
      'Lumière’s practitioners couldn’t answer the phone or messages while mid-treatment — and in aesthetics, each missed enquiry can be a £150+ booking. High-intent leads from ads and social were slipping away to faster-responding competitors.',
    solution:
      'We deployed an AI receptionist across their phone and enquiry channels, connected to their booking system. It answers instantly, qualifies against suitability rules, books consultations and treatments, and follows up on enquiries with reminders and deposit prompts to protect high-value slots.',
    results: [
      { metric: '+£6,800', label: 'Booked treatments recovered per month' },
      { metric: '24/7', label: 'Enquiry capture and follow-up' },
      { metric: '↓', label: 'No-shows reduced with reminders & deposits' },
    ],
    persona: { name: 'Sophie Bennett', role: 'Clinic Owner' },
    quote: {
      text: 'Every missed call was a treatment booking walking out the door. Now nothing gets missed — calls, DMs, late-night enquiries — and the recovered bookings have been transformational for the clinic.',
      author: 'Sophie Bennett',
      role: 'Clinic Owner, Lumière Aesthetics',
    },
    metadata: {
      title: 'Lumière Aesthetics — AI Receptionist Case Study',
      description:
        'How a UK aesthetic clinic recovered ~£6,800 of booked treatments a month by capturing every call and enquiry with an AI receptionist.',
    },
    related: ['northgate-plumbing-heating', 'riverside-dental'],
  },
  {
    slug: 'brookline-lettings',
    client: 'Brookline Lettings',
    monogram: 'BL',
    category: 'Property',
    image: {
      src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80',
      alt: 'House keys and a model house on a lettings agent desk',
    },
    headlineResult: 'Freed 31 hours a week of lettings admin.',
    metric: '31 hrs/wk',
    metricLabel: 'Admin time reclaimed',
    summary:
      'A lettings team lost a day a week to referencing, document chasing and re-keying across three systems. An agent now runs it end to end.',
    challenge:
      'Brookline’s lettings team was losing a full day every week to manual tenant referencing, chasing documents, and re-keying the same information across three disconnected systems. Move-ins were being delayed by avoidable admin bottlenecks.',
    solution:
      'We deployed an agent that handles referencing intake, chases outstanding documents automatically, and keeps their CRM and systems in sync end to end. The team stepped out of the copy-paste loop and into managing exceptions only.',
    results: [
      { metric: '31 hrs/wk', label: 'Admin time reclaimed' },
      { metric: '3→1', label: 'Systems kept in sync automatically' },
      { metric: '↓', label: 'Move-in delays reduced' },
    ],
    persona: { name: 'Daniel Pearce', role: 'Operations Director' },
    quote: {
      text: 'We were drowning in referencing and document chasing across three systems. The agent runs all of it now. Getting 31 hours a week back changed what our team could actually focus on.',
      author: 'Daniel Pearce',
      role: 'Operations Director, Brookline Lettings',
    },
    metadata: {
      title: 'Brookline Lettings — AI Automation Case Study',
      description:
        'How a UK lettings agency reclaimed 31 hours a week by automating tenant referencing, document chasing and CRM sync.',
    },
    related: ['carter-vance-solicitors', 'meridian-commerce'],
  },
  {
    slug: 'meridian-commerce',
    client: 'Meridian Commerce',
    monogram: 'MC',
    category: 'E-commerce',
    image: {
      src: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1600&q=80',
      alt: 'Stocked warehouse aisle in an e-commerce fulfilment operation',
    },
    headlineResult: 'Auto-resolved 85% of support tickets within seconds.',
    metric: '85%',
    metricLabel: 'Of tickets auto-resolved',
    summary:
      'A growing e-commerce brand’s inbox couldn’t keep up. A support agent now resolves the bulk of tickets instantly and routes the rest.',
    challenge:
      'Meridian’s small team was buried under repetitive "where is my order?", returns and product questions. Response times were climbing, and hiring more support staff to cope was eating the margin growth was supposed to create.',
    solution:
      'We deployed a customer-support agent connected to their order, returns and helpdesk systems. It resolves tier-one tickets instantly in the brand’s voice — order status, returns, product questions — and routes genuinely complex cases to a human with full context attached.',
    results: [
      { metric: '85%', label: 'Of tickets auto-resolved' },
      { metric: '<60s', label: 'Median first response time' },
      { metric: '24/7', label: 'Support cover with no new hires' },
    ],
    persona: { name: 'Amara Okeke', role: 'Head of Operations' },
    quote: {
      text: 'We were about to hire two more support people. Instead the agent handles the bulk of our tickets in seconds, around the clock, and the team only sees the cases that actually need a human.',
      author: 'Amara Okeke',
      role: 'Head of Operations, Meridian Commerce',
    },
    metadata: {
      title: 'Meridian Commerce — AI Support Agent Case Study',
      description:
        'How a UK e-commerce brand auto-resolved 85% of support tickets in seconds with an AI customer-support agent — without new hires.',
    },
    related: ['brookline-lettings', 'northgate-plumbing-heating'],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
