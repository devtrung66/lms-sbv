import { apiClient } from "@/core/api/client";
import { NOTIFICATION_ENDPOINTS } from "./endpoints";

// Cau truc tho mot thong bao (snake_case)
export interface RawNotification {
  id: string;
  type: string;
  title: string;
  content: string;
  read: boolean;
  link?: string;
  created_at: string;
}

// Cau truc tho tom tat so thong bao
export interface RawNotificationSummary {
  total: number;
  unread: number;
}

// Lay danh sach thong bao
export function fetchNotifications(): Promise<RawNotification[]> {
  return apiClient.get<RawNotification[]>(NOTIFICATION_ENDPOINTS.list);
}

// Lay tom tat so thong bao (cho badge chuong)
export function fetchNotificationSummary(): Promise<RawNotificationSummary> {
  return apiClient.get<RawNotificationSummary>(NOTIFICATION_ENDPOINTS.summary);
}