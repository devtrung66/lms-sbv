import type { ReactElement } from "react";
import { cn } from "@/core/lib/utils";
import { QUESTION_TYPE_LABELS, DIFFICULTY_LABELS, DIFFICULTY_COLORS } from "../../model/constants";
import type { QuestionDifficulty } from "../../model/types";
import type { QuestionType } from "@/features/quiz";

interface QuestionTypeTagProps {
  type: QuestionType;
}

// The hien thi loai cau hoi.
export function QuestionTypeTag({ type }: QuestionTypeTagProps): ReactElement {
  return (
    <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
      {QUESTION_TYPE_LABELS[type]}
    </span>
  );
}

interface DifficultyTagProps {
  difficulty: QuestionDifficulty;
}

// The hien thi do kho cua cau hoi.
export function DifficultyTag({ difficulty }: DifficultyTagProps): ReactElement {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium",
        DIFFICULTY_COLORS[difficulty]
      )}
    >
      {DIFFICULTY_LABELS[difficulty]}
    </span>
  );
}