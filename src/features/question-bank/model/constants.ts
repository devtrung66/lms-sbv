import type { QuestionDifficulty } from "./types";
import type { QuestionType } from "@/features/quiz";
import type { SelectOption } from "@/core/model/common";

// Nhan do kho (tieng Viet co dau)
export const DIFFICULTY_LABELS: Record<QuestionDifficulty, string> = {
  easy: "Dễ",
  medium: "Trung bình",
  hard: "Khó",
};

// Mau sac do kho
export const DIFFICULTY_COLORS: Record<QuestionDifficulty, string> = {
  easy: "bg-green-50 text-green-700",
  medium: "bg-amber-50 text-amber-700",
  hard: "bg-red-50 text-red-700",
};

// Nhan loai cau hoi
export const QUESTION_TYPE_LABELS: Record<QuestionType, string> = {
  single_choice: "Chọn một đáp án",
  multiple_choice: "Chọn nhiều đáp án",
  true_false: "Đúng / Sai",
};

// Lua chon do kho cho bo loc
export const DIFFICULTY_OPTIONS: SelectOption<QuestionDifficulty>[] = [
  { label: DIFFICULTY_LABELS.easy, value: "easy" },
  { label: DIFFICULTY_LABELS.medium, value: "medium" },
  { label: DIFFICULTY_LABELS.hard, value: "hard" },
];

// So lua chon dap an toi thieu / toi da cho mot cau hoi
export const MIN_OPTIONS = 2;
export const MAX_OPTIONS = 6;