import Script from 'next/script';

/**
 * LeadConnectorChat Component
 *
 * Loads the LeadConnector (GoHighLevel) chat widget. The loader injects and
 * positions its own floating bubble, so nothing is rendered here — the widget
 * only needs its script on the page.
 *
 * This is the site's single chat widget; it replaced the LiveAvatar embed so
 * two bubbles never compete for the same corner.
 */
export default function LeadConnectorChat() {
  return (
    <Script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="6a9094d614268c8f2ed03bd6"
      strategy="afterInteractive"
    />
  );
}
