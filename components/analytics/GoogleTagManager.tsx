import Script from 'next/script';
import { GTM_CONTAINER_ID } from '@/lib/analytics/gtm';

/**
 * Google Tag Manager container snippet.
 *
 * Google asks for this as high in <head> as possible, so it runs with
 * `beforeInteractive`: Next inlines that into the server-rendered head,
 * ahead of every other tag on the page. The snippet body only queues
 * `gtm.start` and appends an async <script>, so nothing here blocks render.
 *
 * `beforeInteractive` is only honoured in the root layout — keep this
 * component mounted from app/layout.tsx and nowhere else.
 *
 * Client-side navigations need no extra code: the site's route changes are
 * History API pushes, which the container picks up with its built-in
 * History Change trigger.
 */
export function GoogleTagManager() {
  return (
    <Script id="google-tag-manager" strategy="beforeInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');`}
    </Script>
  );
}

/**
 * The paired noscript iframe. Google asks for it immediately after the
 * opening <body> tag, so it is rendered as the first child of <body>.
 */
export function GoogleTagManagerNoScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
