import type { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, PlayCircle } from "lucide-react";
import { buildPath, ROUTES } from "@/app/router/routes";
import type { EnrolledCourse } from "../../model/types";
import { ProgressBar } from "./ProgressBar";
import { CompletionBadge } from "./CompletionBadge";

interface MyCourseCardProps {
  course: EnrolledCourse;
}

// The khoa hoc cua hoc vien: anh bia, tien do, nut tiep tuc hoc.
export function MyCourseCard({ course }: MyCourseCardProps): ReactElement {
  const navigate = useNavigate();

  // Mo phong hoc cua khoa
  function openRoom(): void {
    navigate(buildPath(ROUTES.courseRoom, { courseId: course.courseId }));
  }

  return (
    <div className="overflow-hidden rounded-card border border-slate-200 bg-white shadow-card">
      {/* Anh bia */}
      <div className="flex h-28 items-center justify-center bg-gradient-to-br from-brand-500 to-brand-700">
        {course.thumbnailUrl ? (
          <img src={course.thumbnailUrl} alt={course.title} className="h-full w-full object-cover" />
        ) : (
          <BookOpen size={32} className="text-white/80" />
        )}
      </div>

      <div className="p-4">
        <CompletionBadge status={course.status} />
        <h3 className="mt-2 line-clamp-2 text-sm font-semibold text-ink">{course.title}</h3>

        {/* Tien do */}
        <div className="mt-3">
          <ProgressBar percent={course.progressPercent} showLabel />
          <p className="mt-1 text-xs text-ink-muted">
            {course.completedLessons}/{course.totalLessons} bài học
          </p>
        </div>

        {/* Nut tiep tuc hoc */}
        <button
          type="button"
          onClick={openRoom}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-brand-500 px-3 py-2 text-sm font-medium text-white hover:bg-brand-600"
        >
          <PlayCircle size={16} />
          {course.status === "completed" ? "Xem lại" : "Tiếp tục học"}
        </button>
      </div>
    </div>
  );
}