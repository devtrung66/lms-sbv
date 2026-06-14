import { formatDuration } from "@/core/lib/format";
import type { Lesson } from "../model/types";

// Cac tien ich nho rieng cho module courses.

// Hien thi thoi luong khoa hoc tu tong so giay: 9900 -> "2h 45m"
export function formatCourseDuration(totalSeconds: number): string {
  return formatDuration(Math.round(totalSeconds / 60));
}

// Dem so bai hoc theo tung loai
export function countLessonsByType(lessons: Lesson[]): Record<string, number> {
  return lessons.reduce<Record<string, number>>((acc, lesson) => {
    acc[lesson.type] = (acc[lesson.type] ?? 0) + 1;
    return acc;
  }, {});
}

// Doi kich thuoc tep (byte) sang chuoi de doc: 1536000 -> "1.5 MB"
export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}