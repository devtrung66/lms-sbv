import type { ReactElement } from "react";
import { formatNumber, formatPercent } from "@/core/lib/format";
import { DISTRIBUTION_COLORS } from "../../model/constants";
import type { DistributionSlice } from "../../model/types";

interface ChartLegendProps {
  slices: DistributionSlice[];
}

// Chu thich cho bieu do phan bo: cham mau + nhan + so luong + phan tram.
export function ChartLegend({ slices }: ChartLegendProps): ReactElement {
  return (
    <div className="space-y-2">
      {slices.map((slice, index) => (
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
  );
}