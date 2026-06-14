import type { ReactElement } from "react";
import { scoreColorClass } from "../../lib/utils";

interface ScoreBadgeProps {
  score: number;
  threshold: number;
  // Kich thuoc lon dung cho trang ket qua
  large?: boolean;
}

// Hien thi diem so theo thang 100, doi mau theo nguong dat.
export function ScoreBadge({ score, threshold, large }: ScoreBadgeProps): ReactElement {
  const colorClass = scoreColorClass(score, threshold);
  return (
    <div className="flex items-baseline gap-1">
      <span className={`${large ? "text-5xl" : "text-2xl"} font-bold ${colorClass}`}>
        {score}
      </span>
      <span className="text-sm text-ink-muted">/100</span>
    </div>
  );
}