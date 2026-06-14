import type { PaginationParams } from "@/core/model/common";
import type { QuestionType } from "@/features/quiz";

// Mot lua chon dap an (phia admin - co danh dau dung/sai)
export interface BankAnswerOption {
  id: string;
  content: string;
  // Day co phai dap an dung khong (chi admin thay)
  isCorrect: boolean;
}

// Mot cau hoi trong ngan hang (phia admin - kem dap an dung)
export interface BankQuestion {
  id: string;
  content: string;
  type: QuestionType;
  options: BankAnswerOption[];
  points: number;
  // Khoa hoc / chu de cau hoi thuoc ve
  topic: string;
  // Do kho: de / trung binh / kho
  difficulty: QuestionDifficulty;
  createdAt: string;
}

// Do kho cua cau hoi
export type QuestionDifficulty = "easy" | "medium" | "hard";

// Bo loc ngan hang cau hoi
export interface QuestionBankFilters extends PaginationParams {
  topic?: string;
  type?: QuestionType;
  difficulty?: QuestionDifficulty;
}

// Du lieu tao/sua mot cau hoi
export interface QuestionFormValues {
  content: string;
  type: QuestionType;
  options: BankAnswerOption[];
  points: number;
  topic: string;
  difficulty: QuestionDifficulty;
}