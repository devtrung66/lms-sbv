import { useProgressStore } from "./store";

// Lay so thang dang chon cho bieu do ket qua
export function useTrendMonths(): number {
  return useProgressStore((state) => state.trendMonths);
}