import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { pricingTiers } from "@/lib/pricing-data";
import PricingToggle from "@/components/pricing/PricingToggle";
import PricingCard from "@/components/pricing/PricingCard";
import ExecutionCredits from "@/components/pricing/ExecutionCredits";
import MarketplacePricing from "@/components/pricing/MarketplacePricing";
import BundlePricing from "@/components/pricing/BundlePricing";
import ComparisonTable from "@/components/pricing/ComparisonTable";
import PricingFAQ from "@/components/pricing/PricingFAQ";

// Structured data for SEO (SoftwareApplication + Offers)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "D3VONN.IO",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "AI Agent Orchestration Platform — deploy, manage, and scale autonomous AI agents with workflow automation, marketplace, and enterprise-grade security.",
  url: "https://d3vonn.io",
  offers: [
    {
      "@type": "Offer",
      name: "Free",
      price: "0",
      priceCurrency: "USD",
      priceValidUntil: "2027-12-31",
      description: "100 executions/month, 1 active agent, community access",
      url: "https://d3vonn.io/pricing",
    },
    {
      "@type": "Offer",
      name: "Starter",
      price: "29",
      priceCurrency: "USD",
      priceValidUntil: "2027-12-31",
      description: "1,000 executions/month, 3 active agents, basic workflows",
      url: "https://d3vonn.io/pricing",
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "79",
      priceCurrency: "USD",
      priceValidUntil: "2027-12-31",
      description:
        "5,000 executions/month, 10 active agents, full marketplace access",
      url: "https://d3vonn.io/pricing",
    },
    {
      "@type": "Offer",
      name: "Business",
      price: "249",
      priceCurrency: "USD",
      priceValidUntil: "2027-12-31",
      description:
        "20,000 executions/month, 25 active agents, team workspace, priority support",
      url: "https://d3vonn.io/pricing",
    },
    {
      "@type": "Offer",
      name: "Scale",
      price: "599",
      priceCurrency: "USD",
      priceValidUntil: "2027-12-31",
      description:
        "75,000 executions/month, 100 active agents, multi-team workspace, premium support",
      url: "https://d3vonn.io/pricing",
    },
    {
      "@type": "Offer",
      name: "Enterprise",
      price: "0",
      priceCurrency: "USD",
      priceValidUntil: "2027-12-31",
      description:
        "Custom executions, unlimited agents, SSO/RBAC, dedicated support, custom deployment",
      url: "https://d3vonn.io/pricing",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "0",
        priceCurrency: "USD",
        description: "Custom pricing — contact sales",
      },
    },
  ],
};

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <>
      <Head>
        {/* Primary SEO Meta Tags */}
        <title>Pricing — D3VONN.IO | AI Agent Orchestration Platform</title>
        <meta
          name="description"
          content="Explore D3VONN.IO pricing plans. From free to enterprise — deploy AI agents, automate workflows, and scale your AI workforce with transparent, usage-based pricing."
        />
        <meta
          name="keywords"
          content="D3VONN.IO pricing, AI agent platform pricing, AI automation pricing, agent marketplace, execution credits, SaaS pricing"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://d3vonn.io/pricing" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Pricing — D3VONN.IO | AI Agent Orchestration Platform"
        />
        <meta
          property="og:description"
          content="Transparent pricing for AI agent orchestration. Free tier available. Scale from solo developer to enterprise AI workforce."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://d3vonn.io/pricing" />
        <meta property="og:site_name" content="D3VONN.IO" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Pricing — D3VONN.IO | AI Agent Orchestration Platform"
        />
        <meta
          name="twitter:description"
          content="Transparent pricing for AI agent orchestration. Free tier available. Scale from solo developer to enterprise AI workforce."
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      {/* Hero Section */}
      <section className="pt-16 pb-8 lg:pt-24 lg:pb-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Simple, transparent{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              pricing
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Start free and scale as you grow. Pay only for what you use with
            execution-based credits, or choose a plan that fits your team.
          </p>
        </div>
      </section>

      {/* Billing Toggle */}
      <PricingToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />

      {/* Pricing Cards Grid */}
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.id} tier={tier} isAnnual={isAnnual} />
            ))}
          </div>
        </div>
      </section>

      {/* Execution Credits Section */}
      <div className="border-t border-gray-800">
        <ExecutionCredits />
      </div>

      {/* Marketplace Pricing Section */}
      <MarketplacePricing />

      {/* Bundle Pricing Section */}
      <BundlePricing />

      {/* Comparison Table */}
      <ComparisonTable />

      {/* FAQ Section */}
      <PricingFAQ />

      {/* Enterprise CTA */}
      <section className="py-16 lg:py-24 border-t border-gray-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Need a custom solution?
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Our enterprise team will work with you to build a custom AI agent
            deployment that fits your organization&apos;s unique requirements.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?inquiry=enterprise"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 px-8 py-3.5 text-sm font-semibold text-white hover:from-purple-500 hover:to-cyan-500 transition-all shadow-lg shadow-purple-500/25"
            >
              Contact Sales
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-600 px-8 py-3.5 text-sm font-semibold text-gray-300 hover:border-gray-400 hover:text-white transition-colors"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
