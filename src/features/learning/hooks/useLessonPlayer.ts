import { useCallback } from "react";
import { playbackService } from "../services/playbackService";
import { learningActions } from "../state/actions";
import { useLessonProgress } from "../state/selectors";
import type { Lesson } from "@/features/courses";

// Hook quan ly viec phat lai mot bai hoc video.
// Tu cap nhat vi tri xem va danh dau hoan thanh khi xem du nguong.
export function useLessonPlayer(lesson: Lesson) {
  const progress = useLessonProgress(lesson.id);

  // Goi khi thoi gian phat thay doi (su kien timeupdate cua video)
  const handleTimeUpdate = useCallback(
    (currentSeconds: number, durationSeconds: number): void => {
      learningActions.updatePosition(lesson.id, currentSeconds);

      // Tu danh dau hoan thanh khi xem >= nguong va chua duoc danh dau
      if (
        !progress?.completed &&
        playbackService.isVideoCompleted(currentSeconds, durationSeconds)
      ) {
        learningActions.markComplete(lesson.id);
      }
    },
    [lesson.id, progress?.completed]
  );

  // Danh dau hoan thanh thu cong (cho bai slide/tai lieu)
  const markComplete = useCallback((): void => {
    learningActions.markComplete(lesson.id);
  }, [lesson.id]);

  return {
    // Vi tri tiep tuc xem (giay)
    resumePosition: progress?.lastPositionSeconds ?? 0,
    completed: progress?.completed ?? false,
    canMarkComplete: playbackService.canMarkComplete(lesson, progress),
    handleTimeUpdate,
    markComplete,
  };
}