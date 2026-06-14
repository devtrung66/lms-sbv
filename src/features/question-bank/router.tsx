import type { ReactElement } from "react";
import { Route } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import { QuestionBankListPage } from "./ui/pages/List";

// Nhom route cua module question-bank (khu vuc quan tri).
export function questionBankRoutes(): ReactElement[] {
  return [
    <Route key="question-bank" path={ROUTES.questionBank} element={<QuestionBankListPage />} />,
  ];
}