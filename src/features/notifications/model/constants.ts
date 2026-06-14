import type { NotificationType } from "./types";

// Nhan loai thong bao (tieng Viet co dau)
export const NOTIFICATION_TYPE_LABELS: Record<NotificationType, string> = {
  course_assigned: "Khóa học mới",
  quiz_result: "Kết quả kiểm tra",
  system: "Hệ thống",
  deadline: "Sắp đến hạn",
};

// Ten icon lucide cho tung loai (UI tu map qua component)
export const NOTIFICATION_ICON_MAP: Record<NotificationType, string> = {
  course_assigned: "BookOpen",
  quiz_result: "ClipboardCheck",
  system: "Megaphone",
  deadline: "AlarmClock",
};

// Mau nen icon theo loai (lop mau Tailwind)
export const NOTIFICATION_COLORS: Record<NotificationType, string> = {
  course_assigned: "bg-brand-50 text-brand-600",
  quiz_result: "bg-green-50 text-green-600",
  system: "bg-amber-50 text-amber-600",
  deadline: "bg-red-50 text-red-600",
};

// So thong bao tai moi lan trong danh sach
export const NOTIFICATION_PAGE_SIZE = 20;