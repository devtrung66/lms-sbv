import type { ReactElement } from "react";
import { PageHeader } from "@/core/ui/layout/PageHeader";
import { ROUTES } from "@/app/router/routes";
import { useProgressDetail } from "../../hooks/useProgressDetail";
import { ProgressOverview } from "../modules/ProgressOverview";
import { ProgressFilters } from "../modules/ProgressFilters";
import { TrendChart } from "../components/TrendChart";

// Trang tong quan tien do: vong tron + phan bo + bieu do ket qua theo thang.
export function ProgressDetailPage(): ReactElement {
  const { summary, trend, isLoading } = useProgressDetail();

  if (isLoading || !summary) {
    return <div className="py-10 text-center text-sm text-ink-muted">Đang tải dữ liệu...</div>;
  }

  return (
    <div>
      <PageHeader
        title="Tổng quan tiến độ"
        breadcrumb={[
          { label: "Trang chủ", to: ROUTES.home },
          { label: "Tiến độ học tập", to: ROUTES.progress },
          { label: "Tổng quan" },
        ]}
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ProgressOverview summary={summary} />

        {/* Bieu do ket qua hoc tap theo thang */}
        <div className="rounded-card border border-slate-200 bg-white p-5 shadow-card">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-base font-semibold text-ink">Biểu đồ kết quả học tập</h3>
            <ProgressFilters />
          </div>
          <TrendChart data={trend} />
        </div>
      </div>
    </div>
  );
}