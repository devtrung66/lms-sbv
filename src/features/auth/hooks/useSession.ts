import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authActions } from "../state/actions";
import { useAuthStore } from "../state/store";
import { ROUTES } from "@/app/router/routes";

// Hook quan ly phien lam viec o cap ung dung.
// Goi mot lan o khung sau dang nhap de khoi phuc phien khi mo lai trang.
export function useSession() {
  const user = useAuthStore((state) => state.user);
  const initializing = useAuthStore((state) => state.initializing);
  const navigate = useNavigate();

  // Khoi phuc phien mot lan khi component goc duoc gan
  useEffect(() => {
    void authActions.restore();
  }, []);

  // Dang xuat va dua ve trang dang nhap
  async function signOut(): Promise<void> {
    await authActions.logout();
    navigate(ROUTES.login, { replace: true });
  }

  return { user, initializing, signOut };
}