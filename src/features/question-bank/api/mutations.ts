import { apiClient } from "@/core/api/client";
import { QUESTION_BANK_ENDPOINTS } from "./endpoints";
import type { RawBankQuestion } from "./queries";
import type { QuestionFormValues } from "../model/types";

// Chuyen du lieu form cau hoi sang body backend (snake_case)
function toRequestBody(values: QuestionFormValues): Record<string, unknown> {
  return {
    content: values.content,
    type: values.type,
    points: values.points,
    topic: values.topic,
    difficulty: values.difficulty,
    options: values.options.map((o) => ({
      id: o.id,
      content: o.content,
      is_correct: o.isCorrect,
    })),
  };
}

// Tao moi cau hoi
export function createQuestion(values: QuestionFormValues): Promise<RawBankQuestion> {
  return apiClient.post<RawBankQuestion>(
    QUESTION_BANK_ENDPOINTS.create,
    toRequestBody(values)
  );
}

// Cap nhat cau hoi
export function updateQuestion(
  id: string,
  values: QuestionFormValues
): Promise<RawBankQuestion> {
  return apiClient.put<RawBankQuestion>(
    QUESTION_BANK_ENDPOINTS.update(id),
    toRequestBody(values)
  );
}

// Xoa cau hoi
export function deleteQuestion(id: string): Promise<void> {
  return apiClient.delete<void>(QUESTION_BANK_ENDPOINTS.delete(id));
}