import { useQuery } from "@tanstack/react-query";
import { dashboardService } from "../services/dashboardService";

// Khoa cache dashboard hoc vien
export const LEARNER_DASHBOARD_KEY = "learner-dashboard";

// Hook lay du lieu dashboard hoc vien (trang chu hoc vien - anh 3).
export function useLearnerDashboard() {
  const query = useQuery({
    queryKey: [LEARNER_DASHBOARD_KEY],
    queryFn: () => dashboardService.getLearner(),
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
  };
}