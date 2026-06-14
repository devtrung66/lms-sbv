import { create } from "zustand";
import type { ReportFilters } from "../model/types";

// Trang thai giao dien trang bao cao: bo loc hien tai.
interface ReportUiState {
  filters: ReportFilters;
  setFilters: (partial: Partial<ReportFilters>) => void;
}

// Bo loc mac dinh: bao cao hoan thanh khoa hoc, 6 thang gan day
const defaultFilters: ReportFilters = {
  type: "course_completion",
  months: 6,
};

export const useReportStore = create<ReportUiState>((set) => ({
  filters: defaultFilters,
  setFilters: (partial) =>
    set((state) => ({ filters: { ...state.filters, ...partial } })),
}));