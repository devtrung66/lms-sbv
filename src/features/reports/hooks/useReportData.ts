import { useQuery } from "@tanstack/react-query";
import { reportService } from "../services/reportService";
import { useReportStore } from "../state/store";

// Khoa cache du lieu bao cao
export const REPORT_CARDS_KEY = "report-cards";
export const REPORT_ROWS_KEY = "report-rows";
export const REPORT_DISTRIBUTION_KEY = "report-distribution";

// Hook lay toan bo du lieu bao cao theo bo loc hien tai.
export function useReportData() {
  const filters = useReportStore((state) => state.filters);

  const cardsQuery = useQuery({
    queryKey: [REPORT_CARDS_KEY, filters],
    queryFn: () => reportService.getCards(filters),
  });

  const rowsQuery = useQuery({
    queryKey: [REPORT_ROWS_KEY, filters],
    queryFn: () => reportService.getDepartmentRows(filters),
  });

  const distributionQuery = useQuery({
    queryKey: [REPORT_DISTRIBUTION_KEY, filters],
    queryFn: () => reportService.getDistribution(filters),
  });

  return {
    cards: cardsQuery.data ?? [],
    rows: rowsQuery.data ?? [],
    distribution: distributionQuery.data ?? [],
    isLoading: cardsQuery.isLoading || rowsQuery.isLoading || distributionQuery.isLoading,
  };
}