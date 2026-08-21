/**
 * Google Tag Manager helpers.
 *
 * The container itself is injected once in the root layout via
 * <GoogleTagManager /> (head snippet) and <GoogleTagManagerNoScript />
 * (the noscript iframe, first thing inside <body>).
 *
 * Everything else in the app talks to the container through `pushDataLayer`,
 * which is a no-op when the dataLayer is not available — an ad blocker, a
 * bot, or the container simply not being ready yet must never throw inside
 * a booking flow.
 */

export const GTM_CONTAINER_ID = 'GTM-5R7H98NL';

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Push an event onto the GTM dataLayer.
 *
 * The array is created here if the container has not written it yet, so an
 * event fired before gtm.js finishes loading is still picked up once it does.
 */
export function pushDataLayer(event: string, params?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}
