import { create } from "zustand";
import type { LessonProgress } from "../model/types";

// Trang thai phong hoc hien tai: bai dang hoc + tien do tung bai (cuc bo).
// Tien do duoc giu o day truoc khi dong bo len backend theo dinh ky.
interface LearningState {
  // Id bai hoc dang xem
  activeLessonId: string | null;
  // Tien do tung bai (theo lessonId), cap nhat lien tuc khi xem
  progress: Record<string, LessonProgress>;
  // Cac bai co thay doi chua dong bo len backend
  dirtyLessonIds: Set<string>;

  setActiveLesson: (lessonId: string | null) => void;
  initProgress: (progress: Record<string, LessonProgress>) => void;
  updateProgress: (lessonId: string, partial: Partial<LessonProgress>) => void;
  markSynced: (lessonId: string) => void;
  reset: () => void;
}

export const useLearningStore = create<LearningState>((set) => ({
  activeLessonId: null,
  progress: {},
  dirtyLessonIds: new Set(),

  setActiveLesson: (lessonId) => set({ activeLessonId: lessonId }),

  // Nap tien do ban dau khi vao phong hoc
  initProgress: (progress) => set({ progress, dirtyLessonIds: new Set() }),

  // Cap nhat tien do mot bai, danh dau la can dong bo
  updateProgress: (lessonId, partial) =>
    set((state) => {
      const current = state.progress[lessonId] ?? {
        lessonId,
        completed: false,
        lastPositionSeconds: 0,
      };
      const nextDirty = new Set(state.dirtyLessonIds);
      nextDirty.add(lessonId);
      return {
        progress: { ...state.progress, [lessonId]: { ...current, ...partial } },
        dirtyLessonIds: nextDirty,
      };
    }),

  // Danh dau mot bai da dong bo xong (bo khoi danh sach can dong bo)
  markSynced: (lessonId) =>
    set((state) => {
      const nextDirty = new Set(state.dirtyLessonIds);
      nextDirty.delete(lessonId);
      return { dirtyLessonIds: nextDirty };
    }),

  reset: () =>
    set({ activeLessonId: null, progress: {}, dirtyLessonIds: new Set() }),
}));