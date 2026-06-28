import Head from "next/head";
import Link from "next/link";

const panels = [
  { label: "Active AI Workers", value: "9", detail: "Hermes, TARS, Sapphire, Guardian, Atlas, Forge, Apollo, Nova, Sentinel" },
  { label: "Running Tasks", value: "24", detail: "Research, deployment checks, document ingestion, workflow execution" },
  { label: "Human Reviews", value: "3", detail: "Approval gates waiting before external actions" },
  { label: "Memory Layer", value: "RAG", detail: "Supabase + Pinecone + DKOS routing" },
];

const timeline = [
  "Founder creates operating goal",
  "Hermes decomposes goal into tasks",
  "Atlas retrieves memory and documents",
  "Sapphire enriches research context",
  "Guardian checks policy and approval requirements",
  "Forge prepares deployment or workflow execution",
];

export default function DemoPage() {
  return (
    <>
      <Head>
        <title>Command Center Demo — D3VONN.IO</title>
        <meta name="description" content="Preview the D3VONN.IO command center for AI worker orchestration, memory, tasks, and human approvals." />
        <link rel="canonical" href="https://d3vonn.io/demo" />
      </Head>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Live Demo Path</p>
            <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">D3VONN Command Center Preview</h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-400">
              A product-facing preview of the AI Business Operating System: workers, tasks, approvals, memory, and deployment intelligence.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {panels.map((panel) => (
              <div key={panel.label} className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
                <p className="text-sm text-gray-500">{panel.label}</p>
                <p className="mt-2 text-4xl font-bold text-white">{panel.value}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{panel.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white">Workflow Timeline</h2>
                  <p className="text-sm text-gray-500">How work moves through the system</p>
                </div>
                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">Simulated Preview</span>
              </div>
              <div className="space-y-3">
                {timeline.map((item, index) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-gray-800 bg-gray-900/60 p-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/10 text-xs font-bold text-cyan-300">{index + 1}</span>
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
              <h2 className="text-xl font-bold text-white">Next Product Actions</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Connect this page to the real authenticated app when the public demo environment is ready. Until then, this page clearly explains the product flow without pretending a login demo is active.
              </p>
              <div className="mt-6 space-y-3">
                <Link href="/pricing" className="block rounded-lg bg-cyan-500 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-cyan-400">
                  View Pricing
                </Link>
                <Link href="/contact?inquiry=demo" className="block rounded-lg border border-gray-700 px-5 py-3 text-center text-sm font-semibold text-gray-300 hover:text-white">
                  Request Guided Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
