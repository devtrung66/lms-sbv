import { apiClient } from "@/core/api/client";
import { QUESTION_BANK_ENDPOINTS } from "./endpoints";
import type { QuestionBankFilters } from "../model/types";

// Cau truc tho mot lua chon dap an (phia admin - co isCorrect)
export interface RawBankOption {
  id: string;
  content: string;
  is_correct: boolean;
}

// Cau truc tho mot cau hoi trong ngan hang
export interface RawBankQuestion {
  id: string;
  content: string;
  type: string;
  options: RawBankOption[];
  points: number;
  topic: string;
  difficulty: string;
  created_at: string;
}

// Cau truc tho danh sach phan trang
export interface RawQuestionList {
  items: RawBankQuestion[];
  total: number;
  page: number;
  page_size: number;
}

// Chuyen bo loc thanh chuoi tham so truy van
function buildQueryString(filters: QuestionBankFilters): string {
  const params = new URLSearchParams();
  params.set("page", String(filters.page));
  params.set("page_size", String(filters.pageSize));
  if (filters.search) params.set("search", filters.search);
  if (filters.topic) params.set("topic", filters.topic);
  if (filters.type) params.set("type", filters.type);
  if (filters.difficulty) params.set("difficulty", filters.difficulty);
  return params.toString();
}

// Lay danh sach cau hoi theo bo loc
export function fetchQuestionList(filters: QuestionBankFilters): Promise<RawQuestionList> {
  return apiClient.get<RawQuestionList>(
    `${QUESTION_BANK_ENDPOINTS.list}?${buildQueryString(filters)}`
  );
}

// Lay danh sach chu de de loc
export function fetchTopics(): Promise<string[]> {
  return apiClient.get<string[]>(QUESTION_BANK_ENDPOINTS.topics);
}