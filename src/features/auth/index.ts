// API cong khai cua module auth.
// Cac module khac chi import tu day, khong dao sau vao cau truc ben trong.

// Hooks dung o tang UI
export { useLogin } from "./hooks/useLogin";
export { useSession } from "./hooks/useSession";
export { useGoogleAuth } from "./hooks/useGoogleAuth";

// State + selector dung o khung dieu huong va guard
export { useAuthStore } from "./state/store";
export {
  useIsAuthenticated,
  useCurrentRole,
  useIsAdminArea,
} from "./state/selectors";
export { authActions } from "./state/actions";

// Kieu du lieu cong khai
export type { AuthUser, Session, LoginCredentials } from "./model/types";
export type { UserRole } from "@/app/router/guards";