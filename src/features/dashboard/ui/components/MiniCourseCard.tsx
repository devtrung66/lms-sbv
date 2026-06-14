import type { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { buildPath, ROUTES } from "@/app/router/routes";
import { ProgressBar } from "@/features/learning/ui/components/ProgressBar";
import type { DashboardCourse } from "../../model/types";

interface MiniCourseCardProps {
  course: DashboardCourse;
  // Hien thi diem thay vi tien do (cho khoa gan day o dashboard quan tri)
  showScore?: boolean;
}

// The khoa hoc thu nho tren dashboard: anh + tieu de + tien do hoac diem.
export function MiniCourseCard({ course, showScore }: MiniCourseCardProps): ReactElement {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(buildPath(ROUTES.courseRoom, { courseId: course.courseId }))}
      className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 bg-white p-3 transition-colors hover:bg-slate-50"
    >
      {/* Anh bia thu nho */}
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700">
        {course.thumbnailUrl ? (
          <img src={course.thumbnailUrl} alt={course.title} className="h-full w-full rounded-lg object-cover" />
        ) : (
          <BookOpen size={20} className="text-white/80" />
        )}
      </div>

      {/* Tieu de + tien do/diem */}
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-ink">{course.title}</p>
        {showScore ? (
          <p className="mt-1 text-xs text-ink-muted">
            Điểm: <span className="font-semibold text-brand-600">{course.score ?? 0}/100</span>
          </p>
        ) : (
          <div className="mt-1.5">
            <ProgressBar percent={course.progressPercent} showLabel />
          </div>
        )}
      </div>
    </div>
  );
}