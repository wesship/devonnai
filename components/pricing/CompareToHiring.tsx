import Link from "next/link";

export default function CompareToHiring() {
  const comparisons = [
    { category: "Annual Cost", employee: "$65,000–$150,000/year", agent: "$49–$249/month ($588–$2,988/year)" },
    { category: "Onboarding Time", employee: "2–6 weeks", agent: "Minutes" },
    { category: "Paid Time Off", employee: "15–25 days/year", agent: "None needed" },
    { category: "Sick Days", employee: "5–10 days/year", agent: "None — 99.99% uptime" },
    { category: "Availability", employee: "8 hours/day, 5 days/week", agent: "24/7/365" },
    { category: "Scalability", employee: "Hire more people (weeks)", agent: "Instant — add agents in seconds" },
    { category: "Consistency", employee: "Variable — human error", agent: "100% consistent execution" },
    { category: "Training", employee: "Ongoing — $2,000–$5,000/year", agent: "Pre-trained, instant updates" },
    { category: "Benefits & Insurance", employee: "$15,000–$30,000/year", agent: "$0" },
    { category: "Turnover Risk", employee: "15–25% annual turnover", agent: "Zero — always available" },
    { category: "Multi-tasking", employee: "1–3 tasks simultaneously", agent: "Unlimited parallel execution" },
    { category: "Speed", employee: "Human pace", agent: "Millisecond response times" },
  ];

  return (
    <section className="py-16 lg:py-24 border-t border-gray-800">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center rounded-full bg-orange-900/50 px-3 py-1 text-xs font-medium text-orange-400 ring-1 ring-orange-400/30 mb-4">
            Cost Comparison
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Hire an Employee <span className="text-gray-500">vs.</span>{" "}
            <span className="text-gradient">Deploy an AI Agent</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            See how D3VONN.IO AI agents compare to traditional hiring for repetitive, automatable tasks.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-gray-700">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-gray-700 bg-gray-900/80">
                <th className="px-5 py-4 text-left text-sm font-medium text-gray-400 w-[200px]">Category</th>
                <th className="px-5 py-4 text-center text-sm font-medium text-gray-400">
                  <div className="flex items-center justify-center gap-2">
                    <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <span>Hire Employee</span>
                  </div>
                </th>
                <th className="px-5 py-4 text-center text-sm font-medium text-cyan-400">
                  <div className="flex items-center justify-center gap-2">
                    <svg className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                    <span>D3VONN.IO AI Agent</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, index) => (
                <tr
                  key={row.category}
                  className={`border-b border-gray-800/50 hover:bg-gray-800/20 transition-colors ${
                    index % 2 === 0 ? "bg-gray-900/20" : ""
                  }`}
                >
                  <td className="px-5 py-3.5 text-sm font-medium text-gray-300">{row.category}</td>
                  <td className="px-5 py-3.5 text-center text-sm text-gray-400">{row.employee}</td>
                  <td className="px-5 py-3.5 text-center text-sm text-green-400 font-medium">{row.agent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom summary */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-green-500/30 bg-green-900/10 p-5 text-center">
            <p className="text-3xl font-bold text-green-400">95%</p>
            <p className="text-sm text-gray-400 mt-1">Lower cost than hiring</p>
          </div>
          <div className="rounded-xl border border-cyan-500/30 bg-cyan-900/10 p-5 text-center">
            <p className="text-3xl font-bold text-cyan-400">1000x</p>
            <p className="text-sm text-gray-400 mt-1">Faster onboarding</p>
          </div>
          <div className="rounded-xl border border-purple-500/30 bg-purple-900/10 p-5 text-center">
            <p className="text-3xl font-bold text-purple-400">24/7</p>
            <p className="text-sm text-gray-400 mt-1">Always available</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 mb-4">
            * Comparison based on average US salary data for repetitive, automatable tasks. AI agents complement human workers by handling routine work so your team can focus on strategic initiatives.
          </p>
          <Link
            href="/signup?plan=business"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-3.5 text-sm font-semibold text-white hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25"
          >
            Start Automating Today
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
