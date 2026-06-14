import type { UserStatus } from "./types";
import type { UserRole } from "@/app/router/guards";
import type { SelectOption } from "@/core/model/common";

// Nhan hien thi trang thai tai khoan (tieng Viet co dau)
export const STATUS_LABELS: Record<UserStatus, string> = {
  active: "Hoạt động",
  inactive: "Chưa kích hoạt",
  locked: "Đã khóa",
};

// Mau sac trang thai dung cho the/badge (lop mau Tailwind)
export const STATUS_COLORS: Record<UserStatus, string> = {
  active: "bg-green-50 text-green-700",
  inactive: "bg-amber-50 text-amber-700",
  locked: "bg-red-50 text-red-700",
};

// Nhan hien thi vai tro nguoi dung
export const ROLE_LABELS: Record<UserRole, string> = {
  admin: "Quản trị viên",
  instructor: "Giảng viên",
  manager: "Trưởng phòng",
  learner: "Học viên",
};

// Lua chon trang thai cho bo loc
export const STATUS_OPTIONS: SelectOption<UserStatus>[] = [
  { label: STATUS_LABELS.active, value: "active" },
  { label: STATUS_LABELS.inactive, value: "inactive" },
  { label: STATUS_LABELS.locked, value: "locked" },
];

// Lua chon vai tro cho bo loc
export const ROLE_OPTIONS: SelectOption<UserRole>[] = [
  { label: ROLE_LABELS.admin, value: "admin" },
  { label: ROLE_LABELS.instructor, value: "instructor" },
  { label: ROLE_LABELS.manager, value: "manager" },
  { label: ROLE_LABELS.learner, value: "learner" },
];