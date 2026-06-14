import { useNavigate, useLocation } from "react-router-dom";
import { authActions } from "../state/actions";
import { useAuthStore } from "../state/store";
import { ROUTES } from "@/app/router/routes";
import type { LoginCredentials } from "../model/types";

// Vi tri ma nguoi dung dinh den truoc khi bi chuyen ve login
interface LocationState {
  from?: { pathname: string };
}

// Hook cau noi cho form dang nhap: goi action + dieu huong sau khi thanh cong.
export function useLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const submitting = useAuthStore((state) => state.submitting);
  const error = useAuthStore((state) => state.error);

  // Thuc hien dang nhap, neu thanh cong thi quay lai trang dinh den (hoac trang chu)
  async function submit(credentials: LoginCredentials): Promise<void> {
    const success = await authActions.login(credentials);
    if (success) {
      const state = location.state as LocationState | null;
      const redirectTo = state?.from?.pathname ?? ROUTES.home;
      navigate(redirectTo, { replace: true });
    }
  }

  return { submit, submitting, error };
}