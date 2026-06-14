import type { ReactElement } from "react";
import { Plus, Trash2, Check } from "lucide-react";
import { cn } from "@/core/lib/utils";
import { MIN_OPTIONS, MAX_OPTIONS } from "../../model/constants";
import { createEmptyOption, enforceSingleCorrect } from "../../lib/utils";
import type { BankAnswerOption } from "../../model/types";
import type { QuestionType } from "@/features/quiz";

interface AnswerEditorProps {
  options: BankAnswerOption[];
  type: QuestionType;
  onChange: (options: BankAnswerOption[]) => void;
}

// Khu vuc soan dap an cho cau hoi: them/xoa dap an, danh dau dap an dung.
export function AnswerEditor({ options, type, onChange }: AnswerEditorProps): ReactElement {
  // Doi noi dung mot dap an
  function updateContent(id: string, content: string): void {
    onChange(options.map((o) => (o.id === id ? { ...o, content } : o)));
  }

  // Danh dau dap an dung (ap dung quy tac theo loai cau hoi)
  function toggleCorrect(id: string): void {
    onChange(enforceSingleCorrect(options, type, id));
  }

  // Them dap an moi
  function addOption(): void {
    if (options.length < MAX_OPTIONS) {
      onChange([...options, createEmptyOption()]);
    }
  }

  // Xoa dap an
  function removeOption(id: string): void {
    if (options.length > MIN_OPTIONS) {
      onChange(options.filter((o) => o.id !== id));
    }
  }

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-ink">Đáp án (bấm dấu tích để chọn đáp án đúng)</p>

      {options.map((option, index) => (
        <div key={option.id} className="flex items-center gap-2">
          {/* Nut danh dau dap an dung */}
          <button
            type="button"
            onClick={() => toggleCorrect(option.id)}
            className={cn(
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border",
              option.isCorrect
                ? "border-green-500 bg-green-500 text-white"
                : "border-slate-300 text-transparent hover:border-green-400"
            )}
            aria-label="Đánh dấu đáp án đúng"
          >
            <Check size={16} />
          </button>

          {/* Noi dung dap an */}
          <input
            value={option.content}
            onChange={(e) => updateContent(option.id, e.target.value)}
            placeholder={`Đáp án ${index + 1}`}
            className="form-input"
          />

          {/* Nut xoa */}
          <button
            type="button"
            onClick={() => removeOption(option.id)}
            disabled={options.length <= MIN_OPTIONS}
            className="shrink-0 rounded-lg p-2 text-red-500 hover:bg-red-50 disabled:opacity-30"
            aria-label="Xóa đáp án"
          >
            <Trash2 size={16} />
          </button>
        </div>
      ))}

      {/* Them dap an */}
      {options.length < MAX_OPTIONS && (
        <button
          type="button"
          onClick={addOption}
          className="flex items-center gap-1 text-sm text-brand-600 hover:underline"
        >
          <Plus size={16} /> Thêm đáp án
        </button>
      )}
    </div>
  );
}