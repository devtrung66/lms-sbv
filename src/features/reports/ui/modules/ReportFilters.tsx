import type { ReactElement } from "react";
import { REPORT_TYPE_OPTIONS } from "../../model/constants";
import { useReportStore } from "../../state/store";
import { TREND_RANGES } from "@/features/progress/model/constants";
import type { ReportType } from "../../model/types";

// Thanh bo loc bao cao: loai bao cao + khoang thoi gian.
export function ReportFilters(): ReactElement {
  const filters = useReportStore((state) => state.filters);
  const setFilters = useReportStore((state) => state.setFilters);

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Loai bao cao */}
      <select
        value={filters.type}
        onChange={(e) => setFilters({ type: e.target.value as ReportType })}
        className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-ink outline-none focus:border-brand-500"
      >
        {REPORT_TYPE_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>

      {/* Khoang thoi gian */}
      <select
        value={filters.months}
        onChange={(e) => setFilters({ months: Number(e.target.value) })}
        className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-ink outline-none focus:border-brand-500"
      >
        {TREND_RANGES.map((range) => (
          <option key={range.value} value={range.value}>{range.label}</option>
        ))}
      </select>
    </div>
  );
}