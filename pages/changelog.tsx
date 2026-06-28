import Head from "next/head";

const updates = [
  { date: "June 2026", title: "Public trust layer", items: ["Added homepage proof metrics", "Added demo, docs, security, status, roadmap, and case study routes", "Expanded footer navigation"] },
  { date: "June 2026", title: "Pricing implementation", items: ["Starter, Operator, Pro, Business, and Enterprise positioning", "Monthly and annual pricing surface", "Enterprise contact path"] },
  { date: "June 2026", title: "Command center positioning", items: ["AI workforce messaging", "Hermes orchestration story", "DKOS document intelligence pipeline"] },
];

export default function ChangelogPage() {
  return (
    <>
      <Head>
        <title>Changelog — D3VONN.IO</title>
        <meta name="description" content="D3VONN.IO changelog for public site, pricing, trust layer, and AI Business Operating System updates." />
        <link rel="canonical" href="https://d3vonn.io/changelog" />
      </Head>
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Product Updates</p>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Changelog</h1>
          <div className="mt-10 space-y-6">
            {updates.map((update) => (
              <div key={update.title} className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
                <p className="text-sm text-cyan-300">{update.date}</p>
                <h2 className="mt-2 text-xl font-bold text-white">{update.title}</h2>
                <ul className="mt-4 space-y-2 text-sm text-gray-400">
                  {update.items.map((item) => <li key={item}>• {item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
