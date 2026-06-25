import Head from "next/head";
import Link from "next/link";

const features = [
  {
    title: "AI Agent Orchestration",
    description: "Deploy and manage autonomous AI agents that execute complex tasks, make decisions, and collaborate across your workflows.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: "Workflow Automation",
    description: "Build powerful multi-step workflows with visual builders. Chain agents, triggers, and actions into automated pipelines.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: "Agent Marketplace",
    description: "Discover, deploy, and monetize AI agents. Access hundreds of pre-built agents or publish your own to the marketplace.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
      </svg>
    ),
  },
  {
    title: "Enterprise Security",
    description: "SSO, RBAC, audit logs, and compliance reporting. Deploy on-premise or in your VPC with 99.99% uptime SLA.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Multi-Team Workspace",
    description: "Collaborate across teams with shared workspaces, role-based permissions, and real-time agent monitoring dashboards.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Full API Access",
    description: "Integrate D3VONN.IO into your existing stack with our comprehensive REST and WebSocket APIs. SDKs for all major languages.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
];

const stats = [
  { value: "10M+", label: "Executions/month" },
  { value: "5,000+", label: "Active agents" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "500+", label: "Marketplace agents" },
];

const testimonials = [
  {
    quote: "D3VONN.IO replaced our entire manual QA pipeline. We went from 3 days to 15 minutes for full regression testing.",
    author: "Sarah Chen",
    role: "VP Engineering, TechScale",
  },
  {
    quote: "The agent marketplace is a game-changer. We deployed 5 business automation agents in a single afternoon.",
    author: "Marcus Rodriguez",
    role: "CTO, DataFlow Inc",
  },
  {
    quote: "Enterprise-grade security with startup-level agility. The RBAC and audit logs give our compliance team peace of mind.",
    author: "Jennifer Park",
    role: "CISO, FinanceAI Corp",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>D3VONN.IO — AI Agent Orchestration Platform</title>
        <meta
          name="description"
          content="Deploy, manage, and scale autonomous AI agents. Build powerful workflows, access the agent marketplace, and automate your business with enterprise-grade security."
        />
        <meta name="keywords" content="AI agents, agent orchestration, workflow automation, AI marketplace, autonomous AI, enterprise AI" />
        <link rel="canonical" href="https://d3vonn.io" />
        <meta property="og:title" content="D3VONN.IO — AI Agent Orchestration Platform" />
        <meta property="og:description" content="Deploy, manage, and scale autonomous AI agents with enterprise-grade security and workflow automation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://d3vonn.io" />
        <meta property="og:site_name" content="D3VONN.IO" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="D3VONN.IO — AI Agent Orchestration Platform" />
        <meta name="twitter:description" content="Deploy, manage, and scale autonomous AI agents with enterprise-grade security and workflow automation." />
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-28 lg:pb-32">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-cyan-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 mb-8">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-medium text-cyan-400">Now in Public Beta</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl max-w-4xl mx-auto">
            The platform for{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              autonomous AI agents
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Deploy, orchestrate, and scale AI agents that think, decide, and act.
            Build powerful automation workflows with our visual builder and access
            hundreds of pre-built agents from the marketplace.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-8 py-3.5 text-sm font-semibold text-white hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/25"
            >
              Start Building Free
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/docs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-gray-600 px-8 py-3.5 text-sm font-semibold text-gray-300 hover:border-gray-400 hover:text-white transition-colors"
            >
              View Documentation
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Everything you need to build AI-powered automation
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              A complete platform for deploying, managing, and scaling autonomous AI agents
              across your organization.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 hover:border-gray-700 transition-colors group"
              >
                <div className="h-10 w-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 border-t border-gray-800">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Get started in minutes
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Three simple steps to deploy your first AI agent.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Choose or Build",
                description: "Pick a pre-built agent from the marketplace or build your own with our visual workflow builder.",
              },
              {
                step: "02",
                title: "Configure & Deploy",
                description: "Set triggers, connect integrations, and deploy your agent to production in one click.",
              },
              {
                step: "03",
                title: "Monitor & Scale",
                description: "Track performance, view execution logs, and scale automatically based on demand.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-bold text-sm mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Trusted by engineering teams
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="rounded-xl border border-gray-800 bg-gray-900/50 p-6"
              >
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold text-white">{testimonial.author}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 border-t border-gray-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to deploy your AI workforce?
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Start free with 100 executions/month. No credit card required.
            Scale to enterprise when you&apos;re ready.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-8 py-3.5 text-sm font-semibold text-white hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/25"
            >
              Get Started Free
            </Link>
            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-gray-600 px-8 py-3.5 text-sm font-semibold text-gray-300 hover:border-gray-400 hover:text-white transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
