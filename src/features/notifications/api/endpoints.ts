import { buildPath } from "@/app/router/routes";

// Dinh nghia duong dan API cua module notifications.
export const NOTIFICATION_ENDPOINTS = {
  // Danh sach thong bao cua nguoi dung hien tai
  list: "/notifications",
  // Tom tat so thong bao (cho badge chuong)
  summary: "/notifications/summary",
  // Danh dau mot thong bao da doc
  markRead: (id: string) => buildPath("/notifications/:id/read", { id }),
  // Danh dau tat ca da doc
  markAllRead: "/notifications/read-all",
} as const;