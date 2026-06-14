import { apiClient } from "@/core/api/client";
import { QUIZ_ENDPOINTS } from "./endpoints";

// Cau truc tho mot lua chon dap an
export interface RawAnswerOption {
  id: string;
  content: string;
}

// Cau truc tho mot cau hoi (khong kem dap an dung)
export interface RawQuestion {
  id: string;
  content: string;
  type: string;
  options: RawAnswerOption[];
  points: number;
}

// Cau truc tho de bai kiem tra
export interface RawQuiz {
  id: string;
  course_id: string;
  title: string;
  questions: RawQuestion[];
  duration_minutes: number;
  pass_threshold: number;
  max_attempts: number;
}

// Cau truc tho ket qua mot lan lam
export interface RawQuizResult {
  attempt_id: string;
  quiz_id: string;
  score: number;
  correct_count: number;
  total_questions: number;
  passed: boolean;
  pass_threshold: number;
  attempt_number: number;
  submitted_at: string;
}

// Lay de bai kiem tra
export function fetchQuiz(quizId: string): Promise<RawQuiz> {
  return apiClient.get<RawQuiz>(QUIZ_ENDPOINTS.getQuiz(quizId));
}

// Lay danh sach ket qua cac lan lam
export function fetchQuizResults(quizId: string): Promise<RawQuizResult[]> {
  return apiClient.get<RawQuizResult[]>(QUIZ_ENDPOINTS.results(quizId));
}