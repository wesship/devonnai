import { useState, useEffect } from "react";

const customerLogos = [
  { name: "TechScale", industry: "SaaS" },
  { name: "DataFlow Inc", industry: "Data" },
  { name: "FinanceAI", industry: "Finance" },
  { name: "CloudNova", industry: "Cloud" },
  { name: "AutomateHQ", industry: "Automation" },
  { name: "SecureOps", industry: "Security" },
  { name: "GrowthLab", industry: "Marketing" },
  { name: "DevForge", industry: "DevOps" },
  { name: "HealthTech AI", industry: "Healthcare" },
  { name: "RetailFlow", industry: "E-commerce" },
  { name: "LegalMind", industry: "Legal" },
  { name: "EduScale", industry: "Education" },
];

const testimonials = [
  {
    quote: "D3VONN.IO replaced our entire manual QA pipeline. We went from 3 days to 15 minutes for full regression testing.",
    author: "Sarah Chen",
    role: "VP Engineering",
    company: "TechScale",
    avatar: "SC",
    metric: "99.2% faster QA cycles",
  },
  {
    quote: "The agent marketplace is a game-changer. We deployed 5 business automation agents in a single afternoon.",
    author: "Marcus Rodriguez",
    role: "CTO",
    company: "DataFlow Inc",
    avatar: "MR",
    metric: "5 agents deployed in 4 hours",
  },
  {
    quote: "Enterprise-grade security with startup-level agility. The RBAC and audit logs give our compliance team peace of mind.",
    author: "Jennifer Park",
    role: "CISO",
    company: "FinanceAI Corp",
    avatar: "JP",
    metric: "Zero compliance incidents",
  },
  {
    quote: "We automated 80% of our customer onboarding. Support tickets dropped by 60% in the first month.",
    author: "David Kim",
    role: "Head of Operations",
    company: "CloudNova",
    avatar: "DK",
    metric: "60% fewer support tickets",
  },
  {
    quote: "The ROI was immediate. We saved $420,000 in the first year by automating repetitive data processing tasks.",
    author: "Lisa Thompson",
    role: "CFO",
    company: "GrowthLab",
    avatar: "LT",
    metric: "$420K saved in Year 1",
  },
  {
    quote: "Multi-agent orchestration lets us run complex DevOps workflows that would take a team of 5 engineers to manage manually.",
    author: "Alex Petrov",
    role: "Principal Engineer",
    company: "DevForge",
    avatar: "AP",
    metric: "Replaced 5 FTE workload",
  },
];

const liveStats = [
  { label: "AI Executions Completed", value: 847000000, suffix: "", prefix: "", format: "compact" },
  { label: "Active AI Agents", value: 52847, suffix: "", prefix: "", format: "number" },
  { label: "Businesses Using D3VONN.IO", value: 3200, suffix: "+", prefix: "", format: "number" },
  { label: "Platform Uptime", value: 99.99, suffix: "%", prefix: "", format: "decimal" },
  { label: "Avg Response Time", value: 47, suffix: "ms", prefix: "<", format: "number" },
  { label: "Countries Served", value: 89, suffix: "", prefix: "", format: "number" },
];

function AnimatedCounter({ target, format, prefix, suffix }: { target: number; format: string; prefix: string; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target]);

  const formatValue = (val: number) => {
    if (format === "compact") {
      if (val >= 1000000000) return `${(val / 1000000000).toFixed(1)}B`;
      if (val >= 1000000) return `${(val / 1000000).toFixed(0)}M`;
      if (val >= 1000) return `${(val / 1000).toFixed(0)}K`;
      return Math.round(val).toString();
    }
    if (format === "decimal") return val.toFixed(2);
    return new Intl.NumberFormat("en-US").format(Math.round(val));
  };

  return (
    <span>
      {prefix}{formatValue(count)}{suffix}
    </span>
  );
}

export default function SocialProof() {
  return (
    <section className="py-16 lg:py-24 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-purple-900/50 px-3 py-1 text-xs font-medium text-purple-400 ring-1 ring-purple-400/30 mb-4">
            Trusted by Industry Leaders
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Powering AI Automation at <span className="text-gradient">Scale</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Join thousands of engineering teams and businesses automating their workflows with D3VONN.IO.
          </p>
        </div>

        {/* Customer Logos */}
        <div className="mb-16">
          <p className="text-center text-sm text-gray-500 mb-6 uppercase tracking-wider font-medium">
            Trusted by teams at
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {customerLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex flex-col items-center justify-center rounded-lg border border-gray-800 bg-gray-900/30 p-4 hover:border-gray-600 transition-colors"
              >
                <div className="h-8 w-8 rounded-md bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-300 mb-2">
                  {logo.name.charAt(0)}
                </div>
                <span className="text-xs text-gray-400 text-center">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Live Stats */}
        <div className="mb-16 rounded-xl border border-gray-700 bg-gradient-to-r from-gray-900 via-gray-900/80 to-gray-900 p-8">
          <h3 className="text-center text-lg font-semibold text-white mb-8">Platform Statistics — Live</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {liveStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl lg:text-3xl font-bold text-cyan-400">
                  <AnimatedCounter
                    target={stat.value}
                    format={stat.format}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="rounded-xl border border-gray-700 bg-gray-900/50 p-6 hover:border-gray-600 transition-colors"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-sm text-gray-300 mb-4 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="rounded-lg bg-green-900/20 border border-green-500/20 px-3 py-1.5 mb-4 inline-block">
                <span className="text-xs font-semibold text-green-400">{testimonial.metric}</span>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-gray-800">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-600 to-purple-600 text-xs font-bold text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{testimonial.author}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
