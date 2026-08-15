// ============================================================
// RAYNATERS TECH — JSON-LD structured data builders
// Server-rendered schema for SEO / AEO / GEO (AI Overviews).
// ============================================================
import type {
  Organization,
  WebSite,
  Service,
  FAQPage,
  BreadcrumbList,
  Article,
  WithContext,
} from 'schema-dts';
import { SITE_URL, SITE_NAME, absUrl } from './meta';

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

/** Compact Organization reference used as provider/publisher/author. */
const orgRef: Organization = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE_NAME,
  url: SITE_URL,
};

export function organizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: absUrl('/raynaters-mark.png'),
    description:
      'AI automation agency building AI systems for Australian businesses that pay for themselves within 90 days — or we keep building until they do. Also active across the UK, US and EU.',
    founder: {
      '@type': 'Person',
      name: 'Shahzar',
      // TODO(shahzar): add founder LinkedIn profile URL
    },
    areaServed: ['AU', 'GB', 'US', 'EU'],
    sameAs: [
      'https://www.linkedin.com/in/raynaters-tech-inc-7830a0383/',
      'https://www.trustpilot.com/review/raynaters.tech',
      // TODO(shahzar): add Twitter/X, Crunchbase, Clutch URLs when live
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'team@raynaters.tech',
      areaServed: ['AU', 'GB', 'US', 'EU'],
      availableLanguage: 'en',
    },
  };
}

export function websiteSchema(): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': SITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { '@id': ORG_ID } as Organization,
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed?: string;
}): WithContext<Service> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    serviceType: input.serviceType,
    url: input.url,
    areaServed: input.areaServed ?? 'United Kingdom',
    provider: orgRef,
  };
}

export function faqPageSchema(
  faqs: readonly { q: string; a: string }[],
): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absUrl(item.path),
    })),
  };
}

export function articleSchema(input: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}): WithContext<Article> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.headline,
    description: input.description,
    url: input.url,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    image: input.image ? absUrl(input.image) : absUrl('/raynaters-mark.png'),
    author: orgRef,
    publisher: orgRef,
  };
}
