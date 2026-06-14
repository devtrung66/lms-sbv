import { useUserStore } from "./store";
import type { UserFilters } from "../model/types";

// Cac action thao tac nhanh tren trang thai giao dien,
// goi duoc tu bat ky dau ma khong can hook.
export const userActions = {
  // Doi tu khoa tim kiem
  search(keyword: string): void {
    useUserStore.getState().setFilters({ search: keyword });
  },

  // Loc theo phong/ban
  filterByDepartment(department: string | undefined): void {
    useUserStore.getState().setFilters({ department });
  },

  // Loc theo vai tro
  filterByRole(role: UserFilters["role"]): void {
    useUserStore.getState().setFilters({ role });
  },

  // Loc theo trang thai
  filterByStatus(status: UserFilters["status"]): void {
    useUserStore.getState().setFilters({ status });
  },

  // Chuyen trang
  goToPage(page: number): void {
    useUserStore.getState().setFilters({ page });
  },

  // Doi so dong moi trang
  changePageSize(pageSize: number): void {
    useUserStore.getState().setFilters({ pageSize, page: 1 });
  },

  // Chon cong chuc de xem chi tiet
  selectUser(id: string | null): void {
    useUserStore.getState().setSelectedUser(id);
  },

  // Xoa toan bo bo loc
  clearFilters(): void {
    useUserStore.getState().resetFilters();
  },
};