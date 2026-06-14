import type { EnrollmentStatus } from "@/features/learning/model/types";
import type {
  ProgressRow,
  ProgressSummary,
  ProgressTrendPoint,
} from "../model/types";
import type {
  RawProgressRow,
  RawProgressSummary,
  RawTrendPoint,
} from "../api/queries";

// Chuyen trang thai dang chuoi sang kieu co kiem soat
function mapStatus(raw: string): EnrollmentStatus {
  const value = raw.toLowerCase();
  if (value === "completed") return "completed";
  if (value === "in_progress") return "in_progress";
  return "not_started";
}

// Mapping mot dong tien do
export function toProgressRow(raw: RawProgressRow): ProgressRow {
  return {
    courseId: raw.course_id,
    courseTitle: raw.course_title,
    status: mapStatus(raw.status),
    progressPercent: raw.progress_percent,
    completedLessons: raw.completed_lessons,
    totalLessons: raw.total_lessons,
    studyTimeSeconds: raw.study_time_seconds,
    finalScore: raw.final_score,
    lastAccessedAt: raw.last_accessed_at,
  };
}

// Mapping tong quan tien do
export function toProgressSummary(raw: RawProgressSummary): ProgressSummary {
  return {
    totalCourses: raw.total_courses,
    completedCourses: raw.completed_courses,
    inProgressCourses: raw.in_progress_courses,
    notStartedCourses: raw.not_started_courses,
    overdueCourses: raw.overdue_courses,
    averageProgress: raw.average_progress,
    totalStudyTimeSeconds: raw.total_study_time_seconds,
  };
}

// Mapping mot diem tren bieu do
export function toTrendPoint(raw: RawTrendPoint): ProgressTrendPoint {
  return {
    month: raw.month,
    averageScore: raw.average_score,
  };
}