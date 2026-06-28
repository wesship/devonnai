import Head from "next/head";
import Link from "next/link";

const proofMetrics = [
  { value: "573", label: "Tests passing" },
  { value: "41/41", label: "CI checks" },
  { value: "Railway", label: "Production API" },
  { value: "Vercel", label: "Global frontend" },
  { value: "Supabase", label: "Operational database" },
  { value: "Pinecone", label: "Vector memory" },
  { value: "Hermes", label: "Orchestrator" },
  { value: "DKOS", label: "Knowledge OS" },
];

const agents = [
  { name: "Hermes", role: "Master Orchestrator", detail: "Routes work, manages approvals, and coordinates the AI workforce." },
  { name: "TARS", role: "Workflow Planning", detail: "Breaks goals into executable steps, tasks, and handoffs." },
  { name: "Sapphire", role: "Research Intelligence", detail: "Runs structured research, summarizes findings, and enriches context." },
  { name: "Guardian", role: "Security & Compliance", detail: "Enforces approval gates, audit evidence, and safe operating rules." },
  { name: "Atlas", role: "Knowledge Retrieval", detail: "Finds the right documents, chunks, and memory nodes for each task." },
  { name: "Forge", role: "DevOps Automation", detail: "Supports deployment, CI/CD review, and production readiness workflows." },
];

const demoSteps = [
  "Create AI Worker",
  "Upload Documents",
  "Build Workflow",
  "Run Automation",
  "Watch Hermes Reason",
  "Approve Critical Actions",
  "Store Memory",
  "Review Audit Trail",
];

const pipeline = [
  "Upload",
  "Docling Parse",
  "Markdown Cleanup",
  "Metadata",
  "Knowledge Graph",
  "Semantic Chunks",
  "Embeddings",
  "Hermes Memory",
];

const trustItems = [
  "JWT authentication",
  "Role-based access control",
  "Human approval gates",
  "Audit logs",
  "Data isolation architecture",
  "API-first integrations",
  "Status and roadmap pages",
  "Security documentation",
];

const comparison = [
  ["Multi-agent workforce", "Built in", "Not native"],
  ["Long-term memory", "Supabase + Pinecone RAG", "Limited session memory"],
  ["Human approval", "Approval gates", "Manual prompting"],
  ["Knowledge graph", "DKOS pipeline", "Not native"],
  ["Workflow automation", "Agent + task orchestration", "Limited"],
  ["Enterprise surface", "Docs, status, security, pricing", "Varies"],
];

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "D3VONN.IO",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "D3VONN.IO is an AI Business Operating System for deploying, monitoring, and controlling autonomous AI workers across business operations.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>D3VONN.IO — AI Business Operating System</title>
        <meta
          name="description"
          content="Deploy, monitor, and control autonomous AI workers across sales, support, research, DevOps, and operations from one AI business command center."
        />
        <meta name="keywords" content="AI business operating system, AI agents, agent orchestration, autonomous AI workers, workflow automation, enterprise AI" />
        <link rel="canonical" href="https://d3vonn.io" />
        <meta property="og:title" content="D3VONN.IO — AI Business Operating System" />
        <meta property="og:description" content="Deploy, orchestrate, monitor, and scale autonomous AI workers from one command center." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://d3vonn.io" />
        <meta property="og:site_name" content="D3VONN.IO" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="D3VONN.IO — AI Business Operating System" />
        <meta name="twitter:description" content="The AI command center for autonomous business operations." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      </Head>

      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-28 lg:pb-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-500/20 via-blue-500/10 to-transparent blur-3xl" />
          <div className="absolute right-10 top-32 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-medium text-cyan-300">Production-first AI workforce platform</span>
          </div>

          <h1 className="mx-auto max-w-5xl text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Deploy, monitor, and control{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              autonomous AI workers
            </span>{" "}
            from one command center.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-400">
            D3VONN.IO is an AI Business Operating System for founders and teams that need agents for sales,
            support, research, DevOps, operations, knowledge management, and workflow automation.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/demo" className="inline-flex w-full items-center justify-center rounded-lg bg-cyan-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 sm:w-auto">
              Launch Command Center Demo
            </Link>
            <Link href="/pricing" className="inline-flex w-full items-center justify-center rounded-lg border border-gray-600 px-8 py-3.5 text-sm font-semibold text-gray-300 transition-colors hover:border-gray-400 hover:text-white sm:w-auto">
              View Pricing
            </Link>
            <Link href="/contact?inquiry=enterprise" className="inline-flex w-full items-center justify-center rounded-lg border border-purple-500/40 px-8 py-3.5 text-sm font-semibold text-purple-200 transition-colors hover:border-purple-300 hover:text-white sm:w-auto">
              Book Enterprise Demo
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-3 rounded-2xl border border-gray-800 bg-gray-950/70 p-4 backdrop-blur md:grid-cols-4 lg:grid-cols-8">
            {proofMetrics.map((metric) => (
              <div key={metric.label} className="rounded-xl border border-gray-800 bg-gray-900/60 p-4">
                <p className="text-lg font-bold text-white">{metric.value}</p>
                <p className="mt-1 text-xs text-gray-500">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-800 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Command Center</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">See the operating system, not another chatbot.</h2>
              <p className="mt-4 text-gray-400">
                D3VONN.IO turns goals into orchestrated work: agent planning, document intelligence, memory,
                human approval, execution logs, and business workflows in one control plane.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {demoSteps.map((step) => (
                  <div key={step} className="rounded-lg border border-gray-800 bg-gray-900/50 px-4 py-3 text-sm text-gray-300">
                    {step}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-gray-950 p-4 shadow-2xl shadow-cyan-950/30">
              <div className="rounded-xl border border-gray-800 bg-gray-900/80 p-4">
                <div className="mb-4 flex items-center justify-between border-b border-gray-800 pb-3">
                  <div>
                    <p className="text-sm font-semibold text-white">D3VONN Command Center</p>
                    <p className="text-xs text-gray-500">Live workforce preview</p>
                  </div>
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">Online</span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {["Active Workers: 9", "Running Tasks: 24", "Memory Nodes: RAG", "Human Reviews: 3", "Queue Health: Good", "API: Railway Live"].map((item) => (
                    <div key={item} className="rounded-lg border border-gray-800 bg-black/30 p-4 text-sm text-gray-300">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-lg border border-cyan-500/20 bg-cyan-500/5 p-4 text-left text-sm text-cyan-100">
                  Hermes is coordinating Sapphire research, Atlas retrieval, and Guardian review before deployment.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-800 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">AI Workforce</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">A coordinated agent team for real business operations.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent) => (
              <div key={agent.name} className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 transition-colors hover:border-cyan-500/40">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{agent.name}</h3>
                  <span className="rounded-full bg-gray-800 px-3 py-1 text-xs text-cyan-300">{agent.role}</span>
                </div>
                <p className="text-sm leading-relaxed text-gray-400">{agent.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-800 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">DKOS</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Knowledge Operating System for accurate agent work.</h2>
              <p className="mt-4 text-gray-400">
                Your documents become structured context: parsed, cleaned, tagged, graphed, chunked, embedded, and routed into Hermes memory.
              </p>
            </div>
            <div className="grid gap-3">
              {pipeline.map((stage, index) => (
                <div key={stage} className="flex items-center gap-3 rounded-xl border border-gray-800 bg-gray-900/50 p-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/10 text-xs font-bold text-cyan-300">{index + 1}</span>
                  <span className="text-sm font-medium text-gray-200">{stage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-800 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Trust Layer</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Built for credibility before scale.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              The public site now exposes the pages buyers expect: security, docs, status, roadmap, pricing, and case studies.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => (
              <div key={item} className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 text-sm text-gray-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-800 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Why D3VONN.IO is different</h2>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gray-800">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-900 text-gray-200">
                <tr>
                  <th className="px-4 py-4">Capability</th>
                  <th className="px-4 py-4">D3VONN.IO</th>
                  <th className="px-4 py-4">Generic AI Chat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 bg-gray-950/60">
                {comparison.map(([capability, d3vonn, generic]) => (
                  <tr key={capability}>
                    <td className="px-4 py-4 font-medium text-white">{capability}</td>
                    <td className="px-4 py-4 text-cyan-200">{d3vonn}</td>
                    <td className="px-4 py-4 text-gray-500">{generic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-800 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to operate with an AI workforce?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Start with the demo, review the pricing, or talk through an enterprise deployment path.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/demo" className="inline-flex w-full items-center justify-center rounded-lg bg-cyan-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 sm:w-auto">
              Launch Command Center Demo
            </Link>
            <Link href="/security" className="inline-flex w-full items-center justify-center rounded-lg border border-gray-600 px-8 py-3.5 text-sm font-semibold text-gray-300 transition-colors hover:border-gray-400 hover:text-white sm:w-auto">
              Review Security
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
