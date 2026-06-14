import type { ReactElement } from "react";
import { useQuestionList } from "../../hooks/useQuestionList";
import { useQuestionMutation } from "../../hooks/useQuestionMutation";
import { questionBankActions } from "../../state/actions";
import { QuestionRow } from "../components/QuestionRow";

// Tieu de cot bang ngan hang cau hoi
const COLUMNS = ["Nội dung câu hỏi", "Chủ đề", "Loại", "Độ khó", "Điểm", "Thao tác"];

// Bang ngan hang cau hoi: tu lay du lieu, ho tro sua/xoa.
export function QuestionTable(): ReactElement {
  const { data, isLoading } = useQuestionList();
  const { remove } = useQuestionMutation();

  // Xac nhan truoc khi xoa
  function handleDelete(id: string): void {
    if (window.confirm("Bạn có chắc muốn xóa câu hỏi này?")) {
      void remove.mutateAsync(id);
    }
  }

  return (
    <div className="overflow-x-auto rounded-card border border-slate-200 bg-white shadow-card">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-slate-200 text-left text-xs uppercase tracking-wide text-ink-muted">
            {COLUMNS.map((col) => (
              <th key={col} className="px-4 py-3 font-semibold">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <td colSpan={COLUMNS.length} className="px-4 py-10 text-center text-sm text-ink-muted">
                Đang tải câu hỏi...
              </td>
            </tr>
          )}
          {!isLoading && data?.items.length === 0 && (
            <tr>
              <td colSpan={COLUMNS.length} className="px-4 py-10 text-center text-sm text-ink-muted">
                Chưa có câu hỏi nào
              </td>
            </tr>
          )}
          {data?.items.map((question) => (
            <QuestionRow
              key={question.id}
              question={question}
              onEdit={questionBankActions.edit}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}