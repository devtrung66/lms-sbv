import { fetchPermissions } from "../api/queries";
import { toPermission } from "../adapters/roleAdapter";
import { PERMISSION_CATALOG, groupPermissions } from "../model/constants";
import type { Permission, Role } from "../model/types";

// Tang dich vu quyen: lay danh muc quyen va tinh toan ma tran.
export const permissionService = {
  // Lay danh muc quyen tu backend; neu loi thi dung danh muc mac dinh.
  async getCatalog(): Promise<Permission[]> {
    try {
      const raws = await fetchPermissions();
      return raws.length > 0 ? raws.map(toPermission) : PERMISSION_CATALOG;
    } catch {
      return PERMISSION_CATALOG;
    }
  },

  // Gom quyen theo nhom (dung danh muc mac dinh)
  getGrouped(): Record<string, Permission[]> {
    return groupPermissions();
  },

  // Kiem tra mot vai tro co mot quyen cu the hay khong
  hasPermission(role: Role, permissionId: string): boolean {
    return role.permissionIds.includes(permissionId);
  },

  // Bat/tat mot quyen cho vai tro, tra ve danh sach quyen moi
  togglePermission(currentIds: string[], permissionId: string): string[] {
    return currentIds.includes(permissionId)
      ? currentIds.filter((id) => id !== permissionId)
      : [...currentIds, permissionId];
  },
};