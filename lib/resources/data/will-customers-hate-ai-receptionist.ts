import type { Resource } from '@/lib/resources/types';

const resource: Resource = {
  slug: 'will-customers-hate-ai-receptionist',
  category: 'Honest Answers',
  title: 'Will my customers hate an AI receptionist? (The honest answer)',
  excerpt:
    'Some will. Here is exactly which callers object, what actually annoys them, and the four rules that stop it — from a company that deploys these for a living.',
  readingTime: '9 min',
  datePublished: '2026-08-29',
  dateModified: '2026-08-29',
  coverImage: {
    src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80',
    alt: 'Two people talking on the phone in a busy office',
  },

  directAnswer:
    'Some will. A small share of callers dislike any automated voice and will ask for a human immediately. Most people do not care who books the appointment — they care that someone picked up, understood them, and got it done. Customers hate a badly built agent, not an AI one. The build decides the reaction.',

  body: [
    { type: 'h2', text: 'The question underneath the question' },
    {
      type: 'p',
      text: 'You are not really asking whether customers like AI. You are asking whether this will cost you the relationships you spent ten years building.',
    },
    {
      type: 'p',
      text: 'That is the right question. It is also the reason most business owners stall for six months on a decision that takes a week to reverse. So here is the version nobody selling these will give you: the honest one, from a company that builds them and has watched the call recordings.',
    },
    {
      type: 'p',
      text: 'Some callers will dislike it. Not most. And the ones who dislike it are almost never reacting to the fact that it is AI — they are reacting to being trapped.',
    },

    { type: 'h2', text: 'What actually annoys people on the phone' },
    {
      type: 'p',
      text: 'Go back through every automated call you have personally hated. It was not the voice. It was one of these five things.',
    },
    {
      type: 'ul',
      items: [
        'The loop. You said the thing. It did not understand. It asked again. You said it louder. That is not an AI problem — press-1-for-sales did the same thing for twenty years.',
        'No escape hatch. You needed a human and there was no path to one. This is the big one. This single failure accounts for most of the anger.',
        'Pretending to be human. The agent dodges the question “am I talking to a person?” The caller works it out anyway, and now they have been lied to on your phone line. Trust gone in one sentence.',
        'Making them repeat themselves. They give their details to the agent, then a human calls back and asks for all of it again. Now the automation has cost them time instead of saving it.',
        'Being slower than a person. Long pauses, over-explaining, reading a script. If the agent takes ninety seconds to do what a receptionist does in twenty, the caller resents it.',
      ],
    },
    { type: 'p', text: 'Notice what is not on that list: “it was a computer.”' },

    { type: 'h2', text: 'What customers actually notice' },
    {
      type: 'p',
      text: 'Here is what your callers actually experience, ranked by how much they care:',
    },
    {
      type: 'ul',
      items: [
        'Did somebody answer? This is not close. It dwarfs everything else.',
        'Did they get what I needed done? Booked, quoted, routed, escalated.',
        'How long did it take?',
        'Was it a person? A distant fourth, and only surfaces when the first three go badly.',
      ],
    },
    {
      type: 'p',
      text: 'A caller who reaches an agent at 8pm on a Sunday, gets booked in for Tuesday morning, and hangs up in ninety seconds does not file a complaint about the voice. A caller who rings three times during your workday and reaches voicemail does not file a complaint either. They just ring the next business on the list, and you never learn their name.',
    },
    {
      type: 'callout',
      text: 'That is the real comparison. Not AI versus your receptionist. AI versus the ringtone.',
    },

    { type: 'h2', text: 'The four rules that stop people hating it' },
    {
      type: 'p',
      text: 'Every deployment that goes badly breaks at least one of these. Every deployment that goes well follows all four.',
    },
    { type: 'h3', text: '1. Offer a human within two turns' },
    {
      type: 'p',
      text: 'Not buried in a menu. Not after three failed attempts. If a caller says “can I speak to someone”, the agent hands off or takes a callback immediately and says when. This one rule removes most of the objection surface.',
    },
    { type: 'h3', text: '2. Never claim to be human' },
    {
      type: 'p',
      text: 'If asked, the agent says what it is, plainly, and carries on. Callers accept this immediately. What they do not accept is being handled.',
    },
    { type: 'h3', text: '3. Give it one job it can finish' },
    {
      type: 'p',
      text: 'An agent that books appointments and does nothing else will delight people. An agent asked to handle every possible call will fail on the edges and get blamed for all of it.',
    },
    { type: 'h3', text: '4. Escalate anything emotional instantly' },
    {
      type: 'p',
      text: 'Complaints, emergencies, bereavements, anything urgent. The agent should recognise the register and route it to a phone that rings, not a queue. Get this wrong once and it is the story your customer tells about you.',
    },

    { type: 'h2', text: 'Who genuinely should not deploy one' },
    {
      type: 'p',
      text: 'We would rather you close this tab than buy something that damages your business. Do not put an AI receptionist on your phone line if:',
    },
    {
      type: 'ul',
      items: [
        'Your calls are consultative from the first sentence. High-end advisory, therapy, complex bereavement-adjacent work. If the first call is the service, it should be a human.',
        'Your call volume is genuinely low. Twenty calls a week, all answered, none missed? You do not have the problem this solves. Do not manufacture one.',
        'Your callers are largely elderly or non-native speakers in a dialect the models handle badly. Test this specifically before you commit. If the recognition rate is poor, the answer is no.',
        'You are hoping to cut a person who does more than answer the phone. Reception is rarely just reception. Automating the phone does not automate the desk.',
        'Nobody on your side will own the handover. An agent with no human owner degrades quietly. That is worse than no agent.',
      ],
    },
    {
      type: 'p',
      text: 'If any of those describe you, the honest answer is: not yet, or not at all. We will tell you that on the audit call in the first ten minutes rather than sell you a build.',
    },

    { type: 'h2', text: 'What people say on Reddit — answered plainly' },
    {
      type: 'p',
      text: 'Search this topic and you land on Reddit, not vendor sites. Fair enough. Here are the objections that come up most, with straight answers.',
    },
    { type: 'h3', text: '“AI phone agents are still bad and everyone can tell.”' },
    {
      type: 'p',
      text: 'They can tell, yes. Bad is no longer accurate — latency and interruption handling changed significantly through 2025 and 2026. Judge for yourself: call a live one before you buy. Any vendor who will not let you is telling you something.',
    },
    { type: 'h3', text: '“My customers are older and will hang up.”' },
    {
      type: 'p',
      text: 'Some will. Measure it rather than guess: run the agent on overflow calls only for two weeks and look at the abandon rate against your voicemail abandon rate. Voicemail loses that comparison more often than people expect.',
    },
    { type: 'h3', text: '“It’s just a chatbot on the phone.”' },
    {
      type: 'p',
      text: 'If it only answers questions, that criticism is deserved — that is a £30-a-month tool. The distinction that matters is whether it takes an action: writes to your calendar, updates your CRM, texts a confirmation. Answering is not the product. Booking is.',
    },
    { type: 'h3', text: '“They’ll use it to fire staff.”' },
    {
      type: 'p',
      text: 'Some businesses will. The deployments that actually pay back tend to move a person off the phone and onto work that earns — quoting, following up, looking after the customer in the room.',
    },
    { type: 'h3', text: '“Vendors won’t show real numbers.”' },
    {
      type: 'p',
      text: 'Also fair. Ours are on our case studies page, and where a figure is representative rather than verified we label it that way.',
    },

    { type: 'h2', text: 'How to test it before you risk a single customer' },
    {
      type: 'p',
      text: 'Do not launch it on your main line on day one. Nobody serious would ask you to.',
    },
    {
      type: 'ul',
      items: [
        'Week 1 — after hours only. Point the agent at calls that currently reach voicemail. The comparison is not “agent versus receptionist”, it is “agent versus nothing”. You cannot lose this one.',
        'Week 2 — overflow. Calls that ring more than four times roll to the agent. Read every transcript. You will find two or three phrasings it handles badly. Fix those.',
        'Week 3 — measure. Answer rate, booking rate, human-handoff rate, abandon rate. Compare against your own baseline, not a vendor benchmark.',
        'Week 4 — decide. If handoff requests are high and bookings are low, your calls are more consultative than you thought. That is real information, and it cost you a month instead of a year.',
      ],
    },
    {
      type: 'p',
      text: 'Anyone who tells you to go live on the main number in week one is optimising for their invoice.',
    },

    { type: 'h2', text: 'What we measure on live deployments' },
    {
      type: 'p',
      text: 'Across our own deployments, the number that moves first is answer rate — one trades client went from missing around four in ten calls during jobs to an eleven-second average answer time. A UK clinic deflected 412 enquiries a week from a reception desk that had been answering the same eight questions all day. An e-commerce support agent auto-resolves 85% of tier-one tickets with a median first response under sixty seconds.',
    },
    {
      type: 'p',
      text: 'Not one of those deployments generated a customer complaint about talking to an agent. The complaints before deployment were about nobody picking up.',
    },

    { type: 'h2', text: 'Your next step' },
    {
      type: 'p',
      text: 'You do not have to guess how your callers will react. You can measure it in two weeks on calls that currently reach voicemail.',
    },
    {
      type: 'callout',
      text: 'Book a free 30-minute Agent Audit. We will map where your enquiries are actually leaking, tell you plainly whether an agent is the right fix, and send a written ROI projection within 48 hours. If the answer is no, we will say so on the call. No pitch deck.',
    },
  ],

  faqs: [
    {
      q: 'Do I have to tell callers they are speaking to an AI?',
      a: 'Tell them, and do it in the first sentence. It costs nothing, callers accept it immediately, and in several jurisdictions disclosure is either required or heading that way. Being coy is the only genuinely risky option.',
    },
    {
      q: 'What percentage of callers ask for a human?',
      a: 'It varies by industry and by how well the agent is built. Track it as your primary quality metric from day one: a rising handoff rate means the agent is being asked to do something it should not be doing.',
    },
    {
      q: 'Will an AI receptionist damage my brand?',
      a: 'A badly built one will, the same way a permanently engaged phone line does. The brand risk is not automation — it is a caller who cannot get what they need and has nowhere to go.',
    },
    {
      q: 'What happens if it does not understand someone?',
      a: 'It should hand to a human or take a callback with a stated time. Never loop. Never guess. A clean handoff is a good call outcome, not a failure.',
    },
    {
      q: 'Is it better than an answering service?',
      a: 'For booking and qualifying, usually yes — it writes into your systems and does not charge by the minute. For genuinely nuanced conversations, a trained human answering service still wins. Match the tool to the call.',
    },
  ],

  related: [
    { label: 'See our AI receptionist for UK clinics', href: '/ai-receptionist-for-clinics-uk' },
    { label: 'See our AI receptionist for UK trades', href: '/ai-receptionist-for-trades-uk' },
    { label: 'Work out what missed calls cost you', href: '/resources/what-missed-calls-cost-your-business' },
  ],

  metadata: {
    title: 'Will Customers Hate an AI Receptionist? Honest Answer',
    description:
      'Some will. Here’s exactly which callers object, what actually annoys them, and the four rules that stop it — from someone who deploys these for a living.',
  },
};

export default resource;
