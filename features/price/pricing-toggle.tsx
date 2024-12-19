"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";

interface PricingToggleProps {
  onPeriodChange: (yearly: boolean) => void;
}

export function PricingToggle({ onPeriodChange }: PricingToggleProps) {
  const [yearly, setYearly] = useState(false);

  const handleToggle = (checked: boolean) => {
    setYearly(checked);
    onPeriodChange(checked);
  };

  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      {yearly && (
        <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full">
          10% OFF
        </span>
      )}
      <span
        className={`text-sm font-medium ${!yearly ? "text-primary" : "text-muted-foreground"}`}
      >
        Monthly
      </span>
      <div className="relative">
        <Switch checked={yearly} onCheckedChange={handleToggle} />
      </div>
      <span
        className={`text-sm font-medium ${yearly ? "text-primary" : "text-muted-foreground"}`}
      >
        Yearly
      </span>
      <div className="ml-2">
        <Switch checked={true} disabled /> Free trial
      </div>
    </div>
  );
}
