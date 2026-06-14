import type { ReactElement, ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getAccessToken } from "@/core/api/interceptors";
import { ROUTES } from "./routes";

// Vai tro nguoi dung trong he thong
export type UserRole = "admin" | "instructor" | "manager" | "learner";

interface ProtectedRouteProps {
  children: ReactNode;
}

// Chan truy cap neu chua dang nhap, chuyen ve trang login
// va ghi nho duong dan dang dinh den de quay lai sau khi dang nhap.
export function ProtectedRoute({ children }: ProtectedRouteProps): ReactElement {
  const location = useLocation();
  const token = getAccessToken();

  if (!token) {
    return <Navigate to={ROUTES.login} state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

interface RoleGuardProps {
  // Cac vai tro duoc phep truy cap
  allow: UserRole[];
  // Vai tro hien tai cua nguoi dung (lay tu session o buoc auth)
  currentRole: UserRole | null;
  children: ReactNode;
}

// Chan truy cap neu vai tro khong nam trong danh sach cho phep.
// Vd: trang quan tri chi danh cho admin/manager/instructor.
export function RoleGuard({
  allow,
  currentRole,
  children,
}: RoleGuardProps): ReactElement {
  if (!currentRole || !allow.includes(currentRole)) {
    return <Navigate to={ROUTES.home} replace />;
  }

  return <>{children}</>;
}