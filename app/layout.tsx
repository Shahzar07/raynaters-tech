import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import { MetaPixel } from '@/components/analytics/MetaPixel';
import {
  GoogleTagManager,
  GoogleTagManagerNoScript,
} from '@/components/analytics/GoogleTagManager';
import LeadConnectorChat from '@/components/ui/LeadConnectorChat';
import { JsonLd } from '@/components/seo/JsonLd';
import { organizationSchema, websiteSchema } from '@/lib/seo/schema';
import { SITE_URL, SITE_NAME } from '@/lib/seo/meta';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

// Boldonse ships too late for next/font/google's bundled font list on Next 14,
// so it's self-hosted from /public/fonts.
const boldonse = localFont({
  src: [
    { path: '../public/fonts/boldonse-latin.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/boldonse-latin-ext.woff2', weight: '400', style: 'normal' },
  ],
  variable: '--font-boldonse',
  display: 'swap',
  fallback: ['Impact', 'sans-serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'AI Automation for Australian Businesses | Raynaters Tech',
    template: '%s | Raynaters Tech',
  },
  description:
    'We find the repetitive work costing your business time and money, then build an AI system that handles it — paying for itself within 90 days or we keep building free. Free 30-minute Agent Audit.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'AI Automation for Australian Businesses | Raynaters Tech',
    description:
      'Find what your business can automate in 30 minutes. 47,283+ hours reclaimed, 23 systems live, under 90 days to ROI.',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_AU',
    type: 'website',
    images: [{ url: 'https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260604_155053_5eceb174-bd85-4e5b-8715-10d0673aacf4.png', width: 2752, height: 1536, alt: 'Raynaters Tech — AI systems that pay for themselves in 90 days' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation for Australian Businesses | Raynaters Tech',
    description:
      'Find what your business can automate in 30 minutes. Free Agent Audit, written ROI projection in 48 hours.',
    images: ['https://d8j0ntlcm91z4.cloudfront.net/user_31J28LgsUCQmK5Ux97L8IuICZIM/hf_20260604_155053_5eceb174-bd85-4e5b-8715-10d0673aacf4.png'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#FAFAF8',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-AU"
      className={`${jakarta.variable} ${boldonse.variable}`}
    >
      {/* Google Tag Manager — inlined at the top of <head> by `beforeInteractive` */}
      <GoogleTagManager />
      <body className="font-sans bg-bg text-text-primary antialiased">
        {/* Google Tag Manager (noscript) — must stay the first child of <body> */}
        <GoogleTagManagerNoScript />

        {/* Google tag (gtag.js) — Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G2HE3PDF0E"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G2HE3PDF0E');
          `}
        </Script>
        {/* Meta Pixel — base code + PageView on every client-side navigation */}
        <MetaPixel />

        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {children}
        <LeadConnectorChat />
        <Analytics />
      </body>
    </html>
  );
}
