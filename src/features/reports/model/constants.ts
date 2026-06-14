import type { ReportType } from "./types";
import type { SelectOption } from "@/core/model/common";

// Nhan loai bao cao (tieng Viet co dau)
export const REPORT_TYPE_LABELS: Record<ReportType, string> = {
  course_completion: "Tỷ lệ hoàn thành khóa học",
  department_summary: "Tổng hợp theo phòng/ban",
  quiz_results: "Kết quả kiểm tra",
  learner_activity: "Hoạt động học viên",
};

// Lua chon loai bao cao cho bo loc
export const REPORT_TYPE_OPTIONS: SelectOption<ReportType>[] = [
  { label: REPORT_TYPE_LABELS.course_completion, value: "course_completion" },
  { label: REPORT_TYPE_LABELS.department_summary, value: "department_summary" },
  { label: REPORT_TYPE_LABELS.quiz_results, value: "quiz_results" },
  { label: REPORT_TYPE_LABELS.learner_activity, value: "learner_activity" },
];

// Mau cho cac phan trong bieu do phan bo vai tro (anh 2)
export const DISTRIBUTION_COLORS = [
  "#2563eb",
  "#16a34a",
  "#f59e0b",
  "#dc2626",
  "#8b5cf6",
  "#06b6d4",
];

// Dinh dang xuat duoc ho tro
export const EXPORT_FORMATS = ["csv", "xlsx"] as const;