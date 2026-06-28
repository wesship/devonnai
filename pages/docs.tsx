import Head from "next/head";
import Link from "next/link";

const docSections = [
  {
    title: "Getting Started",
    items: [
      { label: "Quick Start Guide", href: "#quick-start" },
      { label: "Creating Your First Agent", href: "#first-agent" },
      { label: "Understanding Executions", href: "#executions" },
      { label: "Workflow Basics", href: "#workflows" },
    ],
  },
  {
    title: "API Reference",
    items: [
      { label: "Authentication", href: "#authentication" },
      { label: "Agents API", href: "#agents-api" },
      { label: "Workflows API", href: "#workflows-api" },
      { label: "Executions API", href: "#executions-api" },
      { label: "Webhooks", href: "#webhooks" },
    ],
  },
  {
    title: "Guides",
    items: [
      { label: "Building Custom Agents", href: "#custom-agents" },
      { label: "Multi-Agent Orchestration", href: "#orchestration" },
      { label: "Marketplace Publishing", href: "#marketplace-publishing" },
      { label: "Enterprise Deployment", href: "#enterprise-deployment" },
    ],
  },
  {
    title: "SDKs & Tools",
    items: [
      { label: "Python SDK", href: "#python-sdk" },
      { label: "Node.js SDK", href: "#node-sdk" },
      { label: "CLI Reference", href: "#cli" },
      { label: "Terraform Provider", href: "#terraform" },
    ],
  },
];

const guides = [
  ["quick-start", "Quick Start Guide", "Create an account, launch the command center demo, define a goal, choose an agent, review the plan, approve critical actions, and inspect the audit trail."],
  ["first-agent", "Creating Your First Agent", "Start with a named role, a business objective, allowed tools, approval policy, memory scope, and measurable success criteria."],
  ["executions", "Understanding Executions", "Executions move through planned, queued, running, review, completed, retry, or failed states so operators can see what happened and why."],
  ["workflows", "Workflow Basics", "A workflow combines goal intake, Hermes routing, TARS planning, Atlas retrieval, worker execution, Guardian review, and logged evidence."],
  ["authentication", "Authentication", "Production integrations should use server-side authentication and never expose private provider keys in browser code."],
  ["agents-api", "Agents API", "The agent API should expose worker creation, configuration, status, capability, memory scope, and execution history."],
  ["workflows-api", "Workflows API", "The workflow API should manage templates, runs, approvals, retries, and timeline events."],
  ["executions-api", "Executions API", "Execution endpoints should return current state, owner, agent assignment, logs, outputs, and required next action."],
  ["webhooks", "Webhooks", "Webhook events should cover task.created, execution.started, approval.required, execution.completed, and execution.failed."],
  ["custom-agents", "Building Custom Agents", "Custom agents should include system instructions, tool permissions, memory rules, escalation logic, and safety boundaries."],
  ["orchestration", "Multi-Agent Orchestration", "Hermes coordinates agents by goal, risk, available context, queue state, and human approval requirements."],
  ["marketplace-publishing", "Marketplace Publishing", "Marketplace agents need clear scope, pricing, capabilities, limitations, versioning, and support ownership."],
  ["enterprise-deployment", "Enterprise Deployment", "Enterprise rollout should include SSO planning, RBAC, audit evidence, data boundaries, deployment regions, and incident response."],
  ["python-sdk", "Python SDK", "Planned SDK surface for creating agents, starting executions, polling status, and handling approval callbacks."],
  ["node-sdk", "Node.js SDK", "Planned SDK surface for app integrations, workflow triggers, status checks, and webhook verification."],
  ["cli", "CLI Reference", "Planned CLI commands for login, agent listing, workflow runs, status checks, and deployment diagnostics."],
  ["terraform", "Terraform Provider", "Planned infrastructure-as-code support for enterprise workspaces, roles, webhooks, and environment configuration."],
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
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Documentation</h1>
            <p className="mt-4 text-lg text-gray-400">Everything you need to build, deploy, and scale AI agents on D3VONN.IO.</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {docSections.map((section) => (
              <div key={section.title} className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
                <h2 className="mb-4 text-lg font-bold text-white">{section.title}</h2>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="flex items-center gap-2 py-1 text-sm text-gray-400 transition-colors hover:text-cyan-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-5">
            {guides.map(([id, title, body]) => (
              <section id={id} key={id} className="scroll-mt-24 rounded-xl border border-gray-800 bg-gray-900/40 p-6">
                <h2 className="text-xl font-bold text-white">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{body}</p>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
