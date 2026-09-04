import Script from 'next/script';
import { UMAMI_SCRIPT_URL, UMAMI_WEBSITE_ID } from '@/lib/analytics/umami';

/**
 * Umami Cloud tracker.
 *
 * Umami asks for the tag in <head>, so it runs with `beforeInteractive`:
 * Next renders that into the server-side head rather than the body. The
 * script is a couple of KB and loads deferred, so it costs nothing at
 * render time.
 *
 * `beforeInteractive` is only honoured in the root layout — keep this
 * component mounted from app/layout.tsx and nowhere else.
 *
 * Client-side navigations need no extra code: the tracker wraps
 * `history.pushState`/`replaceState` itself and records each route change.
 */
export function Umami() {
  return (
    <Script
      id="umami"
      strategy="beforeInteractive"
      src={UMAMI_SCRIPT_URL}
      data-website-id={UMAMI_WEBSITE_ID}
    />
  );
}
