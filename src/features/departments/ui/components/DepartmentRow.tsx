import type { ReactElement } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { formatNumber } from "@/core/lib/format";
import { completionColorClass, activeRatio } from "../../lib/utils";
import type { Department } from "../../model/types";

interface DepartmentRowProps {
  department: Department;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

// Mot dong phong/ban trong bang quan ly phong/ban.
export function DepartmentRow({ department, onEdit, onDelete }: DepartmentRowProps): ReactElement {
  return (
    <tr className="border-b border-slate-100 text-sm">
      <td className="px-4 py-3 font-medium text-ink">{department.code}</td>
      <td className="px-4 py-3 text-ink">{department.name}</td>
      <td className="px-4 py-3 text-ink-muted">{department.managerName ?? "—"}</td>
      <td className="px-4 py-3 text-center text-ink">
        {formatNumber(department.staffCount)}
        <span className="ml-1 text-xs text-ink-muted">
          ({activeRatio(department.activeStaffCount, department.staffCount)}% hoạt động)
        </span>
      </td>
      <td className="px-4 py-3 text-center">
        <span className={`font-semibold ${completionColorClass(department.completionRate)}`}>
          {department.completionRate}%
        </span>
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center justify-end gap-1">
          <button
            type="button"
            onClick={() => onEdit(department.id)}
            className="rounded-lg p-1.5 text-ink-muted hover:bg-slate-100"
            aria-label="Sửa phòng/ban"
          >
            <Pencil size={16} />
          </button>
          <button
            type="button"
            onClick={() => onDelete(department.id)}
            className="rounded-lg p-1.5 text-red-500 hover:bg-red-50"
            aria-label="Xóa phòng/ban"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
}