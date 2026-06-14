import type { Role } from "../model/types";

// Cac tien ich nho rieng cho module roles.

// Dem so quyen cua mot vai tro
export function countPermissions(role: Role): number {
  return role.permissionIds.length;
}

// Kiem tra co the xoa vai tro hay khong (vai tro he thong va vai tro
// dang co nguoi dung thi khong nen xoa)
export function canDeleteRole(role: Role): boolean {
  return !role.isSystem && role.userCount === 0;
}

// Tao cau mo ta ngan ve vai tro
export function describeRole(role: Role): string {
  return `${role.permissionIds.length} quyền · ${role.userCount} người dùng`;
}