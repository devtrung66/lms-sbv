import type { ReactElement } from "react";
import { PageHeader } from "@/core/ui/layout/PageHeader";
import { ROUTES } from "@/app/router/routes";
import { AnswerEditor } from "../components/AnswerEditor";
import { createEmptyForm } from "../../lib/utils";

// Trang soan cau hoi dang day du (tuy chon, dung khi can trang rieng
// thay vi hop thoai). Hien tai dung lai AnswerEditor de minh hoa.
export function QuestionFormPage(): ReactElement {
  const sample = createEmptyForm();

  return (
    <div>
      <PageHeader
        title="Soạn câu hỏi"
        breadcrumb={[
          { label: "Trang chủ", to: ROUTES.home },
          { label: "Ngân hàng câu hỏi", to: ROUTES.questionBank },
          { label: "Soạn câu hỏi" },
        ]}
      />
      <div className="max-w-2xl rounded-card border border-slate-200 bg-white p-6 shadow-card">
        <p className="mb-4 text-sm text-ink-muted">
          Sử dụng nút "Thêm câu hỏi" ở trang danh sách để mở hộp thoại soạn nhanh.
        </p>
        <AnswerEditor options={sample.options} type="single_choice" onChange={() => {}} />
      </div>
    </div>
  );
}