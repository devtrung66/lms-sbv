import { useProgressStore } from "./store";

// Cac action thao tac nhanh tren trang thai trang tien do.
export const progressActions = {
  // Doi khoang thoi gian hien thi bieu do (3/6/12 thang)
  changeTrendRange(months: number): void {
    useProgressStore.getState().setTrendMonths(months);
  },
};