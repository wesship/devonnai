import { useState } from "react";
import { marketplaceAgents, marketplaceStats, MarketplaceAgent } from "@/lib/marketplace-data";

function AgentCard({ agent }: { agent: MarketplaceAgent }) {
  return (
    <div className="group rounded-xl border border-gray-700 bg-gray-900/50 p-5 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-xs font-bold text-gray-300 ring-1 ring-gray-700">
            {agent.creatorAvatar}
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
              {agent.name}
            </h4>
            <p className="text-xs text-gray-500">{agent.creator}</p>
          </div>
        </div>
        {agent.verified && (
          <svg className="h-4 w-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </div>

      <p className="text-xs text-gray-400 mb-3 line-clamp-2">{agent.description}</p>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {agent.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-md bg-gray-800 px-2 py-0.5 text-[10px] text-gray-400 ring-1 ring-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-gray-800">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs text-gray-300">{agent.rating}</span>
            <span className="text-xs text-gray-500">({(agent.reviews / 1000).toFixed(1)}k)</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            <span className="text-xs text-gray-500">{agent.installs}</span>
          </div>
        </div>
        <span className={`text-sm font-bold ${agent.priceValue === 0 ? "text-green-400" : "text-cyan-400"}`}>
          {agent.price}
        </span>
      </div>

      {(agent.trending || agent.featured) && (
        <div className="flex gap-1.5 mt-3">
          {agent.trending && (
            <span className="inline-flex items-center rounded-full bg-orange-900/30 px-2 py-0.5 text-[10px] font-medium text-orange-400 ring-1 ring-orange-400/30">
              🔥 Trending
            </span>
          )}
          {agent.featured && (
            <span className="inline-flex items-center rounded-full bg-cyan-900/30 px-2 py-0.5 text-[10px] font-medium text-cyan-400 ring-1 ring-cyan-400/30">
              ⭐ Featured
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default function LiveMarketplace() {
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["all", "Business", "Workflow", "Utility", "Infrastructure", "Security", "DevOps"];

  const filteredAgents = marketplaceAgents.filter((agent) => {
    const matchesCategory = filter === "all" || agent.category === filter;
    const matchesSearch =
      searchQuery === "" ||
      agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <div className="rounded-lg border border-gray-700 bg-gray-900/50 p-4 text-center">
            <p className="text-2xl font-bold text-white">{marketplaceStats.totalAgents}</p>
            <p className="text-xs text-gray-400 mt-1">Total Agents</p>
          </div>
          <div className="rounded-lg border border-gray-700 bg-gray-900/50 p-4 text-center">
            <p className="text-2xl font-bold text-white">{marketplaceStats.totalInstalls}</p>
            <p className="text-xs text-gray-400 mt-1">Total Installs</p>
          </div>
          <div className="rounded-lg border border-gray-700 bg-gray-900/50 p-4 text-center">
            <p className="text-2xl font-bold text-white">{marketplaceStats.totalCreators}</p>
            <p className="text-xs text-gray-400 mt-1">Creators</p>
          </div>
          <div className="rounded-lg border border-gray-700 bg-gray-900/50 p-4 text-center">
            <p className="text-2xl font-bold text-white">{marketplaceStats.avgRating}</p>
            <p className="text-xs text-gray-400 mt-1">Avg Rating</p>
          </div>
        </div>

        {/* Search and filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              type="text"
              placeholder="Search agents by name or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-gray-700 bg-gray-900/50 pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                  filter === cat
                    ? "bg-cyan-600 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {cat === "all" ? "All" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Agent Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredAgents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>

        {filteredAgents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No agents found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}
