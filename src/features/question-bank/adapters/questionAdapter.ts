import type { Paginated } from "@/core/model/common";
import type { QuestionType } from "@/features/quiz";
import type {
  BankQuestion,
  BankAnswerOption,
  QuestionDifficulty,
} from "../model/types";
import type {
  RawBankQuestion,
  RawBankOption,
  RawQuestionList,
} from "../api/queries";

// Chuyen loai cau hoi dang chuoi sang kieu co kiem soat
function mapType(raw: string): QuestionType {
  const value = raw.toLowerCase();
  if (value === "multiple_choice") return "multiple_choice";
  if (value === "true_false") return "true_false";
  return "single_choice";
}

// Chuyen do kho dang chuoi sang kieu co kiem soat
function mapDifficulty(raw: string): QuestionDifficulty {
  const value = raw.toLowerCase();
  if (value === "hard") return "hard";
  if (value === "medium") return "medium";
  return "easy";
}

// Mapping mot lua chon dap an
function toBankOption(raw: RawBankOption): BankAnswerOption {
  return { id: raw.id, content: raw.content, isCorrect: raw.is_correct };
}

// Mapping mot cau hoi trong ngan hang
export function toBankQuestion(raw: RawBankQuestion): BankQuestion {
  return {
    id: raw.id,
    content: raw.content,
    type: mapType(raw.type),
    options: raw.options.map(toBankOption),
    points: raw.points,
    topic: raw.topic,
    difficulty: mapDifficulty(raw.difficulty),
    createdAt: raw.created_at,
  };
}

// Mapping danh sach phan trang
export function toQuestionList(raw: RawQuestionList): Paginated<BankQuestion> {
  return {
    items: raw.items.map(toBankQuestion),
    total: raw.total,
    page: raw.page,
    pageSize: raw.page_size,
  };
}