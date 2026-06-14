import type { ReactElement } from "react";
import { formatNumber } from "@/core/lib/format";
import { completionColorClass } from "../../lib/utils";
import { useDepartmentStats } from "../../hooks/useDepartmentList";

// Bang thong ke theo phong/ban (dung o goc duoi trang quan tri nguoi dung - anh 2).
// Tu lay du lieu qua hook, hien thi so cong chuc + ty le hoan thanh.
export function DepartmentStatsTable(): ReactElement {
  const { stats, isLoading } = useDepartmentStats();

  return (
    <div className="rounded-card border border-slate-200 bg-white p-5 shadow-card">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-semibold text-ink">Thống kê theo phòng/ban</h3>
      </div>

      {isLoading ? (
        <p className="py-6 text-center text-sm text-ink-muted">Đang tải...</p>
      ) : (
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left text-xs uppercase tracking-wide text-ink-muted">
              <th className="px-3 py-2 font-semibold">Phòng / Ban</th>
              <th className="px-3 py-2 text-center font-semibold">Số công chức</th>
              <th className="px-3 py-2 text-center font-semibold">Hoạt động</th>
              <th className="px-3 py-2 text-center font-semibold">Hoàn thành khóa học</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((stat) => (
              <tr key={stat.name} className="border-b border-slate-50">
                <td className="px-3 py-2.5 text-ink">{stat.name}</td>
                <td className="px-3 py-2.5 text-center text-ink-muted">
                  {formatNumber(stat.staffCount)}
                </td>
                <td className="px-3 py-2.5 text-center text-ink-muted">
                  {formatNumber(stat.activeStaffCount)}
                </td>
                <td className="px-3 py-2.5 text-center">
                  <span className={`font-semibold ${completionColorClass(stat.completionRate)}`}>
                    {stat.completionRate}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}