import { VIDEO_COMPLETE_THRESHOLD } from "../model/constants";
import type { Lesson } from "@/features/courses";
import type { LessonProgress } from "../model/types";

// Tang dich vu xu ly logic phat lai (playback) cho bai hoc.
// Tach rieng phan tinh toan khoi UI de de kiem thu.
export const playbackService = {
  // Tinh xem mot bai video da du dieu kien coi nhu hoan thanh chua,
  // dua tren vi tri xem hien tai so voi tong thoi luong.
  isVideoCompleted(currentSeconds: number, durationSeconds: number): boolean {
    if (durationSeconds <= 0) return false;
    return currentSeconds / durationSeconds >= VIDEO_COMPLETE_THRESHOLD;
  },

  // Tinh phan tram da xem cua mot video (0-100)
  watchedPercent(currentSeconds: number, durationSeconds: number): number {
    if (durationSeconds <= 0) return 0;
    return Math.min(100, Math.round((currentSeconds / durationSeconds) * 100));
  },

  // Voi bai khong phai video (slide/tai lieu): coi nhu xong khi nguoi dung
  // chu dong danh dau hoan thanh.
  canMarkComplete(lesson: Lesson, currentProgress?: LessonProgress): boolean {
    if (currentProgress?.completed) return false;
    return lesson.type !== "video";
  },

  // Tim bai hoc tiep theo can hoc (bai chua hoan thanh dau tien)
  findNextLesson(
    lessons: Lesson[],
    progress: Record<string, LessonProgress>
  ): Lesson | null {
    return lessons.find((lesson) => !progress[lesson.id]?.completed) ?? null;
  },
};