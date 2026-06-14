import { useNavigate } from "react-router-dom";
import { authActions } from "../state/actions";
import { useAuthStore } from "../state/store";
import { ROUTES } from "@/app/router/routes";

// Hook xu ly dang nhap bang Google Workspace.
// Nhan idToken tu luong OAuth cua Google roi chuyen cho action xu ly.
export function useGoogleAuth() {
  const navigate = useNavigate();
  const submitting = useAuthStore((state) => state.submitting);

  // Goi sau khi nhan duoc idToken tu Google Identity Services
  async function signInWithToken(idToken: string): Promise<void> {
    const success = await authActions.loginWithGoogle({ idToken });
    if (success) {
      navigate(ROUTES.home, { replace: true });
    }
  }

  return { signInWithToken, submitting };
}