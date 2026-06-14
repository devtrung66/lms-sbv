// Cac hang so rieng cua module dashboard.

// Ban do khoa KPI -> ten icon lucide (chon o tang UI).
// Tach rieng de logic khong phu thuoc thu vien icon.
export const KPI_ICON_MAP: Record<string, string> = {
  total_courses: "BookOpen",
  in_progress: "GraduationCap",
  completed: "CheckCircle2",
  average_score: "Trophy",
  total_users: "Users",
  active_users: "UserCheck",
  inactive_users: "UserX",
  locked_users: "Lock",
  departments: "Building2",
};

// So khoa hoc gan day hien thi toi da
export const MAX_RECENT_COURSES = 3;

// So thong bao hien thi toi da tren dashboard
export const MAX_NOTICES = 3;