import { buildPath } from "@/app/router/routes";

// Dinh nghia duong dan API cua module question-bank.
export const QUESTION_BANK_ENDPOINTS = {
  list: "/question-bank",
  detail: (id: string) => buildPath("/question-bank/:id", { id }),
  create: "/question-bank",
  update: (id: string) => buildPath("/question-bank/:id", { id }),
  delete: (id: string) => buildPath("/question-bank/:id", { id }),
  // Danh sach chu de de loc
  topics: "/question-bank/topics",
} as const;