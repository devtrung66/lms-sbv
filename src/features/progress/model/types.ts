import type { EnrollmentStatus } from "@/features/learning/model/types";

// Mot dong tien do hoc tap cua hoc vien tren mot khoa
export interface ProgressRow {
  courseId: string;
  courseTitle: string;
  status: EnrollmentStatus;
  // Phan tram hoan thanh (0-100)
  progressPercent: number;
  completedLessons: number;
  totalLessons: number;
  // Thoi gian hoc tich luy (giay)
  studyTimeSeconds: number;
  // Diem bai kiem tra cuoi khoa (neu da lam), thang 100
  finalScore?: number;
  // Lan hoc gan nhat (ISO string)
  lastAccessedAt?: string;
}

// Tong quan tien do hoc tap cua hoc vien
export interface ProgressSummary {
  totalCourses: number;
  completedCourses: number;
  inProgressCourses: number;
  notStartedCourses: number;
  overdueCourses: number;
  // Phan tram hoan thanh trung binh
  averageProgress: number;
  // Tong thoi gian hoc (giay)
  totalStudyTimeSeconds: number;
}

// Mot diem du lieu tren bieu do ket qua hoc tap theo thang
export interface ProgressTrendPoint {
  // Nhan thang, vd "01/2025"
  month: string;
  // Diem trung binh thang do
  averageScore: number;
}