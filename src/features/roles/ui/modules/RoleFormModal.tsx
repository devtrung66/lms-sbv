import { useState, type ReactElement } from "react";
import { X, Save } from "lucide-react";
import { roleFormSchema } from "../../model/schemas";
import { useRoleMutation } from "../../hooks/useRoleMutation";
import type { RoleFormValues } from "../../model/types";

interface RoleFormModalProps {
  open: boolean;
  onClose: () => void;
}

// Gia tri form rong ban dau (vai tro moi chua co quyen)
const EMPTY: RoleFormValues = { code: "", name: "", description: "", permissionIds: [] };

// Hop thoai tao vai tro moi (quyen duoc gan sau qua ma tran).
export function RoleFormModal({ open, onClose }: RoleFormModalProps): ReactElement | null {
  const { create } = useRoleMutation();
  const [values, setValues] = useState<RoleFormValues>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof RoleFormValues, string>>>({});

  if (!open) return null;

  function setField<K extends keyof RoleFormValues>(key: K, value: RoleFormValues[K]): void {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSave(): Promise<void> {
    const result = roleFormSchema.safeParse(values);
    if (!result.success) {
      const next: Partial<Record<keyof RoleFormValues, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof RoleFormValues;
        if (field && !next[field]) next[field] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    await create.mutateAsync(values);
    setValues(EMPTY);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-card bg-white p-6 shadow-card">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-ink">Thêm vai trò</h2>
          <button type="button" onClick={onClose} className="rounded-lg p-1 text-ink-muted hover:bg-slate-100">
            <X size={18} />
          </button>
        </div>

        <div className="space-y-4">
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-ink">Tên vai trò</span>
            <input value={values.name} onChange={(e) => setField("name", e.target.value)} className="form-input" />
            {errors.name && <span className="mt-1 block text-xs text-danger">{errors.name}</span>}
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-medium text-ink">Mã vai trò</span>
            <input
              value={values.code}
              onChange={(e) => setField("code", e.target.value)}
              placeholder="vd: department_head"
              className="form-input"
            />
            {errors.code && <span className="mt-1 block text-xs text-danger">{errors.code}</span>}
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-medium text-ink">Mô tả (tùy chọn)</span>
            <textarea
              value={values.description ?? ""}
              onChange={(e) => setField("description", e.target.value)}
              rows={2}
              className="form-input resize-none"
            />
          </label>
        </div>

        <div className="mt-6 flex justify-end gap-2">
          <button type="button" onClick={onClose} className="rounded-lg border border-slate-200 px-4 py-2 text-sm text-ink hover:bg-slate-50">
            Hủy
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={create.isPending}
            className="flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600 disabled:opacity-60"
          >
            <Save size={16} /> {create.isPending ? "Đang lưu..." : "Lưu"}
          </button>
        </div>
      </div>
    </div>
  );
}