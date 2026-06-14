import { create } from "zustand";
import { DEFAULT_PAGE_SIZE } from "@/core/lib/constants";
import type { QuestionBankFilters } from "../model/types";

// Trang thai giao dien ngan hang cau hoi: bo loc + cau hoi dang sua.
interface QuestionBankUiState {
  filters: QuestionBankFilters;
  // Id cau hoi dang sua (null = dang tao moi hoac chua mo form)
  editingId: string | null;
  // Form tao/sua dang mo hay khong
  formOpen: boolean;

  setFilters: (partial: Partial<QuestionBankFilters>) => void;
  openCreate: () => void;
  openEdit: (id: string) => void;
  closeForm: () => void;
}

const defaultFilters: QuestionBankFilters = {
  page: 1,
  pageSize: DEFAULT_PAGE_SIZE,
  search: "",
};

export const useQuestionBankStore = create<QuestionBankUiState>((set) => ({
  filters: defaultFilters,
  editingId: null,
  formOpen: false,

  setFilters: (partial) =>
    set((state) => ({
      filters: { ...state.filters, ...partial, page: partial.page ?? 1 },
    })),
  openCreate: () => set({ editingId: null, formOpen: true }),
  openEdit: (id) => set({ editingId: id, formOpen: true }),
  closeForm: () => set({ formOpen: false, editingId: null }),
}));