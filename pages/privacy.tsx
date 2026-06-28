import Head from "next/head";

const sections = [
  ["Information We Collect", "Account details, contact submissions, usage events, technical logs, and content you choose to provide for agent workflows or document intelligence."],
  ["How We Use Information", "To operate the platform, improve reliability, support security review, respond to inquiries, and provide AI workflow functionality."],
  ["Security", "D3VONN.IO uses server-side key handling, authentication patterns, audit-oriented architecture, and human approval gates for sensitive workflows."],
  ["Data Controls", "Customers should avoid submitting regulated or sensitive data unless an appropriate enterprise agreement and data handling process is in place."],
];

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy — D3VONN.IO</title>
        <meta name="description" content="D3VONN.IO privacy policy for account, usage, contact, and workflow data." />
        <link rel="canonical" href="https://d3vonn.io/privacy" />
      </Head>
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Legal</p>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Privacy Policy</h1>
          <p className="mt-5 text-gray-400">This page summarizes the public privacy posture for D3VONN.IO. Enterprise customers should request a signed data processing agreement before production use with sensitive data.</p>
          <div className="mt-10 space-y-5">
            {sections.map(([title, body]) => (
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
