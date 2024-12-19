import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WatchDemoButton() {
  return (
    <Button
      variant="ghost"
      className="text-emerald-500 hover:text-emerald-600 p-0 flex items-center gap-2"
    >
      <div className="bg-emerald-100 rounded-full p-1">
        <Play className="w-4 h-4" />
      </div>
      <span className="underline">Watch demo video</span>
    </Button>
  );
}
