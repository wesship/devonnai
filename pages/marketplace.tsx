import Head from "next/head";
import Link from "next/link";
import { marketplaceCategories } from "@/lib/pricing-data";

const featuredAgents = [
  { name: "Sales Pipeline Orchestrator", category: "Business", price: "$49/mo", rating: 4.9, installs: "2.3k" },
  { name: "Security Scanner Pro", category: "Infrastructure", price: "$199/mo", rating: 4.8, installs: "1.8k" },
  { name: "Content Engine", category: "Workflow", price: "$79/mo", rating: 4.7, installs: "3.1k" },
  { name: "CI/CD Pipeline Manager", category: "DevOps", price: "$149/mo", rating: 4.9, installs: "4.2k" },
  { name: "Lead Qualifier AI", category: "Business", price: "$39/mo", rating: 4.6, installs: "5.7k" },
  { name: "Incident Responder", category: "Security", price: "$249/mo", rating: 4.8, installs: "1.2k" },
  { name: "Email Automation Suite", category: "Utility", price: "$19/mo", rating: 4.5, installs: "8.4k" },
  { name: "Data Pipeline Builder", category: "Workflow", price: "$99/mo", rating: 4.7, installs: "2.9k" },
];

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
      <section className="pt-16 pb-12 lg:pt-24 lg:pb-16">
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
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <input
                type="text"
                placeholder="Search agents..."
                className="w-full rounded-lg border border-gray-700 bg-gray-900 pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Browse by Category</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {marketplaceCategories.map((category) => (
              <div
                key={category.name}
                className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 hover:border-cyan-500/50 transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-semibold text-white">{category.name}</h3>
                  <span className="text-sm font-bold text-cyan-400">{category.priceRange}</span>
                </div>
                <p className="text-sm text-gray-400 mb-3">{category.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {category.examples.map((ex) => (
                    <span key={ex} className="inline-flex items-center rounded-md bg-gray-800 px-2 py-1 text-xs text-gray-300">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Agents */}
      <section className="py-16 border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Featured Agents</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredAgents.map((agent) => (
              <div
                key={agent.name}
                className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 hover:border-gray-700 transition-colors cursor-pointer group"
              >
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-3 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-colors">
                  <svg className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{agent.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{agent.category}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-cyan-400">{agent.price}</span>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <svg className="h-3 w-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {agent.rating} ({agent.installs})
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publish CTA */}
      <section className="py-16 lg:py-24 border-t border-gray-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Build and sell your own agents</h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Publish agents to the marketplace and earn 80% revenue share. We handle billing, distribution, and support infrastructure.
          </p>
          <div className="mt-8">
            <Link href="/signup" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 px-8 py-3.5 text-sm font-semibold text-white hover:from-purple-500 hover:to-cyan-500 transition-all">
              Become a Creator
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
