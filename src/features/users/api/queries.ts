import { apiClient } from "@/core/api/client";
import { USER_ENDPOINTS } from "./endpoints";
import type { UserFilters } from "../model/types";

// Cau truc tho mot cong chuc tra ve tu backend (snake_case)
export interface RawStaffUser {
  id: string;
  staff_code: string;
  full_name: string;
  email: string;
  phone?: string;
  department: string;
  position: string;
  role: string;
  status: string;
  avatar_url?: string;
  created_at: string;
}

// Cau truc tho ket qua phan trang
export interface RawUserList {
  items: RawStaffUser[];
  total: number;
  page: number;
  page_size: number;
}

// Cau truc tho thong ke tong quan
export interface RawUserStats {
  total: number;
  active: number;
  inactive: number;
  locked: number;
  department_count: number;
}

// Chuyen bo loc thanh chuoi tham so truy van
function buildQueryString(filters: UserFilters): string {
  const params = new URLSearchParams();
  params.set("page", String(filters.page));
  params.set("page_size", String(filters.pageSize));
  if (filters.search) params.set("search", filters.search);
  if (filters.department) params.set("department", filters.department);
  if (filters.role) params.set("role", filters.role);
  if (filters.status) params.set("status", filters.status);
  return params.toString();
}

// Lay danh sach cong chuc theo bo loc
export function fetchUserList(filters: UserFilters): Promise<RawUserList> {
  return apiClient.get<RawUserList>(`${USER_ENDPOINTS.list}?${buildQueryString(filters)}`);
}

// Lay thong ke tong quan
export function fetchUserStats(): Promise<RawUserStats> {
  return apiClient.get<RawUserStats>(USER_ENDPOINTS.stats);
}

// Lay chi tiet mot cong chuc
export function fetchUserDetail(id: string): Promise<RawStaffUser> {
  return apiClient.get<RawStaffUser>(USER_ENDPOINTS.detail(id));
}