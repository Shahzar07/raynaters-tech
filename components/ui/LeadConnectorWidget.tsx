import Script from 'next/script';

/** LeadConnector (GoHighLevel) widget this site is wired to. */
const WIDGET_ID = '6a9094d614268c8f2ed03bd6';

/**
 * The site's AI assistant, served by LeadConnector.
 *
 * This replaces the hand-built LiveAvatar panel. There is no wrapper markup
 * on purpose: the loader injects and owns its own floating bubble, panel and
 * open/close state, so anything we drew around it would either fight it or
 * end up as a second, dead bubble in the corner.
 *
 * `afterInteractive` rather than `beforeInteractive`: the assistant is not
 * part of first paint, and the loader pulls in a second script plus the
 * widget's own assets. Blocking hydration on that would cost Core Web Vitals
 * on every page for a control nobody clicks in the first second.
 *
 * The loader reads its configuration from its own `data-*` attributes via
 * `document.currentScript`, which resolves correctly for a dynamically
 * inserted classic script — so the attributes must stay on this element and
 * must not be renamed.
 */
export function LeadConnectorWidget() {
  return (
    <Script
      id="leadconnector-widget"
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id={WIDGET_ID}
      strategy="afterInteractive"
    />
  );
}
