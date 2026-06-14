import { apiClient } from "@/core/api/client";
import { LEARNING_ENDPOINTS } from "./endpoints";
import type { ProgressUpdate } from "../model/schemas";

// Dong bo tien do hoc mot bai len backend.
export function syncLessonProgress(
  courseId: string,
  update: ProgressUpdate
): Promise<void> {
  return apiClient.post<void>(LEARNING_ENDPOINTS.updateProgress(courseId), {
    lesson_id: update.lessonId,
    completed: update.completed,
    last_position_seconds: update.lastPositionSeconds,
  });
}