import { create } from "zustand";

// Trang thai giao dien phong/ban: trang thai form tao/sua.
interface DepartmentUiState {
  // Id phong/ban dang sua (null = tao moi)
  editingId: string | null;
  formOpen: boolean;

  openCreate: () => void;
  openEdit: (id: string) => void;
  closeForm: () => void;
}

export const useDepartmentStore = create<DepartmentUiState>((set) => ({
  editingId: null,
  formOpen: false,

  openCreate: () => set({ editingId: null, formOpen: true }),
  openEdit: (id) => set({ editingId: id, formOpen: true }),
  closeForm: () => set({ formOpen: false, editingId: null }),
}));