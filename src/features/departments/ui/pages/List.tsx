import type { ReactElement } from "react";
import { Plus } from "lucide-react";
import { PageHeader } from "@/core/ui/layout/PageHeader";
import { ROUTES } from "@/app/router/routes";
import { useDepartmentStore } from "../../state/store";
import { DepartmentTable } from "../modules/DepartmentTable";
import { DepartmentFormModal } from "../modules/DepartmentFormModal";

// Trang quan ly phong/ban: bang danh sach + form tao/sua.
export function DepartmentListPage(): ReactElement {
  const openCreate = useDepartmentStore((state) => state.openCreate);

  return (
    <div>
      <PageHeader
        title="Phòng / Ban"
        breadcrumb={[
          { label: "Trang chủ", to: ROUTES.home },
          { label: "Quản trị" },
          { label: "Phòng / Ban" },
        ]}
        actions={
          <button
            type="button"
            onClick={openCreate}
            className="flex items-center gap-2 rounded-lg bg-brand-500 px-3 py-2 text-sm font-medium text-white hover:bg-brand-600"
          >
            <Plus size={16} /> Thêm phòng/ban
          </button>
        }
      />

      <DepartmentTable />
      <DepartmentFormModal />
    </div>
  );
}