import { PricingTier } from "@/lib/pricing-data";

interface PricingCardProps {
  tier: PricingTier;
  isAnnual: boolean;
}

export default function PricingCard({ tier, isAnnual }: PricingCardProps) {
  const displayPrice = isAnnual ? tier.priceAnnual : tier.price;

  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-6 lg:p-8 transition-all duration-300 hover:scale-[1.02] ${
        tier.highlighted
          ? "border-cyan-500 bg-gradient-to-b from-cyan-950/50 to-gray-900 shadow-lg shadow-cyan-500/20"
          : "border-gray-700 bg-gray-900/50 hover:border-gray-500"
      }`}
    >
      {/* Badge */}
      {tier.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
              tier.badge === "Most Popular"
                ? "bg-cyan-500 text-white"
                : "bg-purple-500 text-white"
            }`}
          >
            {tier.badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
        <p className="mt-1 text-sm text-gray-400">{tier.description}</p>
      </div>

      {/* Price */}
      <div className="mb-6">
        {displayPrice !== null ? (
          <div className="flex items-baseline">
            <span className="text-4xl font-bold text-white">${displayPrice}</span>
            <span className="ml-1 text-gray-400">/month</span>
          </div>
        ) : (
          <div className="flex items-baseline">
            <span className="text-3xl font-bold text-white">Custom</span>
          </div>
        )}
        {isAnnual && displayPrice !== null && displayPrice > 0 && (
          <p className="mt-1 text-xs text-gray-500">
            Billed annually (${displayPrice * 12}/year)
          </p>
        )}
      </div>

      {/* CTA Button */}
      <a
        href={tier.ctaLink}
        className={`mb-6 block w-full rounded-lg py-3 text-center text-sm font-semibold transition-all ${
          tier.highlighted
            ? "bg-cyan-500 text-white hover:bg-cyan-400 shadow-lg shadow-cyan-500/25"
            : tier.id === "enterprise"
            ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-500 hover:to-cyan-500"
            : "bg-gray-700 text-white hover:bg-gray-600"
        }`}
      >
        {tier.cta}
      </a>

      {/* Features List */}
      <div className="flex-1">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
          What&apos;s included
        </p>
        <ul className="space-y-2.5">
          {tier.featureList.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
              <svg
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-400"
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
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
