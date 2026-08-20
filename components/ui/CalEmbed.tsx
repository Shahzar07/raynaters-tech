'use client';

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { trackBooking, trackMeta } from "@/lib/analytics/meta";

/**
 * CalEmbed Component
 *
 * Integrates Cal.com booking form with custom theme variables
 * matching the Raynaters design system.
 *
 * This is the only place a booking can complete, so it is also where the
 * Meta conversion fires. Cal.com runs the booking inside its own iframe —
 * the pixel cannot see that on its own, so we subscribe to the embed's
 * `bookingSuccessful` event and report it ourselves.
 */
export default function CalEmbed() {
  useEffect(() => {
    let cancelled = false;

    (async function () {
      const cal = await getCalApi({ "namespace": "in-20mins" });
      if (cancelled) return;

      cal("ui", {
        "cssVarsPerTheme": {
          "light": { "cal-brand": "#000000" },
          "dark": { "cal-brand": "#d5faa9" }
        },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });

      // The conversion: an Agent Audit actually booked.
      cal("on", {
        action: "bookingSuccessful",
        callback: () => {
          trackBooking({
            content_name: 'Agent Audit',
            content_category: 'Booking',
          });
        },
      });

      // Reaching a time slot is the strongest mid-funnel signal Cal exposes.
      // Useful for diagnosing drop-off between ad click and booked call.
      cal("on", {
        action: "linkReady",
        callback: () => {
          trackMeta('ViewContent', {
            content_name: 'Agent Audit booking form',
            content_category: 'Booking',
          });
        },
      });
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="h-full w-full overflow-hidden rounded-none bg-bg">
      <Cal
        namespace="in-20mins"
        calLink="automate-with-raynaters/in-20mins"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ "layout": "month_view", "useSlotsViewOnSmallScreen": "true" }}
      />
    </div>
  );
}
