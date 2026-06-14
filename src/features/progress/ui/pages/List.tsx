import type { ReactElement } from "react";
import { Clock, BookOpenCheck, ClipboardCheck, Trophy } from "lucide-react";
import { PageHeader } from "@/core/ui/layout/PageHeader";
import { ROUTES } from "@/app/router/routes";
import { useProgressList } from "../../hooks/useProgressList";
import { ProgressTable } from "../components/ProgressTable";
import { ProgressRing } from "../components/ProgressRing";

// Doi giay sang dang "12h 45m"
function formatStudyTime(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  return `${h}h ${m}m`;
}

// Trang tien do hoc tap: tong quan (vong tron + chi so) + bang tien do.
export function ProgressListPage(): ReactElement {
  const { rows, isLoading } = useProgressList();

  // Tinh cac chi so tong quan tu danh sach tien do
  const totalCourses = rows.length;
  const completedCourses = rows.filter((r) => r.status === "completed").length;
  const avgProgress = totalCourses > 0
    ? Math.round(rows.reduce((sum, r) => sum + r.progressPercent, 0) / totalCourses)
    : 0;
  const totalStudy = rows.reduce((sum, r) => sum + (r.studyTimeSeconds ?? 0), 0);
  const completedLessons = rows.reduce((sum, r) => sum + r.completedLessons, 0);
  const totalLessons = rows.reduce((sum, r) => sum + r.totalLessons, 0);
  const scored = rows.filter((r) => typeof r.finalScore === "number");
  const avgScore = scored.length > 0
    ? (scored.reduce((sum, r) => sum + (r.finalScore ?? 0), 0) / scored.length).toFixed(1)
    : "0";

  const stats = [
    { icon: <Clock size={20} />, label: "Tong thoi gian hoc", value: formatStudyTime(totalStudy) },
    { icon: <BookOpenCheck size={20} />, label: "Bai da hoc", value: `${completedLessons}/${totalLessons}` },
    { icon: <ClipboardCheck size={20} />, label: "Bai kiem tra", value: `${scored.length}/${totalCourses}` },
    { icon: <Trophy size={20} />, label: "Diem trung binh", value: `${avgScore}/100` },
  ];

  return (
    <div>
      <PageHeader
        title="Tiến độ học tập"
        description="Theo dõi tiến độ học tập của bạn trên từng khóa học"
        breadcrumb={[
          { label: "Trang chủ", to: ROUTES.home },
          { label: "Tiến độ học tập" },
        ]}
      />

      {/* Khoi tong quan: vong tron + 4 chi so */}
      <div className="mb-6 flex flex-col items-center gap-6 rounded-card border border-slate-200 bg-white p-6 shadow-card lg:flex-row">
        <ProgressRing percent={avgProgress} />
        <div className="grid flex-1 grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1 rounded-lg bg-slate-50 px-4 py-5 text-center">
              <span className="text-brand-500">{s.icon}</span>
              <span className="text-xs text-ink-muted">{s.label}</span>
              <span className="text-lg font-bold text-ink">{s.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bang tien do tung khoa */}
      <ProgressTable rows={rows} isLoading={isLoading} />
    </div>
  );
}