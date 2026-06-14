import { useQuizStore } from "./store";
import type { UserAnswer } from "../model/types";

// Cac action thao tac nhanh tren trang thai lam bai.
export const quizActions = {
  // Bat dau lam bai kiem tra
  start(quizId: string): void {
    useQuizStore.getState().startAttempt(quizId);
  },

  // Chon dap an cho mot cau hoi (ghi de lua chon cu)
  answer(questionId: string, selectedOptionIds: string[]): void {
    useQuizStore.getState().setAnswer({ questionId, selectedOptionIds });
  },

  // Chuyen cau hoi
  goTo(index: number): void {
    useQuizStore.getState().goToQuestion(index);
  },

  // Sang cau ke tiep
  next(): void {
    const state = useQuizStore.getState();
    state.goToQuestion(state.currentIndex + 1);
  },

  // Ve cau truoc
  previous(): void {
    const state = useQuizStore.getState();
    state.goToQuestion(Math.max(0, state.currentIndex - 1));
  },
};