import { useState, type ReactElement } from "react";
import { Search } from "lucide-react";
import { PageHeader } from "@/core/ui/layout/PageHeader";
import { ROUTES } from "@/app/router/routes";
import { cn } from "@/core/lib/utils";
import { useMyCourses } from "../../hooks/useMyCourses";
import { MyCourseCard } from "../components/MyCourseCard";
import type { EnrollmentStatus } from "../../model/types";

type TabKey = "in_progress" | "not_started" | "completed";

// Trang "Khoa hoc cua toi": tab loc theo trang thai + tim kiem + luoi the.
export function MyCoursesPage(): ReactElement {
  const { courses, isLoading } = useMyCourses();
  const [tab, setTab] = useState<TabKey>("in_progress");
  const [keyword, setKeyword] = useState("");

  // Dem so khoa theo trang thai
  function countBy(status: EnrollmentStatus): number {
    return courses.filter((c) => c.status === status).length;
  }

  // Loc theo tab + tu khoa tim kiem
  const filtered = courses
    .filter((c) => c.status === tab)
    .filter((c) => c.title.toLowerCase().includes(keyword.toLowerCase()));

  const tabs: { key: TabKey; label: string }[] = [
    { key: "in_progress", label: `Dang hoc (${countBy("in_progress")})` },
    { key: "not_started", label: `Chua hoc (${countBy("not_started")})` },
    { key: "completed", label: `Da hoan thanh (${countBy("completed")})` },
  ];

  return (
    <div>
      <PageHeader
        title="Khóa học của tôi"
        description="Danh sách các khóa học bạn đang tham gia"
        breadcrumb={[
          { label: "Trang chủ", to: ROUTES.home },
          { label: "Khóa học của tôi" },
        ]}
      />

      {/* Tab + tim kiem */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          {tabs.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setTab(t.key)}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                tab === t.key ? "bg-brand-500 text-white" : "bg-white text-ink-muted border border-slate-200 hover:bg-slate-50"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted" />
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Tim kiem khoa hoc..."
            className="rounded-lg border border-slate-200 py-2 pl-9 pr-3 text-sm outline-none focus:border-brand-500"
          />
        </div>
      </div>

      {isLoading ? (
        <div className="py-10 text-center text-sm text-ink-muted">Đang tải khóa học...</div>
      ) : filtered.length === 0 ? (
        <div className="py-10 text-center text-sm text-ink-muted">Không có khóa học nào</div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((course) => (
            <MyCourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}