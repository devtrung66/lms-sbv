import { useState, type ReactElement } from "react";
import { Plus } from "lucide-react";
import { PageHeader } from "@/core/ui/layout/PageHeader";
import { ROUTES } from "@/app/router/routes";
import { useRoleList } from "../../hooks/useRoleList";
import { useSelectedRoleId } from "../../state/selectors";
import { RoleTable } from "../modules/RoleTable";
import { PermissionMatrix } from "../modules/PermissionMatrix";
import { RoleFormModal } from "../modules/RoleFormModal";

// Trang phan quyen: danh sach vai tro (trai) + ma tran quyen (phai).
export function RoleListPage(): ReactElement {
  const { roles, permissions } = useRoleList();
  const selectedId = useSelectedRoleId();
  const [formOpen, setFormOpen] = useState(false);

  // Vai tro dang chon de hien ma tran quyen
  const selectedRole = roles.find((r) => r.id === selectedId);

  return (
    <div>
      <PageHeader
        title="Phân quyền"
        breadcrumb={[
          { label: "Trang chủ", to: ROUTES.home },
          { label: "Quản trị" },
          { label: "Phân quyền" },
        ]}
        actions={
          <button
            type="button"
            onClick={() => setFormOpen(true)}
            className="flex items-center gap-2 rounded-lg bg-brand-500 px-3 py-2 text-sm font-medium text-white hover:bg-brand-600"
          >
            <Plus size={16} /> Thêm vai trò
          </button>
        }
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[320px_1fr]">
        {/* Danh sach vai tro */}
        <div>
          <RoleTable />
        </div>

        {/* Ma tran quyen cua vai tro dang chon */}
        {selectedRole ? (
          <PermissionMatrix role={selectedRole} permissions={permissions} />
        ) : (
          <div className="flex items-center justify-center rounded-card border border-dashed border-slate-200 p-10 text-sm text-ink-muted">
            Chọn một vai trò để xem và chỉnh sửa quyền
          </div>
        )}
      </div>

      <RoleFormModal open={formOpen} onClose={() => setFormOpen(false)} />
    </div>
  );
}