import type { ReactElement } from "react";
import { useDepartmentList } from "../../hooks/useDepartmentList";
import { useDepartmentMutation } from "../../hooks/useDepartmentMutation";
import { useDepartmentStore } from "../../state/store";
import { DepartmentRow } from "../components/DepartmentRow";

// Tieu de cot bang quan ly phong/ban
const COLUMNS = ["Mã", "Tên phòng/ban", "Trưởng phòng", "Số công chức", "Hoàn thành", "Thao tác"];

// Bang quan ly phong/ban: tu lay du lieu, ho tro sua/xoa.
export function DepartmentTable(): ReactElement {
  const { departments, isLoading } = useDepartmentList();
  const { remove } = useDepartmentMutation();
  const openEdit = useDepartmentStore((state) => state.openEdit);

  // Xac nhan truoc khi xoa
  function handleDelete(id: string): void {
    if (window.confirm("Bạn có chắc muốn xóa phòng/ban này?")) {
      void remove.mutateAsync(id);
    }
  }

  return (
    <div className="overflow-x-auto rounded-card border border-slate-200 bg-white shadow-card">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-slate-200 text-left text-xs uppercase tracking-wide text-ink-muted">
            {COLUMNS.map((col) => (
              <th key={col} className="px-4 py-3 font-semibold">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <td colSpan={COLUMNS.length} className="px-4 py-10 text-center text-sm text-ink-muted">
                Đang tải phòng/ban...
              </td>
            </tr>
          )}
          {!isLoading && departments.length === 0 && (
            <tr>
              <td colSpan={COLUMNS.length} className="px-4 py-10 text-center text-sm text-ink-muted">
                Chưa có phòng/ban nào
              </td>
            </tr>
          )}
          {departments.map((department) => (
            <DepartmentRow
              key={department.id}
              department={department}
              onEdit={openEdit}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}