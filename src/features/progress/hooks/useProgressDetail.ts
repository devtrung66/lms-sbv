import { useQuery } from "@tanstack/react-query";
import { progressService } from "../services/progressService";
import { useTrendMonths } from "../state/selectors";

// Khoa cache tong quan + bieu do tien do
export const PROGRESS_SUMMARY_KEY = "progress-summary";
export const PROGRESS_TREND_KEY = "progress-trend";

// Hook lay tong quan tien do + du lieu bieu do theo khoang thoi gian dang chon.
export function useProgressDetail() {
  const months = useTrendMonths();

  const summaryQuery = useQuery({
    queryKey: [PROGRESS_SUMMARY_KEY],
    queryFn: () => progressService.getSummary(),
  });

  const trendQuery = useQuery({
    queryKey: [PROGRESS_TREND_KEY, months],
    queryFn: () => progressService.getTrend(months),
  });

  return {
    summary: summaryQuery.data,
    trend: trendQuery.data ?? [],
    isLoading: summaryQuery.isLoading || trendQuery.isLoading,
    isError: summaryQuery.isError || trendQuery.isError,
  };
}