import { useQuizStore } from "./store";
import type { UserAnswer } from "../model/types";

// Lay cau tra loi cua mot cau hoi cu the
export function useAnswer(questionId: string): UserAnswer | undefined {
  return useQuizStore((state) => state.answers[questionId]);
}

// Lay chi so cau hoi dang hien thi
export function useCurrentIndex(): number {
  return useQuizStore((state) => state.currentIndex);
}

// Dem so cau da tra loi
export function useAnsweredCount(): number {
  return useQuizStore(
    (state) =>
      Object.values(state.answers).filter((a) => a.selectedOptionIds.length > 0).length
  );
}

// Lay ket qua sau khi nop (null neu chua nop)
export function useQuizResult() {
  return useQuizStore((state) => state.result);
}