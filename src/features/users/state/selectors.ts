import { useUserStore } from "./store";
import type { UserFilters } from "../model/types";

// Cac selector doc trang thai giao dien cua trang quan tri nguoi dung.

// Lay bo loc hien tai
export function useUserFilters(): UserFilters {
  return useUserStore((state) => state.filters);
}

// Lay id cong chuc dang duoc chon
export function useSelectedUserId(): string | null {
  return useUserStore((state) => state.selectedUserId);
}

// Kiem tra co dang ap dung bo loc nao ngoai phan trang hay khong
export function useHasActiveFilters(): boolean {
  return useUserStore((state) => {
    const { search, department, role, status } = state.filters;
    return Boolean(search || department || role || status);
  });
}