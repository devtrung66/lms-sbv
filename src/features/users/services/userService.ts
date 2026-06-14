import {
  fetchUserList,
  fetchUserStats,
  fetchUserDetail,
} from "../api/queries";
import {
  createUser,
  updateUser,
  deleteUser,
  lockUser,
  unlockUser,
} from "../api/mutations";
import { toStaffUser, toUserList, toUserStats } from "../adapters/userAdapter";
import type { Paginated } from "@/core/model/common";
import type { StaffUser, UserStats, UserFilters, UserFormValues } from "../model/types";

// Tang dich vu nghiep vu cong chuc: ket noi API + adapter.
// UI/hook chi goi qua day, nhan ve model da chuan hoa.
export const userService = {
  // Lay danh sach cong chuc theo bo loc
  async getList(filters: UserFilters): Promise<Paginated<StaffUser>> {
    const raw = await fetchUserList(filters);
    return toUserList(raw);
  },

  // Lay thong ke tong quan cho cac the dau trang
  async getStats(): Promise<UserStats> {
    const raw = await fetchUserStats();
    return toUserStats(raw);
  },

  // Lay chi tiet mot cong chuc
  async getDetail(id: string): Promise<StaffUser> {
    const raw = await fetchUserDetail(id);
    return toStaffUser(raw);
  },

  // Tao moi cong chuc
  async create(values: UserFormValues): Promise<StaffUser> {
    const raw = await createUser(values);
    return toStaffUser(raw);
  },

  // Cap nhat cong chuc
  async update(id: string, values: UserFormValues): Promise<StaffUser> {
    const raw = await updateUser(id, values);
    return toStaffUser(raw);
  },

  // Xoa cong chuc
  remove(id: string): Promise<void> {
    return deleteUser(id);
  },

  // Khoa tai khoan
  lock(id: string): Promise<void> {
    return lockUser(id);
  },

  // Mo khoa tai khoan
  unlock(id: string): Promise<void> {
    return unlockUser(id);
  },
};