import Head from "next/head";

const roadmap = [
  { phase: "Sprint 1", title: "Public Conversion Layer", items: ["Homepage rebuild", "Proof bar", "Demo path", "Trust navigation", "Pricing clarity"] },
  { phase: "Sprint 2", title: "Command Center", items: ["Authenticated demo", "Agent dashboard", "Workflow timeline", "Memory preview", "Approval queue"] },
  { phase: "Sprint 3", title: "Developer Portal", items: ["OpenAPI docs", "Webhook examples", "SDK guidance", "API playground", "Integration recipes"] },
  { phase: "Sprint 4", title: "Enterprise Readiness", items: ["Live status API", "Security evidence", "Case studies", "Industry pages", "Performance polish"] },
];

export default function RoadmapPage() {
  return (
    <>
      <Head>
        <title>Roadmap — D3VONN.IO</title>
        <meta name="description" content="D3VONN.IO roadmap for command center, developer portal, enterprise readiness, and AI workforce features." />
        <link rel="canonical" href="https://d3vonn.io/roadmap" />
      </Head>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Roadmap</p>
            <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Building from landing page to operating system.</h1>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {roadmap.map((item) => (
              <div key={item.phase} className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
                <p className="text-sm font-semibold text-cyan-300">{item.phase}</p>
                <h2 className="mt-2 text-xl font-bold text-white">{item.title}</h2>
                <ul className="mt-4 space-y-2 text-sm text-gray-400">
                  {item.items.map((task) => <li key={task}>• {task}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
