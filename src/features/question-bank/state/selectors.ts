import { useQuestionBankStore } from "./store";
import type { QuestionBankFilters } from "../model/types";

// Lay bo loc hien tai
export function useQuestionFilters(): QuestionBankFilters {
  return useQuestionBankStore((state) => state.filters);
}

// Form dang mo hay khong
export function useFormOpen(): boolean {
  return useQuestionBankStore((state) => state.formOpen);
}

// Id cau hoi dang sua (null neu tao moi)
export function useEditingId(): string | null {
  return useQuestionBankStore((state) => state.editingId);
}