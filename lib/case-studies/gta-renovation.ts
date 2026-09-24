import type { CaseStudy } from './types';

/**
 * Three modeled scenarios for kitchen and home renovation companies in the
 * Greater Toronto Area — one per lever that actually moves a renovator's
 * numbers: speed to lead, dead-quote reactivation, and reviews.
 *
 * These are models, not named clients. Each one publishes its assumptions
 * and every figure downstream is arithmetic on them, so the funnels close:
 * change an input and the outputs move with it. Keep it that way — never
 * edit an output without re-deriving it from the assumptions.
 */

const INVESTMENT =
  'Your ad budget doesn’t change. The system is a fixed scope at a fixed price, agreed in writing after a free 30-minute audit, and built against one number it has to beat. If the measured return hasn’t covered the build cost within 90 days of go-live, we keep optimising at no management fee until it does, for up to 12 months.';

export const GTA_RENOVATION_STUDIES: CaseStudy[] = [
  // ---------------------------------------------------------------------
  // 1. Speed to lead — Mississauga design-build kitchen firm
  // ---------------------------------------------------------------------
  {
    slug: 'kitchen-renovation-lead-response-mississauga',
    client: 'Design-build kitchen firm, Mississauga',
    monogram: 'KR',
    category: 'Kitchen renovation · GTA',
    image: {
      src: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1600&q=80',
      alt: 'Newly renovated kitchen with white cabinetry and an island',
    },
    headlineResult:
      'Every enquiry answered in under a minute — and 35% more design consultations from the same ad spend.',
    metric: '26 → 35',
    metricLabel: 'Booked consultations / month',
    summary:
      'A Mississauga kitchen firm spending $7,500 a month on ads was losing the first-call race. Replying to every enquiry in under 60 seconds lifts booked design consultations from 26 to 35 a month without buying one extra lead.',

    challenge:
      'Here is how a GTA homeowner buys a kitchen: they fill in three or four quote requests on a Sunday night, then book with whoever gets back to them first with something useful. This firm was doing everything right on the marketing side — $7,500 a month across Google Ads, Local Services Ads, HomeStars and Meta, around 150 enquiries a month. The leak was after the click. Its two designers were also its phone line, so calls rang out while they were in the showroom with a walk-in or stuck on the 403 between measures. Web forms and HomeStars requests landed in an inbox that got checked at lunch and after close. Median time to a first reply: 3 hours 40 minutes. By then the homeowner had already had a real conversation with somebody else. The firm wasn’t short of leads. It was paying for 150 and only really working about 105 of them.',
    solution:
      'We put an AI receptionist on the existing business number and a 60-second responder on every other channel. It answers every call in the firm’s name, day or night, and asks the four questions the owner actually uses to decide whether a lead is worth a designer’s evening: full kitchen or refresh, budget band, timeline, and which city the home is in. Form, HomeStars, Local Services and Meta enquiries get a personal text and email inside a minute with the same short conversation. Qualified homeowners book straight into the designers’ calendars, with travel buffers so nobody is booked in Oakville 40 minutes after a measure in Brampton. Confirmations and reminders go out at 24 hours and 2 hours with a link to the firm’s project gallery, so homeowners turn up already warm. Out-of-area or under-budget enquiries get a polite, useful answer instead of a designer’s callback. Anyone ready to go with a real budget pings the owner’s phone the moment they finish the call.',
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
      {
        title: '24/7 AI receptionist on your number',
        body: 'Answers every call in your company’s name, in a natural voice, including evenings, weekends and the second caller while your designer is on the first.',
      },
      {
        title: '60-second reply on every channel',
        body: 'Web forms, HomeStars requests, Google Local Services Ads and Meta lead forms all get a personal text and email within a minute, not whenever the inbox gets checked.',
      },
      {
        title: 'Your qualifying questions, not ours',
        body: 'Scope, budget band, timeline and service area, written with you, so designers only drive to homeowners who can actually go ahead.',
      },
      {
        title: 'Direct booking with GTA travel buffers',
        body: 'Consultations land straight in your designers’ calendars, with drive time built in between Mississauga, Oakville, Brampton and Toronto appointments.',
      },
      {
        title: 'Reminders that cut no-shows',
        body: 'Confirmation, a 24-hour and 2-hour reminder, and a link to your project gallery, so the homeowner arrives already sold on your work.',
      },
      {
        title: 'Hot-lead alerts and a Monday scorecard',
        body: 'Ready-now, real-budget homeowners ping the owner instantly. Every Monday you get the numbers in this table for last week, from your own CRM.',
      },
    ],
    timeline: [
      { when: 'Week 1', what: 'Free audit, then a review of real call recordings and enquiries. We agree the qualifying questions and connect the designers’ calendars and your CRM.' },
      { when: 'Week 2', what: 'Receptionist and 60-second responder go live after hours only, so the team can read every conversation before it touches business hours.' },
      { when: 'Weeks 3–4', what: 'Live 24/7 on every channel. Reminder sequence switched on. Hot-lead alerts routed to the owner’s phone.' },
      { when: 'Days 30–90', what: 'Weekly tuning from real transcripts — the questions homeowners actually ask, the objections that stall bookings — measured against the scorecard every Monday.' },
    ],
    investment: INVESTMENT,
    modeled: {
      basis:
        'This models a typical Mississauga design-build kitchen company from standard GTA renovation-market inputs, not a named client.',
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
      {
        q: 'How fast should a kitchen renovation company respond to a new lead?',
        a: 'Within five minutes, and under one is better. GTA homeowners usually request several quotes at once and book with the first renovator who has a real conversation with them. The most-cited research on lead response found that leads contacted within five minutes were far more likely to be qualified than those contacted even half an hour later. For a renovator, the gap between replying in one minute and replying after lunch is usually the gap between a booked consultation and a homeowner who has already booked someone else.',
      },
      {
        q: 'Does this work with HomeStars and Google Local Services Ads leads?',
        a: 'Yes. Anything that reaches you as a phone call, text, email or form submission can trigger the 60-second reply — Local Services Ads calls and messages, HomeStars quote requests, Meta lead forms and your own website form. Every enquiry gets the same qualification conversation and lands in the same calendar and CRM, so you can finally see which source books consultations rather than just clicks.',
      },
      {
        q: 'Will homeowners know they are talking to an AI?',
        a: 'It introduces itself in your company’s name and doesn’t pretend to be a person. Most homeowners only care that someone answered, understood the project and booked them in. Anything it can’t handle — a detailed design question, a complaint, a homeowner who asks for a person — goes straight to your team with the conversation attached.',
      },
      {
        q: 'Will it book tyre-kickers into my designers’ calendars?',
        a: 'That is what the qualifying questions are for. You set the minimum budget band, the service area and the timeline you’ll take. Homeowners outside them get a polite, genuinely useful answer, sometimes a referral, and never a designer’s evening.',
      },
    ],
    related: ['home-renovation-quote-follow-up-vaughan', 'kitchen-company-google-reviews-oakville'],
    metadata: {
      title: 'Mississauga Kitchen Renovation Leads: Modeled Case Study',
      description:
        'How a Mississauga kitchen renovation company books 35% more design consultations from the same ad spend with 60-second lead response on every channel. Full math shown.',
    },
  },

  // ---------------------------------------------------------------------
  // 2. Dead quotes — Vaughan kitchen, bath & basement contractor
  // ---------------------------------------------------------------------
  {
    slug: 'home-renovation-quote-follow-up-vaughan',
    client: 'Kitchen, bath & basement contractor, Vaughan',
    monogram: 'HR',
    category: 'Home renovation · GTA',
    image: {
      src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80',
      alt: 'Bright renovated kitchen with white cabinets',
    },
    headlineResult:
      'Turned 2,100 dead quotes into 27 booked consultations and ≈ $226,000 of signed work — without buying a single new lead.',
    metric: '$226K',
    metricLabel: 'Signed from old quotes in 90 days',
    summary:
      'A Vaughan renovation contractor had three years of quotes that never signed sitting in a CRM. A CASL-compliant reactivation campaign and a proper quote follow-up sequence turn that list into booked consultations with no new ad spend.',

    challenge:
      'Every renovation company is sitting on a gold mine it calls “the CRM”. This contractor does kitchens, bathrooms and basements across York Region and had 2,100 enquiries and quotes from the last three years that never signed. The follow-up process was one email after the quote went out, then silence. Nobody chased because everyone was busy, and chasing felt pushy. But most renovation quotes don’t die because the homeowner said no. They die because the homeowner got busy, the budget needed a rethink, or the timing slipped a season, and nobody called back when it came right. Meanwhile the business kept paying for new leads to replace the ones it had already paid for once.',
    solution:
      'We did two things. First, a one-off reactivation. We cleaned and de-duplicated the CRM and spreadsheets, tagged every contact by project type and last contact date, and filtered for consent under Canada’s anti-spam law (CASL). Only the 610 contacts the business can lawfully message got anything automated. They received a short, human text asking whether the project was still on the cards, and an AI agent handled every reply: answering questions, offering phasing or financing where the contractor has it, and booking a fresh consultation. Second, a permanent fix. Every new quote now gets five touches over 21 days instead of one email: a check-in, a way to reduce scope, a design tweak, an install-slot nudge, and a respectful “should I close your file?” Any homeowner who replies with an objection goes straight to the owner with a suggested answer.',
    results: [
      { metric: '27', label: 'Booked re-consultations' },
      { metric: '+7 pts', label: 'Quote close rate (22% → 29%)' },
      { metric: '$0', label: 'Extra ad spend' },
    ],
    scorecard: [
      { label: 'Past contacts in CRM & spreadsheets', before: '2,100', after: '2,100' },
      { label: 'Contacts you can lawfully message (CASL)', before: 'Unknown', after: '610' },
      { label: 'Warm leads from the old list', before: '0', after: '41' },
      { label: 'Booked re-consultations', before: '0', after: '27' },
      { label: 'Signed projects from the old list (90 days)', before: '0', after: '≈ 6 (≈ $226,000)' },
      { label: 'Follow-up touches per new quote', before: '1 email', after: '5 over 21 days' },
      { label: 'Quote close rate', before: '22%', after: '29%' },
      { label: 'Signed projects / month from new quotes', before: '6.6', after: '8.7' },
      { label: 'Extra signed value / month from follow-up', before: '—', after: '≈ $80,000' },
      { label: 'Ad spend for all of the above', before: '$0', after: '$0' },
    ],
    included: [
      {
        title: 'CRM and spreadsheet clean-up',
        body: 'De-duplicated, tagged by project type, city and last contact date, so you finally know what is actually in there.',
      },
      {
        title: 'CASL consent filter',
        body: 'Only contacts inside CASL’s consent windows get automated messages. Everyone else is left alone. It keeps you compliant, and it’s also why the campaign works: people who remember you reply.',
      },
      {
        title: 'Reactivation campaign with an AI reply agent',
        body: 'Short, human texts and emails, with every reply handled in minutes — questions answered, objections logged, consultations booked into your calendar.',
      },
      {
        title: 'Five-touch quote follow-up',
        body: 'Every new quote gets a check-in, a scope-down option, a design tweak, an install-slot nudge and a respectful close-out over 21 days. Nothing goes quiet by accident again.',
      },
      {
        title: 'Objection routing to the owner',
        body: '“Too expensive”, “bad timing”, “went with someone else” — each lands on the owner’s phone with the context and a suggested reply, while the homeowner is still in the conversation.',
      },
      {
        title: 'Past-customer programme',
        body: 'Twelve-month check-ins, referral asks, and next-project prompts — the kitchen customer from last year is next year’s basement.',
      },
    ],
    timeline: [
      { when: 'Week 1', what: 'CRM and spreadsheet export, de-duplication, tagging and the CASL consent audit. You see the real size of the list you can lawfully work.' },
      { when: 'Week 2', what: 'Messages written with the owner, in the owner’s voice. A 50-contact test batch goes out first so every reply is read before scaling.' },
      { when: 'Weeks 3–5', what: 'Full reactivation run in daily batches. The agent works every reply, and hot homeowners go to the owner the same hour.' },
      { when: 'Week 4 onward', what: 'Five-touch follow-up switched on for every new quote, permanently.' },
      { when: 'Day 90', what: 'Signed-work review against this model, line by line.' },
    ],
    investment: INVESTMENT,
    modeled: {
      basis:
        'This models a typical York Region kitchen, bath and basement contractor from standard GTA renovation-market inputs, not a named client.',
      assumptions: [
        { label: 'Currency', value: 'Canadian dollars' },
        { label: 'Past contacts (three years)', value: '2,100' },
        { label: 'Lawfully messageable under CASL', value: '610 (29%)' },
        { label: 'Reply rate', value: '15% → 92 replies' },
        { label: 'Replies that are interested', value: '45% → 41' },
        { label: 'Interested → booked consultation', value: '65% → 27' },
        { label: 'Consultation show rate', value: '88%' },
        { label: 'Consultation → signed contract', value: '25%' },
        { label: 'Average signed project (kitchen / bath / basement blend)', value: '$38,000' },
        { label: 'New quotes issued', value: '30 / month' },
        { label: 'Quote close rate', value: '22% → 29%' },
        { label: 'Messaging fees (under $100, ignored)', value: '—' },
      ],
    },
    faqs: [
      {
        q: 'Is it legal to text old renovation leads in Ontario?',
        a: 'Only some of them. Canada’s Anti-Spam Legislation (CASL) covers commercial texts and emails. Implied consent lasts six months after someone enquires, and two years after they buy from you. Express consent lasts until they withdraw it. Every message also has to identify your business and offer an easy way to opt out. That is why this model messages 610 people, not 2,100. It is not legal advice, and your audit checks your own list.',
      },
      {
        q: 'What is database reactivation?',
        a: 'Going back to the people who already enquired or took a quote and never signed, with a short, genuine message asking whether the project is still happening. For renovators it’s usually the cheapest source of booked consultations there is: you already paid to acquire these homeowners, and many of them simply stalled on timing or budget rather than choosing a competitor.',
      },
      {
        q: 'How many times should I follow up on a renovation quote?',
        a: 'More than once, and fewer than people fear. Five useful touches over about three weeks works well: a check-in, a way to reduce scope or phase the work, a design option, a scheduling nudge, and a polite close-out. The rule is that every touch gives the homeowner something new. “Just checking in” five times is chasing. Five different reasons to talk is service.',
      },
      {
        q: 'Won’t follow-up make us look desperate?',
        a: 'Silence costs more. Most homeowners who go quiet after a quote haven’t chosen someone else. They got busy, or the number needs a rethink. A sequence that offers a smaller scope, phasing or an install date reads as a company that wants the job and is organised enough to deliver it, which is exactly who homeowners want in their house for six weeks.',
      },
    ],
    related: ['kitchen-renovation-lead-response-mississauga', 'kitchen-company-google-reviews-oakville'],
    metadata: {
      title: 'Vaughan Renovation Quote Follow-Up: Modeled Case Study',
      description:
        'How a Vaughan home renovation contractor turns 2,100 dead quotes into 27 booked consultations and ≈$226K of signed work — CASL-compliant, with no new ad spend.',
    },
  },

  // ---------------------------------------------------------------------
  // 3. Reviews — Oakville custom kitchen & millwork studio
  // ---------------------------------------------------------------------
  {
    slug: 'kitchen-company-google-reviews-oakville',
    client: 'Custom kitchen & millwork studio, Oakville',
    monogram: 'KM',
    category: 'Kitchens & millwork · GTA',
    image: {
      src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
      alt: 'Modern custom kitchen interior with an island',
    },
    headlineResult:
      'Google reviews from 34 to 73 in six months, and the rating up to 4.8★ — without gating or paying for a single one.',
    metric: '34 → 73',
    metricLabel: 'Google reviews in six months',
    summary:
      'An Oakville custom kitchen studio did beautiful work and had 34 Google reviews to show for it. Asking every customer at the right moment roughly doubles reviews in six months and lifts calls from its Google profile.',

    challenge:
      'This studio’s work sells itself in person and barely registers on Google. Seven people, about five completed kitchens a month, an average project of $85,000 — and 34 Google reviews at 4.6★. Competitors across Oakville and Burlington sit above it in the map pack with three or four times as many. Reviews happened when someone remembered to ask, which in practice was about one customer in three, usually by email with the final invoice: the one moment in a renovation when the homeowner is least in the mood to do you a favour. Meanwhile the studio’s Google profile drove about 35 calls a month and could have been driving far more.',
    solution:
      'We moved the ask to the moment the homeowner is happiest: the reveal. That’s the day the counters go in and the kitchen finally looks like the rendering, not the day the last invoice lands. Every customer, without exception, gets a short personal text that day with a one-tap link to the studio’s Google review page, a nudge to add a photo of the finished kitchen, and a HomeStars link two days later, never on the same day. Check-ins at demolition, cabinet install and countertop template catch problems while they can still be fixed, which is what actually protects the rating. Unhappy signals go straight to the owner to resolve, and those customers are still free to post a review. That’s Google’s rule, and it’s also the only approach that keeps a rating believable. Every review gets a reply within 24 hours, drafted in the owner’s voice and approved by them. A one-time campaign also reaches the past two years of customers who were never asked.',
    results: [
      { metric: '73', label: 'Google reviews (from 34)' },
      { metric: '4.8★', label: 'Google rating (from 4.6★)' },
      { metric: '+30%', label: 'Calls from Google profile' },
    ],
    scorecard: [
      { label: 'Customers asked for a review', before: '~1 in 3', after: 'Every customer' },
      { label: 'When the ask arrives', before: 'With the final invoice', after: 'On reveal day' },
      { label: 'Google reviews', before: '34', after: '73' },
      { label: 'Google rating', before: '4.6★', after: '4.8★' },
      { label: 'HomeStars reviews', before: '11', after: '25' },
      { label: 'Reviews answered within 24 hours', before: 'Occasionally', after: 'Every one' },
      { label: 'Calls from Google Business Profile / month', before: '35', after: '45' },
      { label: 'Ad spend', before: '$0', after: '$0' },
    ],
    included: [
      {
        title: 'Milestone check-ins',
        body: 'Short check-ins at demolition, cabinet install and countertop template, so problems surface while they can still be fixed, not in a 3-star review.',
      },
      {
        title: 'Reveal-day review request',
        body: 'A personal text with a one-tap Google review link on the day the kitchen comes together. HomeStars follows two days later, never on the same day.',
      },
      {
        title: 'Every customer asked, no gating',
        body: 'Nobody is filtered out and nobody is paid or discounted for a review. Both are against Google’s policies, and both are how profiles get flagged.',
      },
      {
        title: 'Photo prompt',
        body: 'Customers are invited to add a photo of the finished kitchen. A real photo from a real homeowner is the most persuasive thing on a renovator’s profile.',
      },
      {
        title: 'Owner-voice replies within 24 hours',
        body: 'Every review, good or bad, gets a reply drafted in your voice and approved by you. Future customers read the replies as closely as the reviews.',
      },
      {
        title: 'Past-customer campaign',
        body: 'A one-time, paced ask to customers from the last two years who were never asked, within CASL’s two-year window for past purchasers.',
      },
    ],
    timeline: [
      { when: 'Week 1', what: 'Google Business Profile and HomeStars audit. Milestone dates pulled from the project schedule so every ask lands on the right day.' },
      { when: 'Week 2', what: 'Messages written in the owner’s voice. Past-customer list checked for consent.' },
      { when: 'Weeks 3–5', what: 'Past-customer campaign sent in small daily batches. A sudden burst of reviews looks unnatural and risks Google filtering them, so it’s deliberately paced.' },
      { when: 'Months 2–6', what: 'Every completed project gets the milestone check-ins and the reveal-day ask. Monthly report on review count, rating and profile calls against the three nearest competitors.' },
    ],
    investment: INVESTMENT,
    modeled: {
      basis:
        'This models a typical Oakville custom kitchen and millwork studio from standard GTA renovation-market inputs, not a named client.',
      assumptions: [
        { label: 'Currency', value: 'Canadian dollars' },
        { label: 'Completed projects', value: '5 / month' },
        { label: 'Average project', value: '$85,000' },
        { label: 'Starting point', value: '34 Google reviews at 4.6★, 11 on HomeStars' },
        { label: 'Past customers never asked (24 months)', value: '90 → 30% post (27)' },
        { label: 'New customers over six months', value: '30 → 40% post (12)' },
        { label: 'Average rating of new reviews', value: '4.9★' },
        { label: 'Asked customers who also post on HomeStars', value: '12% → 14' },
        { label: 'Calls from Google Business Profile', value: '35 / month, modeled +30%' },
      ],
    },
    faqs: [
      {
        q: 'How many Google reviews does a GTA kitchen renovation company need?',
        a: 'There’s no magic number, but there is a benchmark: the companies above you in the local map pack for “kitchen renovation” in your city. You want to be within reach of their count, with a better rating and more recent reviews. Recency matters almost as much as volume. A profile with 70 reviews and one from last week beats one with 150 and nothing since spring.',
      },
      {
        q: 'Can we only ask happy customers to leave a Google review?',
        a: 'No. Selectively asking only happy customers, known as review gating, is against Google’s review policies and can get reviews removed or a profile penalised. Ask everyone. What you can do is check in during the project, so problems get fixed before the reveal and fewer customers have anything to complain about.',
      },
      {
        q: 'Can we offer a discount or gift card for a review?',
        a: 'No. Google prohibits incentivised reviews, and in Canada the Competition Bureau treats misleading reviews as deceptive marketing. The strategy that works is simpler: ask every customer, at the right moment, with a link that takes one tap.',
      },
      {
        q: 'When is the best time to ask a renovation customer for a review?',
        a: 'On reveal day — when the counters go in or at the final walkthrough, when the homeowner is standing in the kitchen they have been waiting months for. Not with the final invoice. The same customer asked at the reveal is far more likely to leave a review, and far more likely to add a photo.',
      },
    ],
    related: ['kitchen-renovation-lead-response-mississauga', 'home-renovation-quote-follow-up-vaughan'],
    metadata: {
      title: 'Oakville Kitchen Company Google Reviews: Modeled Case Study',
      description:
        'How an Oakville kitchen and millwork studio grows Google reviews from 34 to 73 and its rating to 4.8★ in six months — no review gating, no incentives, full model shown.',
    },
  },
];
