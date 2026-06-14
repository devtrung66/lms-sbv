import { create } from "zustand";

// Trang thai giao dien phan quyen: vai tro dang chon + thay doi quyen chua luu.
interface RoleUiState {
  // Id vai tro dang chon de chinh sua quyen
  selectedRoleId: string | null;
  // Danh sach quyen dang chinh (truoc khi luu), theo roleId
  draftPermissions: Record<string, string[]>;

  selectRole: (id: string | null) => void;
  setDraft: (roleId: string, permissionIds: string[]) => void;
  clearDraft: (roleId: string) => void;
}

export const useRoleStore = create<RoleUiState>((set) => ({
  selectedRoleId: null,
  draftPermissions: {},

  selectRole: (id) => set({ selectedRoleId: id }),

  // Luu tam danh sach quyen dang chinh cho mot vai tro
  setDraft: (roleId, permissionIds) =>
    set((state) => ({
      draftPermissions: { ...state.draftPermissions, [roleId]: permissionIds },
    })),

  // Xoa ban nhap sau khi da luu len backend
  clearDraft: (roleId) =>
    set((state) => {
      const next = { ...state.draftPermissions };
      delete next[roleId];
      return { draftPermissions: next };
    }),
}));