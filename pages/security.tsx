import Head from "next/head";

const controls = [
  "JWT-based authentication architecture",
  "Role-based access control patterns",
  "Human-in-the-loop approval gates",
  "Audit event capture for agent actions",
  "Environment variable separation for secrets",
  "Server-side API proxying for sensitive keys",
  "Document and memory isolation design",
  "Deployment checks through CI/CD",
];

export default function SecurityPage() {
  return (
    <>
      <Head>
        <title>Security — D3VONN.IO</title>
        <meta name="description" content="D3VONN.IO security overview covering authentication, approvals, audit logs, secret handling, and enterprise readiness." />
        <link rel="canonical" href="https://d3vonn.io/security" />
      </Head>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Security</p>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Security-first AI operations.</h1>
          <p className="mt-5 text-lg leading-relaxed text-gray-400">
            D3VONN.IO is being built around controlled autonomy: authentication, permissions, approval gates, auditability, and safe deployment practices. Certifications should only be claimed after formal completion.
          </p>

          <div className="mt-10 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5 text-sm text-amber-100">
            Compliance note: D3VONN.IO should use “SOC 2 ready” or “security roadmap” language until a formal audit and certification are complete.
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {controls.map((control) => (
              <div key={control} className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 text-sm text-gray-300">
                {control}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
