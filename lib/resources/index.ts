import type { Resource } from './types';
import aiReceptionistCostUk2026 from './data/ai-receptionist-cost-uk-2026';
import bestAiReceptionistCompared2026 from './data/best-ai-receptionist-compared-2026';
import n8nVsMakeVsZapier from './data/n8n-vs-make-vs-zapier-service-business';
import automateFirstTradesUk from './data/automate-first-trades-uk';

export const RESOURCES: Resource[] = [
  aiReceptionistCostUk2026,
  bestAiReceptionistCompared2026,
  n8nVsMakeVsZapier,
  automateFirstTradesUk,
];

export function getResource(slug: string): Resource | undefined {
  return RESOURCES.find((r) => r.slug === slug);
}
