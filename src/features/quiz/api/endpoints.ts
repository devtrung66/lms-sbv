import { buildPath } from "@/app/router/routes";

// Dinh nghia duong dan API cua module quiz.
export const QUIZ_ENDPOINTS = {
  // Lay de bai kiem tra cua mot khoa (khong kem dap an dung)
  getQuiz: (quizId: string) => buildPath("/quizzes/:quizId", { quizId }),
  // Nop bai lam, backend cham diem
  submit: (quizId: string) => buildPath("/quizzes/:quizId/submit", { quizId }),
  // Lay ket qua cac lan lam cua hoc vien
  results: (quizId: string) => buildPath("/quizzes/:quizId/results", { quizId }),
} as const;