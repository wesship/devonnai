import Head from "next/head";
import Link from "next/link";
import LiveMarketplace from "@/components/marketplace/LiveMarketplace";

export default function MarketplacePage() {
  return (
    <>
      <Head>
        <title>Agent Marketplace — D3VONN.IO</title>
        <meta name="description" content="Discover and deploy pre-built AI agents. From free community tools to enterprise-grade automation solutions. Publish your own agents and earn revenue." />
        <link rel="canonical" href="https://d3vonn.io/marketplace" />
        <meta property="og:title" content="Agent Marketplace — D3VONN.IO" />
        <meta property="og:description" content="Discover and deploy pre-built AI agents from the D3VONN.IO marketplace." />
        <meta property="og:url" content="https://d3vonn.io/marketplace" />
      </Head>

      {/* Hero */}
      <section className="pt-16 pb-8 lg:pt-24 lg:pb-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Agent{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Marketplace
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Discover, deploy, and monetize AI agents. Access hundreds of pre-built
            automation solutions or publish your own to earn revenue.
          </p>
        </div>
      </section>

      {/* Live Marketplace with search, filters, and dynamic agent cards */}
      <LiveMarketplace />

      {/* Publish CTA */}
      <section className="py-16 lg:py-24 border-t border-gray-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Build and sell your own agents</h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Publish agents to the marketplace and earn 80% revenue share. We handle billing, distribution, and support infrastructure.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 px-8 py-3.5 text-sm font-semibold text-white hover:from-purple-500 hover:to-cyan-500 transition-all">
              Become a Creator
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link href="/pricing" className="inline-flex items-center gap-2 rounded-lg border border-gray-600 px-8 py-3.5 text-sm font-semibold text-gray-300 hover:border-gray-400 hover:text-white transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
