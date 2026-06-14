import type { ReactElement } from "react";
import { PageHeader } from "@/core/ui/layout/PageHeader";
import { ROUTES } from "@/app/router/routes";
import { CourseEditor } from "../modules/CourseEditor";

// Trang tao khoa hoc moi (form thong tin co ban truoc khi them bai hoc).
export function CourseFormPage(): ReactElement {
  return (
    <div>
      <PageHeader
        title="Tạo khóa học"
        breadcrumb={[
          { label: "Trang chủ", to: ROUTES.home },
          { label: "Quản lý khóa học", to: ROUTES.courses },
          { label: "Tạo mới" },
        ]}
      />
      <div className="max-w-2xl">
        <CourseEditor />
      </div>
    </div>
  );
}