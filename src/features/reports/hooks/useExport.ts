import { useCallback } from "react";
import { exportService } from "../services/exportService";
import { formatDate } from "@/core/lib/date";
import type { DepartmentReportRow } from "../model/types";

// Hook xuat bao cao ra tep CSV.
export function useExport() {
  // Xuat bang bao cao theo phong/ban ra CSV
  const exportDepartmentReport = useCallback((rows: DepartmentReportRow[]): void => {
    if (rows.length === 0) return;
    const content = exportService.toCsv(rows);
    const today = formatDate(new Date()).replace(/\//g, "-");
    exportService.downloadCsv(content, `bao-cao-phong-ban-${today}`);
  }, []);

  return { exportDepartmentReport };
}