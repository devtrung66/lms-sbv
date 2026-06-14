import { create } from "zustand";

// Trang thai giao dien thong bao: dropdown chuong dang mo hay khong.
interface NotificationUiState {
  dropdownOpen: boolean;
  toggleDropdown: () => void;
  closeDropdown: () => void;
}

export const useNotificationStore = create<NotificationUiState>((set) => ({
  dropdownOpen: false,
  toggleDropdown: () => set((state) => ({ dropdownOpen: !state.dropdownOpen })),
  closeDropdown: () => set({ dropdownOpen: false }),
}));