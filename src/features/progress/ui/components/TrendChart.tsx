import type { ReactElement } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import type { ProgressTrendPoint } from "../../model/types";

interface TrendChartProps {
  data: ProgressTrendPoint[];
}

// Bieu do duong ket qua hoc tap theo thang (giong bieu do o anh 3).
export function TrendChart({ data }: TrendChartProps): ReactElement {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#64748b" }} />
          <YAxis domain={[0, 100]} tick={{ fontSize: 12, fill: "#64748b" }} />
          <Tooltip
            formatter={(value: number) => [`${value}/100`, "Điểm trung bình"]}
          />
          <Line
            type="monotone"
            dataKey="averageScore"
            stroke="var(--color-brand-500)"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}