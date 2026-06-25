import { bundles } from "@/lib/pricing-data";

export default function BundlePricing() {
  const bundleGradients = [
    "from-cyan-600/20 to-blue-600/20 border-cyan-500/30",
    "from-purple-600/20 to-pink-600/20 border-purple-500/30",
    "from-orange-600/20 to-red-600/20 border-orange-500/30",
    "from-indigo-600/20 to-violet-600/20 border-indigo-500/30",
  ];

  return (
    <section className="py-16 lg:py-24 border-t border-gray-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Value Bundles
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Get more value with curated bundles that combine platform subscriptions
            with marketplace agents and bonus execution credits.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {bundles.map((bundle, index) => (
            <div
              key={index}
              className={`rounded-2xl border bg-gradient-to-br p-6 lg:p-8 transition-all duration-300 hover:scale-[1.01] ${bundleGradients[index]}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{bundle.name}</h3>
                  <p className="mt-1 text-sm text-gray-400">{bundle.description}</p>
                </div>
                <div className="text-right flex-shrink-0 ml-4">
                  <p className="text-2xl font-bold text-white">{bundle.price}</p>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {bundle.includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <svg
                      className="h-4 w-4 flex-shrink-0 text-cyan-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                <span className="text-xs font-medium text-green-400">{bundle.savings}</span>
                <a
                  href={bundle.price === "Custom" ? "/contact?inquiry=enterprise-bundle" : `/signup?bundle=${bundle.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {bundle.price === "Custom" ? "Contact Sales" : "Get Bundle"}
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
