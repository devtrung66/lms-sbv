// API cong khai cua module dashboard.
export { useLearnerDashboard } from "./hooks/useLearnerDashboard";
export { useAdminDashboard } from "./hooks/useAdminDashboard";
export { dashboardService } from "./services/dashboardService";
export { useDashboardStore } from "./state/store";

export type {
  LearnerDashboard,
  AdminDashboard,
  KpiCard,
  DashboardCourse,
  DashboardNotice,
} from "./model/types";