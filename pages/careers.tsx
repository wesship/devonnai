import Head from "next/head";
import Link from "next/link";

const roles = [
  "AI Agent Engineer",
  "Full-Stack Product Engineer",
  "Developer Relations",
  "Enterprise Solutions Architect",
];

export default function CareersPage() {
  return (
    <>
      <Head>
        <title>Careers — D3VONN.IO</title>
        <meta name="description" content="Careers and future roles at D3VONN.IO for AI agents, full-stack engineering, developer relations, and enterprise solutions." />
        <link rel="canonical" href="https://d3vonn.io/careers" />
      </Head>
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Careers</p>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Build the AI Business Operating System.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-400">
            D3VONN.IO is preparing for roles across AI agent engineering, product systems, documentation, developer relations, and enterprise deployment.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {roles.map((role) => (
              <div key={role} className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
                <h2 className="text-lg font-bold text-white">{role}</h2>
                <p className="mt-3 text-sm text-gray-400">Future opportunity. Reach out if your work aligns with autonomous business operations and production AI systems.</p>
              </div>
            ))}
          </div>
          <Link href="/contact?inquiry=careers" className="mt-10 inline-flex rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-white hover:bg-cyan-400">Contact D3VONN</Link>
        </div>
      </section>
    </>
  );
}
