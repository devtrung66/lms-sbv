import type { ReactElement } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { formatNumber } from "@/core/lib/format";
import type { DistributionSlice } from "@/features/reports";

interface DonutChartProps {
  slices: DistributionSlice[];
  // Nhan o giua vong tron
  centerLabel?: string;
  // Mau cho tung phan
  colors: string[];
}

// Vong tron (donut) co tong o giua, dung cho phan bo trang thai/vai tro.
export function DonutChart({ slices, centerLabel = "Tổng số", colors }: DonutChartProps): ReactElement {
  const total = slices.reduce((sum, s) => sum + s.value, 0);

  return (
    <div className="relative h-44 w-44">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={slices} dataKey="value" nameKey="label" innerRadius={52} outerRadius={76} paddingAngle={2}>
            {slices.map((_, index) => (
              <Cell key={index} fill={colors[index % colors.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-ink">{formatNumber(total)}</span>
        <span className="text-xs text-ink-muted">{centerLabel}</span>
      </div>
    </div>
  );
}