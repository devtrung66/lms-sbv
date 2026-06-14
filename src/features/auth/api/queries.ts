import { apiClient } from "@/core/api/client";
import { AUTH_ENDPOINTS } from "./endpoints";

// Cau truc tho thong tin nguoi dung tra ve tu backend (chua qua adapter)
export interface RawUserProfile {
  id: string;
  full_name: string;
  email: string;
  role: string;
  staff_code: string;
  department: string;
  position: string;
  avatar_url?: string;
}

// Lay thong tin nguoi dung hien tai dua tren access token
export function fetchCurrentUser(): Promise<RawUserProfile> {
  return apiClient.get<RawUserProfile>(AUTH_ENDPOINTS.me);
}