import { fetchNotifications, fetchNotificationSummary } from "../api/queries";
import { markRead, markAllRead } from "../api/mutations";
import {
  toNotificationList,
  toNotificationSummary,
} from "../adapters/notificationAdapter";
import type { AppNotification, NotificationSummary } from "../model/types";

// Tang dich vu thong bao: ket noi API + adapter.
export const notificationService = {
  // Lay danh sach thong bao (moi nhat truoc)
  async getList(): Promise<AppNotification[]> {
    const raws = await fetchNotifications();
    return toNotificationList(raws);
  },

  // Lay tom tat so thong bao (cho badge chuong)
  async getSummary(): Promise<NotificationSummary> {
    const raw = await fetchNotificationSummary();
    return toNotificationSummary(raw);
  },

  // Danh dau mot thong bao da doc
  markRead(id: string): Promise<void> {
    return markRead(id);
  },

  // Danh dau tat ca da doc
  markAllRead(): Promise<void> {
    return markAllRead();
  },
};