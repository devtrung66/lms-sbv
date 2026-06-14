import type { ReactElement } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { truncate } from "@/core/lib/utils";
import type { BankQuestion } from "../../model/types";
import { QuestionTypeTag, DifficultyTag } from "./QuestionTypeTag";

interface QuestionRowProps {
  question: BankQuestion;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

// Mot dong cau hoi trong bang ngan hang cau hoi.
export function QuestionRow({ question, onEdit, onDelete }: QuestionRowProps): ReactElement {
  return (
    <tr className="border-b border-slate-100 text-sm">
      <td className="px-4 py-3">
        <p className="text-ink">{truncate(question.content, 80)}</p>
        <p className="mt-1 text-xs text-ink-muted">{question.options.length} đáp án</p>
      </td>
      <td className="px-4 py-3 text-ink-muted">{question.topic}</td>
      <td className="px-4 py-3"><QuestionTypeTag type={question.type} /></td>
      <td className="px-4 py-3"><DifficultyTag difficulty={question.difficulty} /></td>
      <td className="px-4 py-3 text-center text-ink-muted">{question.points}</td>
      <td className="px-4 py-3">
        <div className="flex items-center justify-end gap-1">
          <button
            type="button"
            onClick={() => onEdit(question.id)}
            className="rounded-lg p-1.5 text-ink-muted hover:bg-slate-100"
            aria-label="Sửa câu hỏi"
          >
            <Pencil size={16} />
          </button>
          <button
            type="button"
            onClick={() => onDelete(question.id)}
            className="rounded-lg p-1.5 text-red-500 hover:bg-red-50"
            aria-label="Xóa câu hỏi"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
}