import { useState, useEffect, type ReactElement } from "react";
import { X, Save } from "lucide-react";
import { departmentFormSchema } from "../../model/schemas";
import { useDepartmentMutation } from "../../hooks/useDepartmentMutation";
import { useDepartmentStore } from "../../state/store";
import type { DepartmentFormValues } from "../../model/types";

// Gia tri form rong ban dau
const EMPTY: DepartmentFormValues = { name: "", code: "", managerName: "" };

// Hop thoai tao/sua phong/ban.
export function DepartmentFormModal(): ReactElement | null {
  const formOpen = useDepartmentStore((state) => state.formOpen);
  const editingId = useDepartmentStore((state) => state.editingId);
  const closeForm = useDepartmentStore((state) => state.closeForm);
  const { create, update } = useDepartmentMutation();
  const [values, setValues] = useState<DepartmentFormValues>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof DepartmentFormValues, string>>>({});

  // Reset form khi mo de tao moi
  useEffect(() => {
    if (formOpen && !editingId) {
      setValues(EMPTY);
      setErrors({});
    }
  }, [formOpen, editingId]);

  if (!formOpen) return null;

  // Cap nhat mot truong
  function setField<K extends keyof DepartmentFormValues>(
    key: K,
    value: DepartmentFormValues[K]
  ): void {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  // Luu form
  async function handleSave(): Promise<void> {
    const result = departmentFormSchema.safeParse(values);
    if (!result.success) {
      const next: Partial<Record<keyof DepartmentFormValues, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof DepartmentFormValues;
        if (field && !next[field]) next[field] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    if (editingId) {
      await update.mutateAsync({ id: editingId, values });
    } else {
      await create.mutateAsync(values);
    }
  }

  const saving = create.isPending || update.isPending;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-card bg-white p-6 shadow-card">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-ink">
            {editingId ? "Sửa phòng/ban" : "Thêm phòng/ban"}
          </h2>
          <button type="button" onClick={closeForm} className="rounded-lg p-1 text-ink-muted hover:bg-slate-100">
            <X size={18} />
          </button>
        </div>

        <div className="space-y-4">
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-ink">Tên phòng/ban</span>
            <input
              value={values.name}
              onChange={(e) => setField("name", e.target.value)}
              className="form-input"
            />
            {errors.name && <span className="mt-1 block text-xs text-danger">{errors.name}</span>}
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-medium text-ink">Mã phòng/ban</span>
            <input
              value={values.code}
              onChange={(e) => setField("code", e.target.value)}
              className="form-input"
            />
            {errors.code && <span className="mt-1 block text-xs text-danger">{errors.code}</span>}
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-medium text-ink">Trưởng phòng (tùy chọn)</span>
            <input
              value={values.managerName ?? ""}
              onChange={(e) => setField("managerName", e.target.value)}
              className="form-input"
            />
          </label>
        </div>

        <div className="mt-6 flex justify-end gap-2">
          <button
            type="button"
            onClick={closeForm}
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm text-ink hover:bg-slate-50"
          >
            Hủy
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600 disabled:opacity-60"
          >
            <Save size={16} /> {saving ? "Đang lưu..." : "Lưu"}
          </button>
        </div>
      </div>
    </div>
  );
}