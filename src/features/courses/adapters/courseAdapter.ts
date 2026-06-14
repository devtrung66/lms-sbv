import type { Paginated } from "@/core/model/common";
import type { Course, CourseStatus } from "../model/types";
import type { RawCourse, RawCourseList } from "../api/queries";

// Chuyen trang thai khoa hoc dang chuoi sang kieu co kiem soat
function mapStatus(raw: string): CourseStatus {
  const value = raw.toLowerCase();
  if (value === "published") return "published";
  if (value === "archived") return "archived";
  return "draft";
}

// Mapping mot khoa hoc: raw (snake_case) -> model (camelCase)
export function toCourse(raw: RawCourse): Course {
  return {
    id: raw.id,
    title: raw.title,
    description: raw.description,
    thumbnailUrl: raw.thumbnail_url,
    status: mapStatus(raw.status),
    lessonCount: raw.lesson_count,
    totalDurationSeconds: raw.total_duration_seconds,
    hasFinalQuiz: raw.has_final_quiz,
    createdAt: raw.created_at,
  };
}

// Mapping danh sach khoa hoc phan trang
export function toCourseList(raw: RawCourseList): Paginated<Course> {
  return {
    items: raw.items.map(toCourse),
    total: raw.total,
    page: raw.page,
    pageSize: raw.page_size,
  };
}