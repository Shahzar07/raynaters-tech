'use client';

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

/**
 * CalEmbed Component
 * 
 * Integrates Cal.com booking form with custom theme variables
 * matching the Raynaters design system.
 */
export default function CalEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"in-20mins"});
      cal("ui", {
        "cssVarsPerTheme": {
          "light": { "cal-brand": "#000000" },
          "dark": { "cal-brand": "#d5faa9" }
        },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    })();
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
