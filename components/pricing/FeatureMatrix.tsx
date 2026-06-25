import { pricingTiers } from "@/lib/pricing-data";

interface FeatureRow {
  name: string;
  category: string;
  values: Record<string, string | boolean>;
}

const featureCategories: { name: string; features: FeatureRow[] }[] = [
  {
    name: "Agent Capabilities",
    features: [
      {
        name: "Multi-agent orchestration",
        category: "Agent Capabilities",
        values: { free: false, starter: false, pro: true, business: true, scale: true, enterprise: true },
      },
      {
        name: "Agent memory & context",
        category: "Agent Capabilities",
        values: { free: "Basic", starter: "Standard", pro: "Advanced", business: "Advanced", scale: "Unlimited", enterprise: "Custom" },
      },
      {
        name: "Voice-enabled agents",
        category: "Agent Capabilities",
        values: { free: false, starter: false, pro: true, business: true, scale: true, enterprise: true },
      },
      {
        name: "Custom AI model integration",
        category: "Agent Capabilities",
        values: { free: false, starter: false, pro: false, business: true, scale: true, enterprise: true },
      },
      {
        name: "Agent-to-agent communication",
        category: "Agent Capabilities",
        values: { free: false, starter: false, pro: true, business: true, scale: true, enterprise: true },
      },
    ],
  },
  {
    name: "Platform & API",
    features: [
      {
        name: "REST API access",
        category: "Platform & API",
        values: { free: false, starter: "Read-only", pro: "Full", business: "Full", scale: "Full", enterprise: "Full + Custom" },
      },
      {
        name: "WebSocket real-time",
        category: "Platform & API",
        values: { free: false, starter: false, pro: true, business: true, scale: true, enterprise: true },
      },
      {
        name: "Webhook integrations",
        category: "Platform & API",
        values: { free: "1", starter: "5", pro: "25", business: "100", scale: "Unlimited", enterprise: "Unlimited" },
      },
      {
        name: "White-label / Custom branding",
        category: "Platform & API",
        values: { free: false, starter: false, pro: false, business: false, scale: true, enterprise: true },
      },
      {
        name: "SDK access (Python, Node, Go)",
        category: "Platform & API",
        values: { free: false, starter: false, pro: true, business: true, scale: true, enterprise: true },
      },
    ],
  },
  {
    name: "Team & Collaboration",
    features: [
      {
        name: "Team workspaces",
        category: "Team & Collaboration",
        values: { free: false, starter: false, pro: "1", business: "5", scale: "Unlimited", enterprise: "Unlimited" },
      },
      {
        name: "Role-based access (RBAC)",
        category: "Team & Collaboration",
        values: { free: false, starter: false, pro: false, business: true, scale: true, enterprise: true },
      },
      {
        name: "Shared agent library",
        category: "Team & Collaboration",
        values: { free: false, starter: false, pro: true, business: true, scale: true, enterprise: true },
      },
      {
        name: "Approval workflows",
        category: "Team & Collaboration",
        values: { free: false, starter: false, pro: false, business: true, scale: true, enterprise: true },
      },
      {
        name: "Activity audit trail",
        category: "Team & Collaboration",
        values: { free: false, starter: false, pro: "30 days", business: "90 days", scale: "1 year", enterprise: "Unlimited" },
      },
    ],
  },
  {
    name: "Analytics & Monitoring",
    features: [
      {
        name: "Execution analytics",
        category: "Analytics & Monitoring",
        values: { free: "Basic", starter: "Standard", pro: "Advanced", business: "Advanced", scale: "Premium", enterprise: "Custom" },
      },
      {
        name: "Cost attribution",
        category: "Analytics & Monitoring",
        values: { free: false, starter: false, pro: true, business: true, scale: true, enterprise: true },
      },
      {
        name: "Performance benchmarks",
        category: "Analytics & Monitoring",
        values: { free: false, starter: false, pro: false, business: true, scale: true, enterprise: true },
      },
      {
        name: "Custom dashboards",
        category: "Analytics & Monitoring",
        values: { free: false, starter: false, pro: false, business: "3", scale: "Unlimited", enterprise: "Unlimited" },
      },
      {
        name: "Real-time alerting",
        category: "Analytics & Monitoring",
        values: { free: false, starter: "Email", pro: "Email + Slack", business: "Multi-channel", scale: "Multi-channel", enterprise: "Custom" },
      },
    ],
  },
  {
    name: "Security & Compliance",
    features: [
      {
        name: "SSO / SAML",
        category: "Security & Compliance",
        values: { free: false, starter: false, pro: false, business: false, scale: true, enterprise: true },
      },
      {
        name: "Data encryption (at rest)",
        category: "Security & Compliance",
        values: { free: true, starter: true, pro: true, business: true, scale: true, enterprise: true },
      },
      {
        name: "SOC 2 Type II",
        category: "Security & Compliance",
        values: { free: false, starter: false, pro: false, business: true, scale: true, enterprise: true },
      },
      {
        name: "HIPAA compliance",
        category: "Security & Compliance",
        values: { free: false, starter: false, pro: false, business: false, scale: false, enterprise: true },
      },
      {
        name: "Custom deployment (VPC/On-prem)",
        category: "Security & Compliance",
        values: { free: false, starter: false, pro: false, business: false, scale: false, enterprise: true },
      },
    ],
  },
  {
    name: "Marketplace",
    features: [
      {
        name: "Marketplace access",
        category: "Marketplace",
        values: { free: "Demo", starter: "Standard", pro: "Full", business: "Full + Private", scale: "Full + Custom", enterprise: "Full + Custom" },
      },
      {
        name: "Publish agents",
        category: "Marketplace",
        values: { free: false, starter: false, pro: true, business: true, scale: true, enterprise: true },
      },
      {
        name: "Revenue share (creator)",
        category: "Marketplace",
        values: { free: false, starter: false, pro: "70%", business: "75%", scale: "80%", enterprise: "Custom" },
      },
      {
        name: "Private agent store",
        category: "Marketplace",
        values: { free: false, starter: false, pro: false, business: true, scale: true, enterprise: true },
      },
    ],
  },
];

function CellValue({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <svg className="h-5 w-5 text-green-400 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    ) : (
      <svg className="h-5 w-5 text-gray-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    );
  }
  return <span className="text-xs text-gray-300">{value}</span>;
}

export default function FeatureMatrix() {
  const tierIds = ["free", "starter", "pro", "business", "scale", "enterprise"];
  const tierNames = pricingTiers.map((t) => t.name);

  return (
    <section className="py-16 lg:py-24 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Detailed <span className="text-gradient">Feature Comparison</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Compare every feature across plans to find the perfect fit for your needs.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-gray-700">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-gray-700 bg-gray-900/80">
                <th className="px-4 py-4 text-left text-sm font-medium text-gray-400 w-[240px]">Feature</th>
                {tierNames.map((name, i) => (
                  <th
                    key={name}
                    className={`px-3 py-4 text-center text-sm font-semibold ${
                      i === 2 ? "text-cyan-400 bg-cyan-900/10" : "text-white"
                    }`}
                  >
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureCategories.map((category) => (
                <>
                  <tr key={category.name} className="border-b border-gray-800 bg-gray-800/30">
                    <td
                      colSpan={7}
                      className="px-4 py-3 text-xs font-bold text-gray-300 uppercase tracking-wider"
                    >
                      {category.name}
                    </td>
                  </tr>
                  {category.features.map((feature) => (
                    <tr key={feature.name} className="border-b border-gray-800/50 hover:bg-gray-800/20 transition-colors">
                      <td className="px-4 py-3 text-sm text-gray-300">{feature.name}</td>
                      {tierIds.map((tierId, i) => (
                        <td
                          key={tierId}
                          className={`px-3 py-3 text-center ${i === 2 ? "bg-cyan-900/5" : ""}`}
                        >
                          <CellValue value={feature.values[tierId]} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
