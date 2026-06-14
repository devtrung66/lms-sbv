import type { Permission } from "./types";

// Danh muc quyen mac dinh trong he thong, gom theo nhom.
// Backend co the bo sung them; day la tap co ban de hien thi ma tran.
export const PERMISSION_CATALOG: Permission[] = [
  // Nhom nguoi dung
  { id: "users.view", label: "Xem người dùng", group: "Người dùng" },
  { id: "users.create", label: "Thêm người dùng", group: "Người dùng" },
  { id: "users.update", label: "Sửa người dùng", group: "Người dùng" },
  { id: "users.delete", label: "Xóa người dùng", group: "Người dùng" },
  // Nhom khoa hoc
  { id: "courses.view", label: "Xem khóa học", group: "Khóa học" },
  { id: "courses.create", label: "Tạo khóa học", group: "Khóa học" },
  { id: "courses.update", label: "Sửa khóa học", group: "Khóa học" },
  { id: "courses.publish", label: "Xuất bản khóa học", group: "Khóa học" },
  // Nhom ngan hang cau hoi
  { id: "questions.view", label: "Xem ngân hàng câu hỏi", group: "Câu hỏi" },
  { id: "questions.manage", label: "Quản lý câu hỏi", group: "Câu hỏi" },
  // Nhom bao cao
  { id: "reports.view", label: "Xem báo cáo", group: "Báo cáo" },
  { id: "reports.export", label: "Xuất báo cáo", group: "Báo cáo" },
  // Nhom he thong
  { id: "settings.manage", label: "Quản lý cài đặt hệ thống", group: "Hệ thống" },
  { id: "roles.manage", label: "Quản lý phân quyền", group: "Hệ thống" },
];

// Gom danh muc quyen theo nhom de hien thi ma tran
export function groupPermissions(): Record<string, Permission[]> {
  return PERMISSION_CATALOG.reduce<Record<string, Permission[]>>((acc, perm) => {
    (acc[perm.group] ??= []).push(perm);
    return acc;
  }, {});
}