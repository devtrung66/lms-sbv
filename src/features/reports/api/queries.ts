import { apiClient } from "@/core/api/client";
import { REPORT_ENDPOINTS } from "./endpoints";
import type { ReportFilters } from "../model/types";

// Cau truc tho the so lieu
export interface RawReportCard {
  label: string;
  value: number;
  unit?: string;
  change?: number;
}

// Cau truc tho dong bao cao theo phong/ban
export interface RawDepartmentReportRow {
  department: string;
  total_staff: number;
  completed_courses: number;
  average_score: number;
  completion_rate: number;
}

// Cau truc tho mot phan phan bo
export interface RawDistributionSlice {
  label: string;
  value: number;
  percent: number;
}

// Chuyen bo loc thanh chuoi tham so truy van
function buildQueryString(filters: ReportFilters): string {
  const params = new URLSearchParams();
  params.set("type", filters.type);
  params.set("months", String(filters.months));
  if (filters.department) params.set("department", filters.department);
  return params.toString();
}

// Lay the so lieu tong hop
export function fetchReportCards(filters: ReportFilters): Promise<RawReportCard[]> {
  return apiClient.get<RawReportCard[]>(`${REPORT_ENDPOINTS.cards}?${buildQueryString(filters)}`);
}

// Lay bang bao cao theo phong/ban
export function fetchDepartmentRows(filters: ReportFilters): Promise<RawDepartmentReportRow[]> {
  return apiClient.get<RawDepartmentReportRow[]>(
    `${REPORT_ENDPOINTS.departmentRows}?${buildQueryString(filters)}`
  );
}

// Lay du lieu phan bo
export function fetchDistribution(filters: ReportFilters): Promise<RawDistributionSlice[]> {
  return apiClient.get<RawDistributionSlice[]>(
    `${REPORT_ENDPOINTS.distribution}?${buildQueryString(filters)}`
  );
}