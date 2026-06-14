import type { ReactElement } from "react";
import { BookOpen, ClipboardCheck, Megaphone, AlarmClock } from "lucide-react";
import { cn } from "@/core/lib/utils";
import { formatRelative } from "@/core/lib/date";
import { truncate } from "@/core/lib/utils";
import {
  NOTIFICATION_ICON_MAP,
  NOTIFICATION_COLORS,
} from "../../model/constants";
import type { AppNotification, NotificationType } from "../../model/types";

interface NotificationCardProps {
  notification: AppNotification;
  onClick: (notification: AppNotification) => void;
}

// Ban do ten icon -> component lucide (UI chiu trach nhiem render)
const ICONS: Record<string, typeof BookOpen> = {
  BookOpen,
  ClipboardCheck,
  Megaphone,
  AlarmClock,
};

// Lay component icon theo loai thong bao
function iconFor(type: NotificationType): ReactElement {
  const name = NOTIFICATION_ICON_MAP[type];
  const Icon = ICONS[name] ?? Megaphone;
  return <Icon size={16} />;
}

// Mot the thong bao (dung trong dropdown va trang danh sach).
export function NotificationCard({ notification, onClick }: NotificationCardProps): ReactElement {
  return (
    <button
      type="button"
      onClick={() => onClick(notification)}
      className={cn(
        "flex w-full items-start gap-3 border-b border-slate-50 px-4 py-3 text-left transition-colors hover:bg-slate-50",
        !notification.read && "bg-brand-50/40"
      )}
    >
      {/* Icon theo loai */}
      <span
        className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
          NOTIFICATION_COLORS[notification.type]
        )}
      >
        {iconFor(notification.type)}
      </span>

      {/* Noi dung */}
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm font-medium text-ink">{notification.title}</p>
          {/* Cham bao chua doc */}
          {!notification.read && <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-500" />}
        </div>
        <p className="mt-0.5 text-xs text-ink-muted">{truncate(notification.content, 100)}</p>
        <p className="mt-1 text-xs text-slate-400">{formatRelative(notification.createdAt)}</p>
      </div>
    </button>
  );
}