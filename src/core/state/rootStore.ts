import { create } from "zustand";

// Trang thai toan cuc cap ung dung (khong thuoc rieng module nao).
// Cac module co store rieng; day chi giu thong tin xuyen suot:
// trang thai sidebar, thong bao toast, che do giao dien...

interface RootState {
  // Sidebar dang mo rong hay thu gon
  sidebarCollapsed: boolean;
  toggleSidebar: () => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
}

export const useRootStore = create<RootState>((set) => ({
  sidebarCollapsed: false,
  toggleSidebar: () =>
    set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
  setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),
}));