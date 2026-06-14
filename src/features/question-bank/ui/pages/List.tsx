import type { ReactElement } from "react";
import { Plus } from "lucide-react";
import { PageHeader } from "@/core/ui/layout/PageHeader";
import { ROUTES } from "@/app/router/routes";
import { useQuestionList } from "../../hooks/useQuestionList";
import { questionBankActions } from "../../state/actions";
import { QuestionFilters } from "../modules/QuestionFilters";
import { QuestionTable } from "../modules/QuestionTable";
import { QuestionFormModal } from "../modules/QuestionFormModal";

// Trang ngan hang cau hoi: bo loc + bang + form tao/sua.
export function QuestionBankListPage(): ReactElement {
  const { topics } = useQuestionList();

  return (
    <div>
      <PageHeader
        title="Ngân hàng câu hỏi"
        breadcrumb={[
          { label: "Trang chủ", to: ROUTES.home },
          { label: "Quản trị" },
          { label: "Ngân hàng câu hỏi" },
        ]}
        actions={
          <button
            type="button"
            onClick={questionBankActions.create}
            className="flex items-center gap-2 rounded-lg bg-brand-500 px-3 py-2 text-sm font-medium text-white hover:bg-brand-600"
          >
            <Plus size={16} /> Thêm câu hỏi
          </button>
        }
      />

      <div className="mb-4">
        <QuestionFilters topics={topics} />
      </div>

      <QuestionTable />
      <QuestionFormModal />
    </div>
  );
}