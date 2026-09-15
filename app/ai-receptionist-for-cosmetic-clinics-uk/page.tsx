import type { Metadata } from 'next';
import data from '@/lib/landing-pages/data/ai-receptionist-for-cosmetic-clinics-uk';
import { VerticalLandingPage } from '@/components/landing/VerticalLandingPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { pageMetadata, absUrl } from '@/lib/seo/meta';
import { serviceSchema, faqPageSchema, breadcrumbSchema } from '@/lib/seo/schema';

export const metadata: Metadata = pageMetadata({
  title: data.metadata.title,
  description: data.metadata.description,
  path: `/${data.slug}`,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: data.h1,
            description: data.metadata.description,
            url: absUrl(`/${data.slug}`),
            serviceType: data.serviceType,
            areaServed: data.areaServed,
          }),
          faqPageSchema(data.faqs),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: data.navLabel, path: `/${data.slug}` },
          ]),
        ]}
      />
      <VerticalLandingPage data={data} />
    </>
  );
}
