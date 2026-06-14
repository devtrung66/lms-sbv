import { create } from "zustand";
import { DEFAULT_PAGE_SIZE } from "@/core/lib/constants";
import type { UserFilters } from "../model/types";

// Trang thai giao dien cua trang quan tri nguoi dung:
// bo loc hien tai + cong chuc dang duoc chon de xem chi tiet.
interface UserUiState {
  filters: UserFilters;
  // Id cong chuc dang chon (hien o panel chi tiet ben phai)
  selectedUserId: string | null;

  setFilters: (partial: Partial<UserFilters>) => void;
  resetFilters: () => void;
  setSelectedUser: (id: string | null) => void;
}

// Bo loc mac dinh khi mo trang
const defaultFilters: UserFilters = {
  page: 1,
  pageSize: DEFAULT_PAGE_SIZE,
  search: "",
};

export const useUserStore = create<UserUiState>((set) => ({
  filters: defaultFilters,
  selectedUserId: null,

  // Cap nhat bo loc, tu dua ve trang 1 khi doi dieu kien loc
  setFilters: (partial) =>
    set((state) => ({
      filters: {
        ...state.filters,
        ...partial,
        page: partial.page ?? 1,
      },
    })),
  resetFilters: () => set({ filters: defaultFilters }),
  setSelectedUser: (id) => set({ selectedUserId: id }),
}));