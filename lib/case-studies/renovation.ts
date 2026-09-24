import type { CaseStudy } from './types';

/**
 * Three modeled renovation case studies, one per lever that moves a
 * renovator's numbers: speed to lead, dead-quote reactivation, reviews.
 *
 * The companies are illustrative composites, not clients — every page says
 * so — and their names were checked against real businesses in the same
 * markets so no real firm is credited with these figures. Each study
 * publishes its assumptions and every figure downstream is arithmetic on
 * them. Never edit an output without re-deriving it from the assumptions.
 */

const INVESTMENT =
  'Ad budgets are unchanged. The system is delivered as a fixed scope at a fixed price, agreed in writing after a free 30-minute audit and built against a single agreed target. If the measured return has not covered the build cost within 90 days of go-live, optimisation continues at no management fee until it does, for up to 12 months.';

export const RENOVATION_STUDIES: CaseStudy[] = [
  // ---------------------------------------------------------------------
  // 1. Speed to lead — Mississauga (GTA), Canada
  // ---------------------------------------------------------------------
  {
    slug: 'kitchen-renovation-lead-response-mississauga',
    client: 'Halvorsen Kitchen & Design',
    monogram: 'HK',
    category: 'Kitchen renovation · GTA',
    image: {
      src: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1600&q=80',
      alt: 'Newly renovated kitchen with white cabinetry and an island',
    },
    headlineResult:
      'Sub-60-second response on every channel: 35% more design consultations from the same ad spend.',
    metric: '26 → 35',
    metricLabel: 'Booked consultations / month',
    summary:
      'A Mississauga design-build kitchen company was generating 150 enquiries a month and reaching only 70% of them in time. Sub-60-second response lifts booked design consultations from 26 to 35 a month with no increase in ad spend.',

    challenge:
      'Halvorsen Kitchen & Design is an 11-person design-build kitchen company in Mississauga with a single showroom and two designers. Marketing was performing: $7,500 a month across Google Ads, Google Local Services Ads, HomeStars and Meta produced around 150 enquiries a month. The constraint sat after the enquiry. The two designers also handled inbound calls, so calls went unanswered during showroom appointments and site measures. Web, HomeStars and Meta enquiries were reviewed twice a day. Median time to first response was 3 hours 40 minutes. In a market where homeowners typically request several quotes at once and book with the first company to engage properly, the business was paying for 150 enquiries a month and effectively working about 105 of them.',
    solution:
      'An AI receptionist was deployed on the existing business number, with a sub-60-second response layer across every other enquiry channel. Calls are answered in the company’s name 24 hours a day and qualified on four criteria set by the owner: scope, budget band, timeline and service area. Form, HomeStars, Local Services Ads and Meta enquiries receive a personalised text and email within a minute, following the same qualification flow. Qualified homeowners book directly into the designers’ calendars, with travel buffers between appointments across Peel, Halton and Toronto. Confirmations and reminders go out at 24 hours and 2 hours, each linking to the company’s project portfolio. Enquiries outside the service area or below the minimum budget receive a clear, courteous response instead of a designer callback. High-intent homeowners trigger an immediate alert to the owner.',
    results: [
      { metric: '<60s', label: 'Median first response' },
      { metric: '+35%', label: 'Booked design consultations' },
      { metric: '−26%', label: 'Ad cost per booked consultation' },
    ],
    scorecard: [
      { label: 'Enquiries from ads & listings / month', before: '150', after: '150' },
      { label: 'Reached within 5 minutes', before: '105 (70%)', after: '142 (95%)' },
      { label: 'Median time to first response', before: '3 h 40 min', after: 'Under 60 s' },
      { label: 'Qualified enquiries / month', before: '58', after: '78' },
      { label: 'Booked design consultations / month', before: '26', after: '35' },
      { label: 'Consultation show rate', before: '75%', after: '85%' },
      { label: 'Signed kitchens / month', before: '≈ 4.9', after: '≈ 7.5' },
      { label: 'Signed contract value / month', before: '≈ $253,000', after: '≈ $390,000' },
      { label: 'Ad cost per booked consultation', before: '$288', after: '$214' },
      { label: 'Ad cost per signed kitchen', before: '$1,540', after: '$1,000' },
    ],
    included: [
      { title: '24/7 AI receptionist', body: 'Answers every call on the existing business number, in the company’s name, including evenings, weekends and simultaneous callers.' },
      { title: 'Sub-60-second multichannel response', body: 'Web forms, HomeStars requests, Google Local Services Ads and Meta lead forms receive a personalised text and email within one minute.' },
      { title: 'Owner-defined qualification', body: 'Scope, budget band, timeline and service area, agreed with the owner, so designer time is reserved for homeowners able to proceed.' },
      { title: 'Direct calendar booking', body: 'Consultations are booked straight into designer calendars, with travel buffers between appointments across the service area.' },
      { title: 'Confirmation and reminder sequence', body: 'Confirmation plus 24-hour and 2-hour reminders, each linking to the project portfolio, to lift attendance.' },
      { title: 'Priority alerts and weekly reporting', body: 'High-intent enquiries alert the owner immediately. A weekly scorecard reports the metrics in this study from the company’s own CRM.' },
    ],
    timeline: [
      { when: 'Week 1', what: 'Audit, review of recorded calls and recent enquiries, qualification criteria agreed, calendars and CRM connected.' },
      { when: 'Week 2', what: 'Receptionist and response layer live outside business hours only, so the team can review every conversation before full rollout.' },
      { when: 'Weeks 3–4', what: 'Full 24/7 coverage across all channels. Reminder sequence and priority alerts switched on.' },
      { when: 'Days 30–90', what: 'Weekly optimisation from call and message transcripts, measured against the scorecard.' },
    ],
    investment: INVESTMENT,
    modeled: {
      basis:
        'Its figures model a typical 11-person design-build kitchen company in Mississauga, Ontario, using standard Greater Toronto Area market inputs.',
      assumptions: [
        { label: 'Currency', value: 'Canadian dollars' },
        { label: 'Marketing spend (unchanged)', value: '$7,500 / month' },
        { label: 'Enquiries (calls, forms, HomeStars, LSA, Meta)', value: '150 / month' },
        { label: 'Reached within 5 minutes', value: '70% → 95%' },
        { label: 'Reached enquiries that qualify', value: '55%' },
        { label: 'Qualified enquiries that book', value: '45%' },
        { label: 'Consultation show rate', value: '75% → 85%' },
        { label: 'Consultation → signed contract (unchanged)', value: '25%' },
        { label: 'Average signed kitchen', value: '$52,000' },
      ],
    },
    faqs: [
      { q: 'How fast should a kitchen renovation company respond to a new lead?', a: 'Within five minutes, and ideally within one. Homeowners in the Greater Toronto Area commonly request several quotes at once and book with the first company that engages properly. The most widely cited research on lead response found that leads contacted within five minutes were significantly more likely to qualify than those contacted even thirty minutes later.' },
      { q: 'Does this work with HomeStars and Google Local Services Ads leads?', a: 'Yes. Any enquiry that arrives as a call, text, email or form submission can trigger the sub-60-second response, including Local Services Ads calls and messages, HomeStars quote requests, Meta lead forms and website forms. All enquiries follow the same qualification flow and are recorded in the same CRM, so bookings can be attributed to their source.' },
      { q: 'Will homeowners know they are speaking with an AI?', a: 'The receptionist introduces itself in the company’s name and does not claim to be a person. Anything outside its scope — detailed design questions, complaints, or a request to speak to someone — is passed to the team immediately with the full conversation attached.' },
      { q: 'How do you prevent unqualified bookings?', a: 'Through the qualification criteria set by the owner: minimum budget band, service area and timeline. Enquiries outside those criteria receive a clear, courteous response rather than a consultation slot.' },
    ],
    related: ['home-renovation-quote-follow-up-manchester', 'kitchen-company-google-reviews-melbourne'],
    metadata: {
      title: 'Kitchen Renovation Lead Response, Mississauga: Modeled Case Study',
      description:
        'How a Mississauga design-build kitchen company books 35% more design consultations from the same ad spend with sub-60-second lead response across every channel.',
    },
  },

  // ---------------------------------------------------------------------
  // 2. Quote reactivation — Manchester, UK
  // ---------------------------------------------------------------------
  {
    slug: 'home-renovation-quote-follow-up-manchester',
    client: 'Ashcombe Home Renovations',
    monogram: 'AR',
    category: 'Home renovation · Manchester',
    image: {
      src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80',
      alt: 'Bright renovated kitchen with white cabinets',
    },
    headlineResult:
      '2,100 unconverted quotes turned into 27 booked consultations and ≈ £190,000 of signed work, with no new ad spend.',
    metric: '£190K',
    metricLabel: 'Signed from old quotes in 90 days',
    summary:
      'A Manchester renovation contractor held three years of unconverted quotes in its CRM. A PECR-compliant reactivation campaign and a structured quote follow-up sequence convert that list into booked consultations with no additional ad spend.',

    challenge:
      'Ashcombe Home Renovations is a 16-person contractor delivering kitchens, bathrooms and extensions across Greater Manchester. Its CRM and spreadsheets held 2,100 enquiries and quotes from the previous three years that had not converted. Follow-up consisted of a single email after each quote. In renovation, most quotes do not fail on price or competition. They stall on timing, budget or scope and are never revisited. The business was continuing to pay Google Ads and lead platforms such as Checkatrade to replace prospects it had already paid to acquire once.',
    solution:
      'The engagement ran in two parts. First, a one-off reactivation. The CRM and spreadsheets were consolidated and de-duplicated, every contact was tagged by project type and last contact date, and the list was filtered for eligibility under the Privacy and Electronic Communications Regulations (PECR). Only the 610 contacts covered by the soft opt-in received automated messages. Each received a short, personal text asking whether the project was still planned, and an AI agent managed every reply: answering questions, presenting phased or reduced-scope options, and booking new consultations. Second, a permanent change to quote follow-up. Every new quote now receives five structured touches over 21 days, and any homeowner objection is routed to the owner with a recommended response.',
    results: [
      { metric: '27', label: 'Booked re-consultations' },
      { metric: '+7 pts', label: 'Quote close rate (22% → 29%)' },
      { metric: '£0', label: 'Additional ad spend' },
    ],
    scorecard: [
      { label: 'Past contacts in CRM & spreadsheets', before: '2,100', after: '2,100' },
      { label: 'Contacts eligible to message (PECR)', before: 'Unknown', after: '610' },
      { label: 'Warm leads from the existing list', before: '0', after: '41' },
      { label: 'Booked re-consultations', before: '0', after: '27' },
      { label: 'Signed projects from the old list (90 days)', before: '0', after: '≈ 6 (≈ £190,000)' },
      { label: 'Follow-up touches per new quote', before: '1 email', after: '5 over 21 days' },
      { label: 'Quote close rate', before: '22%', after: '29%' },
      { label: 'Signed projects / month from new quotes', before: '6.6', after: '8.7' },
      { label: 'Additional signed value / month', before: '—', after: '≈ £67,000' },
      { label: 'Additional ad spend', before: '£0', after: '£0' },
    ],
    included: [
      { title: 'CRM consolidation', body: 'Records de-duplicated and tagged by project type, location and last contact date, producing an accurate view of the pipeline.' },
      { title: 'PECR eligibility filter', body: 'Only contacts covered by the soft opt-in receive automated messages. This keeps the campaign compliant and concentrates it on homeowners who recognise the company.' },
      { title: 'Reactivation campaign with AI reply handling', body: 'Short, personal texts and emails, with every reply handled within minutes: questions answered, objections logged, consultations booked.' },
      { title: 'Five-touch quote follow-up', body: 'Each new quote receives a check-in, a reduced-scope option, a design alternative, a scheduling prompt and a close-out over 21 days.' },
      { title: 'Objection routing', body: 'Price, timing and competitor objections are sent to the owner in real time with context and a recommended response.' },
      { title: 'Past-customer programme', body: 'Twelve-month check-ins, referral requests and prompts for follow-on projects such as bathrooms and extensions.' },
    ],
    timeline: [
      { when: 'Week 1', what: 'CRM and spreadsheet export, de-duplication, tagging and PECR eligibility review.' },
      { when: 'Week 2', what: 'Messaging agreed with the owner. A 50-contact pilot batch is sent and every reply reviewed before scaling.' },
      { when: 'Weeks 3–5', what: 'Full reactivation in daily batches. Replies handled by the agent, with high-intent homeowners passed to the owner the same hour.' },
      { when: 'Week 4 onward', what: 'Five-touch follow-up applied to every new quote.' },
      { when: 'Day 90', what: 'Signed-work review against this model.' },
    ],
    investment: INVESTMENT,
    modeled: {
      basis:
        'Its figures model a typical 16-person kitchen, bathroom and extension contractor in Greater Manchester, using standard UK market inputs.',
      assumptions: [
        { label: 'Currency', value: 'Pounds sterling' },
        { label: 'Past contacts (three years)', value: '2,100' },
        { label: 'Eligible under PECR soft opt-in', value: '610 (29%)' },
        { label: 'Reply rate', value: '15% → 92 replies' },
        { label: 'Replies that are interested', value: '45% → 41' },
        { label: 'Interested → booked consultation', value: '65% → 27' },
        { label: 'Consultation show rate', value: '88%' },
        { label: 'Consultation → signed contract', value: '25%' },
        { label: 'Average signed project (kitchen / bathroom / extension blend)', value: '£32,000' },
        { label: 'New quotes issued', value: '30 / month' },
        { label: 'Quote close rate', value: '22% → 29%' },
        { label: 'Messaging fees (negligible, excluded)', value: '—' },
      ],
    },
    faqs: [
      { q: 'Is it legal to text old renovation leads in the UK?', a: 'In many cases, yes, under PECR’s soft opt-in. It covers people whose details were collected during a sale or negotiations for a sale — requesting a quote counts — provided the messages concern similar services, the person was given a chance to opt out when their details were collected, and every message offers an opt-out. There is no fixed expiry, but messaging should occur within a reasonable period, which is why this model excludes contacts older than two years. This is not legal advice; each audit reviews the actual list.' },
      { q: 'What is database reactivation?', a: 'Re-engaging people who previously enquired or received a quote but did not proceed, with a short and relevant message asking whether the project is still planned. For renovation companies it is typically the lowest-cost source of booked consultations, because the contacts have already been acquired and many stalled on timing or budget rather than choosing a competitor.' },
      { q: 'How many times should a renovation quote be followed up?', a: 'Five structured touches over roughly three weeks is effective: a check-in, a reduced-scope or phased option, a design alternative, a scheduling prompt and a close-out. Each touch should give the homeowner a new reason to respond.' },
      { q: 'Does structured follow-up affect how the company is perceived?', a: 'Well-designed follow-up reads as organisation, not pressure. Offering a reduced scope, phasing or an installation date demonstrates that the company wants the project and can plan it, which is what homeowners look for in a contractor.' },
    ],
    related: ['kitchen-renovation-lead-response-mississauga', 'kitchen-company-google-reviews-melbourne'],
    metadata: {
      title: 'Renovation Quote Follow-Up, Manchester: Modeled Case Study',
      description:
        'How a Manchester home renovation contractor converts 2,100 unconverted quotes into 27 booked consultations and ≈£190K of signed work — PECR-compliant, with no new ad spend.',
    },
  },

  // ---------------------------------------------------------------------
  // 3. Reviews — Melbourne, Australia
  // ---------------------------------------------------------------------
  {
    slug: 'kitchen-company-google-reviews-melbourne',
    client: 'Tidewell Kitchens & Joinery',
    monogram: 'TK',
    category: 'Kitchens & joinery · Melbourne',
    image: {
      src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
      alt: 'Modern custom kitchen interior with an island',
    },
    headlineResult:
      'Google reviews from 34 to 73 in six months and a 4.8★ rating, with no review gating and no incentives.',
    metric: '34 → 73',
    metricLabel: 'Google reviews in six months',
    summary:
      'A Melbourne custom kitchen and joinery studio had 34 Google reviews despite strong client outcomes. A structured, policy-compliant review programme roughly doubles its review count in six months and increases calls from its Google Business Profile.',

    challenge:
      'Tidewell Kitchens & Joinery is a 7-person custom kitchen and joinery studio serving Melbourne’s eastern and bayside suburbs, completing around five projects a month at an average of A$65,000. Its client outcomes were strong, but its online presence did not reflect them: 34 Google reviews at 4.6★, while competing studios in the local map pack held three to four times as many. Review requests were informal, reaching about one client in three, and were usually sent by email with the final invoice — the point in a project when client goodwill is lowest. The Google Business Profile generated approximately 35 calls a month.',
    solution:
      'The review request was moved to reveal day: the day the benchtops go in and the kitchen is effectively complete. Every client receives a short personal text that day with a direct link to the studio’s Google review page and an invitation to add a photo of the finished kitchen, followed by a Houzz request two days later. Structured check-ins at demolition, cabinetry installation and benchtop template identify issues while they can still be resolved, which is what protects the rating. Clients who raise concerns are routed to the owner for resolution and remain free to post a review, in line with Google’s policies. Every review receives an owner-approved reply within 24 hours. A one-time campaign also reached clients from the previous two years who had never been asked.',
    results: [
      { metric: '73', label: 'Google reviews (from 34)' },
      { metric: '4.8★', label: 'Google rating (from 4.6★)' },
      { metric: '+30%', label: 'Calls from Google profile' },
    ],
    scorecard: [
      { label: 'Clients asked for a review', before: '~1 in 3', after: 'Every client' },
      { label: 'Timing of the request', before: 'With the final invoice', after: 'On reveal day' },
      { label: 'Google reviews', before: '34', after: '73' },
      { label: 'Google rating', before: '4.6★', after: '4.8★' },
      { label: 'Houzz reviews', before: '11', after: '25' },
      { label: 'Reviews answered within 24 hours', before: 'Occasionally', after: 'Every review' },
      { label: 'Calls from Google Business Profile / month', before: '35', after: '45' },
      { label: 'Additional ad spend', before: 'A$0', after: 'A$0' },
    ],
    included: [
      { title: 'Project milestone check-ins', body: 'Structured check-ins at demolition, cabinetry installation and benchtop template, so issues are resolved before completion.' },
      { title: 'Reveal-day review request', body: 'A personal text with a direct Google review link on the day the kitchen is completed, and a Houzz request two days later.' },
      { title: 'Policy-compliant programme', body: 'Every client is asked, and no review is incentivised. Review gating and incentives both breach Google’s policies and put the profile at risk.' },
      { title: 'Photo prompt', body: 'Clients are invited to add a photo of the finished kitchen, the most persuasive content a kitchen studio’s profile can carry.' },
      { title: 'Owner-approved replies within 24 hours', body: 'Every review receives a reply drafted in the owner’s voice and approved before posting.' },
      { title: 'Past-client campaign', body: 'A one-time, paced request to clients from the previous two years, sent under the Spam Act’s inferred consent for existing customers.' },
    ],
    timeline: [
      { when: 'Week 1', what: 'Google Business Profile and Houzz audit. Milestone dates mapped from the project schedule.' },
      { when: 'Week 2', what: 'Messaging agreed with the owner. Past-client list reviewed for consent.' },
      { when: 'Weeks 3–5', what: 'Past-client campaign sent in small daily batches. Pacing matters: a sudden spike in reviews can trigger Google’s spam filtering.' },
      { when: 'Months 2–6', what: 'Milestone check-ins and reveal-day requests on every completed project. Monthly reporting on review count, rating and profile calls against local competitors.' },
    ],
    investment: INVESTMENT,
    modeled: {
      basis:
        'Its figures model a typical 7-person custom kitchen and joinery studio in Melbourne, using standard Australian market inputs.',
      assumptions: [
        { label: 'Currency', value: 'Australian dollars' },
        { label: 'Completed projects', value: '5 / month' },
        { label: 'Average project', value: 'A$65,000' },
        { label: 'Starting point', value: '34 Google reviews at 4.6★, 11 on Houzz' },
        { label: 'Past clients never asked (24 months)', value: '90 → 30% post (27)' },
        { label: 'New clients over six months', value: '30 → 40% post (12)' },
        { label: 'Average rating of new reviews', value: '4.9★' },
        { label: 'Asked clients who also post on Houzz', value: '12% → 14' },
        { label: 'Calls from Google Business Profile', value: '35 / month, modeled +30%' },
      ],
    },
    faqs: [
      { q: 'How many Google reviews does a kitchen company need?', a: 'There is no fixed number. The practical benchmark is the companies ranking above you in the local map pack for your category and area: aim to be within reach of their review count with a stronger rating and more recent reviews. Recency carries almost as much weight as volume.' },
      { q: 'Can a business ask only satisfied clients for reviews?', a: 'No. Selectively soliciting positive reviews, known as review gating, breaches Google’s policies and can result in reviews being removed or the profile being restricted. Every client should be asked. Milestone check-ins during the project reduce the number of issues that reach completion.' },
      { q: 'Can a business offer a discount in exchange for a review?', a: 'No. Google prohibits incentivised reviews, and the ACCC treats reviews that are fake, cherry-picked or incentivised to be positive as misleading under Australian Consumer Law. A well-timed request with a direct link is more effective and carries no compliance risk.' },
      { q: 'When is the best time to request a review from a renovation client?', a: 'On reveal day, when the benchtops are installed or at the final walkthrough, rather than with the final invoice. Clients asked at completion are significantly more likely to leave a review and to include a photo.' },
    ],
    related: ['kitchen-renovation-lead-response-mississauga', 'home-renovation-quote-follow-up-manchester'],
    metadata: {
      title: 'Google Reviews for Kitchen Companies, Melbourne: Modeled Case Study',
      description:
        'How a Melbourne kitchen and joinery studio grows Google reviews from 34 to 73 and its rating to 4.8★ in six months, with no review gating and no incentives.',
    },
  },
];
