import type { ReactElement } from "react";
import { Check } from "lucide-react";
import { cn } from "@/core/lib/utils";
import type { AnswerOption } from "../../model/types";

interface OptionItemProps {
  option: AnswerOption;
  // Da duoc chon hay chua
  selected: boolean;
  // Loai o chon: tron (1 dap an) hay vuong (nhieu dap an)
  multiple: boolean;
  onToggle: (optionId: string) => void;
}

// Mot lua chon dap an trong cau hoi.
export function OptionItem({
  option,
  selected,
  multiple,
  onToggle,
}: OptionItemProps): ReactElement {
  return (
    <button
      type="button"
      onClick={() => onToggle(option.id)}
      className={cn(
        "flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors",
        selected
          ? "border-brand-500 bg-brand-50 text-ink"
          : "border-slate-200 bg-white text-ink hover:border-brand-300"
      )}
    >
      {/* O danh dau chon */}
      <span
        className={cn(
          "flex h-5 w-5 shrink-0 items-center justify-center border",
          multiple ? "rounded-md" : "rounded-full",
          selected ? "border-brand-500 bg-brand-500 text-white" : "border-slate-300"
        )}
      >
        {selected && <Check size={14} />}
      </span>
      <span>{option.content}</span>
    </button>
  );
}