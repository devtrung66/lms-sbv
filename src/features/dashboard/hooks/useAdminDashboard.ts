import { useQuery } from "@tanstack/react-query";
import { dashboardService } from "../services/dashboardService";

// Khoa cache dashboard quan tri
export const ADMIN_DASHBOARD_KEY = "admin-dashboard";

// Hook lay du lieu dashboard quan tri (trang quan tri - anh 2).
export function useAdminDashboard() {
  const query = useQuery({
    queryKey: [ADMIN_DASHBOARD_KEY],
    queryFn: () => dashboardService.getAdmin(),
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
  };
}