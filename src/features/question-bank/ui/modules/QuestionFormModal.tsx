import { useState, useEffect, type ReactElement } from "react";
import { X, Save } from "lucide-react";
import { QUESTION_TYPE_LABELS, DIFFICULTY_OPTIONS } from "../../model/constants";
import { questionFormSchema } from "../../model/schemas";
import { createEmptyForm } from "../../lib/utils";
import { useQuestionMutation } from "../../hooks/useQuestionMutation";
import { useFormOpen, useEditingId } from "../../state/selectors";
import { questionBankActions } from "../../state/actions";
import type { QuestionFormValues } from "../../model/types";
import type { QuestionType } from "@/features/quiz";
import { AnswerEditor } from "../components/AnswerEditor";

// Hop thoai tao/sua cau hoi (gom soan dap an + danh dau dap an dung).
export function QuestionFormModal(): ReactElement | null {
  const open = useFormOpen();
  const editingId = useEditingId();
  const { create, update } = useQuestionMutation();
  const [values, setValues] = useState<QuestionFormValues>(createEmptyForm());
  const [error, setError] = useState<string | null>(null);

  // Reset form moi khi mo (tao moi). Voi sua, du lieu se nap o buoc tich hop.
  useEffect(() => {
    if (open && !editingId) {
      setValues(createEmptyForm());
      setError(null);
    }
  }, [open, editingId]);

  if (!open) return null;

  // Cap nhat mot truong
  function setField<K extends keyof QuestionFormValues>(
    key: K,
    value: QuestionFormValues[K]
  ): void {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  // Luu cau hoi
  async function handleSave(): Promise<void> {
    const result = questionFormSchema.safeParse(values);
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Dữ liệu không hợp lệ");
      return;
    }
    setError(null);
    if (editingId) {
      await update.mutateAsync({ id: editingId, values });
    } else {
      await create.mutateAsync(values);
    }
  }

  const saving = create.isPending || update.isPending;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-card bg-white p-6 shadow-card">
        {/* Tieu de */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-ink">
            {editingId ? "Sửa câu hỏi" : "Thêm câu hỏi"}
          </h2>
          <button
            type="button"
            onClick={questionBankActions.closeForm}
            className="rounded-lg p-1 text-ink-muted hover:bg-slate-100"
          >
            <X size={18} />
          </button>
        </div>

        <div className="space-y-4">
          {/* Noi dung cau hoi */}
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-ink">Nội dung câu hỏi</span>
            <textarea
              value={values.content}
              onChange={(e) => setField("content", e.target.value)}
              rows={2}
              className="form-input resize-none"
            />
          </label>

          {/* Loai + do kho + diem */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <label className="block">
              <span className="mb-1 block text-sm font-medium text-ink">Loại câu hỏi</span>
              <select
                value={values.type}
                onChange={(e) => setField("type", e.target.value as QuestionType)}
                className="form-input"
              >
                {(Object.keys(QUESTION_TYPE_LABELS) as QuestionType[]).map((t) => (
                  <option key={t} value={t}>{QUESTION_TYPE_LABELS[t]}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium text-ink">Độ khó</span>
              <select
                value={values.difficulty}
                onChange={(e) => setField("difficulty", e.target.value as never)}
                className="form-input"
              >
                {DIFFICULTY_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium text-ink">Điểm</span>
              <input
                type="number"
                min={1}
                value={values.points}
                onChange={(e) => setField("points", Number(e.target.value))}
                className="form-input"
              />
            </label>
          </div>

          {/* Chu de */}
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-ink">Chủ đề</span>
            <input
              value={values.topic}
              onChange={(e) => setField("topic", e.target.value)}
              placeholder="Vd: Nghiệp vụ thanh tra"
              className="form-input"
            />
          </label>

          {/* Soan dap an */}
          <AnswerEditor
            options={values.options}
            type={values.type}
            onChange={(options) => setField("options", options)}
          />

          {error && <p className="text-sm text-danger">{error}</p>}
        </div>

        {/* Nut hanh dong */}
        <div className="mt-6 flex justify-end gap-2">
          <button
            type="button"
            onClick={questionBankActions.closeForm}
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm text-ink hover:bg-slate-50"
          >
            Hủy
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600 disabled:opacity-60"
          >
            <Save size={16} /> {saving ? "Đang lưu..." : "Lưu câu hỏi"}
          </button>
        </div>
      </div>
    </div>
  );
}