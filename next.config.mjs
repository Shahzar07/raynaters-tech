/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.simpleicons.org' },
      { protocol: 'https', hostname: 'd8j0ntlcm91z4.cloudfront.net' },
    ],
  },
  // Canonical host: apex → www, 308 permanent (Next.js maps permanent:true to 308).
  // Also set the apex → www redirect in Vercel Domains panel for the HTTP-level redirect
  // (covers requests that never reach Next.js, e.g. bare http://raynaters.tech).
  async redirects() {
    return [
      // Case studies relocated out of the GTA (Sep 2026).
      { source: '/case-studies/home-renovation-quote-follow-up-vaughan', destination: '/case-studies/home-renovation-quote-follow-up-manchester', permanent: true },
      { source: '/case-studies/kitchen-company-google-reviews-oakville', destination: '/case-studies/kitchen-company-google-reviews-melbourne', permanent: true },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'raynaters.tech' }],
        destination: 'https://www.raynaters.tech/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
