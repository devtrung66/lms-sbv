import type { ReactElement } from "react";
import { PageHeader } from "@/core/ui/layout/PageHeader";
import { ROUTES } from "@/app/router/routes";
import { useAdminDashboard } from "../../hooks/useAdminDashboard";
import { DISTRIBUTION_COLORS } from "@/features/reports/model/constants";
import { KpiRow } from "../modules/KpiRow";
import { RecentCoursesPanel } from "../modules/RecentCoursesPanel";
import { DonutChart } from "../components/DonutChart";
import { formatNumber, formatPercent } from "@/core/lib/format";

// Trang dashboard quan tri (anh 2): KPI + phan bo vai tro + khoa hoc gan day.
export function AdminDashboardPage(): ReactElement {
  const { data, isLoading } = useAdminDashboard();

  if (isLoading || !data) {
    return <div className="py-10 text-center text-sm text-ink-muted">Đang tải dashboard...</div>;
  }

  return (
    <div>
      <PageHeader
        title="Dashboard quản trị"
        breadcrumb={[
          { label: "Trang chủ", to: ROUTES.home },
          { label: "Quản trị" },
          { label: "Tổng quan" },
        ]}
      />

      <div className="space-y-6">
        {/* KPI */}
        <KpiRow kpis={data.kpis} />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Phan bo vai tro */}
          <div className="rounded-card border border-slate-200 bg-white p-5 shadow-card">
            <h3 className="mb-4 text-base font-semibold text-ink">Biểu đồ phân bố vai trò</h3>
            <div className="flex flex-col items-center gap-6 sm:flex-row">
              <DonutChart slices={data.roleDistribution} colors={DISTRIBUTION_COLORS} />
              <div className="flex-1 space-y-2">
                {data.roleDistribution.map((slice, index) => (
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

          {/* Khoa hoc gan day (kem diem) */}
          <RecentCoursesPanel title="Khóa học gần đây" courses={data.recentCourses} showScore />
        </div>
      </div>
    </div>
  );
}