import type { ReactElement } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./routes";
import { ProtectedRoute } from "./guards";
import { AppShell } from "@/core/ui/layout/AppShell";

// Cac nhom route theo module
import { authRoutes } from "@/features/auth/router";
import { dashboardRoutes } from "@/features/dashboard/router";
import { learningRoutes } from "@/features/learning/router";
import { progressRoutes } from "@/features/progress/router";
import { quizRoutes } from "@/features/quiz/router";
import { notificationRoutes } from "@/features/notifications/router";
import { certificateRoutes } from "@/features/certificates/router";
import { usersRoutes } from "@/features/users/router";
import { courseRoutes } from "@/features/courses/router";
import { departmentRoutes } from "@/features/departments/router";
import { roleRoutes } from "@/features/roles/router";
import { questionBankRoutes } from "@/features/question-bank/router";
import { reportRoutes } from "@/features/reports/router";
import { settingsRoutes } from "@/features/settings/router";

// Master router: dang ky toan bo route cua he thong.
// - Route cong khai (login) nam ngoai AppShell.
// - Cac route con lai duoc boc trong ProtectedRoute + AppShell (sidebar + topbar).
export function AppRouter(): ReactElement {
  return (
    <Routes>
      {/* Cong khai: dang nhap */}
      {authRoutes()}

      {/* Khu vuc can dang nhap, dung chung khung AppShell */}
      <Route
        element={
          <ProtectedRoute>
            <AppShell />
          </ProtectedRoute>
        }
      >
        {/* Khu vuc hoc vien */}
        {dashboardRoutes()}
        {learningRoutes()}
        {progressRoutes()}
        {quizRoutes()}
        {notificationRoutes()}
        {certificateRoutes()}

        {/* Khu vuc quan tri */}
        {usersRoutes()}
        {courseRoutes()}
        {departmentRoutes()}
        {roleRoutes()}
        {questionBankRoutes()}
        {reportRoutes()}
        {settingsRoutes()}
      </Route>

      {/* Khong khop route nao: ve trang chu */}
      <Route path={ROUTES.notFound} element={<Navigate to={ROUTES.home} replace />} />
    </Routes>
  );
}