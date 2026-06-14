import type { ReactElement } from "react";
import { Clock } from "lucide-react";
import { cn } from "@/core/lib/utils";
import { formatCountdown } from "../../lib/utils";
import { quizConfig } from "../../config/quiz.config";

interface TimerProps {
  // So giay con lai
  remaining: number;
}

// Dong ho dem nguoc thoi gian lam bai. Doi mau do khi sap het gio.
export function Timer({ remaining }: TimerProps): ReactElement {
  const warning = Number.isFinite(remaining) && remaining <= quizConfig.warningSeconds;

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold",
        warning ? "bg-red-50 text-red-600" : "bg-slate-100 text-ink"
      )}
    >
      <Clock size={16} />
      <span>{formatCountdown(remaining)}</span>
    </div>
  );
}