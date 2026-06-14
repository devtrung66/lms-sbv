import type { EnrolledCourse } from "../model/types";

// Cac tien ich nho rieng cho module learning.

// Tinh phan tram hoan thanh tu so bai da hoc / tong so bai
export function computeProgressPercent(completed: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
}

// Loc cac khoa hoc dang hoc (chua hoan thanh)
export function filterInProgress(courses: EnrolledCourse[]): EnrolledCourse[] {
  return courses.filter((c) => c.status === "in_progress");
}

// Kiem tra hoc vien da du dieu kien lam bai kiem tra cuoi khoa chua
// (phai hoc xong tat ca bai hoc truoc khi kiem tra)
export function canTakeFinalQuiz(course: EnrolledCourse): boolean {
  return (
    course.hasFinalQuiz && course.completedLessons >= course.totalLessons
  );
}