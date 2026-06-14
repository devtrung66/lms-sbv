import { useQuestionBankStore } from "./store";
import type { QuestionBankFilters } from "../model/types";

// Cac action thao tac nhanh tren trang thai ngan hang cau hoi.
export const questionBankActions = {
  // Doi tu khoa tim kiem
  search(keyword: string): void {
    useQuestionBankStore.getState().setFilters({ search: keyword });
  },

  // Loc theo chu de
  filterByTopic(topic: string | undefined): void {
    useQuestionBankStore.getState().setFilters({ topic });
  },

  // Loc theo do kho
  filterByDifficulty(difficulty: QuestionBankFilters["difficulty"]): void {
    useQuestionBankStore.getState().setFilters({ difficulty });
  },

  // Chuyen trang
  goToPage(page: number): void {
    useQuestionBankStore.getState().setFilters({ page });
  },

  // Mo form tao moi
  create(): void {
    useQuestionBankStore.getState().openCreate();
  },

  // Mo form sua
  edit(id: string): void {
    useQuestionBankStore.getState().openEdit(id);
  },

  // Dong form
  closeForm(): void {
    useQuestionBankStore.getState().closeForm();
  },
};