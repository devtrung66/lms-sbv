// API cong khai cua module notifications.
export { useNotifications } from "./hooks/useNotifications";
export { useNotificationMutation } from "./hooks/useNotificationMutation";
export { notificationService } from "./services/notificationService";
export { useNotificationStore } from "./state/store";

// Thanh phan UI dung o thanh tieu de (Topbar)
export { NotificationBell } from "./ui/components/NotificationBell";
export { NotificationDropdown } from "./ui/modules/NotificationDropdown";

export type { AppNotification, NotificationType, NotificationSummary } from "./model/types";