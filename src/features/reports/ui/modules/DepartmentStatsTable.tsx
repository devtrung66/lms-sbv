import type { ReactElement } from "react";
import { formatNumber } from "@/core/lib/format";
import { completionColorClass } from "@/features/departments/lib/utils";
import { ExportButton } from "../components/ExportButton";
import type { DepartmentReportRow } from "../../model/types";

interface DepartmentStatsTableProps {
  rows: DepartmentReportRow[];
}

// Bang bao cao chi tiet theo phong/ban (kem nut xuat).
export function DepartmentStatsTable({ rows }: DepartmentStatsTableProps): ReactElement {
  return (
    <div className="rounded-card border border-slate-200 bg-white p-5 shadow-card">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-semibold text-ink">Báo cáo theo phòng/ban</h3>
        <ExportButton rows={rows} />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left text-xs uppercase tracking-wide text-ink-muted">
              <th className="px-3 py-2 font-semibold">Phòng / Ban</th>
              <th className="px-3 py-2 text-center font-semibold">Công chức</th>
              <th className="px-3 py-2 text-center font-semibold">Khóa hoàn thành</th>
              <th className="px-3 py-2 text-center font-semibold">Điểm TB</th>
              <th className="px-3 py-2 text-center font-semibold">Tỷ lệ hoàn thành</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.department} className="border-b border-slate-50">
                <td className="px-3 py-2.5 text-ink">{row.department}</td>
                <td className="px-3 py-2.5 text-center text-ink-muted">{formatNumber(row.totalStaff)}</td>
                <td className="px-3 py-2.5 text-center text-ink-muted">{formatNumber(row.completedCourses)}</td>
                <td className="px-3 py-2.5 text-center text-ink-muted">{row.averageScore}/100</td>
                <td className="px-3 py-2.5 text-center">
                  <span className={`font-semibold ${completionColorClass(row.completionRate)}`}>
                    {row.completionRate}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}