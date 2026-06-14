import type { ReactElement } from "react";
import { useLearnerDashboard } from "../../hooks/useLearnerDashboard";
import { greetingByHour } from "../../lib/utils";
import { KpiRow } from "../modules/KpiRow";
import { LearningProgressPanel } from "../modules/LearningProgressPanel";
import { RecentCoursesPanel } from "../modules/RecentCoursesPanel";
import { AnnouncementsPanel } from "../modules/AnnouncementsPanel";
import { DashboardLineChart } from "../components/LineChart";

// Trang chu hoc vien (anh 3): loi chao + KPI + tien do + bieu do + khoa hoc + thong bao.
export function LearnerHomePage(): ReactElement {
  const { data, isLoading } = useLearnerDashboard();

  if (isLoading || !data) {
    return <div className="py-10 text-center text-sm text-ink-muted">Đang tải trang chủ...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Loi chao */}
      <div>
        <h1 className="text-2xl font-bold text-ink">{greetingByHour()}!</h1>
        <p className="mt-1 text-sm text-ink-muted">Chúc bạn một ngày học tập hiệu quả!</p>
      </div>

      {/* KPI */}
      <KpiRow kpis={data.kpis} />

      {/* Tien do + bieu do ket qua */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <LearningProgressPanel distribution={data.progressDistribution} />
        <div className="rounded-card border border-slate-200 bg-white p-5 shadow-card">
          <h3 className="mb-4 text-base font-semibold text-ink">Biểu đồ kết quả học tập</h3>
          <DashboardLineChart data={data.scoreTrend} />
        </div>
      </div>

      {/* Khoa hoc dang hoc + thong bao */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <RecentCoursesPanel title="Khóa học đang học" courses={data.ongoingCourses} />
        <AnnouncementsPanel notices={data.notices} />
      </div>
    </div>
  );
}