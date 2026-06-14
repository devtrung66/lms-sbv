import { useQuery } from "@tanstack/react-query";
import { userService } from "../services/userService";
import { useUserFilters } from "../state/selectors";

// Khoa cache cho danh sach cong chuc, gom theo bo loc
export const USER_LIST_KEY = "users-list";

// Hook lay danh sach cong chuc theo bo loc hien tai.
// Tu dong tai lai khi bo loc thay doi (vi filters nam trong queryKey).
export function useUserList() {
  const filters = useUserFilters();

  const query = useQuery({
    queryKey: [USER_LIST_KEY, filters],
    queryFn: () => userService.getList(filters),
    // Giu du lieu cu trong khi tai trang moi de bang khong nhay
    placeholderData: (previous) => previous,
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,
    refetch: query.refetch,
  };
}