import type { ReactElement } from "react";
import { useCourseList } from "../../hooks/useCourseList";
import { courseActions } from "../../state/actions";
import { CourseCard } from "../components/CourseCard";

// Luoi khoa hoc: tu lay du lieu qua hook, hien thi dang the.
export function CourseTable(): ReactElement {
  const { data, isLoading } = useCourseList();

  if (isLoading) {
    return (
      <div className="py-10 text-center text-sm text-ink-muted">Đang tải khóa học...</div>
    );
  }

  if (!data || data.items.length === 0) {
    return (
      <div className="py-10 text-center text-sm text-ink-muted">
        Chưa có khóa học nào
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.items.map((course) => (
        <CourseCard key={course.id} course={course} onClick={courseActions.selectCourse} />
      ))}
    </div>
  );
}