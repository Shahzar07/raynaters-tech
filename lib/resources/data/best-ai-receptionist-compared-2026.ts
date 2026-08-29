import type { Resource } from '@/lib/resources/types';

const resource: Resource = {
  slug: 'best-ai-receptionist-compared-2026',
  category: 'Buyer’s Guide',
  title: 'Best AI receptionists compared (2026): an honest buyer’s guide',
  excerpt:
    'An honest comparison of AI receptionist options in 2026 — including the categories we don’t win, the pricing trap to avoid, and what to test on a demo.',
  readingTime: '10 min',
  datePublished: '2026-08-29',
  dateModified: '2026-08-29',
  coverImage: {
    src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80',
    alt: 'Two people comparing options across a desk',
  },

  directAnswer:
    'There is no single best one. Off-the-shelf app-based tools win on price and setup speed for solo operators. Mid-market platforms win on integrations. Custom builds win when the agent has to write into your own systems and follow your escalation rules. Pick by what the agent must do, not by feature count.',

  body: [
    { type: 'h2', text: 'Read this before the table' },
    {
      type: 'p',
      text: 'We build custom AI agents. That is a conflict of interest, and pretending otherwise would waste your time.',
    },
    {
      type: 'p',
      text: 'So this guide is written to a rule: every category where we are not the right answer, we say so and name what is. There are three of them, and one of them covers a large share of the people reading this page. If we tried to win every row you would spot it, and rightly stop trusting anything else here.',
    },
    { type: 'p', text: 'What follows is how to actually choose, including how to choose against us.' },

    { type: 'h2', text: 'Start with the job, not the vendor' },
    {
      type: 'p',
      text: 'Almost everyone shops this backwards. They compare feature lists, then discover in month two that the thing they needed was never on the list.',
    },
    {
      type: 'p',
      text: 'Write down what the agent must accomplish on a call, in order:',
    },
    {
      type: 'ul',
      items: [
        'Answer and take a message. The floor. Every option does this.',
        'Answer questions from your own information. Hours, area covered, price ranges, whether you take a particular insurer.',
        'Qualify. Score the job against your criteria so your team only rings the ones worth ringing.',
        'Book. Write into your actual calendar, with your real availability rules, and send a confirmation.',
        'Write to your systems. CRM, job management, ticketing — so nobody re-types anything.',
        'Escalate correctly. Emergencies and complaints to a human phone, immediately, by your rules.',
      ],
    },
    {
      type: 'p',
      text: 'Levels 1 and 2 are a commodity in 2026 and the price reflects it. Everything from level 4 onwards is where products separate — and where most disappointments live, because booking demos beautifully and booking reliably against a messy real-world calendar are different achievements.',
    },

    { type: 'h2', text: 'The comparison, by use case' },
    {
      type: 'table',
      columns: ['Your situation', 'Best fit', 'Typical monthly', 'Why'],
      rows: [
        ['Solo operator, under ~50 calls/mo, just needs answering', 'App-based tool ([VENDOR A])', '£30–£100', 'Self-serve, live in an afternoon. Anything more is overpaying.'],
        ['Cheapest possible viable option', 'DIY on a platform (Vapi/Retell-class + your own build)', '£20–£80 + your time', 'Genuinely cheap if you enjoy the tinkering. Costs you maintenance forever.'],
        ['Nuanced, emotionally sensitive calls', 'Human answering service', '£150–£600 (per-minute)', 'A trained human still beats any agent on genuine nuance.'],
        ['Small business, needs bookings in a standard calendar', 'Mid-market platform ([VENDOR B])', '£150–£400', 'Templated integrations cover the common stack well.'],
        ['Multi-site, custom rules, own CRM/job system', 'Custom build (us, [VENDOR C])', 'Fixed build + running cost', 'The rules are yours, so the agent has to be built to them.'],
        ['Regulated: clinics, dental, legal', 'Custom build with a DPA and defined retention', 'Fixed build + running cost', 'Compliance is configuration, not a feature toggle.'],
      ],
    },

    { type: 'h3', text: 'Where we are honestly not the answer' },
    {
      type: 'ul',
      items: [
        'You are a sole trader taking 40 calls a month. Buy the £50 app. You do not need a custom build and we would be taking your money to solve a problem you do not have. This is the largest group reading this page, and the honest answer for them is: not us.',
        'You want the cheapest number on the page. Someone will always quote lower. If price is the deciding criterion, take theirs — a build we have to strip to win on price will not hold up, and you will blame automation rather than the discount.',
        'You want it live tomorrow. Self-serve tools are live in an afternoon. Ours takes seven days because we map your workflow, connect your systems, and instrument the result. Seven days is fast for that. It is not an afternoon.',
      ],
    },

    { type: 'h3', text: 'Where a custom build genuinely wins' },
    {
      type: 'p',
      text: 'When the agent has to obey rules that only exist inside your business. Which insurers you accept. Which postcodes are same-day. Which jobs are an emergency at 11pm and which wait until Monday. Which technician gets which type of work.',
    },
    {
      type: 'p',
      text: 'Templated products handle templated rules. Once your rules are specific — and in most established service businesses they are — you are either configuring around the product’s assumptions forever, or you build to yours. We also run it on infrastructure you own, which matters when the alternative is your customer data and call recordings living inside someone else’s per-seat platform.',
    },

    { type: 'h2', text: 'The pricing-model trap' },
    { type: 'p', text: 'This costs businesses more than picking the wrong vendor.' },
    {
      type: 'ul',
      items: [
        'Per-minute pricing punishes success. Your bill rises exactly when you are busiest, and every improvement in call handling quality — longer, more thorough conversations that book more work — increases your cost. You end up quietly hoping for shorter calls. That is a bad incentive to build into your phone line.',
        'Per-seat pricing on an internal agent makes no sense. An agent is not a user. If a vendor charges per seat for something that answers your phone, you are paying a licensing model borrowed from software that does not apply here.',
        'Free minutes are an acquisition cost. Model the bill at your real annual volume, in your busiest month, not the trial tier.',
        '“Contact us for pricing” is a negotiating position. Sometimes it is legitimate — genuinely bespoke scope cannot be listed on a page. But if a vendor will not give you a band, they are optimising to price you individually. Ask for the band anyway. Their reaction tells you a lot.',
      ],
    },
    {
      type: 'p',
      text: 'What to prefer: a flat monthly cost you can forecast, or a fixed build price plus a running cost you can see itemised.',
    },

    { type: 'h2', text: 'What to test on the demo — the five minutes that decide it' },
    {
      type: 'p',
      text: 'Vendors will show you a scripted happy path. That call was rehearsed. Do this instead, and do it on a live number:',
    },
    {
      type: 'ul',
      items: [
        'Ask for a human. Immediately, in your first sentence. Count the turns before you get a person or a committed callback time. More than two, walk away.',
        'Ask if it is a robot. It should say so, plainly, and continue. Any evasion is disqualifying.',
        'Interrupt it mid-sentence. Real callers do this constantly. Watch whether it recovers or restarts.',
        'Give it a messy request. “I think I need someone Thursday, or Friday if that’s easier, and it’s about the thing your colleague quoted last month.” That is how people talk.',
        'Break it deliberately. Mumble. Talk over background noise. Give a postcode it will not know. You are not looking for a perfect answer — you are checking that failure is graceful and ends in a human, not a loop.',
      ],
    },
    {
      type: 'p',
      text: 'Then ask the commercial questions: Who owns the call recordings? Is there a DPA? What is the data retention period? Can I export my configuration and leave? What happens on day 91 if this has not paid for itself?',
    },
    { type: 'p', text: 'The last question is where most vendor conversations go quiet.' },

    { type: 'h2', text: 'The switching cost nobody mentions' },
    {
      type: 'p',
      text: 'Whatever you pick, you are also picking how hard it is to leave. Ask before you sign:',
    },
    {
      type: 'ul',
      items: [
        'Does the number port back cleanly?',
        'Do you keep the transcripts and recordings, or do they belong to the platform?',
        'Is the integration to your CRM yours, or theirs?',
        'Is there a notice period, and does the agent keep running through it?',
      ],
    },
    {
      type: 'p',
      text: 'Cheap to start and expensive to leave is a real pricing model, just not an advertised one.',
    },

    { type: 'h2', text: 'Our own position, stated plainly' },
    {
      type: 'p',
      text: 'We are not a product with tiers. We build a fixed-scope, fixed-price system on your stack, live in seven days, instrumented from day one so the return is a number you can check. There is a 14-day full refund and, if the measured return has not covered the build cost within 90 days of going live, we keep building at no management fee until it does — for up to 12 months.',
    },
    {
      type: 'p',
      text: 'That model is right for established businesses with specific rules and real volume. It is wrong for a solo operator with 40 calls a month, and we will say so on the call rather than sell you a build. We take six builds a month, which is a capacity limit, not a marketing device.',
    },

    { type: 'h2', text: 'Your next step' },
    {
      type: 'p',
      text: 'If you are a solo operator with light volume, buy the cheap app and get on with your week. Genuinely.',
    },
    {
      type: 'callout',
      text: 'If your rules are specific, your volume is real, and enquiries are leaking, book a free 30-minute Agent Audit. We will map where the hours and jobs are going, tell you if a custom build is even the right answer, and send a written ROI projection within 48 hours. No pitch deck.',
    },
  ],

  faqs: [
    {
      q: 'How much should an AI receptionist cost in 2026?',
      a: 'Roughly £100–£200 for answering only, £200–£400 with booking and integrations, £400–£600+ for multi-channel workflow, and quoted for genuinely bespoke or regulated builds. Volume and integration count move the number more than anything else.',
    },
    {
      q: 'Is a custom AI receptionist better than an off-the-shelf one?',
      a: 'Only when your rules are specific enough that a template fights you. If your booking logic is standard, off-the-shelf is the better buy and cheaper.',
    },
    {
      q: 'Can an AI receptionist book into my calendar?',
      a: 'The better options can, into common calendars and job-management systems. Test it against your real availability rules on the demo — this is the single most commonly oversold capability.',
    },
    {
      q: 'What is the difference between an AI receptionist and an answering service?',
      a: 'An answering service is humans taking messages, billed by the minute. An AI receptionist answers instantly at any hour and can take actions in your systems, usually at a flat cost. Humans still win on genuinely nuanced calls.',
    },
    {
      q: 'How do I know if it is working?',
      a: 'Instrument it from day one: answer rate, booking rate, human-handoff rate, abandon rate — measured against your own pre-deployment baseline. If your vendor cannot show you those four numbers, you have bought a feeling.',
    },
  ],

  related: [
    { label: 'Compare AI receptionist pricing & options', href: '/ai-receptionist-cost-uk' },
    { label: 'See what our AI automation agency builds', href: '/ai-automation-agency-uk' },
    { label: 'Will customers hate an AI receptionist?', href: '/resources/will-customers-hate-ai-receptionist' },
    { label: 'GDPR, call recording & AI voice agents', href: '/resources/gdpr-ai-voice-agents-call-recording' },
  ],

  metadata: {
    title: 'Best AI Receptionists Compared (2026): Buyer’s Guide',
    description:
      'An honest comparison of AI receptionist options in 2026 — including the categories we don’t win, the pricing trap to avoid, and what to test on a demo.',
  },
};

export default resource;
