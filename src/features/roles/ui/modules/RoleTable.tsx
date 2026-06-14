import type { ReactElement } from "react";
import { useRoleList } from "../../hooks/useRoleList";
import { useRoleMutation } from "../../hooks/useRoleMutation";
import { roleActions } from "../../state/actions";
import { useSelectedRoleId } from "../../state/selectors";
import { RoleRow } from "../components/RoleRow";

// Danh sach vai tro (cot trai trang phan quyen).
export function RoleTable(): ReactElement {
  const { roles, isLoading } = useRoleList();
  const { remove } = useRoleMutation();
  const selectedId = useSelectedRoleId();

  // Xac nhan truoc khi xoa
  function handleDelete(id: string): void {
    if (window.confirm("Bạn có chắc muốn xóa vai trò này?")) {
      void remove.mutateAsync(id);
    }
  }

  if (isLoading) {
    return <div className="py-10 text-center text-sm text-ink-muted">Đang tải vai trò...</div>;
  }

  return (
    <div className="space-y-2">
      {roles.map((role) => (
        <RoleRow
          key={role.id}
          role={role}
          selected={role.id === selectedId}
          onSelect={roleActions.selectRole}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}