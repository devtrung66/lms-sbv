import { apiClient } from "@/core/api/client";
import { ROLE_ENDPOINTS } from "./endpoints";

// Cau truc tho mot vai tro (snake_case)
export interface RawRole {
  id: string;
  code: string;
  name: string;
  description?: string;
  permission_ids: string[];
  user_count: number;
  is_system: boolean;
}

// Cau truc tho mot quyen
export interface RawPermission {
  id: string;
  label: string;
  group: string;
}

// Lay danh sach vai tro
export function fetchRoles(): Promise<RawRole[]> {
  return apiClient.get<RawRole[]>(ROLE_ENDPOINTS.list);
}

// Lay danh muc quyen tu backend
export function fetchPermissions(): Promise<RawPermission[]> {
  return apiClient.get<RawPermission[]>(ROLE_ENDPOINTS.permissions);
}