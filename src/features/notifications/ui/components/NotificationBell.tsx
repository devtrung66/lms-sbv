import type { ReactElement } from "react";
import { Bell } from "lucide-react";
import { formatBadgeCount } from "../../lib/utils";

interface NotificationBellProps {
  unreadCount: number;
  onClick: () => void;
}

// Nut chuong thong bao tren thanh tieu de, kem badge so chua doc.
export function NotificationBell({ unreadCount, onClick }: NotificationBellProps): ReactElement {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative rounded-lg p-2 text-ink-muted hover:bg-slate-100"
      aria-label="Thông báo"
    >
      <Bell size={20} />
      {unreadCount > 0 && (
        <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-danger px-1 text-[10px] font-bold text-white">
          {formatBadgeCount(unreadCount)}
        </span>
      )}
    </button>
  );
}