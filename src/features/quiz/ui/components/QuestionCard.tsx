import type { ReactElement } from "react";
import { QUESTION_TYPE_LABELS } from "../../model/constants";
import { quizActions } from "../../state/actions";
import { useAnswer } from "../../state/selectors";
import type { Question } from "../../model/types";
import { OptionItem } from "./OptionItem";

interface QuestionCardProps {
  question: Question;
  // Thu tu cau hoi (bat dau tu 1)
  number: number;
}

// The hien thi mot cau hoi va cac lua chon dap an.
export function QuestionCard({ question, number }: QuestionCardProps): ReactElement {
  const answer = useAnswer(question.id);
  const selectedIds = answer?.selectedOptionIds ?? [];
  const multiple = question.type === "multiple_choice";

  // Chon/bo chon mot dap an
  function toggle(optionId: string): void {
    let next: string[];
    if (multiple) {
      // Nhieu lua chon: them hoac bo khoi danh sach
      next = selectedIds.includes(optionId)
        ? selectedIds.filter((id) => id !== optionId)
        : [...selectedIds, optionId];
    } else {
      // Mot lua chon: thay the
      next = [optionId];
    }
    quizActions.answer(question.id, next);
  }

  return (
    <div className="rounded-card border border-slate-200 bg-white p-6 shadow-card">
      <div className="mb-1 text-xs font-medium uppercase tracking-wide text-brand-600">
        Câu {number} · {QUESTION_TYPE_LABELS[question.type]}
      </div>
      <h3 className="mb-4 text-base font-semibold text-ink">{question.content}</h3>

      <div className="space-y-2">
        {question.options.map((option) => (
          <OptionItem
            key={option.id}
            option={option}
            selected={selectedIds.includes(option.id)}
            multiple={multiple}
            onToggle={toggle}
          />
        ))}
      </div>
    </div>
  );
}