import type { ReactElement } from "react";
import { useParams } from "react-router-dom";
import { PageHeader } from "@/core/ui/layout/PageHeader";
import { ROUTES } from "@/app/router/routes";
import { useQuizResult } from "../../hooks/useQuizResult";
import { QuizReview } from "../modules/QuizReview";
import { ScoreBadge } from "../components/ScoreBadge";

// Trang ket qua kiem tra: lan tot nhat + lich su cac lan lam.
export function QuizResultPage(): ReactElement {
  const { quizId } = useParams<{ quizId: string }>();
  const { results, best, isLoading } = useQuizResult(quizId ?? null);

  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        title="Kết quả kiểm tra"
        breadcrumb={[
          { label: "Trang chủ", to: ROUTES.home },
          { label: "Kết quả kiểm tra" },
        ]}
      />

      {isLoading ? (
        <div className="py-10 text-center text-sm text-ink-muted">Đang tải kết quả...</div>
      ) : (
        <div className="space-y-5">
          {/* Ket qua tot nhat */}
          {best && (
            <div className="flex items-center justify-between rounded-card border border-slate-200 bg-white p-5 shadow-card">
              <div>
                <p className="text-sm text-ink-muted">Kết quả tốt nhất</p>
                <p className="mt-1 text-sm font-medium text-ink">
                  {best.passed ? "Đã đạt yêu cầu" : "Chưa đạt yêu cầu"}
                </p>
              </div>
              <ScoreBadge score={best.score} threshold={best.passThreshold} large />
            </div>
          )}

          <QuizReview results={results} />
        </div>
      )}
    </div>
  );
}