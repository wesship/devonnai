import { useState, useMemo } from "react";
import Link from "next/link";
import { pricingTiers } from "@/lib/pricing-data";

export default function ExecutionCalculator() {
  const [agents, setAgents] = useState(5);
  const [workflowsPerDay, setWorkflowsPerDay] = useState(10);
  const [avgSteps, setAvgSteps] = useState(3);
  const [apiCalls, setApiCalls] = useState(50);

  const calculations = useMemo(() => {
    // Each workflow execution = 1 base + extra steps
    // API calls count as simple executions
    const dailyExecutions = (workflowsPerDay * avgSteps) + apiCalls;
    const monthlyExecutions = dailyExecutions * 30;

    // Find recommended plan
    const activeTiers = pricingTiers.filter((t) => t.price !== null);
    let recommended = pricingTiers[pricingTiers.length - 1]; // Enterprise fallback

    // Map tier IDs to execution limits
    const tierLimits: Record<string, { executions: number; agents: number }> = {
      free: { executions: 100, agents: 1 },
      starter: { executions: 1000, agents: 3 },
      pro: { executions: 5000, agents: 10 },
      business: { executions: 20000, agents: 25 },
      scale: { executions: 75000, agents: 100 },
    };

    for (const tier of activeTiers) {
      const limits = tierLimits[tier.id];
      if (limits && limits.executions >= monthlyExecutions && limits.agents >= agents) {
        recommended = tier;
        break;
      }
    }

    // Estimate overage cost if on a lower plan
    const overagePerExecution = avgSteps <= 2 ? 0.01 : avgSteps <= 4 ? 0.03 : 0.05;

    return {
      dailyExecutions,
      monthlyExecutions,
      recommended,
      overagePerExecution,
      estimatedOverageCost: monthlyExecutions * overagePerExecution,
    };
  }, [agents, workflowsPerDay, avgSteps, apiCalls]);

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat("en-US").format(value);
  };

  return (
    <section className="py-16 lg:py-24 border-t border-gray-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center rounded-full bg-blue-900/50 px-3 py-1 text-xs font-medium text-blue-400 ring-1 ring-blue-400/30 mb-4">
            Usage Estimator
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Estimate Your <span className="text-gradient">Execution Usage</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Configure your expected workload and we&apos;ll recommend the perfect plan for your needs.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Input Panel */}
          <div className="lg:col-span-3 rounded-xl border border-gray-700 bg-gray-900/50 p-6 lg:p-8">
            <h3 className="text-lg font-semibold text-white mb-6">Configure Your Workload</h3>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="flex items-center justify-between text-sm text-gray-300 mb-2">
                  <span>Active agents</span>
                  <span className="font-semibold text-cyan-400">{agents}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={agents}
                  onChange={(e) => setAgents(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1</span>
                  <span>100</span>
                </div>
              </div>

              <div>
                <label className="flex items-center justify-between text-sm text-gray-300 mb-2">
                  <span>Workflows per day</span>
                  <span className="font-semibold text-cyan-400">{workflowsPerDay}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="500"
                  step="5"
                  value={workflowsPerDay}
                  onChange={(e) => setWorkflowsPerDay(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1</span>
                  <span>500</span>
                </div>
              </div>

              <div>
                <label className="flex items-center justify-between text-sm text-gray-300 mb-2">
                  <span>Avg steps per workflow</span>
                  <span className="font-semibold text-cyan-400">{avgSteps}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={avgSteps}
                  onChange={(e) => setAvgSteps(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1 (simple)</span>
                  <span>10 (complex)</span>
                </div>
              </div>

              <div>
                <label className="flex items-center justify-between text-sm text-gray-300 mb-2">
                  <span>API calls per day</span>
                  <span className="font-semibold text-cyan-400">{apiCalls}</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="10"
                  value={apiCalls}
                  onChange={(e) => setApiCalls(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0</span>
                  <span>1,000</span>
                </div>
              </div>
            </div>

            {/* Visual breakdown */}
            <div className="mt-6 rounded-lg bg-gray-800/50 p-4">
              <h4 className="text-sm font-medium text-gray-300 mb-3">Execution Breakdown</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Workflow executions/day</span>
                  <span className="text-white">{workflowsPerDay * avgSteps}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">API call executions/day</span>
                  <span className="text-white">{apiCalls}</span>
                </div>
                <div className="border-t border-gray-700 pt-2 flex items-center justify-between text-sm font-semibold">
                  <span className="text-gray-300">Total daily executions</span>
                  <span className="text-cyan-400">{formatNumber(calculations.dailyExecutions)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recommendation Panel */}
          <div className="lg:col-span-2 rounded-xl border border-cyan-500/30 bg-gradient-to-br from-gray-900 to-gray-900/50 p-6 lg:p-8 glow-cyan flex flex-col">
            <h3 className="text-lg font-semibold text-white mb-4">Recommended Plan</h3>

            <div className="flex-1">
              <div className="text-center py-4">
                <p className="text-3xl font-bold text-white">{calculations.recommended.name}</p>
                <p className="text-4xl font-bold text-cyan-400 mt-2">
                  {typeof calculations.recommended.price === "number"
                    ? `$${calculations.recommended.price}`
                    : "Custom"}
                  <span className="text-base text-gray-400 font-normal">/month</span>
                </p>
              </div>

              <div className="space-y-3 mt-4">
                <div className="flex items-center justify-between rounded-lg bg-gray-800/50 px-4 py-2.5">
                  <span className="text-sm text-gray-400">Monthly executions needed</span>
                  <span className="text-sm font-bold text-white">{formatNumber(calculations.monthlyExecutions)}</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-800/50 px-4 py-2.5">
                  <span className="text-sm text-gray-400">Plan includes</span>
                  <span className="text-sm font-bold text-green-400">
                    {calculations.recommended.features.executions}
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-800/50 px-4 py-2.5">
                  <span className="text-sm text-gray-400">Agents needed</span>
                  <span className="text-sm font-bold text-white">{agents}</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-800/50 px-4 py-2.5">
                  <span className="text-sm text-gray-400">Plan supports</span>
                  <span className="text-sm font-bold text-green-400">
                    {calculations.recommended.features.activeAgents}
                  </span>
                </div>
              </div>
            </div>

            <Link
              href={`/signup?plan=${calculations.recommended.id}`}
              className="mt-6 block w-full rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3 text-center text-sm font-semibold text-white hover:from-cyan-500 hover:to-blue-500 transition-all"
            >
              Get Started with {calculations.recommended.name} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
