import Head from "next/head";
import Link from "next/link";

const docSections = [
  {
    title: "Getting Started",
    items: [
      { label: "Quick Start Guide", href: "#" },
      { label: "Creating Your First Agent", href: "#" },
      { label: "Understanding Executions", href: "#" },
      { label: "Workflow Basics", href: "#" },
    ],
  },
  {
    title: "API Reference",
    items: [
      { label: "Authentication", href: "#" },
      { label: "Agents API", href: "#" },
      { label: "Workflows API", href: "#" },
      { label: "Executions API", href: "#" },
      { label: "Webhooks", href: "#" },
    ],
  },
  {
    title: "Guides",
    items: [
      { label: "Building Custom Agents", href: "#" },
      { label: "Multi-Agent Orchestration", href: "#" },
      { label: "Marketplace Publishing", href: "#" },
      { label: "Enterprise Deployment", href: "#" },
    ],
  },
  {
    title: "SDKs & Tools",
    items: [
      { label: "Python SDK", href: "#" },
      { label: "Node.js SDK", href: "#" },
      { label: "CLI Reference", href: "#" },
      { label: "Terraform Provider", href: "#" },
    ],
  },
];

export default function DocsPage() {
  return (
    <>
      <Head>
        <title>Documentation — D3VONN.IO</title>
        <meta name="description" content="D3VONN.IO documentation: API reference, guides, SDKs, and tutorials for building AI agent automation." />
        <link rel="canonical" href="https://d3vonn.io/docs" />
      </Head>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Documentation</h1>
            <p className="mt-4 text-lg text-gray-400">
              Everything you need to build, deploy, and scale AI agents on D3VONN.IO.
            </p>
            <div className="mt-8 max-w-md mx-auto">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {docSections.map((section) => (
              <div key={section.title} className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
                <h2 className="text-lg font-bold text-white mb-4">{section.title}</h2>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors py-1"
                      >
                        <svg className="h-3.5 w-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
