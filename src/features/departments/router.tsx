import type { ReactElement } from "react";
import { Route } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import { DepartmentListPage } from "./ui/pages/List";

// Nhom route cua module departments (khu vuc quan tri).
export function departmentRoutes(): ReactElement[] {
  return [
    <Route key="departments" path={ROUTES.departments} element={<DepartmentListPage />} />,
  ];
}