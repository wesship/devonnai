import { pricingTiers } from "@/lib/pricing-data";

const featureRows = [
  { label: "Executions/month", key: "executions" as const },
  { label: "Active Agents", key: "activeAgents" as const },
  { label: "Workflows", key: "workflows" as const },
  { label: "Marketplace Access", key: "marketplaceAccess" as const },
  { label: "Support", key: "support" as const },
  { label: "Team / Users", key: "teamUsers" as const },
  { label: "Security & Governance", key: "security" as const },
];

export default function ComparisonTable() {
  return (
    <section className="py-16 lg:py-24 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Compare Plans
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            A detailed comparison of features across all tiers.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-gray-700">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-gray-700 bg-gray-900/80">
                <th className="px-4 py-4 text-left text-sm font-semibold text-gray-300">
                  Feature
                </th>
                {pricingTiers.map((tier) => (
                  <th
                    key={tier.id}
                    className={`px-3 py-4 text-center text-sm font-semibold ${
                      tier.highlighted ? "text-cyan-400" : "text-gray-300"
                    }`}
                  >
                    {tier.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureRows.map((row, index) => (
                <tr
                  key={row.key}
                  className={`border-b border-gray-800 ${
                    index % 2 === 0 ? "bg-gray-900/30" : "bg-gray-900/10"
                  }`}
                >
                  <td className="px-4 py-3 text-sm font-medium text-gray-300">
                    {row.label}
                  </td>
                  {pricingTiers.map((tier) => (
                    <td
                      key={tier.id}
                      className={`px-3 py-3 text-center text-xs ${
                        tier.highlighted ? "text-gray-200" : "text-gray-400"
                      }`}
                    >
                      {tier.features[row.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
