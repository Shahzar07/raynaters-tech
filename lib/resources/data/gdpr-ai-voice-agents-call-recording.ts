import type { Resource } from '@/lib/resources/types';

const resource: Resource = {
  slug: 'gdpr-ai-voice-agents-call-recording',
  category: 'Compliance',
  title: 'GDPR, call recording & AI voice agents: the compliance guide',
  excerpt:
    'What UK GDPR actually requires when an AI agent answers your phone — lawful basis, disclosure, retention, DPAs — plus a pre-deployment checklist.',
  readingTime: '10 min',
  datePublished: '2026-08-29',
  dateModified: '2026-08-29',
  coverImage: {
    src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80',
    alt: 'Reviewing documents and compliance paperwork at a desk',
  },

  directAnswer:
    'It can be, and compliance is your responsibility as data controller rather than the vendor’s. You need a lawful basis for processing calls, clear disclosure to the caller, a defined retention period, a data processing agreement with every provider in the chain, and extra care where health or legal data is involved.',

  body: [
    {
      type: 'callout',
      text: 'This is practical guidance from deploying voice agents for UK service businesses, not legal advice. If you are in a regulated sector, have your DPO or solicitor review your specific setup. Said once — the rest of this page will not hedge every sentence.',
    },

    { type: 'h2', text: 'Why this stops deals, and why it should not' },
    {
      type: 'p',
      text: 'Compliance is the objection that kills automation projects in clinics, dental practices and law firms — the three sectors that would benefit most, because their reception desks are the most overloaded.',
    },
    {
      type: 'p',
      text: 'It usually kills them for the wrong reason. Not because a practice looked at the requirements and found them unworkable, but because nobody could get a straight answer, so the safest thing was to do nothing. Doing nothing has its own compliance profile, incidentally: patient details on sticky notes and voicemails sitting in a shared inbox for three years is not a stronger position than a documented agent with a defined retention period.',
    },
    { type: 'p', text: 'Here is the straight version.' },

    { type: 'h2', text: 'You are the data controller. The vendor is a processor.' },
    {
      type: 'p',
      text: 'This is the point most vendor pages skip, and everything else follows from it.',
    },
    {
      type: 'p',
      text: 'When a caller speaks to an agent on your line, you decide why that data is collected and what happens to it. That makes you the controller and your vendor a processor acting on your instructions. Which means:',
    },
    {
      type: 'ul',
      items: [
        'The lawful basis is yours to establish.',
        'The disclosure obligation is yours.',
        'The retention decision is yours.',
        'If a caller exercises their rights, the request lands with you.',
        'If the processor leaks it, you are still accountable to the regulator and the caller.',
      ],
    },
    {
      type: 'p',
      text: 'No vendor certificate transfers that. Any provider who tells you they “handle GDPR for you” is describing their own processor obligations and quietly leaving yours with you.',
    },

    { type: 'h2', text: 'Lawful basis: consent or legitimate interests?' },
    { type: 'p', text: 'Two realistic options for handling calls.' },
    {
      type: 'p',
      text: 'Legitimate interests is the usual basis for answering, qualifying and booking. Answering your phone is plainly within your interests and the caller’s, and they initiated the call. Document a legitimate interests assessment: what the interest is, why the processing is necessary, and why it does not override the caller’s rights. It is a short document and it is the thing you produce if asked.',
    },
    {
      type: 'p',
      text: 'Consent becomes the right basis for anything the caller would not expect. Recording the call for training. Using transcripts to improve a model. Marketing follow-up to someone who rang about a booking. Consent must be freely given, specific and withdrawable — and “continuing the call” is a weak vehicle for it, since the alternative is not being served.',
    },
    {
      type: 'callout',
      text: 'Practical rule: legitimate interests for handling the call, consent for anything beyond handling it.',
    },

    { type: 'h2', text: 'Recording, transcription, and the difference that matters' },
    {
      type: 'p',
      text: 'Recording audio and transcribing it are separate processing activities and people conflate them constantly.',
    },
    {
      type: 'p',
      text: 'A voice agent needs to process speech in the moment to function. Whether you retain the audio afterwards is a separate decision — and for many deployments the right answer is that you do not. A structured transcript, or even just the extracted outcome (name, number, job type, appointment booked), is often all the business actually needs.',
    },
    {
      type: 'p',
      text: 'This is the single easiest compliance win available: retain the least you can still run the business on. No stored audio means no stored biometric-adjacent voice data, a smaller breach surface, cheaper storage, and a much simpler answer when someone asks what you keep.',
    },
    {
      type: 'p',
      text: 'If you do retain recordings, you need a stated purpose, a stated period, and the ability to find and delete a specific caller’s data on request. “It’s all in the platform somewhere” is not a retention policy.',
    },

    { type: 'h2', text: 'What the caller must be told, and when' },
    { type: 'p', text: 'At the start of the call, briefly:' },
    {
      type: 'ul',
      items: [
        'That they are speaking to an automated assistant. Do not obscure this. Beyond the compliance argument, being coy is the fastest way to lose a customer’s trust — and disclosure requirements in this area are tightening, not loosening.',
        'What happens to the information. One clause is enough: “your details are used to handle your enquiry.”',
        'That the call is recorded, if it is — and why.',
        'Where the full detail lives. A pointer to your privacy notice.',
      ],
    },
    { type: 'p', text: 'Twelve seconds of audio. Then get on with helping them.' },
    {
      type: 'p',
      text: 'Your privacy notice needs the longer version: what is collected, lawful basis, retention period, who the processors are, international transfers, and how to exercise rights. If your notice does not currently mention automated call handling, it needs updating before you go live — not after.',
    },

    { type: 'h2', text: 'The processor chain, and the DPA you actually need' },
    { type: 'p', text: 'A voice agent is not one company. It is typically four or five:' },
    {
      type: 'ul',
      items: [
        'The telephony provider carrying the call.',
        'The speech-to-text service.',
        'The language model provider.',
        'The orchestration platform.',
        'Whoever built and hosts it.',
      ],
    },
    {
      type: 'p',
      text: 'Every one of those is a processor or sub-processor, and you need a data processing agreement covering the chain. Ask your vendor for a written sub-processor list. It is a completely reasonable request and the answer is diagnostic: a vendor who can produce it in a day has thought about this, and one who goes quiet has not.',
    },
    {
      type: 'p',
      text: 'Then check three things per link: where the data is processed geographically, what the transfer mechanism is if it leaves the UK or EEA, and whether your call data can be used to train their models. That last one has a correct answer for a business handling customer or patient information, and it is no. Confirm it in writing, not on a marketing page.',
    },

    { type: 'h2', text: 'Special category data: clinics, dental, and healthcare' },
    {
      type: 'p',
      text: 'The moment a caller mentions a symptom, a condition, a medication, or a treatment, you are handling special category health data. Which means Article 9 as well as Article 6, and a higher standard throughout.',
    },
    { type: 'p', text: 'Practical implications:' },
    {
      type: 'ul',
      items: [
        'Design the agent to collect less. It does not need the clinical detail to book an appointment. Name, contact, appointment type, urgency. Let the clinician take the clinical history in the room, where it belongs.',
        'Shorten retention specifically for these calls. Then hold to it.',
        'Route urgency to a human immediately. This is both clinical safety and the right compliance posture. Anything that sounds acute should reach a person, not a queue.',
        'Update your record of processing activities. Health data almost certainly warrants a DPIA — treat that as the default answer, not an edge case.',
        'Do not let the agent give clinical advice. Ever, on any phrasing. This is a hard boundary configured into the build, not a hoped-for behaviour.',
      ],
    },

    { type: 'h2', text: 'Legal and professional services' },
    {
      type: 'p',
      text: 'Different pressure, similar shape. Enquiry calls to a law firm carry confidentiality and privilege considerations well beyond GDPR, plus professional-conduct obligations.',
    },
    {
      type: 'ul',
      items: [
        'Conflict checks must happen before substance. The agent’s job is to take the enquiry and route it, not to discuss the matter.',
        'Confidentiality is not the same as data protection. Your professional duties are stricter and separate. Design to the stricter one.',
        'Client identity can itself be sensitive. In family, immigration and criminal work, the fact of the call is confidential information.',
        'Retention should follow your existing file policy, not the automation vendor’s default.',
        'Keep the disclosure prominent. A caller in distress about a legal problem must not be unsure whether they are confiding in a person.',
      ],
    },

    { type: 'h2', text: 'Pre-deployment checklist' },
    {
      type: 'p',
      text: 'Work through this before the agent takes a live call. If you cannot answer one of them, that is the item to fix.',
    },
    {
      type: 'ul',
      items: [
        'Lawful basis identified and documented (legitimate interests assessment written down)',
        'Privacy notice updated to cover automated call handling',
        'Opening disclosure scripted: automated assistant, purpose, recording status',
        'Retention period set for audio, transcripts, and extracted data — separately',
        'Decision made and documented on whether audio is retained at all',
        'DPA signed with the vendor; written sub-processor list obtained',
        'Processing locations confirmed; transfer mechanism in place if data leaves the UK/EEA',
        'Written confirmation that your data is not used for model training',
        'Subject access and erasure process tested — can you actually find one caller’s data?',
        'Human escalation path defined for urgent, distressed and complaint calls',
        'DPIA completed if special category data is in scope',
        'Record of processing activities updated',
        'Named internal owner for the agent, its logs, and its incident response',
        'Breach notification path agreed with the vendor, with a response time in the contract',
        'Exit plan: you can export your data and configuration, and the number ports back',
      ],
    },

    { type: 'h2', text: 'How we handle it' },
    {
      type: 'p',
      text: 'We run every deployment as a processor to your controller: a DPA, a written sub-processor list, retention configured to a period you choose rather than a default, and the system running on infrastructure you own and control rather than a platform you rent access to. Your data is not used to train anybody’s model. For clinics and law firms we scope the agent deliberately narrowly — take the enquiry, book or route it, escalate anything urgent to a human — because the least data collected is the least data to protect.',
    },
    { type: 'p', text: 'Compliance work is part of the build, not an upsell.' },

    { type: 'h2', text: 'Your next step' },
    {
      type: 'p',
      text: 'Compliance is not the reason to avoid automating your phone. It is a set of decisions with defined answers.',
    },
    {
      type: 'callout',
      text: 'Book a free 30-minute Agent Audit and we will walk your specific setup — sector, data, retention, escalation — and send a written ROI projection within 48 hours. If your compliance position means an agent is the wrong move, we will tell you on the call. No pitch deck.',
    },
  ],

  faqs: [
    {
      q: 'Do I need consent to use an AI receptionist?',
      a: 'Usually not for handling the call itself — legitimate interests generally covers answering, qualifying and booking, documented in an assessment. Consent is needed for anything beyond handling it, such as recording for training or marketing follow-up.',
    },
    {
      q: 'Do I have to tell callers it is an AI?',
      a: 'Yes, and do it in the opening sentence. It is the safer position as disclosure rules tighten, and it is also better for trust — callers accept an agent they were told about and resent one they worked out.',
    },
    {
      q: 'How long can I keep AI call recordings?',
      a: 'As long as you have a documented purpose for, and no longer. Many businesses do not need the audio at all — keep a structured transcript or just the outcome, and the whole question gets simpler.',
    },
    {
      q: 'Is an AI receptionist safe for a medical practice?',
      a: 'It can be, with a scoped build: minimal collection, short retention, immediate human escalation for urgency, no clinical advice, and a DPIA. Practices adopt these successfully — the design has to be deliberate.',
    },
    {
      q: 'Who is liable if there is a data breach?',
      a: 'As controller you remain accountable to the regulator and to affected individuals, whatever the contract says. Your DPA should still set out the processor’s obligations, breach notification timelines, and liability.',
    },
  ],

  related: [
    { label: 'See our AI receptionist for UK clinics', href: '/ai-receptionist-for-clinics-uk' },
    { label: 'See our AI automation for UK law firms', href: '/ai-automation-for-law-firms-uk' },
    { label: 'Will customers hate an AI receptionist?', href: '/resources/will-customers-hate-ai-receptionist' },
    { label: 'Best AI receptionists compared (2026)', href: '/resources/best-ai-receptionist-compared-2026' },
  ],

  metadata: {
    title: 'GDPR, Call Recording & AI Voice Agents: A Guide',
    description:
      'What UK GDPR actually requires when an AI agent answers your phone — lawful basis, disclosure, retention, DPAs — plus a pre-deployment checklist.',
  },
};

export default resource;
