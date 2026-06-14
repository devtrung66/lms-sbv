import type { ReactElement } from "react";
import { Download } from "lucide-react";
import { useExport } from "../../hooks/useExport";
import { reportsConfig } from "../../config/reports.config";
import type { DepartmentReportRow } from "../../model/types";

interface ExportButtonProps {
  rows: DepartmentReportRow[];
}

// Nut xuat bao cao ra tep CSV.
export function ExportButton({ rows }: ExportButtonProps): ReactElement | null {
  const { exportDepartmentReport } = useExport();

  if (!reportsConfig.enableExport) return null;

  return (
    <button
      type="button"
      onClick={() => exportDepartmentReport(rows)}
      disabled={rows.length === 0}
      className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-ink hover:bg-slate-50 disabled:opacity-50"
    >
      <Download size={16} /> Xuất báo cáo
    </button>
  );
}