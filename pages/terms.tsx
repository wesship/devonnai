import Head from "next/head";

const terms = [
  ["Platform Use", "D3VONN.IO provides AI workflow, agent orchestration, documentation, and automation surfaces. Users are responsible for reviewing outputs before acting on them."],
  ["No Professional Advice", "AI-generated content may support research and operations but should not replace legal, financial, medical, compliance, or engineering review."],
  ["Acceptable Use", "Do not use the platform for unlawful activity, credential abuse, malware, privacy violations, or unsafe automation."],
  ["Beta Availability", "Some functionality may be private beta, experimental, or subject to change as the platform matures."],
];

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms of Service — D3VONN.IO</title>
        <meta name="description" content="D3VONN.IO terms of service for platform use, acceptable use, beta status, and user responsibility." />
        <link rel="canonical" href="https://d3vonn.io/terms" />
      </Head>
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Legal</p>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Terms of Service</h1>
          <p className="mt-5 text-gray-400">These public terms provide a baseline operating policy for D3VONN.IO visitors and beta users. Enterprise contracts should supersede this page where applicable.</p>
          <div className="mt-10 space-y-5">
            {terms.map(([title, body]) => (
              <div key={title} className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
                <h2 className="text-lg font-bold text-white">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
