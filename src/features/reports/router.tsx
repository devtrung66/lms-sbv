import type { ReactElement } from "react";
import { Route } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import { ReportOverviewPage } from "./ui/pages/Overview";

// Nhom route cua module reports (khu vuc quan tri).
export function reportRoutes(): ReactElement[] {
  return [
    <Route key="reports" path={ROUTES.reports} element={<ReportOverviewPage />} />,
  ];
}