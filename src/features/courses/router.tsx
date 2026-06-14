import type { ReactElement } from "react";
import { Route } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import { CourseListPage } from "./ui/pages/List";
import { CourseDetailPage } from "./ui/pages/Detail";
import { CourseFormPage } from "./ui/pages/Form";

// Nhom route cua module courses (khu vuc quan tri).
// QUAN TRONG: route tinh "tao-moi" phai dat TRUOC route dong ":courseId",
// neu khong "tao-moi" se bi hieu nham la mot courseId.
export function courseRoutes(): ReactElement[] {
  return [
    <Route key="course-list" path={ROUTES.courses} element={<CourseListPage />} />,
    <Route key="course-create" path={ROUTES.courseCreate} element={<CourseFormPage />} />,
    <Route key="course-detail" path={ROUTES.courseForm} element={<CourseDetailPage />} />,
  ];
}