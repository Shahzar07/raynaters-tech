// ============================================================
// RAYNATERS TECH — All copy lives here.
// Edit copy without touching JSX.
//
// Positioning (per the Nov 2026 funnel audit):
//   ONE market  — Australia first.
//   ONE offer   — the free 30-minute Agent Audit.
//   ONE promise — it pays for itself in 90 days or we keep building.
//   TWO tracks  — front desk (lost enquiries) / back office (lost hours).
// Every section below has to serve one of those. If it doesn't, cut it.
// ============================================================

export const CONTENT = {
  brand: {
    name: 'Raynaters',
    full: 'Raynaters Tech Inc.',
    tagline: 'Find the work. Automate the work. Prove the money.',
    bookHref: '/book',
    email: 'team@raynaters.tech',
  },

  announcement: {
    text: 'Taking 6 new Australian builds this month — free 30-minute Agent Audit, no pitch deck',
  },

  nav: {
    links: [
      { label: 'The problem', href: '#problem' },
      { label: 'What we automate', href: '#automate' },
      { label: 'Who it’s for', href: '#fit' },
      { label: 'Proof', href: '#proof' },
      { label: 'About', href: '/about' },
    ],
    cta: 'Book My Free Audit',
  },

  // ---------------------------------------------------------
  // 1. HERO — problem + outcome + one CTA + three numbers
  // ---------------------------------------------------------
  hero: {
    eyebrow: 'For Australian businesses',
    // Line breaks are authored, not accidental — "need more employees."
    // has to land on one line, so the break goes after "doesn't".
    h1Lines: ['Your business doesn’t', 'need more employees.', 'It needs better AI systems.'],
    sub: 'Every week your team burns hours on work a system should be doing — answering, chasing, typing, reporting. We find that work, build the system that replaces it, and hand you the hours back. First system live in 7 days, and it pays for itself inside 90 —',
    // Rendered as a highlighted plate at the end of the paragraph.
    subHighlight: 'or we work for free.',
    primaryCta: 'Show Me What I Can Automate',
    secondaryCta: 'See what we automate',
    ctaNote: 'Free 30-minute Agent Audit · Written ROI projection in 48 hours · No pitch deck',
    proof: [
      { value: '47,283+', label: 'hours reclaimed' },
      { value: '23+', label: 'systems live' },
      { value: '<90 days', label: 'average time to ROI' },
    ],
    trustLabel: 'Built on the stack your business already runs on',
    trustLogos: [
      { name: 'n8n', logo: '/n8n-color.png' },
      { name: 'Zapier', logo: '/Zapier-logo-removebg-preview.png' },
      { name: 'Make', logo: '/make-logo-removebg-preview.png' },
      { name: 'OpenAI', logo: '/Openai--Streamline-Svg-Logos.svg' },
      { name: 'Anthropic', logo: '/Anthropic-Icon--Streamline-Svg-Logos.svg' },
      { name: 'Claude', logo: '/claude.png' },
      { name: 'Google Gemini', logo: '/Google-Gemini--Streamline-Svg-Logos.svg' },
      { name: 'GoHighLevel', logo: '/ghl.webp' },
      { name: 'Airtable', logo: '/Airtable--Streamline-Svg-Logos.svg' },
      { name: 'Notion', logo: '/Notion--Streamline-Svg-Logos.svg' },
      { name: 'Quickbooks', logo: '/quickbooks.svg' },
      { name: 'LangChain', logo: '/langchain-removebg-preview.png' },
      { name: 'Python', logo: '/Python--Streamline-Svg-Logos.svg' },
      { name: 'Relevance AI', logo: '/relevance ai.png' },
      { name: 'Pipedream', logo: '/Pipedream--Streamline-Svg-Logos.svg' },
      { name: 'Vercel', logo: '/Vercel--Streamline-Svg-Logos.svg' },
      { name: 'HubSpot', logo: '/logos/hubspot.svg' },
      { name: 'Next.js', logo: '/logos/nextjs.svg' },
      { name: 'Django', logo: '/logos/django.svg' },
      { name: 'OpenCV', logo: '/logos/opencv.svg' },
      { name: 'UiPath', logo: '/logos/uipath.svg' },
      { name: 'Stripe', logo: '/logos/stripe.svg' },
      { name: 'Supabase', logo: '/logos/supabase.svg' },
      { name: 'Google Sheets', logo: '/logos/googlesheets.svg' },
      { name: 'PyTorch', logo: '/logos/pytorch.svg' },
    ],
  },

  // ---------------------------------------------------------
  // 2. PROBLEM — make them recognise themselves
  // ---------------------------------------------------------
  problem: {
    eyebrow: 'The real cost',
    title: 'How much is manual work costing you?',
    sub: 'Not the software bill. The hours. Every one of these is a job your team is doing by hand right now, on salary, every single week.',
    items: [
      { cost: '~14 hrs / week', label: 'Missed enquiries', body: 'Calls that ring out. Forms that sit unanswered overnight. The enquiry goes to whoever replied first — and that wasn’t you.' },
      { cost: '~9 hrs / week', label: 'Slow follow-up', body: 'The lead was interested on Tuesday. Someone got to them on Friday. By then they’d already booked someone else.' },
      { cost: '~11 hrs / week', label: 'Repeat questions', body: '“What are your hours?” “Do you service my area?” “How much is it?” Answered by a human, hundreds of times a month.' },
      { cost: '~7 hrs / week', label: 'Manual reporting', body: 'Someone exports the CSV. Someone pastes it into the sheet. Someone rebuilds the same report they built last month.' },
      { cost: '~8 hrs / week', label: 'Data entry', body: 'Copying details from the inbox to the CRM to the invoice tool. Three systems that should have been talking to each other.' },
      { cost: '~6 hrs / week', label: 'Scheduling & admin', body: 'Booking, rescheduling, chasing confirmations, updating records. Work that never ends and never grows revenue.' },
    ],
    closer: 'At an average loaded salary, that is real money leaving the business every week — and none of it shows up as a line item you can cancel.',
  },

  // ---------------------------------------------------------
  // 3. SOLUTION — two tracks, problem-led not service-led
  // ---------------------------------------------------------
  automate: {
    eyebrow: 'What we build',
    title: 'If the work repeats, it can probably be automated.',
    sub: 'Every business we work with loses money in one of two places. Find yours — that is where we start.',
    tracks: [
      {
        key: 'front',
        marker: 'Track 01',
        name: 'Front desk',
        headline: 'You’re losing money before the job starts.',
        who: 'Trades · Clinics · Dental · Allied health · Salons · Law firms · Real estate',
        symptom: 'Enquiries come in. Not all of them get answered fast enough, and you can’t tell which ones you lost.',
        systems: [
          { problem: 'Missing calls and enquiries?', solution: 'AI Receptionist Workforce', body: 'Answers every call and web enquiry in seconds, day or night. Qualifies the job, books it into your calendar, and flags emergencies to a human.' },
          { problem: 'Leads going cold?', solution: 'AI Follow-Up Workforce', body: 'Chases every new enquiry by SMS and email on a sequence that doesn’t forget, until they book or tell you to stop.' },
          { problem: 'Wasting time on tyre-kickers?', solution: 'AI Lead Qualification Workforce', body: 'Scores and routes every lead against your own criteria, so your team only spends time on the ones worth calling.' },
          { problem: 'Pipeline gone quiet?', solution: 'AI Sales Rep Workforce', body: 'Works your pipeline like a rep who never forgets — books meetings, handles objections by message, and hands over a warm call with full context.' },
          { problem: 'Marketing running on guesswork?', solution: 'AI Marketing Workforce', body: 'Writes and schedules campaigns from what your own data says is converting, then reports on what actually brought enquiries in.' },
          { problem: 'Old leads sitting dead in the CRM?', solution: 'AI Reactivation Workforce', body: 'Reopens the database you already paid for — every past enquiry and closed-lost deal worked again, so revenue comes from contacts you own.' },
        ],
      },
      {
        key: 'back',
        marker: 'Track 02',
        name: 'Back office',
        headline: 'You’re losing money after the job starts.',
        who: 'E-commerce · SaaS · Agencies · Wholesale · Professional services (6–200 staff)',
        symptom: 'The work gets won. Then it costs you three people’s worth of admin to actually deliver and report on it.',
        systems: [
          { problem: 'Same support tickets every day?', solution: 'AI Support Workforce', body: 'Resolves tier-one questions instantly from your own docs and order data, and hands the genuinely hard ones to your team with full context.' },
          { problem: 'Rebuilding the same report?', solution: 'AI Reporting Workforce', body: 'Pulls from your tools on a schedule and delivers the finished report to the inbox or channel that needs it. No exports, no pasting.' },
          { problem: 'Drowning in admin and data entry?', solution: 'AI Operations Workforce', body: 'Moves data between your systems, updates records, sequences onboarding, and chases what’s outstanding — without anyone remembering to.' },
          { problem: 'Chasing invoices and reconciling by hand?', solution: 'AI Finance Workforce', body: 'Raises and chases invoices, reconciles payments against your ledger, and flags what is overdue before it becomes a cash-flow problem.' },
          { problem: 'Onboarding falling through the cracks?', solution: 'AI Onboarding Workforce', body: 'Runs every new client or hire through the same sequence — documents sent, accounts created, nothing depending on who remembered what.' },
          { problem: 'Hiring eating your week?', solution: 'AI Recruiting Workforce', body: 'Screens every applicant against your criteria, books the ones worth meeting straight into your calendar, and replies to the rest properly.' },
        ],
      },
    ],
  },

  // ---------------------------------------------------------
  // 4. ICP — the section that ends the guessing
  // ---------------------------------------------------------
  fit: {
    eyebrow: 'Read this before you book',
    title: 'Who this is for — and who it isn’t.',
    sub: 'We’d rather you close the tab now than waste 30 minutes on a call that was never going to work. Be honest with yourself here.',
    forTitle: 'This is for you if',
    forItems: [
      'You run an established Australian business doing real revenue — not a pre-launch idea.',
      'You have 3–200 staff and at least one person whose week is mostly repetitive work.',
      'You can point at a specific workflow that eats hours: enquiries, follow-up, support, reporting, admin.',
      'You want the automation measured in dollars and hours — not in “AI transformation”.',
      'You can make the buying decision, or you’re one conversation away from the person who can.',
    ],
    againstTitle: 'Close this tab if',
    againstItems: [
      'You want a chatbot bolted onto your website and nothing else. That’s a $30/month tool, not us.',
      'You have no repetitive workflow yet — you’re too early, and we’ll tell you so on the call.',
      'You want the cheapest possible quote regardless of whether the system actually holds up.',
      'Nobody internally will own the handover. Automation still needs one human who cares.',
      'Nobody on your side can give us an hour. Seven days is fast, but it still needs one person to hand over logins and answer questions.',
    ],
    closer: 'If you’re in the left column, the audit is genuinely free and genuinely useful. If you’re in the right, we’ll say so in the first ten minutes.',
  },

  // ---------------------------------------------------------
  // 5. ROI METHOD — the guarantee, made methodical
  // ---------------------------------------------------------
  roi: {
    eyebrow: 'How the promise actually works',
    title: 'Your ROI is measured — not promised blindly.',
    sub: 'Every claim on this page came out of this process. It runs the same way on your business, and you see the numbers at every step.',
    steps: [
      { n: '01', label: 'Find the highest-ROI workflow', body: 'On the audit call we map where the hours actually go, and pick the single workflow with the biggest gap between effort and value.' },
      { n: '02', label: 'Calculate the expected impact', body: 'Hours × loaded cost × frequency, against a fixed build price. You get this in writing within 48 hours — before you commit to anything.' },
      { n: '03', label: 'Build and deploy', body: 'Fixed scope, fixed price, fixed timeline. First agent live in 7 days on infrastructure you own.' },
      { n: '04', label: 'Measure what actually happened', body: 'We instrument it from day one: hours saved, response times, tickets deflected, revenue recovered. Real numbers, not a dashboard screenshot.' },
      { n: '05', label: 'Keep optimising until it pays', body: 'If the measured return hasn’t covered the build cost by day 90, we keep iterating at no management fee until it does. Up to 12 months.' },
    ],
  },

  // ---------------------------------------------------------
  // 6. PROOF — the strongest three numbers first
  // ---------------------------------------------------------
  proof: {
    eyebrow: 'The receipts',
    title: 'What’s already running.',
    sub: 'Live deployments across Australia, the UK, US and EU. Client names redacted; the hours are real and available on request.',
    headline: [
      { value: '47,283+', label: 'operational hours reclaimed', note: 'Measured Mar 2025 → May 2026' },
      { value: '23+', label: 'AI systems live in production', note: 'Across 4 markets' },
      { value: '<90 days', label: 'average time to full ROI', note: 'Median across deployments' },
      { value: '$2.4M+', label: 'operational cost removed', note: 'Compounded to date' },
    ],
    cases: [
      {
        vertical: 'Trades · Australia',
        problem: 'Missing 4 in 10 calls during jobs',
        solution: 'AI Receptionist Workforce',
        result: '11-second average answer',
        detail: 'Every call answered, qualified and booked while the crew is on the tools. Emergency jobs flagged straight to the phone.',
      },
      {
        vertical: 'Clinic · UK',
        problem: 'Reception buried in repeat questions',
        solution: 'AI Support Workforce',
        result: '412 enquiries / week deflected',
        detail: 'Front desk stopped answering the same eight questions and went back to looking after patients in the room.',
      },
      {
        vertical: 'E-commerce · DTC',
        problem: '30 hrs/week on inventory + service',
        solution: 'Ops + Support Workforces',
        result: '30 hrs / week returned',
        detail: 'Team stopped working weekends inside the first month. Returns process handled end to end.',
      },
      {
        vertical: 'B2B SaaS · US',
        problem: 'Support couldn’t scale with signups',
        solution: 'AI Support Workforce',
        result: '5× volume, zero new hires',
        detail: 'Agent now resolves tier-one better than the contractors previously onboarded for it.',
      },
    ],
  },

  // ---------------------------------------------------------
  // 7. GUARANTEE
  // ---------------------------------------------------------
  guarantee: {
    eyebrow: 'Risk reversal — in writing',
    title: 'Two ways out. Both of them yours.',
    layers: [
      {
        n: '01',
        label: '14-day full refund',
        body: 'No questions, no forms, no “are you sure?” emails. Change your mind in the first two weeks and we wire it back same-day.',
      },
      {
        n: '02',
        label: 'The 90-day ROI promise',
        body: 'If your system hasn’t paid for itself within 90 days of going live, we keep building and optimising at no management fee until it does — for up to 12 months.',
      },
    ],
    closer: 'We’ve never had to invoke layer 02. We’re not afraid to.',
  },

  // ---------------------------------------------------------
  // 8. THE OFFER — what they walk away with, stacked.
  // No numbers on this page. The call is the only ask.
  // ---------------------------------------------------------
  offer: {
    eyebrow: 'The offer',
    title: 'Everything below is yours before you pay us a cent.',
    sub: 'Thirty minutes on a call with the founder. You keep all of it whether you hire us or never speak to us again.',
    products: [
      {
        marker: '01',
        kicker: 'Start here',
        brand: 'Raynaters',
        name: 'Growth OS',
        blurb:
          'One system, aimed at the biggest leak in your business. We take the single workflow costing you the most hours, build one agent around it, and instrument it so the return shows up as a number you can check — not a status update.',
        forWho: 'One workflow, one agent, one clear number to beat.',
        includes: [
          'Free 30-minute Agent Audit with the founder',
          'A full map of where your hours are going',
          'Written ROI projection within 48 hours',
          'One agent live in 7 days',
          'Connected to the tools you already run',
          'Runs on infrastructure you own and control',
          'Instrumented from day one so the return is provable',
          'Full documentation + video walkthrough',
          '90 days post-launch support',
          '14-day no-questions refund',
          '90-day payback promise',
        ],
        cta: 'Start with Growth OS',
        badge: '',
        featured: false,
      },
      {
        marker: '02',
        kicker: 'Scale everything',
        brand: 'Raynaters',
        name: 'AI Workforces',
        blurb:
          'A workforce, not a tool. Front desk and back office agents running together across your whole stack — answering, qualifying, following up, reporting and reconciling — with every hour they hand back measured against what the build cost.',
        forWho: 'Multiple connected workflows across front desk and back office.',
        includes: [
          'Everything in Growth OS',
          'Front desk + back office agents working as one',
          'Full integration across your entire stack',
          'Unlimited workflows inside the agreed scope',
          'Human handoff rules built to your escalation policy',
          'Custom reporting to the inbox or channel you choose',
          'A named engineer and priority build queue',
          'Quarterly optimisation reviews for the first year',
          'Documentation + video handover for the whole system',
          '90-day ROI promise written into the contract',
        ],
        cta: 'Book My Free Audit',
        badge: 'Most common',
        featured: true,
      },
    ],
    stackLabel: 'What the free audit gets you',
    stack: [
      {
        n: '01',
        label: 'A map of every hour you’re losing',
        body: 'We walk your operation workflow by workflow and show you exactly where the repetitive work is, ranked by what it costs you.',
      },
      {
        n: '02',
        label: 'A written ROI projection in 48 hours',
        body: 'Hours × loaded cost × frequency, on your actual workflows. In writing, in your inbox, two days after we speak.',
      },
      {
        n: '03',
        label: 'The exact system we’d build, scoped',
        body: 'What we’d automate first, what it connects to, how long it takes and what it has to beat to be worth it.',
      },
      {
        n: '04',
        label: 'Three fixes you can action yourself',
        body: 'Even if we’re not a fit — especially if we’re not a fit. You leave with work you can do on Monday without us.',
      },
    ],
    // ---- The long close. This is the section that has to do the selling. ----
    close: {
      eyebrow: 'Let’s do the maths',
      title: 'Doing nothing is the most expensive option on this page.',
      lead: 'Nobody sends you an invoice for the hours. That is exactly why they never get fixed.',
      paragraphs: [
        'Right now, someone you pay a full salary is spending most of their week answering the same eight questions, chasing leads that have already gone cold, and retyping the same details between three systems that should have been talking to each other years ago.',
        'That cost never shows up as a line item you can cancel. It does not appear in a report. It just leaves, quietly, every Friday — and it has been leaving every Friday for as long as you have been open.',
        'Waiting a quarter does not pause it. It compounds it. The enquiries that rang out this morning are already booked with whoever picked up first, and you will never see them in your numbers, because they never made it far enough to become a lead.',
      ],
      compareLabel: 'Two versions of your next 90 days',
      compare: [
        {
          tone: 'bad',
          label: 'If you close this tab',
          items: [
            'The same hours walk out again next week. And the week after.',
            'Your team stays busy doing work no customer has ever thanked you for.',
            'The competitor who answers faster keeps the enquiries you missed.',
            'In twelve months this is a full salary you paid and got nothing back for.',
          ],
        },
        {
          tone: 'good',
          label: 'If you book the call',
          items: [
            'Thirty minutes and you know exactly where the money is going.',
            'A written ROI projection in 48 hours — yours to keep either way.',
            'Your first system live in 7 days, on infrastructure you own.',
            'It pays for itself inside 90 days, or we keep building for free.',
          ],
        },
      ],
      objectionLabel: 'The three things people say right before they book',
      objections: [
        {
          q: '“We’re too busy right now.”',
          a: 'Busy is the symptom, not the objection. Busy is what a business looks like when the systems are missing. The call takes 30 minutes, you do zero preparation, and you leave with a plan whether you hire us or not.',
        },
        {
          q: '“We tried automation before and it broke.”',
          a: 'So did most of the businesses we work with. What usually broke was a tool bought without a workflow behind it and nobody measuring whether it worked. We map the workflow first and instrument it from day one — that is the only reason we can put a promise against the result.',
        },
        {
          q: '“We’ll look at it next quarter.”',
          a: 'Next quarter costs you the same hours as this one, plus this one. Nothing on this page gets cheaper by waiting, and the audit is free — so the only thing waiting protects you from is finding out the number.',
        },
      ],
      guaranteeLabel: 'And if you do decide to build with us',
      askTitle: 'So the only question left is whether you want the number.',
      guarantees: [
        'Fourteen days to change your mind, refunded same-day, no forms and no “are you sure” emails.',
        'If the system hasn’t paid for itself within 90 days of going live, we keep building at no management fee until it does — for up to 12 months.',
      ],
      scarcity: 'Six builds a month. That’s the honest limit, and it’s why the audit is free.',
      cta: 'Claim My Free Agent Audit',
      ctaNote: '30 minutes · No pitch deck · No obligation · You keep everything either way',
      ps: 'P.S. — If we look at your operation and decide there is nothing worth automating yet, we will say so on the call and send you three fixes you can action yourself. There is no version of this where you lose. The worst outcome available to you is a free plan and half an hour back.',
    },
  },

  // ---------------------------------------------------------
  // 9. FOUNDER NOTE — what the audit actually is
  // ---------------------------------------------------------
  personalNote: {
    eyebrow: 'What you actually get',
    name: 'Shahzar',
    role: 'Founder, Raynaters Tech',
    sessionName: 'Business On Autopilot Session™',
    paragraphs: [
      'Every founder I speak to tells me the same thing. “We’re busy.”',
      'But being busy was never the problem. Being dependent on people for work the system should already be doing — that’s the problem.',
      'So every engagement starts the same way. We find the bottleneck. Then we engineer the system that removes it.',
    ],
    bulletsLead: 'That’s exactly what we’ll do together on your Business On Autopilot Session™:',
    bullets: [
      'We walk through your operation and identify precisely which workflows are automatable — and which honestly aren’t worth it.',
      'You get a written ROI projection within 48 hours. Actual numbers on actual workflows, not vibes.',
      'If we’re a fit, you get a fixed-scope deployment quote. One number, no hourly billing games.',
      'If we’re not a fit, I send you three recommendations you can action yourself, for free, and we part ways.',
    ],
    closer: 'You are not committing to anything. You are getting clarity on where the money is going.',
    signature: 'Shahzar — Founder of Raynaters Tech Inc.',
  },

  // ---------------------------------------------------------
  // 9b. VIDEO TESTIMONIALS
  //
  // NOTE: `name` and `role` are intentionally blank — these are real
  // people on camera and nobody should invent an attribution for them.
  // Fill both in and the card renders the name plate automatically;
  // leave them blank and it falls back to "Verified client review".
  // ---------------------------------------------------------
  videoTestimonials: {
    eyebrow: 'In their own words',
    title: 'Don’t take our word for it.',
    sub: 'Unscripted, unedited, recorded on their own phones after the systems went live.',
    items: [
      { src: '/testimonials/testimonial-1.mp4', name: '', role: '', headline: 'On what changed after go-live' },
      { src: '/testimonials/testimonial-2.mp4', name: '', role: '', headline: 'On the build process' },
      { src: '/testimonials/testimonial-3.mp4', name: '', role: '', headline: 'On whether it paid for itself' },
    ],
  },

  // ---------------------------------------------------------
  // 10. TESTIMONIALS — trimmed hard. Nine, not twenty-four.
  // ---------------------------------------------------------
  testimonials: {
    rating: '4.9',
    reviewCount: '127 verified',
    title: 'What they say after the 90 days.',
    sub: 'Operations leads, founders and owners who deployed a system and then had to justify it internally.',
    items: [
      { name: 'Daniel A.', role: 'Head of Ops, fintech', initials: 'DA', quote: 'The audit alone was worth the time. We deployed a single agent and recovered the entire engagement fee inside seven weeks.', platform: 'linkedin', avatar: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=facearea&facepad=2.6&w=240&h=240&q=80' },
      { name: 'Imogen R.', role: 'Founder, B2B SaaS', initials: 'IR', quote: 'I expected slides. I got a working agent in 18 days. The hand-off documentation is the cleanest I have ever seen from a vendor.', platform: 'google', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2.6&w=240&h=240&q=80' },
      { name: 'Samir B.', role: 'CEO, recruiting', initials: 'SB', quote: 'The "free recommendations if we are not a fit" is real — they actually told us we did not need an agent yet. Earned the trust.', platform: 'facebook', avatar: 'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?auto=format&fit=facearea&facepad=2.6&w=240&h=240&q=80' },
      { name: 'Aisha K.', role: 'VP Support, e-commerce', initials: 'AK', quote: 'First-response time went from 3 hours to under a minute. CSAT actually went up — the agent is more patient than my best human.', platform: 'instagram', avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=facearea&facepad=2.6&w=240&h=240&q=80' },
      { name: 'Theo L.', role: 'Founder, marketplace', initials: 'TL', quote: 'They told me what NOT to automate. Refreshing. We shipped two agents instead of seven and ROI hit in week six.', platform: 'facebook', avatar: 'https://images.unsplash.com/photo-1508341591423-4347099e1f19?auto=format&fit=facearea&facepad=2.6&w=240&h=240&q=80' },
      { name: 'Nadia S.', role: 'Director of RevOps', initials: 'NS', quote: 'Our enrichment and routing agent routes leads in 11 seconds. Sales actually trusts the data. That alone justified the build.', platform: 'google', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=facearea&facepad=2.6&w=240&h=240&q=80' },
      { name: 'Elena V.', role: 'Ops Lead, hospitality', initials: 'EV', quote: 'Fixed scope, fixed price, fixed timeline. After three burned automation vendors, I almost did not believe it. Then they shipped.', platform: 'instagram', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=2.6&w=240&h=240&q=80' },
      { name: 'Pooja D.', role: 'Head of CX', initials: 'PD', quote: 'The 90-day guarantee is not a marketing line. They keep iterating. Two of our agents are now on v4 — at no extra cost.', platform: 'google', avatar: 'https://images.unsplash.com/photo-1592621385612-4d7129426394?auto=format&fit=facearea&facepad=2.6&w=240&h=240&q=80' },
      { name: 'Henrik J.', role: 'CTO, climate tech', initials: 'HJ', quote: 'They are the only AI agency that talks about failure modes before they take your money. Then they ship anyway. Rare.', platform: 'x', avatar: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?auto=format&fit=facearea&facepad=2.6&w=240&h=240&q=80' },
    ],
  },

  // ---------------------------------------------------------
  // 11. FAQ
  // ---------------------------------------------------------
  faq: {
    eyebrow: 'Before you book',
    title: 'The questions everyone asks in the first ten minutes.',
    items: [
      {
        q: 'What actually happens on the Agent Audit call?',
        a: 'Thirty minutes with the founder. We map where your team’s hours go, identify which workflows are worth automating, and agree on the one number the system has to beat. You get a written ROI projection within 48 hours. There is no pitch deck and no obligation.',
      },
      {
        q: 'Do I need to know what to automate before the call?',
        a: 'No — working that out is the point of the call. Most owners arrive knowing something is broken but not which workflow is costing the most. We map it with you, rank it by money at stake, and tell you which one to start with. If the honest answer is “none of them yet”, we say that too.',
      },
      {
        q: 'How long until something is actually live?',
        a: 'First agent live in 7 days from kickoff. A full multi-workflow system takes 6–10 weeks depending on how many tools we are integrating.',
      },
      {
        q: 'What happens if it doesn’t pay for itself?',
        a: 'We keep building. If the measured return hasn’t covered the build cost within 90 days of go-live, we continue optimising at no management fee until it does, for up to 12 months. There is also a full refund available in the first 14 days, no questions asked.',
      },
      {
        q: 'Is my data safe? Where does it live?',
        a: 'Every deployment runs on infrastructure you own and control. We never hold your data. Builds are SOC2-aligned by default, and we work to Australian Privacy Principles for Australian clients.',
      },
      {
        q: 'Do I need a technical team to run this afterwards?',
        a: 'No. We hand over with full documentation, video walkthroughs and 90 days of post-launch support included. If you can manage a CRM, you can manage the system.',
      },
      {
        q: 'How is this different from hiring a freelancer on Upwork?',
        a: 'A freelancer ships one workflow and disappears. We deploy a measured system, instrument it so you can prove the return, and put the 90-day ROI promise in the contract. If the number doesn’t land, that becomes our problem, not yours.',
      },
      {
        q: 'Do you only work with Australian businesses?',
        a: 'Australia is our primary market and where new capacity goes first. We also have live deployments across the UK, US, EU and UAE, and we work async across time zones.',
      },
    ],
  },

  // ---------------------------------------------------------
  // 12. FINAL CTA
  // ---------------------------------------------------------
  finalCta: {
    eyebrow: 'One decision left',
    title: 'Find out what your business can automate.',
    sub: 'Thirty minutes. A written ROI projection in 48 hours. Three free recommendations even if we’re not a fit. Six builds a month, and that’s the honest limit.',
    cta: 'Find What You Can Automate',
    secondaryCta: 'Read who it’s for',
    smallprint: 'Free 30-minute Agent Audit · No pitch deck · No obligation',
  },

  footer: {
    tagline: 'Find the work. Automate it. Prove the money.',
    blurb: 'Raynaters Tech builds AI systems for Australian businesses that turn repetitive work into measured hours and dollars back.',
    columns: [
      {
        label: 'Company',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Case studies', href: '/case-studies' },
          { label: 'Resources', href: '/resources' },
          { label: 'Who it’s for', href: '/#fit' },
          { label: 'FAQ', href: '/#faq' },
        ],
      },
      {
        label: 'Connect',
        links: [
          { label: 'Book your Agent Audit', href: '/book' },
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/raynaters-tech-inc-7830a0383/' },
          { label: 'team@raynaters.tech', href: 'mailto:team@raynaters.tech' },
        ],
      },
      {
        label: 'Legal',
        links: [
          { label: 'Privacy Policy', href: '/privacy' },
          { label: 'Terms of Service', href: '/terms' },
        ],
      },
    ],
    copyright: '© 2026 Raynaters Tech Inc. All rights reserved.',
    locale: 'Serving Australia · UK · US · EU',
  },
} as const;

export type Content = typeof CONTENT;
