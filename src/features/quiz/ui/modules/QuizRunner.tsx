import type { ReactElement } from "react";
import { ChevronLeft, ChevronRight, Send } from "lucide-react";
import { cn } from "@/core/lib/utils";
import { useQuizAttempt } from "../../hooks/useQuizAttempt";
import { quizActions } from "../../state/actions";
import { useCurrentIndex, useAnsweredCount } from "../../state/selectors";
import { useQuizStore } from "../../state/store";
import { attemptProgress } from "../../lib/utils";
import type { Quiz } from "../../model/types";
import { QuestionCard } from "../components/QuestionCard";
import { Timer } from "../components/Timer";

interface QuizRunnerProps {
  quiz: Quiz;
}

// Khu vuc lam bai: dong ho + cau hoi hien tai + dieu huong + nut nop.
export function QuizRunner({ quiz }: QuizRunnerProps): ReactElement {
  const currentIndex = useCurrentIndex();
  const answeredCount = useAnsweredCount();
  const answers = useQuizStore((state) => state.answers);
  const { remaining, submit, isSubmitting } = useQuizAttempt(quiz);

  const total = quiz.questions.length;
  const currentQuestion = quiz.questions[currentIndex];
  const isLast = currentIndex === total - 1;
  const progress = attemptProgress(answeredCount, total);

  return (
    <div className="space-y-5">
      {/* Thanh tren: tien do + dong ho */}
      <div className="flex items-center justify-between gap-4 rounded-card border border-slate-200 bg-white p-4 shadow-card">
        <div className="flex-1">
          <p className="text-sm text-ink-muted">
            Đã trả lời {answeredCount}/{total} câu ({progress}%)
          </p>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100">
            <div className="h-full bg-brand-500 transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <Timer remaining={remaining} />
      </div>

      {/* Cau hoi hien tai */}
      {currentQuestion && <QuestionCard question={currentQuestion} number={currentIndex + 1} />}

      {/* Luoi so cau hoi de nhay nhanh */}
      <div className="flex flex-wrap gap-2">
        {quiz.questions.map((q, index) => {
          const answered = (answers[q.id]?.selectedOptionIds.length ?? 0) > 0;
          return (
            <button
              key={q.id}
              type="button"
              onClick={() => quizActions.goTo(index)}
              className={cn(
                "h-9 w-9 rounded-lg text-sm font-medium transition-colors",
                index === currentIndex
                  ? "bg-brand-500 text-white"
                  : answered
                    ? "bg-brand-100 text-brand-700"
                    : "bg-slate-100 text-ink-muted hover:bg-slate-200"
              )}
            >
              {index + 1}
            </button>
          );
        })}
      </div>

      {/* Dieu huong + nop bai */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={quizActions.previous}
          disabled={currentIndex === 0}
          className="flex items-center gap-1 rounded-lg border border-slate-200 px-4 py-2 text-sm text-ink hover:bg-slate-50 disabled:opacity-50"
        >
          <ChevronLeft size={16} /> Câu trước
        </button>

        {isLast ? (
          <button
            type="button"
            onClick={submit}
            disabled={isSubmitting}
            className="flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-2 text-sm font-semibold text-white hover:bg-brand-600 disabled:opacity-60"
          >
            <Send size={16} /> {isSubmitting ? "Đang nộp..." : "Nộp bài"}
          </button>
        ) : (
          <button
            type="button"
            onClick={quizActions.next}
            className="flex items-center gap-1 rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600"
          >
            Câu tiếp <ChevronRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
}