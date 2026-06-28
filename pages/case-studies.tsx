import Head from "next/head";
import Link from "next/link";

const studies = [
  {
    title: "Founder Command Center",
    status: "Internal Use Case",
    description: "A solo founder coordinates product research, deployment checks, site audits, pricing work, documents, and GTM tasks through one AI operating layer.",
    outcomes: ["Centralized task routing", "Reusable deployment checklist", "Clearer public proof layer"],
  },
  {
    title: "Insurance Operations AI",
    status: "Solution Blueprint",
    description: "Agent workflows for lead intake, CRM follow-up, compliance reminders, appointment preparation, and document intelligence for insurance operators.",
    outcomes: ["Lead follow-up workflow", "Agent-assisted training material", "Compliance reminder path"],
  },
  {
    title: "BlueBlood BioCompliance",
    status: "Solution Blueprint",
    description: "A regulated-lab knowledge workflow for rFC/rCR migration, SOP drafts, validation checklists, assay suitability tracking, and audit evidence routing.",
    outcomes: ["Validation checklist generation", "SOP draft support", "QA-ready evidence organization"],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Head>
        <title>Case Studies — D3VONN.IO</title>
        <meta name="description" content="D3VONN.IO case studies and solution blueprints for founder operations, insurance workflows, and BioCompliance knowledge agents." />
        <link rel="canonical" href="https://d3vonn.io/case-studies" />
      </Head>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Case Studies</p>
            <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Realistic proof stories without fake testimonials.</h1>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              These are internal and solution-blueprint case studies. Replace blueprint metrics with verified customer outcomes after production deployments.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {studies.map((study) => (
              <div key={study.title} className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
                <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-200">{study.status}</span>
                <h2 className="mt-4 text-xl font-bold text-white">{study.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{study.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-gray-300">
                  {study.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-2"><span className="text-cyan-300">✓</span>{outcome}</li>
                  ))}
                </ul>
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
