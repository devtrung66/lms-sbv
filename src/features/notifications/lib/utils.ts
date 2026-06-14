import type { AppNotification } from "../model/types";

// Cac tien ich nho rieng cho module notifications.

// Loc cac thong bao chua doc
export function filterUnread(notifications: AppNotification[]): AppNotification[] {
  return notifications.filter((n) => !n.read);
}

// Dem so thong bao chua doc
export function countUnread(notifications: AppNotification[]): number {
  return notifications.filter((n) => !n.read).length;
}

// Gioi han so hien thi tren badge chuong: tren 99 thi hien "99+"
export function formatBadgeCount(count: number): string {
  return count > 99 ? "99+" : String(count);
}