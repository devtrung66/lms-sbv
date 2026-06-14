import type { ReactElement } from "react";
import { Save } from "lucide-react";
import { usePermissionMatrix } from "../../hooks/usePermissionMatrix";
import { permissionService } from "../../services/permissionService";
import type { Permission, Role } from "../../model/types";
import { PermissionCheckbox } from "../components/PermissionCheckbox";

interface PermissionMatrixProps {
  role: Role;
  permissions: Permission[];
}

// Ma tran phan quyen cho mot vai tro: liet ke quyen theo nhom, tich de cap/bo.
export function PermissionMatrix({ role, permissions }: PermissionMatrixProps): ReactElement {
  const { hasPermission, toggle, isDirty, save, isSaving } = usePermissionMatrix(role);

  // Gom quyen theo nhom de hien thi
  const grouped = permissions.reduce<Record<string, Permission[]>>((acc, perm) => {
    (acc[perm.group] ??= []).push(perm);
    return acc;
  }, {});

  return (
    <div className="rounded-card border border-slate-200 bg-white p-5 shadow-card">
      {/* Tieu de + nut luu */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold text-ink">Quyền của vai trò: {role.name}</h3>
          <p className="text-xs text-ink-muted">Tích vào ô để cấp quyền cho vai trò này</p>
        </div>
        {isDirty && (
          <button
            type="button"
            onClick={() => save()}
            disabled={isSaving || role.isSystem}
            className="flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600 disabled:opacity-60"
          >
            <Save size={16} /> {isSaving ? "Đang lưu..." : "Lưu thay đổi"}
          </button>
        )}
      </div>

      {role.isSystem && (
        <p className="mb-4 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-700">
          Đây là vai trò hệ thống, quyền được cố định và không thể chỉnh sửa.
        </p>
      )}

      {/* Danh sach quyen theo nhom */}
      <div className="space-y-5">
        {Object.entries(grouped).map(([group, perms]) => (
          <div key={group}>
            <p className="mb-2 text-sm font-semibold text-ink-muted">{group}</p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {perms.map((perm) => (
                <label key={perm.id} className="flex items-center gap-3 text-sm text-ink">
                  <PermissionCheckbox
                    checked={hasPermission(perm.id)}
                    onToggle={() => toggle(perm.id)}
                    disabled={role.isSystem}
                  />
                  {perm.label}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}