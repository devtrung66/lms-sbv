import type { ReactElement } from "react";
// Tai su dung bieu do duong tu module progress (single source of truth).
import { TrendChart } from "@/features/progress";
import type { ProgressTrendPoint } from "@/features/progress";

interface DashboardLineChartProps {
  data: ProgressTrendPoint[];
}

// Bieu do duong ket qua hoc tap tren dashboard.
// Boc lai TrendChart cua module progress de giu mot nguon duy nhat.
export function DashboardLineChart({ data }: DashboardLineChartProps): ReactElement {
  return <TrendChart data={data} />;
}