import type { UserRole } from "@/app/router/guards";
import { useAuthStore } from "./store";

// Cac selector doc trang thai auth mot cach co kiem soat,
// giup UI chi lay dung phan can thiet (tranh re-render thua).

// Co dang dang nhap hay khong
export function useIsAuthenticated(): boolean {
  return useAuthStore((state) => state.user !== null);
}

// Vai tro nguoi dung hien tai (null neu chua dang nhap)
export function useCurrentRole(): UserRole | null {
  return useAuthStore((state) => state.user?.role ?? null);
}

// Kiem tra nguoi dung co thuoc nhom quan tri hay khong
export function useIsAdminArea(): boolean {
  return useAuthStore((state) => {
    const role = state.user?.role;
    return role === "admin" || role === "manager" || role === "instructor";
  });
}