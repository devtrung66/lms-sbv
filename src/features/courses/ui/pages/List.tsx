import type { ReactElement } from "react";
import { Plus, Search } from "lucide-react";
import { PageHeader } from "@/core/ui/layout/PageHeader";
import { ROUTES } from "@/app/router/routes";
import { courseActions } from "../../state/actions";
import { useCourseFilters } from "../../state/selectors";
import { COURSE_STATUS_LABELS } from "../../model/constants";
import { CourseTable } from "../modules/CourseTable";
import type { CourseStatus } from "../../model/types";

// Trang quan ly khoa hoc: bo loc + luoi the khoa hoc.
export function CourseListPage(): ReactElement {
  const filters = useCourseFilters();

  return (
    <div>
      <PageHeader
        title="Quản lý khóa học"
        breadcrumb={[
          { label: "Trang chủ", to: ROUTES.home },
          { label: "Quản trị" },
          { label: "Khóa học" },
        ]}
        actions={
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg bg-brand-500 px-3 py-2 text-sm font-medium text-white hover:bg-brand-600"
          >
            <Plus size={16} /> Tạo khóa học
          </button>
        }
      />

      {/* Bo loc */}
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <select
          value={filters.status ?? ""}
          onChange={(e) =>
            courseActions.filterByStatus((e.target.value || undefined) as CourseStatus | undefined)
          }
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-ink outline-none focus:border-brand-500"
        >
          <option value="">Tất cả trạng thái</option>
          {(Object.keys(COURSE_STATUS_LABELS) as CourseStatus[]).map((s) => (
            <option key={s} value={s}>{COURSE_STATUS_LABELS[s]}</option>
          ))}
        </select>

        <div className="ml-auto flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
          <Search size={16} className="text-slate-400" />
          <input
            type="text"
            defaultValue={filters.search}
            onChange={(e) => courseActions.search(e.target.value)}
            placeholder="Tìm khóa học..."
            className="w-56 bg-transparent text-sm text-ink outline-none placeholder:text-slate-400"
          />
        </div>
      </div>

      <CourseTable />
    </div>
  );
}