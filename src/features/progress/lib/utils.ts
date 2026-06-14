import { formatDuration } from "@/core/lib/format";
import type { ProgressSummary } from "../model/types";

// Cac tien ich nho rieng cho module progress.

// Hien thi tong thoi gian hoc tu so giay
export function formatStudyTime(totalSeconds: number): string {
  return formatDuration(Math.round(totalSeconds / 60));
}

// Tinh ty le hoan thanh tong the (so khoa hoan thanh / tong)
export function completionRatio(summary: ProgressSummary): number {
  if (summary.totalCourses === 0) return 0;
  return summary.completedCourses / summary.totalCourses;
}

// Chuyen tong quan thanh cac phan cho bieu do tron (gia tri + nhan + mau)
export function toChartSegments(summary: ProgressSummary) {
  return [
    { label: "Hoàn thành", value: summary.completedCourses },
    { label: "Đang học", value: summary.inProgressCourses },
    { label: "Chưa bắt đầu", value: summary.notStartedCourses },
    { label: "Quá hạn", value: summary.overdueCourses },
  ];
}