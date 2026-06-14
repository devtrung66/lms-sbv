import type { ReactElement } from "react";
import { Route } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import { RoleListPage } from "./ui/pages/List";

// Nhom route cua module roles (khu vuc quan tri).
export function roleRoutes(): ReactElement[] {
  return [
    <Route key="roles" path={ROUTES.roles} element={<RoleListPage />} />,
  ];
}