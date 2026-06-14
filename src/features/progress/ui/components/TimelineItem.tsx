import type { ReactElement } from "react";
import { formatRelative } from "@/core/lib/date";
import { CompletionBadge } from "@/features/learning/ui/components/CompletionBadge";
import type { ProgressRow } from "../../model/types";
import { ProgressBar } from "@/features/learning/ui/components/ProgressBar";

interface TimelineItemProps {
  row: ProgressRow;
}

// Mot dong trong dong thoi gian hoc tap: ten khoa, tien do, lan hoc gan nhat.
export function TimelineItem({ row }: TimelineItemProps): ReactElement {
  return (
    <div className="flex items-center gap-4 border-b border-slate-100 py-3">
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="truncate text-sm font-medium text-ink">{row.courseTitle}</p>
          <CompletionBadge status={row.status} />
        </div>
        <div className="mt-2">
          <ProgressBar percent={row.progressPercent} showLabel />
        </div>
        <p className="mt-1 text-xs text-ink-muted">
          {row.completedLessons}/{row.totalLessons} bài
          {row.lastAccessedAt && ` · Học gần nhất ${formatRelative(row.lastAccessedAt)}`}
        </p>
      </div>
      {/* Diem cuoi khoa (neu da co) */}
      {row.finalScore !== undefined && (
        <div className="shrink-0 text-right">
          <p className="text-lg font-bold text-brand-600">{row.finalScore}</p>
          <p className="text-xs text-ink-muted">/100</p>
        </div>
      )}
    </div>
  );
}