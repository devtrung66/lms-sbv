import { fetchQuestionList, fetchTopics } from "../api/queries";
import {
  createQuestion,
  updateQuestion,
  deleteQuestion,
} from "../api/mutations";
import { toBankQuestion, toQuestionList } from "../adapters/questionAdapter";
import type { Paginated } from "@/core/model/common";
import type {
  BankQuestion,
  QuestionBankFilters,
  QuestionFormValues,
} from "../model/types";

// Tang dich vu nghiep vu ngan hang cau hoi: ket noi API + adapter.
export const questionService = {
  // Lay danh sach cau hoi theo bo loc
  async getList(filters: QuestionBankFilters): Promise<Paginated<BankQuestion>> {
    const raw = await fetchQuestionList(filters);
    return toQuestionList(raw);
  },

  // Lay danh sach chu de
  getTopics(): Promise<string[]> {
    return fetchTopics();
  },

  // Tao moi cau hoi
  async create(values: QuestionFormValues): Promise<BankQuestion> {
    const raw = await createQuestion(values);
    return toBankQuestion(raw);
  },

  // Cap nhat cau hoi
  async update(id: string, values: QuestionFormValues): Promise<BankQuestion> {
    const raw = await updateQuestion(id, values);
    return toBankQuestion(raw);
  },

  // Xoa cau hoi
  remove(id: string): Promise<void> {
    return deleteQuestion(id);
  },
};