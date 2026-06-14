// Loai thong bao
export type NotificationType =
  | "course_assigned" // Duoc giao khoa hoc moi
  | "quiz_result" // Co ket qua kiem tra
  | "system" // Thong bao he thong
  | "deadline"; // Sap den han hoc

// Mot thong bao gui den nguoi dung
export interface AppNotification {
  id: string;
  type: NotificationType;
  title: string;
  content: string;
  // Da doc hay chua
  read: boolean;
  // Duong dan dieu huong khi bam vao (tuy chon)
  link?: string;
  // Thoi diem tao (ISO string)
  createdAt: string;
}

// Tom tat so thong bao
export interface NotificationSummary {
  total: number;
  unread: number;
}