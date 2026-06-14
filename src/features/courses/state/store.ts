import { create } from "zustand";
import { DEFAULT_PAGE_SIZE } from "@/core/lib/constants";
import type { CourseFilters, UploadProgress } from "../model/types";

// Trang thai giao dien cua trang quan ly khoa hoc:
// bo loc + khoa dang chon + tien do tai len cac tep.
interface CourseUiState {
  filters: CourseFilters;
  selectedCourseId: string | null;
  // Tien do tai len theo ten tep
  uploads: UploadProgress[];

  setFilters: (partial: Partial<CourseFilters>) => void;
  selectCourse: (id: string | null) => void;
  setUploadProgress: (progress: UploadProgress) => void;
  clearUploads: () => void;
}

const defaultFilters: CourseFilters = {
  page: 1,
  pageSize: DEFAULT_PAGE_SIZE,
  search: "",
};

export const useCourseStore = create<CourseUiState>((set) => ({
  filters: defaultFilters,
  selectedCourseId: null,
  uploads: [],

  setFilters: (partial) =>
    set((state) => ({
      filters: { ...state.filters, ...partial, page: partial.page ?? 1 },
    })),
  selectCourse: (id) => set({ selectedCourseId: id }),

  // Cap nhat tien do mot tep: thay the neu da co, them moi neu chua
  setUploadProgress: (progress) =>
    set((state) => {
      const existing = state.uploads.findIndex(
        (u) => u.fileName === progress.fileName
      );
      if (existing >= 0) {
        const next = [...state.uploads];
        next[existing] = progress;
        return { uploads: next };
      }
      return { uploads: [...state.uploads, progress] };
    }),
  clearUploads: () => set({ uploads: [] }),
}));