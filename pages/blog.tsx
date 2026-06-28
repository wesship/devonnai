import Head from "next/head";
import Link from "next/link";

const posts = [
  { title: "Why Businesses Need an AI Operating System", tag: "Strategy", summary: "The shift from single chatbots to coordinated AI workers and command-center operations." },
  { title: "Inside the Hermes Orchestration Layer", tag: "Architecture", summary: "How D3VONN.IO thinks about agent routing, approvals, memory, and execution." },
  { title: "Building Trust for Autonomous Workflows", tag: "Security", summary: "Why human approval gates, audit logs, and clear status pages matter for enterprise AI." },
];

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog — D3VONN.IO</title>
        <meta name="description" content="D3VONN.IO blog covering AI business operating systems, agent orchestration, workflow automation, and enterprise AI trust." />
        <link rel="canonical" href="https://d3vonn.io/blog" />
      </Head>
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Insights</p>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">D3VONN.IO Blog</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-400">Product notes, architecture thinking, and operator guidance for autonomous AI workers.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <article key={post.title} className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{post.tag}</p>
                <h2 className="mt-3 text-xl font-bold text-white">{post.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{post.summary}</p>
                <Link href="/docs" className="mt-5 inline-flex text-sm font-semibold text-cyan-300 hover:text-cyan-200">Read docs →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
