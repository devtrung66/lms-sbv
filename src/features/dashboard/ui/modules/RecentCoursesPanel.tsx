import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import { limitCourses } from "../../lib/utils";
import type { DashboardCourse } from "../../model/types";
import { MiniCourseCard } from "../components/MiniCourseCard";

interface RecentCoursesPanelProps {
  // Tieu de panel (vd "Khoa hoc dang hoc" hoac "Khoa hoc gan day")
  title: string;
  courses: DashboardCourse[];
  // Hien thi diem thay vi tien do
  showScore?: boolean;
}

// Panel danh sach khoa hoc tren dashboard (dang hoc / gan day).
export function RecentCoursesPanel({
  title,
  courses,
  showScore,
}: RecentCoursesPanelProps): ReactElement {
  const visible = limitCourses(courses);

  return (
    <div className="rounded-card border border-slate-200 bg-white p-5 shadow-card">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-semibold text-ink">{title}</h3>
        <Link to={ROUTES.myCourses} className="text-sm text-brand-600 hover:underline">
          Xem tất cả
        </Link>
      </div>

      {visible.length === 0 ? (
        <p className="py-6 text-center text-sm text-ink-muted">Chưa có khóa học</p>
      ) : (
        <div className="space-y-3">
          {visible.map((course) => (
            <MiniCourseCard key={course.courseId} course={course} showScore={showScore} />
          ))}
        </div>
      )}
    </div>
  );
}