import type { ReactElement } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { DISTRIBUTION_COLORS } from "../../model/constants";
import { totalDistribution } from "../../lib/utils";
import { formatNumber } from "@/core/lib/format";
import { ChartLegend } from "../components/ChartLegend";
import type { DistributionSlice } from "../../model/types";

interface RoleDistributionChartProps {
  slices: DistributionSlice[];
}

// Bieu do phan bo (vd phan bo vai tro - anh 2): vong tron + tong o giua + chu thich.
export function RoleDistributionChart({ slices }: RoleDistributionChartProps): ReactElement {
  const total = totalDistribution(slices);

  return (
    <div className="rounded-card border border-slate-200 bg-white p-5 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Biểu đồ phân bố</h3>

      <div className="flex flex-col items-center gap-6 sm:flex-row">
        {/* Vong tron co tong o giua */}
        <div className="relative h-48 w-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={slices} dataKey="value" nameKey="label" innerRadius={55} outerRadius={80} paddingAngle={2}>
                {slices.map((_, index) => (
                  <Cell key={index} fill={DISTRIBUTION_COLORS[index % DISTRIBUTION_COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          {/* Tong so o giua vong tron */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-ink">{formatNumber(total)}</span>
            <span className="text-xs text-ink-muted">Tổng số</span>
          </div>
        </div>

        {/* Chu thich */}
        <div className="flex-1">
          <ChartLegend slices={slices} />
        </div>
      </div>
    </div>
  );
}