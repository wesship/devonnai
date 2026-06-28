import Head from "next/head";

const systems = [
  { name: "Frontend", provider: "Vercel", state: "Live" },
  { name: "API", provider: "Railway", state: "Live" },
  { name: "Database", provider: "Supabase", state: "Configured" },
  { name: "Vector Memory", provider: "Pinecone", state: "Configured" },
  { name: "Orchestrator", provider: "Hermes", state: "Active" },
  { name: "CI/CD", provider: "GitHub Actions", state: "Tracked" },
];

export default function StatusPage() {
  return (
    <>
      <Head>
        <title>Status — D3VONN.IO</title>
        <meta name="description" content="Public D3VONN.IO system status overview for frontend, API, database, vector memory, orchestrator, and CI/CD surfaces." />
        <link rel="canonical" href="https://d3vonn.io/status" />
      </Head>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">System Status</p>
            <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">D3VONN.IO operational surface.</h1>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              This page provides a buyer-facing status overview. Connect it to live health endpoints when the public status API is ready.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-800">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-900 text-gray-200">
                <tr>
                  <th className="px-4 py-4">System</th>
                  <th className="px-4 py-4">Provider</th>
                  <th className="px-4 py-4">State</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 bg-gray-950/60">
                {systems.map((system) => (
                  <tr key={system.name}>
                    <td className="px-4 py-4 font-medium text-white">{system.name}</td>
                    <td className="px-4 py-4 text-gray-400">{system.provider}</td>
                    <td className="px-4 py-4"><span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">{system.state}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
