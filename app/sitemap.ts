import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo/meta';
import { LANDING_PAGES } from '@/lib/landing-pages';
import { CASE_STUDIES } from '@/lib/case-studies';
import { RESOURCES } from '@/lib/resources';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/book`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/case-studies`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/resources`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const landing: MetadataRoute.Sitemap = LANDING_PAGES.map((p) => ({
    url: `${SITE_URL}/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const caseStudies: MetadataRoute.Sitemap = CASE_STUDIES.map((c) => ({
    url: `${SITE_URL}/case-studies/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const resources: MetadataRoute.Sitemap = RESOURCES.map((r) => ({
    url: `${SITE_URL}/resources/${r.slug}`,
    lastModified: new Date(r.dateModified),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...landing, ...caseStudies, ...resources];
}
