import type { StaffUser, UserStats } from "../model/types";

// Cac tien ich nho rieng cho module users.

// Tinh ti le phan tram cua mot phan so tren tong (lam tron 1 chu so)
export function toRatio(part: number, total: number): number {
  if (total === 0) return 0;
  return part / total;
}

// Tao cau tom tat thong ke de hien thi phu (vd duoi the)
export function describeStats(stats: UserStats): string {
  const activeRatio = toRatio(stats.active, stats.total);
  const percent = new Intl.NumberFormat("vi-VN", {
    style: "percent",
    maximumFractionDigits: 1,
  }).format(activeRatio);
  return `${percent} đang hoạt động`;
}

// Sap xep cong chuc theo ma cong chuc tang dan
export function sortByStaffCode(users: StaffUser[]): StaffUser[] {
  return [...users].sort((a, b) => a.staffCode.localeCompare(b.staffCode));
}