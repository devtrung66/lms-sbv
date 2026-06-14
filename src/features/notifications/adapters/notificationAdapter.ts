import type {
  AppNotification,
  NotificationType,
  NotificationSummary,
} from "../model/types";
import type { RawNotification, RawNotificationSummary } from "../api/queries";

// Chuyen loai thong bao dang chuoi sang kieu co kiem soat
function mapType(raw: string): NotificationType {
  const value = raw.toLowerCase();
  if (value === "course_assigned") return "course_assigned";
  if (value === "quiz_result") return "quiz_result";
  if (value === "deadline") return "deadline";
  return "system";
}

// Mapping mot thong bao: raw (snake_case) -> model (camelCase)
export function toNotification(raw: RawNotification): AppNotification {
  return {
    id: raw.id,
    type: mapType(raw.type),
    title: raw.title,
    content: raw.content,
    read: raw.read,
    link: raw.link,
    createdAt: raw.created_at,
  };
}

// Mapping danh sach thong bao, sap xep moi nhat len dau
export function toNotificationList(raws: RawNotification[]): AppNotification[] {
  return raws
    .map(toNotification)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

// Mapping tom tat so thong bao
export function toNotificationSummary(raw: RawNotificationSummary): NotificationSummary {
  return { total: raw.total, unread: raw.unread };
}