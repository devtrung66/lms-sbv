import type { ReactElement } from "react";
import { formatNumber, formatPercent } from "@/core/lib/format";
import { DISTRIBUTION_COLORS } from "@/features/reports/model/constants";
import type { DistributionSlice } from "@/features/reports";
import { DonutChart } from "../components/DonutChart";

interface LearningProgressPanelProps {
  distribution: DistributionSlice[];
}

// Panel "Tien do hoc tap tong quan" (anh 3): vong tron + chu thich tung trang thai.
export function LearningProgressPanel({ distribution }: LearningProgressPanelProps): ReactElement {
  return (
    <div className="rounded-card border border-slate-200 bg-white p-5 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Tiến độ học tập tổng quan</h3>

      <div className="flex flex-col items-center gap-6 sm:flex-row">
        <DonutChart slices={distribution} centerLabel="Hoàn thành" colors={DISTRIBUTION_COLORS} />

        {/* Chu thich */}
        <div className="flex-1 space-y-2">
          {distribution.map((slice, index) => (
            <div key={slice.label} className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: DISTRIBUTION_COLORS[index % DISTRIBUTION_COLORS.length] }}
                />
                <span className="text-ink">{slice.label}</span>
              </span>
              <span className="text-ink-muted">
                {formatNumber(slice.value)} ({formatPercent(slice.percent / 100)})
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}