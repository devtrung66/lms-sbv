import { create } from "zustand";

// Trang thai giao dien trang cai dat: nhom cau hinh dang xem.
interface SettingsUiState {
  // Id nhom cau hinh dang mo (general/quiz/auth/notification)
  activeSection: string;
  setActiveSection: (id: string) => void;
}

export const useSettingsStore = create<SettingsUiState>((set) => ({
  activeSection: "general",
  setActiveSection: (id) => set({ activeSection: id }),
}));