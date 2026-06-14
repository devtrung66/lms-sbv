import { buildPath } from "@/app/router/routes";

// Dinh nghia duong dan API cua module learning.
export const LEARNING_ENDPOINTS = {
  // Danh sach khoa hoc cua hoc vien hien tai
  myCourses: "/learning/my-courses",
  // Du lieu phong hoc (khoa + bai + tien do)
  courseRoom: (courseId: string) =>
    buildPath("/learning/courses/:courseId/room", { courseId }),
  // Dong bo tien do hoc mot bai
  updateProgress: (courseId: string) =>
    buildPath("/learning/courses/:courseId/progress", { courseId }),
} as const;