import type { ReactElement } from "react";
import { Route } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import { LearnerHomePage } from "./ui/pages/LearnerHome";
import { AdminDashboardPage } from "./ui/pages/AdminDashboard";

// Nhom route cua module dashboard.
// Trang chu (/) la dashboard hoc vien; dashboard quan tri o duong rieng.
export function dashboardRoutes(): ReactElement[] {
  return [
    <Route key="learner-home" path={ROUTES.home} element={<LearnerHomePage />} />,
    <Route key="admin-dashboard" path={ROUTES.adminDashboard} element={<AdminDashboardPage />} />,
  ];
}