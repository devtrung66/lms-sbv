// Loai bao cao
export type ReportType =
  | "course_completion" // Ty le hoan thanh khoa hoc
  | "department_summary" // Tong hop theo phong/ban
  | "quiz_results" // Ket qua kiem tra
  | "learner_activity"; // Hoat dong hoc vien

// Mot the so lieu tong hop tren trang bao cao
export interface ReportCardData {
  label: string;
  value: number;
  // Don vi hien thi (vd "Người", "%", "Khóa")
  unit?: string;
  // Thay doi so voi ky truoc (phan tram), duong la tang
  change?: number;
}

// Mot dong trong bang bao cao theo phong/ban
export interface DepartmentReportRow {
  department: string;
  totalStaff: number;
  completedCourses: number;
  averageScore: number;
  completionRate: number;
}

// Mot phan trong bieu do phan bo (vd phan bo vai tro - anh 2)
export interface DistributionSlice {
  label: string;
  value: number;
  // Ty le phan tram trong tong
  percent: number;
}

// Tham so loc bao cao
export interface ReportFilters {
  type: ReportType;
  // Khoang thoi gian: so thang gan day
  months: number;
  // Loc theo phong/ban cu the (rong = tat ca)
  department?: string;
}