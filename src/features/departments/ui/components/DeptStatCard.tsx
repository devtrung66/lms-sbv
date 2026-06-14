import type { ReactElement } from "react";
import { Building2 } from "lucide-react";
import { formatNumber } from "@/core/lib/format";

interface DeptStatCardProps {
  // Tong so phong/ban
  totalDepartments: number;
  // Tong so cong chuc
  totalStaff: number;
}

// The tom tat nhanh ve phong/ban dung o dau trang.
export function DeptStatCard({ totalDepartments, totalStaff }: DeptStatCardProps): ReactElement {
  return (
    <div className="flex items-center gap-4 rounded-card border border-slate-200 bg-white p-5 shadow-card">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
        <Building2 size={22} />
      </div>
      <div>
        <p className="text-sm text-ink-muted">Tổng số phòng/ban</p>
        <p className="text-2xl font-bold text-ink">{formatNumber(totalDepartments)}</p>
        <p className="text-xs text-ink-muted">{formatNumber(totalStaff)} công chức</p>
      </div>
    </div>
  );
}