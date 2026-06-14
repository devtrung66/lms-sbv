import type { ReactElement } from "react";
import { Check } from "lucide-react";
import { cn } from "@/core/lib/utils";

interface PermissionCheckboxProps {
  checked: boolean;
  onToggle: () => void;
  disabled?: boolean;
}

// O tich quyen trong ma tran phan quyen.
export function PermissionCheckbox({
  checked,
  onToggle,
  disabled,
}: PermissionCheckboxProps): ReactElement {
  return (
    <button
      type="button"
      onClick={onToggle}
      disabled={disabled}
      className={cn(
        "flex h-6 w-6 items-center justify-center rounded-md border transition-colors",
        checked
          ? "border-brand-500 bg-brand-500 text-white"
          : "border-slate-300 text-transparent hover:border-brand-400",
        disabled && "cursor-not-allowed opacity-40"
      )}
      aria-label={checked ? "Bỏ quyền" : "Cấp quyền"}
    >
      <Check size={14} />
    </button>
  );
}