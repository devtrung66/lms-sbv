import { apiClient } from "@/core/api/client";
import { LEARNING_ENDPOINTS } from "./endpoints";

// Cau truc tho khoa hoc cua hoc vien (snake_case)
export interface RawEnrolledCourse {
  id: string;
  course_id: string;
  title: string;
  thumbnail_url?: string;
  status: string;
  progress_percent: number;
  completed_lessons: number;
  total_lessons: number;
  has_final_quiz: boolean;
}

// Cau truc tho tien do mot bai
export interface RawLessonProgress {
  lesson_id: string;
  completed: boolean;
  last_position_seconds: number;
}

// Cau truc tho bai hoc trong phong hoc
export interface RawRoomLesson {
  id: string;
  title: string;
  type: string;
  media_url: string;
  duration_seconds?: number;
  order: number;
}

// Cau truc tho phong hoc
export interface RawCourseRoom {
  course: RawEnrolledCourse;
  lessons: RawRoomLesson[];
  lesson_progress: RawLessonProgress[];
}

// Lay danh sach khoa hoc cua hoc vien hien tai
export function fetchMyCourses(): Promise<RawEnrolledCourse[]> {
  return apiClient.get<RawEnrolledCourse[]>(LEARNING_ENDPOINTS.myCourses);
}

// Lay du lieu phong hoc cua mot khoa
export function fetchCourseRoom(courseId: string): Promise<RawCourseRoom> {
  return apiClient.get<RawCourseRoom>(LEARNING_ENDPOINTS.courseRoom(courseId));
}