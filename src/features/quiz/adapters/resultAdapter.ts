import type { QuizResult } from "../model/types";
import type { RawQuizResult } from "../api/queries";

// Mapping ket qua mot lan lam: raw (snake_case) -> model (camelCase)
export function toQuizResult(raw: RawQuizResult): QuizResult {
  return {
    attemptId: raw.attempt_id,
    quizId: raw.quiz_id,
    score: raw.score,
    correctCount: raw.correct_count,
    totalQuestions: raw.total_questions,
    passed: raw.passed,
    passThreshold: raw.pass_threshold,
    attemptNumber: raw.attempt_number,
    submittedAt: raw.submitted_at,
  };
}

// Mapping danh sach ket qua, sap xep lan moi nhat len dau
export function toQuizResultList(raws: RawQuizResult[]): QuizResult[] {
  return raws
    .map(toQuizResult)
    .sort((a, b) => b.attemptNumber - a.attemptNumber);
}