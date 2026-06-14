import { useEffect, useRef } from "react";
import { learningService } from "../services/learningService";
import { useLearningStore } from "../state/store";
import { PROGRESS_SYNC_INTERVAL } from "../model/constants";

// Hook dong bo tien do hoc len backend theo dinh ky va khi roi trang.
// Chi gui nhung bai co thay doi (dirty) de tiet kiem bang thong.
export function useProgressSync(courseId: string) {
  const intervalRef = useRef<number | null>(null);

  // Gui toan bo tien do dang cho dong bo len backend
  async function flush(): Promise<void> {
    const state = useLearningStore.getState();
    const dirtyIds = Array.from(state.dirtyLessonIds);

    for (const lessonId of dirtyIds) {
      const progress = state.progress[lessonId];
      if (!progress) continue;
      try {
        await learningService.syncProgress(courseId, {
          lessonId: progress.lessonId,
          completed: progress.completed,
          lastPositionSeconds: progress.lastPositionSeconds,
        });
        state.markSynced(lessonId);
      } catch {
        // Giu lai trong danh sach dirty de thu lai lan sau
      }
    }
  }

  useEffect(() => {
    // Dong bo dinh ky
    intervalRef.current = window.setInterval(() => {
      void flush();
    }, PROGRESS_SYNC_INTERVAL);

    // Dong bo lan cuoi khi roi trang
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      void flush();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId]);

  return { flush };
}