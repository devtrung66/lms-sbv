import { useQuery } from "@tanstack/react-query";
import { notificationService } from "../services/notificationService";

// Khoa cache danh sach va tom tat thong bao
export const NOTIFICATIONS_KEY = "notifications";
export const NOTIFICATION_SUMMARY_KEY = "notification-summary";

// Hook lay danh sach thong bao + tom tat (so chua doc).
export function useNotifications() {
  const listQuery = useQuery({
    queryKey: [NOTIFICATIONS_KEY],
    queryFn: () => notificationService.getList(),
  });

  const summaryQuery = useQuery({
    queryKey: [NOTIFICATION_SUMMARY_KEY],
    queryFn: () => notificationService.getSummary(),
    // Lam moi dinh ky moi 60 giay de cap nhat badge chuong
    refetchInterval: 60_000,
  });

  return {
    notifications: listQuery.data ?? [],
    unreadCount: summaryQuery.data?.unread ?? 0,
    isLoading: listQuery.isLoading,
  };
}