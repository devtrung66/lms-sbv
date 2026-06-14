import { useEffect, type ReactElement } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PageHeader } from "@/core/ui/layout/PageHeader";
import { ROUTES } from "@/app/router/routes";
import { useQuiz } from "../../hooks/useQuiz";
import { quizActions } from "../../state/actions";
import { useQuizResult } from "../../state/selectors";
import { QuizRunner } from "../modules/QuizRunner";
import { ResultSummary } from "../modules/ResultSummary";

// Trang lam bai kiem tra. Sau khi nop, hien thi ket qua ngay tren cung trang.
export function QuizTakePage(): ReactElement {
  const { quizId } = useParams<{ quizId: string }>();
  const navigate = useNavigate();
  const { quiz, isLoading } = useQuiz(quizId ?? null);
  const result = useQuizResult();

  // Bat dau lan lam khi de bai san sang
  useEffect(() => {
    if (quiz) quizActions.start(quiz.id);
  }, [quiz]);

  if (isLoading || !quiz) {
    return <div className="py-10 text-center text-sm text-ink-muted">Đang tải bài kiểm tra...</div>;
  }

  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        title={quiz.title}
        breadcrumb={[
          { label: "Trang chủ", to: ROUTES.home },
          { label: "Kết quả kiểm tra", to: ROUTES.quizResult },
          { label: quiz.title },
        ]}
      />

      {/* Chua nop thi lam bai, nop roi thi xem ket qua */}
      {result ? (
        <div className="space-y-5">
          <ResultSummary result={result} />
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => navigate(ROUTES.quizResult)}
              className="rounded-lg bg-brand-500 px-5 py-2 text-sm font-medium text-white hover:bg-brand-600"
            >
              Xem tất cả kết quả
            </button>
          </div>
        </div>
      ) : (
        <QuizRunner quiz={quiz} />
      )}
    </div>
  );
}