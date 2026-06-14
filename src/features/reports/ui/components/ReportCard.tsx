import type { ReactElement } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { formatNumber } from "@/core/lib/format";
import { formatChange, changeColorClass } from "../../lib/utils";
import type { ReportCardData } from "../../model/types";

interface ReportCardProps {
  data: ReportCardData;
}

// The so lieu tong hop tren trang bao cao (kem phan tram thay doi).
export function ReportCard({ data }: ReportCardProps): ReactElement {
  const changeText = formatChange(data.change);

  return (
    <div className="rounded-card border border-slate-200 bg-white p-5 shadow-card">
      <p className="text-sm text-ink-muted">{data.label}</p>
      <div className="mt-2 flex items-end justify-between">
        <p className="text-2xl font-bold text-ink">
          {formatNumber(data.value)}
          {data.unit && <span className="ml-1 text-sm font-normal text-ink-muted">{data.unit}</span>}
        </p>
        {changeText && (
          <span className={`flex items-center gap-1 text-sm ${changeColorClass(data.change)}`}>
            {(data.change ?? 0) >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
            {changeText}
          </span>
        )}
      </div>
    </div>
  );
}