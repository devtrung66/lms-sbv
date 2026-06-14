import {
  fetchReportCards,
  fetchDepartmentRows,
  fetchDistribution,
} from "../api/queries";
import {
  toReportCard,
  toDepartmentReportRow,
  toDistributionSlice,
} from "../adapters/reportAdapter";
import type {
  ReportCardData,
  DepartmentReportRow,
  DistributionSlice,
  ReportFilters,
} from "../model/types";

// Tang dich vu bao cao: ket noi API + adapter.
export const reportService = {
  // Lay the so lieu tong hop
  async getCards(filters: ReportFilters): Promise<ReportCardData[]> {
    const raws = await fetchReportCards(filters);
    return raws.map(toReportCard);
  },

  // Lay bang bao cao theo phong/ban
  async getDepartmentRows(filters: ReportFilters): Promise<DepartmentReportRow[]> {
    const raws = await fetchDepartmentRows(filters);
    return raws.map(toDepartmentReportRow);
  },

  // Lay du lieu phan bo
  async getDistribution(filters: ReportFilters): Promise<DistributionSlice[]> {
    const raws = await fetchDistribution(filters);
    return raws.map(toDistributionSlice);
  },
};