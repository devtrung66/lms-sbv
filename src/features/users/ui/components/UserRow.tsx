import type { ReactElement } from "react";
import { MoreVertical } from "lucide-react";
import { cn } from "@/core/lib/utils";
import { getInitials } from "@/core/lib/utils";
import type { StaffUser } from "../../model/types";
import { StatusBadge } from "./StatusBadge";
import { RoleTag } from "./RoleTag";

interface UserRowProps {
  user: StaffUser;
  // Dang duoc chon (hien o panel ben phai)
  selected?: boolean;
  onSelect: (id: string) => void;
}

// Mot dong trong bang danh sach cong chuc.
export function UserRow({ user, selected, onSelect }: UserRowProps): ReactElement {
  return (
    <tr
      onClick={() => onSelect(user.id)}
      className={cn(
        "cursor-pointer border-b border-slate-100 text-sm transition-colors hover:bg-slate-50",
        selected && "bg-brand-50"
      )}
    >
      <td className="px-4 py-3 font-medium text-ink">{user.staffCode}</td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-xs font-semibold text-brand-700">
            {getInitials(user.fullName)}
          </span>
          <span className="text-ink">{user.fullName}</span>
        </div>
      </td>
      <td className="px-4 py-3 text-ink-muted">{user.department}</td>
      <td className="px-4 py-3 text-ink-muted">{user.position}</td>
      <td className="px-4 py-3 text-ink-muted">{user.email}</td>
      <td className="px-4 py-3"><RoleTag role={user.role} /></td>
      <td className="px-4 py-3"><StatusBadge status={user.status} /></td>
      <td className="px-4 py-3 text-right">
        <button
          type="button"
          className="rounded-lg p-1.5 text-ink-muted hover:bg-slate-100"
          aria-label="Thao tác"
          onClick={(e) => e.stopPropagation()}
        >
          <MoreVertical size={16} />
        </button>
      </td>
    </tr>
  );
}