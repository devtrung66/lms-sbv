import { useCourseStore } from "./store";
import type { CourseFilters } from "../model/types";

// Cac action thao tac nhanh tren trang thai giao dien khoa hoc.
export const courseActions = {
  // Doi tu khoa tim kiem
  search(keyword: string): void {
    useCourseStore.getState().setFilters({ search: keyword });
  },

  // Loc theo trang thai khoa hoc
  filterByStatus(status: CourseFilters["status"]): void {
    useCourseStore.getState().setFilters({ status });
  },

  // Chuyen trang
  goToPage(page: number): void {
    useCourseStore.getState().setFilters({ page });
  },

  // Chon khoa hoc
  selectCourse(id: string | null): void {
    useCourseStore.getState().selectCourse(id);
  },
};