import { buildPath } from "@/app/router/routes";

// Dinh nghia duong dan API cua module courses.
export const COURSE_ENDPOINTS = {
  list: "/courses",
  detail: (id: string) => buildPath("/courses/:id", { id }),
  create: "/courses",
  update: (id: string) => buildPath("/courses/:id", { id }),
  delete: (id: string) => buildPath("/courses/:id", { id }),
  publish: (id: string) => buildPath("/courses/:id/publish", { id }),
  // Bai hoc trong khoa
  lessons: (courseId: string) => buildPath("/courses/:courseId/lessons", { courseId }),
  lessonDetail: (courseId: string, lessonId: string) =>
    buildPath("/courses/:courseId/lessons/:lessonId", { courseId, lessonId }),
  // Tai media (video/slide) cho bai hoc
  uploadMedia: (courseId: string) =>
    buildPath("/courses/:courseId/media", { courseId }),
} as const;