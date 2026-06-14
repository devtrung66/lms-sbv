import type { ReactElement } from "react";
import { Route } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import { UserListPage } from "./ui/pages/List";
import { UserDetailPage } from "./ui/pages/Detail";
import { UserFormPage } from "./ui/pages/Form";

// Nhom route cua module users (khu vuc quan tri).
// Route tinh khong co, nhung dat detail (:userId) sau list de ro rang.
export function usersRoutes(): ReactElement[] {
  return [
    <Route key="users-list" path={ROUTES.users} element={<UserListPage />} />,
    <Route key="users-detail" path={ROUTES.userDetail} element={<UserDetailPage />} />,
  ];
}