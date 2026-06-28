export type AnalyticsEventName =
  | "demo_cta_click"
  | "pricing_cta_click"
  | "enterprise_cta_click"
  | "case_study_cta_click"
  | "signup_cta_click";

export function trackEvent(name: AnalyticsEventName, properties: Record<string, string> = {}) {
  if (typeof window === "undefined") return;

  const plausible = (window as typeof window & { plausible?: (event: string, options?: { props?: Record<string, string> }) => void }).plausible;
  if (typeof plausible === "function") {
    plausible(name, { props: properties });
  }
}
