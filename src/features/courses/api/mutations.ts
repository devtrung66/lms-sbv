import { apiClient } from "@/core/api/client";
import { COURSE_ENDPOINTS } from "./endpoints";
import type { RawCourse, RawLesson } from "./queries";
import type { CourseFormValues, LessonType } from "../model/types";

// Chuyen du lieu form khoa hoc sang body backend (snake_case)
function toCourseBody(values: CourseFormValues): Record<string, unknown> {
  return {
    title: values.title,
    description: values.description,
    has_final_quiz: values.hasFinalQuiz,
  };
}

// Tao moi khoa hoc
export function createCourse(values: CourseFormValues): Promise<RawCourse> {
  return apiClient.post<RawCourse>(COURSE_ENDPOINTS.create, toCourseBody(values));
}

// Cap nhat khoa hoc
export function updateCourse(id: string, values: CourseFormValues): Promise<RawCourse> {
  return apiClient.put<RawCourse>(COURSE_ENDPOINTS.update(id), toCourseBody(values));
}

// Xoa khoa hoc
export function deleteCourse(id: string): Promise<void> {
  return apiClient.delete<void>(COURSE_ENDPOINTS.delete(id));
}

// Xuat ban khoa hoc (chuyen tu nhap sang da xuat ban)
export function publishCourse(id: string): Promise<RawCourse> {
  return apiClient.post<RawCourse>(COURSE_ENDPOINTS.publish(id));
}

// Tai tep media (video/slide) len cho mot khoa hoc.
// Gui FormData de client tu xu ly Content-Type kem boundary.
export function uploadMedia(
  courseId: string,
  file: File,
  type: LessonType,
  title: string
): Promise<RawLesson> {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("type", type);
  formData.append("title", title);
  return apiClient.post<RawLesson>(COURSE_ENDPOINTS.uploadMedia(courseId), formData);
}