import { apiClient } from "@/core/api/client";
import { PROGRESS_ENDPOINTS } from "./endpoints";

// Cau truc tho mot dong tien do (snake_case)
export interface RawProgressRow {
  course_id: string;
  course_title: string;
  status: string;
  progress_percent: number;
  completed_lessons: number;
  total_lessons: number;
  study_time_seconds: number;
  final_score?: number;
  last_accessed_at?: string;
}

// Cau truc tho tong quan tien do
export interface RawProgressSummary {
  total_courses: number;
  completed_courses: number;
  in_progress_courses: number;
  not_started_courses: number;
  overdue_courses: number;
  average_progress: number;
  total_study_time_seconds: number;
}

// Cau truc tho mot diem tren bieu do
export interface RawTrendPoint {
  month: string;
  average_score: number;
}

// Lay tong quan tien do hoc tap
export function fetchProgressSummary(): Promise<RawProgressSummary> {
  return apiClient.get<RawProgressSummary>(PROGRESS_ENDPOINTS.summary);
}

// Lay danh sach tien do tung khoa
export function fetchProgressRows(): Promise<RawProgressRow[]> {
  return apiClient.get<RawProgressRow[]>(PROGRESS_ENDPOINTS.rows);
}

// Lay du lieu bieu do ket qua theo so thang
export function fetchProgressTrend(months: number): Promise<RawTrendPoint[]> {
  return apiClient.get<RawTrendPoint[]>(`${PROGRESS_ENDPOINTS.trend}?months=${months}`);
}