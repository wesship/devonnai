// D3VONN.IO Pricing Data Configuration
// Platform Subscription Tiers, Marketplace Pricing, Bundles, and Execution Credits

export interface PricingTier {
  id: string;
  name: string;
  price: number | null; // null = custom
  priceAnnual: number | null; // null = custom
  description: string;
  badge?: string;
  highlighted?: boolean;
  features: {
    executions: string;
    activeAgents: string;
    workflows: string;
    marketplaceAccess: string;
    support: string;
    teamUsers: string;
    security: string;
  };
  featureList: string[];
  cta: string;
  ctaLink: string;
}

export interface OverageTier {
  name: string;
  description: string;
  price: string;
}

export interface MarketplaceCategory {
  name: string;
  priceRange: string;
  description: string;
  examples: string[];
}

export interface Bundle {
  name: string;
  price: string;
  description: string;
  includes: string[];
  savings: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

// ─── Platform Subscription Tiers ────────────────────────────────────────────

export const pricingTiers: PricingTier[] = [
  {
    id: "free",
    name: "Free",
    price: 0,
    priceAnnual: 0,
    description: "Get started with AI agent automation at no cost.",
    features: {
      executions: "100 executions/month",
      activeAgents: "1 active agent",
      workflows: "Basic demo workflows",
      marketplaceAccess: "Community / demo access",
      support: "Community support",
      teamUsers: "1 user",
      security: "Standard security",
    },
    featureList: [
      "100 executions/month",
      "1 active agent",
      "Basic demo workflows",
      "Community marketplace access",
      "Community support",
      "1 user",
      "Standard security",
    ],
    cta: "Get Started Free",
    ctaLink: "/signup?plan=free",
  },
  {
    id: "starter",
    name: "Starter",
    price: 29,
    priceAnnual: 24,
    description: "For individuals building their first AI workflows.",
    features: {
      executions: "1,000 executions/month",
      activeAgents: "3 active agents",
      workflows: "Basic workflows",
      marketplaceAccess: "Standard marketplace",
      support: "Email support",
      teamUsers: "2 users",
      security: "Standard security",
    },
    featureList: [
      "1,000 executions/month",
      "3 active agents",
      "Basic workflow builder",
      "Standard marketplace access",
      "Email support (48h response)",
      "2 users",
      "Standard security",
    ],
    cta: "Start Free Trial",
    ctaLink: "/signup?plan=starter",
  },
  {
    id: "pro",
    name: "Pro",
    price: 79,
    priceAnnual: 66,
    description: "For professionals scaling their AI agent operations.",
    badge: "Most Popular",
    highlighted: true,
    features: {
      executions: "5,000 executions/month",
      activeAgents: "10 active agents",
      workflows: "Advanced workflow builder",
      marketplaceAccess: "Full marketplace access",
      support: "Priority email support",
      teamUsers: "5 users",
      security: "Enhanced security",
    },
    featureList: [
      "5,000 executions/month",
      "10 active agents",
      "Advanced workflow builder",
      "Full marketplace access",
      "Priority email support (24h response)",
      "5 users",
      "Enhanced security & audit logs",
      "API access",
      "Custom agent templates",
    ],
    cta: "Start Free Trial",
    ctaLink: "/signup?plan=pro",
  },
  {
    id: "business",
    name: "Business",
    price: 249,
    priceAnnual: 207,
    description: "For teams building enterprise-grade AI automation.",
    badge: "Best for Teams",
    features: {
      executions: "20,000 executions/month",
      activeAgents: "25 active agents",
      workflows: "Advanced workflows + automation",
      marketplaceAccess: "Full marketplace + private agents",
      support: "Priority support (4h response)",
      teamUsers: "15 users",
      security: "Advanced security & governance",
    },
    featureList: [
      "20,000 executions/month",
      "25 active agents",
      "Team workspace",
      "Advanced workflows + automation",
      "Full marketplace + private agents",
      "Priority support (4h response)",
      "15 users",
      "Advanced security & governance",
      "Role-based access control",
      "Usage analytics dashboard",
    ],
    cta: "Start Free Trial",
    ctaLink: "/signup?plan=business",
  },
  {
    id: "scale",
    name: "Scale",
    price: 599,
    priceAnnual: 499,
    description: "For organizations running AI at scale across teams.",
    features: {
      executions: "75,000 executions/month",
      activeAgents: "100 active agents",
      workflows: "Unlimited workflows",
      marketplaceAccess: "Full marketplace + private + custom",
      support: "Premium support (1h response)",
      teamUsers: "50 users",
      security: "Enterprise security suite",
    },
    featureList: [
      "75,000 executions/month",
      "100 active agents",
      "Multi-team workspace",
      "Unlimited workflows",
      "Full marketplace + private + custom agents",
      "Premium support (1h response)",
      "50 users",
      "Enterprise security suite",
      "Advanced analytics & reporting",
      "Full API access",
      "Custom integrations",
      "Dedicated account manager",
    ],
    cta: "Start Free Trial",
    ctaLink: "/signup?plan=scale",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: null,
    priceAnnual: null,
    description: "Custom solutions for large-scale AI deployments.",
    features: {
      executions: "Custom executions",
      activeAgents: "Unlimited agents",
      workflows: "Unlimited + custom workflows",
      marketplaceAccess: "Full access + custom deployment",
      support: "Dedicated support team",
      teamUsers: "Unlimited users",
      security: "Full enterprise governance",
    },
    featureList: [
      "Custom execution limits",
      "Unlimited agents",
      "Unlimited workflows",
      "Full marketplace + custom deployment",
      "Dedicated support team & SLA",
      "Unlimited users",
      "SSO / SAML integration",
      "RBAC & audit logs",
      "Custom deployment options",
      "On-premise / VPC available",
      "99.99% uptime SLA",
      "Custom AI model integration",
    ],
    cta: "Contact Sales",
    ctaLink: "/contact?inquiry=enterprise",
  },
];

// ─── Execution Overage Pricing ──────────────────────────────────────────────

export const overagePricing: OverageTier[] = [
  {
    name: "Simple Task Execution",
    description: "Basic single-step tasks, lookups, and simple automations",
    price: "$0.01",
  },
  {
    name: "Standard Agent Execution",
    description: "Multi-step agent tasks, data processing, and integrations",
    price: "$0.03",
  },
  {
    name: "Heavy Reasoning / Multi-Step Workflow",
    description: "Complex reasoning chains, multi-agent orchestration, and advanced workflows",
    price: "$0.05+",
  },
];

// ─── Agent Marketplace Pricing ──────────────────────────────────────────────

export const marketplaceCategories: MarketplaceCategory[] = [
  {
    name: "Free Agents",
    priceRange: "$0",
    description: "Community-built agents for basic tasks",
    examples: ["Hello World Bot", "Simple Scheduler", "Basic Notifier"],
  },
  {
    name: "Utility Agents",
    priceRange: "$9–$19/month",
    description: "Productivity and utility automation agents",
    examples: ["Email Sorter", "Calendar Manager", "File Organizer", "Slack Bot"],
  },
  {
    name: "Business Agents",
    priceRange: "$29–$49/month",
    description: "Business process automation agents",
    examples: ["Lead Qualifier", "Invoice Processor", "CRM Sync", "Report Generator"],
  },
  {
    name: "Advanced Workflow Agents",
    priceRange: "$79–$149/month",
    description: "Complex multi-step workflow automation",
    examples: ["Sales Pipeline Orchestrator", "Content Engine", "Data Pipeline", "CI/CD Manager"],
  },
  {
    name: "Infrastructure & Security Agents",
    priceRange: "$199–$249/month",
    description: "Enterprise infrastructure and security automation",
    examples: ["Security Scanner", "Compliance Monitor", "Infrastructure Provisioner", "Incident Responder"],
  },
  {
    name: "Enterprise Agents",
    priceRange: "Custom",
    description: "Custom-built enterprise-grade agents",
    examples: ["Custom AI Workforce", "Domain-Specific Models", "Multi-Cloud Orchestrator"],
  },
];

// ─── Bundle Pricing ─────────────────────────────────────────────────────────

export const bundles: Bundle[] = [
  {
    name: "Founder Bundle",
    price: "$99/month",
    description: "Everything a solo founder needs to automate their startup.",
    includes: [
      "Pro plan subscription",
      "3 Utility Agents included",
      "2,000 bonus executions/month",
      "Priority onboarding",
    ],
    savings: "Save $48/month vs. buying separately",
  },
  {
    name: "Business Automation Bundle",
    price: "$299/month",
    description: "Complete business automation stack for growing teams.",
    includes: [
      "Business plan subscription",
      "5 Business Agents included",
      "10,000 bonus executions/month",
      "Dedicated onboarding specialist",
      "Custom workflow templates",
    ],
    savings: "Save $146/month vs. buying separately",
  },
  {
    name: "DevOps Command Bundle",
    price: "$499/month",
    description: "Full DevOps automation for engineering teams.",
    includes: [
      "Scale plan subscription",
      "3 Infrastructure & Security Agents",
      "2 Advanced Workflow Agents",
      "25,000 bonus executions/month",
      "DevOps integration support",
    ],
    savings: "Save $298/month vs. buying separately",
  },
  {
    name: "Enterprise AI Workforce Bundle",
    price: "Custom",
    description: "Build your complete AI workforce with custom agents and unlimited scale.",
    includes: [
      "Enterprise plan subscription",
      "Custom agent development",
      "Unlimited executions",
      "Dedicated engineering support",
      "Custom SLA & deployment",
      "White-label options",
    ],
    savings: "Contact sales for custom pricing",
  },
];

// ─── FAQ Section ────────────────────────────────────────────────────────────

export const faqs: FAQ[] = [
  {
    question: "What counts as an execution?",
    answer: "An execution is a single task run by an agent. Simple lookups count as one execution, while complex multi-step workflows may consume multiple execution credits depending on complexity. Each step in a workflow counts as a separate execution.",
  },
  {
    question: "What happens when I exceed my execution limit?",
    answer: "When you exceed your monthly execution limit, additional executions are billed at overage rates: $0.01 for simple tasks, $0.03 for standard agent executions, and $0.05+ for heavy reasoning or multi-step workflows. You can set spending caps to prevent unexpected charges.",
  },
  {
    question: "Can I switch plans at any time?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately with prorated billing. Downgrades take effect at the start of your next billing cycle.",
  },
  {
    question: "How does annual billing work?",
    answer: "Annual billing gives you a ~17% discount compared to monthly billing. You pay for the full year upfront and can still upgrade mid-cycle. Annual plans include a 30-day money-back guarantee.",
  },
  {
    question: "What is the Agent Marketplace?",
    answer: "The Agent Marketplace is where you can discover, purchase, and deploy pre-built AI agents created by D3VONN.IO and third-party developers. Agents range from free community tools to enterprise-grade automation solutions.",
  },
  {
    question: "Can I build and sell my own agents?",
    answer: "Yes! Pro plan and above can publish agents to the marketplace. You set your own pricing and earn 80% of revenue. We handle billing, distribution, and support infrastructure.",
  },
  {
    question: "What security features are included?",
    answer: "All plans include standard encryption and secure execution environments. Business and above add role-based access control, audit logs, and compliance reporting. Enterprise includes SSO/SAML, custom security policies, and on-premise deployment options.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, all paid plans include a 14-day free trial with full access to plan features. No credit card required to start. You can cancel anytime during the trial period.",
  },
];
