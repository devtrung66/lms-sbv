import { apiClient } from "@/core/api/client";
import { NOTIFICATION_ENDPOINTS } from "./endpoints";

// Danh dau mot thong bao da doc
export function markRead(id: string): Promise<void> {
  return apiClient.post<void>(NOTIFICATION_ENDPOINTS.markRead(id));
}

// Danh dau tat ca thong bao da doc
export function markAllRead(): Promise<void> {
  return apiClient.post<void>(NOTIFICATION_ENDPOINTS.markAllRead);
}