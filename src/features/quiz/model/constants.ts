import { env } from "@/core/config/env";
import type { QuestionType } from "./types";

// Nguong diem dat mac dinh de qua bai (phan tram).
// Lay tu bien moi truong, mac dinh 80% theo yeu cau nghiep vu.
export const DEFAULT_PASS_THRESHOLD = env.passThreshold;

// Nhan loai cau hoi (tieng Viet co dau)
export const QUESTION_TYPE_LABELS: Record<QuestionType, string> = {
  single_choice: "Chọn một đáp án",
  multiple_choice: "Chọn nhiều đáp án",
  true_false: "Đúng / Sai",
};

// Thong diep ket qua (tieng Viet co dau)
export const RESULT_MESSAGES = {
  passed: "Chúc mừng! Bạn đã vượt qua bài kiểm tra",
  failed: "Bạn chưa đạt yêu cầu, hãy ôn tập và thử lại",
  timeUp: "Đã hết thời gian làm bài, hệ thống tự động nộp bài",
} as const;