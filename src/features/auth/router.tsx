import type { ReactElement } from "react";
import { Route } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import { LoginPage } from "./ui/pages/Login";

// Nhom route cua module auth, duoc ghep vao master router.
// Tra ve mang Route de master router chen truc tiep.
export function authRoutes(): ReactElement {
  return <Route path={ROUTES.login} element={<LoginPage />} />;
}