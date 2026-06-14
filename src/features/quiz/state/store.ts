import { create } from "zustand";
import type { UserAnswer, QuizResult } from "../model/types";

// Trang thai lam bai kiem tra hien tai.
// Giu bai lam trong bo nho de khong mat khi chuyen cau hoi.
interface QuizState {
  // Id bai kiem tra dang lam
  activeQuizId: string | null;
  // Thoi diem bat dau lam (ISO string)
  startedAt: string | null;
  // Cau tra loi theo questionId
  answers: Record<string, UserAnswer>;
  // Chi so cau hoi dang hien thi
  currentIndex: number;
  // Ket qua sau khi nop (null neu chua nop)
  result: QuizResult | null;

  startAttempt: (quizId: string) => void;
  setAnswer: (answer: UserAnswer) => void;
  goToQuestion: (index: number) => void;
  setResult: (result: QuizResult) => void;
  reset: () => void;
}

export const useQuizStore = create<QuizState>((set) => ({
  activeQuizId: null,
  startedAt: null,
  answers: {},
  currentIndex: 0,
  result: null,

  // Bat dau lam bai: ghi lai thoi diem bat dau, xoa bai lam cu
  startAttempt: (quizId) =>
    set({
      activeQuizId: quizId,
      startedAt: new Date().toISOString(),
      answers: {},
      currentIndex: 0,
      result: null,
    }),

  // Luu cau tra loi cho mot cau hoi
  setAnswer: (answer) =>
    set((state) => ({
      answers: { ...state.answers, [answer.questionId]: answer },
    })),

  // Chuyen den cau hoi theo chi so
  goToQuestion: (index) => set({ currentIndex: index }),

  // Luu ket qua sau khi nop
  setResult: (result) => set({ result }),

  reset: () =>
    set({
      activeQuizId: null,
      startedAt: null,
      answers: {},
      currentIndex: 0,
      result: null,
    }),
}));