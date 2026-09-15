// Minimal GA4 event helper — uses the site's existing gtag, no new deps.
export function trackEvent(name: string, params: Record<string, string> = {}): void {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === "function") gtag("event", name, params);
}
