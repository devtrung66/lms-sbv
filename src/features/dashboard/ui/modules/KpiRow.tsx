import type { ReactElement } from "react";
import type { KpiCard as KpiCardData } from "../../model/types";
import { KpiCard } from "../components/KpiCard";

interface KpiRowProps {
  kpis: KpiCardData[];
}

// Mau nen icon luan phien cho cac the KPI (hai hoa nhu anh 2, anh 3)
const ICON_STYLES = [
  "bg-brand-50 text-brand-600",
  "bg-green-50 text-green-600",
  "bg-amber-50 text-amber-600",
  "bg-purple-50 text-purple-600",
  "bg-cyan-50 text-cyan-600",
];

// Hang the chi so KPI o dau dashboard.
export function KpiRow({ kpis }: KpiRowProps): ReactElement {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {kpis.map((kpi, index) => (
        <KpiCard
          key={kpi.key}
          data={kpi}
          iconClassName={ICON_STYLES[index % ICON_STYLES.length]}
        />
      ))}
    </div>
  );
}