import type { ReactElement } from "react";
import { GripVertical } from "lucide-react";
import { formatDuration } from "@/core/lib/format";
import { LESSON_TYPE_LABELS } from "../../model/constants";
import type { Lesson } from "../../model/types";
import { MediaThumb } from "./MediaThumb";

interface LessonItemProps {
  lesson: Lesson;
  index: number;
}

// Mot dong bai hoc trong danh sach bai hoc cua khoa.
export function LessonItem({ lesson, index }: LessonItemProps): ReactElement {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3">
      {/* Tay cam keo tha sap xep */}
      <GripVertical size={16} className="shrink-0 cursor-grab text-slate-300" />

      {/* Thu tu */}
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-ink-muted">
        {index + 1}
      </span>

      {/* Icon loai media */}
      <MediaThumb type={lesson.type} />

      {/* Tieu de + loai */}
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-ink">{lesson.title}</p>
        <p className="text-xs text-ink-muted">{LESSON_TYPE_LABELS[lesson.type]}</p>
      </div>

      {/* Thoi luong (neu la video) */}
      {lesson.durationSeconds !== undefined && (
        <span className="shrink-0 text-xs text-ink-muted">
          {formatDuration(Math.round(lesson.durationSeconds / 60))}
        </span>
      )}
    </div>
  );
}