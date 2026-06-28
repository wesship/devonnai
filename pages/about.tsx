import Head from "next/head";
import Link from "next/link";

const pillars = [
  { title: "AI Workforce", body: "Specialized agents for planning, research, support, sales, compliance, DevOps, and operations." },
  { title: "Hermes Orchestration", body: "A command layer that routes work, manages task state, and coordinates human approval before critical actions." },
  { title: "DKOS Memory", body: "A knowledge operating system that turns documents into structured, retrievable context for more accurate agent work." },
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About — D3VONN.IO</title>
        <meta name="description" content="About D3VONN.IO, the AI Business Operating System for autonomous AI workers, Hermes orchestration, and DKOS memory." />
        <link rel="canonical" href="https://d3vonn.io/about" />
      </Head>
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">About</p>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">D3VONN.IO is built to make AI workers operational.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-400">
            D3VONN.IO is an AI Business Operating System designed for founders and teams that need more than chat. It combines agent orchestration, document intelligence, memory, approval gates, and workflow execution into one command center.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
                <h2 className="text-lg font-bold text-white">{pillar.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{pillar.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/demo" className="inline-flex justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-white hover:bg-cyan-400">Launch Demo</Link>
            <Link href="/docs" className="inline-flex justify-center rounded-lg border border-gray-700 px-6 py-3 text-sm font-semibold text-gray-300 hover:text-white">Read Docs</Link>
          </div>
        </div>
      </section>
    </>
  );
}
