import { useCourseStore } from "./store";
import type { CourseFilters, UploadProgress } from "../model/types";

// Lay bo loc hien tai
export function useCourseFilters(): CourseFilters {
  return useCourseStore((state) => state.filters);
}

// Lay id khoa hoc dang chon
export function useSelectedCourseId(): string | null {
  return useCourseStore((state) => state.selectedCourseId);
}

// Lay danh sach tien do tai len
export function useUploads(): UploadProgress[] {
  return useCourseStore((state) => state.uploads);
}

// Kiem tra co tep nao dang tai len hay khong
export function useIsUploading(): boolean {
  return useCourseStore((state) =>
    state.uploads.some((u) => u.status === "uploading" || u.status === "pending")
  );
}