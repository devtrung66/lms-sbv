import { useRoleStore } from "./store";
import { permissionService } from "../services/permissionService";

// Cac action thao tac nhanh tren trang thai phan quyen.
export const roleActions = {
  // Chon vai tro de chinh sua quyen
  selectRole(id: string | null): void {
    useRoleStore.getState().selectRole(id);
  },

  // Khoi tao ban nhap quyen cho vai tro tu danh sach hien tai
  initDraft(roleId: string, permissionIds: string[]): void {
    useRoleStore.getState().setDraft(roleId, permissionIds);
  },

  // Bat/tat mot quyen trong ban nhap
  togglePermission(roleId: string, permissionId: string): void {
    const current = useRoleStore.getState().draftPermissions[roleId] ?? [];
    const next = permissionService.togglePermission(current, permissionId);
    useRoleStore.getState().setDraft(roleId, next);
  },

  // Xoa ban nhap sau khi luu
  clearDraft(roleId: string): void {
    useRoleStore.getState().clearDraft(roleId);
  },
};