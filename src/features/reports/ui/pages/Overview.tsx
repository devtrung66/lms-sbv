import type { ReactElement } from "react";
import { PageHeader } from "@/core/ui/layout/PageHeader";
import { ROUTES } from "@/app/router/routes";
import { useReportData } from "../../hooks/useReportData";
import { ReportCard } from "../components/ReportCard";
import { ReportFilters } from "../modules/ReportFilters";
import { DepartmentStatsTable } from "../modules/DepartmentStatsTable";
import { RoleDistributionChart } from "../modules/RoleDistributionChart";

// Trang bao cao thong ke: the so lieu + bang phong/ban + bieu do phan bo.
export function ReportOverviewPage(): ReactElement {
  const { cards, rows, distribution, isLoading } = useReportData();

  return (
    <div>
      <PageHeader
        title="Báo cáo thống kê"
        breadcrumb={[
          { label: "Trang chủ", to: ROUTES.home },
          { label: "Quản trị" },
          { label: "Báo cáo thống kê" },
        ]}
        actions={<ReportFilters />}
      />

      {isLoading ? (
        <div className="py-10 text-center text-sm text-ink-muted">Đang tải báo cáo...</div>
      ) : (
        <div className="space-y-6">
          {/* The so lieu */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {cards.map((card) => (
              <ReportCard key={card.label} data={card} />
            ))}
          </div>

          {/* Bang + bieu do */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_400px]">
            <DepartmentStatsTable rows={rows} />
            <RoleDistributionChart slices={distribution} />
          </div>
        </div>
      )}
    </div>
  );
}