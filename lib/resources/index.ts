import type { Resource } from './types';
import aiReceptionistCostUk2026 from './data/ai-receptionist-cost-uk-2026';
import automateFirstTradesUk from './data/automate-first-trades-uk';
import willCustomersHateAiReceptionist from './data/will-customers-hate-ai-receptionist';
import whatMissedCallsCostYourBusiness from './data/what-missed-calls-cost-your-business';
import bestAiReceptionistCompared2026 from './data/best-ai-receptionist-compared-2026';
import n8nVsMakeVsZapierServiceBusiness from './data/n8n-vs-make-vs-zapier-service-business';
import gdprAiVoiceAgentsCallRecording from './data/gdpr-ai-voice-agents-call-recording';

export const RESOURCES: Resource[] = [
  aiReceptionistCostUk2026,
  automateFirstTradesUk,
  willCustomersHateAiReceptionist,
  whatMissedCallsCostYourBusiness,
  bestAiReceptionistCompared2026,
  n8nVsMakeVsZapierServiceBusiness,
  gdprAiVoiceAgentsCallRecording,
];

export function getResource(slug: string): Resource | undefined {
  return RESOURCES.find((r) => r.slug === slug);
}
