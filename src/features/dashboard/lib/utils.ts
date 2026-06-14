import { MAX_RECENT_COURSES, MAX_NOTICES } from "../model/constants";
import type { DashboardCourse, DashboardNotice } from "../model/types";

// Cac tien ich nho rieng cho module dashboard.

// Gioi han so khoa hoc gan day hien thi
export function limitCourses(courses: DashboardCourse[]): DashboardCourse[] {
  return courses.slice(0, MAX_RECENT_COURSES);
}

// Gioi han so thong bao hien thi
export function limitNotices(notices: DashboardNotice[]): DashboardNotice[] {
  return notices.slice(0, MAX_NOTICES);
}

// Loi chao theo thoi gian trong ngay (tieng Viet)
export function greetingByHour(date = new Date()): string {
  const hour = date.getHours();
  if (hour < 11) return "Chào buổi sáng";
  if (hour < 14) return "Chào buổi trưa";
  if (hour < 18) return "Chào buổi chiều";
  return "Chào buổi tối";
}