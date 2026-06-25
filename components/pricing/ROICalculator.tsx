import { useState, useMemo } from "react";
import Link from "next/link";

export default function ROICalculator() {
  const [employees, setEmployees] = useState(3);
  const [avgSalary, setAvgSalary] = useState(65000);
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  const [planCost, setPlanCost] = useState(249);

  const calculations = useMemo(() => {
    const hourlyRate = avgSalary / 2080; // 52 weeks * 40 hours
    const monthlySavings = (hoursPerWeek * 4.33 * hourlyRate * employees);
    const annualSavings = monthlySavings * 12;
    const annualPlanCost = planCost * 12;
    const netAnnualSavings = annualSavings - annualPlanCost;
    const roi = annualPlanCost > 0 ? ((netAnnualSavings / annualPlanCost) * 100) : 0;
    const paybackDays = monthlySavings > 0 ? Math.ceil((planCost / monthlySavings) * 30) : 0;

    return {
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      netAnnualSavings: Math.round(netAnnualSavings),
      roi: Math.round(roi),
      paybackDays,
      hoursFreed: Math.round(hoursPerWeek * 4.33 * employees),
    };
  }, [employees, avgSalary, hoursPerWeek, planCost]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="py-16 lg:py-24 border-t border-gray-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center rounded-full bg-green-900/50 px-3 py-1 text-xs font-medium text-green-400 ring-1 ring-green-400/30 mb-4">
            ROI Calculator
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Calculate Your <span className="text-gradient">Return on Investment</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            See how much time and money D3VONN.IO can save your organization by automating repetitive tasks with AI agents.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Input Panel */}
          <div className="rounded-xl border border-gray-700 bg-gray-900/50 p-6 lg:p-8">
            <h3 className="text-lg font-semibold text-white mb-6">Your Current Situation</h3>

            <div className="space-y-6">
              <div>
                <label className="flex items-center justify-between text-sm text-gray-300 mb-2">
                  <span>Employees doing repetitive tasks</span>
                  <span className="font-semibold text-cyan-400">{employees}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1</span>
                  <span>50</span>
                </div>
              </div>

              <div>
                <label className="flex items-center justify-between text-sm text-gray-300 mb-2">
                  <span>Average annual salary</span>
                  <span className="font-semibold text-cyan-400">{formatCurrency(avgSalary)}</span>
                </label>
                <input
                  type="range"
                  min="30000"
                  max="200000"
                  step="5000"
                  value={avgSalary}
                  onChange={(e) => setAvgSalary(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$30k</span>
                  <span>$200k</span>
                </div>
              </div>

              <div>
                <label className="flex items-center justify-between text-sm text-gray-300 mb-2">
                  <span>Hours/week on automatable tasks (per person)</span>
                  <span className="font-semibold text-cyan-400">{hoursPerWeek}h</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="40"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>5h</span>
                  <span>40h</span>
                </div>
              </div>

              <div>
                <label className="flex items-center justify-between text-sm text-gray-300 mb-2">
                  <span>D3VONN.IO plan cost</span>
                  <span className="font-semibold text-cyan-400">{formatCurrency(planCost)}/mo</span>
                </label>
                <select
                  value={planCost}
                  onChange={(e) => setPlanCost(Number(e.target.value))}
                  className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 text-sm text-white focus:border-cyan-500 focus:outline-none"
                >
                  <option value={0}>Free — $0/mo</option>
                  <option value={29}>Starter — $29/mo</option>
                  <option value={79}>Pro — $79/mo</option>
                  <option value={249}>Business — $249/mo</option>
                  <option value={599}>Scale — $599/mo</option>
                  <option value={1500}>Enterprise — ~$1,500/mo</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="rounded-xl border border-cyan-500/30 bg-gradient-to-br from-gray-900 to-gray-900/50 p-6 lg:p-8 glow-cyan">
            <h3 className="text-lg font-semibold text-white mb-6">Your Estimated Savings</h3>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="rounded-lg bg-gray-800/50 p-4 text-center">
                <p className="text-2xl font-bold text-green-400">{formatCurrency(calculations.monthlySavings)}</p>
                <p className="text-xs text-gray-400 mt-1">Monthly savings</p>
              </div>
              <div className="rounded-lg bg-gray-800/50 p-4 text-center">
                <p className="text-2xl font-bold text-green-400">{formatCurrency(calculations.annualSavings)}</p>
                <p className="text-xs text-gray-400 mt-1">Annual savings</p>
              </div>
              <div className="rounded-lg bg-gray-800/50 p-4 text-center">
                <p className="text-2xl font-bold text-cyan-400">{calculations.roi}%</p>
                <p className="text-xs text-gray-400 mt-1">Annual ROI</p>
              </div>
              <div className="rounded-lg bg-gray-800/50 p-4 text-center">
                <p className="text-2xl font-bold text-purple-400">{calculations.paybackDays} days</p>
                <p className="text-xs text-gray-400 mt-1">Payback period</p>
              </div>
            </div>

            <div className="space-y-3 border-t border-gray-700 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Hours freed per month</span>
                <span className="text-sm font-semibold text-white">{calculations.hoursFreed} hours</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Net annual savings (after plan cost)</span>
                <span className="text-sm font-semibold text-green-400">{formatCurrency(calculations.netAnnualSavings)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Equivalent FTEs replaced</span>
                <span className="text-sm font-semibold text-white">
                  {(calculations.hoursFreed / 173).toFixed(1)} FTEs
                </span>
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-green-900/20 border border-green-500/30 p-4">
              <p className="text-sm text-green-300">
                <span className="font-semibold">Bottom line:</span> For every $1 you invest in D3VONN.IO, you get{" "}
                <span className="font-bold">${((calculations.roi / 100) + 1).toFixed(0)}</span> back in productivity gains.
              </p>
            </div>

            <Link
              href="/signup?plan=business"
              className="mt-6 block w-full rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3 text-center text-sm font-semibold text-white hover:from-cyan-500 hover:to-blue-500 transition-all"
            >
              Start Saving Today →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
