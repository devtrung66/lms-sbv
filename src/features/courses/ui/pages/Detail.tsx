import type { ReactElement } from "react";
import { useParams } from "react-router-dom";
import { Send } from "lucide-react";
import { PageHeader } from "@/core/ui/layout/PageHeader";
import { ROUTES } from "@/app/router/routes";
import { useCourseDetail } from "../../hooks/useCourseDetail";
import { useCourseMutation } from "../../hooks/useCourseMutation";
import { LessonManager } from "../modules/LessonManager";
import { UploadPanel } from "../modules/UploadPanel";

// Trang chi tiet khoa hoc: danh sach bai hoc + khu vuc tai len + nut xuat ban.
export function CourseDetailPage(): ReactElement {
  const { courseId } = useParams<{ courseId: string }>();
  const { course, lessons, isLoading } = useCourseDetail(courseId ?? null);
  const { publish } = useCourseMutation();

  if (isLoading) {
    return <div className="py-10 text-center text-sm text-ink-muted">Đang tải khóa học...</div>;
  }

  if (!course) {
    return <div className="py-10 text-center text-sm text-ink-muted">Không tìm thấy khóa học</div>;
  }

  return (
    <div>
      <PageHeader
        title={course.title}
        description={course.description}
        breadcrumb={[
          { label: "Trang chủ", to: ROUTES.home },
          { label: "Quản lý khóa học", to: ROUTES.courses },
          { label: course.title },
        ]}
        actions={
          course.status !== "published" && (
            <button
              type="button"
              onClick={() => void publish.mutateAsync(course.id)}
              disabled={publish.isPending}
              className="flex items-center gap-2 rounded-lg bg-brand-500 px-3 py-2 text-sm font-medium text-white hover:bg-brand-600 disabled:opacity-60"
            >
              <Send size={16} /> {publish.isPending ? "Đang xuất bản..." : "Xuất bản"}
            </button>
          )
        }
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_380px]">
        <LessonManager lessons={lessons} />
        <UploadPanel courseId={course.id} />
      </div>
    </div>
  );
}