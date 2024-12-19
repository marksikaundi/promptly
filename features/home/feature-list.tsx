import { Check } from "lucide-react";

const features = [
  "Post to all major platforms in one click",
  "Schedule content for the perfect posting time",
  "Customize content for each platform",
  "Generate viral videos using our studio templates",
];

export function FeatureList() {
  return (
    <ul className="space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-3">
          <div className="bg-emerald-100 rounded-full p-1">
            <Check className="w-4 h-4 text-emerald-500" />
          </div>
          <span className="text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
  );
}
