import type { ReactElement } from "react";
import { Route } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import { NotificationsPage } from "./ui/pages/NotificationsPage";

// Nhom route cua module notifications.
export function notificationRoutes(): ReactElement[] {
  return [
    <Route key="notifications" path={ROUTES.notifications} element={<NotificationsPage />} />,
  ];
}