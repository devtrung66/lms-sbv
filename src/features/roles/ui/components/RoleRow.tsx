import type { ReactElement } from "react";
import { ShieldCheck, Lock, Trash2 } from "lucide-react";
import { cn } from "@/core/lib/utils";
import { describeRole, canDeleteRole } from "../../lib/utils";
import type { Role } from "../../model/types";

interface RoleRowProps {
  role: Role;
  selected: boolean;
  onSelect: (id: string) => void;
  onDelete: (id: string) => void;
}

// Mot dong vai tro trong danh sach (cot trai trang phan quyen).
// Dung <div> thay vi <button> de tranh long button trong button (a11y).
export function RoleRow({ role, selected, onSelect, onDelete }: RoleRowProps): ReactElement {
  const deletable = canDeleteRole(role);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onSelect(role.id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onSelect(role.id);
      }}
      className={cn(
        "flex w-full cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-left transition-colors",
        selected ? "border-brand-500 bg-brand-50" : "border-slate-200 hover:bg-slate-50"
      )}
    >
      <ShieldCheck size={18} className="shrink-0 text-brand-600" />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="truncate text-sm font-semibold text-ink">{role.name}</p>
          {role.isSystem && <Lock size={12} className="text-ink-muted" />}
        </div>
        <p className="text-xs text-ink-muted">{describeRole(role)}</p>
      </div>
      {deletable && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(role.id);
          }}
          className="rounded-lg p-1.5 text-red-500 hover:bg-red-50"
          aria-label="Xóa vai trò"
        >
          <Trash2 size={16} />
        </button>
      )}
    </div>
  );
}