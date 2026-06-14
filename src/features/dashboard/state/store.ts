import { create } from "zustand";

// Che do dashboard dang xem
export type DashboardView = "learner" | "admin";

// Trang thai giao dien dashboard: che do xem hien tai.
// Nguoi dung co ca hai vai tro (vd admin) co the chuyen qua lai.
interface DashboardUiState {
  view: DashboardView;
  setView: (view: DashboardView) => void;
}

export const useDashboardStore = create<DashboardUiState>((set) => ({
  view: "learner",
  setView: (view) => set({ view }),
}));