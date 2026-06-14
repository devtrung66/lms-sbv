import type { EnrollmentStatus } from "./types";

// Nhan trang thai hoc (tieng Viet co dau)
export const ENROLLMENT_LABELS: Record<EnrollmentStatus, string> = {
  not_started: "Chưa bắt đầu",
  in_progress: "Đang học",
  completed: "Hoàn thành",
};

// Mau sac trang thai hoc
export const ENROLLMENT_COLORS: Record<EnrollmentStatus, string> = {
  not_started: "bg-slate-100 text-slate-600",
  in_progress: "bg-blue-50 text-blue-700",
  completed: "bg-green-50 text-green-700",
};

// Nguong phan tram coi nhu da hoc xong mot video (xem >= 90% thoi luong)
export const VIDEO_COMPLETE_THRESHOLD = 0.9;

// Khoang thoi gian dong bo tien do len backend (mili-giay)
export const PROGRESS_SYNC_INTERVAL = 15_000;