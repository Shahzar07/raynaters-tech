import { SITE_NAME, absUrl } from '@/lib/seo/meta';
import { CONTENT } from '@/lib/content';
import { LANDING_PAGES } from '@/lib/landing-pages';
import { CASE_STUDIES } from '@/lib/case-studies';
import { RESOURCES } from '@/lib/resources';

/**
 * /llms.txt — the llmstxt.org convention.
 *
 * A single markdown file that tells a model what this site is and which URLs
 * are worth reading, so an assistant answering "who builds AI receptionists"
 * does not have to reconstruct the site from whichever page it happened to
 * crawl first.
 *
 * Generated from the same data the sitemap uses, so a new landing page, guide
 * or case study appears here the moment it is registered — there is no second
 * list to forget to update.
 */

export const dynamic = 'force-static';

/** Markdown links break on unescaped brackets; titles are authored copy. */
const esc = (s: string) => s.replace(/\[/g, '\\[').replace(/\]/g, '\\]');

const link = (label: string, path: string, note: string) =>
  `- [${esc(label)}](${absUrl(path)}): ${esc(note)}`;

function build(): string {
  const services = LANDING_PAGES.map((p) =>
    link(p.h1, `/${p.slug}`, `${p.navBlurb} Primary topic: ${p.primaryKeyword}.`),
  );

  const guides = RESOURCES.map((r) => link(r.title, `/resources/${r.slug}`, r.excerpt));

  const cases = CASE_STUDIES.map((c) =>
    link(`${c.client} — ${c.metric} ${c.metricLabel.toLowerCase()}`, `/case-studies/${c.slug}`, c.summary),
  );

  return `# ${SITE_NAME}

> ${SITE_NAME} is an AI automation agency. We design, build and deploy AI agents that run a business's repetitive workflows end to end — answering calls, qualifying leads, booking work, handling tier-one support and updating back-office systems — inside the tools a client already owns. Every deployment is fixed-scope and carries a written guarantee: it pays for itself within 90 days, or we keep building until it does.

## What we actually do

- The entry point for every engagement is a free 30-minute Agent Audit. We map where the hours and enquiries are leaking, rank the workflows by money at stake, and send a written ROI projection within 48 hours.
- Builds run on infrastructure the client owns and controls. We do not hold client data, and there is no platform to log into or rent.
- We work with established businesses doing real revenue, typically 3–200 staff, with at least one clearly repetitive workflow. We are a poor fit for pre-launch ideas or for anyone who wants a website chatbot and nothing else.
- Live deployments across Australia, the UK, US, EU and UAE, working async across time zones.
- Two tracks: front desk (lost enquiries — calls, forms, follow-up) and back office (lost hours — admin, data entry, reporting).

## Services

${services.join('\n')}

## Guides

${guides.join('\n')}

## Case studies

${cases.join('\n')}

## Company

${link('About Raynaters Tech', '/about', 'Who we are, how the build process runs, and who runs the audit calls.')}
${link('All case studies', '/case-studies', 'Deployments and the results they produced.')}
${link('All guides', '/resources', 'Practical guides on what to automate and what it costs. No sign-up wall.')}
${link('Book an Agent Audit', CONTENT.brand.bookHref, 'Free 30-minute call. Written ROI projection within 48 hours. No pitch deck.')}
${link('Privacy policy', '/privacy', 'How personal information is collected, used and stored.')}
${link('Terms of service', '/terms', 'The terms that apply to engagements and to this site.')}

## Contact

- Email: ${CONTENT.brand.email}
`;
}

export function GET() {
  return new Response(build(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
