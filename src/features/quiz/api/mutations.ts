import { apiClient } from "@/core/api/client";
import { QUIZ_ENDPOINTS } from "./endpoints";
import type { RawQuizResult } from "./queries";
import type { QuizSubmission } from "../model/schemas";

// Nop bai lam len backend de cham diem.
// Backend la noi cham diem chinh thuc (co dap an dung), tra ve ket qua.
export function submitQuiz(submission: QuizSubmission): Promise<RawQuizResult> {
  return apiClient.post<RawQuizResult>(QUIZ_ENDPOINTS.submit(submission.quizId), {
    answers: submission.answers.map((a) => ({
      question_id: a.questionId,
      selected_option_ids: a.selectedOptionIds,
    })),
    started_at: submission.startedAt,
  });
}