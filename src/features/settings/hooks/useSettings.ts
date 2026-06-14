import { useQuery } from "@tanstack/react-query";
import { settingsService } from "../services/settingsService";

// Khoa cache cau hinh he thong
export const SETTINGS_KEY = "system-settings";

// Hook lay cau hinh he thong hien tai.
export function useSettings() {
  const query = useQuery({
    queryKey: [SETTINGS_KEY],
    queryFn: () => settingsService.get(),
    staleTime: 5 * 60 * 1000,
  });

  return {
    settings: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
  };
}