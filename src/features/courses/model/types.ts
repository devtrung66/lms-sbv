import type { PaginationParams } from "@/core/model/common";

// Trang thai khoa hoc
export type CourseStatus = "draft" | "published" | "archived";

// Loai bai hoc trong khoa
export type LessonType = "video" | "slide" | "document";

// Mot bai hoc thuoc khoa hoc
export interface Lesson {
  id: string;
  title: string;
  type: LessonType;
  // Duong dan media tren CDN (video/slide/tai lieu)
  mediaUrl: string;
  // Thoi luong video tinh bang giay (neu la video)
  durationSeconds?: number;
  // Thu tu hien thi trong khoa
  order: number;
}

// Khoa hoc
export interface Course {
  id: string;
  title: string;
  description: string;
  // Anh bia tren CDN
  thumbnailUrl?: string;
  status: CourseStatus;
  // Tong so bai hoc
  lessonCount: number;
  // Tong thoi luong khoa hoc (giay)
  totalDurationSeconds: number;
  // Co bai kiem tra cuoi khoa hay khong
  hasFinalQuiz: boolean;
  createdAt: string;
}

// Bo loc danh sach khoa hoc
export interface CourseFilters extends PaginationParams {
  status?: CourseStatus;
}

// Du lieu tao/sua khoa hoc
export interface CourseFormValues {
  title: string;
  description: string;
  hasFinalQuiz: boolean;
}

// Tien trinh tai len mot tep media
export interface UploadProgress {
  // Ten tep dang tai
  fileName: string;
  // Phan tram da tai (0-100)
  percent: number;
  // Trang thai tai
  status: "pending" | "uploading" | "done" | "error";
}