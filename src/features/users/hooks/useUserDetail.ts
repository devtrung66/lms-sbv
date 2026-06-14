import { useQuery } from "@tanstack/react-query";
import { userService } from "../services/userService";
import { useSelectedUserId } from "../state/selectors";

// Khoa cache cho chi tiet mot cong chuc
export const USER_DETAIL_KEY = "user-detail";

// Hook lay chi tiet cong chuc dang duoc chon.
// Chi goi API khi co id (enabled), tranh goi thua khi chua chon ai.
export function useUserDetail() {
  const selectedId = useSelectedUserId();

  const query = useQuery({
    queryKey: [USER_DETAIL_KEY, selectedId],
    queryFn: () => userService.getDetail(selectedId as string),
    enabled: selectedId !== null,
  });

  return {
    user: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
  };
}