import {
  fetchProgressSummary,
  fetchProgressRows,
  fetchProgressTrend,
} from "../api/queries";
import {
  toProgressSummary,
  toProgressRow,
  toTrendPoint,
} from "../adapters/progressAdapter";
import type {
  ProgressSummary,
  ProgressRow,
  ProgressTrendPoint,
} from "../model/types";

// Tang dich vu tien do hoc tap: ket noi API + adapter.
export const progressService = {
  // Lay tong quan tien do
  async getSummary(): Promise<ProgressSummary> {
    const raw = await fetchProgressSummary();
    return toProgressSummary(raw);
  },

  // Lay danh sach tien do tung khoa
  async getRows(): Promise<ProgressRow[]> {
    const raws = await fetchProgressRows();
    return raws.map(toProgressRow);
  },

  // Lay du lieu bieu do ket qua theo so thang
  async getTrend(months: number): Promise<ProgressTrendPoint[]> {
    const raws = await fetchProgressTrend(months);
    return raws.map(toTrendPoint);
  },
};