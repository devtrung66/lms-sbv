import { apiClient } from "@/core/api/client";
import { COURSE_ENDPOINTS } from "./endpoints";
import type { CourseFilters } from "../model/types";

// Cau truc tho bai hoc tra ve tu backend (snake_case)
export interface RawLesson {
  id: string;
  title: string;
  type: string;
  media_url: string;
  duration_seconds?: number;
  order: number;
}

// Cau truc tho khoa hoc
export interface RawCourse {
  id: string;
  title: string;
  description: string;
  thumbnail_url?: string;
  status: string;
  lesson_count: number;
  total_duration_seconds: number;
  has_final_quiz: boolean;
  created_at: string;
}

// Cau truc tho danh sach phan trang
export interface RawCourseList {
  items: RawCourse[];
  total: number;
  page: number;
  page_size: number;
}

// Chuyen bo loc thanh chuoi tham so truy van
function buildQueryString(filters: CourseFilters): string {
  const params = new URLSearchParams();
  params.set("page", String(filters.page));
  params.set("page_size", String(filters.pageSize));
  if (filters.search) params.set("search", filters.search);
  if (filters.status) params.set("status", filters.status);
  return params.toString();
}

// Lay danh sach khoa hoc theo bo loc
export function fetchCourseList(filters: CourseFilters): Promise<RawCourseList> {
  return apiClient.get<RawCourseList>(`${COURSE_ENDPOINTS.list}?${buildQueryString(filters)}`);
}

// Lay chi tiet khoa hoc
export function fetchCourseDetail(id: string): Promise<RawCourse> {
  return apiClient.get<RawCourse>(COURSE_ENDPOINTS.detail(id));
}

// Lay danh sach bai hoc cua khoa
export function fetchLessons(courseId: string): Promise<RawLesson[]> {
  return apiClient.get<RawLesson[]>(COURSE_ENDPOINTS.lessons(courseId));
}