import { apiClient } from "@/core/api/client";
import { DEPARTMENT_ENDPOINTS } from "./endpoints";

// Cau truc tho mot phong/ban (snake_case)
export interface RawDepartment {
  id: string;
  name: string;
  code: string;
  staff_count: number;
  active_staff_count: number;
  completion_rate: number;
  manager_name?: string;
  created_at: string;
}

// Cau truc tho thong ke phong/ban
export interface RawDepartmentStat {
  name: string;
  staff_count: number;
  active_staff_count: number;
  completion_rate: number;
}

// Lay danh sach phong/ban
export function fetchDepartments(): Promise<RawDepartment[]> {
  return apiClient.get<RawDepartment[]>(DEPARTMENT_ENDPOINTS.list);
}

// Lay thong ke phong/ban
export function fetchDepartmentStats(): Promise<RawDepartmentStat[]> {
  return apiClient.get<RawDepartmentStat[]>(DEPARTMENT_ENDPOINTS.stats);
}