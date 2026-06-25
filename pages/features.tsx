import Head from "next/head";
import Link from "next/link";

const coreFeatures = [
  {
    title: "Autonomous Agent Execution",
    description: "Agents that think, reason, and act independently. Multi-step task execution with decision trees, fallback logic, and self-healing capabilities.",
    details: ["Multi-step reasoning chains", "Automatic error recovery", "Context-aware decision making", "Real-time execution monitoring"],
  },
  {
    title: "Visual Workflow Builder",
    description: "Drag-and-drop workflow creation with conditional logic, parallel execution, and human-in-the-loop approval gates.",
    details: ["Drag-and-drop canvas", "Conditional branching", "Parallel execution paths", "Approval gates & webhooks"],
  },
  {
    title: "Agent Marketplace",
    description: "Discover and deploy pre-built agents or publish your own. Revenue sharing for marketplace creators with built-in billing.",
    details: ["500+ pre-built agents", "One-click deployment", "80% revenue share for creators", "Ratings & reviews"],
  },
  {
    title: "Multi-Agent Orchestration",
    description: "Coordinate multiple agents working together on complex tasks. Agent-to-agent communication and shared context.",
    details: ["Agent collaboration protocols", "Shared memory & context", "Priority-based scheduling", "Resource allocation"],
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade security with SSO/SAML, RBAC, audit logs, data encryption at rest and in transit, and compliance certifications.",
    details: ["SSO / SAML integration", "Role-based access control", "Full audit trail", "SOC 2 Type II compliant"],
  },
  {
    title: "Observability & Analytics",
    description: "Real-time dashboards, execution traces, cost analytics, and performance metrics for all your agents and workflows.",
    details: ["Real-time monitoring", "Execution trace viewer", "Cost attribution", "Custom alerting"],
  },
];

const integrations = [
  "Slack", "GitHub", "Jira", "Salesforce", "HubSpot", "Notion",
  "Google Workspace", "AWS", "Azure", "Datadog", "PagerDuty", "Stripe",
];

export default function FeaturesPage() {
  return (
    <>
      <Head>
        <title>Features — D3VONN.IO | AI Agent Orchestration Platform</title>
        <meta name="description" content="Explore D3VONN.IO features: autonomous agent execution, visual workflow builder, agent marketplace, enterprise security, and multi-agent orchestration." />
        <link rel="canonical" href="https://d3vonn.io/features" />
        <meta property="og:title" content="Features — D3VONN.IO" />
        <meta property="og:description" content="Explore the full feature set of D3VONN.IO AI Agent Orchestration Platform." />
        <meta property="og:url" content="https://d3vonn.io/features" />
      </Head>

      {/* Hero */}
      <section className="pt-16 pb-12 lg:pt-24 lg:pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Built for{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              serious automation
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Every feature designed to help you deploy, manage, and scale AI agents
            with confidence. From solo developers to enterprise teams.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 lg:py-24 border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {coreFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-gray-800 bg-gray-900/50 p-8 hover:border-gray-700 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">{feature.description}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {feature.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-xs text-gray-300">
                      <svg className="h-3.5 w-3.5 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 lg:py-24 border-t border-gray-800">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            Integrates with your stack
          </h2>
          <p className="text-lg text-gray-400 mb-12">
            Connect to 100+ services out of the box. Build custom integrations with our API.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {integrations.map((name) => (
              <span
                key={name}
                className="inline-flex items-center rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-2 text-sm text-gray-300 hover:border-cyan-500/50 transition-colors"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 border-t border-gray-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to get started?</h2>
          <p className="mt-4 text-gray-400">Start free, scale when you&apos;re ready.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup" className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-8 py-3.5 text-sm font-semibold text-white hover:bg-cyan-400 transition-all">
              Start Building Free
            </Link>
            <Link href="/pricing" className="inline-flex items-center gap-2 rounded-lg border border-gray-600 px-8 py-3.5 text-sm font-semibold text-gray-300 hover:border-gray-400 hover:text-white transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
