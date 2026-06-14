import type { Lesson } from "@/features/courses";

// Trang thai hoc cua mot khoa doi voi hoc vien
export type EnrollmentStatus = "not_started" | "in_progress" | "completed";

// Khoa hoc cua hoc vien (kem tien do ca nhan)
export interface EnrolledCourse {
  id: string;
  courseId: string;
  title: string;
  thumbnailUrl?: string;
  status: EnrollmentStatus;
  // Phan tram hoan thanh (0-100)
  progressPercent: number;
  // So bai da hoc xong / tong so bai
  completedLessons: number;
  totalLessons: number;
  // Co bai kiem tra cuoi khoa hay khong
  hasFinalQuiz: boolean;
}

// Tien do hoc mot bai cu the
export interface LessonProgress {
  lessonId: string;
  // Da hoc xong bai nay chua
  completed: boolean;
  // Vi tri xem cuoi cung trong video (giay), de tiep tuc dung cho
  lastPositionSeconds: number;
}

// Du lieu phong hoc: khoa + bai hoc + tien do tung bai
export interface CourseRoom {
  course: EnrolledCourse;
  lessons: Lesson[];
  lessonProgress: Record<string, LessonProgress>;
}