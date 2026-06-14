import type { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCheck } from "lucide-react";
import { ROUTES } from "@/app/router/routes";
import { useNotifications } from "../../hooks/useNotifications";
import { useNotificationMutation } from "../../hooks/useNotificationMutation";
import { useNotificationStore } from "../../state/store";
import { notificationsConfig } from "../../config/notifications.config";
import type { AppNotification } from "../../model/types";
import { NotificationCard } from "../components/NotificationCard";

// Dropdown thong bao mo tu nut chuong tren thanh tieu de.
export function NotificationDropdown(): ReactElement | null {
  const navigate = useNavigate();
  const open = useNotificationStore((state) => state.dropdownOpen);
  const closeDropdown = useNotificationStore((state) => state.closeDropdown);
  const { notifications } = useNotifications();
  const { markRead, markAllRead } = useNotificationMutation();

  if (!open) return null;

  // Bam vao mot thong bao: danh dau da doc + dieu huong (neu co link)
  function handleClick(notification: AppNotification): void {
    if (!notification.read) markRead(notification.id);
    closeDropdown();
    if (notification.link) navigate(notification.link);
  }

  const visible = notifications.slice(0, notificationsConfig.dropdownLimit);

  return (
    <>
      {/* Lop phu de bam ra ngoai dong dropdown */}
      <div className="fixed inset-0 z-40" onClick={closeDropdown} />

      {/* Dropdown */}
      <div className="absolute right-0 top-12 z-50 w-80 overflow-hidden rounded-card border border-slate-200 bg-white shadow-lg">
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
          <h3 className="text-sm font-semibold text-ink">Thông báo</h3>
          <button
            type="button"
            onClick={() => markAllRead()}
            className="flex items-center gap-1 text-xs text-brand-600 hover:underline"
          >
            <CheckCheck size={14} /> Đánh dấu đã đọc
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto">
          {visible.length === 0 ? (
            <p className="py-8 text-center text-sm text-ink-muted">Không có thông báo</p>
          ) : (
            visible.map((n) => (
              <NotificationCard key={n.id} notification={n} onClick={handleClick} />
            ))
          )}
        </div>

        {/* Xem tat ca */}
        <button
          type="button"
          onClick={() => {
            closeDropdown();
            navigate(ROUTES.notifications);
          }}
          className="w-full border-t border-slate-100 py-2.5 text-center text-sm text-brand-600 hover:bg-slate-50"
        >
          Xem tất cả thông báo
        </button>
      </div>
    </>
  );
}