import { useLearningStore } from "./store";
import type { LessonProgress } from "../model/types";

// Lay id bai hoc dang xem
export function useActiveLessonId(): string | null {
  return useLearningStore((state) => state.activeLessonId);
}

// Lay tien do cua mot bai cu the
export function useLessonProgress(lessonId: string): LessonProgress | undefined {
  return useLearningStore((state) => state.progress[lessonId]);
}

// Dem so bai da hoan thanh
export function useCompletedCount(): number {
  return useLearningStore(
    (state) => Object.values(state.progress).filter((p) => p.completed).length
  );
}

// Kiem tra co tien do nao chua dong bo hay khong
export function useHasUnsyncedProgress(): boolean {
  return useLearningStore((state) => state.dirtyLessonIds.size > 0);
}