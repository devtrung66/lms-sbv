import { fetchQuiz, fetchQuizResults } from "../api/queries";
import { submitQuiz } from "../api/mutations";
import { toQuiz } from "../adapters/quizAdapter";
import { toQuizResult, toQuizResultList } from "../adapters/resultAdapter";
import { quizSubmissionSchema, type QuizSubmission } from "../model/schemas";
import type { Quiz, QuizResult } from "../model/types";

// Tang dich vu nghiep vu bai kiem tra: lay de, nop bai, lay ket qua.
export const quizService = {
  // Lay de bai kiem tra (khong kem dap an dung)
  async getQuiz(quizId: string): Promise<Quiz> {
    const raw = await fetchQuiz(quizId);
    return toQuiz(raw);
  },

  // Nop bai lam; backend cham diem va tra ve ket qua chinh thuc
  async submit(submission: QuizSubmission): Promise<QuizResult> {
    const parsed = quizSubmissionSchema.parse(submission);
    const raw = await submitQuiz(parsed);
    return toQuizResult(raw);
  },

  // Lay danh sach ket qua cac lan lam (moi nhat truoc)
  async getResults(quizId: string): Promise<QuizResult[]> {
    const raws = await fetchQuizResults(quizId);
    return toQuizResultList(raws);
  },
};