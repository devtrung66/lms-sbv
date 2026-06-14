import type { ReactElement } from "react";
import type { Lesson } from "../../model/types";
import { LessonItem } from "../components/LessonItem";

interface LessonManagerProps {
  lessons: Lesson[];
}

// Danh sach bai hoc trong khoa, sap xep theo thu tu.
export function LessonManager({ lessons }: LessonManagerProps): ReactElement {
  return (
    <div className="rounded-card border border-slate-200 bg-white p-5 shadow-card">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-semibold text-ink">Danh sách bài học</h3>
        <span className="text-sm text-ink-muted">{lessons.length} bài</span>
      </div>

      {lessons.length === 0 ? (
        <p className="py-6 text-center text-sm text-ink-muted">
          Chưa có bài học nào. Hãy tải lên bài học đầu tiên.
        </p>
      ) : (
        <div className="space-y-2">
          {lessons.map((lesson, index) => (
            <LessonItem key={lesson.id} lesson={lesson} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}