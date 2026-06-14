import type { ReactElement } from "react";
import { CheckCircle2, Lock, PlayCircle, FileText } from "lucide-react";
import { cn } from "@/core/lib/utils";
import type { Lesson } from "@/features/courses";
import type { LessonProgress } from "../../model/types";

interface LessonSidebarProps {
  lessons: Lesson[];
  progress: Record<string, LessonProgress>;
  activeLessonId: string | null;
  onSelect: (id: string) => void;
}

// Dinh dang giay sang dang phut:giay (vd 930 -> "15:30")
function formatDuration(seconds?: number): string {
  if (!seconds) return "";
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

// Gom bai hoc theo chuong (tam nhom theo order vi du lieu chua co truong chuong).
function groupIntoChapters(lessons: Lesson[]): { title: string; items: Lesson[] }[] {
  const sorted = [...lessons].sort((a, b) => a.order - b.order);
  return [
    { title: "Chuong 1: Tong quan ve cong tac thanh tra, giam sat", items: sorted.slice(0, 3) },
    { title: "Chuong 2: Quy trinh thanh tra tai cho", items: sorted.slice(3, 5) },
    { title: "Chuong 3: Giam sat tu xa", items: sorted.slice(5, 7) },
    { title: "Chuong 4: Xu ly vi pham", items: sorted.slice(7) },
  ].filter((c) => c.items.length > 0);
}

// Cot phai phong hoc: panel tien do + danh sach bai theo chuong.
export function LessonSidebar({
  lessons,
  progress,
  activeLessonId,
  onSelect,
}: LessonSidebarProps): ReactElement {
  const total = lessons.length;
  const completed = lessons.filter((l) => progress[l.id]?.completed).length;
  const inProgress = lessons.filter((l) => !progress[l.id]?.completed && progress[l.id]).length;
  const notStarted = total - completed - inProgress;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  const chapters = groupIntoChapters(lessons);

  // Mot bai duoc coi la "khoa" neu bai truoc no chua hoan thanh
  function isLocked(lesson: Lesson, index: number): boolean {
    if (index === 0) return false;
    const prev = lessons[index - 1];
    return !progress[prev.id]?.completed && lesson.id !== activeLessonId;
  }

  return (
    <div className="space-y-4">
      {/* Panel tien do */}
      <div className="rounded-card border border-slate-200 bg-white p-5 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Tien do khoa hoc</h3>
        <div className="flex items-center gap-5">
          {/* Vong tron tien do bang SVG */}
          <div className="relative h-20 w-20 shrink-0">
            <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e2e8f0" strokeWidth="3.5" />
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="#2563eb" strokeWidth="3.5" strokeLinecap="round" strokeDasharray={`${percent} 100`} />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-lg font-bold text-ink">{percent}%</span>
            </div>
          </div>
          {/* Chu thich */}
          <div className="flex-1 space-y-1.5 text-sm">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-green-600"><CheckCircle2 size={14} /> Da hoc</span>
              <span className="font-medium text-ink">{completed} bai</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-brand-600"><PlayCircle size={14} /> Dang hoc</span>
              <span className="font-medium text-ink">{inProgress} bai</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-ink-muted"><Lock size={14} /> Chua hoc</span>
              <span className="font-medium text-ink">{notStarted} bai</span>
            </div>
          </div>
        </div>
      </div>

      {/* Danh sach bai theo chuong */}
      <div className="rounded-card border border-slate-200 bg-white p-3 shadow-card">
        <h3 className="px-2 py-2 text-base font-semibold text-ink">Danh sach bai hoc</h3>
        <div className="space-y-3">
          {chapters.map((chapter) => {
            const done = chapter.items.filter((l) => progress[l.id]?.completed).length;
            return (
              <div key={chapter.title}>
                <div className="flex items-center justify-between px-2 py-1.5">
                  <p className="text-sm font-semibold text-ink">{chapter.title}</p>
                  <span className="text-xs text-ink-muted">{done}/{chapter.items.length}</span>
                </div>
                <div className="space-y-0.5">
                  {chapter.items.map((lesson) => {
                    const globalIndex = lessons.findIndex((l) => l.id === lesson.id);
                    const isDone = progress[lesson.id]?.completed;
                    const isActive = lesson.id === activeLessonId;
                    const locked = isLocked(lesson, globalIndex);
                    return (
                      <button
                        key={lesson.id}
                        type="button"
                        disabled={locked}
                        onClick={() => onSelect(lesson.id)}
                        className={cn(
                          "flex w-full items-center gap-2.5 rounded-lg px-2 py-2 text-left text-sm transition-colors",
                          isActive ? "bg-brand-50 text-brand-700" : "hover:bg-slate-50 text-ink",
                          locked && "cursor-not-allowed opacity-50"
                        )}
                      >
                        <span className="shrink-0">
                          {isDone ? (
                            <CheckCircle2 size={16} className="text-green-500" />
                          ) : locked ? (
                            <Lock size={16} className="text-slate-300" />
                          ) : lesson.type === "video" ? (
                            <PlayCircle size={16} className={isActive ? "text-brand-600" : "text-slate-400"} />
                          ) : (
                            <FileText size={16} className="text-slate-400" />
                          )}
                        </span>
                        <span className="min-w-0 flex-1 truncate">{lesson.title}</span>
                        {lesson.durationSeconds ? (
                          <span className="shrink-0 text-xs text-ink-muted">{formatDuration(lesson.durationSeconds)}</span>
                        ) : null}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}