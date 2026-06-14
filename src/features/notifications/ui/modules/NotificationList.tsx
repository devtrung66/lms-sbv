import type { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { useNotifications } from "../../hooks/useNotifications";
import { useNotificationMutation } from "../../hooks/useNotificationMutation";
import type { AppNotification } from "../../model/types";
import { NotificationCard } from "../components/NotificationCard";

// Danh sach day du tat ca thong bao (dung o trang thong bao).
export function NotificationList(): ReactElement {
  const navigate = useNavigate();
  const { notifications, isLoading } = useNotifications();
  const { markRead } = useNotificationMutation();

  // Bam vao thong bao: danh dau da doc + dieu huong
  function handleClick(notification: AppNotification): void {
    if (!notification.read) markRead(notification.id);
    if (notification.link) navigate(notification.link);
  }

  if (isLoading) {
    return <div className="py-10 text-center text-sm text-ink-muted">Đang tải thông báo...</div>;
  }

  if (notifications.length === 0) {
    return (
      <div className="py-10 text-center text-sm text-ink-muted">Bạn chưa có thông báo nào</div>
    );
  }

  return (
    <div className="overflow-hidden rounded-card border border-slate-200 bg-white shadow-card">
      {notifications.map((n) => (
        <NotificationCard key={n.id} notification={n} onClick={handleClick} />
      ))}
    </div>
  );
}