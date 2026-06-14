import { useMutation, useQueryClient } from "@tanstack/react-query";
import { notificationService } from "../services/notificationService";
import { NOTIFICATIONS_KEY, NOTIFICATION_SUMMARY_KEY } from "./useNotifications";

// Hook danh dau da doc (mot hoac tat ca thong bao).
export function useNotificationMutation() {
  const queryClient = useQueryClient();

  // Lam moi danh sach + tom tat sau khi thay doi
  function invalidate(): void {
    void queryClient.invalidateQueries({ queryKey: [NOTIFICATIONS_KEY] });
    void queryClient.invalidateQueries({ queryKey: [NOTIFICATION_SUMMARY_KEY] });
  }

  const markReadMutation = useMutation({
    mutationFn: (id: string) => notificationService.markRead(id),
    onSuccess: invalidate,
  });

  const markAllReadMutation = useMutation({
    mutationFn: () => notificationService.markAllRead(),
    onSuccess: invalidate,
  });

  return {
    markRead: markReadMutation.mutate,
    markAllRead: markAllReadMutation.mutate,
    isMarkingAll: markAllReadMutation.isPending,
  };
}