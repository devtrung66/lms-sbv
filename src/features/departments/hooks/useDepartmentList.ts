import { useQuery } from "@tanstack/react-query";
import { departmentService } from "../services/departmentService";

// Khoa cache danh sach va thong ke phong/ban
export const DEPARTMENT_LIST_KEY = "departments-list";
export const DEPARTMENT_STATS_KEY = "departments-stats";

// Hook lay danh sach phong/ban.
export function useDepartmentList() {
  const query = useQuery({
    queryKey: [DEPARTMENT_LIST_KEY],
    queryFn: () => departmentService.getList(),
  });

  return {
    departments: query.data ?? [],
    isLoading: query.isLoading,
    isError: query.isError,
  };
}

// Hook lay thong ke phong/ban (dung lai o trang quan tri nguoi dung).
export function useDepartmentStats() {
  const query = useQuery({
    queryKey: [DEPARTMENT_STATS_KEY],
    queryFn: () => departmentService.getStats(),
  });

  return {
    stats: query.data ?? [],
    isLoading: query.isLoading,
  };
}