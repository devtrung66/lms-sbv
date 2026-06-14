import type { UserRole } from "@/app/router/guards";
import type { PaginationParams } from "@/core/model/common";

// Trang thai tai khoan cong chuc
export type UserStatus = "active" | "inactive" | "locked";

// Thong tin cong chuc hien thi trong danh sach va chi tiet
export interface StaffUser {
  id: string;
  // Ma cong chuc, vd "CB001"
  staffCode: string;
  fullName: string;
  email: string;
  phone?: string;
  // Phong/ban dang cong tac
  department: string;
  // Chuc vu, vd "Chuyên viên chính"
  position: string;
  role: UserRole;
  status: UserStatus;
  avatarUrl?: string;
  // Thoi diem tao tai khoan (ISO string)
  createdAt: string;
}

// Thong ke tong quan hien thi tren cac the dau trang ( anh 2)
export interface UserStats {
  total: number;
  active: number;
  inactive: number;
  locked: number;
  departmentCount: number;
}

// Bo loc danh sach cong chuc
export interface UserFilters extends PaginationParams {
  department?: string;
  role?: UserRole;
  status?: UserStatus;
}

// Du lieu tao moi / cap nhat mot cong chuc
export interface UserFormValues {
  staffCode: string;
  fullName: string;
  email: string;
  phone?: string;
  department: string;
  position: string;
  role: UserRole;
}