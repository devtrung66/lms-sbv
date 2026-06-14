import type { ReactElement } from "react";
import { Route } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import { MyCoursesPage } from "./ui/pages/MyCourses";
import { CourseRoomPage } from "./ui/pages/CourseRoom";

// Nhom route cua module learning (khu vuc hoc vien).
export function learningRoutes(): ReactElement[] {
  return [
    <Route key="my-courses" path={ROUTES.myCourses} element={<MyCoursesPage />} />,
    <Route key="course-room" path={ROUTES.courseRoom} element={<CourseRoomPage />} />,
  ];
}