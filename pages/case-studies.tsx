import Head from "next/head";
import Link from "next/link";

const studies = [
  { title: "Founder Command Center", status: "Template", description: "How a solo founder can use D3VONN.IO to coordinate research, deployment, documents, and GTM tasks." },
  { title: "Insurance Operations AI", status: "Draft", description: "Agent workflows for lead intake, CRM follow-up, compliance reminders, and document intelligence." },
  { title: "BioCompliance Knowledge Agent", status: "Draft", description: "A regulated-lab knowledge workflow for SOP drafts, validation checklists, and audit evidence routing." },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Head>
        <title>Case Studies — D3VONN.IO</title>
        <meta name="description" content="D3VONN.IO case study templates and solution examples for AI business operations." />
        <link rel="canonical" href="https://d3vonn.io/case-studies" />
      </Head>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Case Studies</p>
            <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Proof stories without fake testimonials.</h1>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Replace these templates with real customer outcomes once deployments produce verified metrics.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {studies.map((study) => (
              <div key={study.title} className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
                <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-200">{study.status}</span>
                <h2 className="mt-4 text-xl font-bold text-white">{study.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{study.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/contact?inquiry=case-study" className="inline-flex rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-white hover:bg-cyan-400">
              Submit Deployment Story
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
