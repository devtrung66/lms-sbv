import { useLearningStore } from "./store";
import type { LessonProgress } from "../model/types";

// Cac action thao tac nhanh tren trang thai phong hoc.
export const learningActions = {
  // Chon bai hoc de xem
  selectLesson(lessonId: string): void {
    useLearningStore.getState().setActiveLesson(lessonId);
  },

  // Cap nhat vi tri xem hien tai cua mot video
  updatePosition(lessonId: string, seconds: number): void {
    useLearningStore.getState().updateProgress(lessonId, {
      lastPositionSeconds: Math.floor(seconds),
    });
  },

  // Danh dau mot bai da hoan thanh
  markComplete(lessonId: string): void {
    useLearningStore.getState().updateProgress(lessonId, { completed: true });
  },

  // Nap tien do ban dau khi vao phong hoc
  loadProgress(progress: Record<string, LessonProgress>): void {
    useLearningStore.getState().initProgress(progress);
  },
};