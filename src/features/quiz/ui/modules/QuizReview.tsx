import type { ReactElement } from "react";
import { History } from "lucide-react";
import { formatDateTime } from "@/core/lib/date";
import { ScoreBadge } from "../components/ScoreBadge";
import type { QuizResult } from "../../model/types";

interface QuizReviewProps {
  results: QuizResult[];
}

// Lich su cac lan lam bai kiem tra cua hoc vien.
export function QuizReview({ results }: QuizReviewProps): ReactElement {
  return (
    <div className="rounded-card border border-slate-200 bg-white p-5 shadow-card">
      <div className="mb-4 flex items-center gap-2">
        <History size={18} className="text-ink-muted" />
        <h3 className="text-base font-semibold text-ink">Lịch sử làm bài</h3>
      </div>

      {results.length === 0 ? (
        <p className="py-6 text-center text-sm text-ink-muted">Chưa có lần làm bài nào</p>
      ) : (
        <div className="divide-y divide-slate-100">
          {results.map((r) => (
            <div key={r.attemptId} className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-medium text-ink">Lần {r.attemptNumber}</p>
                <p className="text-xs text-ink-muted">{formatDateTime(r.submittedAt)}</p>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={
                    r.passed
                      ? "rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700"
                      : "rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-medium text-red-700"
                  }
                >
                  {r.passed ? "Đạt" : "Chưa đạt"}
                </span>
                <ScoreBadge score={r.score} threshold={r.passThreshold} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}