import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import Navigation from '@/components/sections/02-Navigation';
import Footer from '@/components/sections/15-Footer';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Accordion } from '@/components/ui/Accordion';
import { DirectAnswerBlock } from '@/components/landing/DirectAnswerBlock';
import { ArticleBody } from '@/components/resources/ArticleBody';
import { MediaFrame } from '@/components/ui/MediaFrame';
import { LandingFinalCTA } from '@/components/landing/LandingFinalCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { pageMetadata, absUrl } from '@/lib/seo/meta';
import { breadcrumbSchema, articleSchema, faqPageSchema } from '@/lib/seo/schema';
import { RESOURCES, getResource } from '@/lib/resources';

export function generateStaticParams() {
  return RESOURCES.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const resource = getResource(params.slug);
  if (!resource) return {};
  return pageMetadata({
    title: resource.metadata.title,
    description: resource.metadata.description,
    path: `/resources/${resource.slug}`,
    type: 'article',
  });
}

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

export default function ResourcePage({ params }: { params: { slug: string } }) {
  const resource = getResource(params.slug);
  if (!resource) notFound();

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
    { name: resource.title, path: `/resources/${resource.slug}` },
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          articleSchema({
            headline: resource.title,
            description: resource.metadata.description,
            url: absUrl(`/resources/${resource.slug}`),
            datePublished: resource.datePublished,
            dateModified: resource.dateModified,
          }),
          ...(resource.faqs ? [faqPageSchema(resource.faqs)] : []),
        ]}
      />
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border pt-10 pb-12 sm:pt-12 sm:pb-16">
        <Container width="text">
          <Breadcrumbs items={crumbs} />
          <div className="mt-8">
            <Eyebrow>{resource.category}</Eyebrow>
            <Reveal delay={0.05}>
              <h1 className="mt-5 font-extrabold uppercase text-balance text-[37px] leading-[1.08] tracking-tightest text-text-primary min-[400px]:text-[41px] sm:text-[44px] md:text-[52px] md:leading-[1.04]">
                {resource.title}
              </h1>
            </Reveal>
            <p className="mt-6 text-[13px] uppercase tracking-[0.16em] text-text-muted">
              {fmtDate(resource.datePublished)} · {resource.readingTime} read
            </p>

            {resource.coverImage && (
              <div className="mt-8">
                <MediaFrame
                  src={resource.coverImage.src}
                  alt={resource.coverImage.alt}
                  aspectClass="aspect-[21/9]"
                  priority
                  overlay
                  sizes="(max-width: 800px) 100vw, 800px"
                />
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Direct answer */}
      <DirectAnswerBlock text={resource.directAnswer} />

      {/* Body */}
      <section className="pb-14 sm:pb-20 md:pb-24">
        <Container width="text">
          <ArticleBody blocks={resource.body} />

          {resource.related && resource.related.length > 0 && (
            <div className="mt-12 rounded-none border border-border bg-surface p-6 sm:p-7">
              <p className="text-[12px] uppercase tracking-[0.18em] text-text-muted">
                Related
              </p>
              <ul className="mt-4 space-y-3">
                {resource.related.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-[15px] font-medium text-signal transition-colors hover:text-signal sm:text-[16px]"
                    >
                      {link.label}
                      <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {resource.faqs && resource.faqs.length > 0 && (
            <div className="mt-14">
              <h2 className="font-extrabold uppercase text-[26px] leading-[1.12] tracking-[-0.03em] text-text-primary sm:text-[32px]">
                Frequently asked questions
              </h2>
              <div className="mt-6">
                <Accordion items={resource.faqs} defaultOpen={null} />
              </div>
            </div>
          )}
        </Container>
      </section>

      <LandingFinalCTA
        title="Find your highest-ROI automation."
        sub="Book a free 30-minute Agent Audit. We'll map your workflows and send a written ROI projection within 48 hours."
        utmCampaign={`resource-${resource.slug}`}
      />

      <Footer />
    </main>
  );
}
