import { useQuery } from "@tanstack/react-query";
import { userService } from "../services/userService";

// Khoa cache thong ke nguoi dung
export const USER_STATS_KEY = "user-stats";

// Hook lay thong ke tong quan cong chuc (cho cac the dau trang - anh 2).
export function useUserStats() {
  const query = useQuery({
    queryKey: [USER_STATS_KEY],
    queryFn: () => userService.getStats(),
  });

  return {
    stats: query.data,
    isLoading: query.isLoading,
  };
}