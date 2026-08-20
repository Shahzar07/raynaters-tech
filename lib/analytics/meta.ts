/**
 * Meta (Facebook) Pixel helpers.
 *
 * The pixel itself is injected once in the root layout via <MetaPixel />.
 * Everything else in the app fires events through `trackMeta`, which is a
 * no-op when the pixel has not loaded — an ad blocker, a bot, or the script
 * simply not being ready yet must never throw inside a booking flow.
 */

export const META_PIXEL_ID = '1358524779119896';

type Fbq = {
  (...args: unknown[]): void;
  queue?: unknown[];
};

declare global {
  interface Window {
    fbq?: Fbq;
  }
}

/** Fire a Meta standard or custom event. Safe to call anywhere, any time. */
export function trackMeta(event: string, params?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return;
  if (typeof window.fbq !== 'function') return;
  window.fbq('track', event, params);
}

/**
 * The conversion that matters: a booked Agent Audit.
 *
 * Two standard events fire for one booking, deliberately:
 *   - `Lead`     — what call-booking campaigns are almost always set to
 *                  optimise for, so the ad account has the signal it needs.
 *   - `Schedule` — Meta's exact semantic match for booking an appointment.
 *
 * They are separate events in Events Manager, not a double count of one
 * event. Optimise for whichever you configure the campaign against; if you
 * only ever want one, delete the other line here.
 */
export function trackBooking(params?: Record<string, unknown>): void {
  trackMeta('Lead', params);
  trackMeta('Schedule', params);
}
