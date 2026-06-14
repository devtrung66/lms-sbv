import { create } from "zustand";
import type { AuthUser } from "../model/types";

// Trang thai xac thuc toan cuc: nguoi dung hien tai + trang thai tai.
// UI dang ky vao store nay de tu cap nhat khi dang nhap/dang xuat.
interface AuthState {
  user: AuthUser | null;
  // Dang trong qua trinh khoi phuc phien (kiem tra token luc mo app)
  initializing: boolean;
  // Dang xu ly dang nhap
  submitting: boolean;
  // Thong bao loi gan nhat (tieng Viet co dau)
  error: string | null;

  setUser: (user: AuthUser | null) => void;
  setInitializing: (value: boolean) => void;
  setSubmitting: (value: boolean) => void;
  setError: (message: string | null) => void;
  reset: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  initializing: true,
  submitting: false,
  error: null,

  setUser: (user) => set({ user }),
  setInitializing: (value) => set({ initializing: value }),
  setSubmitting: (value) => set({ submitting: value }),
  setError: (message) => set({ error: message }),
  reset: () => set({ user: null, submitting: false, error: null }),
}));