import { apiClient } from "@/core/api/client";
import { SETTINGS_ENDPOINTS } from "./endpoints";

// Cau truc tho cau hinh he thong (snake_case)
export interface RawSystemSettings {
  system_name: string;
  organization_name: string;
  support_email: string;
  pass_threshold: number;
  default_max_attempts: number;
  enable_google_login: boolean;
  enable_email_notification: boolean;
  auto_lock_inactive_days: number;
}

// Lay cau hinh he thong hien tai
export function fetchSettings(): Promise<RawSystemSettings> {
  return apiClient.get<RawSystemSettings>(SETTINGS_ENDPOINTS.get);
}