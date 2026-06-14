import type { ReactElement } from "react";
import { Route } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import { SettingsPage } from "./ui/pages/Settings";

// Nhom route cua module settings (khu vuc quan tri).
export function settingsRoutes(): ReactElement[] {
  return [
    <Route key="settings" path={ROUTES.settings} element={<SettingsPage />} />,
  ];
}