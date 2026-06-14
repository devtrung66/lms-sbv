import type { ReactElement } from "react";
import { cn } from "@/core/lib/utils";

interface ToggleFieldProps {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}

// Cong tac bat/tat cho mot cau hinh dang boolean.
export function ToggleField({
  label,
  description,
  checked,
  onChange,
}: ToggleFieldProps): ReactElement {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <div>
        <p className="text-sm font-medium text-ink">{label}</p>
        {description && <p className="text-xs text-ink-muted">{description}</p>}
      </div>

      {/* Cong tac truot */}
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={cn(
          "relative h-6 w-11 shrink-0 rounded-full transition-colors",
          checked ? "bg-brand-500" : "bg-slate-300"
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform",
            checked ? "translate-x-5" : "translate-x-0.5"
          )}
        />
      </button>
    </div>
  );
}