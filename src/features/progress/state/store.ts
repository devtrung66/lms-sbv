import { create } from "zustand";
import { DEFAULT_TREND_MONTHS } from "../model/constants";

// Trang thai giao dien trang tien do: khoang thoi gian dang chon cho bieu do.
interface ProgressUiState {
  // So thang hien thi tren bieu do ket qua hoc tap
  trendMonths: number;
  setTrendMonths: (months: number) => void;
}

export const useProgressStore = create<ProgressUiState>((set) => ({
  trendMonths: DEFAULT_TREND_MONTHS,
  setTrendMonths: (months) => set({ trendMonths: months }),
}));