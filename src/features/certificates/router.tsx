import type { ReactElement } from "react";
import { Route } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import { CertificatesPage } from "./ui/pages/Certificates";

export function certificateRoutes(): ReactElement[] {
  return [
    <Route key="certificates" path={ROUTES.certificates} element={<CertificatesPage />} />,
  ];
}