import type { UserRole } from "@/app/router/guards";
import type { Paginated } from "@/core/model/common";
import type { StaffUser, UserStats, UserStatus } from "../model/types";
import type { RawStaffUser, RawUserList, RawUserStats } from "../api/queries";

// Chuyen vai tro dang chuoi sang kieu UserRole co kiem soat
function mapRole(raw: string): UserRole {
  const value = raw.toLowerCase();
  if (value === "admin") return "admin";
  if (value === "instructor" || value === "giang_vien") return "instructor";
  if (value === "manager" || value === "truong_phong") return "manager";
  return "learner";
}

// Chuyen trang thai dang chuoi sang kieu UserStatus
function mapStatus(raw: string): UserStatus {
  const value = raw.toLowerCase();
  if (value === "active") return "active";
  if (value === "locked") return "locked";
  return "inactive";
}

// Mapping mot cong chuc: raw (snake_case) -> model (camelCase)
export function toStaffUser(raw: RawStaffUser): StaffUser {
  return {
    id: raw.id,
    staffCode: raw.staff_code,
    fullName: raw.full_name,
    email: raw.email,
    phone: raw.phone,
    department: raw.department,
    position: raw.position,
    role: mapRole(raw.role),
    status: mapStatus(raw.status),
    avatarUrl: raw.avatar_url,
    createdAt: raw.created_at,
  };
}

// Mapping danh sach phan trang
export function toUserList(raw: RawUserList): Paginated<StaffUser> {
  return {
    items: raw.items.map(toStaffUser),
    total: raw.total,
    page: raw.page,
    pageSize: raw.page_size,
  };
}

// Mapping thong ke tong quan
export function toUserStats(raw: RawUserStats): UserStats {
  return {
    total: raw.total,
    active: raw.active,
    inactive: raw.inactive,
    locked: raw.locked,
    departmentCount: raw.department_count,
  };
}