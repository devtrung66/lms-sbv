import type { ReactElement } from "react";
import { formatNumber } from "@/core/lib/format";
import type { KpiCard as KpiCardData } from "../../model/types";
import { KpiIcon } from "./IconMap";

interface KpiCardProps {
  data: KpiCardData;
  // Mau nen vung icon (lop mau Tailwind)
  iconClassName?: string;
}

// The chi so KPI tren dashboard (giong cac the o dau anh 2 va anh 3).
export function KpiCard({
  data,
  iconClassName = "bg-brand-50 text-brand-600",
}: KpiCardProps): ReactElement {
  return (
    <div className="flex items-center gap-4 rounded-card border border-slate-200 bg-white p-5 shadow-card">
      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${iconClassName}`}>
        <KpiIcon kpiKey={data.key} />
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm text-ink-muted">{data.label}</p>
        <p className="text-2xl font-bold text-ink">
          {formatNumber(data.value)}
          {data.unit && <span className="ml-1 text-sm font-normal text-ink-muted">{data.unit}</span>}
        </p>
        {data.caption && <p className="text-xs text-ink-muted">{data.caption}</p>}
      </div>
    </div>
  );
}