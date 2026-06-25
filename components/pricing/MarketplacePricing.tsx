import { marketplaceCategories } from "@/lib/pricing-data";

export default function MarketplacePricing() {
  const categoryColors = [
    "border-green-500/30 hover:border-green-500/60",
    "border-blue-500/30 hover:border-blue-500/60",
    "border-yellow-500/30 hover:border-yellow-500/60",
    "border-orange-500/30 hover:border-orange-500/60",
    "border-red-500/30 hover:border-red-500/60",
    "border-purple-500/30 hover:border-purple-500/60",
  ];

  const priceColors = [
    "text-green-400",
    "text-blue-400",
    "text-yellow-400",
    "text-orange-400",
    "text-red-400",
    "text-purple-400",
  ];

  return (
    <section className="py-16 lg:py-24 border-t border-gray-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Agent Marketplace
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Discover and deploy pre-built AI agents from our marketplace.
            From free community agents to enterprise-grade automation solutions.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {marketplaceCategories.map((category, index) => (
            <div
              key={index}
              className={`rounded-xl border bg-gray-900/50 p-5 transition-all duration-300 ${categoryColors[index]}`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-semibold text-white">{category.name}</h3>
                <span className={`text-sm font-bold ${priceColors[index]}`}>
                  {category.priceRange}
                </span>
              </div>
              <p className="text-sm text-gray-400 mb-3">{category.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {category.examples.map((example, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-md bg-gray-800 px-2 py-1 text-xs text-gray-300"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/marketplace"
            className="inline-flex items-center gap-2 rounded-lg border border-cyan-500/50 px-6 py-3 text-sm font-semibold text-cyan-400 hover:bg-cyan-500/10 transition-colors"
          >
            Explore the Marketplace
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
