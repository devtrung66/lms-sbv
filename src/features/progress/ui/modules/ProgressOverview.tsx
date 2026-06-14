import type { ReactElement } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { PROGRESS_CHART_COLORS } from "../../model/constants";
import { completionRatio, toChartSegments } from "../../lib/utils";
import { ProgressRing } from "../components/ProgressRing";
import type { ProgressSummary } from "../../model/types";

interface ProgressOverviewProps {
  summary: ProgressSummary;
}

// Mau cho tung phan cua bieu do tron, theo thu tu segment
const SEGMENT_COLORS = [
  PROGRESS_CHART_COLORS.completed,
  PROGRESS_CHART_COLORS.inProgress,
  PROGRESS_CHART_COLORS.notStarted,
  PROGRESS_CHART_COLORS.overdue,
];

// Tong quan tien do: vong tron hoan thanh + bieu do tron phan bo trang thai.
export function ProgressOverview({ summary }: ProgressOverviewProps): ReactElement {
  const ringPercent = Math.round(completionRatio(summary) * 100);
  const segments = toChartSegments(summary);

  return (
    <div className="rounded-card border border-slate-200 bg-white p-5 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Tiến độ học tập tổng quan</h3>

      <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-around">
        {/* Vong tron hoan thanh */}
        <ProgressRing percent={ringPercent} />

        {/* Bieu do tron phan bo trang thai */}
        <div className="h-48 w-full max-w-xs">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={segments}
                dataKey="value"
                nameKey="label"
                innerRadius={45}
                outerRadius={70}
                paddingAngle={2}
              >
                {segments.map((_, index) => (
                  <Cell key={index} fill={SEGMENT_COLORS[index]} />
                ))}
              </Pie>
              <Legend
                iconType="circle"
                formatter={(value) => <span className="text-xs text-ink-muted">{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}