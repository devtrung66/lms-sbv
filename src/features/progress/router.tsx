import type { ReactElement } from "react";
import { Route } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import { ProgressListPage } from "./ui/pages/List";

// Nhom route cua module progress (khu vuc hoc vien).
export function progressRoutes(): ReactElement[] {
  return [
    <Route key="progress-list" path={ROUTES.progress} element={<ProgressListPage />} />,
  ];
}