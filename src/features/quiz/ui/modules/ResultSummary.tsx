import type { ReactElement } from "react";
import { formatDateTime } from "@/core/lib/date";
import type { QuizResult } from "../../model/types";
import { ScoreBadge } from "../components/ScoreBadge";
import { PassFailBanner } from "../components/PassFailBanner";

interface ResultSummaryProps {
  result: QuizResult;
}

// Tom tat ket qua sau khi nop bai: banner dat/truot + diem + so cau dung.
export function ResultSummary({ result }: ResultSummaryProps): ReactElement {
  return (
    <div className="space-y-5">
      <PassFailBanner passed={result.passed} threshold={result.passThreshold} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Diem so */}
        <div className="rounded-card border border-slate-200 bg-white p-5 text-center shadow-card">
          <p className="mb-2 text-sm text-ink-muted">Điểm số</p>
          <div className="flex justify-center">
            <ScoreBadge score={result.score} threshold={result.passThreshold} large />
          </div>
        </div>

        {/* So cau dung */}
        <div className="rounded-card border border-slate-200 bg-white p-5 text-center shadow-card">
          <p className="mb-2 text-sm text-ink-muted">Số câu đúng</p>
          <p className="text-3xl font-bold text-ink">
            {result.correctCount}/{result.totalQuestions}
          </p>
        </div>

        {/* Lan lam */}
        <div className="rounded-card border border-slate-200 bg-white p-5 text-center shadow-card">
          <p className="mb-2 text-sm text-ink-muted">Lần làm</p>
          <p className="text-3xl font-bold text-ink">{result.attemptNumber}</p>
        </div>
      </div>

      <p className="text-center text-xs text-ink-muted">
        Nộp lúc {formatDateTime(result.submittedAt)}
      </p>
    </div>
  );
}