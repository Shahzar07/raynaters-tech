// ============================================================
// RAYNATERS TECH — Vertical landing-page content model
// One typed shape powers every money page (layout + schema + CTAs).
// ============================================================

export interface FAQ {
  q: string;
  a: string;
}

export interface HowStep {
  title: string;
  body: string;
}

export interface WhatItDoesItem {
  title: string;
  body: string;
}

export interface ComparisonRow {
  label: string;
  /** One cell per column. `true`/`false` render a tick/dash; strings render as-is. */
  cells: (string | boolean)[];
}

export interface ComparisonTable {
  /** First column header is the row-label column; the Raynaters column is highlighted. */
  columns: string[];
  highlightColumn: number; // index into columns that is the Raynaters column
  rows: ComparisonRow[];
}

export interface PaybackROI {
  headline: string;
  body: string;
  bullets: string[];
}

export interface MiniCaseStory {
  client: string;
  monogram: string;
  metric: string;
  metricLabel: string;
  challenge: string;
  outcome: string;
  persona: { name: string; role: string };
}

export interface ExtraSectionGroup {
  eyebrow?: string;
  title: string;
  intro?: string;
  items: { title: string; body: string }[];
}

/**
 * Showcase rows render a real, data-driven panel rather than a stock
 * screenshot — the numbers below are what actually gets drawn.
 */
export type ShowcaseVisual =
  | {
      kind: 'pipeline';
      label: string;
      stages: { label: string; value: number; unit?: string }[];
      footnote: string;
    }
  | {
      kind: 'roi';
      label: string;
      metrics: { label: string; value: string }[];
      seriesLabel: string;
      trend: string;
      series: { label: string; value: number }[];
      footnote: string;
    };

export interface ShowcaseRow {
  title: string;
  body: string;
  visual: ShowcaseVisual;
}

export interface LandingPage {
  slug: string;
  primaryKeyword: string;
  utmCampaign: string;
  serviceType: string;

  /** Short label for nav dropdown, footer, breadcrumb + homepage cards. */
  navLabel: string;
  /** One-line blurb for the nav dropdown + homepage "Who we build for" cards. */
  navBlurb: string;

  /** Hero + solutions-page card image. */
  image: { src: string; alt: string };

  /** Optional beam.ai-style alternating feature rows (image + copy). */
  showcase?: { eyebrow?: string; rows: ShowcaseRow[] };

  eyebrow: string;
  h1: string;
  hook: string;

  /** 40–55 words, plain English — the AEO/GEO-quotable answer. */
  directAnswer: string;

  /** Section headings authored per page for natural, on-topic copy. */
  headings: {
    whatItDoes: string;
    whoItsFor: string;
    comparison: string;
  };

  whatItDoes: WhatItDoesItem[];
  whoItsFor: string[];
  howItWorks: HowStep[];
  comparison: ComparisonTable;
  paybackROI: PaybackROI;
  miniCase: MiniCaseStory;
  faqs: FAQ[];

  /** Optional extra blocks, e.g. the trades page's per-trade sections. */
  extraSections?: ExtraSectionGroup;

  /** Optional contextual internal link shown under the direct answer. */
  relatedLink?: { label: string; href: string };

  metadata: { title: string; description: string };
}
