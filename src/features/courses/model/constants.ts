import type { CourseStatus, LessonType } from "./types";

// Nhan trang thai khoa hoc (tieng Viet co dau)
export const COURSE_STATUS_LABELS: Record<CourseStatus, string> = {
  draft: "Bản nháp",
  published: "Đã xuất bản",
  archived: "Đã lưu trữ",
};

// Mau sac trang thai khoa hoc
export const COURSE_STATUS_COLORS: Record<CourseStatus, string> = {
  draft: "bg-slate-100 text-slate-600",
  published: "bg-green-50 text-green-700",
  archived: "bg-amber-50 text-amber-700",
};

// Nhan loai bai hoc
export const LESSON_TYPE_LABELS: Record<LessonType, string> = {
  video: "Video",
  slide: "Trình chiếu",
  document: "Tài liệu",
};

// Dinh dang media duoc chap nhan khi tai len, theo loai bai hoc
export const ACCEPTED_MEDIA: Record<LessonType, string> = {
  video: ".mp4,.webm,.mov",
  slide: ".pdf,.ppt,.pptx",
  document: ".pdf,.doc,.docx",
};

// Kich thuoc tep toi da khi tai len: 500 MB cho video, 50 MB con lai
export const MAX_MEDIA_SIZE: Record<LessonType, number> = {
  video: 500 * 1024 * 1024,
  slide: 50 * 1024 * 1024,
  document: 50 * 1024 * 1024,
};