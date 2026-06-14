import { useQuery } from "@tanstack/react-query";
import { progressService } from "../services/progressService";

// Khoa cache danh sach tien do tung khoa
export const PROGRESS_ROWS_KEY = "progress-rows";

// Hook lay danh sach tien do tung khoa cua hoc vien hien tai.
export function useProgressList() {
  const query = useQuery({
    queryKey: [PROGRESS_ROWS_KEY],
    queryFn: () => progressService.getRows(),
  });

  return {
    rows: query.data ?? [],
    isLoading: query.isLoading,
    isError: query.isError,
  };
}