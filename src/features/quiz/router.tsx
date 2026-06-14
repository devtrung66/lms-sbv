import type { ReactElement } from "react";
import { Route } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import { QuizTakePage } from "./ui/pages/Take";
import { QuizResultPage } from "./ui/pages/Result";

// Nhom route cua module quiz (khu vuc hoc vien).
export function quizRoutes(): ReactElement[] {
  return [
    <Route key="quiz-take" path={ROUTES.quizTake} element={<QuizTakePage />} />,
    <Route key="quiz-result" path={ROUTES.quizResult} element={<QuizResultPage />} />,
  ];
}