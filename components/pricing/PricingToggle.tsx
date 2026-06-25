import { Dispatch, SetStateAction } from "react";

interface PricingToggleProps {
  isAnnual: boolean;
  setIsAnnual: Dispatch<SetStateAction<boolean>>;
}

export default function PricingToggle({ isAnnual, setIsAnnual }: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-4 mb-12">
      <span
        className={`text-sm font-medium transition-colors ${
          !isAnnual ? "text-white" : "text-gray-400"
        }`}
      >
        Monthly
      </span>
      <button
        onClick={() => setIsAnnual(!isAnnual)}
        className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
          isAnnual ? "bg-cyan-600" : "bg-gray-600"
        }`}
        role="switch"
        aria-checked={isAnnual}
        aria-label="Toggle annual billing"
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
            isAnnual ? "translate-x-8" : "translate-x-1"
          }`}
        />
      </button>
      <span
        className={`text-sm font-medium transition-colors ${
          isAnnual ? "text-white" : "text-gray-400"
        }`}
      >
        Annual
        <span className="ml-2 inline-flex items-center rounded-full bg-green-900/50 px-2 py-0.5 text-xs font-medium text-green-400 ring-1 ring-green-400/30">
          Save ~17%
        </span>
      </span>
    </div>
  );
}
