import { MIN_OPTIONS } from "../model/constants";
import type { BankAnswerOption, QuestionFormValues } from "../model/types";
import type { QuestionType } from "@/features/quiz";

// Cac tien ich nho rieng cho module question-bank.

// Tao mot lua chon dap an rong voi id tam (dung khi them dap an moi trong form)
export function createEmptyOption(): BankAnswerOption {
  return {
    id: `tmp_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    content: "",
    isCorrect: false,
  };
}

// Tao gia tri form rong ban dau cho cau hoi moi
export function createEmptyForm(): QuestionFormValues {
  return {
    content: "",
    type: "single_choice",
    options: Array.from({ length: MIN_OPTIONS }, createEmptyOption),
    points: 1,
    topic: "",
    difficulty: "easy",
  };
}

// Voi cau hoi mot lua chon: chi cho phep mot dap an dung.
// Khi chon dap an dung moi, bo danh dau cac dap an khac.
export function enforceSingleCorrect(
  options: BankAnswerOption[],
  type: QuestionType,
  toggledId: string
): BankAnswerOption[] {
  if (type === "multiple_choice") {
    // Nhieu lua chon: dao trang thai dap an duoc bam
    return options.map((o) =>
      o.id === toggledId ? { ...o, isCorrect: !o.isCorrect } : o
    );
  }
  // Mot lua chon / dung-sai: chi mot dap an dung
  return options.map((o) => ({ ...o, isCorrect: o.id === toggledId }));
}