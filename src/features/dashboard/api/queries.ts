import { apiClient } from "@/core/api/client";
import { DASHBOARD_ENDPOINTS } from "./endpoints";

// Cau truc tho KPI card
export interface RawKpiCard {
  key: string;
  label: string;
  value: number;
  unit?: string;
  caption?: string;
}

// Cau truc tho khoa hoc tren dashboard
export interface RawDashboardCourse {
  course_id: string;
  title: string;
  thumbnail_url?: string;
  progress_percent: number;
  score?: number;
}

// Cau truc tho thong bao
export interface RawDashboardNotice {
  id: string;
  title: string;
  content: string;
  created_at: string;
}

// Cau truc tho mot phan phan bo
export interface RawSlice {
  label: string;
  value: number;
  percent: number;
}

// Cau truc tho diem theo thang
export interface RawTrendPoint {
  month: string;
  average_score: number;
}

// Cau truc tho dashboard hoc vien
export interface RawLearnerDashboard {
  kpis: RawKpiCard[];
  progress_distribution: RawSlice[];
  score_trend: RawTrendPoint[];
  ongoing_courses: RawDashboardCourse[];
  notices: RawDashboardNotice[];
}

// Cau truc tho dashboard quan tri
export interface RawAdminDashboard {
  kpis: RawKpiCard[];
  role_distribution: RawSlice[];
  recent_courses: RawDashboardCourse[];
}

// Lay du lieu dashboard hoc vien
export function fetchLearnerDashboard(): Promise<RawLearnerDashboard> {
  return apiClient.get<RawLearnerDashboard>(DASHBOARD_ENDPOINTS.learner);
}

// Lay du lieu dashboard quan tri
export function fetchAdminDashboard(): Promise<RawAdminDashboard> {
  return apiClient.get<RawAdminDashboard>(DASHBOARD_ENDPOINTS.admin);
}