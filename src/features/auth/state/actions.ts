import { authService } from "../services/authService";
import { sessionService } from "../services/sessionService";
import { tokenService } from "../services/tokenService";
import { useAuthStore } from "./store";
import { AUTH_MESSAGES } from "../model/constants";
import type { LoginCredentials, GoogleAuthPayload } from "../model/types";

// Cac action dieu phoi: goi service roi cap nhat store.
// Tach khoi hooks de co the goi tu bat ky dau (vd: khoi phuc phien luc mo app).

// Trich xuat thong bao loi than thien tu loi bat ki
function resolveErrorMessage(error: unknown): string {
  if (error instanceof Error && error.message) {
    return AUTH_MESSAGES.loginFailed;
  }
  return AUTH_MESSAGES.loginFailed;
}

export const authActions = {
  // Dang nhap bang email + mat khau
  async login(credentials: LoginCredentials): Promise<boolean> {
    const store = useAuthStore.getState();
    store.setSubmitting(true);
    store.setError(null);
    try {
      const user = await authService.login(credentials);
      store.setUser(user);
      return true;
    } catch (error) {
      store.setError(resolveErrorMessage(error));
      return false;
    } finally {
      store.setSubmitting(false);
    }
  },

  // Dang nhap bang Google Workspace
  async loginWithGoogle(payload: GoogleAuthPayload): Promise<boolean> {
    const store = useAuthStore.getState();
    store.setSubmitting(true);
    store.setError(null);
    try {
      const user = await authService.loginWithGoogle(payload);
      store.setUser(user);
      return true;
    } catch (error) {
      store.setError(resolveErrorMessage(error));
      return false;
    } finally {
      store.setSubmitting(false);
    }
  },

  // Khoi phuc phien khi mo lai app: con token thi lay lai thong tin nguoi dung
  async restore(): Promise<void> {
    const store = useAuthStore.getState();
    store.setInitializing(true);
    try {
      if (tokenService.hasToken() && !tokenService.isExpired()) {
        const user = await sessionService.getCurrentUser();
        store.setUser(user);
      }
    } catch {
      tokenService.clear();
      store.setUser(null);
    } finally {
      store.setInitializing(false);
    }
  },

  // Dang xuat
  async logout(): Promise<void> {
    await authService.logout();
    useAuthStore.getState().reset();
  },
};