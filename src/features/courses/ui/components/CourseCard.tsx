import type { ReactElement } from "react";
import { BookOpen, Clock, FileQuestion } from "lucide-react";
import { cn } from "@/core/lib/utils";
import {
  COURSE_STATUS_LABELS,
  COURSE_STATUS_COLORS,
} from "../../model/constants";
import { formatCourseDuration } from "../../lib/utils";
import type { Course } from "../../model/types";

interface CourseCardProps {
  course: Course;
  onClick?: (id: string) => void;
}

// The khoa hoc dang luoi: anh bia, tieu de, trang thai, so bai, thoi luong.
export function CourseCard({ course, onClick }: CourseCardProps): ReactElement {
  return (
    <div
      onClick={() => onClick?.(course.id)}
      className="cursor-pointer overflow-hidden rounded-card border border-slate-200 bg-white shadow-card transition-shadow hover:shadow-md"
    >
      {/* Anh bia (hoac nen mac dinh neu chua co) */}
      <div className="flex h-32 items-center justify-center bg-gradient-to-br from-brand-500 to-brand-700">
        {course.thumbnailUrl ? (
          <img src={course.thumbnailUrl} alt={course.title} className="h-full w-full object-cover" />
        ) : (
          <BookOpen size={36} className="text-white/80" />
        )}
      </div>

      <div className="p-4">
        {/* Trang thai */}
        <span
          className={cn(
            "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
            COURSE_STATUS_COLORS[course.status]
          )}
        >
          {COURSE_STATUS_LABELS[course.status]}
        </span>

        {/* Tieu de */}
        <h3 className="mt-2 line-clamp-2 text-sm font-semibold text-ink">{course.title}</h3>

        {/* Thong tin nhanh */}
        <div className="mt-3 flex items-center gap-4 text-xs text-ink-muted">
          <span className="flex items-center gap-1">
            <BookOpen size={14} /> {course.lessonCount} bài
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} /> {formatCourseDuration(course.totalDurationSeconds)}
          </span>
          {course.hasFinalQuiz && (
            <span className="flex items-center gap-1 text-brand-600">
              <FileQuestion size={14} /> Có kiểm tra
            </span>
          )}
        </div>
      </div>
    </div>
  );
}