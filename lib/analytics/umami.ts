/**
 * Umami analytics configuration.
 *
 * The tracker itself is injected once in the root layout via <Umami />.
 * Nothing else in the app talks to it directly: the hosted script patches
 * the History API on load, so client-side route changes are counted as
 * pageviews without any help from us.
 */

export const UMAMI_WEBSITE_ID = '4da37b2f-54f0-449d-a3a8-5bcd3b19db81';

export const UMAMI_SCRIPT_URL = 'https://cloud.umami.is/script.js';
