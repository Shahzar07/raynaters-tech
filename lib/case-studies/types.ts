// ============================================================
// RAYNATERS TECH — Case study content model
// Illustrative deployments, plus modeled scenarios (see `modeled`).
// Swap for genuine client data when available (and only add review
// badges once reviews are real).
// ============================================================

export interface CaseStudyResult {
  metric: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  monogram: string;
  category: string;

  /** Card thumbnail + detail hero banner image. */
  image: { src: string; alt: string };

  /** Big result headline used on the detail hero. */
  headlineResult: string;
  /** Headline metric for the index card. */
  metric: string;
  metricLabel: string;
  /** One-line teaser for the index card + meta description. */
  summary: string;

  challenge: string;
  solution: string;
  results: CaseStudyResult[];

  /** Omitted on modeled scenarios — a scenario has no client to quote. */
  persona?: { name: string; role: string };
  quote?: { text: string; author: string; role: string };

  /**
   * Present when this is a modeled scenario rather than a named deployment.
   * The page then says so up front and publishes every assumption, so a
   * sceptical buyer can check the arithmetic instead of trusting a quote.
   */
  modeled?: {
    /** One or two sentences on what the scenario is built from. */
    basis: string;
    assumptions: { label: string; value: string }[];
  };

  /** Before/after on the numbers buyers ask about: leads, bookings, reviews, cost. */
  scorecard?: { label: string; before: string; after: string }[];
  /** The "what exactly is included" answer. */
  included?: { title: string; body: string }[];
  timeline?: { when: string; what: string }[];
  /** What it costs, in plain words. The site publishes no price list. */
  investment?: string;
  faqs?: { q: string; a: string }[];

  metadata: { title: string; description: string };
  /** Slugs of related studies shown at the foot of the detail page. */
  related: string[];
}
